import { Sermon, Event, BlogPost, Ministry, QuizQuestion, Leader, HistoryMilestone, GalleryImage, Post, AnsweredQuestion, RecommendedResource, SpiritualChallenge, GuidedPrayer, BibleStudy } from '../types';

export const sermons: Sermon[] = [
  { id: '1', title: 'The Power of Faith', preacher: 'Rev. Dr. S.O. Afolabi', date: '2024-07-21', description: 'Discover how unwavering faith can move mountains in your life.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', audioUrl: 'audio1.mp3', tags: ['faith', 'hope'] },
  { id: '2', title: 'Living in God\'s Love', preacher: 'Rev. Dr. S.O. Afolabi', date: '2024-07-14', description: 'Understanding the depths of God\'s unconditional love for us.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', audioUrl: 'audio2.mp3', tags: ['love', 'grace'] },
  { id: '3', title: 'A Hope That Anchors', preacher: 'Guest Speaker', date: '2024-07-07', description: 'Finding a steadfast hope in turbulent times.', audioUrl: 'audio3.mp3', tags: ['hope', 'perseverance'] },
  { id: '4', title: 'The Grace of Forgiveness', preacher: 'Rev. Dr. S.O. Afolabi', date: '2024-06-30', description: 'Exploring the freedom that comes from giving and receiving forgiveness.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', audioUrl: 'audio4.mp3', tags: ['forgiveness', 'grace', 'love'] },
 { id: '5', title: 'Breaking Generational', preacher: 'Rev. Dr. S.O. Afolabi', date: '2024-07-21', description: 'Discover how unwavering faith can move mountains in your life.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', audioUrl: 'audio1.mp3', tags: ['faith', 'hope'] },
  { id: '6', title: 'Living in God\'s Love', preacher: 'Rev. Dr. S.O. Afolabi', date: '2024-07-14', description: 'Understanding the depths of God\'s unconditional love for us.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', audioUrl: 'audio2.mp3', tags: ['love', 'grace'] },
  { id: '7', title: 'A Hope That Anchors', preacher: 'Guest Speaker', date: '2024-07-07', description: 'Finding a steadfast hope in turbulent times.', audioUrl: 'audio3.mp3', tags: ['hope', 'perseverance'] },
  { id: '8', title: 'The Grace of Forgiveness', preacher: 'Rev. Dr. S.O. Afolabi', date: '2024-06-30', description: 'Exploring the freedom that comes from giving and receiving forgiveness.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', audioUrl: 'audio4.mp3', tags: ['forgiveness', 'grace', 'love'] },
];
export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Summer Picnic',
    date: '2024-08-10',
    time: '12:00 PM',
    location: 'Central Park, Lagos',
    description: 'Join us for a day of fun, food, and fellowship at our annual church picnic. There will be games for all ages, a barbecue lunch, and a time of worship together in nature.',
    category: 'Special Event',
    imageUrl: 'https://picsum.photos/800/400?random=10',
    rsvpLink: '#'
  },
  {
    id: '2',
    title: 'Youth Night - Ignite',
    date: '2024-08-16',
    time: '7:00 PM',
    location: 'Church Hall',
    description: 'A special night for our youth with exciting games, live worship from the youth band, and a powerful message on finding your purpose.',
    category: 'Departmental Meetings/Programs',
    imageUrl: 'https://picsum.photos/800/400?random=11',
  },
  {
    id: '3',
    title: 'Women\'s Conference - Flourish',
    date: '2024-09-05',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Sanctuary',
    description: 'A day of empowerment and spiritual growth for all women. Featuring guest speaker Dr. Anita Grace and worship sessions led by Melody Richards.',
    category: 'Special Event',
    imageUrl: 'https://picsum.photos/800/400?random=12',
    guestSpeakers: ['Dr. Anita Grace'],
    rsvpLink: '#'
  },
  // --- Recurring Events ---
  // Sunday
  {
    id: 'sun-english-service',
    title: 'English Service',
    date: '2024-01-07',
    time: '7:20 AM - 9:00 AM',
    location: 'Main Sanctuary',
    description: 'Join us for our weekly English-language worship service.',
    category: 'Regular Service',
    isRecurring: true,
    recurringDay: 1 // Sunday
  },
  {
    id: 'sun-sunday-school',
    title: 'Sunday School',
    date: '2024-01-07',
    time: '9:00 AM - 9:45 AM',
    location: 'Classrooms',
    description: 'Bible classes for all age groups to grow in faith and knowledge.',
    category: 'Regular Service',
    isRecurring: true,
    recurringDay: 1// Sunday
  },
  {
    id: 'sun-dtm',
    title: 'DTM',
    date: '2024-01-07',
    time: '10:00 AM - 10:30 AM',
    location: 'Main Sanctuary',
    description: 'Discipleship Training Ministry session.',
    category: 'Regular Service',
    isRecurring: true,
    recurringDay: 1 // Sunday
  },
  {
    id: 'sun-yoruba-service',
    title: 'Yoruba Service',
    date: '2024-01-07',
    time: '10:30 AM - 12:30 PM',
    location: 'Main Sanctuary',
    description: 'Join us for our weekly Yoruba-language worship service.',
    category: 'Regular Service',
    isRecurring: true,
    recurringDay: 1 // Sunday
  },
  // Monday
  {
    id: 'mon-victory-hour',
    title: 'Victory Hour',
    date: '2024-01-01',
    time: '9:00 AM - 11:00 AM',
    location: 'Fellowship Hall',
    description: 'Start the week with a powerful prayer session.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 2 // Monday
  },
  {
    id: 'mon-bsf-meeting',
    title: 'BSF Meeting',
    date: '2024-01-01',
    time: '5:00 PM - 6:00 PM',
    location: 'Fellowship Hall',
    description: 'Baptist Student Fellowship meeting.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 2 // Monday
  },
  {
    id: 'mon-lydia-meeting',
    title: 'Lydia Meeting',
    date: '2024-01-01',
    time: '6:00 PM - 7:30 PM',
    location: 'Fellowship Hall',
    description: 'Meeting for the Lydia Auxiliary group.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 2 // Monday
  },
  // Tuesday
  {
    id: 'tue-bible-study',
    title: 'Bible Study',
    date: '2024-01-02',
    time: '6:00 PM - 8:00 PM',
    location: 'Fellowship Hall',
    description: 'Dive deeper into the Word of God with our interactive weekly Bible study.',
    category: 'Regular Service',
    isRecurring: true,
    recurringDay: 3// Tuesday
  },
  // Wednesday
  {
    id: 'wed-mmu-wmu',
    title: 'MMU & WMU Meeting',
    date: '2024-01-03',
    time: '6:00 PM - 7:00 PM',
    location: 'Various Rooms',
    description: 'Weekly meetings for the Men\'s Missionary Union and Women\'s Missionary Union.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 4 // Wednesday
  },
  {
    id: 'wed-prayer-meeting',
    title: 'Prayer Meeting',
    date: '2024-01-03',
    time: '7:00 PM - 8:00 PM',
    location: 'Main Sanctuary',
    description: 'Join us for a time of corporate prayer.',
    category: 'Regular Service',
    isRecurring: true,
    recurringDay: 4 // Wednesday
  },
  // Thursday
  {
    id: 'thu-choir-practice',
    title: 'Choir Practice',
    date: '2024-01-04',
    time: '6:00 PM - 8:00 PM',
    location: 'Choir Stand',
    description: 'Rehearsal for the church choir.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 5 // Thursday
  },
  // Saturday
  {
    id: 'sat-ra-meeting',
    title: 'RA Meeting',
    date: '2024-01-06',
    time: '4:00 PM - 6:00 PM',
    location: 'Fellowship Hall',
    description: 'Royal Ambassadors meeting.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 6 // Saturday
  },
  {
    id: 'sat-ga-meeting',
    title: 'GA Meeting',
    date: '2024-01-06',
    time: '4:00 PM - 6:00 PM',
    location: 'Classrooms',
    description: 'Girls\' Auxiliary meeting.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 6 // Saturday
  },
  {
    id: 'sat-choir-practice',
    title: 'Choir Practice',
    date: '2024-01-06',
    time: '6:00 PM - 8:00 PM',
    location: 'Choir Stand',
    description: 'Rehearsal for the church choir.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 6 // Saturday
  },
  {
    id: 'sat-prep-classes',
    title: 'Sunday/DTM Prep Classes',
    date: '2024-01-06',
    time: '6:00 PM - 8:00 PM',
    location: 'Classrooms',
    description: 'Preparatory classes for Sunday School and DTM teachers.',
    category: 'Departmental Meetings/Programs',
    isRecurring: true,
    recurringDay: 6 // Saturday
  },
  // --- Past Events ---
   {
    id: 'past-1',
    title: 'Easter Crusade 2024',
    date: '2024-03-31',
    time: '10:00 AM',
    location: 'Main Sanctuary',
    description: 'Celebrating the resurrection of our Lord Jesus Christ with a special Easter service and cantata.',
    category: 'Special Event',
    imageUrl: 'https://picsum.photos/800/400?random=13',
  },
  {
    id: 'past-2',
    title: 'Christmas Carol Service 2023',
    date: '2023-12-24',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    description: 'A beautiful evening of carols, scripture readings, and special performances to celebrate the birth of Jesus.',
    category: 'Special Event',
    imageUrl: 'https://picsum.photos/800/400?random=14',
  }
];


