import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  handleClose,
  setUpdateInfo,
  setConfirmCreate
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const submit = (data) => {
    
      if (updateInfo) {
        updateUserById(updateInfo.id, data)
      } else {
        setConfirmCreate(true)
        setTimeout(() => {
          setConfirmCreate(false)
        }, 1500);
        createNewUser(data)
      }
      handleClose()
      reset(defaultValues)
  }

    

  const handleX = () => {
    reset(defaultValues);
    setUpdateInfo();
    handleClose();
  };

  return (
    <form className="form__container" onSubmit={handleSubmit(submit)}>
      <h2 className="form__tittle">Form User</h2>
      <div onClick={handleX} className="close__form">
        X
      </div>
      <div className="form__seccion">
        <label className="form__label" htmlFor="first_name">
          First name:
        </label>
        <input
          className="form__input"
          {...register("first_name")}
          type="text"
          id="firstName"
          placeholder="# Enter your first name"
          required
        />
      </div>
      <div className="form__seccion">
        <label className="form__label" htmlFor="last_name">
          Last name:
        </label>
        <input
          className="form__input"
          {...register("last_name")}
          type="text"
          id="lastName"
          placeholder="# Enter your last name"
          required
        />
      </div>
      <div className="form__seccion">
        <label className="form__label" htmlFor="email">
          Email:
        </label>
        <input
          className="form__input"
          {...register("email")}
          type="email"
          id="email"
          placeholder="# Enter your E-mail"
          required
        />
      </div>
      <div className="form__seccion">
        <label className="form__label" htmlFor="password">
          Password:
        </label>
        <input
          className="form__input"
          {...register("password")}
          type="password"
          id="password"
          placeholder="# Enter your password"
          required
        />
      </div>
      <div className="form__seccion">
        <label className="form__label" htmlFor="birthday">
          Enter your birthday:{" "}
        </label>
        <input
          className="form__input"
          {...register("birthday")}
          type="date"
          id="birthday"
          requireds
        />
      </div>
      <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};

export default FormUser;
