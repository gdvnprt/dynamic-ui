export default function slide(element, direction){
    let position = parseInt(element.style.right)
    if (direction === 'prev') {
        if (position > 0) {
            let prevPosition = position - 75
            element.style.right = prevPosition + "vh"
        };
    } else {
        if (isNaN(position)) {
            element.style.right = "75vh";
        } else if (position < 300) {
            let nextPosition = position + 75
            element.style.right = nextPosition + "vh"
        };
    }; 
};

