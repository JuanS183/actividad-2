import db from '../Db.js';

class UsuarioEntidad {
    constructor() {
        this.table = 'usuarios';
    }

    async crear(usuario) {
        const { usuario: username, nombre, email, telefono, direccion, categoria } = usuario;
        const query = `
            INSERT INTO ${this.table} 
            (usuario, nombre, email, telefono, direccion, categoria) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        try {
            const result = await db.executeQuery(query, [
                username, nombre, email, telefono, direccion, categoria
            ]);
            
            // Insertar proyectos asociados
            if (usuario.proyecto && usuario.proyecto.length > 0) {
                await this.insertarProyectos(result.insertId, usuario.proyecto);
            }

            return result.insertId;
        } catch (error) {
            console.error('Error creando usuario:', error);
            throw error;
        }
    }

    async insertarProyectos(usuarioId, proyectos) {
        const proyectosQuery = `
            INSERT INTO usuario_proyectos (usuario_id, proyecto) 
            VALUES ?
        `;
        
        const values = proyectos.map(proyecto => [usuarioId, proyecto]);
        
        try {
            await db.executeQuery(proyectosQuery, [values]);
        } catch (error) {
            console.error('Error insertando proyectos:', error);
            throw error;
        }
    }

    async obtenerTodos() {
        const query = `
            SELECT u.*, GROUP_CONCAT(up.proyecto) as proyectos 
            FROM ${this.table} u
            LEFT JOIN usuario_proyectos up ON u.id = up.usuario_id
            GROUP BY u.id
        `;
        
        return await db.executeQuery(query);
    }

    async obtenerPorId(id) {
        const query = `
            SELECT u.*, GROUP_CONCAT(up.proyecto) as proyectos 
            FROM ${this.table} u
            LEFT JOIN usuario_proyectos up ON u.id = up.usuario_id
            WHERE u.id = ?
            GROUP BY u.id
        `;
        
        const resultados = await db.executeQuery(query, [id]);
        return resultados[0];
    }

    async actualizar(id, usuario) {
        const { usuario: username, nombre, email, telefono, direccion, categoria, proyecto } = usuario;
        
        const query = `
            UPDATE ${this.table} 
            SET usuario = ?, nombre = ?, email = ?, 
            telefono = ?, direccion = ?, categoria = ?
            WHERE id = ?
        `;
        
        try {
            // Actualizar datos de usuario
            await db.executeQuery(query, [
                username, nombre, email, telefono, direccion, categoria, id
            ]);

            // Eliminar proyectos anteriores y crear nuevos
            await db.executeQuery('DELETE FROM usuario_proyectos WHERE usuario_id = ?', [id]);
            
            if (proyecto && proyecto.length > 0) {
                await this.insertarProyectos(id, proyecto);
            }

            return true;
        } catch (error) {
            console.error('Error actualizando usuario:', error);
            throw error;
        }
    }

    async eliminar(id) {
        const query = `DELETE FROM ${this.table} WHERE id = ?`;
        
        try {
            // Eliminar proyectos asociados primero
            await db.executeQuery('DELETE FROM usuario_proyectos WHERE usuario_id = ?', [id]);
            
            // Eliminar usuario
            const result = await db.executeQuery(query, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error eliminando usuario:', error);
            throw error;
        }
    }
}

export default new UsuarioEntidad();
