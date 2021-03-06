import React, { Fragment } from 'react';

const AddItem = (props) => {

    // const [newInput, setInput] = useState('');
    return(
        <Fragment>
            
            <div className="AddNewItem">
                <h3 className="listHeading">Add New Item: </h3>
                <hr className="listHr" align="left"/>
                <input 
                    className="inputText" 
                    type="text"
                    value={props.newInput} 
                    onChange={props.input}/>

                <button className="addButton" onClick={props.clicked}>Add</button>
                <div className="clearFix"></div>
            </div>
        </Fragment>
    
    );
}

export default AddItem;