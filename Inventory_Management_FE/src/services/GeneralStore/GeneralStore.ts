import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getAllGeneralStoreItems : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.get('getgeneralstoreitems');
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    addNewGeneralStoreItem : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('addgeneralstoreitem',params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    editGeneralStoreItem : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id } = params ?? {};
                
                const { data, status } =  await AyurVaultHttpColection.put('updategeneralstoreitem', id, params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    addTransactionRecord : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.post('addgeneralstoreitemtransaction',params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
    ,
    deleteGeneralStoreItem : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.delete('deletegeneralstoreitem',params);
                resolve({ data, status });
            } catch (error: any) {
                reject(error);
            }
        });
    }
}