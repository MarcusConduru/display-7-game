import axios from "axios"

const GetMethod = async (url:string,params?:object) => {
  try {
    return await axios.get(url, params)
  } catch (error:any) {
    console.log(error.response)
    return error.response
  }
}

export default GetMethod