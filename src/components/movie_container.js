import React, {Component} from 'react';
import Movie from './movies'
import axios from 'axios';

class MovieContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            movies: []
        }
    }
    componentWillMount(){
        const API_URL =  'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(`${API_URL}`).then((response) => {
            console.log(response);
            this.setState({
                movies: response.data.feed.entry
            })
        })
    }
    render(){
        const movieList = this.state.movies.map((movieInfo, index) => {
            return (
                <Movie info={movieInfo} key={index}/>
            )
        })
        console.log('The state is ', this.state)
        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;