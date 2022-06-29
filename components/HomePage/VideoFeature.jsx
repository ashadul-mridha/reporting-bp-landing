const VideoFeature = () => {
  return (
    <>
      <div className="videoFeatureContainer">
        <style jsx>{`
          .videoFeatureContainer {
            margin: 70px 0px 30px 0px;
          }
          .videoFeatureContainer h2 {
            color: #1c355e;
            font-size: 51px;
            font-weight: 800;
            margin: 20px 0px;
          }
          .videoFeatureContainer p {
            color: #f08c67;
            font-size: 19px;
            font-weight: 500;
            text-align: center;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <iframe
                  width="780"
                  height="455"
                  src="https://www.youtube.com/embed/zvkq9i0BE0k"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-center">
                The flexibility you’ve been looking for.
              </h2>
              <p>
                The only report solution built with a spreadsheet back-office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFeature;
