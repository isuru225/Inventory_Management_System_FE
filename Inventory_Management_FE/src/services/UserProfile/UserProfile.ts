import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getUserProfileInfo : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.getbyparams('getuserprofile',params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
}
