import React from 'react';
import { Task } from './task';
import { App } from './App'
import ReactDOM from 'react-dom';

interface State{
    task: Number;
    name: string;
    save: any[];
    startDate:string;
    endDate:string;
    
  

}
export interface Click{
    tasks: any[];
    

}

export class Button extends React.Component<Click,State>{
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addTask=this.addTask.bind(this);
        this.update=this.update.bind(this);
        this.handleChangeEndDate=this.handleChangeEndDate.bind(this);
        this.handleChangeStartDate=this.handleChangeStartDate.bind(this);
        this.state={task:0,name:'',save:[],startDate:new Date().toDateString(),endDate:new Date().toDateString()};

        // Don't call this.setState() here!
       
      }
      update(){
         return ReactDOM.render(<App update={0} />, document.getElementById('root'));
      } 
    
      addTask(){
        this.state.save.push({name:this.state.name,category:"wip",startDate:this.state.startDate,endDate:this.state.endDate});
        let t=this.props.tasks.concat(this.state.save)
        this.props.tasks.splice(0,this.props.tasks.length);
        t.map((e)=>{return this.props.tasks.push(e)})
        this.setState({save:[]})
       this.update()
        console.log(this.props.tasks)
       
     }
     
      handleChange(e:any) {
        this.setState({name: e.target.value});
      }
      handleChangeStartDate(e:any) {
        this.setState({startDate: e.target.value});
      }
      handleChangeEndDate(e:any) {
        this.setState({endDate: e.target.value});
      }
      
      handleClick(){
        if(this.state.task==0){
            this.setState({task:1})

        }
        else if(this.state.task==1){
            this.setState({task:0})
        }
        
      }
    
     
    
    render(){
        const name=this.state.name;
        const endDate=this.state.endDate
        const startDate=this.state.startDate
    return   <div>
              {this.state.task == 0 &&
                 <div ><button onClick={this.handleClick}>+</button>  
               </div>|| this.state.task==1 && 
            <div>
            <div>
                <label>nom: </label><input  type='text' value={name} onChange={this.handleChange}/><br/>
                <label>starDate: </label><input  type='date' value={new Date(startDate).toDateString()} onChange={this.handleChangeStartDate}/><br/>
                <label>endDate: </label><input  type='date' value={new Date(endDate).toDateString()} onChange={this.handleChangeEndDate}/>
                <button onClick={this.addTask}>save</button>
            </div>
        <button onClick={this.handleClick}>-</button>
        <div>{name}</div>
        </div>}
         
       
         </div>
        
    }
}