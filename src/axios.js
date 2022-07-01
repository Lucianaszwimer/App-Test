import { useState, useEffect } from "react";
import axios from 'axios';

export function dbAxios() {
    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
      async function getAllAlumnos() {
        try {
          const alumnos = await axios.get('http://10.0.2.2:8000/api/related/')
          console.log(alumnos.data)
          setAlumnos(alumnos.data)
        } catch (error) {
          console.log(error)
        }
      }
      getAllAlumnos()
    }, [])
    return(alumnos);
}