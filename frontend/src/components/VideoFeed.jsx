import "../styles/dashboard.css";

function VideoFeed() {

  return (

    <div className="video-box">

      <h3>Dashcam Feed</h3>

      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/LXb3EKWsInQ"
        title="Dashcam"
        allowFullScreen
      ></iframe>

    </div>

  );
}

export default VideoFeed;