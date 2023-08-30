import { useEffect, useRef } from 'react';
import MainAppHandler from '../Handlers/MainAppHandler';

function mainApp() {
    let offsetX = useRef(), offsetY = useRef(), isDragging = useRef(), currentElement = useRef();

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        MainAppHandler().checkAuthenticate;
    })

    MainAppHandler().mouseup(isDragging, currentElement);
    MainAppHandler().mousemove(isDragging, offsetX, offsetY, currentElement);

    return (
        <>
            {/* left side note bar */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" data-bs-backdrop="false" id="offcanvas-list">
                <div className="offcanvas-header mainheadshadow" style={{ borderBottom: "1px solid black" }}>
                    <div className="dropdown"><button className="btn btn-primary dropdown-toggle usernamebutton" aria-expanded="false" data-bs-toggle="dropdown" type="button" >Username</button>
                        <div className="dropdown-menu"><a className="dropdown-item" href="#/signin">Log out</a></div>
                    </div><a className="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"></a>
                    <hr /><button className="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-between p-0">
                    <div>
                        <hr className="my-0" />
                        <div className="list-group list-group-flush border-bottom scrollarea"><a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" className="list-group-item list-group-item-action py-3 lh-tight" href="#/main">
                            <div onClick={MainAppHandler().clickLogout} className="d-flex justify-content-between align-items-center w-100"><strong className="titleNote">Add note</strong></div>
                        </a><a className="list-group-item list-group-item-action py-3 lh-tight" href='#/main' onClick={() => { MainAppHandler().toast('toast-1') }}>
                                <div className="d-flex justify-content-between align-items-center w-100"><strong className="mb-1 titleNote">List group item heading</strong><i className="icon ion-android-delete" id="removeNote"></i></div>
                                <div className="col-10 mb-1 small textMain"><p>Some placeholder content in a paragraph...</p></div>
                            </a><a className="list-group-item list-group-item-action py-3 lh-tight" href="#/main" onClick={() => { MainAppHandler().toast('toast-2') }}>
                                <div className="d-flex justify-content-between align-items-center w-100"><strong className="mb-1 titleNote">List group item heading</strong><i className="icon ion-android-delete" id="removeNote"></i></div>
                                <div className="col-10 mb-1 small textMain"><p>Some placeholder content in a paragraph...</p></div>
                            </a></div>
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
            {/* toasts 1*/}
            <div onMouseDown={(event) => { MainAppHandler().mousehold(event, offsetX, offsetY, isDragging, currentElement) }} className="toast hide" role="alert" data-bs-animation="false" data-bs-autohide="false" id="toast-1">
                <div className="toast-header"><strong className="me-auto detailTitleNote">Title</strong><button
                    className="btn-close ms-2 mb-1 close" type="button" aria-label="Close" data-bs-dismiss="toast"></button>
                </div>
                <div className="toast-body" role="alert">
                    <p className="detailNote">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button
                            className="btn btn-primary me-1" type="button">Edit</button><button className="btn btn-primary visually-hidden"
                                type="button">Save</button>
                </div>
            </div>
            {/* toasts 2*/}
            <div onMouseDown={(event) => { MainAppHandler().mousehold(event, offsetX, offsetY, isDragging, currentElement) }} className="toast hide" role="alert" data-bs-animation="false" data-bs-autohide="false" id="toast-2">
                <div className="toast-header"><strong className="me-auto detailTitleNote">Title</strong><button
                    className="btn-close ms-2 mb-1 close" type="button" aria-label="Close" data-bs-dismiss="toast"></button>
                </div>
                <div className="toast-body" role="alert">
                    <p className="detailNote">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button
                            className="btn btn-primary me-1" type="button">Edit</button><button className="btn btn-primary visually-hidden"
                                type="button">Save</button>
                </div>
            </div>

            {/* add note model */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">New note</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="note-new-tile" className="col-form-label">Title name:</label>
                                    <input type="text" className="form-control" id="note-new-tile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="note-new-text" className="col-form-label">Notes:</label>
                                    <textarea className="form-control" id="note-new-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary newnote-button" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary newnote-button">Add note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default mainApp