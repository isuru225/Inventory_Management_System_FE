import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getAllRawDrugs : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.get('getrawdrugs');
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    addNewDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('addrawdrug',params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    editRawDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id } = params ?? {};
                
                const { data, status } =  await AyurVaultHttpColection.put('updaterawdrug', id, params);
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
                const { data, status } =  await AyurVaultHttpColection.post('addtransaction',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    deleteRawDrug : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.delete('deleterawdrug',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}