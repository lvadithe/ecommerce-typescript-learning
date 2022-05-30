import { type } from "os";
import { ProductItem } from "../../../../types/typeApp/typeApp";
import './styles.css';

type Props = {
  product: ProductItem;
  handleAddToCarr: (product: ProductItem) => void;
}

export const Product = ({ product, handleAddToCarr }: Props) => {
  return (
    <div className="card card_container" >
      <img src={product.image} className="card-img-top card_img" alt="..."/>
        <div className="card-body">
          <h5 className="card_title">{product.title}</h5>
          <p className="card_description">
            {product.description}
          </p>
          precio: ${product.price}
          <a href="#" className="btn btn-primary" onClick={() => handleAddToCarr(product)} >Agregar al carrito</a>
        </div>
    </div>
  )
}
