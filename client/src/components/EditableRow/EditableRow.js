import React from "react"
import "./EditableRow.scss"

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr key={editFormData.created}>
      <td>
        <input
          className="edit-row-input__name"
          type="text"
          required="required"
          placeholder="Enter first name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="edit-row-input__name"
          type="text"
          required="required"
          placeholder="Enter last name..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="edit-row-input__email"
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <p>{editFormData.created}</p>
      </td>
      <td>
        <p></p>
      </td>
      <td>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditableRow
