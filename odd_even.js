  function oddishOrEvenish(number) {
    
    var length=number.toString().length;
    var total=0;
    for(i = 0; i < length; i++) {
      total+=number%10
      number=Math.floor(number/10);
 
  }
    if (total%2==0){
      console.log("çift")
    }
    else{
      console.log("tek")
    }
  }
console.log(oddishOrEvenish(313))
