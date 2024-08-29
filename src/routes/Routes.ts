import Router,{ Request, Response } from 'express';

const inst_Routes = Router();

inst_Routes.post('/teste', async (req: Request, res: Response) => {
  try {
    
    return res.send("Teste");
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});
  
export {inst_Routes};