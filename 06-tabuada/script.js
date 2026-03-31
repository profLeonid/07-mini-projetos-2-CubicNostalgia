// 06-tabuada/script.js

function gerarTabuada() {
    const numeroInput = parseFloat(document.getElementById('numero').value);
    const tbody = document.getElementById('tabela-corpo');

    if (isNaN(numeroInput)) {
        alert('Informe um número válido!');
        return;
    }

    tbody.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const somar       = numeroInput + i;
        const subtrair    = numeroInput - i;
        const multiplicar = numeroInput * i;
        const dividir     = (numeroInput / i).toFixed(2);

        const classeSubtracao = subtrair < 0 ? 'class="negativo"' : '';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${i}</td>
            <td>${numeroInput} + ${i} = ${somar}</td>
            <td ${classeSubtracao}>${numeroInput} - ${i} = ${subtrair}</td>
            <td>${numeroInput} × ${i} = ${multiplicar}</td>
            <td>${numeroInput} ÷ ${i} = ${dividir}</td>
        `;
        tbody.appendChild(tr);
    }
}