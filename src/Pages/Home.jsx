import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HomeHandler from '../Handlers/HomeHandler';
import React, { useRef } from 'react';

function Home() {
    const navigate = useNavigate();
    const section2Ref = useRef(null);

    const handleClick = () => {
        if (section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        console.log('hi');
        HomeHandler().checkAuthenticate();
    });

    return (
        <div>
            {/* NAV BAR*/}
            <nav className="navbar navbar-expand-md sticky-top bg-warning" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand d-md-flex align-items-center justify-content-md-center"><span id='logo' onMouseOver={HomeHandler().logoFlashIn} onMouseOut={HomeHandler().logoFlashOut} className=''>NoteGPT</span></a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-6" aria-controls="navcol-6" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon menubutton"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0 order-md-first" id="navcol-6">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a onClick={handleClick} className="nav-link active" href="#">Features</a></li>
                        </ul>
                        <div className="d-md-none my-2"><button id='signin' onClick={() => navigate('/signin')} className="btn btn-primary" type="button">Sign in</button></div>
                        {/* dropdown nav */}
                        <div className="d-md-none my-2 visually-hidden" id="login">
                            <div className="dropdown"><a aria-expanded="false" data-bs-toggle="dropdown" href="#"><button
                                className="btn btn-primary button-login" data-bss-hover-animate="pulse" type="button"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"
                                    fill="currentColor" className="login-icon">
                                    <path
                                        d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z">
                                    </path>
                                </svg></button></a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Switch theme</a>
                                    <a className="dropdown-item" href="#">Setting</a>
                                    <a className="dropdown-item" onClick={HomeHandler().clickLogout}>Log out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <a className="btn btn-primary" role="button" id='signin' onClick={() => navigate('/signin')} >Sign in</a>
                        {/* expand nav */}
                        <div className="dropstart visually-hidden" id='login'>
                            <a aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <button className="btn btn-primary button-login" data-bss-hover-animate="pulse" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"
                                        fill="currentColor" className="login-icon">
                                        <path
                                            d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z">
                                        </path>
                                    </svg>
                                </button></a>
                            <div className="dropdown-menu"><a className="dropdown-item" href="#">Switch theme</a><a
                                className="dropdown-item" >Setting</a><a className="dropdown-item" onClick={HomeHandler().clickLogout}>Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            {/* BANNER */}
            <section className="banner">
                <div className="text-center d-flex flex-column justify-content-center align-items-center div-banner">
                    <p className="header-banner">proud to introduce</p>
                    <h1>NoteGPT</h1>
                    <p className="banner-p">Unlock the future of collaboration and communication with NoteGPT, where creativity
                        meets convenience. Our state-of-the-art platform combines intelligent chat functionality with a seamless
                        note-taking experience.</p>
                </div>
            </section>
            {/* Transition */}
            <section className="d-flex flex-column justify-content-center align-items-center transition">
                <hr />
                <p className="trans-p">Whether you're brainstorming for your next big project, collaborating with a team, or simply
                    jotting down your thoughts, we've got you covered. Dive into dynamic conversations while keeping track of
                    your ideas, all in one place.</p>
                <hr ref={section2Ref} id="section2" />
            </section>
            {/* Features */}
            <section id="features" className="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column justify-content-center align-items-start feature-top">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary text-center flex-shrink-0 justify-content-center align-items-center icon-feature featureicon me-4 d-inline-block bs-icon xl featureicon">
                                <img className="note" src="src\assets\img\icons8-note-48.png" />
                            </div>
                            <h1 className="future-head"><br />Create &amp; Organize Notes</h1>
                            <p className="feature-p"><br />Design notes with unique titles and effortlessly switch between them,
                                ensuring your ideas are always at your fingertips.<br /><br /></p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-end middle-feature">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary text-center flex-shrink-0 justify-content-center align-items-center order-last ms-4 d-inline-block bs-icon xl icon-feature">
                                <img src="src\assets\img\icons8-chat-64.png" />
                            </div>
                            <h1 className="future-head"><br />Intelligent Chat</h1>
                            <p className="feature-p"><br />Engage with our AI-powered chat system that brings conversation to life.
                                Ask questions, seek guidance, or just have a friendly chat.<br /><br /></p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl icon-feature">
                                <img className="star" src="src\assets\img\icons8-star-48.png" />
                            </div>
                            <h1 className="future-head"><br />Join Now</h1>
                            <p className="feature-p"><br />Sign up today to explore a world where innovation meets inspiration. Be
                                part of the community that's shaping the way we communicate and create.<br /><br /></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="about">
                <div className="about p-2">
                    <h1 className="about-h pt-4">Developer</h1>
                    <p className="about-p mb-2">Hi there! I'm <span style={{ color: "#66FCF1", fontWeight: "bold" }}>Tien</span>, a recent
                        graduate with a Bachelor's degree in Computer Science based in Seattle. Passionate about technology,
                        gaming, and innovation, I founded&nbsp;<span style={{ color: "#66FCF1", fontWeight: "bold" }}>NoteGPT</span> to
                        bridge the gap between communication and creativity.<br /><br />With a goal to expand my coding skills and
                        contribute to the tech community, I have embarked on this journey to create a platform where ideas
                        flourish and collaboration becomes effortless. Whether it's a quick chat or jotting down creative
                        thoughts, I believe in providing tools that inspire and empower.<br /><br />Feel free to explore the app,
                        and don't hesitate to reach out if you have any questions or suggestions. Together, let's make
                        communication more interactive and fun!</p>
                </div>
            </section>
            {/* Footer */}
            <footer className="text-center bg-dark">
                <div className="container text-white py-4 py-lg-5">
                    <ul className="list-inline">
                        <li className="list-inline-item me-4"><a className="link-light foot-link">Web design</a></li>
                        <li className="list-inline-item me-4"><a className="link-light">Development</a></li>
                        <li className="list-inline-item"><a className="link-light">Hosting</a></li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item me-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook text-light">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                            </path>
                        </svg></li>
                        <li className="list-inline-item me-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter text-light">
                            <path
                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                            </path>
                        </svg></li>
                        <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram text-light">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                            </path>
                        </svg></li>
                    </ul>
                    <p className="mb-0">Copyright © 2023 Brand</p>
                </div>
            </footer>
        </div >
    )
}

export default Home