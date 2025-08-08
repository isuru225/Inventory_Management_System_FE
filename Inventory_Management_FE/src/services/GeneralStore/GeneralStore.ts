import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getAllGeneralStoreItems : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.get('getgeneralstoreitems');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    addNewGeneralStoreItem : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.post('addgeneralstoreitem',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    editGeneralStoreItem : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id } = params ?? {};
                
                const { data, status } =  await cinemaCafeHttpColection.put('updategeneralstoreitem', id, params);
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
                const { data, status } =  await cinemaCafeHttpColection.post('addgeneralstoreitemtransaction',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    deleteGeneralStoreItem : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await cinemaCafeHttpColection.delete('deletegeneralstoreitem',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}