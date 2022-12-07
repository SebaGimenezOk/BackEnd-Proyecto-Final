


const getProductModule = async () => {
    const dataCore = process.env.DATACORE;
    if (dataCore == 'MEMORY') {
        const moduleSource = await import ('./productosDao/ProductosDaoMemoria.js');
        return moduleSource.default;
    }else if (dataCore=='FS'){
        const moduleSource= await import('./productosDao/ProductosDaoFs.js');
        return moduleSource.default;
    }else if (dataCore='MONGO'){
        const moduleSource= await import('./productosDao/ProductosDaoMongoDB.js');
        return moduleSource.default;
    }else if (dataCore=='FIREBASE'){
        const moduleSource= await import('./productosDao/ProductosDaoFirebase.js');
        return moduleSource.default;
    }
}

const productService= async()=>{
    const ProductClass=await getProductModule();
    const productService=new ProductClass();
    console.log(productService.getAllProducts());
}
export default productService;