import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getRegisteredUser : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.get('getregisteredusers');
                
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    deleteRegisteredUser : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.delete('deleteregistereduser',params?.id);
                
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}