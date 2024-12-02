import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getAllRawDrugs : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.get('getrawdrugs');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    addNewDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('addrawdrug',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    editRawDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.put('updaterawdrug','data',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}