import react, { useState } from 'react';
import Todo from "./Todo";
const App=()=>{
    const[inputlist,setinputlist] = useState("  ");
    const[items,setitems] = useState([]);
    const item =(event) =>{
        setinputlist(event.target.value);
    };
    const neecheayega =() =>{
        setitems((olditems)=>{
            return[...olditems,inputlist]
            
        });
        setinputlist(" ");
    };
    const deleteitems =(id)=>{
        console.log("deleted");
        setitems((olditems)=>{
            return olditems.filter((arrElem,index) => {
            return index!== id;
            });
        });
           };

    return(
<>
<div className="main_div">
    <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" value ={inputlist} placeholder="Add items" onChange={item}/>
      <button onClick={neecheayega}> + </button>
      <ol>
            {items.map((itemval,index)=>{
            return  <Todo 
              text = {itemval}
              id ={index}
              key ={index}
              onselect={deleteitems}/>;
             })
         }
      </ol>

    </div>

</div>
</>
    );
}
export default App;