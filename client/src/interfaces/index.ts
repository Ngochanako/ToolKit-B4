export type Product={
    id:number,
    name:string,
    detail:string,
    img:string,
    quantity:number,
    price:number,
    status:boolean,
}
export type Cart={
    id:number,
    product:Product,
    quantity:number,
    quantityUpdate:number,
}
export type State={
    products:Product[];
    product:Product;
    carts:Cart[];
    notify:string,
}