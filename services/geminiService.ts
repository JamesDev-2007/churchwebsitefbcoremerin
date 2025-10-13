
// FIX: Create file to provide AI services. This resolves module not found errors.
import { GoogleGenAI, GenerateContentResponse, Content, Type } from "@google/genai";
import type { Sermon, QuizQuestion } from '../types';
import { premadeQuizQuestions } from '../data/mockData';

// --- Gemini AI Setup ---
const GEMINI_API_KEY = process.env.API_KEY;
if (!GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY environment variable not set. AI features will be disabled.");
}
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY! });
const chatbotModel = 'gemini-2.5-flash';


// A system instruction to guide the chatbot's personality and knowledge base.
const systemInstruction = `You are FBC AI, a friendly and knowledgeable Spiritual Growth Assistant for the First Baptist Church Itire.
Your goal is to provide information about the church and help users with their spiritual journey in a warm, welcoming, and respectful tone.

**Your Capabilities:**

1.  **Church Information:** Answer questions using the following details. If you don't know, politely suggest contacting the church.
    - Church Name: First Baptist Church Itire
    - Founded: 1970
    - Mission: To love God, love people, and make disciples of Jesus Christ.
    - Vision: To be a transformative presence in our community, known for our authentic faith, compassionate outreach, and commitment to biblical truth.
    - Core Beliefs: We believe in the Holy Trinity, the divinity of Jesus Christ, and the authority of the Bible as the inspired Word of God.
    - Pastor: Rev. Dr. S.O. Afolabi
    - Address: 12 Oremerin Street, Ehin-Iga, Itire, Lagos, Nigeria
    - Service Time: Sundays at 10:00 AM
    - Contact Email: fbcitire@gmail.com
    - Contact Phone: +234 123 456 7890
    - Ministries: Youth Ministry, Women's Fellowship, Men's Group, Music & Worship Team.

2.  **Biblical Knowledge:** You have deep knowledge of the Holy Bible. When asked a question about scripture, characters, or events, provide a clear answer and **always cite the relevant Bible verse(s)** (e.g., "As it says in John 3:16...").

3.  **Devotional Generation:** If a user asks for a devotional, provide a short, meaningful one. It must include:
    - A key Bible verse with its reference.
    - A brief reflection (2-4 sentences) on the verse's meaning and application.
    - A concluding short prayer or a thought-provoking question.

4.  **Spiritual Guidance:** For questions about faith, spiritual growth, confusion, or doubt, respond with empathy, wisdom, and encouragement. Base your answers on biblical principles and examples. Gently remind users that while you are a helpful tool, deep personal matters are best discussed with our pastors.

**General Instructions:**
- When asked for your identity, introduce yourself as FBC AI, a Spiritual Growth Assistant.
- Format your responses for clarity. Use markdown for bolding (**bold**). Do not use underline.
- Keep answers concise but informative.
`;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// A robust function that attempts to call the Gemini API with retries
// and returns a hardcoded value if the service is unavailable.
async function callGeminiWithRetries<T>(
    geminiCall: () => Promise<T>,
    fallback: T,
    errorMessage: string,
    maxRetries = 3
): Promise<T> {
    if (GEMINI_API_KEY) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await geminiCall(); // Gemini Success
            } catch (error: any) {
                const isRateLimitError = error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED');

                if (isRateLimitError) {
                    if (attempt < maxRetries) {
                        const delay = 1000 * Math.pow(2, attempt - 1);
                        console.warn(`Attempt ${attempt}: Gemini rate limit error in "${errorMessage}". Retrying in ${delay / 1000}s...`);
                        await sleep(delay);
                    } else {
                        // All retries for rate limit error are exhausted
                        console.warn(`All Gemini rate limit attempts failed for "${errorMessage}". Using fallback.`, error);
                    }
                } else {
                    // Non-retriable error
                    console.error(`Non-retriable Gemini error in "${errorMessage}". Using fallback.`, error);
                    break; // break loop and go to fallback
                }
            }
        }
    } else {
        console.warn('GEMINI_API_KEY not found. Skipping Gemini call.');
    }

    // Return Hardcoded Fallback
    console.warn(`[Fallback] Gemini AI failed for "${errorMessage}". Using default content.`);
    return fallback;
}


