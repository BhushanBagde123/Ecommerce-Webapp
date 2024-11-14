import React, { useState } from 'react';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');
  const [isForKids, setIsForKids] = useState(false);
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [subcategoryType, setSubcategoryType] = useState('');
  const [sizes, setSizes] = useState([]);
  const [ramOptions, setRamOptions] = useState([]);
  const [rating, setRating] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setGender('');
    setIsForKids(false);
    setSizes([]);
    setRamOptions([]);
  };

  const handleGenderChange = (e) => setGender(e.target.value);
  const handleKidsCheckboxChange = (e) => setIsForKids(e.target.checked);
  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };
  const handleRamChange = (e) => {
    const ram = parseInt(e.target.value);
    setRamOptions(prev => prev.includes(ram) ? prev.filter(r => r !== ram) : [...prev, ram]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      category,
      productName,
      productImage,
      price,
      discountPrice,
      brand,
      rating,
      subcategory,
      ...(category === 'fashion' && {
        gender,
        kid: isForKids ? 'yes' : 'no',
        subcategoryType,
        size: sizes,
      }),
      ...(category === 'electronics' && {
        ram: ramOptions,
      }),
    };
    console.log("Form data submitted:", formData);
    // Add your form submission logic (e.g., API call) here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleCategoryChange} required>
            <option value="">Select category</option>
            <option value="fashion">Fashion</option>
            <option value="beauty">Beauty</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="toys">Toys</option>
            <option value="grocery">Grocery</option>
          </select>
        </div>

        {category === 'fashion' && (
          <>
            <div>
              <label>Gender:</label>
              <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
              <label htmlFor="female">Female</label>
              <input type="radio" id="unisex" name="gender" value="unisex" checked={gender === 'unisex'} onChange={handleGenderChange} />
              <label htmlFor="unisex">Unisex</label>
              <input type="checkbox" id="kid" checked={isForKids} onChange={handleKidsCheckboxChange} />
              <label htmlFor="kid">For Kids</label>
            </div>
            <div>
              <label htmlFor="subcategoryType">Subcategory Type:</label>
              <input type="text" id="subcategoryType" value={subcategoryType} onChange={(e) => setSubcategoryType(e.target.value)} placeholder="e.g., T-shirt" />
            </div>
            <div>
              <label>Size:</label>
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <div key={size}>
                  <input type="checkbox" value={size} checked={sizes.includes(size)} onChange={handleSizeChange} />
                  <label>{size}</label>
                </div>
              ))}
            </div>
          </>
        )}

        {category === 'electronics' && (
          <div>
            <label>RAM Options:</label>
            {[8, 16, 32].map(ram => (
              <div key={ram}>
                <input type="checkbox" value={ram} checked={ramOptions.includes(ram)} onChange={handleRamChange} />
                <label>{ram} GB</label>
              </div>
            ))}
          </div>
        )}

        <input type="text" placeholder="Product name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        <input type="url" placeholder="Product image URL" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="number" placeholder="Discount price" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} />
        <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
        <input type="text" placeholder="Subcategory" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

