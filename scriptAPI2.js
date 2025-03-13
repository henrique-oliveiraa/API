//https://viacep.com.br/ws/93032530

var CEP = document.getElementById("CEP");

function consultarCEP() {
    console.log(CEP);
    console.log(CEP.value);
    console.log(typeof (CEP));


    fetch('https://viacep.com.br/ws/' + CEP.value + '/json/')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error ao consultar o CEP")
            }
            return response.json();

        })
        .then(data => {
            const bairro = data.bairro || "Nao informado";
            const rua = data.rua || "Nao informado";
            const localidade = data.localidade || "Nao informado";
            const cidade = data.cidade || "Nao informado";
            const complemento = data.complemento || "Nao informado";
            const estado = data.uf || "Nao informado";

            const resultDiv = document.getElementById("result");

            resultDiv.innerHTML = `
            <p> <strong>CEP: </strong>${CEP.value}</p>
            <p> <strong>Estado: </strong>${estado}</p>
            <p> <strong>Cidade: </strong>${cidade}</p>
            <p> <strong>Bairro: </strong>${bairro}</p>
            <p> <strong>Rua: </strong>${rua}</p>
            <p> <strong>Complemento: </strong>${complemento}</p>      
        
    `
        })

        .catch(error => {
            document.getElementById("result").innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error ao consultar o CEP. Verifique se o CEP esta correto </div>
            `;
            console.error("Erro ao buscar o CEP;", error);
        })

}



