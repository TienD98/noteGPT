import MainAppHandler from '../Handlers/MainAppHandler';

function ToastComponent({ target, id, title, note, offX, offY, dragging, current, setDataNote, dataNote }) {
    const idNameEdit = "edit" + id;
    const idNameTextarea = "textarea" + id;
    const update = "#updateNote" + target;

    return (
        <div onMouseDown={(event) => { MainAppHandler().mousehold(event, offX, offY, dragging, current) }}
            className="toast hide"
            role="alert"
            data-bs-animation="false"
            data-bs-autohide="false"
            id={"toast" + id}
            style={{ position: "fixed", left: "400px", top: "0px" }}>
            <div className="toast-header">
                <strong className="me-auto detailTitleNote">{title}</strong>
                <button className="btn-close ms-2 mb-1 close" type="button" aria-label="Close" data-bs-dismiss="toast"></button>
            </div>
            <div className="toast-body" role="alert">
                <textarea id={idNameTextarea} disabled className="detailNote" defaultValue={note} rows="8" cols="42" ></textarea>
                <br />
                <button data-bs-toggle="modal" data-bs-target={update} id={idNameEdit} className="btn btn-primary me-1" type="button" >Edit</button>
                <button onClick={async () => {
                    const data = await MainAppHandler().deleteNote(id, setDataNote, dataNote);
                    console.log(data);
                }} className="btn btn-primary me-1" type="button">Delete</button>
            </div>
        </div >
    );
}

export default ToastComponent;