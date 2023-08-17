import axios from "axios";

function SigninHandler(nav) {

    function success(nav) {
        localStorage.setItem('authenticated', 'true');
        document.getElementById('alert').classList.add('visually-hidden');
        nav('/');
    }

    function fail(err) {
        document.getElementById('alert').classList.remove('visually-hidden');
        console.log(err)
    }

    const signin = (user, pass, nav) => {
        axios.post('https://notegpt-686471fdfc45.herokuapp.com/signin',
            {
                username: user,
                password: pass
            },
            { withCredentials: true })
            .then((res) => {
                success(nav);
            })
            .catch((err) => {
                fail(err);
            })
    }

    const onchangeInput = () => {
        document.getElementById('alert').remove('visually-hidden');
    }

    const clickGithub = () => {
        window.location.href = "https://notegpt-686471fdfc45.herokuapp.com/auth/github";
    }

    const checkLogin = () => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/validate', { withCredentials: true })
            .then((res) => {
                if (res.data.authenticate) {
                    nav('/');
                }
            })
    }

    return { signin, onchangeInput, clickGithub, checkLogin }
}

export default SigninHandler;

