import "./App.scss"
import UserForm from "./components/Form/UserForm"
import UserTable from "./components/UserTable/UserTable"
import api from "./utils/api.js"

// console.log(api())

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserTable />
    </div>
  )
}

export default App
