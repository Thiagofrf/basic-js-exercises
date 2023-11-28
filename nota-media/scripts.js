// Solicitar o nome do aluno e as 3 notas do bimestre, calcular a media daquele aluno 

let studentName = prompt("Nome do aluno: ")
let firstGrade = Number(prompt("Nota da primeira prova: "))
let secondGrade = Number(prompt("Nota da segunda prova: "))
let thirdGrade = Number(prompt("Nota da terceira prova: "))


//  se o aluno passou no bimestre, dar os parabens 
// Se o aluno nao passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperacao 
// Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota 

let gradeSum = firstGrade + secondGrade + thirdGrade

let finalGrade = gradeSum / 3

if(finalGrade >= 6) {
    alert('Parabéns ' + studentName + ', sua média final foi ' + finalGrade + ' e você foi aprovado no bimestre!')
} else { 
    alert('Poxa ' + studentName + ', sua média final foi ' + finalGrade + ' e infelizmente você não foi aprovado no bimestre! Dê o seu melhor pois ainda tem uma chance de passar na recuperação!')
}
