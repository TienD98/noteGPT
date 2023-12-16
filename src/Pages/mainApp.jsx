import { useEffect, useRef, useState } from 'react';
import MainAppHandler from '../Handlers/MainAppHandler';
import { useNavigate } from 'react-router-dom';
import ToastComponent from '../Components/ToastComponent';
import NotesComponent from '../Components/NotesComponent';
import UpdateModel from '../Components/updateModel';
import NewChatComponent from '../Components/NewChatComponent';
import ConversationComponent from '../Components/ConversationsComponent';

function mainApp() {
    let offsetX = useRef(), offsetY = useRef(), isDragging = useRef(), currentElement = useRef(), username = useRef();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        MainAppHandler().checkAuthenticate(navigate);
        MainAppHandler().getUsername(username);
        MainAppHandler().getNoteArray().then(data => { setData(data) });
    }, []);

    MainAppHandler().mouseup(isDragging, currentElement);
    MainAppHandler().mousemove(isDragging, offsetX, offsetY, currentElement);

    return (
        <>
            <NewChatComponent></NewChatComponent>
            {/* <ConversationComponent></ConversationComponent> */}

            {/* Toast components */}
            {data ? data.map((item) => { return <ToastComponent setDataNote={setData} dataNote={data} key={item.id} id={item.id} title={item.title} note={item.note} offX={offsetX} offY={offsetY} dragging={isDragging} current={currentElement} target={item.id} /> }) : <p>loading notes</p>}

            {/* left side note bar */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" data-bs-backdrop="false" id="offcanvas-list">
                <div className="offcanvas-header mainheadshadow" style={{ borderBottom: "1px solid black" }}>
                    <div className="dropdown"><button id='main-username-title' className="btn btn-primary dropdown-toggle usernamebutton" aria-expanded="false" data-bs-toggle="dropdown" type="button" ></button>
                        <div className="dropdown-menu"><a onClick={MainAppHandler().clickLogout} className="dropdown-item" href="#/signin">Log out</a></div>
                    </div><a className="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"></a>
                    <hr /><button className="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-between p-0">
                    <div>
                        <hr className="my-0" />
                        <div id='list-notes' className="list-group list-group-flush border-bottom scrollarea">
                            <a data-bs-toggle="modal" data-bs-target="#exampleModal" className="list-group-item list-group-item-action py-3 lh-tight" href="#/main">
                                <div className="d-flex justify-content-between align-items-center w-100"><strong className="titleNote">Add note</strong></div>
                            </a>
                            {/* note component here */}
                            {data ? data.map((item) => { return <NotesComponent key={item.id} id={item.id} title={item.title} note={item.note} /> }) : <p>loading notes</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* button toggle side note bar */}
            <div onMouseDown={(event) => { MainAppHandler().mousehold(event, offsetX, offsetY, isDragging, currentElement) }} className="text-center" id="draggableBox"><a href="#/main" data-bs-target="#offcanvas-list"
                data-bs-toggle="offcanvas"><lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="hover"
                    colors="primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#f9c9c0"
                    state="hover" style={{ width: "50px", height: "50px" }}>
                </lord-icon>
            </a></div>

            {/* add note model */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">New note</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(event) => MainAppHandler().addNote(event, document.getElementById('note-new-title').value, document.getElementById('note-new-text').value, data, setData)}>
                                <div id='alert-add-note-success' className="my-2 alert alert-success p-1 visually-hidden" role="alert">Add note success!</div>
                                <div className="mb-3">
                                    <label htmlFor="note-new-title" className="col-form-label">Title name:</label>
                                    <input type="text" className="form-control" id="note-new-title" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="note-new-text" className="col-form-label">Notes:</label>
                                    <textarea className="form-control" id="note-new-text" required></textarea>
                                </div>
                                <button type="button" onClick={MainAppHandler().addnoteEffect} className="btn btn-primary newnote-button me-2" data-bs-dismiss="modal">Close</button>
                                <button id='addnote-button' type="submit" className="btn btn-primary newnote-button" >Add note</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* update note model */}
            {data ? data.map((item) => { return <UpdateModel key={item.id} idNote={item.id} noteUpdate={item.note} dataNote={data} setDataNote={setData} /> }) : <p>loading</p>}
        </>
    )
}

export default mainApp