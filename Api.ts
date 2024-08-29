import { inst_Server } from "./src/routes/Server"; 

//router.use(cors({ origin: '*' }));
//router.use(express.json());
//router.use('/usuario', usuarioRoutes);

inst_Server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
