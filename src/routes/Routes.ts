import express, { Request, Response, Router } from 'express';

const router = express();


router.get('/teste', async (req: Request, res: Response) => {
  try {
    
    return res.send("Teste");
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});
  
  export {router};