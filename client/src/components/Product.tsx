import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cart, State } from '../interfaces';
import { getProducts } from '../services/getProducts';
import { addProductAvailableInCart } from '../services/addProductAvailableInCart';
import { addNewProductToCart } from '../services/addNewProductToCart';
import { setProducts } from '../services/setProducts';
import { addNotify } from '../store/reducers/NotificationReducer';

export default function Product() {
    const carts:Cart[]=useSelector((state:State)=>state.carts);
    const products=useSelector((state:State)=>state.products); 
    const [quantity,setQuantity]=useState<number>(1);  
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getProducts());
    },[])
    const addProductToCart=(idProduct:number)=>{
        let productAdd=products.find(btn=>btn.id===idProduct);
        if(!productAdd){
            return;
        }
         //case product is avalable in cart
         const cartFind=carts.find(btn=>btn.product.id===idProduct);
        
         if(cartFind){
            let productInCart={
                id:cartFind.id,
                quantityInCart:quantity+cartFind.quantity,
             }
             dispatch(addProductAvailableInCart(productInCart))
         }else{
            //case product is new in cart
                let newProductInCart:Cart={
                    id:Math.floor(Math.random()*10000000000),
                    product:productAdd,
                    quantity:quantity,
                    quantityUpdate:quantity,
                }
                dispatch(addNewProductToCart(newProductInCart));
         }
        dispatch(setProducts({quantityProduct:productAdd?.quantity-quantity,id:idProduct}))
         dispatch(addNotify());
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuantity(+e.target.value);
    }
    
  return (
    <div>
    {
     products.map(product=>(
        <div className="media product" key={product.id}>
            <div className="media-left">
            <a href="#">
                <img
                className="media-object"
                src={product.img}
                alt="pizza"
                />
                <h4>Total:{product.quantity}</h4>
            </a>
            </div>
            <div className="media-body">
            <h4 className="media-heading">{product.name}</h4>
            <p>
               {product.detail}
            </p>
            <input
                onChange={handleChange}
                name="quantity-product-1"
                type="number"
                min={1}
                max={product.quantity}
                style={{display:product.quantity>0?'':'none'}}
            />
            <a>Price: {product.price} USD</a>
            {product.quantity>0? (<a style={{cursor:'pointer'}} onClick={()=>addProductToCart(product.id)} className="price">Add To Cart</a>):(<span className="price"> Add To Cart</span>)}
            </div>
        </div>
        ))
    }
</div>
  )
}
