import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getAllFinishedDrugs : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.get('getfinisheddrugs');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    addNewFinishedDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('addfinisheddrug',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    editFinishedDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id } = params ?? {};
                
                const { data, status } =  await cinemaCafeHttpColection.put('updatefinisheddrug', id, params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    addTransactionRecord : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('addfinisheddrugtransaction',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    deleteFinishedDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.delete('deletefinisheddrug',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}