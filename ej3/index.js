const log = require('logplease');
const esPar = require('./numeros');

const logger = log.create('INFO');

[2, 3, 101, 201, 202, 100].forEach(numero => {
    if (esPar(numero)) {
        logger.info(`El número ${numero} es par`);
    } else {
        logger.error(`El número ${numero} no es par`);
    }
});