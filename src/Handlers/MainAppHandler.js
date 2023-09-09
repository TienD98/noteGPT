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
            })

    }

    function getUsername(user) {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/profile/username', { withCredentials: true })
            .then((res) => {
                user.current = res.data;
                document.getElementById('main-username-title').innerHTML = user.current;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getNote() {
        axios.get('https://notegpt-686471fdfc45.herokuapp.com/profile/getnote', { withCredentials: true })
            .then((res) => {
                // console.log(res.data);
                const container = document.createElement('div');

                for (let i = 0; i < res.data.length; i++) {
                    const id = res.data[i].id;
                    const title = res.data[i].title;
                    let note = res.data[i].note;
                    if (note.length >= 40) {
                        note = note.substring(0, 39) + '...';
                    }
                    container.innerHTML = `<a id="` + id + `" onclick="MainAppHandler().toast('toast` + id + `')" class="list-group-item list-group-item-action py-3 lh-tight" href="#/main"><div class="d-flex justify-content-between align-items-center w-100"><strong class="mb-1 titleNote">` + title + `</strong><i class="icon ion-android-delete" id="removeNote"></i></div><div class="col-10 mb-1 small textMain"><p>` + note + `</p></div></a>`
                    document.getElementById('list-notes').appendChild(container.firstChild);
                }
            })
    }

    async function getNoteArray() {
        try {
            let response = await axios.get('https://notegpt-686471fdfc45.herokuapp.com/profile/getnote', { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }


    return { getNoteArray, getNote, toast, mousehold, mouseup, mousemove, clickLogout, checkAuthenticate, getUsername }
}
export default MainAppHandler;
window.MainAppHandler = MainAppHandler;

