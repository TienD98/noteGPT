import ConversationComponent from "./ConversationsComponent"

function NewChatComponent() {
    return (
        <>
            <div>
                <header>
                    <nav className="navbar fixed-top navbar-expand-md bg-body navbarMainChat">
                        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span>NoteGPT</span></a></div>
                    </nav>
                </header>
                <div className="container flex-column newChatMain">
                    {/* <ConversationComponent></ConversationComponent> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="headingNewChatMain">How can I help you today?</h4>
                        </div>
                    </div>
                    <div className="row text-center d-flex d-sm-flex d-lg-flex d-xl-flex align-items-end justify-content-sm-center align-items-sm-end justify-content-lg-center align-items-lg-end justify-content-xl-center align-items-xl-end flex-grow">
                        <div className="col">
                            <div className="row d-flex d-lg-flex d-xl-flex justify-content-center justify-content-lg-center justify-content-xl-center row-suggest1-2">
                                <div className="col-4 col-md-3"><button className="btn btn-primary btn-suggest-chat" type="button">Write a text message</button></div>
                                <div className="col-4 col-md-3"><button className="btn btn-primary btn-suggest-chat" type="button">Recommend a dish</button></div>
                            </div>
                            <div className="row d-flex d-lg-flex d-xl-flex justify-content-center justify-content-lg-center justify-content-xl-center row-suggest3-4">
                                <div className="col-4 col-md-3"><button className="btn btn-primary btn-suggest-chat" type="button">What is "what"?</button></div>
                                <div className="col-4 col-md-3"><button className="btn btn-primary btn-suggest-chat" type="button">Tell me a joke</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="fixed-bottom col d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center inputNewChat"><textarea id="chatInputMain" className="inputNewChatEl " placeholder="Message NoteGPT..."></textarea><button className="btn btn-primary buttonNewChatMainEl" type="button" disabled="true" >Send</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewChatComponent