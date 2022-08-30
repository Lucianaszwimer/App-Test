import { useState, useEffect } from "react";
import axios from 'axios';


const axiosClient = axios.create({
  baseURL: "https://the-facial.herokuapp.com/",
 
})



