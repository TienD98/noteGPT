import axios from "axios";

function HomeHandler() {

    function disable() {
        document.getElementById('signin').classList.remove('visually-hidden');
        document.getElementById('login').classList.add('visually-hidden');
    }

    const clickLogout = () => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/logout', { withCredentials: true })
            .then((res) => {
                localStorage.removeItem('authenticated');
                disable();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const checkAuthenticate = () => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/validate', { withCredentials: true })
            .then((res) => {
                if (res.data.authenticate) {
                    console.log('hi true');
                    console.log(res.data.authenticate);
                    document.getElementById('signin').classList.add('visually-hidden');
                    document.getElementById('login').classList.remove('visually-hidden');
                } else {
                    console.log('hi false');
                    disable();
                }
            })
            .catch((err) => {
                console.log('hi err');
                console.log(err.response.data);
            })
    }

    return { clickLogout, disable, checkAuthenticate };
}

export default HomeHandler;