import {Router} from 'express';

const router = Router();//construir nova rota

//configuração de rotas
router.post('/links', (req, res) => {//enviar dados para o servidor
    res.send('POST');
})
router.get('/links/:code', (req, res) => {//passa o codigo da URL curta
    res.send('GET');
})

router.post('/links/:code/stats', (req, res) => {//estatisticas do link
    res.send('GET stats');
})

export default router;


