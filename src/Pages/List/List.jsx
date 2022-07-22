import Datatable from "../../Components/datatable/Datatable"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./List.scss"

const list = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable/>
      </div>
    
    </div>
  )
}

export default list
