import "./styles.css";

export default function StudentDetail({ student = {} }) {
  return (
    <>
      <div className="right-container">
        <div>{student.name}</div>
        <div>{student.hobbies}</div>
        <div>{student.aboutMyself}</div>
      </div>
    </>
  );
}
