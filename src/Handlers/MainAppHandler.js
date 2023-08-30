
function MainAppHandler() {

    function toast(name) {
        document.getElementById(name).classList.remove('hide');
        document.getElementById(name).classList.add('show');
    }

    function mousehold(event, offsetX, offsetY, isDragging, currentElement) {
        isDragging.current = true;
        const element = event.currentTarget;
        currentElement.current = event.currentTarget;
        offsetX.current = event.clientX - element.getBoundingClientRect().left;
        offsetY.current = event.clientY - element.getBoundingClientRect().top;
        element.style.cursor = "grabbing";

    }

    function mouseup(isDragging, currentElement) {
        window.addEventListener("mouseup", function () {
            isDragging.current = false;
            if (currentElement.current) {
                currentElement.current.style.cursor = "grab";
                currentElement.current = null;
            }
        })
    };

    function mousemove(isDragging, offsetX, offsetY, currentElement) {
        window.addEventListener("mousemove", function (event) {
            if (isDragging.current && currentElement.current) {
                const x = event.clientX - offsetX.current;
                const y = event.clientY - offsetY.current;
                currentElement.current.style.left = x + "px";
                currentElement.current.style.top = y + "px";
            }
        })
    }

    return { toast, mousehold, mouseup, mousemove }
}
export default MainAppHandler;

