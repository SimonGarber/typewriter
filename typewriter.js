
const displayString = function(string,callback){
setTimeout(() => {
    if(string.length === 0) {
        callback(`/n`);
        return;
    }
    callback(string[0])
    displayString(string.slice(1),callback)

},100);
}
displayString("Hello there from lighthouse labs",char => process.stdout.write(char));
 

    