// --- PUBLIC API FUNCTIONS ---

export const getChatbotResponse = async (history: Content[], newMessage: string): Promise<string> => {
  const fallbackResponse = "I'm sorry, our AI services are currently unavailable. Please try again in a moment.";

  const geminiCall = async (): Promise<string> => {
      const response: GenerateContentResponse = await ai.models.generateContent({
          model: chatbotModel,
          contents: [...history, { role: 'user', parts: [{ text: newMessage }] }],
          config: { systemInstruction: systemInstruction, temperature: 0.7, topP: 1, topK: 32 }
      });
      return response.text ?? fallbackResponse;
  };
  
  return callGeminiWithRetries(geminiCall, fallbackResponse, "Error getting chatbot response");
};

export const getDailyScripture = async (): Promise<string> => {
    const fallbackScripture = "'The Lord is my shepherd; I shall not want.' - Psalm 23:1||This verse is a comforting reminder that in all circumstances, God provides for our needs.";
    
    const geminiCall = async (): Promise<string> => {
        const response = await ai.models.generateContent({
            model: chatbotModel,
            contents: "Provide a single, encouraging Bible verse (including reference) and a short, one-sentence devotional thought based on it. Separate the verse and the thought with '||'. Example: 'For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.' - Jeremiah 29:11||This powerful promise reminds us that God's plan for our lives is filled with hope, even when we can't see the path ahead.",
            config: { temperature: 0.9 }
        });
        return response.text ?? '';
    };

    return callGeminiWithRetries(geminiCall, fallbackScripture, "Error fetching daily scripture");
};


export const findRelatedSermons = async (sermons: Sermon[], searchTerm: string): Promise<string[]> => {
    const sermonData = sermons.map(s => `ID: ${s.id}, Title: "${s.title}", Description: "${s.description}", Tags: [${s.tags.join(', ')}]`).join('\n');

    const localSearchFallback = () => {
        console.warn("[Fallback] Using local text search for sermons.");
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return sermons
            .filter(s =>
                s.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                s.description.toLowerCase().includes(lowerCaseSearchTerm) ||
                s.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
            )
            .map(sermon => sermon.id);
    };

    const geminiCall = async (): Promise<string[]> => {
        const prompt = `
            You are a helpful church assistant. Your task is to find sermons related to a user's search query from the provided list.
            Analyze the user's query and the sermon data (title, description, tags).
            Return a JSON array of the string IDs for the most relevant sermons. Return up to 5 relevant sermon IDs.
            If no sermons are relevant, return an empty array.
            Only return the JSON array, nothing else.

            Sermon List:\n${sermonData}\n\nUser Query: "${searchTerm}"
        `;
        const response = await ai.models.generateContent({
            model: chatbotModel,
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
        });
        const jsonText = response.text?.trim();
        return jsonText ? JSON.parse(jsonText) : [];
    };

    return callGeminiWithRetries(geminiCall, localSearchFallback(), "Error finding related sermons with AI");
};

export const getScriptureEncouragement = async (prayerRequest: string): Promise<string> => {
    const fallbackResponse = "We hear your request. Remember the words from Psalm 46:1: 'God is our refuge and strength, an ever-present help in trouble.' May you find peace and comfort in knowing He is with you always.";
    
    const geminiCall = async (): Promise<string> => {
        const prompt = `
            A person has submitted a prayer request. Your task is to respond with a comforting and encouraging message based on Christian scripture.
            1. Start with a warm, empathetic opening.
            2. Provide one or two relevant Bible verses that speak to their situation. Include the reference (e.g., Psalm 23:4).
            3. Write a short, encouraging paragraph (2-3 sentences) explaining how those verses apply and offering a message of hope.
            4. Do not say "I will pray for you" as you are an AI. Instead, say something like "May you find comfort in God's word."

            Prayer Request: "${prayerRequest}"
        `;
        const response = await ai.models.generateContent({
            model: chatbotModel,
            contents: prompt,
            config: { temperature: 0.8 }
        });
        return response.text ?? fallbackResponse;
    };
    
    return callGeminiWithRetries(geminiCall, fallbackResponse, "Error getting scripture encouragement");
};

