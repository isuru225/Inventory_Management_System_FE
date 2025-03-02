import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getAllNotifications : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.get('getnotifications');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    
}
