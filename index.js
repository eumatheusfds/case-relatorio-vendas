const fs = require('fs');

// Função para ler os arquivos JSON
function readJsonFile(filename) {
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
}

// Função para corrigir nomes de marca e veículo
function correctNames(data) {
    data.forEach(item => {
        if (item.nome) {
            item.nome = item.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
        }
        if (item.marca) {
            item.marca = item.marca.replace(/æ/g, 'a').replace(/ø/g, 'o');
        }
    });
    return data;
}


// Função para corrigir vendas
function correctSales(data) {
    data.forEach(item => {
        if (typeof item.vendas === 'string') {
            item.vendas = Number(item.vendas);
        }
    });
    return data;
}

// Função para exportar um arquivo JSON com o banco corrigido
function exportToJsonFile(data, filename) {
    let json = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, json);
}

// Uso das funções
let data1 = readJsonFile('broken_database_1.json');
let data2 = readJsonFile('broken_database_2.json');

data1 = correctNames(data1);
data2 = correctNames(data2);

data1 = correctSales(data1);
data2 = correctSales(data2);

exportToJsonFile(data1, 'corrected_database_1.json');
exportToJsonFile(data2, 'corrected_database_2.json');
