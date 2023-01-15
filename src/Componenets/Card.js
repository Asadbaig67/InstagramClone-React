import { useEffect, useState } from 'react'
import React from 'react'
import CardItem from './CardItem'

const Card = (props) => {

  const [data, setdata] = useState([]);
  const getUserDataFromApi = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=health&apikey=a0545d7adb5d4f73b341bf5736a3c314`;
    let data = await fetch(url);
    // console.log("fuck man");
    let Data = await data.json();
    setdata(Data.articles);
  }
  useEffect(() => {
    getUserDataFromApi();
  })

  return (
    <div className='container' style={{ marginTop: '120px', position: 'absolute', left: '329px', top: '70px' }}>
      {data !== [] && data.map((element) => {
        return <CardItem img={element.urlToImage} title={element.title} username={element.author} caption={element.description} />
      })
      }
    </div>
  )
}

export default Card
