import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    registerNewUser : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('register',params);
                
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
}