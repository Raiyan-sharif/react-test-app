import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
    <Form/>
    {/* <Inline/> */}
    {/* <Stylesheet primary={true}/> */}
    {/* <NameList/> */}
    {/* <UserGreet/> */}
    {/* <ParentComponent/> */}
    {/* <EventBind/> */}
    {/* <FunctionClick/>
    <ClassClick/> */}
    {/* <Counter/> */}
    {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman"> 
        <p>This is children props</p>
      </Greet>
      <Greet name="Sharif" heroName="Superman">
  <button>Action</button>
      </Greet>*/}
      {/* <Greet name="Diana" heroName="wonder woman">
        <button>Action</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman">
      </Welcome> 
      <Welcome name="Diana" heroName="wonder woman"/> */}
      {/*<Hello/> */}
    </div>
  );
}

export default App;
