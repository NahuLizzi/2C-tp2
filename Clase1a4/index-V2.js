import fs from "fs";

const datos = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false];

async function crearArray (array, tipo){
    // tipo debe ser un string, sino lo que se puede hacer para que sin importar 
    // el tipo de dato que se pase por parámetro,
    // es normalizar el tipo. 
    let nuevoArray = arrayDato(array, tipo);
    if (nuevoArray.length > 0){
        await fs.writeFile("arrayADoc.txt", nuevoArray.toString(), ()=>{
        console.log("Carga finalizada.");
        return;
    })
    return;
    }
    let tipoNormalizado = typeof tipo === "string" ? tipo : typeof tipo; 
    nuevoArray = array.filter(n => typeof n === tipoNormalizado);
    if (nuevoArray.length === 0){
        console.log("Error: el tipo de dato solicitado no es válido o no se encuentra en el array")
        return;
    }
    if (tipoNormalizado === "number"){
        nuevoArray = nuevoArray.sort((a,b)=> a-b);
    } else {
        nuevoArray = nuevoArray.sort();
    }
    await fs.writeFile("arrayADoc.txt", nuevoArray.toString(), ()=>{
        console.log("Carga finalizada.---------------");
    })
}

const arrayDato = (array, tipo) => {
    return array.filter(n => n === tipo);
}

//crearArray(datos, true);