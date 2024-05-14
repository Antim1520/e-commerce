import  { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
    
  return (
    <div className='caritems'>
      <div className="caritems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
     
        {
            all_product.map((e)=>{
                if(cartItems[e.id]>0)
                    {
                    return <>
                   
                    <div className='caritems-format'>
                        <img src={e.image} alt='' className='cariticon-product-icon'/>
                        <p>{e.name}</p>
                        <p style={{marginLeft: '70px' }}>${e.new_price}</p>
                        <button className='caritems-quantity'>{cartItems[e.id]}</button>
                        <p style={{marginLeft: '70px' }}>${e.new_price * cartItems[e.id] }</p>
                        <img src={remove_icon}  width={15} height={15} onClick={()=>{removeFromCart(e.id)}}/>
                    </div>
                    <hr/>
                     </>                    
                }
                return null;
            })}
            <div className='cartitems-down'>
               <div className="cartitems-tptal">
                <h1>cart Total</h1>
                <div>
                  <div className='cartitems-total-item'>
                     <p>Subtotal</p>
                     <p>${getTotalCartAmount(cartItems)}</p>
                  </div>
                  <hr/>
                  <div className='cartitems-total-item'>
                     <p>Shipping fee</p>
                     <p>Free</p>
                  </div>
                  <hr/>
                  <div className='cartitems-total-item'>
                     <h3>Total</h3>
                     <h3>${getTotalCartAmount(cartItems)}</h3>
                  </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
               </div>
               <div className='cartitems-promocode'>
                 <p>if you have promo code, Enter it here</p>
                 <div className='cartitems-promobox'>
                     <input type='text' placeholder='promocode'/>
                     <buttom>Submit</buttom>
                 </div>
               </div>
            </div>
      
    </div>
  )
}

export default CartItems

//hello
