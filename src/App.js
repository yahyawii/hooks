import { useState } from 'react';
import './App.css';
import Navmenu from './Components/Navmenu';
import ListMovies from './Components/ListMovies';
import AddMovie from './Components/AddMovie';
import CardMovie from './Components/CardMovie';
import FilterMovies from './Components/FilterMovies';

function App() {
  const [movies,setMovies]=useState (
    [
      {title : "SPIDER-MAN" , description : "Wanting to make his identity a secret, Peter turns to Doctor Strange for help. But when Strange's spell goes haywire, Peter must go up against five deadly new enemies" , posterURL : "/1.jpg" , rating : 5, id : Math.random()},
      {title : "Nomadland " , description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" , rating : 3 , id : Math.random()},
      {title : "Les Mitchell contre les machines" , description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg" , rating : 2 , id : Math.random()},
      {title : "django unchained " , description : "“Django Unchained” is a rip-roaring revenge actioner set in the American South just two years before the Civil War" , posterURL : "/dj.jpg" , rating : 5 , id : Math.random()}
    ]
  )
    const [titleF,setTitleF] = useState('')
  const [ratingF,setRatingF] = useState(5)
  return (
    <div>
      <Navmenu/>
      <br/>
      <AddMovie setMovies={setMovies} movies={movies}/>
      <br/>
      <br/>
      <FilterMovies setTitleF={setTitleF} setRatingF={setRatingF} titleF={titleF} ratingF={ratingF}/>
      <br/>
      <br/>
      <ListMovies movies={movies} setMovies={setMovies} titleF={titleF} ratingF={ratingF}/>
    </div>
  );
}

export default App;