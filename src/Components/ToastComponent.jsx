import MainAppHandler from '../Handlers/MainAppHandler';

function ToastComponent({ id, title, note, offX, offY, dragging, current }) {

    return (
        <div onMouseDown={(event) => { MainAppHandler().mousehold(event, offX, offY, dragging, current) }}
            className="toast hide"
            role="alert"
            data-bs-animation="false"
            data-bs-autohide="false"
            id={"toast" + id}
            style={{ position: "fixed", left: "619px", top: "160px" }}>
            <div className="toast-header">
                <strong className="me-auto detailTitleNote">{title}</strong>
                <button className="btn-close ms-2 mb-1 close" type="button" aria-label="Close" data-bs-dismiss="toast"></button>
            </div>
            <div className="toast-body" role="alert">
                <textarea disabled className="detailNote" defaultValue={note} rows="8" cols="42"></textarea>
                <br />
                <button className="btn btn-primary me-1" type="button">Edit</button>
                <button className="btn btn-primary visually-hidden" type="button">Save</button>
            </div>
        </div >
    );
}

export default ToastComponent;