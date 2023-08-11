import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function RegisterHandler() {
    const navigate = useNavigate();

    const register = (user, pass) => {
        axios.post('https://notegpt-686471fdfc45.herokuapp.com/register', {
            username: user,
            password: pass
        }).then(
            (res) => {
                console.log(res.data);
                if (res.data === 'Success register!') {
                    navigate('/success');
                }
            }
        )
            .catch((err) => {
                document.getElementById('alert').classList.remove('visually-hidden');
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