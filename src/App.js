import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state={
    persons:[
      {name:'A',age:21},
      {name:'B',age:22},
      {name:'C',age:23},

    ]
  }
  switchNameHandler=(newName)=>{
    //console.log('Was clicked')
    //this.state.persons[0].name='AAAAA'
    this.setState({
      persons:[
      {name:newName,age:21},
      {name:'B',age:22},
      {name:'C',age:26},
      ]
    })
  }
  nameChangedHandler=(event)=>{
    this.setState({
      persons:[
      {name:'A',age:21},
      {name:event.target.value,age:22},
      {name:'C',age:26},
      ]
    })

  }
  render() {
    const style={
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    return ( 
    <div className = "App" >
    <h1 > Hi, I 'm a react app</h1> 
    <button 
    style={style}
    onClick={() =>this.switchNameHandler('AAA!!!')}>Switch Names</button> 
    <Person name={this.state.persons[0].name} 
    age={this.state.persons[0].age} />
    <Person name={this.state.persons[1].name} 
    age={this.state.persons[1].age}
     click={this.switchNameHandler.bind(this,'A!')}
     changed={this.nameChangedHandler}>My Hobbies:Racing</Person>
    <Person name={this.state.persons[2].name} 
   age={this.state.persons[2].age}/>
    </div >
    // <h1> Another Heading</h1>
    
    
    );
  }
}

export default App;