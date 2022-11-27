window.addEventListener('scroll',doThis)
function doThis(e){
    const header = document.querySelector('#head');
    header.classList.toggle("sticky", window.scrollY)
}