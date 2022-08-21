  function oddishOrEvenish(sayi) {
    
    var length=sayi.toString().length;
    var toplam=0;
    for(i = 0; i < length; i++) {
      toplam+=sayi%10
      sayi=Math.floor(sayi/10);
 
  }
    if (toplam%2==0){
      alert("çift")
    }
    else{
      alert("tek")
    }
  }
console.log(oddishOrEvenish(313))
