import fs from 'fs'

// async function saveFileAsync() {
//     fs.writeFile("doc.txt","Ya guarde el archivo .txt", ()=>{
//         console.log("Guardado exitoso")
//     })
// }
// saveFileAsync()
console.log("\n -------------------------------------\n Ejercicio 1 - TP2")
console.log(" -------------------------------------")

const datos = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]


async function nuevoArray(array, tipo) {
    try{
        const nuevoArray = array.filter(n => typeof n === tipo) 
        let arrayFinal
        if (tipo === "number"){
            arrayFinal = nuevoArray.sort((a,b)=>{
                return a-b
            })
        }else{
            arrayFinal= nuevoArray.sort()
        }
        fs.writeFile("arrayFinal.txt", arrayFinal.toString(), ()=>{
            console.log("Archivo guardado!")
        })
        return arrayFinal
    } catch (error){
        console.log(error)
    }

}
    fs.readFile("arrayFinal.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
        return;
    }
    console.log("Contenido del archivo:");
    console.log(data);
    });

console.log(nuevoArray(datos, "number"))