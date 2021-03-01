import React,{Fragment} from 'react'

const prevItem = (props) => {
    return(
        <Fragment>
            <div className="item">
                <div className="dateDiv">{props.date}</div>
                <p>{props.text}</p>
                <button className="removeButton">Remove</button>                        
                <div className="clearFix"></div>
                <hr/>
            </div>
        </Fragment>
    );
}

export default prevItem
