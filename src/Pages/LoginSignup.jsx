import  { useState } from 'react';
import './CSS/LoginSignup.css'

function LoginSignup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        // Handle signup submission
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignupSubmit}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} 
                        placeholder="Enter your full name" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default LoginSignup;
