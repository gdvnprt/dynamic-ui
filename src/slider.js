export default function slide(element, direction){
    let position = parseInt(element.style.right)
    if (direction === 'prev') {
        if (position >= 0) {
            let prevPosition = position - 75
            element.style.right = prevPosition + "vh"
        };
    } else {
        if (position <= 375) {
            let nextPosition = position + 75
            element.style.right = nextPosition + "vh"
        };
    }; 
};