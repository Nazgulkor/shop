import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { filterItems, setItems } from "../redux/actions/setItems";
function FilterSystem() {
    const {clotheType} = useSelector(state => {
        return{
            clotheType : state.clothes.clotheType
        }
    })
  const attrs = [
    { text: "For Men", type: "FILTER_FOR_MEN" },
    { text: "For women", type: "FILTER_FOR_WOMEN" },
    { text: "jewelery", type: "FILTER_JEWELERY" },
  ];
  let dispatch = useDispatch();
  return (
    <div className="filter">
      <div
        className="filter_item"
        onClick={() => {
            if(!clotheType) return
          dispatch(setItems(window.gettedData));
        }}
      >
        all
      </div>
      {attrs.map((item, index) => (
        <div
          className={`filter_item ${clotheType === item.type? 'active': ''}`}
          onClick={() => {
            if(clotheType === item.type) return
            dispatch(filterItems(item.type, window.gettedData));
          }}
          key={index}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default FilterSystem;