export const blogPosts: BlogPost[] = [
  { 
    id: '1', 
    title: 'Finding Joy in the Everyday', 
    author: 'Jane Smith', 
    date: '2024-07-18', 
    excerpt: 'It\'s easy to seek joy in big moments, but what about the small, everyday blessings? Let\'s explore how a heart of gratitude can transform our perspective and draw us closer to God, even on ordinary days.', 
    content: '## The Trap of the Extraordinary\n\nIn our fast-paced world, we are often conditioned to chase the next big thing—the promotion, the vacation, the major life event. While these moments are worth celebrating, they are few and far between. If our joy is solely dependent on them, we will spend most of our lives waiting.\n\nBut what if joy isn\'t found, but cultivated? The Bible teaches us that joy is a fruit of the Spirit (Galatians 5:22-23), meaning it can be present within us regardless of our external circumstances.\n\n### Scripture for Reflection\n\n> "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus."\n> **1 Thessalonians 5:16-18**\n\nThis passage doesn\'t say "feel happy always." It says to *rejoice*. This is an act of will, a choice to focus on God\'s goodness and sovereignty even when things are difficult.\n\n## Practical Steps to Cultivate Joy\n\n* **Start a Gratitude Journal**: Each day, write down three specific things you are thankful for. It could be the warmth of the sun, a kind word from a friend, or the taste of your morning coffee.\n* **Practice Mindfulness**: Pay attention to the present moment. Savor the small pleasures. Notice the beauty in nature around you.\n* **Serve Others**: Shifting our focus from ourselves to the needs of others is a powerful antidote to discontentment. A simple act of kindness can bring immense joy.\n\nBy practicing gratitude and focusing on the present, we begin to see God\'s hand in the details of our lives. Joy becomes not a destination, but a companion on our journey of faith.',
    imageUrl: 'https://picsum.photos/800/400?random=50',
    tags: ['Faith', 'Lifestyle', 'Gratitude'],
    likes: 42,
    featured: true,
  },
  { 
    id: '2', 
    title: 'The Purpose of Prayer', 
    author: 'Rev. Dr. S.O. Afolabi', 
    date: '2024-07-10', 
    excerpt: 'Prayer is more than just a list of requests; it\'s a conversation with our Creator. It aligns our hearts with His will and deepens our relationship with Him in profound ways.', 
    content: '## Beyond the Wishlist\n\nMany of us first learn to pray by asking God for things we need or want. This is a natural and biblical part of prayer, as Philippians 4:6 encourages us to present our requests to God. However, if this is the *only* way we pray, we are missing out on the incredible depth of relationship that prayer offers.\n\nPrayer is communion. It is adoration, confession, thanksgiving, and supplication. It is the spiritual breathing of a Christian, inhaling God\'s grace and exhaling our praise and petitions.\n\n### The Model Prayer\n\nJesus gave us a beautiful model in the Lord\'s Prayer (**Matthew 6:9-13**). It begins with worship ("Our Father in heaven, hallowed be your name"), submits to God\'s will ("your kingdom come, your will be done"), then moves to requests ("Give us today our daily bread"), confession ("forgive us our debts"), and a plea for guidance ("lead us not into temptation").\n\nThis structure teaches us to orient our hearts toward God before we present our needs. It reminds us that prayer is primarily about relationship, not just results.',
    imageUrl: 'https://picsum.photos/800/400?random=51',
    tags: ['Theology', 'Faith', 'Prayer'],
    likes: 78,
  },
  { 
    id: '3', 
    title: 'Serving Our Community', 
    author: 'Deacon James Adeboye', 
    date: '2024-07-02', 
    excerpt: 'Our faith is not meant to be contained within the church walls. As followers of Christ, we are called to be His hands and feet in a world that is hurting. See how we\'re making a difference.', 
    content: '## Faith in Action\n\nJames 2:17 reminds us that "faith by itself, if it is not accompanied by action, is dead." At First Baptist Church Itire, we take this call seriously. Our outreach programs are a core part of our identity and mission.\n\n### Our Local Initiatives\n\n* **Food Pantry**: Every second Saturday of the month, our doors open to provide groceries and essential supplies to families in need in our community.\n* **Youth Mentorship**: We partner with local schools to offer after-school tutoring and mentorship programs, providing a safe and encouraging environment for young people.\n* **Hospital Visitation**: Our team of deacons and volunteers regularly visits local hospitals to pray with patients and offer comfort to their families.\n\nThese are just a few of the ways we are striving to live out the love of Christ in tangible ways. We invite you to join us. Whether you can give your time, resources, or prayers, you can be a part of this transformative work.',
    imageUrl: 'https://picsum.photos/800/400?random=52',
    tags: ['Community', 'Outreach', 'Ministry'],
    likes: 56,
  },
  { 
    id: '4', 
    title: 'Lessons from the Potter', 
    author: 'Rev. Dr. S.O. Afolabi', 
    date: '2024-06-25', 
    excerpt: 'Like clay in the potter\'s hand, God is shaping us into a beautiful vessel for His glory. What can we learn from this process, especially when the shaping feels painful or confusing?', 
    content: '## Molded by the Master\n\nThe prophet Isaiah gives us a powerful metaphor for our relationship with God:\n\n> "Yet you, Lord, are our Father. We are the clay, you are the potter; we are all the work of your hand."\n> **Isaiah 64:8**\n\nThis imagery is both comforting and challenging. It\'s comforting to know that we are in the hands of a master craftsman who has a beautiful design for our lives. It\'s challenging because the process of being shaped involves pressure, cutting, and time on the spinning wheel, which can often feel like trials and hardships.\n\nSometimes, the potter finds a flaw in the clay and has to crush the vessel and start again. This doesn\'t mean the clay is rejected; it means the potter is committed to making something perfect. In the same way, God allows us to go through difficult seasons to refine our character and make us more like Jesus. Trust the process, for the Potter\'s hands are both powerful and gentle.',
    imageUrl: 'https://picsum.photos/800/400?random=53',
    tags: ['Faith', 'Theology', 'Perseverance'],
    likes: 63,
  },
  {
    id: '5',
    title: 'The Power of Christian Fellowship',
    author: 'Jane Smith',
    date: '2024-06-15',
    excerpt: 'In an increasingly isolated world, the concept of a church family is more vital than ever. True Christian fellowship goes beyond Sunday morning greetings; it is the bedrock of our spiritual support system.',
    content: '## More Than a Social Club\n\nChristian fellowship is described in the book of Acts as a community of believers who were devoted to "the apostles’ teaching and to fellowship, to the breaking of bread and to prayer" (Acts 2:42). They shared their lives, supported one another in need, and grew together in their faith.\n\nThis is the model for the church today. We are called to bear one another\'s burdens (Galatians 6:2), encourage one another (1 Thessalonians 5:11), and spur one another on toward love and good deeds (Hebrews 10:24).\n\n### Why We Need Each Other\n\n* **Accountability**: We help each other stay on the right path.\n* **Support**: We carry each other through life\'s storms.\n* **Growth**: We challenge each other to deepen our understanding of God\'s Word.\n* **Witness**: Our unity is a powerful testament to the world of God\'s love.\n\nIf you haven\'t yet, we encourage you to join a small group or ministry. It is in these smaller, more intimate settings that true, life-changing fellowship is often found.',
    imageUrl: 'https://picsum.photos/800/400?random=54',
    tags: ['Community', 'Lifestyle', 'Ministry'],
    likes: 38
  },
   {
    id: '6',
    title: 'Leading with a Servant\'s Heart',
    author: 'Rev. Dr. S.O. Afolabi',
    date: '2024-06-05',
    excerpt: 'Jesus redefined leadership. In a world that often equates leadership with power and authority, Christ showed us that true leadership is found in service.',
    content: '## The Upside-Down Kingdom\n\nWhen His disciples were arguing about who was the greatest, Jesus told them: "Whoever wants to become great among you must be your servant, and whoever wants to be first must be your slave— just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many" (**Matthew 20:26-28**).\n\nThis is the principle of servant leadership. It is not about titles or positions, but about attitude and action. A servant leader looks for the needs of others and seeks to meet them. They lead by example, with humility and integrity.\n\nThis applies to all of us, whether we are leading a family, a ministry, a business, or simply influencing our friends. We are all called to lead with a servant\'s heart, reflecting the ultimate example of Jesus Christ.',
    imageUrl: 'https://picsum.photos/800/400?random=55',
    tags: ['Leadership', 'Theology', 'Ministry'],
    likes: 91,
    featured: true,
  }
];

