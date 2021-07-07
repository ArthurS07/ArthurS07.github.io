let obj = {
    "nome": 'Arthur',
    "profissão": 'estudante',
    "listaEx": [1,2,3,4],
    "listaDeObj": [
        {
            "nome": 'ABCD',
            "cidade": 'São Paulo'
        },
        {
            "nome": 'EFGH',
            "cidade": 'Salvador',
        },
        {
            "nome":'IJKL',
            "cidade": 'Curitiba'
        }
]
}

console.log(obj)
console.log(obj.nome)
console.log(obj.profissão)

//listas

console.log(obj.listaEx)

// for (var i = 0, i < obj.listaEx.length, i++) {
//     console.log(obj.listaEx[i])
// }    

//lista de obj
console.log(obj.listaDeObj)
for (var i = 0; i < obj.listaDeObj.length; i++) {
    console.log(obj.listaDeObj[i].nome)
    console.log(obj.listaDeObj[i].cidade)
}