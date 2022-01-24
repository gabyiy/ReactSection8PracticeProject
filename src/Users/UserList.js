import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((usr) => (
          <li key={usr.key}>
            {/**am adaugat key in li pentru ca react sa poate indetifce dupa key fiecal li creat */}
            {usr.name} ({usr.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
