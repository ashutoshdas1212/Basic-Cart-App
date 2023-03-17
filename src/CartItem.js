import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="data:image/png;base64,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"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn.pixabay.com/photo/2016/03/21/05/05/minus-1270000_1280.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://img.freepik.com/free-icon/delete_318-901546.jpg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;