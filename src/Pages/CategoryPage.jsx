import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContexPrv } from '../Context/Context';
import { FaHeart } from 'react-icons/fa6';

const CategoryPage = () => {
  const [productCategory, setProductCategory] = useState([]);
  const { categoryName } = useParams();
  const { productData, addToLike, isWishlisted, removeFromWishlist } = useContext(ContexPrv);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [gender, setGender] = useState(''); // To track selected gender filter
  const [selectedBrand, setSelectedBrand] = useState(''); // To track selected brand filter

  useEffect(() => {
    let categoryData = [];
    if (categoryName === 'fasion') {
      categoryData = productData.filter((item) => item.category === 'fasion');
    } else if (categoryName === 'electronic') {
      categoryData = productData.filter((item) => item.category === 'electronic');
    } else if (categoryName === 'toys') {
      categoryData = productData.filter((item) => item.category === 'toy');
    }

    setProductCategory(categoryData);
    setFilteredProducts(categoryData);

    // Extract unique brands for the filter
    const uniqueBrands = [...new Set(categoryData.map((item) => item.brand).filter((brand) => brand))];
    setBrands(uniqueBrands);
  }, [categoryName, productData]);

  const toggleWishlist = (id) => {
    if (isWishlisted(id)) {
      removeFromWishlist(id);
    } else {
      const item = productCategory.find((product) => product.id === id);
      if (item) {
        addToLike(item);
      }
    }
  };

  const handleBrandFilter = (e) => {
    const selected = e.target.value;
    setSelectedBrand(selected);
    applyFilters(selected, gender);
  };

  const handleGenderFilter = (e) => {
    const selected = e.target.value;
    setGender(selected);
    applyFilters(selectedBrand, selected);
  };

  const applyFilters = (brandFilter, genderFilter) => {
    let filtered = productCategory;

    if (brandFilter) {
      filtered = filtered.filter((item) => item.brand === brandFilter);
    }

    if (genderFilter) {
      filtered = filtered.filter((item) => item.gender === genderFilter);
    }

    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setSelectedBrand('');
    setGender('');
    setFilteredProducts(productCategory);
  };

  return (
    <div>
      <div className='w-full h-24 capitalize mt-4 p-3'>
        <span className='font-bold'>{categoryName}</span> - {filteredProducts.length} items
      </div>
      <div className='w-full min-h-screen flex'>
        {/* Filter Section */}
        <div className='w-[30%] min-h-screen p-3 border'>
          <h2 className='font-bold uppercase'>Filters</h2>
          {categoryName !== 'grocery' && (
            <div>
              <div className='filter-section'>
                <span className='capitalize'>Brand</span>
                {brands.slice(0, 6).map((brand, index) => (
                  <div key={index} className='flex flex-col'>
                    <input
                      type='radio'
                      name='brand'
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={handleBrandFilter}
                    />
                    {brand}
                  </div>
                ))}
              </div>

              <div className='filter-section'>
                <span className='capitalize'>Gender</span>
                <div>
                  <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={gender === 'male'}
                    onChange={handleGenderFilter}
                  />
                  Male
                </div>
                <div>
                  <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={gender === 'female'}
                    onChange={handleGenderFilter}
                  />
                  Female
                </div>
              </div>

              <button
                className='mt-4 px-3 py-2 bg-gray-200 border rounded'
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Product Section */}
        <div className='w-[70%] min-h-screen border p-3'>
          <div className='w-full min-h-screen grid grid-cols-3 gap-4 p-2'>
            {filteredProducts.map((item) => (
              <div key={item.id} className='w-52 h-72 border flex flex-col gap-3 p-3'>
                <div className='cursor-pointer'>
                  <FaHeart
                    onClick={() => toggleWishlist(item.id)}
                    color={isWishlisted(item.id) ? 'red' : 'grey'}
                  />
                </div>
                <Link to={`/detail/${item.id}`}>
                  <img className='w-48 h-48' src={item.image} alt={item.productname} />
                </Link>
                <h2>{item.productname.substring(0, 20)}...</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
