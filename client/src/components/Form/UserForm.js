import "./UserForm.scss"

const UserForm = () => {
  return (
    <div className="userForm">
      <h1 className="title">Users</h1>
      <input
        type="text"
        // onChange={searchUsers}
        placeholder="Search Users"
        className="user__search"
      />
    </div>
  )
}

export default UserForm
