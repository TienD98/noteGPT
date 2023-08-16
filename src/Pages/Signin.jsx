import { useNavigate } from 'react-router-dom';
import SigninHandler from '../Handlers/SigninHandler';
import { useEffect } from 'react';

function Signin() {
    const navigate = useNavigate();
    const background = {
        background: 'linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)',
        height: '100vh'
    };

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('authenticated') === 'true';

        if (isAuthenticated) {
            navigate('/');
        }
    }
    );

    return (
        <div style={background}>
            <div className="container d-flex justify justify-content-center text-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="row border rounded-4 border-secondary border-opacity-10" style={{ backgroundColor: '#CBF1F5' }} >
                    <div className="col">
                        <h5 className="card-title my-3">Log in to noteGPT</h5>
                        <button href="#" className="my-2 btn btn-light border border-primary border-opacity-10" >Log in with Google</button>
                        <br />
                        <button href="#" className="mb-2 btn btn-light border border-primary border-opacity-10" >Log in with Github</button>
                        <br />
                        <button href="#" className="mb-2 btn btn-light border border-primary border-opacity-10" >Log in with Facebook</button>
                        <hr />
                        <p>or</p>
                        <div id='alert' className="my-2 alert alert-danger p-1 visually-hidden" role="alert">
                            Error, try again!
                        </div>
                        <div className="mb-1">
                            <input id="user" type="text" className="form-control" placeholder="Phone, email, or usernameme" />
                        </div>
                        <div className="mb-2">
                            <input id='pass' type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={() => SigninHandler().signin(document.getElementById('user').value, document.getElementById('pass').value, navigate)} className="mb-2 btn btn-primary border border-primary border-opacity-10" style={{ backgroundColor: "#71C9CE" }}>Log in</button>
                        {/* <br /> */}
                        {/* <button href="#" className="btn btn-primary border border-primary border-opacity-10" style={{ backgroundColor: "#71C9CE" }}>Forgot password?</button> */}
                        <br />
                        <button href="#" className="m-2 btn btn-link " onClick={() => navigate('/register')}>Sign up</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Signin