



INSERT INTO usuarios (usuario, nombre, email, telefono, direccion) VALUES ("Javier", "Javier Dominguez", "jdmz16@uvm.edu.ve","0412-1234567","Carvajal");




SELECT * FROM usuarios;




UPDATE usuarios SET telefono = '0412-7654321' WHERE usuario = "Javier";




DELETE FROM usuarios WHERE usuario = "Javier";