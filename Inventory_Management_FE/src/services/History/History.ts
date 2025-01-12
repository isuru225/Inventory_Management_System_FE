import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getAllHistoryRecords : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.get('gethistoryrecords');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    deleteAHistoryRecord : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.delete('deletehistoryrecord',params.id);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}
