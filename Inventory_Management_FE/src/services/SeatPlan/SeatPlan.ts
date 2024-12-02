import axios from "axios";
import { cinemaCafeHttpColection } from "../../APIService/index.ts";

export default {
    getSelectedMovie: (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const id = params;
                const { data, status } = await axios.get(
                    'http://localhost:5014/api/Movie/movie_id', {
                    params: {
                        id
                    }
                    ,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
                );
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    getSelectedTheater: (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const id = params;
                const { data, status } = await axios.get(
                    'http://localhost:5014/api/Theater/theater', {
                    params: {
                        id
                    }
                    ,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
                );
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    addBookingDetails: (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                console.log("Jam",params);
                const { data, status } = await axios.post(
                    'http://localhost:5014/bookinginfo',params, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
                );
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    removeBookingDetails : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                console.log("Jam",params);
                const { data, status } = await axios.post(
                    'http://localhost:5014/bookinginfo',params, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
                );
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    getReservedSeatIds : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                console.log("Jam",params);
                const { data, status } = await axios.get(
                    'http://localhost:5014/api/Seat/reservedseats', {
                    params : params 
                    ,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
                );
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    addTokenClaims: (params: any): Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            const claims = params
            console.log("massa",claims);
            try {
                const { data, status } = await axios.post(
                    `http://localhost:5014/api/Token/addclaims`, claims,
                    {
                        headers: {
                            'Accept': '*/*',
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    }
                );
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    getPermReservedSeatIds : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                console.log("Jam",params);
                const { data, status } = await cinemaCafeHttpColection.getbyparams('Seat/permreservseats', params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }

}