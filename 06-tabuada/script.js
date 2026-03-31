// 06-tabuada/script.js

function gerarTabuada() {
    // 1. Pegar o valor do input
    const numeroInput = parseFloat(document.getElementById('numero').value);
    const tbody = document.getElementById('tabela-corpo');
    
    // 2. Limpar o tbody
    tbody.innerHTML = '';

    // 3. Criar o loop de 1 a 10
    for (let i = 1; i <= 10; i++) {
        // 4. Calcular cada operação
        const somar = numeroInput + i;
        const subtrair = numeroInput - i;
        const multiplicar = numeroInput * i;
        const dividir = (numeroInput / i).toFixed(2);

        // 5. Destacar em vermelho quando a subtração for negativa
        const estiloSubtracao = subtrair < 0 ? 'color: red; font-weight: bold;' : '';

        // 6. Montar a <tr>
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${numeroInput} + ${i} = ${somar}</td>
            <td style="${estiloSubtracao}">${numeroInput} - ${i} = ${subtrair}</td>
            <td>${numeroInput} x ${i} = ${multiplicar}</td>
            <td>${numeroInput} ÷ ${i} = ${dividir}</td>
        `;
        tbody.appendChild(tr);
    }
}