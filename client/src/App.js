import Search from "./components/search";
import React, { useState, useEffect } from 'react';
import axios from "axios"
import Api from "./api/index"

const App = () => {  
  const [input, setInput] = useState('');
  const [studentList, setstudentList] = useState();
  const [student, setStudents] = useState([]);

  const getData = async () => {
    const res = await axios.get("/api/student");
    console.log(res.data);
    setStudents(res.data);
    setstudentList(res.data)
  };

  const updateInput = async (input) => {
    const filtered = studentList.filter(country => {
     return student.firstname.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setStudents(filtered);
 }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Search  input={input} 
       onChange={updateInput}/>
       <Api studentList={student}/>
    </div>
  );
};

export default App;
