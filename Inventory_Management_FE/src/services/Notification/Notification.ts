import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getAllNotifications : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.get('getnotifications');
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    markAllMessages : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.patch('updatenotificationsasmarked',params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    
}
