
export function Bars(){
    const nav = document.querySelector('ul');
    const bars = document.querySelector('.bars');

    bars.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}