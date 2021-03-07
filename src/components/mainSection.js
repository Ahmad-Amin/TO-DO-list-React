
import React,{Component, Fragment} from 'react'
import AddItem from '../components/AddItem'
import PrevItemGenerator from './prevItem/prevItemGenerator';
import {getCurrentDate} from '../components/utils';

class mainSection extends Component{

    state = {
        listitemsData:[
            {date:'12/01/2010', text: 'kjsdhflkjsdhfkldjshfal skjhdfkjhalskj'},
            {date:'11/05/2021', text: 'sdhf gakjsegfg fqwiufgiwufidgaoig feiuw '},
            {date:'02/03/2020', text: 'shdjafg jhgfueygafuiwegfdsn vx aweigfwe'},
            {date:'28/06/2013', text: 'kasjdhflksdjhflalj asddhaskjhfkasljdhf'},
        ],
        newInput: "",
        count : 4
    }

    addNewItem = () => {

        if(this.state.newInput.length === 0){
            alert('Cannot Add Empty List!!');
            return;
        }
        const date = getCurrentDate();
        let prevState = [
            ...this.state.listitemsData
        ];
        prevState.unshift({date:date, text: this.state.newInput});
        let count = prevState.length;
        this.setState({
            listitemsData:prevState,
            count:count,
            newInput:""
        });
    }

    removeAnItem = (keyValue) =>{

        const val = [
            ...this.state.listitemsData
        ];

        // console.log(val[keyValue]);
        val.splice(keyValue,1);
        // console.log(val[keyValue]);

        this.setState({
            listitemsData:val,
            count:this.state.count-1
        });
        
    }

    handleChange = e =>{
        this.setState({
            newInput: e.target.value
        });
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

                        <AddItem
                            input = {this.handleChange}
                            clicked = {this.addNewItem}
                            newInput = {this.state.newInput}
                        >
                        </AddItem>

                        <p className="totalnotes"> Total Notes: <strong>{this.state.count}</strong></p>

                        <div className="previousList">
                            <h3 className="listHeading">Previous Items: </h3>
                            <hr className="listHr" align="left"/>
                            <div className="listItems">
                                
                                <PrevItemGenerator 
                                    list = {this.state.listitemsData}
                                    rem = {this.removeAnItem}
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