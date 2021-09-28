import "bootstrap/dist/css/bootstrap.css"
import React, { useState, useEffect } from 'react';
import './Organization.css'
import Member from '../Member/Member';
import  Cart from '../Cart/Cart'

const Organization = () => {

    const [club, setClub] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( ()=> {
        fetch('./member.json')
        .then(res=>res.json())
        .then(data=>setClub(data))
    } ,[])

    const handleAddToCard = (product) =>{
        //     console.log(product)
        const newAdd = [...cart ,product];
        setCart(newAdd);
    }
    return (
        
        <div className="container mx-auto row gx-4">
            <div className="col-8">

            {/* <h3>This is Chittagong IT Professonal Club:{club.length}</h3> */}
                <div className="row gx-5 row-cols-3">
                {

                    club.map(member => <Member member={member} handleAddToCard ={ handleAddToCard }></Member>)
                }
                </div>
            </div>
            <div className="cart-container col-4">
                {/* <h3>Order Summary</h3>
                <h5>Item Orderd:</h5> */}
                <Cart cart={cart}>
               

               </Cart>

            </div>
        </div>
        
    );
};

export default Organization;