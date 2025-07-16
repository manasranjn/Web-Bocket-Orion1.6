import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ClassBase from "./Components/ClassBase";
import FunctionBase from "./Components/FunctionBase";
import StudentDetails from "./Components/StudentDetails";
import AllStudents from "./Components/AllStudents";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <h1>App Component</h1>
      <ClassBase />
      <ClassBase />
      <ClassBase />
      <FunctionBase />
      <FunctionBase />
      <FunctionBase />
      <FunctionBase />
      <Footer></Footer> */}

      <StudentDetails name="Rahul" age="20" course="MERN" address="Pune" />
      <StudentDetails
        name="Priyansu"
        age="22"
        course="MERN"
        address="Bhubaneswar"
      />

      {/* <h1>App Component</h1>
      <AllStudents
        name="Priyansu"
        age="22"
        course="MERN"
        address="Bhubaneswar"
      /> */}
    </div>
  );
};

export default App;
