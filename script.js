function calcul()
{
  var firstNumber = document.getElementById("premier").value;
  var secondNumber = document.getElementById("deuxième").value;
  var result = firstNumber % secondNumber;
     if (!isNaN(firstNumber) && !isNaN(secondNumber)){
       alert(result)
   }else{
     alert('')
  }
}
// Deuxième méthode :
    // if (isNaN(firstNumber) == false && isNaN(secondNumber) == false && secondNumber != 0){
    //   var result = firstNumber % secondNumber;
    //   alert('Le résultat est : ' + result);
    // }else{
    //   alert('Veuillez saisir un nombre');
    // }