export const ministries: Ministry[] = [
  { id: '1', name: 'Youth Ministry', description: 'Guiding the next generation to build a strong foundation in Christ through fun, fellowship, and faith.', leader: 'Mark & Sarah Lee', imageUrl: 'https://picsum.photos/400/300?random=1' },
  { id: '2', name: 'Women\'s Fellowship', description: 'Creating a community of women who support, encourage, and uplift one another in their spiritual journey.', leader: 'Grace Johnson', imageUrl: 'https://picsum.photos/400/300?random=2' },
  { id: '3', name: 'Men\'s Group', description: 'Challenging men to be spiritual leaders in their homes, church, and community.', leader: 'David Chen', imageUrl: 'https://picsum.photos/400/300?random=3' },
  { id: '4', name: 'Music & Worship Team', description: 'Leading the congregation into the presence of God through music and song.', leader: 'Melody Richards', imageUrl: 'https://picsum.photos/400/300?random=4' },
];

export const premadeQuizQuestions: QuizQuestion[] = [
  // Standard Knowledge Questions
  { question: 'Who was swallowed by a great fish?', options: ['Moses', 'Jonah', 'David', 'Abraham'], correctAnswer: 'Jonah' },
  { question: 'How many disciples did Jesus have?', options: ['10', '11', '12', '13'], correctAnswer: '12' },
  { question: 'What is the first book of the New Testament?', options: ['Genesis', 'Revelation', 'Matthew', 'Psalms'], correctAnswer: 'Matthew' },
  { question: 'Who built the ark?', options: ['Noah', 'Adam', 'Solomon', 'Peter'], correctAnswer: 'Noah' },
  { question: 'What did David use to defeat Goliath?', options: ['A sword', 'A spear', 'A sling and a stone', 'His bare hands'], correctAnswer: 'A sling and a stone' },
  { question: 'Who was the first king of Israel?', options: ['David', 'Saul', 'Solomon', 'Samuel'], correctAnswer: 'Saul' },
  { question: 'What is the longest book in the Bible?', options: ['Genesis', 'Psalms', 'Isaiah', 'Jeremiah'], correctAnswer: 'Psalms' },
  { question: 'Who received the Ten Commandments from God?', options: ['Abraham', 'Isaac', 'Jacob', 'Moses'], correctAnswer: 'Moses' },
  { question: 'What was the name of the garden where Adam and Eve lived?', options: ['Gethsemane', 'Eden', 'Zion', 'Babylon'], correctAnswer: 'Eden' },
  { question: 'Which disciple denied Jesus three times?', options: ['Judas', 'Peter', 'John', 'Thomas'], correctAnswer: 'Peter' },
  { question: 'What is the last book of the Bible?', options: ['Genesis', 'Malachi', 'Matthew', 'Revelation'], correctAnswer: 'Revelation' },
  { question: 'Who was thrown into the lion\'s den?', options: ['Daniel', 'Joseph', 'Elijah', 'Jeremiah'], correctAnswer: 'Daniel' },
  { question: 'What food did God provide for the Israelites in the desert?', options: ['Fish and loaves', 'Milk and honey', 'Manna and quail', 'Grapes and figs'], correctAnswer: 'Manna and quail' },
  { question: 'Who was the wisest king in the Bible?', options: ['David', 'Saul', 'Solomon', 'Hezekiah'], correctAnswer: 'Solomon' },
  { question: 'What river was Jesus baptized in?', options: ['Nile', 'Tigris', 'Euphrates', 'Jordan'], correctAnswer: 'Jordan' },
  { question: 'How many books are in the New Testament?', options: ['27', '39', '66', '12'], correctAnswer: '27' },
  { question: 'What was the first plague of Egypt?', options: ['Frogs', 'Locusts', 'Water turned to blood', 'Darkness'], correctAnswer: 'Water turned to blood' },
  { question: 'Who was the mother of Jesus?', options: ['Elizabeth', 'Mary Magdalene', 'Mary', 'Martha'], correctAnswer: 'Mary' },
  { question: 'What did Zacchaeus climb to see Jesus?', options: ['A wall', 'A sycamore tree', 'A rooftop', 'A mountain'], correctAnswer: 'A sycamore tree' },
  { question: 'Who is known as the "Apostle to the Gentiles"?', options: ['Peter', 'John', 'Paul', 'James'], correctAnswer: 'Paul' },
  
  // "Identify the Reference" Questions
  { question: 'The story of Noah\'s Ark and the flood is found in which book?', options: ['Exodus', 'Leviticus', 'Genesis', 'Numbers'], correctAnswer: 'Genesis' },
  { question: 'The Ten Commandments are first recorded in which book?', options: ['Genesis', 'Exodus', 'Leviticus', 'Numbers'], correctAnswer: 'Exodus' },
  { question: 'In which Gospel is the Sermon on the Mount found?', options: ['Matthew', 'Mark', 'Luke', 'John'], correctAnswer: 'Matthew' },
  { question: "Where in the Bible is the 'Hall of Faith' located?", options: ['Romans 8', '1 Corinthians 13', 'Hebrews 11', 'James 2'], correctAnswer: 'Hebrews 11' },
  { question: 'The story of David and Goliath is in which book?', options: ['1 Kings', '2 Kings', '1 Samuel', '2 Samuel'], correctAnswer: '1 Samuel' },
  { question: 'The parable of the Good Samaritan is told in which Gospel?', options: ['Matthew', 'Mark', 'Luke', 'John'], correctAnswer: 'Luke' },
  { question: 'The verse "For God so loved the world..." is found where?', options: ['John 3:16', 'Romans 3:23', 'Ephesians 2:8', '1 John 4:8'], correctAnswer: 'John 3:16' },
  { question: 'Which book of the Bible is a collection of songs, prayers, and poems?', options: ['Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Psalms'], correctAnswer: 'Psalms' },
  { question: 'The story of the Prodigal Son is found in which chapter?', options: ['Matthew 18', 'Luke 15', 'John 10', 'Acts 2'], correctAnswer: 'Luke 15' },
  { question: "The 'Fruit of the Spirit' is listed in which book?", options: ['Romans', '1 Corinthians', 'Galatians', 'Ephesians'], correctAnswer: 'Galatians' },
  { question: "The 'Armor of God' is described in which chapter?", options: ['Romans 12', 'Ephesians 6', 'Philippians 4', 'Colossians 3'], correctAnswer: 'Ephesians 6' },
  { question: 'Which book contains the verse "I can do all things through Christ who strengthens me"?', options: ['Romans', 'Ephesians', 'Philippians', 'Colossians'], correctAnswer: 'Philippians' },
  { question: 'The story of Shadrach, Meshach, and Abednego in the fiery furnace is in which book?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'], correctAnswer: 'Daniel' },
  { question: 'Which book begins with "In the beginning was the Word, and the Word was with God..."?', options: ['Genesis', 'Matthew', 'Luke', 'John'], correctAnswer: 'John' },
  { question: 'The prophetic vision of the valley of dry bones is found in which book?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'], correctAnswer: 'Ezekiel' },
  { question: 'The "love chapter" of the Bible is widely considered to be which?', options: ['Romans 8', '1 Corinthians 13', 'Psalm 23', 'John 15'], correctAnswer: '1 Corinthians 13' },
  { question: 'Where is the Lord\'s Prayer first recorded?', options: ['Matthew 6', 'Luke 11', 'Mark 12', 'John 17'], correctAnswer: 'Matthew 6' },
  { question: 'The Beatitudes are found at the beginning of which sermon?', options: ['The Olivet Discourse', 'The Sermon on the Mount', 'Peter\'s Pentecost Sermon', 'Paul\'s sermon on Mars Hill'], correctAnswer: 'The Sermon on the Mount' },
  { question: 'The account of the Day of Pentecost is in which chapter?', options: ['Matthew 28', 'John 20', 'Acts 2', 'Romans 1'], correctAnswer: 'Acts 2' },
  { question: 'The book of Proverbs is traditionally attributed to which king?', options: ['David', 'Solomon', 'Hezekiah', 'Josiah'], correctAnswer: 'Solomon' },
  { question: 'Which book contains many prophecies about the Messiah, including "For unto us a child is born"?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'], correctAnswer: 'Isaiah' },
  { question: 'Where does the Bible say "The fear of the Lord is the beginning of wisdom"?', options: ['Psalms', 'Proverbs', 'Ecclesiastes', 'Job'], correctAnswer: 'Proverbs' },
  { question: 'The story of Samson and Delilah is found in which book?', options: ['Joshua', 'Judges', 'Ruth', '1 Samuel'], correctAnswer: 'Judges' },
  { question: 'Which book is a letter written by Paul to a runaway slave\'s master?', options: ['Titus', 'Philemon', '2 Timothy', 'Jude'], correctAnswer: 'Philemon' },
  { question: 'The creation story is found in which chapter?', options: ['Genesis 1', 'Exodus 1', 'John 1', 'Revelation 1'], correctAnswer: 'Genesis 1' },
  { question: 'The story of the fall of Jericho is in which book?', options: ['Numbers', 'Deuteronomy', 'Joshua', 'Judges'], correctAnswer: 'Joshua' },
  { question: 'Which book contains the verse "Trust in the Lord with all your heart"?', options: ['Psalms', 'Proverbs', 'Isaiah', 'Jeremiah'], correctAnswer: 'Proverbs' },
  { question: 'The parting of the Red Sea is described in which book?', options: ['Genesis', 'Exodus', 'Leviticus', 'Deuteronomy'], correctAnswer: 'Exodus' },
  { question: 'Which book is a personal letter from John about walking in truth and love?', options: ['1 John', '2 John', '3 John', 'Jude'], correctAnswer: '2 John' },
  { question: 'The story of Queen Esther is in which book?', options: ['Ezra', 'Nehemiah', 'Esther', 'Ruth'], correctAnswer: 'Esther' },
];

