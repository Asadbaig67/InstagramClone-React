import './App.css';
import { useEffect, useState } from 'react'
import Card from './Componenets/Card';
import Navbar from './Componenets/Navbar';
import Sidebar from './Componenets/Sidebar';
import Stories from './Componenets/Stories';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  // const [data, setdata] = useState([]);
  // const getUserDataFromApi = async () => {

  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apikey=a0545d7adb5d4f73b341bf5736a3c314`;
  //   let data = await fetch(url);
  //   let Data = await data.json();
  //   // console.log(Data);
  //   setdata(Data.articles);
  // }
  // useEffect(() => {
  //   getUserDataFromApi();
  // }, [])
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apikey=a0545d7adb5d4f73b341bf5736a3c314&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
  //
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Stories />
          <Routes>
            <Route exact path="/business" element={<Card Country={'us'} Category={'business'} />} />
            <Route exact path="/entertainment" element={<Card Country={'us'} Category={'entertainment'} />} />
            <Route exact path="/general" element={<Card Country={'us'} Category={'general'} />} />
            <Route exact path="/science" element={<Card Country={'us'} Category={'science'} />} />
            <Route exact path="/sports" element={<Card Country={'us'} Category={'sports'} />} />
            <Route exact path="/technology" element={<Card Country={'us'} Category={'technology'} />} />
            <Route exact path="/health" element={<Card Country={'us'} Category={'health'} />} />
          </Routes>
          <Sidebar />
        </div>
      </Router>
    </>
  );
}

export default App;
