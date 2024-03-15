// At first we Select all the Buttons and Body
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Now we Add Event Listners to all the Buttons by foreach
button.forEach((b)=>{
    b.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);

        // Brute force 
        // const color =  e.target.innerHTML;
        // body.style.backgroundColor = color;

        // Optimized
        if(e.target.id == 'one'){ 
            const color = 'antiquewhite';
            body.style.backgroundColor = color;
        }
        else if(e.target.id == 'two'){ 
            const color = 'aqua';
            body.style.backgroundColor = color;
        }
        else if(e.target.id == 'three'){ 
            const color = 'blue';
            body.style.backgroundColor = color;
        }
        else if(e.target.id == 'four'){ 
            const color = 'chartreuse';
            body.style.backgroundColor = color;
        }
    })
})