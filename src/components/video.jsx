import YouTube from 'react-youtube';
import '.././App.css';

export default function Video({ videoToPlay, setVideoToPlay }) {
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  function onVideoEnd(event) {
    setVideoToPlay(null);
  }
  const opts = {
    playerVars: {
      autoplay: 1,
      start: videoToPlay.start,
      end: videoToPlay.end,
    },
  };
  return (
    <div className='App'>
      <YouTube
        videoId={videoToPlay.id}
        opts={opts}
        onReady={onPlayerReady}
        onEnd={onVideoEnd}
      />
    </div>
  );
}
