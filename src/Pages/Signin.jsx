import { useNavigate } from 'react-router-dom';
import SigninHandler from '../Handlers/SigninHandler';
import { useEffect } from 'react';

function Signin() {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('hi');
        SigninHandler(navigate).checkLogin();
    }
    );

    return (
        <div className="rowsignin signinmain row">
            <div className="col-8 col-sm-6 col-md-5 col-lg-6 offset-2 mx-auto" id="login">
                <a className="my-3 headerlink" href='#'>NoteGPT</a>
                <form className="p-4">
                    <div id='alert' className="my-2 alert alert-danger p-1 visually-hidden" role="alert">
                        Error, try again!
                    </div>
                    <p className='text-start'>User name</p><input id="user" className="form-control inputuser" type="text" />
                    <p className='text-start'>Password</p><input id='pass' className="form-control" type="password" />
                    <div className="btn-signin"><button onClick={() => SigninHandler().signin(document.getElementById('user').value, document.getElementById('pass').value, navigate)} className="btn btn-primary" type="button">Sign in</button></div>
                    <div className="btn-signin">
                        <hr />
                        <p style={{ marginBottom: "15px" }}>or</p><button onClick={SigninHandler().clickGithub} className="btn btn-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>&nbsp; Sign in with GitHub&nbsp;</button>
                        <p className='pt-4'>new NoteGPT? <a href='#/register' style={{ textDecoration: "none", color: "#66FCF1" }}>Signup</a></p>
                    </div>
                </form>
            </div>
            <div className="col-lg-6" id="img"></div>
        </div>
    )
}

export default Signin