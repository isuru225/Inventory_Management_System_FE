import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    passwordReset : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('login/resetpassword', params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}