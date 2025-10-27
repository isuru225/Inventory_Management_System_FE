import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    forgotPassword : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('login/forgotpassword', params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}