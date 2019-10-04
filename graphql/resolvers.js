import {  getAPIMovies, getCustomAPIMovies } from "./moviesApiDB";
//schema.graphql 정의
//Mutation - DB에 변화가 있을 때 사용
//Query - 질의문을 정의할 때 사용
//그외 Movies, People, dogs 등 객체 타입을 정의할 수 있음

const resolvers = {
    Query:{
        movies: () => getAPIMovies(),
        apimovies: (_, {limit, rating}) => getCustomAPIMovies(limit, rating),
    },

};

// movie: (_, {id}) => getById(id),
// apimovies:() => getApiMovies(),

// Mutation:{
//     addMovie: (_, {name, score}) => addMovie(name, score),
//     deleteMovie: (_,{id}) => deleteMovies(id)
// }


export default resolvers;