const connection = require('../config/db');

async function storeTask(request, response) {
    const params = Array(
        request.body.id,
        request.body.email,
        request.body.nome,
        request.body.senha,
        request.body.telefone
    );

    const query = "INSERT INTO usuario_site(id,email,nome,senha,telefone) VALUE(?,?,?,?,?)";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "deu merda",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                })
        }
    })
}

module.exports = {
    storeTask 
}
