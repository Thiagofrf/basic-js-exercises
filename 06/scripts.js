/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

userGuess = Number(prompt("Adivinhe o número que estou pensando? Está entre 0 e 10"))
let randomNumber = Math.floor(Math.random() * 10 + 1)
let retries = 1

while(userGuess !== randomNumber) {
    userGuess = Number(prompt("Errou! Tente novamente: "))
    retries++
}

alert("Parabéns! Você advinhou o número em " + retries + " tentativas")


