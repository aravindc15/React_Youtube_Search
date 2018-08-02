import React from 'react';
import ReactDOM from 'react-dom';
import  SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'
const API_KEY ='AIzaSyCXmxvZNpUTPphY-mj6OIxJe2DbaQOizD4';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        }
         
       this.videoSearch("reactjs") 
    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos)=>
        this.setState({videos,
            selectedVideo:videos[0]})
        ) 
    }
          

    render(){
        const videoSearch= _.debounce((term) =>{this.videoSearch(term)},300)
        console.log(this.state.videos);
    return (
        <div>       
            <SearchBar videoSearch={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos}
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})} />       
           </div>
           );
}
}

ReactDOM.render(<App />,document.querySelector  ('.container'));