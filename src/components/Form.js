import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const fireBase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      fireBase.addNote(value.trim()).then(() => {
        alert.show('Заметка создана', 'success')
      }).catch(() => {
        alert.show('Что-то пошло не так', 'danger')
      })
      setValue('')
    } else {
      alert.show('Создайте заметку')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}