import React from 'react';
import Videoitem from './video_list_item';
import 'A:\\udemysample\\src\\components\\style\\style.css';
const Videolist=(props)=>{


    
    const Videoitems=props.videos.map((video )=>{
return <Videoitem

onVideoSelect={props.onVideoSelect}
key ={video.etag}
 video={video}/>;
    });

        return(
                <ul className="col-md-4 list-groups">

                    {props.videos.length}
                    {Videoitems}
                </ul>

        );
    };

export default Videolist;