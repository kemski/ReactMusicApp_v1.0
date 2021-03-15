import React from 'react';

const LibrarySong = ({song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs}) => {
    const songSelectHandler = () => {
       
        setCurrentSong(song);
        //Add Active State
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return {
                    ...song,
                    active:true,
                }
                
            }
            else {
                return {
                ...song,
                active: false
            }
        }
        })
        setSongs(newSongs)
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined) {
                playPromise.then((audio)=> {
                    audioRef.current.play();
                })
            }
        }
    };
    return (
       <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : "" }`}>
           <img src={song.cover} alt={song.name}></img>
           <div className="songData-container">
           <h3>{song.name}</h3>
           <h4>{song.artist}</h4>
           </div>
       </div>
       )
}
export default LibrarySong; 
