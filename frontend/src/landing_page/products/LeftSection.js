import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">

        <div className="col-6">
          <img src={imageURL}
          alt="Kite" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div >
            <a href={tryDemo} style={{textDecoration:"none"}}> Try Demo <i class="fa-solid fa-arrow-right"> </i> </a>
            <a href={learnMore} style={{ marginLeft: "90px", textDecoration:"none" }}>
              learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google play symbol"/>
            </a>
            
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }} alt="App store symbol"
              />
            </a>
          </div>

        </div>
      </div>
      </div>
  );
}

export default LeftSection;
