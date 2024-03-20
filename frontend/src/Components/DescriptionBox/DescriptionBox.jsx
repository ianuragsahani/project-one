import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="desciptionbox-navigator">
        <div className="desciptionbox-nav-box">Description</div>
        <div className="desciptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="discriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where business and individuals can
            showcase their products, internet with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.</p>
            <p>E-commerce website typically display product or services along with detailed description,images,price,and any available variations(eg.,sizes,color).Each product usually has its own dedicated page with relevant information.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
