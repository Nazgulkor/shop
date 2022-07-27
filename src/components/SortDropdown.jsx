import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { setItems } from "../redux/actions/setItems";
import { sortBy, } from "../redux/actions/setSortValue";
function SortDropdown() {
    let {clothes} = useSelector(state => {
        return {
            clothes : state.clothes.items
        }
    })


    let [value, setValue] = useState('none')
    let options = [
        {label :'None', value : 'none'},
        {label :'Title', value : 'title'},
        {label : 'Price', value : 'price'}
    ]
    let dispatch = useDispatch();


    let onSelectValue = (e) => {
        setValue(e.target.value)
        if(e.target.value === 'title'){
            dispatch(sortBy(clothes.sort((a,b) => {
                let nameA = a['title'].toLowerCase(), nameB = b['title'].toLowerCase();
                if(nameA < nameB){
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
            })))
        }else if(e.target.value === 'price'){
            
            dispatch(sortBy(clothes.sort((a,b)=> parseFloat(a['price']) - parseFloat(b['price']) )))
        }else if(e.target.value === 'none'){
            dispatch(setItems(clothes.sort(() => Math.random() - 0.5)))
        }
        
    }



  return (
    <div className="select-block">
        <label className="select-label">Sort by: </label>
        <select className="select-css" value={value} onChange={onSelectValue}>
            {options.map((item, index) => <option value={item.value} key={index} >{item.label}</option>)}
        </select>
    </div>
  );
}

export default SortDropdown;
