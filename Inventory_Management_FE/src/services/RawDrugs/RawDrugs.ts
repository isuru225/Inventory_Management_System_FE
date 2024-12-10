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
                const { id, ItemName, Category, Amount, ExpirationDate, MeasurementUnit } = params ?? {};
                const editData = {
                    ItemName, 
                    Category, 
                    Amount, 
                    ExpirationDate, 
                    MeasurementUnit
                }
                const { data, status } =  await cinemaCafeHttpColection.put('updaterawdrug', id, editData);
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
                const { data, status } =  await cinemaCafeHttpColection.post('addtransaction',params);
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
                const { data, status } =  await cinemaCafeHttpColection.delete('deleterawdrug',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}