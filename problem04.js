// code for Problem-04

function gonoVote(array) {
    if (!Array.isArray(array)){
        return "Invalid";
    }
    let haVote = 0;
    let naVote= 0;
    for (let i=0;i< array.length; i++){
        if (array [i] === "ha"){
           haVote++
        } else if (array [i] === "na"){
            naVote++
        }

    }
    
    if(haVote > naVote){
        return true;
    } else if (haVote === naVote){
        return 'equal';
    }
    return false;
    //write your code here
}
// const result = gonoVote(1218412128);
// const result = gonoVote(['ha', 'na', 'ha', 'ha']);
// const result = gonoVote(["ha", "na", "ha", "na"]);
// const result = gonoVote(["ha", "na", "na"]);
// const result = gonoVote(["ha", "ha", "ha", "na"]);
const result = gonoVote("ha, na");
// const result = gonoVote(12345);
// const result = gonoVote(['ha', 'na', 'ha', 'ha',"ha", "na", "ha", "ha", "na"]);

console.log(result);





// function gonoVote(array) {
//     if (!Array.isArray(array)){
//         return "Invalid";
//     }
//     let haVote = 0;
//     let naVote= 0;
//     for (let i=0;i< array.length; i++){
//         if (array [i] === "ha"){
//            haVote++
//         } else if (array [i] === "na"){
//             naVote++
//         }

//     }
    
//     if(haVote > naVote){
//         return true;
//     } else if (haVote === naVote){
//         return "equal";
//     }
//     return false;
    
// }