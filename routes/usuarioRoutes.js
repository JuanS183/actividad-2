import express from 'express';
import UsuariosControllers from '../controllers/UsuariosControllers.js';

const router = express.Router();

router.post('/crear', UsuariosControllers.crearUsuario);
router.get('/buscar', UsuariosControllers.obtenerUsuarios);
router.get('/buscar/:id', UsuariosControllers.obtenerUsuarioPorId);
router.put('/cambiar/:id', UsuariosControllers.actualizarUsuario);
router.delete('/eliminar/:id', UsuariosControllers.eliminarUsuario);

export { router as userRouter }
