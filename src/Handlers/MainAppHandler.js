import axios from "axios";

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
                console.log(res);
                navigate('/signin');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function checkAuthenticate(navigate) {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/validate', { withCredentials: true })
            .then((res) => {
                if (!res.data.authenticate) {
                    navigate('/signin');
                }
                else {
                    console.log('auth');
                }
            })

    }

    return { toast, mousehold, mouseup, mousemove, clickLogout, checkAuthenticate }
}
export default MainAppHandler;

