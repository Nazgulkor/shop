import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearBasket, deleteFromBasket, setDecrAndIncr } from '../redux/actions/setToBasket'
function Basket() {
  let dispatch = useDispatch()

  let { basketItems } = useSelector(state => {
    return {
      basketItems : state.basket.basketItems,
    }
  })
  return (
    <div className='basket'>
      <div className="basket-descr">
        <div className="desc-title">Name</div>
        <div className="desc-price">Price</div>
        <div className="desc-count">Count</div>
        <div className="desc-full-price">Full price</div>
      </div>
      <div className="basket-block">
        {basketItems.length ? basketItems.map((item,index) => {
          return <div className='basket-item' key={index}>
            <div className="name-and-img">
            <img src={item.image} alt="" className='basket-img'/>
              <div className="title">{item.title}</div>
            </div>
            <div className="price">{item.price}$</div>
            <div className="count-system">
              <div className="decrement"
              onClick={() => {
                dispatch(setDecrAndIncr('SET_DECREMENT', item))
              }}>-</div>
            <div className="count">{item.count}</div>
            <div 
            className="increment"
            onClick={() => {
              dispatch(setDecrAndIncr('SET_INCREMENT', item))
            }}>+</div>
            </div>
            
            <div className="total-price">{(item.price * item.count).toFixed(2)}$</div>
            <div 
            className="delete-basket-item"
            onClick={()=>{
              dispatch(deleteFromBasket(item))
            }}
            >+</div>
          </div>
        }) : <div className='empty' >The basket is empty{':('}</div> }
      </div>
      <div className="basket-footer">
        <button 
        className="clear-basket"
        onClick={() => {
          dispatch(clearBasket())
        }}
        >Clear basket</button>
        <div className="footer-total-price">{(basketItems.reduce((prev, current) => {
          return prev = prev + current.price * current.count
        }, 0)).toFixed(2)}$</div>
        <button className="checkout">checkout</button>
      </div>
    </div>
  )
}

export default Basket