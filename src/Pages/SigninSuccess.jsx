import WelcomeHandler from '../Handlers/WelcomeHandler';

function SigninSuccess() {

    return (
        <div>
            <h1>WELCOME TO THE APP! </h1>
            <button className="btn btn-primrary" onClick={() => { WelcomeHandler() }}>Click</button>
        </div>
    )
}

export default SigninSuccess