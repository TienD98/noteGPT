import axios from "axios";
import { useEffect } from "react";

function RegisterHandler() {

    const register = (user, pass, nav) => {
        axios.post('https://notegpt-686471fdfc45.herokuapp.com/register', {
            username: user,
            password: pass
        }).then(
            (res) => {
                if (res.data === 'Success register!') {
                    nav('/signin');
                } else if (res.data === 'user exist!') {
                    document.getElementById('alert').classList.remove('visually-hidden');
                }
            }
        )
            .catch((err) => {
                console.log(err);
            })
    }

    const buttonEffect = () => {
        useEffect(() => {
            document.getElementById('alert').classList.add('visually-hidden');
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
    }
    return { buttonEffect, register }
}

export default RegisterHandler;