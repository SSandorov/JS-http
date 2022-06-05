// Importaciones

import { init as initChistes } from "./js/chistes-page.js";
import { init as initUsuarios } from "./js/usuarios-page.js";

import { obtenerUsuarios } from "./js/http-provider.js";

// Con el asterisco importamos todas las funciones exportadas en la página
import * as CRUD from "./js/crud-provider.js";

initChistes()

initUsuarios()

obtenerUsuarios().then(console.log);

CRUD.getUsuario(2).then(console.log);
CRUD.crearUsuario({
    name: 'Fernando',
    job: 'Carpintero'
}).then(console.log);