import { addDoc, collection } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfigur/Firebase';
import React, { useState } from 'react';

const AddProduct = () => {
  const [category,setCategory] =useState("");
  const [subCategory,setSubCategory] =useState("");
  const [gender,setGender] =useState("");
  const [productname,setProductName] =useState("");
  const [price,setPrice] =useState("");
  const [discount,setDiscount] =useState("");
  const [image,setImage] =useState("");
  const [detail,setDetail]=useState("");
  const [stock,setStock]=useState("");
  const [kids,setKids] =useState(false);
  const [brand, setBrand] = useState("");
  const [batterySize, setBatterySize] = useState("");
  const [type,setType] =useState("");
 

  const handelChange =(e)=>{
     
    setCategory(e.target.value);
    // Reset dependent fields on category change
    setSubCategory("");
    setGender("");
    setKids(false);
    setBrand("");
    setBatterySize("");
  }
  const handelKids =(e)=>{
      setKids(e.target.value)

  }
  const handelSubcategory =(e)=>{
      setSubCategory(e.target.value)
  }
  const handelgender =(e)=>{
      setGender(e.target.value)
  }
  const handelType =(e)=>{
    setType(e.target.value);
}
  const productSubmit =async(e)=>{
      e.preventDefault();
      const productInfo = {
          category,
          subCategory,
          ...(category === 'fasion' && { gender, kids,type }),
          ...(category === 'electronic' && { batterySize }),
          brand,
          productname,
          price,
          discount,
          image,
          detail,
          stock,
      };
     
      try {
        const productsCollection = collection(fireDb, "products");
        await addDoc(productsCollection, productInfo);
        alert("Product added successfully!");
      } catch (err) {
        console.error("Error adding product:", err.message);
      }
  }
  
 
return (
  <div>
      <form action="" onSubmit={productSubmit}>
      <div>
          <label htmlFor="category">category</label>
          <select name='category' id='category' onChange={handelChange}>
              <option value="">select category</option>
              <option value="fasion">fasion</option>
              <option value="beauty">beauty</option>
              <option value="electronic">electronic</option>
              <option value="furniture">furniture</option>
              <option value="toy">toy</option>
              <option value="grocery">grocery</option>
          </select>
          {category === "fasion"&& (
              <>
              <div>
                  <span>gender:</span>
                  <input type="radio" value="male" checked ={gender ==="male"} onChange={handelgender} />
                  <label htmlFor="">male</label>
                  <input type="radio"  value="female" checked={gender ==="female"} onChange={handelgender}/>
                  <label> female</label>
                  <input type='checkbox' checked ={kids} onChange={handelKids} />
                  <label htmlFor="">kid</label>
                  
              </div>
              <div>
                  <select name="subcategory" id="subcategory" onChange={handelSubcategory}>
                      <option value="">select subcategory</option>
                      <option value="topware">topware</option>
                      <option value="bottomware">bottomware</option>
                      <option value="innerware">innerware</option>
                      <option value="footware">footware</option>
                  </select>

                  { subCategory ==="topware"&& (
                      <div>
                      <select name="subcategory" id="subcategory"  onChange={ handelType} >
                      <option value="">select type</option>
                      <option value="t-shirt">t-shirt</option>
                      <option value="tops">tops</option>
                      <option value="causal">causal-shirt</option>
                      <option value="full t-shirt">full t-shirt</option>
                      <option value="jacket">jacket</option>
                      <option value="formal shirt">formal shirt</option>
                  </select>
                      </div>
                  )}
                   { subCategory ==="bottomware"&& (
                      <div>
                      <select name="subcategory" id="subcategory"  onChange={ handelType} >
                      <option value="">select type</option>
                      <option value="pants">pants</option>
                      <option value="jeans">jeans</option>
                      <option value="skirt">skirt</option>
                      <option value="casual trouser">Casual Trousers</option>
                      <option value="Formal Trouser">Formal Trousers</option>
                      <option value="Shorts">Shorts</option>
                      <option value="Track Pants & Jogger">Track Pants & Jogger</option>

                  </select>
                      </div>
                  )}
                  { subCategory ==="innerware"&& (
                  <div>
                      <select name="type" id="type"  onChange={ handelType} >
                      <option value="">select type</option>
                      <option value="trunks">Briefs & Trunks</option>
                      <option value="boxers"> Boxers</option>
                      <option value="vests">Vests</option>
                      <option value="spleepware"> Sleepwear & Loungewear</option>
                      <option value="thermals">Thermals </option>
                  </select>
                      </div>
                  )}
                  { subCategory ==="footware"&& (
                  <div>
                      <select name="type" id="type"  onChange={ handelType} >
                      Casual Shoes
                      <option value="">select type</option>
                      <option value="shoes"> Shoes</option>
                      <option value="heels">heels</option>
                      <option value="sandel">sandel</option>
                      <option value="boots">boots</option>
                      <option value="socks">socks </option>
                  </select>
                      </div>
                  )}
                 <input type="text" placeholder='brand' onChange={(e)=>setBrand(e.target.value)} />
              </div>
              </>
          )}
          {category ==="electronic"&& (
              <>
              <div>
              <select name="subcategory" id="subcategory" onChange={handelSubcategory}>
                      <option value="">select subcategory</option>
                      <option value="laptop">laptop</option>
                      <option value="mobile">mobile</option>
                      <option value="earphone">earphone</option>
                      <option value="speaker">speaker</option>
                  </select>
                  <input type="text" placeholder='battery size'  onChange={(e)=>setBatterySize(e.target.value)} />
                  <input type="text" placeholder='brand'  onChange={(e)=>setBrand(e.target.value)} />
              </div>
              </>
          )}
      </div>
     
      <input type="text" placeholder='productname' value={productname} onChange={(e)=>setProductName(e.target.value)}/>
      <input type="number" placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <input type="number" placeholder='discout price' value={discount} onChange={(e)=>setDiscount(e.target.value)} />
      <input type="url" placeholder='image url' value={image} onChange={(e)=>setImage(e.target.value)} />
      <input type="text" placeholder='detail' value={detail} onChange={(e)=>setDetail(e.target.value)} />
      <input type="number" placeholder='stocks' value={stock} onChange={(e)=>setStock(e.target.value)} />

      <button>submit</button>
      </form>
  </div>
);
};
export default AddProduct;

