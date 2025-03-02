import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    registerNewUser : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('register',params);
                console.log("WRX",data);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}