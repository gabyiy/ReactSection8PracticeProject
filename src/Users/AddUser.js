import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();
  //doar cu  scibnatu statului la error putem sa afisam modalu sa formularu ,trecand ca callbackfunction la button putem sa ii schimbam status si astfel cand dam click pe button revenim la from

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();

    //asa specificam daca atat la varsta cat si la username nu avem nimic sau la varsta am pus +ca sa il transformam in numar ppentru a face comparatia cu 0 sa faca un return astfel nu o treaca mai departe si nu o sa mai adauge nimci la obiectul creat
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
        title: "Erorare de nume sau varsta",
        message: "Introdu dinou datele",
      });
    }
    if (+enteredAge < 1) {
      setEnteredUserName("");
      setEnteredAge("");
      return setError({
        title: "Varsta prea mica",
        message: "introdu o varsta mai mare ca 0",
      });
    }

    setEnteredUserName("");
    setEnteredAge("");
    props.onAddUser(enteredUserName, enteredAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      {/**asa definim de de forma dinamica atat titlu  cat se mesaju care o sa il primim in erormodal cu ajutoru la props */}
      {!error && (
        <Card className={styles.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUserName}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
            {/**aici folosim componentu button */}
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddUser;
