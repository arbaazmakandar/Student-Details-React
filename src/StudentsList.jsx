import "./styles.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Student list updates on search/ filtered on search
export default function StudentsList({ students, onClick, onChange }) {
  return (
    <>
      <div className="left-container">
        <input type="text" placeholder="Search.." onChange={onChange} />

        <List component="nav" aria-label="main mailbox folders">
          <div className="student-list">
            {students.map((student) => (
              <ListItem
                button
                onClick={() => onClick(student)}
                key={student.id}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={student.name} />
              </ListItem>
            ))}
          </div>
        </List>
      </div>
    </>
  );
}
