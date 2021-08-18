import "./styles.css";
import React from "react";

import StudentsList from "./StudentsList";
import StudentDetail from "./StudentDetail";
import { Box } from "@material-ui/core";

export default function App() {
  //studentDetails display
  const [student, setStudent] = React.useState({});

  //search studentList
  const [filterValue, setfilterValue] = React.useState("");

  const studentList = [
    {
      name: "Mukul",
      id: 1,
      hobbies: "Singing",
      aboutMyself: "I love to Code"
    },
    {
      name: "Janani",
      id: 2,
      hobbies: "Drawing",
      aboutMyself: "I love to Code"
    },
    {
      name: "Ambani",
      id: 3,
      hobbies: "Timepass",
      aboutMyself: "I love to Code"
    },
    {
      name: "Mrigank",
      id: 4,
      hobbies: "Football",
      aboutMyself: "I love to Code"
    },
    {
      name: "Jude",
      id: 5,
      hobbies: "Reading",
      aboutMyself: "I love to Code"
    }
  ];

  const handleClick = (student) => {
    setStudent(student);
  };

  const handleChange = (event) => {
    //student is the current state, studentList is an array ,
    // we cannot do student.filter() as it will change the state and
    // will not be normal when search bar is empty
    // const filterValue = event.target.value;
    // const filteredStudents = studentList.filter((student)=>
    // student.name.toLowerCase().includes(filterValue.toLowerCase()));
    // setStudentIndex(-1);
    // setStudents(filteredStudents);
    setStudent({});
    setfilterValue(event.target.value);
  };
  return (
    <Box display={"flex"}>
      <StudentsList
        students={studentList.filter((student) =>
          student.name.toLowerCase().includes(filterValue.toLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <StudentDetail student={student} />
    </Box>
  );
}
