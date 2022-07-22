import "./Featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
      <div className="featured">
          <div className="top">
              <h1 className="title">Total Revenue</h1>
              <MoreVertOutlinedIcon fontSize="small"/>
          </div>
          <div className="bottom">
              <div className="featuredBar">
                  <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
              </div>
              <p className="title">Total sales made today</p>
              <p className="amount">$500</p>
              <p className="desc">Previous transactions processing. Last payment may not be included.</p>
              <div className="summary">
                  <div className="item">
                      <div className="itemTitle">Target</div>
                      <div className="itemResult negative">
                          <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                          <div className="resultAmount">$30.3k</div>
                      </div>
                  </div>
                  <div className="item">
                      <div className="itemTitle">Last Week</div>
                      <div className="itemResult positive">
                          <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                          <div className="resultAmount">$30.3k</div>
                      </div>
                  </div>
                  <div className="item">
                      <div className="itemTitle">Last Month</div>
                      <div className="itemResult positive">
                          <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                          <div className="resultAmount">$30.3k</div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Featured