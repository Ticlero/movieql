 let Movies = [
    {
        id:0,
        title:"Star Wars - The new one",
        rating: 30
    },
    {
        id:1,
        title:"The Gotfather I",
        rating: 80
    },
    {
        id:2,
        title:"Logan",
        rating: 99
    },
    {
        id:3,
        title:"Avengers - The New one",
        rating: 88
    },
]

export const getMovies = () => Movies;

export const getById = (id) =>{
    const filteredMovies = Movies.filter( person => person.id === id);
    return filteredMovies[0];
}

export const deleteMovies = (id) => {
    const cleanedMovies = Movies.filter(movie => movie.id !== id);
    if(Movies.length > cleanedMovies.length){
        Movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (title, rating) =>{
    const newMovie = {
        id: (Movies.length + 1),
        title: title,
        rating: rating
    }
    
    Movies.push(newMovie);

    return newMovie;
}