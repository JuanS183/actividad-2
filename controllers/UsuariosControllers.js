import UsuarioEntidad from '../db/entities/UsuariosEntidad.js';

class UsuariosControllers {
  async crearUsuario(req, res) {
    try {
      const nuevoUsuarioId = await UsuarioEntidad.crear(req.body);
      res.status(201).json({
        mensaje: 'Usuario creado exitosamente',
        id: nuevoUsuarioId
      });
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al crear usuario',
        error: error.message
      });
    }
  }

  async obtenerUsuarios(req, res) {
    try {
      const usuarios = await UsuarioEntidad.obtenerTodos();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al obtener usuarios',
        error: error.message
      });
    }
  }

  async obtenerUsuarioPorId(req, res) {
    try {
      const usuario = await UsuarioEntidad.obtenerPorId(req.params.id);

      if (!usuario) {
        return res.status(404).json({
          mensaje: 'Usuario no encontrado'
        });
      }

      res.json(usuario);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al obtener usuario',
        error: error.message
      });
    }
  }

  async actualizarUsuario(req, res) {
    try {
      const resultado = await UsuarioEntidad.actualizar(req.params.id, req.body);

      if (!resultado) {
        return res.status(404).json({
          mensaje: 'Usuario no encontrado'
        });
      }

      res.json({
        mensaje: 'Usuario actualizado exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al actualizar usuario',
        error: error.message
      });
    }
  }

  async eliminarUsuario(req, res) {
    try {
      const resultado = await UsuarioEntidad.eliminar(req.params.id);
      if (!resultado) {
        return res.status(404).json({
          mensaje: 'Usuario no encontrado'
        });
      }
      res.json({
        mensaje: 'Usuario eliminado exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al eliminar usuario',
        error: error.message
      });
    }
  }

}

export default new UsuariosControllers();
