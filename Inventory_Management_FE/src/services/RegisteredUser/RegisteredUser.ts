import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getRegisteredUser : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.get('getregisteredusers');
                console.log("WRX",data);
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
                const { data, status } =  await cinemaCafeHttpColection.delete('deleteregistereduser',params?.id);
                console.log("WRX",data);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}