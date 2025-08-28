import React from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom'

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId)

  const { products } = useOutletContext();
  const product = products.find((product) => product.id == productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const { image, title ,price,category} = product;

  return (
    <section>
      <figure>
              <img  src={image} alt={title} />
              <figcaption className="product-title">{title}</figcaption>
              <p className="product-price">${price}</p>
              <p className="product-category">{category}</p>
            </figure>
      <Link to="/products">Back to Products</Link>
    </section>
  );
}

export default SingleProduct
