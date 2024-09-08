import ReactAudioPlayer from "react-audio-player";
import tbbMusica from '../../../public/MusicaTBB.mp3'

function AudioPlayer(){
    return(
        <div>
            <h3>Musica de Abertura</h3>
            <br />
            <ReactAudioPlayer src={tbbMusica} controls/>
        </div>
        
    )

}

export default AudioPlayer;