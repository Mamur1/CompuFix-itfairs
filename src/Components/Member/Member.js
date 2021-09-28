import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Member.css';

const Member = (props) => {
    console.log(props.member.img);
    const {id,name,position,img,salary} = props.member
    return (
        <div className="card">
            <img src={img} className="img-fluid member-img" alt="..." />
            <div class="card-body ">
                <h5 className="card-title">ID:{id}</h5>
                <h5 className="card-title">Name:{name}</h5>
                <p className="card-text">Position:{position}</p>
                <p className="card-text">Salary:{salary}</p>
                <button 
                onClick ={ ()=> props.handleAddToCard (props.member) }
                className="btn btn-primary text-center "> Add To Card</button>
            </div>
        </div>
    );
};

export default Member;