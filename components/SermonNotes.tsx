import React, { useRef } from 'react';
import { ArrowDownTrayIcon } from './icons';

// Declare global variable for file-saver
declare var saveAs: any;

const SermonNotes: React.FC = () => {
    const editorRef = useRef<HTMLDivElement>(null);

    const applyFormat = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
    };

    const downloadNotes = (format: 'txt' | 'doc') => {
        if (editorRef.current) {
            if (format === 'txt') {
                const text = editorRef.current.innerText;
                const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                saveAs(blob, 'sermon-notes.txt');
            } else if (format === 'doc') {
                const content = editorRef.current.innerHTML;
                const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Sermon Notes</title></head><body>";
                const footer = "</body></html>";
                const html = header + content + footer;
                const blob = new Blob(['\ufeff', html], {
                    type: 'application/msword'
                });
                saveAs(blob, 'sermon-notes.doc');
            }
        }
    };

    const ToolbarButton: React.FC<{ onClick: () => void; children: React.ReactNode; title: string }> = ({ onClick, children, title }) => (
        <button
            onClick={onClick}
            onMouseDown={(e) => e.preventDefault()} // Prevent editor from losing focus
            title={title}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
        >
            {children}
        </button>
    );

    return (
        <div className="flex flex-col h-full">
            <div className="p-2 border-b dark:border-gray-700">
                <div className="flex flex-wrap items-center gap-1">
                    <ToolbarButton onClick={() => applyFormat('bold')} title="Bold">
                        <span className="font-bold">B</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => applyFormat('italic')} title="Italic">
                        <span className="italic">I</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => applyFormat('underline')} title="Underline">
                        <span className="underline">U</span>
                    </ToolbarButton>
                    <select
                        onChange={(e) => applyFormat('formatBlock', e.target.value)}
                        onMouseDown={(e) => e.preventDefault()}
                        className="ml-2 bg-transparent text-sm p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                    >
                        <option value="p">Paragraph</option>
                        <option value="h2">Heading 1</option>
                        <option value="h3">Heading 2</option>
                        <option value="h4">Subheading</option>
                    </select>
                </div>
            </div>
            {/* FIX: The `placeholder` attribute is not valid for a `div` element. Replaced with a `data-placeholder` attribute and styled with Tailwind CSS pseudo-classes to achieve the placeholder effect on the content-editable div. */}
            <div
                ref={editorRef}
                contentEditable={true}
                data-placeholder="Start typing your sermon notes here..."
                className="flex-1 p-4 overflow-y-auto focus:outline-none text-gray-700 dark:text-gray-300 empty:before:content-[attr(data-placeholder)] empty:before:text-gray-500 dark:empty:before:text-gray-400"
                style={{ minHeight: '200px' }}
            />
            <div className="p-2 border-t dark:border-gray-700 flex justify-end gap-2">
                 <button onClick={() => downloadNotes('txt')} className="flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                    <ArrowDownTrayIcon className="w-4 h-4" /> Download .txt
                </button>
                 <button onClick={() => downloadNotes('doc')} className="flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                    <ArrowDownTrayIcon className="w-4 h-4" /> Download .doc
                </button>
            </div>
        </div>
    );
};

export default SermonNotes;
