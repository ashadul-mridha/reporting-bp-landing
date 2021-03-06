const FreeTrail = () => {
  
  return (
    <>
      <div className="freetrailwrapper">
        <style jsx>{`
          .freetrailwrapper {
            padding: 40px 0px 30px 0px;
            background-color: #f1f1f1;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-around flex-column flex-lg-row">
                <button className="btnprimary">
                  Start My 30 days free trail
                </button>
                <button className="btnsecondary">schedule my demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrail;
