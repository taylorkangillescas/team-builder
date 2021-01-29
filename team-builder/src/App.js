import './App.css';
import React, {useState} from 'react';
import Members from "./components/Members.js"
import Form from "./components/Form.js"


function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Taylor Kang-Illescas",
      email:"TKI@me.com",
      role:"Full-Stack Engineer"
    },
    {
      id: 2,
      name: "Elon Musk",
      email:"elon@me.com",
      role:"Back-End Engineer"
    }
  ]);
  const addNewBox = box => {
  const newBox = {
    id: Date.now(),
    name: box.name,
    email: box.email,
    role: box.role
  };
  setMembers([...members, newBox]);
};
  return (
    <div className="App">
    <h1>Team List</h1>
    <Form addNewBox={addNewBox} />
    <Members members={members}/>

    </div>
  );
}

export default App;