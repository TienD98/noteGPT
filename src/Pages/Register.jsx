import RegisterHandler from '../Handlers/RegisterHandler';

function Register() {
    const background = {
        background: 'linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)',
        height: '100vh'
    };

    RegisterHandler().buttonEffect();

    return (

        <div style={background}>
            <div className="container  d-flex justify justify-content-center text-center align-items-center" style={{ minHeight: "100vh", width: '18rem' }}>
                <div className="row border border-secondary rounded-4 border-opacity-10" style={{ backgroundColor: '#CBF1F5' }}>
                    <div className="col">
                        <h5 className="card-title my-3">Register</h5>
                        <div id='alert' className="alert alert-danger p-1" role="alert">
                            Username existed!
                        </div>
                        <div className="mb-3 ">
                            <input id='user' type="text" className="form-control" placeholder="Username" onChange={() => document.getElementById('alert').classList.add('visually-hidden')} />
                        </div>
                        <div className="mb-3">
                            <input id='pass' type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-check">
                            <input id='check' className="form-check-input" type="checkbox" value="checked" required />
                            <label className="form-check-label">
                                Agree to terms and conditions
                            </label>
                        </div>
                        <button onClick={() => RegisterHandler().register(document.getElementById('user').value, document.getElementById('pass').value)} className="mt-1 mb-3 bt btn btn-primary border border-primary border-opacity-10" id='butt' style={{ backgroundColor: "#71C9CE" }}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register