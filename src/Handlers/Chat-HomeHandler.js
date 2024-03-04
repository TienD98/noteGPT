import UserChatComponent from "../Components/ChatComponents/UserChatComponent";
import React from 'react';

function ChatHomeHandler() {
    const quickSuggestOnClick = (event) => {
        const question = event.currentTarget.textContent;
        // const userChatComponent = <UserChatComponent question={question} />;
        // setQuestion(question);
        console.log(question);
        document.getElementById("initialHeader").classList.add('visually-hidden')
        document.getElementById("initialSuggestQuestions").classList.add('visually-hidden')
        document.getElementById("deleteChat-button").removeAttribute('disabled');
    }

    const chatDeleteOnClick = () => {
        document.getElementById("initialHeader").classList.remove('visually-hidden');
        document.getElementById("initialSuggestQuestions").classList.remove('visually-hidden');
        document.getElementById("deleteChat-button").setAttribute('disabled', true);
    }

    return { quickSuggestOnClick, chatDeleteOnClick }
}
export default ChatHomeHandler;