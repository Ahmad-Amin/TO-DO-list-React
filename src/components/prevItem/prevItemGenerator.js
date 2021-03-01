import React,{Fragment} from 'react'
import PrevItem from './prevItem'

const prevItemGenerator = (props) => {

    var dataToMap = props.list.map((i,val)=>{
        return (
                <PrevItem 
                    date={i.date}
                    text={i.text}
                    key={val}>

                </PrevItem>
            );
    })

    return(
        <Fragment>
            {dataToMap}
        </Fragment>
        
    );
}

export default prevItemGenerator;