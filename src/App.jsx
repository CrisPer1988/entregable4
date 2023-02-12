import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [isColumn, setIsColumn] = useState(false)

  const getAllUsers = () =>{
    const url = `https://users-crud.academlo.tech/users/`

    axios.get(url)
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data =>{
    const url = `https://users-crud.academlo.tech/users/`

    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUserById = (id, data) =>{
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
    .then(res => {console.log(res.data)
      getAllUsers()
      setUpdateInfo()
    })
    .catch(err => console.log(err))
  }

  const handleOpen = () =>{
    setIsOpen(true)
  }

  const handleClose = () =>{
    setIsOpen(false)
  }

  const handleColumn = () =>{
    setIsColumn(true)
  }


  return (
    <div className="app">
      <h1 className='app__tittle'>Users</h1>
      <button onClick={handleOpen} className='btn__open'>Open Form</button>
      <div className={`app__form ${isOpen && `app__form-visible`}`}>
        <FormUser 
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
                />
     </div>
     <button className='btn__open' onClick={handleColumn}>holaaa</button>
     <div>
     <div className={isColumn ? "app__card-show" : "app__card"}>
      {
        users?.map(user => (
        
          <UserCard
          key={user.id}
          user={user}
          deleteUserById={deleteUserById} 
          setUpdateInfo={setUpdateInfo}
          handleOpen={handleOpen}
          />
        
        ))
      }
      </div>
     </div>
    </div>
  )
}

export default App
