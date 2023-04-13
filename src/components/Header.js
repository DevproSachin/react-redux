import React from 'react'
function Header(props)
{
    //console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
                <span className="cart-count"></span>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="txtxt"/>
            </div>
        </div>
    )
}

export default Header