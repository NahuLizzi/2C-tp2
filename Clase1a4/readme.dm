# TP2 - Primer servidor con Node.js 

Este proyecto corresponde al **TP 1 - Opcional** de la materia, cuyo objetivo es crear un pequeño servicio en Node.js que cumpla con las consignas.

---

## 📌 Consigna
Dado el siguiente array:

```js
[2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r","c",false]

 1. Crear una función que reciba como parámetros este array y una condición (ejemplo: "number", "string", "boolean").

 2. La función debe retornar un nuevo array con solo los valores que correspondan al tipo de dato solicitado.

 3. El nuevo array debe estar ordenado:

 4. Si es number, de menor a mayor.

 5. Si es string, en orden alfabético.

 6. Si es boolean, se listan en el orden en que aparecen.

 7. Si la condición no existe o no es válida, se debe retornar un mensaje de error.

 8. Si la condición es válida y el nuevo array contiene datos, se debe guardar en un archivo .txt usando el módulo File System de Node.js.

Tecnologías utilizadas

Node.js
File System (fs)
ECMAScript Modules (import / export)

Estructura del proyecto: 
.
├── Clase1a4/
|   ├── index-V2.js     # Versión 2 del archivo principal con la función createArray
│   ├── index.js        # Archivo principal con la función createArray
|   ├── package.json    # Configuración del proyecto y scripts
|   ├── README.md          
