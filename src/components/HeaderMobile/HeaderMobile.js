
import React, { useState } from 'react'
export default function HeaderMobile() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className='header-mobile' style={{ background: 'linear-gradient(rgb(119, 41, 170) -597.978%, rgb(23, 10, 45) -150.693%, rgb(10, 6, 29) 75.6396%, rgba(10, 6, 30, 0.99) 1067.06%, rgb(1, 3, 17) 3159.21%)' }}>
            <style dangerouslySetInnerHTML={{ __html: "\n       :root {\n      --white: rgba(255, 255, 255, 1);\n      --clear: rgba(255, 255, 255, 0.04);\n      --cod-gray: rgba(8, 8, 8, 1);\n      --cod-gray-2: rgba(9, 9, 9, 1);\n      --pink: #c549fe;\n      --purple: #7000ff;\n      --font-size-xxs: 24px;\n      --font-size-xs: 26px;\n      --font-size-s: 32px;\n      --font-size-m: 40px;\n      --font-size-l: 48px;\n    }\n    a.button {\n      display: flex;\n      flex-direction: row;\n      width: 35px;\n      padding: 5px 95px;\n      justify-content: center;\n      align-items: center;\n      gap: 10px;\n      border-radius: 12px;\n      font-size: 18px;\n      text-align: center;\n      font-style: normal;\n    }\n    \n    .nav-items {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 14px;\n      margin-left: 16px;\n      margin-right: 16px;\n      height: 45px;\n    }\n    \n    .nav-buttons {\n      display: flex;\n      flex-direction: row;\n    }\n    \n    .hidden-icon {\n      display: none;\n    }\n    \n    .exit {\n      display: flex;\n      flex-direction: row;\n      position: relative;\n      justify-content: right;\n      right: 10px;\n      top: 10px;\n      cursor: pointer;\n      margin: 10px;\n    }\n    \n    a.button.login, a.button.headerbutton {\n      z-index: 2;\n      width: fit-content;\n      background: transparent;\n      border: 1px solid transparent;\n      border-radius: 12px;\n      color: var(--white);\n      white-space: nowrap;\n      letter-spacing: 2%;\n      margin-right: 12px;\n      cursor: pointer;\n      transition: none;\n      padding: 5px 10px;\n      height: 32px;\n      margin-left: auto;\n      font-weight: 500;\n      font-size: 16px;\n    }\n    \n    a.button.chatbutton,\n    a.button.imagebutton {\n      background: var(--clear);\n      border: none;\n      color: var(--white);\n      font-weight: bold;\n      letter-spacing: 2%;\n      margin-right: 12px;\n      transition: background 0.4s ease;\n      cursor: pointer;\n      backdrop-filter: blur(10px);\n      z-index: 2;\n    }\n    \n    a.button.chatbutton,\n    a.button.imagebutton {\n      display: flex;\n      flex-direction: row;\n      width: 240px;\n      margin-right: 0px;\n      justify-content: space-around;\n      cursor: pointer;\n      backdrop-filter: blur(10px);\n      z-index: 2;\n    }\n    \n    a.button.chatbutton:hover {\n      background: var(--purple);\n    }\n    a.button.imagebutton:hover {\n      background: var(--pink);\n    }\n    \n    a.button.menu {\n      background: none;\n      border: none;\n      width: 24px;\n      padding: 0px;\n      cursor: pointer;\n    }\n    \n    .menu-icon {\n        font-size: 30px;\n        font-weight: bold;\n        cursor: pointer;\n        vertical-align: middle;\n    }\n    \n    .dropbtn {\n        color: white;\n        border-radius: 10px;\n        cursor: pointer;\n        background: transparent;\n        border: none;\n        margin: auto;\n    }\n    \n    #userIconDrop {\n      display: none;\n    }\n    \n    .usericon {\n      width: 75px;\n      height: 75px;\n      border-radius: 12px;\n      margin: auto 24px 12px 0px;\n      object-fit: cover;\n    }\n    \n    .nav-profile-section {\n      display: flex;\n      flex-direction: row;\n      cursor: pointer;\n      justify-content: center;\n      padding-right: 20px;\n    }\n    \n    .nav-usernames {\n      gap: 6px;\n      margin-bottom: 3px;\n      margin-bottom: 6px;\n    }\n    \n    .nav-profilename {\n      margin: auto;\n      margin-bottom: 0px;\n      white-space: normal;\n    }\n    \n    .nav-username {\n      margin: auto;\n      margin-top: 0px;\n      white-space: normal;\n      max-width: 170px;\n      overflow-wrap: break-word;\n      word-wrap: normal;\n      word-break: break-word;\n      font-size: 13px;\n    }\n    \n    .nav-profile-button {\n      display: flex;\n      flex-direction: column;\n      background: #8f37ff;\n      border: none;\n      width: 77%;\n      font-family: inherit;\n      color: var(--white);\n      white-space: nowrap;\n      letter-spacing: 2%;\n      margin: auto;\n      padding: 12px;\n      margin: auto;\n      margin-top: 0px;\n      transition: background 0.2s ease;\n      cursor: pointer;\n      border-radius: 12px;\n      align-items: center;\n      font-size: 18px;\n    }\n    \n    .profile-button:hover {\n      background: var(--pink);\n    }\n    \n    #navProfileSection{\n      display: none;\n    }\n    \n    #navProfileButton{\n      display: none;\n    }\n    \n    .pages {\n      margin-bottom: 12px;\n    }\n    \n    .menu-options {\n      font-size: 18px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 52px;\n      padding: 2px 0px;\n    }\n    \n    .pages a {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      color: white;\n      text-decoration: none;\n      width: 77%;\n      margin: auto;\n      margin: 0px 10px;\n      padding: 0 0 0 46px;\n    }\n    \n    .pages a:hover {\n      background-color: var(--clear);\n      border-radius: 12px;\n      width: auto;\n    }\n    \n    .settings,\n    .logout {\n      display: flex;\n      flex-direction: row;\n      gap: 16px;\n      align-items: center;\n      margin: 4px 4px 0 16px;\n      background: none;\n      border: none;\n      height: 52px;\n      font-size: 18px;\n      font-family: inherit;\n      color: white;\n      cursor: pointer;\n      width: 95%;\n    }\n    \n    .logout {\n      width: auto;\n      padding: 0px 0px 0px 40px;\n    }\n    \n    .menu-border {\n      border: 1px solid rgba(255, 255, 255, 0.13);\n      width: 100%;\n      height: auto;\n    }\n    \n    @media screen and (max-width: 750px) {\n      a.button.musicgenerator {\n          display: none;\n        }\n    }\n    \n    @media screen and (max-width: 620px) {\n        .hero h1 {\n            font-size: 76px;\n        }\n        .titlesparkle {\n            top: -55px;\n            height: 34%;\n            margin-left: -60px;\n        }\n    }\n    \n    @media screen and (max-width: 600px) {\n      a.button.imagegenerator, a.button.musicgenerator {\n        display: none;\n      }\n    }\n    \n    @media screen and (max-width: 500px) {\n      .nav-buttons {\n        justify-content: space-between;\n        width: 100%;\n      }\n      a.button.login,  a.button.headerbutton {\n        font-size: 16px;\n        margin-right: 8px;\n      }\n      a.button.login {\n        display: none;\n      }\n    \n    }\n    \n    @media screen and (max-width: 420px) {\n        .hero h1 {\n            font-size: 56px;\n        }\n        .titlesparkle {\n            top: -40px;\n            margin-left: -55px;\n        }\n        a.button.headerbutton {\n          font-size: 13px;\n          margin-right: 6px;\n        }\n    }\n    \n    @media screen and (max-width: 345px) {\n        .hero h1 {\n            font-size: 48px;\n        }\n        .titlesparkle {\n            top: -40px;\n            margin-left: -52px;\n        }\n        a.button.headerbutton {\n          font-size: 12px;\n          margin-right: 2px;\n          padding: 5px 5px;\n        }\n    }\n    \n    @media screen and (max-width: 300px) {\n      .nav-buttons {\n        justify-content: flex-end;\n        width: 100%;\n      }\n      a.button.videogenerator, a.button.musicgenerator {\n        display: none;\n      }\n      a.button.aichat {\n          font-size: 14px;\n      }\n    }\n    \n    \n    " }} />
            <div className="nav-items">
                <a className="logo-link" href="/">
                    <svg width={45} height={45} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={45} height={45} rx={12} fill="white" fillOpacity="0.04" />
                        <path d="M13.4781 27.6456V24.5259H10.5015V27.5763H13.4781V27.6456Z" fill="white" />
                        <path d="M33.9079 25.8433C33.8402 26.1899 33.7049 26.6058 33.5696 26.9525C33.5696 27.0218 33.502 27.0911 33.502 27.1605C33.2314 27.8537 32.8931 28.4777 32.5549 29.1016C32.2166 29.5869 31.8784 30.0722 31.5401 30.4881C31.3372 30.6961 31.2019 30.9041 30.9989 31.1121L31.0666 31.0428C30.796 31.3201 30.5254 31.5974 30.1871 31.8747C30.0518 32.0133 29.8489 32.0827 29.7136 32.2213C29.6459 32.2213 29.5783 32.2906 29.5783 32.2906C29.1724 32.5679 28.7665 32.7759 28.2929 32.9839C27.7517 33.2612 27.1429 33.4692 26.534 33.6078C25.9252 33.7465 25.2487 33.8851 24.6398 33.9545C23.8957 34.0238 23.1515 34.0238 22.3397 33.8851C18.8895 33.3999 15.9806 31.3894 14.2217 28.6163C14.6276 29.1016 15.0335 29.5176 15.507 29.8642C16.3188 30.4881 17.2659 30.9734 18.3483 31.1814C18.8219 31.3201 19.3631 31.3201 19.8366 31.3201C19.9719 31.3201 20.1072 31.3201 20.2425 31.3201C20.9867 31.3201 21.7309 31.1814 22.4074 30.9041C22.5427 30.8348 22.6103 30.8348 22.7456 30.7654C22.9486 30.6961 23.2192 30.5575 23.4221 30.4881C23.4898 30.4881 23.4898 30.4188 23.5574 30.4188C25.6546 29.2403 27.2105 27.1605 27.4811 24.526C27.5488 24.0408 27.5488 23.4861 27.5488 23.0009C29.443 23.0009 30.9989 24.1794 31.8107 25.7739C31.8784 25.9819 31.946 26.1899 32.0137 26.3979C32.0137 26.2592 32.0137 26.1899 32.0137 26.0512C32.0137 25.4966 31.946 25.0113 31.8784 24.4567C31.2019 20.7824 28.0223 18.0787 24.2339 18.0787C23.7604 18.0787 23.3545 18.148 22.8809 18.2173C22.8809 18.2173 22.8809 18.2173 22.8133 18.2173C21.4603 18.4253 20.5132 18.8413 19.0248 19.9505C18.416 20.3665 17.1983 21.4757 16.2512 22.3769C15.7776 22.8622 14.9658 22.3769 15.1011 21.6837C15.2364 21.0597 15.4394 20.3665 15.8453 19.6039C13.9511 16.9001 13.9511 13.9884 17.6718 11.4233C19.8366 9.89813 23.4221 9.48217 26.737 10.7301C28.7665 9.62083 31.6754 9.5515 34.3138 12.4632C34.5844 12.7405 34.3814 13.2258 33.9755 13.2258C33.2314 13.2258 32.2166 13.4338 31.4048 14.0577C31.4725 14.1271 31.5401 14.2657 31.6754 14.4044C34.855 18.7026 34.7873 22.7236 33.9079 25.8433Z" fill="white" />
                    </svg>
                </a>
                <div className="nav-buttons">
                    <a className="button headerbutton aichat" href="/chat">AI Chat</a>
                    <a className="button headerbutton imagegenerator" href="/machine-learning-model/text2img">AI Image Generator</a>
                    <a className="button headerbutton videogenerator" href="/video">AI Video</a>
                    <a className="button headerbutton musicgenerator" href="/music">AI Music Generator</a>
                    <a className="button login" id="headerLoginButton" onclick="openLogin()">Login</a>
                    <nav>
                        <ul>
                            <li className="dropdown">
                                <button className="drop-menu-button" id="dropMenuButton" onClick={toggleDropdown}>
                                    <img
                                        src="https://deepai.org//static/images/HiUser.svg"
                                        className="menu-icon dropbtn"
                                        id="userIconDrop"
                                        loading="lazy"
                                        alt="User Icon"
                                    />
                                    <img
                                        src="https://deepai.org//static/images/IoMenu.svg"
                                        className="menu-icon dropbtn"
                                        id="sandwichIconDrop"
                                        loading="lazy"
                                        alt="Menu Icon"
                                    />
                                </button>

                                {/* Dropdown content visibility is controlled by state */}
                                {isDropdownOpen && (
                                    <ul id="mainNavDropdown">
                                        <div className="exit" onClick={toggleDropdown}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M11.9997 10.586L16.9497 5.63599L18.3637 7.04999L13.4137 12L18.3637 16.95L16.9497 18.364L11.9997 13.414L7.04974 18.364L5.63574 16.95L10.5857 12L5.63574 7.04999L7.04974 5.63599L11.9997 10.586Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div id="navProfileSection" className="nav-profile-section">
                                            <img
                                                className="usericon"
                                                id="navUserAvatar"
                                                alt="avatar"
                                                loading="lazy"
                                                onClick={() => window.location.replace('/dashboard/profile')}
                                                src="/static/images/dolphin-icon.jpeg"
                                            />
                                            <div className="nav-usernames">
                                                <p className="nav-profilename" id="navUserName">John Doe</p>
                                                <p className="nav-username" id="navUserEmail">john@example.com</p>
                                            </div>
                                        </div>
                                        <button id="navProfileButton" className="button nav-profile-button" onClick={() => window.location.replace('/dashboard/profile')}>
                                            View Profile
                                        </button>
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
                                                <button id="login-button-dropdown"  className="logout">
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

