import { useEffect } from "react";
import axios from "axios";

function SigninSuccess() {
    let username = "";
    let password = "";
    let hashedpassword = "";
    useEffect(() => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome').then((res) => {
            console.log(res.data);
            const user = res.data;
            username = user.username;
            password = user.password;
            hashedpassword = user.hashedPassword
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <div>
            <h1>WELCOME TO THE APP! </h1>
            <h3>Your username is: {username}</h3>
            <h3>Your password is: {password}</h3>
            <h3>Your hashedpassword is: {hashedpassword}</h3>
        </div>
    )
}

export default SigninSuccess