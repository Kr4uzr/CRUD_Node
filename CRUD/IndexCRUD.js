/* 
*
* Parte principal do código onde se encontra toda a parte do CRUD feita de forma assincrona.
*
*/

(async () => { //encapsulamento assincrono
    const database = require('./models/ConnectDB');
    const Automoveis = require('./models/Automoveis');
    await database.sync(); //sincronizar com o banco de dados e criar tabelas, caso não existam ainda.
    const ler = require('prompt-sync')(); ({sigint: true});

    let x;
    x = ler('Entre com Create, Read, Update ou Delete: ');

    switch (x) {  
    case 'Create':
        const create = await Automoveis.create({            
            placa: 'CBR2014',
            chassi: '097854102',
            renavam: '0441574',
            modelo: 'Gol',
            marca: 'Volks',
            ano: '2020'
        }) //Criação de automovel
 

        console.log('Criado com sucesso!');

        break;

    case 'Read':
        const read = await Automoveis.findAll(); //ler e printar na tela todos
        console.log('Resultado do read:');      //automoveis no BD

        break;

    case 'Update':
        const up = await Automoveis.findByPk(1); //encontrar e alterar o automovel

            up.placa = 'MTA0214';                              
            up.chassi = '88874610';
            up.renavam = '02010FW4520';
            up.modelo = 'Uno';
            up.marca = 'Fiat';
            up.ano = '2003';

        const save = await up.save(); //salvar e printar que foi alterado.
        console.log('Automovel alterado com sucesso.');;

        break;

    case 'Delete':
        Automoveis.destroy({ where: { id: 1 }}); //deletar um automovel.
        console.log('Automovel deletado com sucesso.');
        
        break;

    default:
        console.log('entre com uma das alternativas válidas!')

        break;
    }
})();

/*
*          ######### Testes Manuais #########
*
*Teste realizado dia 10/02/2022: cadastro no banco de dados do carro Gol. 
*Teste realizado dia 10/02/2022: leitura e busca por todos os carros cadastrados, retorno = Gol.
*Teste realizado dia 10/02/2022: alteração no banco de dados do carro de ID 1, Gol para Uno.
*Teste realizado dia 10/02/2022: leitura e busca por todos os carros cadastrados, retorno = Uno.
*Teste realizado dia 10/02/2022: Deletar no banco de dados do carro Uno.
*
*
*/