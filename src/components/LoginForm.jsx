import React, { useState } from 'react'
import axios from 'axios';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {
            'Project-ID': "e2d04eb1-9a26-4a8a-b646-2c7cb95b3139",
            'User-Name': username,
            'User-Secret': password
        }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload()
        }catch(error){
            setError('Oops, wrong username or password');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">iChat</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        className="input"
                        placeholder="username"
                        required
                    />
                    <input 
                        type="text"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className="input"
                        placeholder="*****"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
