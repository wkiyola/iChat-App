import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

export default function App() {
    return (
        <ChatEngine 
            height="100vh"
            projectID = {process.env.projectID}
            userName="wkiyola"
            userSecret="4006"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
     );
};
