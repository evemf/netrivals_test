
import React, {useState, useEffect } from 'react';

function Product(props) {
    const product = props.product;
    let modifiedPrice = null;
    const [inputValue, getInputValue] = useState('');
    const [enterKey, setEnter] = useState(false);

    useEffect(() => { 
        console.log(enterKey);
        console.log(inputValue);
     });
  
   const handleKeyPress = (evnt) => {
     getInputValue(evnt.target.value);
     if (evnt.key === 'Enter') {
      setEnter(true);
     }
    else {
      setEnter(false);
     }
   };
  
   const getResult = (product, inputValue) => {
      if (enterKey === true) {
        modifiedPrice = product.original_price * inputValue;
      }
   }

    return (
        <>
            <div className="flex-container"> 
                <div>        
                    <h4>{product.name}</h4>
                    <img className="img-responsive" src={`${product.imgPath}`} alt={product.name} />
                    <div className="visibleForSmall" style={{ textAlign: 'center'}}>
                        <input className="formula-input" onKeyUp={handleKeyPress} onKeyDown={ getResult(product, inputValue)} placeholder="Px2"/>
                    </div>
                    <div className="product-header">
                        <div>
                            <p>Original Price</p>
                            <p><span>€</span>{product.original_price}</p>
                        </div>
                        <div className="visibleForSmall">
                            <p>Modified Price</p>
                            <p><span>€</span>{modifiedPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="visibleFromMedium" style={{ textAlign: 'center'}}>
                    <input className="formula-input" onKeyUp={handleKeyPress} onKeyDown={ getResult(product, inputValue)} placeholder="Px2"/>
                </div>
                <div className="visibleFromMedium">
                    <h4>{product.name}</h4>
                    <img className="img-responsive" src={`${product.imgPath}`} alt={product.name} />
                    <p>Modified Price</p>
                    <p><span>€</span>{modifiedPrice}</p>
                </div>
            </div>
        </>
    );
}

export default Product;