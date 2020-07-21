import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Button} from './Button';
import Card  from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Task } from './task';

interface State{
  tasks:any[],
}
export function tick() {
  const element = (
    
      <span>{new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()}.</span>
    
  );
  ReactDOM.render(element, document.getElementById('route'));
}

interface Props {
  update: Number;
}
export class App extends React.Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.onDragOver=this.onDragOver.bind(this);
  this.onDragStart=this.onDragStart.bind(this);
  this.update=this.update.bind(this);
  this.onDrop=this.onDrop.bind(this);
    this.state={tasks:[{name:"toilette",category:"wip",startDate:new Date().toDateString() ,endDate:new Date().toDateString()},{name:"brout",category:"wip",startDate:new Date().toDateString() ,endDate:new Date().toDateString()}]};
    // Don't call this.setState() here!
   
  }
  onDrop = (ev:any, cat:string) => {     
        let id = ev.dataTransfer.getData("id");  
        let tasks = this.state.tasks.filter((task) => {      
          if (task.name == id) {               
            task.category = cat;                 
          }                     
          return task;          });           
          this.setState({                 
            ...this.state,                 tasks          });    
          }
          
          update(){
            if(this.props.update==1){
              let tasks = this.state.tasks
              this.setState({                 
              ...this.state,                 tasks          });    
            }
          }
          
          componentDidUpdate(prevState:any){

            
            
          }
  onDragOver(ev:any){
    ev.preventDefault();
  }
  onDragStart(ev:any,id:string){
    ev.dataTransfer.setData("id",id)
  }

  
 
 

  render(){
  
    
   // if(new Button(this.state.tasks).props.tasks!==this.state.tasks)
     // this.update()

    let tasks:any={
      wip:[],
      complete:[],
      done:[]
    }

    this.state.tasks.forEach((t)=>{
      console.log(this.state.tasks)
    
      tasks[t.category].push(<Task name={t.name} startDate={t.startDate} endDate={t.endDate}  key={t.name} />)
    })
   
  return (
    <div className="App">
      <h1>Dashbooard of tasks</h1>
    
      <div id="route"></div>
      {this.update()}
      <div className="todo" onDragOver={(event)=> this.onDragOver(event)} onDrop={(event)=>this.onDrop(event,"wip")}>
        <h2>To Do</h2>
        {tasks.wip}
        
        <Button tasks={this.state.tasks}  />
      </div>
      <div className="inProgress" onDragOver={(event)=> this.onDragOver(event)} onDrop={(event)=>this.onDrop(event,"complete")}>
      <h2>In Progress</h2>
        {tasks.complete}
      
      </div>

      <div className="Done" onDragOver={(event)=> this.onDragOver(event)} onDrop={(event)=>this.onDrop(event,"done")}>
      <h2>Done</h2>
        {tasks.done}
      </div>
       
   
    
    </div>
  );
}}

export default App;
