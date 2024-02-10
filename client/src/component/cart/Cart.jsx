import React from 'react'
import './Cart.css'
import { Divider } from '@mui/material';
const Cart = () => {
    return (
        <>
            <div className="cart_section">
                <div className="cart_container">
                    <div className="left_cart">
                        <img src="https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50" alt="" />
                        <div className="cart_btn">
                            <button className='cart_btn1' >Add To Cart</button>
                            <button className='cart_btn2' >Buy Now</button>
                        </div>
                    </div>
                    <div className="right_cart">
                        <h3>Fitness Gear</h3>
                        <h4>Pigeon Favourite Electric Kettle (1.5l)</h4>
                        <Divider />
                        <p className='mrp'>M.R.P:1195</p>
                        <p>Deal of the day :<span style={{ color: "#B12704" }} >625.00</span></p>
                        <p>you save :<span style={{ color: "#B12704" }} >570</span></p>
                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>fsfwsf</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt pariatur, quis maxime modi vel beatae accusantium deleniti culpa itaque aspernatur nostrum incidunt. Voluptatibus, quae voluptate nesciunt vero expedita nisi ullam sed enim consectetur quo voluptas inventore id, nulla dolorum.</span></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart