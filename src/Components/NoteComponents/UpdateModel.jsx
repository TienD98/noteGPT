import UpdateModelHandler from "../../Handlers/UpdateModelHandler";

function UpdateModel({ idNote, noteUpdate, dataNote, setDataNote }) {
    const idName = "updateNote" + idNote;
    const idButtonName = "buttonUpdate" + idNote;
    const idTextareaName = "textareaModel" + idNote;

    const handleUpdateButtonClick = async (event) => {
        const noteUpdated = document.getElementById(idTextareaName).value;
        let result = await UpdateModelHandler().updateNote(event, idButtonName, idNote, noteUpdated);
        if (result) {
            setDataNote(dataNote.map(item => {
                if (item.id === idNote) {
                    item.note = noteUpdated;
                }
                return item;
            }));
        }
    }

    return (
        <div className="modal fade" id={idName} tabIndex="-1" aria-labelledby="updateNoteLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5" id="exampleModalLabel">Update</h2>
                        <button onClick={() => document.getElementById(idButtonName).classList.remove('visually-hidden')} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div id='alert-update-note-success' className="my-2 alert alert-success p-1 visually-hidden" role="alert">Update note success!</div>

                            <div className="mb-3">
                                <label htmlFor="note-new-text" className="col-form-label">Notes:</label>
                                <textarea className="form-control" defaultValue={noteUpdate} id={idTextareaName} required></textarea>
                            </div>
                            <button onClick={handleUpdateButtonClick} id={idButtonName} type="submit" className="btn btn-primary newnote-button" >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateModel;