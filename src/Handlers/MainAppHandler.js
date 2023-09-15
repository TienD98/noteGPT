import axios from "axios";

function MainAppHandler() {

    function toast(name) {
        document.getElementById(name).classList.remove('hide');
        document.getElementById(name).classList.add('show');
    }

    function mousehold(event, offsetX, offsetY, isDragging, currentElement) {
        isDragging.current = true;
        const element = event.currentTarget;
        element.style.cursor = "grabbing";
        currentElement.current = event.currentTarget;
        offsetX.current = event.clientX - element.getBoundingClientRect().left;
        offsetY.current = event.clientY - element.getBoundingClientRect().top;

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

    async function getNoteArray() {
        try {
            let response = await axios.get('https://notegpt-686471fdfc45.herokuapp.com/profile/getnote', { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }

    async function addNote(event, newTitle, newNote, dataNode, setDataNode) {
        event.preventDefault();
        axios.post('https://notegpt-686471fdfc45.herokuapp.com/profile/addnote',
            {
                title: newTitle,
                note: newNote
            },
            { withCredentials: true })
            .then((res) => {
                let user = {
                    id: res.data.id,
                    title: res.data.title,
                    note: res.data.note
                }
                setDataNode([...dataNode, user]);
                document.getElementById('alert-add-note-success').classList.remove('visually-hidden');
                document.getElementById('addnote-button').classList.add('visually-hidden');
            })
            .catch((err) => {
                console.error('error sending note request:', err);
            })
    }

    function addnoteEffect() {
        document.getElementById('alert-add-note-success').classList.add('visually-hidden');
        document.getElementById('addnote-button').classList.remove('visually-hidden');

    }

    function deleteNote(noteId, setData, data) {
        axios.delete(`https://notegpt-686471fdfc45.herokuapp.com/profile/delete/${noteId}`, { withCredentials: true })
            .then(() => {
                setData(data.filter(item => item.id !== noteId));
            })
            .catch((err) => {
                console.error('error sending delete note request:', err);
            })
    }

    return { deleteNote, addnoteEffect, addNote, getNoteArray, toast, mousehold, mouseup, mousemove, clickLogout, checkAuthenticate, getUsername }
}
export default MainAppHandler;
window.MainAppHandler = MainAppHandler;

