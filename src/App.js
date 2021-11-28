import './index.css';
import YouTube from "react-youtube";
import React from "react";
import { react } from '../../../../GoogleDrive/projects/senior-fitness/node_modules/@babel/types/lib';



export class SelectURL extends React.Component {

  constructor(props) {
    super(props);  
    this.state = {
      urls: [4],
      activeurl: "8",
    };    
    this.handleClick = this.handleClick.bind(this);
  }

  // update the active URL by drawing a random element
  updateActiveURL() {
    this.setState({activeurl: this.state.urls[Math.floor(Math.random()*this.state.urls.length)]});
  }

  // get URLs from somewhere
  getURLS() {
    const urls = [1, 22, 333, 4444];
    return urls;
  }


  // when mounting, get URLS
  componentDidMount() {
    const urls = this.getURLS();
    
    this.setState({urls: urls});
    this.setState({activeurl: urls[Math.floor(Math.random()*urls.length)]});
  }  

  handleClick () {
    this.updateActiveURL();
  }

  render ()  {
    return (
      <div>
        <button onClick = {this.handleClick}>  Activate Lasers </button>
        <h1>url: {this.state.activeurl}</h1>
      </div>      
    )
  }

}

export class Video extends React.Component {

  render() {
    const videoUrl = "https://www.youtube.com/watch?v=JAuNs5FnAOU";
    let videoCode;
    if (videoUrl) {
      videoCode = videoUrl.split("v=")[1].split("&")[0];
    }

    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
  
    return (
      <div class = "Video">
          <YouTube
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            opts={opts}
          />
        </div>
    )  
  }
}


/* 
// Render function for Prismic headless CMS pages
function Content() {

  const [videoUrl, setVideoUrl] = React.useState("");
  let videoCode;
  
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }

const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  return (
    <div>
      <div>
        <h1>Video</h1>
        <div></div>
      </div>
      <div>
        <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <div>
          <YouTube
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            opts={opts}
          />
        </div>
      </div>
    </div>
  );
}

export default Content; */
