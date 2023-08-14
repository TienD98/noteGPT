import axios from "axios";

function SigninHandler() {
    axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome', { withCredentials: true })
        .then((res) => {
            document.getElementById('loader').append("<h1> as</h1>");
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
}

export default SigninHandler