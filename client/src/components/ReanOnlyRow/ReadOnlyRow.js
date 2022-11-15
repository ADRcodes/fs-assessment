import React from "react"
import "./ReadOnlyRow.scss"

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={user.id}>
      <td className="read-row__name">{user.first_name}</td>
      <td className="read-row__name">{user.last_name}</td>
      <td className="read-row__email">{user.email}</td>
      <td className="read-row__date">{user.created_at}</td>
      <td className="read-row__date">{user.updated_at}</td>
      <td className="read-row__actions">
        <button
          className="read-row__button"
          type="button"
          onClick={(event) => handleEditClick(event, user)}
        >
          Edit
        </button>
        <button
          className="read-row__button"
          type="button"
          onClick={() => handleDeleteClick(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow
