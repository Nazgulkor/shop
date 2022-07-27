import axios from "axios";
import React, { createRef, useEffect, useState } from "react";

import Item from "../components/Items";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setItems } from "../redux/actions/setItems";
import {
  setCurrentMinValue,
  setCurrentMaxValue,
} from "../redux/actions/setCurrentValues";
import Slider from "rc-slider";
import Pagination from "../components/Pagination";
import { setPaginateNumber } from "../redux/actions/setPaginateNumber";
import FilterSystem from "../components/FilterSystem";
import SortDropdown from "../components/SortDropdown";
import InfoPopup from "../components/InfoPopup";


function Shop() {
  let dispatch = useDispatch();

  let { clothes, currentMinValue, currentMaxValue, currentPage } =
    useSelector((state) => {
      return {
        clothes: state.clothes.items,
        currentMinValue: state.ranger.currentMinValue,
        currentMaxValue: state.ranger.currentMaxValue,
        currentPage: state.paginate.pageNumber,
      };
    });

  const [clothesPerPage] = useState(6);
  let lastClotheIndex = currentPage * clothesPerPage;
  let firstClotheIndex = lastClotheIndex - clothesPerPage;
  let currentClothes = clothes?.slice(firstClotheIndex, lastClotheIndex);

  let clothesRequest = () => {
    axios("https://fakestoreapi.com/products").then(({ data }) => {
      window.gettedData = data;
      dispatch(setItems(window.gettedData));
    });
  };

  useEffect(() => {
    clothesRequest();
  }, []);

  let setMinMaxValues = (minn, maxx) => {
    dispatch(setCurrentMinValue(minn));
    dispatch(setCurrentMaxValue(maxx));
    let newData = window.gettedData.filter(
      (item) => item.price >= currentMinValue && item.price <= currentMaxValue
    );
    dispatch(setItems(newData));
  };

  let paginateHandle = (pageNumber) => dispatch(setPaginateNumber(pageNumber));

  let infoPopup = createRef();

  return (
    <div>
      <InfoPopup ref={infoPopup} />

      <FilterSystem />
      <SortDropdown />
      <div className="price_system">
        <div className="price_system_show">
          <div className="price_min">From {currentMinValue}$</div>
          <div className="price_max">To {currentMaxValue}$</div>
        </div>
        <Slider
          range
          min={1}
          max={1100}
          value={[currentMinValue, currentMaxValue]}
          onChange={(e) => {
            setMinMaxValues(e[0], e[1]);
          }}
        />
      </div>

      {clothes.length > clothesPerPage ? (
        <Pagination
          clothesPerPage={clothesPerPage}
          totalCount={clothes.length}
          paginateHandle={paginateHandle}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}

      <Item
        clothes={
          clothes.length >
          clothesPerPage
            ? currentClothes
            : clothes
        }
        currentMinValue={currentMinValue}
        currentMaxValue={currentMaxValue}
        infoPopup={infoPopup}
      />
      {clothes.length > clothesPerPage ? (
        <Pagination
          clothesPerPage={clothesPerPage}
          totalCount={clothes.length}
          paginateHandle={paginateHandle}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Shop;
