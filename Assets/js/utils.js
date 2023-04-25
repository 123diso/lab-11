export const traerTienda = async () => {
    console.log("x1");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};


// export class producto

export class producto {
    imagen = ""
    title =""

    constructor(image, title){
        this.imagen = image;
        this.title = title;
    }
}

render () {
    const div = document.createElement('div')
}