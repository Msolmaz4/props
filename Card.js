import React from 'react';
import PropsTypes from 'prop-types';

const Card =(props ) => {
    console.log(props)
return (

                <div className="card w-100">
                    <img src={props.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.cardTitle}</h5>
                            <p className="card-text">{props.cardText}</p>
                            <p className="card-text"><small>{props.updatedTime}</small></p>
                        </div>
                </div>
);
};

Card.defaultProps ={
 cardTitle:"deneme"

}


Card.propsTypes ={

    cardText: PropsTypes.string  
}
export default Card;