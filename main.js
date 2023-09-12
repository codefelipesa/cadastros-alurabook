async function buscaEndereco(CEP){
    const mensagemDeErro = document.getElementById('erro')
    mensagemDeErro.innerHTML = "";

    try{
        var consultaCep = await (await fetch(`https://viacep.com.br/ws/${CEP}/json/`)).json()
        if(consultaCep.erro){
            throw Error ('CEP não existente!')
        } 
        const endereço = document.getElementById('endereco')
        endereço.value = consultaCep.logradouro
        const bairro = document.getElementById('bairro')
        bairro.value = consultaCep.bairro
        const cidade = document.getElementById('cidade')
        cidade.value = consultaCep.localidade
        const estado = document.getElementById('estado')
        estado.value = consultaCep.uf
        console.log(consultaCep)
        return consultaCep
        }
    catch(erro){
        console.log(erro)
        mensagemDeErro.innerHTML = "<p>insira um CEP valído</p>"
    
    }
}


const cep = document.getElementById('cep')
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value))