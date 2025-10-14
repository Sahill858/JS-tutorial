// Immediately Invoked Function Expressions

(function chai() {
    console.log('DB connected');
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}
     
)('Sahil')