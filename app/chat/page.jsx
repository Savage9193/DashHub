"use client";

import { useState } from 'react';
import styles from '@/app/ui/chat/chat.module.css'; // Ensure this path is correct
import Link from 'next/link';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessages = [...messages, input];

            // Add responses based on the message
            let response = '';

            switch (input.trim().toLowerCase()) {
                case 'hello':
                case 'hi':
                    response = 'Hello! How can I assist you today?';
                    break;
                case 'goodbye':
                case 'see you later':
                    response = 'Goodbye! Have a great day!';
                    break;
                case 'thank you':
                case 'thanks':
                    response = "You're welcome! If you have any other questions, feel free to ask.";
                    break;
                case 'help':
                case 'can you help me?':
                    response = 'Sure! What do you need help with?';
                    break;
                case 'you’re awesome':
                case 'great job':
                    response = "Thank you! I’m here to help you.";
                    break;
                case 'what time is it?':
                case 'current time':
                    response = "I can't check the time right now, but you can look at your device's clock.";
                    break;
                case 'what\'s the weather like?':
                case 'weather update':
                    response = "I can't provide weather updates at the moment, but you can check a weather website or app.";
                    break;
                case 'how are you?':
                case 'how\'s it going?':
                    response = "I'm just a bot, but I'm here and ready to assist you!";
                    break;
                default:
                    response = "I'm not sure how to respond to that. Can you please rephrase?";
            }

            if (response) {
                newMessages.push(response);
            }

            setMessages(newMessages);
            setInput('');
        }
    };

    const handleClearMessages = () => {
        setMessages([]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Chat</h1>
            <div className={styles.chatWindow}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.message}>
                        {msg}
                    </div>
                ))}
            </div>
            <div className={styles.inputArea}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className={styles.input}
                />
                <button onClick={handleSendMessage} className={styles.sendButton}>
                    Send
                </button>
                <button onClick={handleClearMessages} className={styles.clearButton}>
                    Clear
                </button>
                <Link href='/dashboard'>
                <button  className={styles.navigateButton}>
                    Go to Dashboard
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ChatPage;
