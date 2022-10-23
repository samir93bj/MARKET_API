class ProductService {

    async list(){
        const productos = [{"id":1, "name":"Samir"}, {"id":2, "name":"Martin"}]
        return productos;
    }

}

export default  ProductService ;