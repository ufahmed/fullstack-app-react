import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [Title, setTitle] = useState('');
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/product", { Title, Price, Description })
    .then(res => {
        console.log("✅✅✅✅", res.data)
        
    })
    .catch(err => console.log("❌❌❌❌❌", err))

};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="number" value={Price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <textarea value={Description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;