import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    logUserCredentials : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('login', params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    // ,
    // forgotPassword : (params: any): Promise<any> => {

    //     return new Promise<any>(async (resolve, reject) => {
    //         try {
    //             const { data, status } =  await AyurVaultHttpColection.post('login/forgotpassword', params);
    //             resolve({ data, status });
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }
}