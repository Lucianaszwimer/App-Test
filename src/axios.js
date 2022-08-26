import { useState, useEffect } from "react";
import axios from 'axios';

export function dbAxios() {
    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
      async function getAllAlumnos() {
        try {
          const alumnos = await axios.get('https://the-facial.herokuapp.com/api/related/')
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