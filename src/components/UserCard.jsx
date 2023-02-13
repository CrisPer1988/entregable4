import React, {  } from "react";


const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen, setConfirmDelete }) => {
  const handleDelete = () => {
    deleteUserById(user.id)
    setConfirmDelete(true)
    setTimeout(() => {
      setConfirmDelete(false)
    }, 1500);
    
    
    
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpen();
  };


  return (
    <article className="card__container">
      <h2 className="card__info">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="ul__list">
        <li className="card__list">
          <i className="bx bxs-envelope card__icon"></i>:{user.email}
        </li>
        <li className="card__list">
          <i className="bx bxs-cake card__icon"></i>:{user.birthday}
        </li>
      </ul>
      <div className="container__btn-card">
        <button className="card__btn card__btn-delete" onClick={handleDelete}>
          <i className="bx bxs-trash-alt card__icon--opt"></i>
        </button>
        <button onClick={handleUpdate} className="card__btn card__btn-edit">
          <i className="bx bx-edit-alt card__icon--opt"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
