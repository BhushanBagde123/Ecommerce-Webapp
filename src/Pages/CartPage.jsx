import React, { useContext, useState } from 'react';
import { ContexPrv } from '../Context/Context';

const CartPage = () => {
    const { cart, setCart } = useContext(ContexPrv);
    
    const removeCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const addAmount = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
               
                return { ...item, amount: (item.amount || 0) + 1 }; // Default to 0 if undefined, then add 1
            }
            return item;
        });
        setCart(updatedCart);
    };
   

    const removeAmount = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                
                if ((item.amount || 0) > 1) { // Check if amount is greater than 1
                   
                    return { ...item, amount: item.amount - 1 };
                }
                return item; // Do not reduce below 1
            }
            return item;
        });
        setCart(updatedCart);
    };
    const totalPrice =cart.reduce((acc,item)=>{
        return acc+(item.price*(item.amount || 1))
    },0)
    const totalPriceCount =totalPrice.toFixed(2)

    return (
        <div className='flex justify-between w-full h-full p-3'>
            {cart.length > 0 ? (
                cart.map((item) => (
                    <div key={item.id} className=''>
                        <div>
                            <img className='w-40 h-40' src={item.image} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h3>{item.title}</h3>
                            <h4>{item.price}$</h4>
                            
                        </div>
                        <div className='flex gap-5'>
                            <button onClick={() => addAmount(item.id)}>+</button>
                            <span>amount: {item.amount || 1}</span> {/* Default to 1 if amount is undefined */}
                            <button onClick={() => removeAmount(item.id)}>-</button>
                            <button onClick={() => removeCart(item.id)}>remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Your cart is empty</div>
            )}
            <div>
            <h1>total price:</h1>
            <span>{totalPriceCount}$</span>
            </div>
        </div>

    );
};

export default CartPage;
