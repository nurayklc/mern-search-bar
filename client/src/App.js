import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [student, setStudents] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/student");
    setStudents(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="col"> 
      {student}
    </div>
  );
};

export default App;
