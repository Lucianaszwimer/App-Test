import { styles } from "./View/presenteScreen.js"
import { dbAxios } from "../src/axios.js"

export function colorP(){
    dbAxios()
    if (alumno.estado == "Presente"){
        return(styles.colores.p)
    } else if (alumno.estado == "Tarde"){
        return(styles.colores.t)
        } else {
            return(styles.colores.a)
        }
}
