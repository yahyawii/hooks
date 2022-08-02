import {useState } from  "react"
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

const CardMovie =({movie,movies,setMovies})=>{
    const[showMore,setShowMore]=useState(false)
    const handleShow=()=>{setShowMore(!showMore)}
    const handleDelete=(id)=> {setMovies(movies.filter(movie=>movie.id !=id))}
    return(
<div>
<Card style={{ width: '18rem' }}>
           <Link to={`/movie/${movie.id}`}> <Card.Img variant="top" src={movie.posterURL} style={{width:'286px',height:'389px'}}/></Link>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {showMore ? movie.description : `${movie.description.substring(0, 50)}...`}
                <a className="btn" onClick={handleShow}>{showMore ? 'Show Less' : 'Show More'}</a>
                </Card.Text>
                { <Rating name="read-only" value={movie.rating}  readOnly /> }
                
        
       
      
                <br/>
                <Button variant="primary" onClick={()=>{handleDelete(movie.id) }}>Delete</Button>
            </Card.Body>
            </Card>
</div>
    )
}
export default CardMovie