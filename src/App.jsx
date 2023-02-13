import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isColumn, setIsColumn] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [confirmCreate, setConfirmCreate] = useState(false)
 

  const getAllUsers = () => {
    const url = `https://users-crud.academlo.tech/users/`;

    axios
      .get(url)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const createNewUser = (data) => {
    const url = `https://users-crud.academlo.tech/users/`;

    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        setConfirmDelete(true)
      })
      .catch((err) => console.log(err));
  };

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        setUpdateInfo();
      })
      .catch((err) => console.log(err));
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleColumn = () => {
    if (!isColumn) {
      setIsColumn(true);
    } else {
      setIsColumn(false);
    }
  };

  return (
    <div className="app">
      <h1 className="app__tittle">Users</h1>
      <nav className="app__navbar">
        <button onClick={handleOpen} className="btn__open">
          New User +
        </button>
        <button className="btn__column" onClick={handleColumn}>
          Change Display
        </button>
      </nav>
      <div className={`app__form ${isOpen && `app__form-visible`}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
          setConfirmCreate={setConfirmCreate}
        />
      </div>
      <div className={!confirmCreate ? "user__create" : "user__create-visible"}>
      <i class='bx bx-check-circle' ></i>
          <h2 className="user__create-tittle">User created</h2>
        </div>
      <div>
        <div className={isColumn ? "app__card-show" : "app__card"}>
        <div className={!confirmDelete ? "user__delete" : "user__delete-visible"}>
        <i class='bx bx-trash'></i>
          <h2>User deleted</h2>
        </div>
          {users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpen={handleOpen}
              setConfirmDelete={setConfirmDelete}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
