
function finalScore(omr) {
    //write your code here
    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;
    let total = (right + wrong + skip);
    if (total !== 100){
        return 'Invalid';
    }
    let result = (right) -(wrong * 0.5);
    return Math.round(result);

}
console.log (finalScore({"right":30,"wrong":30,"skip":40}));
