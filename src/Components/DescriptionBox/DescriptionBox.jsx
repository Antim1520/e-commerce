import  './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
        The [Name of the Product] is a must-have addition to your wardrobe. Crafted from high-quality materials, this [type of product] combines comfort and style seamlessly. Whether you are lounging at home or heading out for a casual outing, this versatile [type of product] is perfect for any occasion.
        </p>
        <p>The [Name of the Product] is a must-have addition to your wardrobe. Crafted from high-quality materials, this [type of product] combines comfort and style seamlessly. Whether you are lounging at home or heading out for a casual outing, this versatile [type of product] is perfect for any occasion.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
