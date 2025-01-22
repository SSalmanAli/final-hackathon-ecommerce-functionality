
export type Product = {
    id: number | string;
    name: string;
    price: number;
    image: string;
    dPrice: number;
    qty : number;
}

export type Cart = {
    id: number;
    name: string;
    price: number;
    image: string;
    dPrice: number;
    uuid: string | number;
    qty: number;
}