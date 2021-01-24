const panels = document.querySelectorAll('.panel');

panels.forEach(element => {
    element.addEventListener('click', ()=>{
        removeActive();
        element.classList.add('active');
    });
});

function removeActive(){
    panels.forEach(element => {
        element.classList.remove('active');
    });
}

//my variant

// const wrapper = document.querySelector('.wrapper');


// wrapper.addEventListener('click', function(e){
//     let anyActive = document.querySelector('.active')
//         if(anyActive){
//             anyActive.classList.remove('active');
//         }
//     let panel = e.target;
//     panel.classList.add('active')
// })