// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value); // Obtém o peso
    const altura = parseFloat(document.getElementById("altura").value); // Obtém a altura
    const idade = parseInt(document.getElementById("idade").value); // Obtém a idade
    const sexo = document.getElementById("sexo").value; // Obtém o sexo

    // Verifica se os valores são válidos
    if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0 && !isNaN(idade) && idade > 0) {
        const imc = peso / ((altura/100) * (altura/100)); // Calcula o IMC
        let classificacao = '';
        let recomendacao = '';

        // Classificação do IMC com base em idade e sexo
        if (sexo === 'masculino') {
            ({ classificacao, recomendacao } = classificarIMCMasculino(imc, idade));
        } else if (sexo === 'feminino') {
            ({ classificacao, recomendacao } = classificarIMCFeminino(imc, idade));
        }

        // Exibe o resultado
        document.getElementById("resultado-imc").innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
        document.getElementById("recomendacao").innerText = recomendacao;
    } else {
        // Mensagem de erro caso os valores sejam inválidos
        document.getElementById("resultado-imc").innerText = "Por favor, insira valores válidos.";
        document.getElementById("recomendacao").innerText = '';
    }
}

// Classificação do IMC para masculino
function classificarIMCMasculino(imc, idade) {
    let classificacao = '';
    let recomendacao = '';

    if (idade >= 10 && idade <= 12) {
        if (imc < 15) {
            classificacao = 'Abaixo do peso';
            recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        } else if (imc < 20) {
            classificacao = 'Peso normal';
            recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        } else if (imc < 25) {
            classificacao = 'Sobrepeso';
            recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        } else if (imc < 30) {
            classificacao = 'Obesidade grau I';
            recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        } else if (imc < 35) {
            classificacao = 'Obesidade grau II';
            recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        } else {
            classificacao = 'Obesidade grau III';
            recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        }
    } else if (idade >= 13 && idade <= 14) {
        if (imc < 16) {
            classificacao = 'Abaixo do peso';
            recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        } else if (imc < 22) {
            classificacao = 'Peso normal';
            recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        } else if (imc < 27) {
            classificacao = 'Sobrepeso';
            recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        } else if (imc < 32) {
            classificacao = 'Obesidade grau I';
            recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        } else if (imc < 37) {
            classificacao = 'Obesidade grau II';
            recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        } else {
            classificacao = 'Obesidade grau III';
            recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        }
    } else if (idade >= 15 && idade <= 16) {
        if (imc < 17) {
            classificacao = 'Abaixo do peso';
            recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        } else if (imc < 23) {
            classificacao = 'Peso normal';
            recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        } else if (imc < 28) {
            classificacao = 'Sobrepeso';
            recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        } else if (imc < 33) {
            classificacao = 'Obesidade grau I';
            recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        } else if (imc < 38) {
            classificacao = 'Obesidade grau II';
            recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        } else {
            classificacao = 'Obesidade grau III';
            recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        }
    } else {
        // Acima de 17
        if (imc < 18.5) {
            recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
            classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
            recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
            classificacao = 'Obesidade grau I';
        } else if (imc < 39.9) {
            recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
            classificacao = 'Obesidade grau II';
        } else {
            recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
            classificacao = 'Obesidade grau III';
        }
    }

    return { classificacao, recomendacao };
}

// Classificação do IMC para feminino
function classificarIMCFeminino(imc, idade) {
    let recomendacao = '';
let classificacao = '';

if (idade >= 10 && idade <= 12) {
    if (imc < 15) {
        recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        classificacao = 'Abaixo do peso';
    } else if (imc < 19) {
        recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        classificacao = 'Peso normal';
    } else if (imc < 24) {
        recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        classificacao = 'Sobrepeso';
    } else if (imc < 29) {
        recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        classificacao = 'Obesidade grau I';
    } else if (imc < 34) {
        recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        classificacao = 'Obesidade grau II';
    } else {
        recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        classificacao = 'Obesidade grau III';
    }
} else if (idade >= 13 && idade <= 14) {
    if (imc < 16) {
        recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        classificacao = 'Abaixo do peso';
    } else if (imc < 21) {
        recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        classificacao = 'Peso normal';
    } else if (imc < 26) {
        recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        classificacao = 'Sobrepeso';
    } else if (imc < 31) {
        recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        classificacao = 'Obesidade grau I';
    } else if (imc < 36) {
        recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        classificacao = 'Obesidade grau II';
    } else {
        recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        classificacao = 'Obesidade grau III';
    }
} else if (idade >= 15 && idade <= 16) {
    if (imc < 17) {
        recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        classificacao = 'Abaixo do peso';
    } else if (imc < 22) {
        recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        classificacao = 'Peso normal';
    } else if (imc < 27) {
        recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        classificacao = 'Sobrepeso';
    } else if (imc < 32) {
        recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        classificacao = 'Obesidade grau I';
    } else if (imc < 37) {
        recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        classificacao = 'Obesidade grau II';
    } else {
        recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        classificacao = 'Obesidade grau III';
    }
} else {
    // Adultas (acima de 18)
    if (imc < 18.5) {
        recomendacao = 'Recomenda-se uma alimentação balanceada e o acompanhamento de um nutricionista.';
        classificacao = 'Abaixo do peso';
    } else if (imc < 24) {
        recomendacao = 'Parabéns! Mantenha uma alimentação saudável e pratique atividades físicas regularmente.';
        classificacao = 'Peso normal';
    } else if (imc < 29) {
        recomendacao = 'É recomendada a prática de exercícios físicos e controle alimentar para evitar complicações à saúde.';
        classificacao = 'Sobrepeso';
    } else if (imc < 34) {
        recomendacao = 'Recomenda-se acompanhamento médico e nutricional para controle do peso.';
        classificacao = 'Obesidade grau I';
    } else if (imc < 39) {
        recomendacao = 'É essencial procurar orientação médica e adotar um plano de reeducação alimentar e exercício físico.';
        classificacao = 'Obesidade grau II';
    } else {
        recomendacao = 'A obesidade grau III é considerada grave. É necessário o acompanhamento médico urgente para tratamento adequado.';
        classificacao = 'Obesidade grau III';
    }
}

return { classificacao, recomendacao };
}