export const generateMultipageDevotional = async (): Promise<string> => {
    const fallbackResponse = "There was an error generating the devotional. Please check your connection and try again.";
    const topics = ['Grace', 'Forgiveness', 'Finding Purpose', 'Overcoming Fear', 'The Power of Prayer', 'Living with Hope', 'The Joy of Serving', 'Trusting God in Trials'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const prompt = `
        Topic: "${randomTopic}"

        **Formatting and Content Requirements:**

        1.  **Header**: At the very top, include the following, each on a new line (as plain text, not markdown headers):
            - First Baptist Church Itire
            - Pastor: Rev. Dr. S.O. Afolabi
            - Date: ${currentDate}

        2.  **Structure**: The devotional should have a main title and at least 4 distinct sections with markdown headers (e.g., \`## Introduction\`).
            - **Main Title**: An engaging title for the devotional (e.g., \`# The Unshakeable Anchor of Hope\`).
            - **Introduction**: A compelling opening that introduces the topic.
            - **Scriptural Deep Dive**: Explore 2-3 key Bible passages related to the topic. Quote the verses (using blockquotes \`>\`) with references (e.g., **John 3:16**) and provide insightful exegesis.
            - **Practical Application**: Discuss how to apply these biblical truths to everyday life. Use bullet points for concrete examples or steps.
            - **Closing Prayer**: A heartfelt prayer that summarizes the devotional's theme.

        3.  **Tone**: Warm, pastoral, and encouraging. It should feel like a personal message from a pastor.
        4.  **Length**: The total content should be substantial, around 800-1000 words.

        Please generate the full text of the devotional in Markdown based on these instructions.
    `;
    
    const geminiCall = async (): Promise<string> => {
        const response = await ai.models.generateContent({
            model: chatbotModel,
            contents: prompt,
            config: { 
                systemInstruction: "You are a theological writer for First Baptist Church Itire. Your task is to generate a comprehensive, multi-page devotional on a spiritual topic. The devotional must be well-structured, theologically sound, and deeply encouraging. The response should be in Markdown format.",
                temperature: 0.75 
            }
        });
        return response.text ?? fallbackResponse;
    };
    
    return callGeminiWithRetries(geminiCall, fallbackResponse, "Error generating devotional");
};

// Helper to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const generateQuizQuestions = async (): Promise<QuizQuestion[]> => {
    // Fallback: shuffle premade questions and take the first 10
    const fallbackQuestions = shuffleArray(premadeQuizQuestions).slice(0, 10);

    const geminiCall = async (): Promise<QuizQuestion[]> => {
        const prompt = `
            You are a Bible scholar creating a fun and challenging Bible quiz.
            Generate exactly 10 unique, multiple-choice Bible quiz questions.
            Include a mix of two types of questions:
            1. Standard knowledge questions (e.g., "Who was the first king of Israel?").
            2. "Identify the reference" questions (e.g., "In which book is the story of David and Goliath found?").

            For each question, provide 4 options, and one must be the correct answer. The options for reference questions should be plausible choices.
            Return the result as a JSON array of objects, where each object has "question", "options" (an array of 4 strings), and "correctAnswer" (a string).
            Do not include any other text or explanation outside of the JSON array.
        `;

        const response = await ai.models.generateContent({
            model: chatbotModel,
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            question: { type: Type.STRING },
                            options: { type: Type.ARRAY, items: { type: Type.STRING } },
                            correctAnswer: { type: Type.STRING }
                        },
                        required: ['question', 'options', 'correctAnswer']
                    }
                }
            }
        });

        const jsonText = response.text?.trim();
        const parsedJson = jsonText ? JSON.parse(jsonText) : [];

        // Validate the response format
        if (Array.isArray(parsedJson) && parsedJson.length > 0 && 'question' in parsedJson[0]) {
             return parsedJson.slice(0, 10); // Ensure exactly 10 questions
        }
        // If validation fails, throw an error to trigger the fallback
        throw new Error("Invalid format from Gemini API");
    }

    return callGeminiWithRetries(geminiCall, fallbackQuestions, "Error generating quiz questions");
};