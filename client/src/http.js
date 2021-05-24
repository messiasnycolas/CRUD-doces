import Axios from 'axios';

const baseUrl = `http://localhost:8080/api`;


export async function createProduct(data) {
    return await Axios.post(`${baseUrl}/product`, {
        name: data.name,
        price: data.price
    });
}

export async function updateProduct(id, data) {
    return await Axios.put(`${baseUrl}/product/${id}`, data);
}

export async function deleteProduct(id) {
    return await Axios.delete(`${baseUrl}/product/${id}`);
}

export async function getProducts() {
    try{
        const productsRes = await Axios.get(`${baseUrl}/products`)
        return productsRes;
    } catch(error) {
        return null;
    }
}