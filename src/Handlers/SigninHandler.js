import axios from "axios";

function SigninHandler() {

    const signin = (user, pass, nav) => {
        axios.post('https://notegpt-686471fdfc45.herokuapp.com/signin',
            {
                username: user,
                password: pass
            },
            { withCredentials: true })
            .then((res) => {
                localStorage.setItem('authenticated', 'true');
                document.getElementById('alert').classList.add('visually-hidden');
                nav('/');
            })
            .catch((err) => {
                document.getElementById('alert').classList.remove('visually-hidden');
                console.log(err);
            })

    }

    const onchangeInput = () => {
        document.getElementById('alert').remove('visually-hidden');
    }
    return { signin, onchangeInput }
}

export default SigninHandler;
