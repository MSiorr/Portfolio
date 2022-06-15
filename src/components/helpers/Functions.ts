export function timeToShow(posY: number | undefined) {
    let myOffset = window.innerHeight * 0.8;
    return window.scrollY !== undefined && posY !== undefined && window.scrollY > posY - myOffset
}