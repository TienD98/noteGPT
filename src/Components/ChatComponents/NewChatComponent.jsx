import ChatHomeHandler from "../../Handlers/Chat-HomeHandler";
import UserChatComponent from "./UserChatComponent";
import BotChatComponent from "./BotChatComponent";
import React, { useState } from "react";

function NewChatComponent() {
    const [question, setQuestion] = useState(null);
    // const [userChatVisibility, setVisibility] = useState(false);

    return (
        <>
            <div>
                <header>
                    <nav className="navbar fixed-top navbar-expand-md bg-body navbarMainChat">
                        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span>NoteGPT</span></a></div>
                    </nav>
                </header>
                <div id="newChatMain" className="container flex-column" >
                    {/* conversation between AI and user */}
                    {/* <div id="chatMain" className="container" style={{ marginTop: "70px", paddingBottom: "100px" }}> */}
                    {/* <UserChatComponent question={question} ></UserChatComponent> */}
                    {/* <BotChatComponent></BotChatComponent> */}
                    {/* </div> */}

                    {/* first welcome chat or after the chat is deleted */}
                    <div className="row" id="initialHeader" >
                        <div className="col-md-12 p-4">
                            <h4 className="headingNewChatMain">How can I help you today?</h4>
                        </div>
                    </div>
                    <div id="initialSuggestQuestions" className="row text-center d-flex d-sm-flex d-lg-flex d-xl-flex align-items-end justify-content-sm-center align-items-sm-end justify-content-lg-center align-items-lg-end justify-content-xl-center align-items-xl-end flex-grow">
                        <div className="col">
                            <div className="row d-flex d-lg-flex d-xl-flex justify-content-center justify-content-lg-center justify-content-xl-center row-suggest1-2">
                                <div className="col-4 col-md-3"><button onClick={(event) => ChatHomeHandler().quickSuggestOnClick(event, setQuestion)} className="btn btn-primary btn-suggest-chat" type="button">Write a text message</button></div>
                                <div className="col-4 col-md-3"><button onClick={(event) => ChatHomeHandler().quickSuggestOnClick(event, setQuestion)} className="btn btn-primary btn-suggest-chat" type="button">Recommend a dish</button></div>
                            </div>
                            <div className="row d-flex d-lg-flex d-xl-flex justify-content-center justify-content-lg-center justify-content-xl-center row-suggest3-4">
                                <div className="col-4 col-md-3"><button className="btn btn-primary btn-suggest-chat" type="button" onClick={(event) => ChatHomeHandler().quickSuggestOnClick(event, setQuestion)}>What is "what"?</button></div>
                                <div className="col-4 col-md-3"><button className="btn btn-primary btn-suggest-chat" type="button" onClick={(event) => ChatHomeHandler().quickSuggestOnClick(event, setQuestion)}>Tell me a joke</button></div>
                            </div>
                        </div>
                    </div>

                    {/* The chating input for asking question to AI */}
                    <div className="row" >
                        <div className="fixed-bottom col d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center inputNewChat">
                            <textarea id="chatInputMain" className="inputNewChatEl " placeholder="Message NoteGPT..."></textarea>
                            <button className="btn btn-primary buttonNewChatMainEl" type="button"  >Send</button>
                            <button id='deleteChat-button' className="btn btn-primary buttonNewChatMainEl" type="button" data-bs-target="#modalDeleteChat" data-bs-toggle="modal">Delete</button>

                            <div className="modal fade" data-bs-backdrop="false" id="modalDeleteChat" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title fs-5" id="exampleModalLabel">Delete chat</h2>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label htmlFor="note-new-title" className="col-form-label">Are you sure you want to delete all chats?</label>
                                            </div>

                                            <button type="button" className="btn btn-primary newnote-button me-2 " data-bs-dismiss="modal">Close</button>
                                            <button onClick={ChatHomeHandler().chatDeleteOnClick} type="submit" className="btn btn-primary newnote-button" data-bs-dismiss="modal" >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NewChatComponent