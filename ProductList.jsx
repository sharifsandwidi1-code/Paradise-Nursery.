import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  // Calcul du nombre total d'articles uniques ou cumulés dans le panier
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Catalogue de plantes : 3 catégories distinctes, 6 plantes chacune
  const plantsArray = [
    {
      category: "Plantes Purificatrices d'Air",
      plants: [
        {
          name: "Plante Serpent (Sansevieria)",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=400&q=80",
          description: "Excellente plante pour filtrer les toxines d'intérieur, très résistante.",
          cost: "$15"
        },
        {
          name: "Plante Araignée (Chlorophytum)",
          image: "https://images.unsplash.com/photo-1572688484437-338a442d8c36?auto=format&fit=crop&w=400&q=80",
          description: "Purifie l'air des polluants courants et produit facilement des rejets.",
          cost: "$12"
        },
        {
          name: "Lys de la Paix (Spathiphyllum)",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=400&q=80",
          description: "Fleurs blanches élégantes, élimine le benzène et le formaldéhyde.",
          cost: "$18"
        },
        {
          name: "Lierre Anglais (Hedera helix)",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80",
          description: "Plante grimpante ou retombante très efficace contre les moisissures.",
          cost: "$14"
        },
        {
          name: "Ficus Caoutchouc (Elastica)",
          image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80",
          description: "Feuillage large et lustré capable d'absorber les particules nocives.",
          cost: "$22"
        },
        {
          name: "Pothos Doré (Epipremnum aureum)",
          image: "https://images.unsplash.com/photo-1596724803690-34989600e167?auto=format&fit=crop&w=400&q=80",
          description: "Croissance rapide en suspension, tolère les faibles luminosités.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Plantes Aromatiques & Médicinales",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=400&q=80",
          description: "Gel apaisant pour la peau et propriétés purifiantes reconnues.",
          cost: "$16"
        },
        {
          name: "Lavande Officinale",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=400&q=80",
          description: "Parfum apaisant qui favorise la relaxation et éloigne les insectes.",
          cost: "$15"
        },
        {
          name: "Romarin Aromatique",
          image: "https://images.unsplash.com/photo-1515586000433-a5bc7d0b3f13?auto=format&fit=crop&w=400&q=80",
          description: "Feuillage persistant idéal en cuisine et pour stimuler la concentration.",
          cost: "$11"
        },
        {
          name: "Menthe Poivrée",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80",
          description: "Arôme vivifiant, parfaite pour infusions et rafraîchissements.",
          cost: "$9"
        },
        {
          name: "Basilic Grand Vert",
          image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=400&q=80",
          description: "Indispensable pour vos préparations culinaires méditerranéennes.",
          cost: "$8"
        },
        {
          name: "Thym Commun",
          image: "https://images.unsplash.com/photo-1594488518000-84335ebdf17a?auto=format&fit=crop&w=400&q=80",
          description: "Herbe médicinale antiseptique et condiment d'une grande rusticité.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Succulentes & Décoratives",
      plants: [
        {
          name: "Plante ZZ (Zamioculcas)",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80",
          description: "Plante d'une robustesse exceptionnelle, feuillage vernissé.",
          cost: "$25"
        },
        {
          name: "Monstera Deliciosa",
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80",
          description: "Feuilles découpées spectaculaires apportant une ambiance jungle.",
          cost: "$30"
        },
        {
          name: "Calathea Orbifolia",
          image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=400&q=80",
          description: "Motifs foliaires striés argentés d'une grande élégance décorative.",
          cost: "$24"
        },
        {
          name: "Echeveria Elegans",
          image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=400&q=80",
          description: "Petite rosette succulente aux teintes bleutées très facile d'entretien.",
          cost: "$9"
        },
        {
          name: "Haworthia Fasciata (Zèbre)",
          image: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=400&q=80",
          description: "Feuilles rigides ornées de rayures blanches caractéristiques.",
          cost: "$12"
        },
        {
          name: "Ficus Lyrata (Figuier lyre)",
          image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=400&q=80",
          description: "Grandes feuilles en forme de violon, pièce maîtresse du salon.",
          cost: "$35"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleHomeClick = () => {
    window.location.reload();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Barre de navigation commune */}
      <nav className="navbar">
        <div className="nav-brand" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <div className="nav-logo-circle">🌿</div>
          <div>
            <h3 className="nav-title">Paradise Nursery</h3>
            <p className="nav-subtitle">Là où la nature grandit</p>
          </div>
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={handleHomeClick}>Accueil</button>
          <button className="nav-btn" onClick={handlePlantsClick}>Plantes</button>
          <button className="cart-icon-btn" onClick={handleCartClick}>
            🛒
            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
          </button>
        </div>
      </nav>

      {/* Affichage conditionnel Catalogue / Panier */}
      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((categorySection, catIdx) => (
            <div key={catIdx} className="category-section">
              <h2 className="category-title">{categorySection.category}</h2>
              <div className="plant-grid">
                {categorySection.plants.map((plant, pIdx) => {
                  const isItemInCart = addedToCart[plant.name] || cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={pIdx} className="plant-card">
                      <img src={plant.image} alt={plant.name} className="plant-image" />
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-desc">{plant.description}</p>
                      <p className="plant-cost">{plant.cost}</p>
                      <button
                        className={`add-to-cart-btn ${isItemInCart ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isItemInCart}
                      >
                        {isItemInCart ? '✓ Ajouté au panier' : 'Ajouter au panier'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
