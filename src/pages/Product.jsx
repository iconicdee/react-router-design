import { useOutletContext,Link } from "react-router-dom";



const Products = () => {
  const { products } = useOutletContext();
  return (
      <section className='section'>
        <h2>products</h2>
        <ul className="products">
        {products.map((item) => (
          <li key={item.id}>
            <figure>
              <img className="product-image" src={item.image} alt={item.title} />
              <figcaption className="product-title">{item.title}</figcaption>
              <p className="product-price">${item.price}</p>
              <p className="product-category">{item.category}</p>
            </figure>
            <Link to={`/products/${item.id}`}>More info</Link>
          </li>
        ))}
      </ul>
      </section>
  );
};

export default Products;