export const leaders: Leader[] = [
  {
    id: '1',
    name: 'Rev. Dr. S.O. Afolabi',
    position: 'Church Pastor',
    category: 'Pastor',
    imageUrl: '/images/1.jpg',
    shortBio: 'Leading our congregation with wisdom and grace, Rev. Dr. Afolabi has been our shepherd since 2000.',
    fullBio: 'Rev. Dr. S.O. Afolabi joined First Baptist Church Itire in the year 2000, bringing with him a profound passion for the Gospel and a heart for the community. Under his leadership, the church has seen tremendous growth, both spiritually and in numbers. He holds a Doctorate in Theology and has authored several books on faith and Christian living. His ministry focuses on sound biblical teaching, compassionate outreach, and equipping believers to live out their God-given purpose.'
  },

  {
    id: '2',
    name: 'Deacon Emmanuel Ogunmola',
    position: 'Chairman, Board of Deacons',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=21',
    shortBio: 'A dedicated servant and a pillar of our church, Deacon Adeboye has served faithfully for over two decades.',
    fullBio: 'Deacon Emmanuel Ogunmola has been a member of FBC Itire for over 30 years and has served on the Board of Deacons for 20 of them. As Chairman, he provides spiritual oversight and guidance, working closely with the Senior Pastor to minister to the needs of the congregation. He is known for his gentle spirit, wise counsel, and unwavering commitment to the church family.'
  },

  {
    id: '8',
    name: 'Deacon Akinloye Falade',
    position: 'Deacon',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=21',
    shortBio: 'A dedicated servant and a pillar of our church, Deacon Adeboye has served faithfully for over two decades.',
    fullBio: 'Deacon Akinloye Falade has been a member of FBC Itire for over 30 years and has served on the Board of Deacons for 20 of them. As Chairman, he provides spiritual oversight and guidance, working closely with the Senior Pastor to minister to the needs of the congregation. He is known for his gentle spirit, wise counsel, and unwavering commitment to the church family.'
  },

  {
    id: '7',
    name: 'Deaconess Dorcas Adeleke',
    position: 'Deaconess',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=21',
    shortBio: 'A dedicated servant and a pillar of our church, Deacon Adeboye has served faithfully for over two decades.',
    fullBio: 'Deacon James Adeboye has been a member of FBC Itire for over 30 years and has served on the Board of Deacons for 20 of them. As Chairman, he provides spiritual oversight and guidance, working closely with the Senior Pastor to minister to the needs of the congregation. He is known for his gentle spirit, wise counsel, and unwavering commitment to the church family.'
  },
  {
    id: '3',
    name: 'Deaconess Victoria Ogunsami',
    position: 'Deaconess',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=22',
    shortBio: 'A compassionate leader with a heart for service, especially within our women\'s and children\'s ministries.',
    fullBio: 'Deaconess Victoria Ogunsami is a cornerstone of our church\'s compassionate care ministries. She plays a pivotal role in the Women\'s Fellowship and oversees the Sunday School program, ensuring that the youngest members of our congregation are nurtured in faith. Her home is always open, and she is a beloved mentor to many.'
  },
    {
    id: '4',
    name: 'Mr. Benson Ige',
    position: 'Church Organist',
    category: 'Office Holder',
    imageUrl: 'https://picsum.photos/400/400?random=23',
    shortBio: 'Managing the church\'s finances with integrity and transparency, ensuring good stewardship of God\'s resources.',
    fullBio: 'With a professional background in finance, Mr. David Chen volunteers his expertise as the Church Treasurer. He is responsible for financial planning, budgeting, and reporting. His meticulous work ensures that the church operates on a sound financial footing, allowing our ministries to flourish and grow.'
  },
  {
    id: '5',
    name: 'Mrs. Oluwagbemiro',
    position: 'Choir Mistress',
    category: 'Office Holder',
    imageUrl: 'https://picsum.photos/400/400?random=24',
    shortBio: 'Leading our worship team in creating a powerful and uplifting atmosphere of praise every Sunday.',
    fullBio: 'Mrs. Oluwagbemiro has a gift for music that she joyfully shares as our Choir Master. She directs the church choir and the worship team, blending traditional hymns with contemporary worship songs. Her leadership helps usher the congregation into the presence of God each week.'
  },
  {
    id: '6',
    name: 'Deacon Oluwasegun Adeleke',
    position: 'Deacon',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=25',
    shortBio: 'Passionate about teaching children the foundations of faith in a fun, engaging, and loving environment.',
    fullBio: 'As the Sunday School Coordinator, Mrs. Sarah Lee is dedicated to the spiritual education of our children. She develops curriculum, trains volunteer teachers, and creates a safe and exciting learning environment where kids can discover the love of Jesus. Her energy and creativity are a blessing to our youngest members.'
  },

  {
    id: '9',
    name: 'Deaconess Oluwafunmilayo Ogunbodun',
    position: 'Deaconess',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=25',
    shortBio: 'Passionate about teaching children the foundations of faith in a fun, engaging, and loving environment.',
    fullBio: 'As the Sunday School Coordinator, Mrs. Sarah Lee is dedicated to the spiritual education of our children. She develops curriculum, trains volunteer teachers, and creates a safe and exciting learning environment where kids can discover the love of Jesus. Her energy and creativity are a blessing to our youngest members.'
  },

  {
    id: '10',
    name: 'Deacon Dare Odesise',
    position: 'Deacon',
    category: 'Deacon',
    imageUrl: 'https://picsum.photos/400/400?random=25',
    shortBio: 'Passionate about teaching children the foundations of faith in a fun, engaging, and loving environment.',
    fullBio: 'As the Sunday School Coordinator, Mrs. Sarah Lee is dedicated to the spiritual education of our children. She develops curriculum, trains volunteer teachers, and creates a safe and exciting learning environment where kids can discover the love of Jesus. Her energy and creativity are a blessing to our youngest members.'
  }

];

export const historyMilestones: HistoryMilestone[] = [
  {
    year: '1970',
    title: 'A Humble Beginning',
    description: 'First Baptist Church Itire was founded by a small group of believers in a rented storefront, with a passionate vision to serve the local community.',
    imageUrl: 'https://picsum.photos/600/400?random=30'
  },
  {
    year: '1985',
    title: 'Our First Building',
    description: 'Through faith and the generous contributions of its members, the church constructed its first dedicated sanctuary at our current location.',
    imageUrl: 'https://picsum.photos/600/400?random=31'
  },
  {
    year: '2000',
    title: 'New Leadership',
    description: 'Rev. Dr. S.O. Afolabi was appointed as the Senior Pastor, ushering in a new era of growth and community outreach.',
    imageUrl: 'https://picsum.photos/600/400?random=32'
  },
  {
    year: '2005',
    title: 'First Mission Trip',
    description: 'The church organized its first international mission trip, sending a team to provide aid and share the Gospel in a neighboring country.',
    imageUrl: 'https://picsum.photos/600/400?random=34'
  },
  {
    year: '2010',
    title: 'Community Center Opens',
    description: 'A new wing was added to the church building, establishing a community center that offers tutoring, food pantry services, and youth programs.',
    imageUrl: 'https://picsum.photos/600/400?random=35'
  },
  {
    year: '2015',
    title: 'Worship Album Release',
    description: 'Our Music & Worship Team recorded and released their first live worship album, "Echoes of Grace", sharing our songs with a wider audience.',
    imageUrl: 'https://picsum.photos/600/400?random=36'
  },
  {
    year: '2018',
    title: 'Digital Ministry Launch',
    description: 'FBC Itire launched its online campus, livestreaming services and creating digital resources to reach people around the world.',
    imageUrl: 'https://picsum.photos/600/400?random=37'
  },
  {
    year: '2020',
    title: '50th Anniversary',
    description: 'We celebrated 50 years of God\'s faithfulness with a year of special events, services, and community projects.',
    imageUrl: 'https://picsum.photos/600/400?random=38'
  },
  {
    year: '2022',
    title: 'Youth Ministry Expansion',
    description: 'A major renovation of the youth hall was completed, creating a modern and welcoming space for our growing youth ministry.',
    imageUrl: 'https://picsum.photos/600/400?random=39'
  },
  {
    year: 'Present Day',
    title: 'A Thriving Community',
    description: 'Today, FBC Itire is a vibrant, multi-generational church family, continuing its legacy of faith, hope, and love in the heart of the city.',
    imageUrl: 'https://picsum.photos/600/400?random=33'
  }
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/800/600?random=41', alt: 'Church congregation during service' },
  { id: '2', src: 'https://picsum.photos/800/600?random=42', alt: 'Church choir singing joyfully' },
  { id: '3', src: 'https://picsum.photos/800/600?random=43', alt: 'Pastor delivering a sermon' },
  { id: '4', src: 'https://picsum.photos/800/600?random=44', alt: 'Community outreach event' },
  { id: '5', src: 'https://picsum.photos/800/600?random=45', alt: 'Youth group activity' },
  { id: '6', src: 'https://picsum.photos/800/600?random=46', alt: 'Church building exterior' },
  { id: '7', src: 'https://picsum.photos/800/600?random=47', alt: 'Volunteers helping in the community' },
  { id: '8', src: 'https://picsum.photos/800/600?random=48', alt: 'Children\'s Sunday school class' },
  { id: '9', src: 'https://picsum.photos/800/600?random=49', alt: 'Annual church picnic' },
];

