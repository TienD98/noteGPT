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

    return { clickLogout, disable };
}

export default HomeHandler;