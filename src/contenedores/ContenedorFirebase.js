import { addDoc, getDoc, getDocs, query, collection } from 'firebase/firestore'
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

class ContenedorFirebase {
    constructor() {
        const db = admin.firestore();
        const query = db.collection('products')
    }


    async getAll() {
        const query = query(this.collection)
        const resultado = await getDocs(query);
        const products = [];
        resultado.forEach((product) => {
            products.push({ id: product.id, ...product.data() })
        }); return products
    }

    async save(data) {
        const newProduct = await addDoc(
            this.collection,
            JSON.parse(JSON.stringify(data))
        ); return { id: newProduct.id, ...data }
    }
    async getById(id) {
        try {
            const data = query.doc(`${uuidv4}`);
            const productoFiltrad = await data.get();
            return productFiltrad
        } catch (err) {
            console.error(err);
            return {
                success: true,
                message: err.message
            }
        }
    }
    async upDate(upDate, id) {
        try {
            const doc = query.doc(`${uuidv4}`)
            const response = await doc.update({ nombre: "Roger" })
            return response
        } catch (err) {
            console.error(err);
            return {
                success: true,
                message: err.message
            }
        }
    }
    async delete(id) {
        try {
            const data = query.doc(`${uuidv4}`);
            const productDeleted = await doc.delete();
            return console.log(`se borro ${uuidv4}`);
        } catch (err) {
            console.error(err);
            return {
                success: true,
                message: err.message
            }
        }
    }

}

export default ContenedorFirebase;