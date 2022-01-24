import React from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUSerList) => {
      return [
        ...prevUSerList,
        { name: uName, age: uAge, key: Math.random().toString() },
      ];
      //aici creem un nou obiect cu ce avem ca default la usestate adica empty array si dupa mai adaugam un obiect care are un nume si o varsta adusa din addUser prin callBack function si
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />

      <UserList users={usersList} />
    </div>
  );
}

export default App;
