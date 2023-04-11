import React from 'react'

const Home = () => {
  return (
    <div>
          <h1> Hi there is a redux React </h1>
          <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios15-iphone13-pro-home-camera-callout.png" alt="txt"/>
                </div>
                <div className="text-wrapper item">
                    <span>  I-Phone</span>
                    <span> Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button> Add To Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Home
