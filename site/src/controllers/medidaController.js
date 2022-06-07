var medidaModel = require("../models/medidaModel");


function respostas(req, res) {
    var Quest1 = req.body.Quest1;
    var Quest2 = req.body.Quest2;
    var Quest3 = req.body.Quest3;
    var Quest4 = req.body.Quest4;
    var Quest5 = req.body.Quest5;
    var Quest6 = req.body.Quest6;
    var Quest7 = req.body.Quest7;
    var Quest8 = req.body.Quest8;
    var Quest9 = req.body.Quest9;
    var Quest10 = req.body.Quest10;
    var acertos = req.body.Acertos;
    var fk_usuario = req.body.fk_usuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.respostas(Quest1,Quest2,Quest3,Quest4,Quest5,Quest6,Quest7,Quest8,Quest9,Quest10,acertos,fk_usuario).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}



function pct_acertos(req, res) {


    console.log(`Recuperando medidas em tempo real`);

    medidaModel.pct_acertos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function acertosus(req, res) {

      var id_usuario = req.params.id_usuario


    console.log(`Recuperando medidas em tempo real`);

    medidaModel.acertosus(id_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    respostas,
    pct_acertos,
    acertosus
}