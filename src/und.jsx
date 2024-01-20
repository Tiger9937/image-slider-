import {useState} from "react";
import Card from "./card";
import Json from './imges.json'
function Und() {
  const [count , setCount] = useState(0)
  const [prevCount , setprevCount] = useState(0)
  const JsoneFind_length = Json.items.length

  const add_value = () => {
    if(count < JsoneFind_length -1){
      setprevCount(count)
      setCount(count +1)
    }else{
      setCount("img is not available ")
    }if(count == "img is not available "){
      setCount(0)
    }
  };
  const remove_value = () => {
    if(count !== "img is not available " && count > 0){
      setCount(count - 1)
    }else{
      setCount(prevCount)
    }if(count == 0 || count == "img is not available "){
      setCount(JsoneFind_length -1)
    }
  };
  const currentItem = Json.items.find((item) => item.id === count);
    return (
    <>
    {currentItem && (<Card name={`${currentItem.name}`} imgNo={currentItem.directory} textcolor={currentItem.color}/>)}
    {!currentItem && (<Card imgNo={'./img/not.png'}/>)}
    <div className="d-flex justify-content-center">
    
    <div 
      onClick={remove_value} type="button"
    > <img src="./img/arrow_remove.png" alt=""/> </div>
    <h3 className="bg-red-400">Count value :{count}</h3>
    <div
      onClick={add_value}
    > <img src="./img/arrow_add.png" alt=""/></div>
    </div>


    </>
  );
}

export default Und;
