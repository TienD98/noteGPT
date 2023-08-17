import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import userIcon from '../assets/user.svg';
import HomeHandler from '../Handlers/HomeHandler';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        HomeHandler().checkAuthenticate();
    });

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">noteGPT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <button id='signin' className='btn btn-dark' onClick={() => navigate('/signin')}>Sign In</button>
                            <div className='dropstart visually-hidden' id='login'>
                                <button className='btn dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '50px' }}><img className='img-fluid' src={userIcon} alt="My Icon" /></button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Setting</a></li>
                                    <li><a className="dropdown-item" onClick={HomeHandler().clickLogout}>Logout</a></li>
                                </ul>
                            </div>
                        </span>
                        <span className="navbar-text">
                            <button id='logout' className='btn btn-dark visually-hidden' >Log out</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Home