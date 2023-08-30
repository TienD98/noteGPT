function HomeHandler() {

    function logoFlashIn(event) {
        event.target.classList.add('animate__animated', 'animate__flash');
    }

    function logoFlashOut(event) {
        event.target.classList.remove('animate__animated', 'animate__flash');
    }

    return { logoFlashIn, logoFlashOut };
}

export default HomeHandler;