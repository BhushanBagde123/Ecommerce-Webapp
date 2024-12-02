import { addDoc, collection } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfigur/Firebase';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const AddProduct = () => {
  const [category,setCategory] =useState("");
  const [subCategory,setSubCategory] =useState("");
  const [gender,setGender] =useState("");
  const [productname,setProductName] =useState("");
  const [price,setPrice] =useState(0);
  const [discount,setDiscount] =useState(0);
  const [image,setImage] =useState("");
  const [detail,setDetail]=useState("");
  const [stock,setStock]=useState(0);
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
      setKids( Boolean(e.target.value))

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
          id:uuidv4(),
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
          rating:[{
            rate:2,
            comment:"good product",
          }]
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
          {category ==="beauty"&& (
            <>
            <div>
            <select name="subcategory" id="subcategory" onChange={handelSubcategory}>
                      <option value="">select subcategory</option>
                      <option value="makeup">makeup</option>
                      <option value="Skincare,Bath & Body">Skincare,Bath & Body</option>
                      <option value="Haircare">Haircare</option>
                      <option value="Fragrances">Fragrances</option>
            </select>
            { subCategory ==="makeup"&& (
                  <div>
                      <select name="type" id="type"  onChange={ handelType} >
                     
                      <option value="">select type</option>
                      <option value="Lipstick">Lipstick</option>
                      <option value="Lip Gloss">Lip Gloss</option>
                      <option value="Lip Liner">Lip Liner</option>
                      <option value="Mascara">Mascara</option>
                      <option value="Eyeliner">Eyeliner</option>
                  </select>
                      </div>
                  )}
            { subCategory === "Skincare,Bath & Body" &&(
                <div>
                    <select name="type" id="type">
                      <option value="">select type</option>
                      <option value="Face Moisturiser">Face Moisturiser</option>
                      <option value="Cleanser">Cleanser</option>
                      <option value="Masks & Peel">Masks & Peel</option>
                      <option value="Sunscreen">Sunscreen</option>
                      <option value="Face Wash">Face Wash</option>
                      <option value="Body Lotion">Body Lotion</option>
                    </select>
                </div>
            )

            }
             { subCategory === "Haircare" &&(
                <div>
                    <select name="type" id="type">
                      <option value="">select type</option>
                      <option value="Shampoo">Shampoo</option>
                      <option value="Conditioner">Conditioner</option>
                      <option value="Hair Cream">Hair Cream</option>
                      <option value="Hair Oil">Hair Oil</option>
                      <option value="Hair Gel">Hair Gel</option>
                      <option value="Hair Serum">Hair Serum</option>
                    </select>
                </div>
            )

            }
            { subCategory === "Fragrances" &&(
                <div>
                    <select name="type" id="type">
                      <option value="">select type</option>
                      <option value="Perfume">Perfume</option>
                      <option value="Deodorant">Deodorant</option>
                      <option value="Body Mist">Body Mist</option>
                      
                    </select>
                </div>
            )

            }
                  <input type="text" placeholder='brand'  onChange={(e)=>setBrand(e.target.value)} />

            </div>
            </>
          )

          }

      </div>
     
      <input type="text" placeholder='productname' value={productname} onChange={(e)=>setProductName(e.target.value)}/>
      <input type="number" placeholder='price' value={price} onChange={(e)=>setPrice(Number(e.target.value))}/>
      <input type="number" placeholder='discout price' value={discount} onChange={(e)=>setDiscount(Number(e.target.value))} />
      <input type="url" placeholder='image url' value={image} onChange={(e)=>setImage(e.target.value)} />
      <input type="text" placeholder='detail' value={detail} onChange={(e)=>setDetail(e.target.value)} />
      <input type="number" placeholder='stocks' value={stock} onChange={(e)=>setStock(Number(e.target.value))} />

      <button>submit</button>
      </form>
  </div>
);
};
export default AddProduct;

