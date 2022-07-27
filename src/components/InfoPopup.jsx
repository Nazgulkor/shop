import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector,useDispatch } from "react-redux";
import { setPopupItem } from "../redux/actions/setInfoPopupItem";

let InfoPopup = React.forwardRef((props, ref) => {
  let dispatch = useDispatch()

  let closePopupHandle = (popup) => {
    popup.classList.remove("active");
    document.body.style.overflow = "";
  };

  let { items, popupItem } = useSelector(state=> {
    return {
      items : state.clothes.items,
      popupItem : state.clothes.infoPopupItem
    }
  })
  let goLeftOrRigth = (vector) => {
    if(vector === 'left'){
      for(let i = 0; i <= items.length; i++){
        if(popupItem.id === items[i].id){
          if(items.indexOf(items[i]) == 0){
            dispatch(setPopupItem(items[items.length - 1]))
          }else {
            dispatch(setPopupItem(items[i - 1]))
          }
        }
      }
    }else if(vector === 'rigth'){
      for(let i = 0; i <= items.length; i++){
        if(popupItem.id === items[i].id){
          if(items.indexOf(items[i]) == items.length - 1){
            dispatch(setPopupItem(items[0]))
          }else {
            dispatch(setPopupItem(items[i + 1]))
          }
        }
      }
    }

  }
  return (
    <div ref={ref} className="info-popup">
      <div className="flex-container">
      <div className="arrow-popup left" onClick={(e)=>{goLeftOrRigth('left')}}>{'<'}</div>
      <div className="info-popup__content">
        <button
          className="info-popup__close"
          onClick={(e) => {
            closePopupHandle(e.target.parentNode.parentNode.parentNode);
          }}
        >
          +
        </button>
        <div className="info-popup__item">
          <div className="info-popup__img-block">
            <img className="info-popup__img" src={popupItem.image} alt="" />
            <div className="info-popup__rate">
              <CircularProgressbar 
              
              value={popupItem?.rating?.rate} 
              maxValue={5} 
              text={`${popupItem?.rating?.rate}/5.0`}
              styles={{
                path :{
                  stroke: `rgba(20, 193, 0, ${popupItem?.rating?.rate / 5.0})`
                },
                text : {
                  fill : '#14c100'
                }
              }}
              />
            </div>
          </div>

          <div className="info-popup__title">{popupItem.title}</div>
          <div className="info-popup__description">{popupItem.description}</div>
        </div>
      </div>
      <div className="arrow-popup rigth" onClick={(e)=>{goLeftOrRigth('rigth')}}>{'>'}</div>
      </div>
    </div>
  );
});

export default InfoPopup;
