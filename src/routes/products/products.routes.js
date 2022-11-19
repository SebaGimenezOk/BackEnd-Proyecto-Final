const express = require('express');
const { v4: uuidv4 } = require('uuid');
const _ = require('lodash')
const ProductoNacional = require('../../services/products/products.service');

const router = express.Router();
const productNatio = new ProductoNacional();


router.post('/', async (req, res, next) => {
    try {
        const { body } = req;
        if (_.isNil(body)) (res.status(404).json({ success: false, message: "REQ ERROR Body missing" }));
        Object.assign(body, {
            id: uuidv4()
        });
        const data= await productNatio.createProduct(body);
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const data = await productNatio.getProducts();
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
})

router.put('/:productUuid', async (req, res, next) => {
    try {
        const { productUuid } = req.params;
        const { body } = req
        if (_.isNil(productUuid) || _.isNil(body)) (res.status(400).json({ success: false, message: "req error" }));
        const data= await productNatio.updateProduct(productUuid, body)
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
});

router.get('/:productUuid', async (req, res, next) => {
    try {
        const { productUuid } = req.params;
        if (_.isNil(productUuid)) (res.status(400).json({ success: false, message: "req error" }));
        const data = await productNatio.getProduct(productUuid)
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
});

router.delete('/:productUuid', async (req, res, next) => {
    try {
        const { productUuid } = req.params;
        if (_.isNil(productUuid)) (res.status(400).json({ success: false, message: "req error" }));
        const data= await productNatio.deleteProduct(productUuid)
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
});




module.exports = router;