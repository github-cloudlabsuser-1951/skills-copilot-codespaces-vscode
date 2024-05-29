import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');
    const data = [
        [
          { name: 'John', age: 25 },
          { name: 'Jane', age: 30 }
        ],
        [
          { name: 'Bob', age: 40 }
        ]
      ];
      const names = data.flat().map(item => item.name);
      console.log(names);

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };


    const reverseSentence = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{reverseSentence(markdown)}</ReactMarkdown>
            </div>
        </div>
    );
};


export default MarkdownEditor;