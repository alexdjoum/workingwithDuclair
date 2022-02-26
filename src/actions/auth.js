import axios from "axios";

export const register = async (user) => 
    await axios.post(`http://localhost:5000/register`, user);

export const login = async (user) => 
    //await axios.post(`http://localhost:8000/api/login`, user);
    await axios.post(`http://localhost:5000/login`, user);