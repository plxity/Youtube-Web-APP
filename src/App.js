import React, { Component } from 'react';
import logo from './logo.svg';
import 'A:\\udemysample\\src\\components\\style\\style.css';
import Searchbar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import  Videolist from './components/video_list';
import Videoitem from './components/video_list_item';
import Videodetail from './components/video_detail';
const API_key ='AIzaSyDuIC_GGkAulHvoUOPA_PoFnOOs5ETu11c';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

      videos: [],
      SelectedVideo:null
    };
      this.videoSearch('SURFBOARDS');
  
  }
  videoSearch(term){
    YTSearch({key:API_key,term:term},(videos)=>{
      console.log(videos);
    
      this.setState({
        
        videos:videos,
        SelectedVideo : videos[0]
      
      });
    })
    
  }
  render(){

    return (<div>

      <Searchbar onSearchTermChange={term=>this.videoSearch(term)}/>
      <Videodetail  video={this.state.SelectedVideo}/>
      < Videolist 
      
      onVideoSelect={SelectedVideo=> this.setState({SelectedVideo})}
      videos={this.state.videos}
      
      />
    
    </div>);
  }

}
export default App;
