import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    updateRawDrugInventory : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id, ...rest } = params ?? {};
                const { data, status } =  await AyurVaultHttpColection.put('updaterawdruginventory',id,rest);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    updateFinishedDrugInventory : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id, ...rest } = params ?? {};
                const { data, status } =  await AyurVaultHttpColection.put('updatefinisheddruginventory',id,rest);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    updateGeneralStoreInventory : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id, ...rest } = params ?? {};
                const { data, status } =  await AyurVaultHttpColection.put('updategeneralinventory',id,rest);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}
