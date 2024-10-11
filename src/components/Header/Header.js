
import React, { useState } from 'react'
export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className="flex justify-between items-center p-6 header-desktop">
            <div className="flex items-center">
                <i className="fas fa-brain text-2xl">
                </i>
                <span className="ml-2 text-xl font-semibold">
                    DeepAI
                </span>
            </div>
            <nav className="space-x-6 hidden md:flex">
                <a className="hover:underline" href="#">
                    AI Chat
                </a>
                <a className="hover:underline hidden md:inline" href="#">
                    AI Image Generator
                </a>
                <a className="hover:underline" href="#">
                    AI Video
                </a>
                <a className="hover:underline hidden md:inline" href="#">
                    AI Music Generator
                </a>
                <i className="fas fa-user-circle text-2xl" onClick={toggleDropdown} style={{cursor:'pointer'}}>
                </i>
            </nav>
            {isDropdownOpen && (
                <ul id="mainNavDropdown" className="show-dropdown down-header" style={{position:'absolute',width:'360px',zIndex:999, top:'80px', right:'20px', border:'1px solid white' , borderRadius:'10px', }}>
                    <div className="exit" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M11.9997 10.586L16.9497 5.63599L18.3637 7.04999L13.4137 12L18.3637 16.95L16.9497 18.364L11.9997 13.414L7.04974 18.364L5.63574 16.95L10.5857 12L5.63574 7.04999L7.04974 5.63599L11.9997 10.586Z" fill="white" />
                        </svg>
                    </div>
                    <div id="navProfileSection" className="nav-profile-section">
                        <img className="usericon" id="navUserAvatar" alt="avatar" loading="lazy" onclick="window.location.replace('/dashboard/profile')" src="/static/images/dolphin-icon.jpeg" />
                        <div className="nav-usernames">
                            <p className="nav-profilename" id="navUserName" />
                            <p className="nav-username" id="navUserEmail" />
                        </div>
                    </div>
                    <button id="navProfileButton" className="button nav-profile-button" onclick="window.location.replace('/dashboard/profile')">View Profile</button>
                    <div className="menu-options">
                        <div className="pages">
                            <a href="/machine-learning-model/text2img" className="ai-generators">AI Image Generator</a>
                            <a href="/video" className="ai-generators">AI Video Generator</a>
                            <a href="/music" className="ai-generators">AI Music Generator</a>
                            <a href="/chat" className="ai-generators">AI Chat</a>
                            <a href="/pricing" className="pricing">Pricing</a>
                            <a href="/definitions" className="glossary">Glossary</a>
                            <a href="/docs" className="apidocs">Docs</a>
                        </div>
                        <div className="menu-settings">
                            <div className="menu-border" />
                            <button id="login-button-dropdown" onclick="openSignup()" className="logout">
                                Login
                            </button>
                        </div>
                    </div>
                </ul>

            )}
        </header>
    )
}

