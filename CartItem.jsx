import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const itemCost = parseFloat(item.cost.replace('$', ''));
      return total + itemCost * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.replace('$', ''));
    return (itemCost * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Fonctionnalité à venir : Le processus de paiement sera bientôt disponible !');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Montant total du panier : ${calculateTotalAmount()}</h2>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Votre panier est actuellement vide.</p>
          <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
            Continuer vos achats
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item-card" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">Prix unitaire : {item.cost}</div>
                  <div className="cart-item-quantity">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-subtotal">
                    Sous-total : ${calculateTotalCost(item)}
                  </div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-navigation-actions">
            <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
              Continuer vos achats
            </button>
            <button className="checkout-btn" onClick={handleCheckoutShopping}>
              Paiement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
