import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setPaginateNumber } from "../redux/actions/setPaginateNumber";
function Pagination({ clothesPerPage, totalCount, paginateHandle }) {
  let { currentPage } = useSelector((state) => {
    return {
      currentPage: state.paginate.pageNumber,
    };
  });
  let dispatch = useDispatch();
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / clothesPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(()=>{
    if(currentPage > pageNumbers.length){
      dispatch(setPaginateNumber(pageNumbers[pageNumbers.length - 1]))
    }
  },[pageNumbers])


  return (
    <div>
      <ul className="pagination">
        <button
          className={`arrow ${currentPage == pageNumbers[0] ? "disabled" : ""}`}
          onClick={() => {
            if (currentPage - 1) {
              dispatch(setPaginateNumber(currentPage - 1));
            }
          }}
        >
          {"<"}
        </button>
        {pageNumbers.map((item, index) => {
          if(item){
            return (
              <li
                className={`page-item ${currentPage === item ? "active" : ""}`}
                key={index}
                onClick={() => {
                  paginateHandle(item);
                  dispatch(setPaginateNumber(item));
                }}
              >
                {item}
              </li>
            );
          }

        })}
        <button
          className={`arrow ${
            currentPage == pageNumbers[pageNumbers.length - 1] ? "disabled" : ""
          }`}
          onClick={(e) => {
            if (currentPage + 1 <= pageNumbers[pageNumbers.length - 1]) {
              dispatch(setPaginateNumber(currentPage + 1));
            }
          }}
        >
          {">"}
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
