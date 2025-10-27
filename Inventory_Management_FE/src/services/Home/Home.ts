import { AyurVaultHttpColection } from "../../APIService/index.ts";

export default {
    getAllProjects : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await AyurVaultHttpColection.get('home/getprojects');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}