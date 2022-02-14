import GetMethod from "./MethodAxios"

const getNumber = async () => {
  return await GetMethod('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
}

export default getNumber