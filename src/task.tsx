import React from 'react';
import Card  from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

interface State{
   
    check: boolean;

}
export interface Props{
    name: string;
    startDate:string;
    endDate:string;

}


export class Task extends React.Component<Props,State>{

    constructor(props:any){
        super(props)
        this.state={check:false}
       this.handleChange= this.handleChange.bind(this)
       this.onDragStart=this.onDragStart.bind(this);
      
    }
  

    handleChange(){
        this.setState({check:!this.state.check})
    }
    onDragStart(ev:any,id:string){
        ev.dataTransfer.setData("id",id)
      }
    render(){
        {console.log("test ",this.props.startDate)}
        return <Card draggable={true} className="task" bg="primary" text="white" onDragStart={(event: any)=>this.onDragStart(event, this.props.name)}>
            <Card.Body>
            <label>name: </label> <span>{this.props.name}</span><br/>
            <label>startDate: </label><span>{this.props.startDate}</span><br/>
            <label>endDate: </label><span>{this.props.endDate}</span><br/>
            
            </Card.Body>
            {/*this.state.check && (<div><input type='checkbox' checked={this.state.check} onChange={this.handleChange}/><label>name: </label> <span>{this.props.name}</span></div>)*/}
        
      
        </Card>
    }

}
