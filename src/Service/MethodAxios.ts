import axios from "axios"

const GetMethod = async (url:string,params?:object) => {
  try {
    return await axios.get(url, params)
  } catch (error:any) {
    return error.response
  }
}

export default GetMethod