class CarroService {

    async list(){
        const carros = [{ "id":1, "total":5000, "productos":[{"id":1, "cantidad":5}, {"id":3, "cantidad":5}, {"id":2, "cantidad":5}]}]
        return carros;
    }
}

export default CarroService;