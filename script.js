var numeroSecreto = parseInt (Math.random()*10)
var tentativas = 3

while (tentativas > 0){
  var chute = parseInt(prompt ("Digite um número de 0 a 10."))

  if (numeroSecreto == chute){
    alert ("Acertou!")
    break
  } else if (chute > numeroSecreto){
    alert ("O número secreto é menor.")
    tentativas =  tentativas - 1
  } else if (chute < numeroSecreto){
    alert ("O número secreto é maior.")
    tentativas = tentativas - 1
  }
}

if (chute != numeroSecreto){
  alert ("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}


var num = "10"
typeof num
console.log (typeof num)

console.log(10=="10")
console.log(10==="10")