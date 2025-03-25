import React, { useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '', category: '' });
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Electronics', 'Books', 'Clothing', 'Toys'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.img && newProduct.category) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: '', price: '', img: '', category: '' });
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + parseFloat(product.price));
  };

  const removeOneFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
      setTotalPrice(totalPrice - parseFloat(product.price));
    } else {
      setCart(cart.filter(item => item.id !== product.id));
      setTotalPrice(totalPrice - parseFloat(product.price));
    }
  };

  const removeAllFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.filter(item => item.id !== product.id));
      setTotalPrice(totalPrice - parseFloat(product.price) * existingProduct.quantity);
    }
  };

  return (
    <div className="product-container">
      <h1>Product Page</h1>
      <div className="add-product">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={newProduct.img}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={addProduct}>Add Product</button>
      </div>

      <div className="filter-category">
        <label htmlFor="filter">Filter by Category: </label>
        <select id="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="products">
        {products
          .filter(product => selectedCategory === '' || product.category === selectedCategory)
          .map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              {product.img && <img src={product.img} alt={product.name} width="100" />}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.map((product) => (
          <div key={product.id} className="cart-item card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {product.img && <img src={product.img} alt={product.name} width="100" />}
            <div>
              <button onClick={() => removeOneFromCart(product)}>Remove One</button>
              <button onClick={() => removeAllFromCart(product)}>Remove All</button>
            </div>
          </div>
        ))}
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;