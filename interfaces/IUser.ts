export interface IUserLogin {
    email: string
    password: string
}

export interface IUser {
    idusuario:     number;
    role:          IRole;
    nombre:        string;
    tipo_documento: string;
    num_documento:  string;
    direccion:     string;
    telefono:      string;
    email:         string;
    password:      string;
    estado:        number;
}

export interface IRole {
    idrol:       number;
    nombre:      string;
    descripcion: string;
    estado:      number;
}
