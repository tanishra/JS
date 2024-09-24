// Immediately Invoked Function Expressions  (IIFE)

// There is a problem with the  Global scope's pollution


(function one(){ // Named IIFE
    console.log("DB Connected");
})();

( () => {
    console.log("DB Connected Two");
})();

( (name) =>{
    console.log(`DB Connected Two ${name}`);
})("Done");