import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.scss"
import Widgets from "../../Components/Widgets/Widgets"
import Featured from "../../Components/featured/Featured"
import Chart from "../../Components/Chart/Chart"
import List from "../../Components/Table/Table"


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months(Revenue)" aspect={2/1}/>
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List/>
        </div>
      

      </div>
    </div>
  )
}

export default Home