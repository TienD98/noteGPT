import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

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
                            <button id='signin' className='btn btn-dark' onClick={() => navigate('/noteGPT/signin')}>Sign In</button>
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