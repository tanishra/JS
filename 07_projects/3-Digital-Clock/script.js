const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(() => {  // This function will continuously call the given function for the given interval time period
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);