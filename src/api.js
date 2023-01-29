import axios from "axios";



const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyAXG5nAHyX3hTewXM6okKf6gwJDtunfLqs",
    }
})

export default request