import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    updateRawDrugInventory : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id, balance, author, adjustmentType, amountAdjusted } = params ?? {};
                const updatedInventoryData = {
                    balance, 
                    author, 
                    adjustmentType, 
                    amountAdjusted
                }
                const { data, status } =  await cinemaCafeHttpColection.put('updaterawdruginventory',id,updatedInventoryData);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}
