import React, {useState} from "react";
import '../styles/Home.css'
import Footer from "./Footer";
import Datafetcher from "./Datafetcher";

export default function Home() {
  const [showchart, setShowChart] = useState(false);
  const handleClick =()=>{
    setShowChart(true)
  }
  return <div className="home">
    <h1>Data Visualization</h1>
    <p>Click here to view data</p>

    {!showchart &&(  <button onClick={handleClick} className="btn-view-data">View Data</button>)}
  {showchart && (<Datafetcher/>) }

  <Footer/>
  </div>;
}
