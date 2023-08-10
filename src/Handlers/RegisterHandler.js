import axios from "axios";

function RegisterHandler(user, pass) {
    axios.get('https://notegpt-686471fdfc45.herokuapp.com/').then(
        (res) => {
            console.log(res.data);
        }
    )
        .catch((err) => {
            console.error("error", err);
        })
}

export default RegisterHandler;