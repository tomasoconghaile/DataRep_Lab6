import React from 'react';  
import axios from 'axios';

export class Create extends React.Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }

    onChangeMovieName(e){
        this.setState({ Title: e.target.value})
    }

    onChangeMovieYear(e){
        this.setState({
            Year: e.target.value
        })
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(){
        alert("Movie added Title"
        +this.state.Title + ' Year: '
        +this.state.Year + ' Poster: '
        +this.state.Poster);

        const newMovie = { // had to change the Title et to lowercase as thats what the server is looking for
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies',newMovie) //sends the data to server 
        .then((res) => {
            console.log(res);
        })
        .catch((err)=>{ // will tell us if theres an error
            console.log(err);
        });
    }
    render(){
        return(
<div>
    <h1>This is the create  component</h1>

    <form onSubmit={this.onSubmit}>

        <div className="form-group">
            <label>please add movie title</label> 
            <input type = 'text'
            className="form-control"
            value={this.state.Title}
            onChange={this.onChangeMovieName}></input>
        </div>

        <div className="form-group">
        <label>please add movie year</label>
        <input type = 'text'
        className="form-control"
        value={this.state.Year}
        onChange={this.onChangeMovieYear}></input>

        <div className="form-group">
        <label>please add movie Poster</label>
        <input type = 'text'
        className="form-control"
        value={this.state.Poster}
        onChange={this.onChangePoster}></input>
   </div>
   <div className ="form-group">
       <input type='submit'
       value='Add Movie'
       className='btn btn-primary'></input>
   </div>
   </div>
</form>
   
   </div>
        )
    }
}
