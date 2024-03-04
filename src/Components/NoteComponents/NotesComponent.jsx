import MainAppHandler from '../../Handlers/MainAppHandler';

function NotesComponent({ id, title, note }) {
    const idname = "toast" + id;
    let noteInSideBar;

    if (note.length >= 40) {
        noteInSideBar = note.substring(0, 39) + '...';
    } else {
        noteInSideBar = note;
    }
    return (
        <>
            <a id={id} onClick={() => MainAppHandler().toast(idname)} className="list-group-item list-group-item-action py-3 lh-tight" href="#/main">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="mb-1 titleNote">{title}</strong>
                </div>
                <div className="col-10 mb-1 small textMain">
                    <p>{noteInSideBar}</p>
                </div>
            </a>
        </>
    )
}

export default NotesComponent