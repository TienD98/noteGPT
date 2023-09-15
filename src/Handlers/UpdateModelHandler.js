import axios from "axios";

//update note on the database and then disable update button
// replace the old note with the new note stored in data using setData 
function UpdateModelHandler() {
    async function updateNote(eventNote, idButton, idNote, noteText) {
        eventNote.preventDefault();
        try {
            let response = await axios.put('https://notegpt-686471fdfc45.herokuapp.com/profile/update',
                {
                    id: idNote,
                    note: noteText
                }, { withCredentials: true });
            document.getElementById(idButton).classList.add('visually-hidden');
            return response.data;
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }
    return { updateNote }
}

export default UpdateModelHandler;