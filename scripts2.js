// 1) Confirm
let isConfirmed = confirm("Deseja confirmar?")

console.log(isConfirmed)

// 2) Exemplo condicional
if (isConfirmed) {
    console.log("O usuário clicou em OK")
}
else {
    console.log("o usuário clicou em cancelar")
}

// 3) For
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 4) for
let x = 15

for (let i = 0;i <= 10; i++) {
    console.log('R: ' + x * i)
}

// 5) While
let isToContinue = true
while (isToContinue) {
    console.log('estamos presos em um loop infinito')

    isToContinue = false
}

console.log ('saímos')