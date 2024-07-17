const products = [
    {
        id: "1",
        name: "Iphone 14",
        price: 3500,
        category: "celular",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487267_sd.jpg",
        stock: 32,
        description: "Apple iPhone 14 (256 GB) - Azul medianoche - Distribuidor Autorizado",
    },
    {
        id: "2",
        name: "Samsung s24",
        price: 2300,
        category: "celular",
        img: "https://th.bing.com/th/id/OIP.AnqmHjufAN3aHFMkF5yU4gHaHa?rs=1&pid=ImgDetMain",
        stock: 22,
        description: "Samsung Galaxy S24 Ultra 5G 512gb 12gb RAM Negro Titanio",
    },
    {
        id: "3",
        name: "Xiaomi redmi note 9",
        price: 1200,
        category: "celular",
        img: "https://www.deepspecs.com/wp-content/uploads/2020/05/1-xiaomi-redmi-note-9-deepspecs-com.jpg",
        stock: 5,
        description: "Xiaomi Redmi Note 9 4gb/128gb Gris Garantia Tienda Oficial Color Gris medianoche",
    },

    {
        id: "4",
        name: "Samsung Galaxy tab S",
        price: 1000,
        category: "tablet",
        img: "https://th.bing.com/th/id/OIP.2soh2f1mMRmvG3tLJHcUMAHaFj?rs=1&pid=ImgDetMain",
        stock: 3,
        description: "Samsung Galaxy Tab S 10.5 Tablet 16GB Memory, Black",
    },

    {
        id: "5",
        name: "Notebook BGH at300b",
        price: 4200,
        category: "notebook",
        img: "https://http2.mlstatic.com/D_NQ_NP_640131-MLA42271710549_062020-F.jpg",
        stock: 20,
        description: "Laptop AT300B 14 color negro 2GB de Ram - 32GB SSD - Intel Atom",
    },
    ];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
    }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
    });
};
