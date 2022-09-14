/*
ROUTER Y MULTER 
Tenemos el repo del profe

npm i, nos traemos las dependencias que necesita el project

Chequear el index.js de este archivo e intentar entenderlo 


Dentro de mi proyecto es buena pracrica tener modulos o bloques (directorios o archivos)
No tener todo en el index.js

Puedo hacer sub-apps para cada recurdso, por ejemplo una para productos, ora para users

EXPRESS nos ofrece el Router para esto
mini aplicaciones que se mezcla con mi app principal
Una buena froma de estructurar los proyectos 

Empezamos con una carpeta que se llame Routes y listo
Tenemops un archivo que se llama app.routers.js

Luego importamos express y creamos la const Route

const express = require('express')
 
const routes = express.Router();

Ya aqui tenemos un mini servidor, una definicion de una parte de nuestro servidor

Ahora debemos exportarlo


Tambien podemos tener files con nombre de los recursos que vmaos a trabjar

products.routes.js

Copiamos el code que teniamos en app.routeds y los  pegamos en estas 2

Nos quedamos con el archivo de products.

Copiamos las rutas hechas ya en el index que esten diseñandas para productos

Cuando las copiamos cambiamos todos los app por router.

EL archivo index deberia ser pequeño, no debe tener mas que la inicializacion del proyecto, la ejecucion del metodo listen y ya esta.


Una vez ya tenemos distribuiodas las mini apps para cada recursos, lo que deberiamos hacer en juntarlas en el app.routes.js
Creamos la app con alcance global.
Importamos cada una de las rutas que imporetamos en ambas apps.

const productsRoutes = require('./Products/products.routes')
const usersRoutes = require('./Users/users.routes')

Ahora falta integrar las rutas con nuestro prinicpal

router.use(productsRoutes)
router.use(usersRoutes)

Tambien debemos ponerle un prefijo, y todas las peticiones que entren en la mini app que declaramos, van a ser ejecutadas bajo ese prefijo
router.use('/products', productsRoutes)
Una vez hecho esto, lo tenemos que importar al index.js

const apiRoutes = require('./Router/app.routes')

Y debemos integrarla en el index.js

app.use(apiRoutes);

Podemos darle prefijos a todas las rutas api tambien 

COn esto ya tenemos nuestro proyecto de una froma organizada




ARCHIVOS ESTATICOS EN EXPRESS

Con exporess podemos reasponder con archivos estaticos 
app.get('/', (req, res) => {
  res.sendFile('./nav-app/index.html')
})

Haciendo esto, estamos ofreciendo archivos estatucos, no los estamos conectando

Express ofrece una funcionalidad quer nos permite nos escribir 89 app.get por cada uno de los archivps estaticos que tenemos


express.static()

app.use(express.static('nav-app'))
Con esto nos ahorramos hacer todos los app.get que vimos

Tambien le podemos dar un prefijo a este statuc
app.use('/static', express.static('nav-app'))


MiddleWare
son las funciones que queremos que se ejkecten antes de la ejecucion de las rutas
Pueden ejecutar cualquier codigo, realizar cambio en la solicitud y los objetos de res. Finaliar el ciclo de solictiud/respuestas
Invocar la siguiente funcion middleware en la pila

=> peticion (REQ) => middleware => respuesta (RES)

Podemos invocar la siguiente funcion del middleware en la fila
con el terver parametro que vimos la clase pasada.

router.get('/api/products', (req, res, next) => {

Caso practico de un middleware

app.use((req, res, next)=> {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear()
  console.log(`[${method}] => ${url}`, year)
})

Este se conoce como middleware de logeo. 
Esto se va a ejecutar para todos los metodos y antes de que el servidor de una res

COn este bloque de codigo, nos muestra la data que le pedimos, pero la pagina queda crasheada.

Para que sigue el flujo y no se quede colgada en esa funcion l oque debemos hacer es

app.use((req, res, next)=> {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear()
  console.log(`[${method}] => ${url}`, year)
  next();
})


Esto se considera mala practica de igual forma 

Debemos crear una carpeta que se llama middlewares

Hay 4 tipos de middleware
Estan los de aplicacion que son como estos, que utilizamos en la instancia app.get(middleware)
Estan los de al nivel del Router, quiere decir que solo va a aplicarse a nivel de una ruta, no global



*/