var api = {}


api.dados = function(req, res) {

    res.json([
        { nome: 'João', altura: 186, peso: 80 },
    ]);
    
};


module.exports = api;