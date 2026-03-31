// 07-financiamento/script.js

function simularFinanciamento() {

    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const numeroParcelas = parseInt(document.getElementById('parcelas').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tbody = document.getElementById('tabela-corpo');

    // ✅ VALIDAÇÕES AQUI
    if (isNaN(valorTotal) || isNaN(numeroParcelas) || isNaN(taxa)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    if (numeroParcelas <= 0) {
        alert("O número de parcelas deve ser maior que zero!");
        return;
    }

    // Limpar tabela
    tbody.innerHTML = '';

    const parcelaFixa = valorTotal / numeroParcelas;
    let saldoDevedor = valorTotal;

    for (let mes = 1; mes <= numeroParcelas; mes++) {
        const jurosMes = saldoDevedor * (taxa / 100);
        const totalMes = parcelaFixa + jurosMes;

        saldoDevedor -= parcelaFixa;

        if (saldoDevedor < 0.01) {
            saldoDevedor = 0;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${mes}</td>
            <td>R$ ${parcelaFixa.toFixed(2)}</td>
            <td>R$ ${jurosMes.toFixed(2)}</td>
            <td>R$ ${totalMes.toFixed(2)}</td>
            <td>R$ ${saldoDevedor.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    }
}