function Signin() {
    const background = {
        background: 'linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9, #71C9CE)',
        height: '100vh'
    };

    return (
        <div style={background}>
            <div className="container  d-flex justify justify-content-center text-center align-items-center" style={{ minHeight: "100vh", width: '18rem' }}>
                <div className="row card border border-secondary border-opacity-10" style={{ backgroundColor: '#CBF1F5' }}>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title my-3">Login</h5>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <button href="#" className="btn btn-primary border border-primary border-opacity-10" style={{ backgroundColor: "#71C9CE" }}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin