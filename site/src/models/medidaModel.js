var database = require("../database/config");

function respostas(Quest1,Quest2,Quest3,Quest4,Quest5,Quest6,Quest7,Quest8,Quest9,Quest10,acertos,fk_usuario) {

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `insert into questionario(quest1,quest2,quest3,quest4,quest5,quest6,quest7,quest8,quest9,quest10,acertos,fk_usuario)
        values (${Quest1},${Quest2},${Quest3},${Quest4},${Quest5},${Quest6},${Quest7},${Quest8},${Quest9},${Quest10},${acertos},${fk_usuario})`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `insert into questionario 
        values (null,${Quest1},${Quest2},${Quest3},${Quest4},${Quest5},${Quest6},${Quest7},${Quest8},${Quest9},${Quest10},${acertos},${fk_usuario})`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function pct_acertos() {

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(id_questionario) as 'qtd_pessoas',count( case when acertos = 9 then 1 else null end) as 'acertos9',count(case when acertos = 8 then 1 else null end) as 'acertos8',
        count(case when acertos = 7 then 1 else null end) as 'acertos7',count(case when acertos = 6 then 1 else null end) as 'acertos6', count(case when acertos = 5 then 1 else null end) as 'acertos5',
        count(case when acertos = 4 then 1 else null end) as 'acertos4',
        count(case when acertos = 3 then 1 else null end) as 'acertos3',count(case when acertos = 2 then 1 else null end) as 'acertos2',count(case when acertos = 1 then 1 else null end) as 'acertos1' ,
        count(case when acertos = 0 then 1 else null end) as 'acertos0',
        count(case when quest10 = 1 then 1 else null end) as 'nao',count(case when quest10 = 2 then 1 else null end) as 'muito',
        count(case when quest10 = 3 then 1 else null end) as 'diariamente', count(case when quest10 = 4 then 1 else null end) as 'pouco'from questionario;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(id_questionario) as 'qtd_pessoas',count( case when acertos = 9 then 1 else null end) as 'acertos9',count(case when acertos = 8 then 1 else null end) as 'acertos8',
        count(case when acertos = 7 then 1 else null end) as 'acertos7',count(case when acertos = 6 then 1 else null end) as 'acertos6', count(case when acertos = 5 then 1 else null end) as 'acertos5',
        count(case when acertos = 4 then 1 else null end) as 'acertos4',
        count(case when acertos = 3 then 1 else null end) as 'acertos3',count(case when acertos = 2 then 1 else null end) as 'acertos2',count(case when acertos = 1 then 1 else null end) as 'acertos1' ,
        count(case when acertos = 0 then 1 else null end) as 'acertos0',count(case when quest10 = 1 then 1 else null end) as 'nao',
        count(case when quest10 = 2 then 1 else null end) as 'muito',
        count(case when quest10 = 3 then 1 else null end) as 'diariamente', count(case when quest10 = 4 then 1 else null end) as 'pouco'from questionario;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function acertosus(id_usuario) {

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select acertos from usuario join questionario on fk_usuario = id_usuario where id_usuario = ${id_usuario}`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select acertos from usuario join questionario on fk_usuario = id_usuario where id_usuario = ${id_usuario}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
 respostas,
 pct_acertos,
 acertosus
}
