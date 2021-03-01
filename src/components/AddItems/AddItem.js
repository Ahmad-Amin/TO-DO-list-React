import React, { Fragment } from 'react';

const AddItem = (props) => {

    return(
        <Fragment>
            <div className="AddNewItem">
                <h3 className="listHeading">Add New Item: </h3>
                <hr className="listHr" align="left"/>
                <input className="inputText" type="text" name="" id=""/>
                <button className="addButton">Add</button>
                <div className="clearFix"></div>
            </div>
        </Fragment>
    
    );
}

export default AddItem;