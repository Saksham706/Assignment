import React, { useState } from 'react';

const mockResponses = {
  'How do I sell my license?': 'Just upload your license and we’ll handle the rest!',
  'Is it safe?': 'Yes, we use encrypted channels and trusted payment gateways.',
};

const ChatWidget = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false); 

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMsg = { type: 'user', text: input };
    const botMsg = {
      type: 'bot',
      text: mockResponses[input] || 'Sorry, I didn’t understand that.',
    };

    setChat((prevChat) => [...prevChat, userMsg, botMsg]);
    setInput('');
  };

  const toggleChat = () => setIsOpen(!isOpen); 
  const closeChat = () => setIsOpen(false); 

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        <i className="bi bi-chat"></i>
      </button>

     
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white p-4 shadow-lg rounded-lg border border-black">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-xl">SoftSell Assistant</h3>
            <button onClick={closeChat} className="text-gray-600 hover:text-black">
              &times;
            </button>
          </div>
          <div className="h-40 overflow-y-auto text-sm mb-2 space-y-2">
            {chat.map((msg, idx) => (
              <div key={idx} className={msg.type === 'user' ? 'text-right' : 'text-left'}>
                <p className={msg.type === 'user' ? 'text-blue-600' : 'text-green-600'}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="border px-2 py-1 w-full rounded mr-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
