const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const ongs  = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){

        //response: retona uma resposta em formato json
    
        //para acessar os parâmetros enviados:  '/users'

        //const params = request.query;

        //para acessar os route params:

        //const params = request.params;

        //para acessar o corpo da requisição:


        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        console.log(id);

        return response.json({ id });
    }
};
