import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    updateRawDrugInventory : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { id, ...rest } = params ?? {};
                const { data, status } =  await cinemaCafeHttpColection.put('updaterawdruginventory',id,rest);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}
