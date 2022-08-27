const products = [
    {
        id: '1',
        name: "Estanteria Azul",
        marca: "estantec",        
        category: "Estanterias",
        price: "6000",        
        img: "./img/Estazul.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    
        
    },
    {
        id: '2',
        name: "Estanteria Negra",
        marca: "estantec",        
        category: "Estanterias",
        price: "7000",        
        img: "./img/Estnegra.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '3',
        name: "Estanteria Plateada",
        marca: "estantec",        
        category: "Estanterias",
        price: "5000",        
        img: "./img/Estplateada.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '4',
        name: "Pintura Blanca",
        marca: "estantec",        
        category: "Pinturas",
        price: "5000",        
        img: "./img/PinturaBlanca.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '5',
        name: "Pintura Piletas",
        marca: "estantec",        
        category: "Pinturas",
        price: "5500",        
        img: "./img/PinturaPiletas.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '6',
        name: "Pintura Pisos",
        marca: "estantec",        
        category: "Pinturas",
        price: "2500",        
        img: "./img/PinturaPisos.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '7',
        name: "Escalera Pintor",
        marca: "estantec",        
        category: "Escaleras",
        price: "25000",        
        img: "./img/EscaleraPintor.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '8',
        name: "Escalera Movil",
        marca: "estantec",        
        category: "Escaleras",
        price: "35000",        
        img: "./img/EscaleraMovil.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '9',
        name: "Escalera Plegable",
        marca: "estantec",        
        category: "Escaleras",
        price: "40000",        
        img: "./img/EscaleraPlegable.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '10',
        name: "Carretilla Simple",
        marca: "estantec",        
        category: "Carros",
        price: "5000",        
        img: "./img/Carretilla.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '11',
        name: "Carretilla Vertical",
        marca: "estantec",        
        category: "Carros",
        price: "9000",        
        img: "./img/CarretillaVertical.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '12',
        name: "Carro Plegable",
        marca: "estantec",        
        category: "Carros",
        price: "8000",        
        img: "./img/CarroPlegable.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
   
    {
        id: '13',
        name: "Hidrolavadora simple",
        marca: "estantec",        
        category: "Hidrolavadoras",
        price: "55000",        
        img: "./img/Hidrolavadora.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '14',
        name: "Hidrolavadora Autonoma",
        marca: "estantec",        
        category: "Hidrolavadoras",
        price: "85000",        
        img: "./img/HidrolavadoraAutonoma.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    },
    {
        id: '15',
        name: "Hidrolavadora Bosch",
        marca: "estantec",        
        category: "Hidrolavadoras",
        price: "159000",        
        img: "./img/HidrolavadoraBosch.jpg",
        description:  "Lorem ipsum dolor sit amet. Sed voluptatem aliquam qui veritatis optio id numquam consequatur aut modi blanditiis. Et inventore tenetur sed temporibus internos qui quibusdam quam et minima numquam est consequatur similique ut soluta temporibus est aliquam galisum."
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}