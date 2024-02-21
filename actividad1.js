class ProductManager {
    constructor () {
       this.products = []; // genera una clase sin atributos esta vacia
    }
    addProducts(title, description, price, thumbnail, code, stock) { //validar todos 
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        // no se repite el codigo
        if (this.products.some(product => product.code === code)) {
            console.log(`El código ${code} está repetido.`);
            return;
        }
        this.products.push ({title, description, price, thumbnail, code, stock, id: this.#getId()})
    }
    getProductById = (Id) => {
        if (!this.products.find((product) => product.id === Id)) {
            console.error("Not Found");
        }else{
            console.log("It's Found");
    }
    }
    getProduct(){
        return this.products;//devuelve array
    }
    #getId() {
        if (this.products.length === 0) return 1; 
        return this.products[this.products.length - 1].id +1;
    }
}

const products = new ProductManager
products.addProducts("banco","muy comodo",1000,"img.png","code1",10);
products.addProducts("bebedero","un pico",1000,"img1.png","code2",10);
products.addProducts("bicicletero","dos bicis",400,"img2.png","code3",10);
console.log (products.getProduct())
products.getProductById(4)

        
 