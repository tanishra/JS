# Project related to DOM

## Project Link
[Click here]()

# Solution Code

## Project 1

```JavaScript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) =>{
    // console.log(button);
    button.addEventListener('click',(e) => {
        // console.log(e);
        // console.log(e.target); // from where event initiated / started

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

```