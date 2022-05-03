import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
constructor(){ 
    super();
    this.state = {
    movies: [
        {_id: 1,
          Title:"Titanic",
          Description:"Titanic is an epic, action-packed romance set against the maiden voyage of the R.M.S. Titanic, the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era the ship of dreams, which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
          Genre:{Name:"Drama",Description:"Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre,such as soap opera, police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama."},
          Director:{Name:"James Cameron",Bio:"James Francis Cameron (born August 16, 1954) is a Canadian filmmaker. Best known for making science fiction and epic films.",Birth:"1954",Death:""},
          ImagePath:"https://m.media-amazon.com/images/I/91J0KtuFMAL._AC_SY879_.jpg",
          Featured:true
        },
        {_id:2,
          Title:"The Dark Knight",
          Description:"With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
          Genre:{Name:"Adventure",Description:"Adventure is form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war."},
          Director:{Name:"Christopher Nolan",Bio:"Christopher Nolan is a British-American film director, producer, and screenwriter. His films have grossed more than US$5 billion worldwide, and have garnered 11 Academy Awards from 36 nominations.",Birth:"1970",Death:""},
          ImagePath:"https://m.media-amazon.com/images/I/81rGCm0PyHL._AC_SY879_.jpg",
          Featured:true
         },
         {
          _id:3,
          Title:"Intersteller",
          Description:"In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
          Genre:{Name:"Science-Fiction",Description:"Science-Fiction is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life."},
          Director:{Name:"Christopher Nolan","Bio":"Christopher Nolan is a British-American film director, producer, and screenwriter.",Birth:"1970",Death:""},
          ImagePath:"https://m.media-amazon.com/images/I/51RIlgz2b2L._AC_.jpg",
          Featured:true
         }

    ],
    selectedMovies:null
  };
}


setSelectedMovie(newSelectedMovie) { 
     this.setState({selectedMovie: newSelectedMovie });
     }

render() {
    const { movies, selectedMovie } = this.state;
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    return (
        <div className="main-view">
            {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map((movie) => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    ))
                }
            </div>
        );
    }

}
        
export default MainView;
