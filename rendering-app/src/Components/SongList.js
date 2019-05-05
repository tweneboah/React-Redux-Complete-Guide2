import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
    
    renderList () {
          return this.props.songs.map((song)=> {
               return (
                   <div className = 'item' key={song.title}>
                    <div className='right floated content'>
                       <button className='ui button primary' onClick={()=>this.props.selectSongs22(song)} >Select</button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
               );
          })
    }
    render() { 
       //this.props = songs: state.song
       //console.log(this.props)
        return ( 
           
            <div className="ui divided list">
              {this.renderList()}
            </div>
         );
    }
}

//CONNECT FUNCTION

const mapStateToProps = (state) => {
   console.log('MapState', state)
    return { songs: state.songs }
}

export default connect(mapStateToProps,{
    selectSongs22: selectSong
}) (SongList);