import React from 'react';
import ReactDOM from 'react-dom';
import  SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'


const API_KEY ='AIzaSyCXmxvZNpUTPphY-mj6OIxJe2DbaQOizD4';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videos:[]
        }
        YTSearch({key:API_KEY,term:'youtube'},(videos)=>
        this.setState({videos})
        )   
    }
    render(){
        console.log(this.state.videos);
    return (<div>
           
            <SearchBar />
            <VideoList videos={this.state.videos} />
           </div>);
}
}

ReactDOM.render(<App />,document.querySelector  ('.container'));