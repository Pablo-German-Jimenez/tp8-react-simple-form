import "./RedBullBcOneBboyHongTenStyleCss.css";
const RedBullBcOneBboyHongTen = ({ videoUrl = "https://www.youtube.com/embed/rUuOsES2X08" }) => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <iframe 
          src={videoUrl}
          title="Red Bull BC One Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default RedBullBcOneBboyHongTen;
