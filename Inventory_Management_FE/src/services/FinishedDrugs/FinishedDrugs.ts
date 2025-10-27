import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getAllFinishedDrugs : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.get('getfinisheddrugs');
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
                const { data, status } =  await AyurVaultHttpColection.post('addfinisheddrug',params);
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
                
                const { data, status } =  await AyurVaultHttpColection.put('updatefinisheddrug', id, params);
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
                const { data, status } =  await AyurVaultHttpColection.post('addfinisheddrugtransaction',params);
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
                const { data, status } =  await AyurVaultHttpColection.delete('deletefinisheddrug',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}