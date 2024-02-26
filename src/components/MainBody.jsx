import React from "react";
import image1 from '../images/room2.jpg'
import image2 from '../images/room1.jpg'
import image3 from '../images/room3.jpg'

function MainBody() {
  return (
    <div className="container">
      <div className=" container py-5 cc">
        <h2 className="text-center rh1 mb-5 cc1">Accommodations</h2>
        <div className="row">
          <div className="col-lg-4 pb-2">
            <img src={image1} alt="" className="smm"/>
            <div className="smm mt-3 p-2">
              <p className="p1">2 adults | 1 child below 7</p>
              <h3 className="chh">De Luxe Room</h3>
              <p className="p1">from $189 a night</p>
            </div>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image2} alt="" className="smm"/>
            <div className="smm  mt-3 p-2">
              <p className="p1">2 adults | 1 child below 7</p>
              <h3 className="chh">De Luxe Sea View</h3>
              <p className="p1">from $209 a night</p>
            </div>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image3} alt="" className="smm"/>
            <div className="smm mt-3 p-2">
              <p className="p1">4 adults | 2 children below 7</p>
              <h3 className="chh">The Wellhall Family Suite</h3>
              <p className="p1">from $399 a night</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MainBody;
