import SigninHandler from '../Handlers/SigninHandler';

function Register() {
    const background = {
        background: 'linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)',
        height: '100vh'
    };
    const { handlerUsername, handlerPassword } = SigninHandler();

    return (
        <div style={background}>
            <div className="container  d-flex justify justify-content-center text-center align-items-center" style={{ minHeight: "100vh", width: '18rem' }}>
                <div className="row border border-secondary rounded-4 border-opacity-10" style={{ backgroundColor: '#CBF1F5' }}>
                    <div className="col">
                        <form className='needs-validation' novalidate>
                            <h5 className="card-title my-3">Register</h5>
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handlerUsername} required />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={handlerPassword} required />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                            </div>
                            <button onClick={console.log('gi!')} href="#" type='submit' className="mt-1 mb-3 bt btn btn-primary border border-primary border-opacity-10" style={{ backgroundColor: "#71C9CE" }}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register