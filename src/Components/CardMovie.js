import {usestate } from  "react"
import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

const Cardmovie =({movie,movies,setMovies})=>{
    const[showMore,setshowMore]=usestate(false)
    const handleShow=()=>setshowMore(!showMore)
    const handleDelete=(id)=> setMovies(movies.filter(movie=>movie.id !=id))
    return(
<div>
<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterURL} style={{width:'286px',height:'389px'}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {showMore ? movie.description : `${movie.description.substring(0, 50)}...`}
                <a className="btn" onClick={handleShow}>{showMore ? 'Show Less' : 'Show More'}</a>
                </Card.Text>
                { <Rating name="read-only" value={movie.rating}  readOnly /> }
                
        
       
      />
                <br/>
                <Button variant="primary" onClick={()=>{handleDelete(movie.id) }}>Delete</Button>
            </Card.Body>
            </Card>
</div>
    )
}
export default Cardmovie