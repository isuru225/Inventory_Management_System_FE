import axios from "axios";

const axiosInstance = {
    baseURL: "http://localhost:5062/",
    headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*",
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }

}

const getToken = () => `Bearer ${localStorage.getItem('token')}`

 const cinemaCafeHttp = {
    get : async (uniqueURL: string) => {
        return await axios.get(`${axiosInstance.baseURL}${uniqueURL}`,
            {
                headers: {
                    ...axiosInstance.headers,
                    Authorization : getToken()
                }
            }
        )
    }
    ,
    getbyparams : async (uniqueURL: string, params : object) => {
        return await axios.get(`${axiosInstance.baseURL}${uniqueURL}`,
            {
                params : params,
                headers: {
                    ...axiosInstance.headers,
                    Authorization : getToken()
                }
            }
        )
    }
    ,
    post :  async (uniqueURL: string, data : any) => {
        return await axios.post(`${axiosInstance.baseURL}${uniqueURL}`, data,
            {
                headers: {
                    ...axiosInstance.headers,
                    Authorization : getToken()
                }
            }
        )
    }
    ,
    delete : async (uniqueURL: string, id : any) => {
        return await axios.delete(`${axiosInstance.baseURL}${uniqueURL}/${id}`,
            {
                headers: {
                    ...axiosInstance.headers,
                    Authorization : getToken()
                }
            }
        ) 
    }
    ,
    put : async (uniqueURL: string, id : any, data : any) => {
        return await axios.put(`${axiosInstance.baseURL}${uniqueURL}/${id}`,data,
            {
                headers: {
                    ...axiosInstance.headers,
                    Authorization : getToken()
                }
            }
        ) 
    }
}

export default cinemaCafeHttp;