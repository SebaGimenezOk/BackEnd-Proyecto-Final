import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js";
class ProductClass extends ContenedorFirebase {
    constructor() {
        super('products')
    }
};
export default ProductClass;