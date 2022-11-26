# Entrega del Proyecto Final

ReactJS - Comision 34790
Alumno: Miguel Angel Moyano
Profesor: Horacio Gutierrez

## Descripción 

Este es un proyecto desarrollado con ReactJS, a partir de creat-react-app. Es un e-commerce dedicado a la venta de productos de pastelería, en base a un emprendimiento realizado conjuntamente con mi esposa durante la Pandemia, por lo que mucho del contenido visual (imagenes) es real.
La entrega forma parte del curso de ReactJS de Coderhouse, en mi caso, dentro de la carrera de Desarrollo Full Stack; carrera que estoy realizando desde julio de 2022 dada mi aspiracion de cambiar de profesion. Soy abogado en actividad, buscando nuevo horizontes.-

## Tecnologias utilizadas

<img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/> HTML5
<img src="https://img.icons8.com/color/48/000000/css3.png"/> CSS
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/> Javascript
<img src="https://img.icons8.com/cute-clipart/64/000000/react-native.png"/> React JS
<img src="https://img.icons8.com/color/48/000000/npm.png"/> NPM
<img src="https://img.icons8.com/ios/50/000000/visual-studio.png"/> VSC
<img src="https://img.icons8.com/color/48/000000/firebase.png"/> Google Firebase

# Componentes

### `NavBar`

A traves de la importacion del "<NavLink>" de React-Router-Dom, se logra la navegabilidad por el sitio. Se puede navegar a todos los productos como así tambien a las categorías; retornandose al Home desde el click al logo de la marca.-
El componente se renderiza cuando se carga la aplicación; no asi durante la navegacion por el sitio.-

### `ItemListContainer`
La funcion del componente es obtener el array de productos desde la base de datos. Se ejecuta la promesa contenida en el archivo Products.js, trayéndose, entonces, el catálogo de productos desde Firebase. Obtenido el mismo, se mapea en el componente ItemList, siendo el componentes presentacional el componente Item.js.-


### `ItemDetailContainer`
Al igual que el componente anterior, se obtiene el detalle de los productos desde la base de datos. Asimismo, haciendo click en el boton pertinente, se puede acceder al detalle de cada producto y a la posibilidad de agregar al carrito la cantidad deseada de productos.-


### `Carrito`
El componente Carrito fue diseñado como un modal, por lo que no es "hijo" directamente de nadie porque está insertado en App.
Tiene las funcionalidades propias de un carrito (agregar o quitar productos inndividualemente a traves de un contador), borrar el item general o directamente vaciar el carrito.
En caso que el carrito esté vacío, un mensaje así lo hará saber al usuario. Si existen productos, a través del boton comprar se accederá a la página del checkout.-


### `Compra`
Aquí se exhiben, a su vez, dos componentes: el CompraCard.js (que no es más que el resumen de la compra) y el formulario.
Cabe aclarar que tanto en el carrito como en el resumen de la compra, el usuario podrá ver la cantidad de productos que compra y el precio total a abonar.-
Respecto al formulario, se utilizó la librería React-Hooks_Form a los fines de realizar una simple validación de los campos.- 

### `CardWidget`
Aquí se representa el ícono del carrito. He decidido mostrar el número de productos en general que se compran y no la cantidad de items que se compran. Por ejemplo, si el usuario agrega al carrito dos Croissant y tres Alfajores, el CartWidget mostrará que hay dos productos en el carrito y no cinco. Me parece más realista.-


### `ContextProvider y Hooks`
Estos dos componentes están intimamente relacionados. El primero maneja el contexto de toda la aplciacion y el segundo es un Hook particularmente creado para poder ser usado a lo largo de la aplicacion a fin de evitar la repeticion de código.-

### Comentarios

He dejado una carpeta con componentes y utilidades no utilizados, a los fines de ver cierta evolucion a lo largo del proyecto.-
Se utilizó Material UI y CSS común para el poco maquetado realizado. Se puso más énfasis en la funcionalidad que en lo estético; lo cual intentaré corregir en el futuro.
Todos los íconos utilizados son de dicha libreria. Asimismo, se utilizó la librería React-Tostify para dar algunos mensajes al usuario.-

