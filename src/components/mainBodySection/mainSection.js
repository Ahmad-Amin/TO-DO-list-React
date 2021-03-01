
import React,{Component, Fragment} from 'react'
import AddItem from '../AddItems/AddItem'
import PrevItemGenerator from '../prevItem/prevItemGenerator';

class mainSection extends Component{

    state = {
        listitemsData:[
            {date:'12/01/2010', text: 'kjsdhflkjsdhfkldjshfal skjhdfkjhalskj'},
            {date:'11/05/2021', text: 'sdhf gakjsegfg fqwiufgiwufidgaoig feiuw '},
            {date:'02/03/2020', text: 'shdjafg jhgfueygafuiwegfdsn vx aweigfwe'},
            {date:'28/06/2013', text: 'sdfsdhkljfhas dkjfhawehfieu qieuiweuyo'},
        ]
    }


    render(){
        return(
            <Fragment>
                <section id="mainDiv">
                    <div className="toDoMainDiv">
                        <div className="HeadingDiv">
                            <h1>TO-DO LIST</h1>
                            <hr/>
                        </div>

                        <AddItem></AddItem>

                        <p className="totalnotes"> Total Notes: <strong>7</strong></p>

                        <div className="previousList">
                            <h3 className="listHeading">Previous Items: </h3>
                            <hr className="listHr" align="left"/>
                            <div className="listItems">
                                
                                <PrevItemGenerator 
                                    list = {this.state.listitemsData}
                                >

                                </PrevItemGenerator>
                                
                            </div>
                        </div>

                        <div className="designedDiv">
                            <p>Designed and Developed by <strong>Ahmad Amin</strong></p>
                        </div>
                        
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default mainSection;