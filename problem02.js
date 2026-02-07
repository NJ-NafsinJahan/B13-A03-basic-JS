

function validOtp(otp) {
    // Your code here
    if (typeof otp !== 'string'){
        return "Invalid";
    }
    if(otp.length !== 8){
        return false;
    }
    if (otp.startsWith ("ph-")) {
    return true;
    }
       return false;
    // else { 
    //    return false;
    // }
}
  
  const output = validOtp('ph-12345');
  console.log(output);

