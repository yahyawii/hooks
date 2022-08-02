import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Description = ({movies}) => {
    const {id}= useParams()
    const founded = movies.find(movie => movie.id == id )
    const navigate = useNavigate()
  return (
    <div>
        <h2>{founded.id} </h2>
        <h2>{founded.title} </h2>
      
    </div>
  )
}

export default Description
