import React, { useEffect, useState } from 'react'
import 'routers/Public.css'
import PublicCard from 'components/PublicCard'
import axios from 'axios'

const Public = () => {  
  const [contents, setContents] = useState([])  
  
  useEffect(() => {
    const getContentsData = async () => {      
      let data=[];
      
      data = await axios.get(
        'https://www.cardbookserver.tk:4000/contents/viewpubliclists'
      )
      let movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
      let datas = [...movies.data.data.movies, ...data.data];
      setContents(datas);
    }
    getContentsData()
  }, [])

  return (
    <>
      <div className="cardContainor">        
        {contents.map((content, index) => {          
          if (index < 200) {
            return <PublicCard key={content.id} content={content} />
          } else {
            return console.log(index)
          }
        })}
      </div>
    </>
  )
}

export default Public
