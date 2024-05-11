import './ProductDisplay.css'
import star_icon from '../Assests/star.jpg'
import star_dull_icon from '../Assests/dullstar.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} =props;
    const {addToCart} =useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
               <img src={product.image} width={50}  alt=''/>
               <img src={product.image} width={50} alt=''/>
               <img src={product.image} width={50} alt=''/>
                              
            </div >
            <div className="productdisplay-img">
               <img className='productdisplay-main-img'  src={product.image} alt='' />
            </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
           <img src={star_icon} width={15} alt=''/>
           <img src={star_icon} width={15} alt=''/>
           <img src={star_icon} width={15} alt=''/>
           <img src={star_icon} width={15} alt=''/>
           <img src={star_dull_icon} width={15} alt=''/>
           <p>122</p>
        </div> 
        <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
        <p>The error message  routes matched location typically occurs when there is no route defined in your application that corresponds to the location product Here s what you can do to troubleshoot and fix this issue:</p>
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className='productdisplay-right-category'><span>Category:</span>women, T-shirt,CropTop</p>
        <p className='productdisplay-right-category'><span>Tags:</span>women, T-shirt,CropTop</p>
        
      </div>
    </div>
  )
}

export default ProductDisplay
