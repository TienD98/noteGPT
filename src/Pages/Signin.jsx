import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();
    const background = {
        background: 'linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)',
        height: '100vh'
    };

    return (
        <div style={background}>
            <div className="container d-flex justify justify-content-center text-center align-items-center" style={{ minHeight: "100vh", width: '18rem' }}>
                <div className="row border rounded-4 border-secondary border-opacity-10" style={{ backgroundColor: '#CBF1F5' }}>
                    <div className="col">
                        <form className="" novalidate>
                            <h5 className="card-title my-3">Login</h5>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                            </div>
                            <button href="#" className="btn btn-primary border border-primary border-opacity-10" style={{ backgroundColor: "#71C9CE" }}>Sign in</button>
                            <br />
                            <button href="#" className="m-3 btn btn-primary border border-primary border-opacity-10" style={{ backgroundColor: "#71C9CE" }} onClick={() => navigate('/noteGPT/register')}>Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin