import React from 'react';

import { connect } from 'react-redux';

const SongDetails2 = (props) => {
    console.log(props)
    if(!props.song){
        return <div>Select a song</div>
    }
    return(
        <div>
           <h1>{props.song.title}</h1>
           <h1>{props.song.duration}</h1>
        </div>
    )
}


//USING Destructuring to destructure the object
const SongDetails = ({song}) => {
    console.log(song)
    if(!song){
        return <div>Select a song</div>
    }
    return(
        <div>
            <h1>Song details</h1>
           <h4>{song.title}</h4>
           <h4>{song.duration}</h4>
        </div>
    )
}
//CONNECTING TO STORE
const mapStateToProps = (state) => {
    
    return {song: state.selectedSong}//props = song
}
export default connect(mapStateToProps) (SongDetails)