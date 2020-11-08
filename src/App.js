import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading:false});
  };
  componentDidMount=()=>{
    /*
    setTimeout(() => {
      this.setState({isLoading:false, book: true})
    },6000)*/
    this.getMovies();
  }

  render() {
    const {isLoading, movies }=this.state;
  return (
  <section className="container">
    {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading....</span>
        </div>
      ) : ( 
        <div className="movies">
        { movies.map(movie=> (
        <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary}
          poster={movie.medium_cover_image} 
          genres={movie.genres}
          />
        ))}
        </div>
      )}
    </section>
    );
  }

}

export default App;
/*
const foodList=[ 
  {
    id:1,
    name:"kimchi",
    image:"https://contents.sixshop.com/thumbnails/uploadedFiles/72878/product/image_1540176020065_1000.jpg",
    rating:3.5
  },
  {
    id:2,
    name:"samgyep",
    image:"http://static.news.zumst.com/images/2/2017/02/26/2030c76e427f4c278c16ab0eb81bd45d.jpg",
    rating:4.7
  },
  {
    id:3,
    name:"bibimbab",
    image:"https://shop.biumfood.com/upload/images/20191203102744_131059.jpg",
    rating:5.5
  }
];

function Food({name,picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}
*/
