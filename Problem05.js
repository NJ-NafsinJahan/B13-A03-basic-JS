//  problem solve : 05

function analyzeText(str) {
    // Your code here
    if(typeof str !== 'string'){
        return "Invalid";
    }
    if(str ===""){
        return "Invalid";
    }
    let words = str.split(" ");
    let longWord = "";
    let token = str.split(" ").join("");
    
    for (let word of words){
        if (word.length>longWord.length){
            longWord = word;
    }
    }
    return {
        longWords: longWord,
        token: token.length
    }
 
}

console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText(""));







// function analyzeText(str) {
//     // Your code here
//     if(typeof str !== 'string'){
//         return "Invalid";
//     }
//     if(str ===""){
//         return "Invalid";
//     }
//     let words = str.split(" ");
//     let longWord = "";
//     let token = str.split(" ").join("");
    
//     for (let word of words){
//         if (word.length>longWord.length){
//             longWord = word;
//     }
//     }
//     return {
//         longwords: longWord,
//         token: token.length
//     }
 
// }