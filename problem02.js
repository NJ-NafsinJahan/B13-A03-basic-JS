

function validOtp(otp) {
    // Your code here
    if (typeof otp !== 'string'){
        return "Invalid";
    }
    if(otp.length !== 8){
        return false;
    } else{
       return true;
    }
  
}
  const output = validOtp ('1212121222');
  console.log(output);
//   console.log(validOtp(1111111222222));
// validOtp(111111111);
