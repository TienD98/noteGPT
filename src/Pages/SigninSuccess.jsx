import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";

function SigninSuccess() {
    let user = useRef();

    useEffect(() => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome', { withCredentials: true })
            .then((res) => {
                user.current = res.data;
                console.log(user.current);
            }).catch((err) => {
                console.log(err);
            });
    });

    const click = () => {
        document.getElementById('user').innerHTML = "Username:" + user.current.username;
        document.getElementById('pass').innerHTML = "Password: " + user.current.password;
        document.getElementById('hash').innerHTML = "Hashed Password:" + user.current.hashedPassword;
    }

    return (
        <div>
            <h1>WELCOME TO THE APP! </h1>
            <div>
                <button className="btn btn-link" onClick={click}>account</button>
                <button className="btn btn-link" onClick={click}>log out</button>
            </div>
            <div className="container">
                <h3 id="user"></h3>
                <h3 id="pass"></h3>
                <h3 id="hash"></h3>
            </div>
        </div>
    )
}

export default SigninSuccess