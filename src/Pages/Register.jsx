import SigninHandler from '../Handlers/SigninHandler';
import RegisterHandler from '../Handlers/RegisterHandler';
import React, { useEffect } from 'react';

function Register() {
    const background = {
        background: 'linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)',
        height: '100vh'
    };
    const { handlerUsername, handlerPassword } = SigninHandler();
    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById('user').value || !document.getElementById('pass').value || document.getElementById('check').checked === false) {
                document.getElementById('butt').classList.add('disabled');
            } else {
                document.getElementById('butt').classList.remove('disabled');
            }
        }, 200);
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <div style={background}>
            <div className="container  d-flex justify justify-content-center text-center align-items-center" style={{ minHeight: "100vh", width: '18rem' }}>
                <div className="row border border-secondary rounded-4 border-opacity-10" style={{ backgroundColor: '#CBF1F5' }}>
                    <div className="col">
                        <form className='needs-validation' novalidate>
                            <h5 className="card-title my-3">Register</h5>
                            <div className="input-group mb-3 ">
                                <input id='user' type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handlerUsername} required />
                            </div>
                            <div className="mb-3">
                                <input id='pass' type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={handlerPassword} required />
                            </div>
                            <div className="form-check">
                                <input id='check' className="form-check-input" type="checkbox" value="checked" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                            </div>
                            <button onClick={() => console.log(document.getElementById('check').checked)} href="#" type='submit' className="mt-1 mb-3 bt btn btn-primary border border-primary border-opacity-10" id='butt' style={{ backgroundColor: "#71C9CE" }}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register