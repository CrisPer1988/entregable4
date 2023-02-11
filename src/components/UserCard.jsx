import React from 'react'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpen}) => {
    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () =>{
      setUpdateInfo(user)
      handleOpen()
    }

  return (
    <article className='card__container'>
        <h2 className='card__info'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='ul__list'>
            <li className='card__list'><span>Email: </span>{user.email}</li>
            <li className='card__list'><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <div className='container__btn-card'>
          <button className='card__btn card__btn-delete' onClick={handleDelete}><i class='bx bxs-trash-alt'></i></button>
          <button onClick={handleUpdate} className='card__btn card__btn-edit'><i class='bx bx-edit-alt' ></i></button>
        </div>
    </article>
  )
}

export default UserCard