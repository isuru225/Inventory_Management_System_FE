import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    logUserCredentials : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('login', params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}