import React, { useState, Fragment } from "react"
import "./UserTable.scss"
import ReadOnlyRow from "../ReanOnlyRow/ReadOnlyRow"
import EditableRow from "../EditableRow/EditableRow"

const data = [
  {
    id: "5ab853cc-ebec-4bf9-9e67-74e410e6fc33",
    first_name: "Darb",
    last_name: "Minney",
    email: "dminney0@seattletimes.com",
    created_at: "2021-06-07 14:26:06",
  },
  {
    id: "73cb7897-8c50-4b7d-8b81-d40ead54968a",
    first_name: "Ashley",
    last_name: "Andrieu",
    email: "aandrieu1@xing.com",
    created_at: "2021-02-16 19:34:11",
  },
  {
    id: "95c10ec0-fc04-402b-9c24-5f3cff230f5f",
    first_name: "Roxi",
    last_name: "Treasure",
    email: "rtreasure2@ed.gov",
    created_at: "2021-04-18 13:47:34",
  },
]
const UserTable = () => {
  const [users, setUsers] = useState(data)

  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    created: "",
    updated: "",
  })

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    created: "",
    updated: "",
  })

  const [editUserId, setEditUserId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newUser = {
      id: "",
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
      created: "now",
      updated: "now",
    }

    const newUsers = [...users, newUser]
    setUsers(newUsers)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedUser = {
      id: editUserId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
      created: editFormData.created,
      updated: editFormData.updated,
    }

    const newUsers = [...users]

    const index = users.findIndex((user) => user.id === editUserId)

    newUsers[index] = editedUser

    setUsers(newUsers)
    setEditUserId(null)
  }

  const handleEditClick = (event, user) => {
    event.preventDefault()
    setEditUserId(user.id)

    const formValues = {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      created: user.created_at,
      updated: user.updated_at,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditUserId(null)
  }

  const handleDeleteClick = (userId) => {
    const newUsers = [...users]

    const index = users.findIndex((user) => user.id === userId)

    newUsers.splice(index, 1)

    setUsers(newUsers)
  }

  return (
    <div className="userTable">
      {/* -------------- Add-User Elemement -------------- */}
      <h2 className="add-user-title">Add user</h2>
      <form
        className="add-user-form"
        onSubmit={handleAddFormSubmit}
      >
        <input
          className="add-user-input"
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter first name..."
          onChange={handleAddFormChange}
        />
        <input
          className="add-user-input"
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter last name..."
          onChange={handleAddFormChange}
        />
        <input
          className="add-user-input"
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button
          className="add-user-button"
          type="submit"
        >
          Add
        </button>
      </form>
      {/* -------------- Table Elemement -------------- */}
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr key="00">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <Fragment>
                {editUserId === user.id ? (
                  <EditableRow
                    key={i}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    key={i}
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default UserTable
