import React from 'react'
import Product from './Product'

function Products() {
  
  const getProducts = () => {
    return [
      {
        imageUrl: 'http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg',
        productName: 'Product 1',
        releasedDate: '2023-10-01',
        rating: 4,
        numOfReviews: 10,
        description: 'Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It',
      },
      {
        imageUrl: 'http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg',
        productName: 'Product 2',
        releasedDate: '2023-10-02',
        rating: 2,
        numOfReviews: 50,
        description: 'Clara Callan',
      },
      {
        imageUrl: 'http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg',
        productName: 'Product 3',
        releasedDate: '2023-10-03',
        rating: 5,
        numOfReviews: 100,
        description: 'Classical Mythology',
      },
    ]
  }

  const products = getProducts()
  const listProducts = products.map((product) =>
      <Product
        key={product.productName}
        data={product}/>
  )

  return (
    // Conditionally render the list of products
    // If there are products, display them in a list
    // If there are no products, display a message
    // No products to display
    <div>
        {listProducts.length > 0 ?(
        <ul>{listProducts}</ul>
        ):(
        <ul>No products to display</ul>
        )}
    </div>
  )
}

export default Products