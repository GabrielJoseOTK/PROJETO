import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import {router} from './src/routes/Routes';


//router.use(cors({ origin: '*' }));
//router.use(express.json());
//router.use('/usuario', usuarioRoutes);

router.listen(3000, () => {
  console.log('Server is running on port 3000');
});
