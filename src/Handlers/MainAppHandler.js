import axios from "axios";
import { Navigate } from "react-router-dom";

function MainAppHandler() {

    function toast(name) {
        document.getElementById(name).classList.remove('hide');
        document.getElementById(name).classList.add('show');
    }

    function mousehold(event, offsetX, offsetY, isDragging, currentElement) {
        isDragging.current = true;
        const element = event.currentTarget;
        currentElement.current = event.currentTarget;
        offsetX.current = event.clientX - element.getBoundingClientRect().left;
        offsetY.current = event.clientY - element.getBoundingClientRect().top;
        element.style.cursor = "grabbing";

    }

    function mouseup(isDragging, currentElement) {
        window.addEventListener("mouseup", function () {
            isDragging.current = false;
            if (currentElement.current) {
                currentElement.current.style.cursor = "grab";
                currentElement.current = null;
            }
        })
    };

    function mousemove(isDragging, offsetX, offsetY, currentElement) {
        window.addEventListener("mousemove", function (event) {
            if (isDragging.current && currentElement.current) {
                const x = event.clientX - offsetX.current;
                const y = event.clientY - offsetY.current;
                currentElement.current.style.left = x + "px";
                currentElement.current.style.top = y + "px";
            }
        })
    }

    const clickLogout = () => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/logout', { withCredentials: true })
            .then((res) => {
                localStorage.removeItem('authenticated');
                Navigate('/signin');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const checkAuthenticate = () => {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/validate', { withCredentials: true })
            .then((res) => {
                if (res.data.authenticate) {
                    console.log(res.data.authenticate);
                } else {
                    Navigate('/signin');
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    return { toast, mousehold, mouseup, mousemove, clickLogout, checkAuthenticate }
}
export default MainAppHandler;

