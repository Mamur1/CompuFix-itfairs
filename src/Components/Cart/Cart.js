

const  Cart= (props) => {

    const {cart} = props;

    let total=0;
    for(const data of cart){

        total= total+ data.salary;
    }
    return (
        <div>
           <h3>Order Summary</h3>
            <h5>Item Orderd:{cart.length}</h5>
            <h2>Total: {total} </h2>
        </div>
    );
};

export default Cart;