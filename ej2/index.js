
const log = require('logplease');


const logger = log.create('myLogger');

logger.debug('Hola Mundo de Node (usando el método debug)');
logger.info('Noticias de última hora, Node.js me encanta!! (usando el método info)');
logger.warn('Tirando warnings como campeones (usando el método warn)');
logger.error('Algo no está bien!!! (usando el método error)');