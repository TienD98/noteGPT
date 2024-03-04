function UserChatComponent({ question }) {
    return (
        <>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-1 col-md-1 d-md-flex justify-content-md-center align-items-md-start"><i className="fa fa-user-circle iconUserConversation"></i></div>
                        <div className="col conversationChatSelf">
                            <h5 className="conversationNameSelf">Tien</h5>
                            <p className="text-break conversationInputSelf">{question}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}

export default UserChatComponent;