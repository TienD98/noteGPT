// import WelcomeHandler from '../Handlers/WelcomeHandler';
import axios from "axios";

function SigninSuccess() {
    let username = "";
    let password = "";
    let hashedPassword = "";
    const click = () => {

        axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome', { withCredentials: true })
            .then((res) => {
                username = res.data.username;
                password = res.data.password;
                hashedPassword = res.data.hashedPassword;
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })

    }
    return (
        <div id='loader'>
            <h1>WELCOME TO THE APP! </h1>
            {/* <button className="btn btn-primrary" onClick={() => { WelcomeHandler() }}>Click</button> */}
            <button className='btn btn-link' onClick={click}>account</button>
            <div>
                <h3>username: {username}</h3>
                <h3>password: {password}</h3>
                <h3>hashedPassword: {hashedPassword}</h3>
            </div>
        </div>
    )
}

export default SigninSuccess