export const communityPosts: Post[] = [
  {
    id: 'testimony-1',
    name: 'Grace J.',
    type: 'Testimony',
    message: 'I want to thank God for His healing power. I was unwell last week, but after the prayers from the church family, I am feeling completely restored. Praise the Lord!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    interactions: 15,
  },
  {
    id: 'prayer-1',
    name: 'Anonymous',
    type: 'Prayer',
    message: 'Please pray for my upcoming job interview this Friday. I am trusting God for favor and for His will to be done.',
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    interactions: 22,
  },
  {
    id: 'testimony-2',
    name: 'David & Sarah',
    type: 'Testimony',
    message: 'We are overjoyed to share that we are expecting our first child! We have been praying for this for a long time and we are so grateful for this miracle.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    interactions: 48,
  },
    {
    id: 'prayer-2',
    name: 'John A.',
    type: 'Prayer',
    message: 'Requesting prayers for my mother who is scheduled for surgery next week. Please pray for the hands of the surgeons and for a quick and successful recovery.',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    interactions: 35,
  },
  {
    id: 'prayer-3',
    name: 'Anonymous',
    type: 'Prayer',
    message: 'Praying for my family as we navigate a difficult season. We need wisdom and unity.',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    interactions: 41,
  },
  {
    id: 'prayer-4',
    name: 'Maria S.',
    type: 'Prayer',
    message: 'Please pray for my friend who is struggling with their faith. Pray that God would reveal Himself to them in a powerful way.',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    interactions: 28,
  }
];

export const answeredQuestions: AnsweredQuestion[] = [
    {
        id: '1',
        question: 'How can I know for sure that I am saved?',
        answer: "Assurance of salvation comes from faith in Jesus Christ and the promises found in God's Word. 1 John 5:13 says, 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.' It's not about a feeling, but about trusting in the finished work of Jesus on the cross. If you have placed your faith in Him, you can be confident in your salvation.",
        dateAnswered: '2025-10-15'
    },
    {
        id: '2',
        question: 'What is the purpose of tithing, and is it still required today?',
        answer: "Tithing is an act of worship and obedience, acknowledging that everything we have comes from God. While we are no longer under the Old Testament law, the principle of generous and cheerful giving is a core part of the Christian life (2 Corinthians 9:7). Tithing supports the ministry of the church, its outreach, and the spread of the Gospel. It's a tangible way to put God first in our finances.",
        dateAnswered: '2025-08-08'
    }
];

export const recommendedResources: RecommendedResource[] = [
    {
        id: '1',
        title: 'Mere Christianity',
        author: 'C.S. Lewis',
        type: 'Book',
        description: 'A classic and compelling defense of the Christian faith, perfect for both seekers and longtime believers.',
        link: 'https://www.google.com/books/edition/Mere_Christianity/p-K-DRD9mDEC?hl=en'
    },
    {
        id: '2',
        title: 'The Purpose Driven Life',
        author: 'Rick Warren',
        type: 'Book',
        description: 'A groundbreaking book that helps you discover the answer to life\'s most important question: What on earth am I here for?',
        link: 'https://www.google.com/books/edition/The_Purpose_Driven_Life/03J-DwAAQBAJ?hl=en'
    },
    {
        id: '3',
        title: 'The Bible Project',
        author: 'thebibleproject.com',
        type: 'Website',
        description: 'An incredible resource with animated videos and study guides that make biblical theology accessible and engaging.',
        link: 'https://bibleproject.com/'
    }
];

export const spiritualChallenge: SpiritualChallenge = {
    id: '1',
    title: 'The Gratitude Challenge',
    description: "This week, focus on cultivating a heart of gratitude. Each day, take five minutes to write down three specific things you are thankful for. They can be big or small. The goal is to intentionally shift your focus from what you lack to the abundance of blessings God has already provided. At the end of the week, reflect on how this practice has changed your perspective.",
    scripture: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    scriptureReference: "1 Thessalonians 5:18"
};

export const guidedPrayer: GuidedPrayer = {
  id: 'gp1',
  title: 'A Prayer for Peace',
  author: 'Rev. Dr. S.O. Afolabi',
  content: "Heavenly Father, in a world filled with turmoil and uncertainty, we come before you seeking your divine peace. Quiet our anxious hearts and fill us with the tranquility that surpasses all understanding. Help us to trust in your sovereignty and to rest in your loving care. May your peace guard our hearts and minds in Christ Jesus. Amen.",
  audioUrl: '#'
};

export const bibleStudies: BibleStudy[] = [
  {
    id: 'bs-1',
    title: 'The Foundations of Faith',
    date: '2024-07-23',
    description: 'An introductory study on the core tenets of our faith, based on the book of Romans.',
    fileUrl: '/files/placeholder.pdf',
    fileType: 'pdf',
  },
  {
    id: 'bs-2',
    title: 'Living a Life of Prayer',
    date: '2024-07-30',
    description: 'Exploring the purpose and power of prayer as modeled by Jesus.',
    fileUrl: '/files/placeholder.doc',
    fileType: 'doc',
  },
  {
    id: 'bs-3',
    title: 'The Fruit of the Spirit',
    date: '2024-08-06',
    description: 'A deep dive into Galatians 5 and what it means to live a Spirit-filled life.',
    fileUrl: '/files/placeholder.pdf',
    fileType: 'pdf',
  },
  {
    id: 'bs-4',
    title: 'Servanthood and Leadership',
    date: '2024-08-13',
    description: 'Understanding the biblical model of leadership through service, as seen in the life of Christ.',
    fileUrl: '/files/placeholder.doc',
    fileType: 'doc',
  },
];