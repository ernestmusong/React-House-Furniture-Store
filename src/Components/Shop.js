import React, {useEffect, useState} from 'react'
import { storeProducts } from '../data'
import Title from './Title';

function Shop() {
    const [searchQuerry, setSearchQuerry] = useState('')

      const handleChange = (e) => {
        e.preventDefault();
        setSearchQuerry(e.target.value);
        console.log(e.target.value)
      };
      // create an array of products titles to be used to check matching titles
      let filteredProducts=[]
       
            for(let i=0; i<storeProducts.length; i++) {
              if (searchQuerry.length > 0 ) {
                filteredProducts = storeProducts.filter(product => product.title == searchQuerry)
                }  else{filteredProducts = storeProducts}
        }
        console.log(filteredProducts)
  
    
    
     
// Check if the entered input matches any item's title in the productTitles array
      // const checkMatchingValues =  productTitlesArr.some(element => element.includes(searchQuerry));
      // console.log(checkMatchingValues)
      // let filtered;
      // if(checkMatchingValues) {
      //    let filteredProducts = productTitlesArr.filter(item => item == searchQuerry)
      //    filtered = filteredProducts
        
      // }
      // console.log(filtered)
      // Perform a case insensitive search
    
  return (
    <>
       <div className="py-5 mt-500">
       <div className="search-wrapper">
            <label id='search-form' className="search-label" htmlFor="search-form">
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search products"
                  value={searchQuerry}
                  onChange={handleChange}
                  />
                  <button id="search-button">
                    <i className="fa fa-search"></i>
                  </button>
            </label>
         </div>
          <div className="container">
            {filteredProducts.length === 0 ?<Title name="no" title="products found!" />:<Title name="our" title="products" />}
            
            <div className="row bg-danger h-500 w-500 mt-500">
               
                {filteredProducts.map(product => product.title)}
            
            </div>
          </div>
        </div>
    </>
  )
}

export default Shop