import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state={
    persons:[
      {id:'asd1',name:'A',age:21},
      {id:'dsd1',name:'B',age:22},
      {id:'dewd1',name:'C',age:23},

    ]
  }
  // switchNameHandler=(newName)=>{
  //   //console.log('Was clicked')
  //   //this.state.persons[0].name='AAAAA'
  //   this.setState({
  //     persons:[
  //     {name:newName,age:21},
  //     {name:'B',age:22},
  //     {name:'C',age:26},
  //     ]
  //   })
  // }
  nameChangedHandler=(event,id)=>{

    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    //console.log(personIndex)

    const person={
      ...this.state.persons[personIndex]
    };
    //console.log(person)
    person.name=event.target.value;
    const persons=[...this.state.persons]
    
    persons[personIndex]=person;
    this.setState({ persons:persons })
    console.log(persons)


}
deletePersonHandler=(personIndex)=>{
  //const persons=this.state.persons.slice();
  const persons=[...this.state.persons]
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}
  
  togglePersonsHandler=()=>{
    this.setState({showPersons:!this.state.showPersons})
  }
  render() {
    const style={
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons=null;
    if(this.state.showPersons){

      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
       
   
    </div>
      );
    }

    return ( 
    <div className = "App" >
    <h1 > Hi, I 'm a react app</h1> 
    <button 
    style={style}
    onClick={this.togglePersonsHandler}>Switch Names</button>
    {persons}
    </div >
    // <h1> Another Heading</h1>
    
    
    );
  }
}

export default App;