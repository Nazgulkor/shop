import React from "react";
import { setPopupItem } from "../redux/actions/setInfoPopupItem";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setItemToBasket } from "../redux/actions/setToBasket";

function Item({ clothes, currentMinValue, currentMaxValue, infoPopup }) {
  let dispatch = useDispatch();
  const  {basketItems}  = useSelector(state => {
    return {
      basketItems : state.basket.basketItems
    }
  })

  let setDisabled = (id) => {
    for(let i of basketItems){
      if(i.id === id){
        return 'disabled'
      } 
    }
  }


  if (!clothes.length) {
    return (
      <div className="nothing-text">
        There is nothing. Please change settings.
      </div>
    );
  }
  return (
    <div className="items_block">
      {clothes &&
        clothes.map((item, index) => {
          if (item.price >= currentMinValue && item.price <= currentMaxValue) {
            let newItem = item;
            return (
              <div key={index} className="item">
                <div className="item_title">{newItem.title}</div>
                <img className="item_img" src={newItem.image} alt="" />
                <div className="item_price">price : {newItem.price}$</div>
                <div className="item-btns">
                  <button
                    onClick={() => {
                      dispatch(setPopupItem(item));
                      infoPopup.current.classList.add("active");
                      document.body.style.overflow = "hidden";
                    }}
                    className="show-info"
                  >
                    More info
                  </button>
                  <button
                    className={`add-to-basket ${setDisabled(item.id)}`}
                    onClick={() => {
                      item.count = 1
                      dispatch(setItemToBasket(item))
                    }}
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Item;
