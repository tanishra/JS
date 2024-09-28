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

## Project 2

```Javascript

const form = document.querySelector('form');

// This usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',(e) =>{
    e.preventDefault(); // It stops the default behavior of the submit button
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please provide a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please provide a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // show the result
        results.innerHTML = `<span> ${bmi} </span>`;
    }
})

```