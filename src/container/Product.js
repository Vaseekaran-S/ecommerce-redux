import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer/cart";


export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );
  const addTocart = ()=>{
     dispatch(addItem(props))
    //  console.log("clicked");
  }
  return (
    <div className="card mt-2 ">
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={350}
          width={400}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="card-body mt-3">
        <div className="card-title">{props.title}</div>
        <h6 className="mt-2">Price: {`$${props.price}`}</h6>
        <h6 className="mt-2">Discount: {`$${props.discountPercentage}`}%</h6>
        <h6 className="mt-2">Rating: {`$${props.rating}`}/5</h6>
        <div className="mt-3">
          {props.stock > 0 ? (
            <>
                <button className="btn btn-success">Buy Now</button>
                <button className="ms-3 btn btn-success" onClick={addTocart}>Add to cart</button>
            </>
            
          ) : (
            <button className="btn btn-outline-danger">Out Of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
