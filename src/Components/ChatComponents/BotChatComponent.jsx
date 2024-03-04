function BotChatComponent() {
    return (
        <>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-1 col-md-1 d-md-flex justify-content-md-center align-items-md-start"><i className="icon-notebook iconGptConversation"></i></div>
                        <div className="col conversationChatSelf">
                            <h5 className="conversationNameGpt">NoteGPT</h5>
                            <p className="text-break conversationInputSelf">asas</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}

export default BotChatComponent;