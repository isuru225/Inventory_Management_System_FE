import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    passwordReset : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('login/resetpassword', params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
}