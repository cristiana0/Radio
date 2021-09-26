import React,{useState} from 'react';
import styled from 'styled-components'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import {Queen} from './msc';
import bg from './assets/images/bg.png';

const Cris = styled.div`
  width: 100vw;
  height: 465px;
  top: 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`
const BgImage = styled.img.attrs({src: bg, alt: "foto do fundo"})`
  position: relative;
  top: 0;
`
const Musica = styled.div`
  @media(max-width: 768px){
    width: 100%;
  }
  width: 900px;
  height: 100%;
  h2{
    font-size: 16px;
  }
  h3{
    color: #fff;
    text-align: center;
  }
  .rhap_progress-section{
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    .rhap_time{
      font-size: 30px;
    }
    
  }
  .rhap_controls-section{
    @media(max-width: 768px){
      width: 100%;
      justify-content: center;
      align-items: center ;
    }
    display: flex;
    justify-content: space-between;
    .rhap_additional-controls{
      width: 100px;
      height: 100px;
      .rhap_repeat-button{
        width: 100px;
        height: 100px;
        background-color: transparent;
        border: none;
        :hover{
          background-color: rgba(0,0,0,0.1);
        }
        svg{
          width: 90%;
          height: 90%;
        }
      }
    }
    
  }
  
  .rhap_main-controls {
    button{
      width: 100px;
      height: 100px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      :hover{
        background-color: rgba(0,0,0,0.1);
      }
      svg{
        width: 90%;
        height: 90%;
        :hover{

        }
      }
    }
  }
  .rhap_container svg{
    color: white;
  }
  .rhap_container{
    background-color: rgba(0,0,0,0) !important;
    border: none !important;
    color: white;
    box-shadow: none;
  }
  .rhap_progress-filled{
    background-color: green;
  }
  .rhap_progress-indicator{
    background-color: rgba(3,3,3,0.6);
    :hover{
      height: 23px;
      width: 23px;
      bottom: 100px;
      transition: 0.3;
    }
  }
  .rhap_additional-controls {
    @media(max-width: 768px){
      width: 30px;
    }
    width: 100px;
    height:20px;
    position: relative;
    overflow-x: none;
    overflow-y: none;
    ::-webkit-scrollbar {
        width: 1px;
    }
  }
  .rhap_main-controls{
    @media(max-width: 768px){
    }
  }
  .rhap_time {
    color: #fff;
  }
  .rhap_container h3{
    @media(max-width: 768px){
        display: none;  
    }
    display: inline;
    position: absolute;
    width: 250px;
    height: 35px;
    margin: 30px 0 0 40px;
    font-size: 15px;
  }
  .rhap_volume-controls{
    width: 150px;
    height: 100px;
    .rhap_volume-container{
      width: 100%;
      height: 100%;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      .rhap_volume-bar-area{
        width: 150px;
        height: 14px;
        cursor: pointer;
        display: -webkit-flex;
        background-color: rgba(255,255,255,0.8);
        .rhap_volume-bar{
          width: 50px;
          background-color: tomato;
          .rhap_volume-indicator{
            width: 20px;
            height: 20px;
            background-color: yellow;
          }
        }
      }
      .rhap_volume-button{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        :hover{
          background-color: rgba(0,0,0,0.1);
        }
        svg{
          width: 90%;
          height: 90%;
        }
      }
    }
  }
`
const Player = styled.div`
  @media(max-width: 768px){
  
  }
  width: 100vw;
  height: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,81,95,1) 49%, rgba(17,81,95,1) 82%, rgba(0,0,0,1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
function App(){
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  let playlist = Queen;
  const handleClickPrevious = (): void => {
    if (currentMusicIndex === 0) {
        setCurrentMusicIndex(playlist.length - 1);
    } else {
        var ne = currentMusicIndex - 1;
        setCurrentMusicIndex(ne);
    }
  }
  const handleClickNext = (): void => {
    if (currentMusicIndex < playlist.length - 1) {
        var ne = currentMusicIndex + 1;
        setCurrentMusicIndex(ne);
    } else {
        setCurrentMusicIndex(0);
    }
  }

  return (
    <div>
      <Cris>
        <h1>RADIO DA CRISTIANA</h1>
        {/* <BgImage /> */}
      </Cris>
      <Player>
        <Musica>
          <h3>{playlist[currentMusicIndex].name}</h3>
          <AudioPlayer
            autoPlay={true}
            className="ap"
            layout="stacked-reverse"
            src={playlist[currentMusicIndex].src}
            autoPlayAfterSrcChange={true}
            showSkipControls={true} showJumpControls={true}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            customAdditionalControls={
                [
                    RHAP_UI.LOOP,
                ]
            }
          />

        </Musica>
    </Player>
    </div>
  );
}

export default App;
