const element = (
  <!--Adding a sample container-->
  <div className="main-container">
    <h1 className="main-head">Super Over League</h1>
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="images"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="images"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
