import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces'
import { getCarts } from '../services/getAllCart';
import { deleteProductInCart } from '../services/deleteProductInCart';
import { deleteNotify, noNotify, updateNotify } from '../store/reducers/NotificationReducer';
import { changeQuantity} from '../store/reducers/CartReducer';
import { updateProductInCart } from '../services/updateProductInCart';

export default function Cart() {
  const carts=useSelector((state:State)=>state.carts); 
  const dispatch=useDispatch();
  const [totalMoneyCart,setTotalMoney]=useState<number>(0);
  useEffect(()=>{
    dispatch(getCarts());
  },[])
  useEffect(()=>{
    const total=carts.reduce((totalMoney,num)=>{
     return totalMoney+num.quantity*num.product.price
    },0)
    setTotalMoney(total);
 },[carts])
  //delete Product in Cart
  const deleteProduct=(idProduct:number)=>{
     dispatch(deleteProductInCart(idProduct));
     dispatch(deleteNotify());
  }
  //change input
  const handleChangeQuantityProductInCart=(e:React.ChangeEvent<HTMLInputElement>,idProduct:number)=>{
      let value=+e.target.value;
      dispatch(changeQuantity({id:idProduct,quantityChange:value}));
      dispatch(noNotify());
  }
  //update Product
  const updateProduct=(idProduct:number)=>{
      let productUpdate=carts.find(btn=>btn.id===idProduct);
      if(!productUpdate){
        return;
      }    
      dispatch(updateProductInCart(productUpdate));
      dispatch(updateNotify());
  }
  return (
    <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th style={{width:'4%'}}>STT</th>
                  <th>Name</th>
                  <th style={{width:'15%'}}>Price</th>
                  <th style={{width:'4%'}}>Quantity</th>
                  <th style={{width:'25%'}}>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {carts.map((btn,index)=>(              
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{btn.product.name}</td>
                  <td>{btn.product.price} USD</td>
                  <td>
                    <input
                      min='1'
                      max={btn.product.quantity+btn.quantity}
                      name="cart-item-quantity-1"
                      type="number"
                      value={btn.quantity}
                      onChange={(e)=>handleChangeQuantityProductInCart(e,btn.id)}
                    />
                  </td>
                  <td>
                    <a
                      className="label label-info update-cart-item"
                      data-product=""
                      onClick={()=>updateProduct(btn.id)}
                    >
                      Update
                    </a>
                    <a
                      className="label label-danger delete-cart-item"
                      data-product=""
                      onClick={()=>deleteProduct(btn.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                ))}
              </tbody>
              <tfoot id="my-cart-footer">
                <tr>
                  <td colSpan={4}>
                    There are <b>{carts.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {totalMoneyCart} USD
                  </td>
                </tr>
              </tfoot>
            </table>
          </div> 
  )
}
