import React from "react";
import image1 from "../images/homem.jpg";

function Comp1() {
  return (
    <>
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center rh1 mb-5 cc1">
              Welcome to your luxurious home away from home
            </h2>
            <p>
              Write a paragraph that talks about your brand or property here.
              Convince your prospective clients to choose you and your offerings
              by highlighting the qualities that set you apart from the
              competition. Your audience is already on your website, so push a
              little bit harder to seal the deal!
            </p>
          </div>
          <div className="col-lg-6">
            <div className="imm">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bann pb-5 mb-5">
        <div className="container py-5 text-white">
          <h2 className="text-center rh1 mb-5">
          In the Press
          </h2>
          <div className="row pt-5 my-5">
            <div className="col-lg-4 p-5">
              <div className="d-flex flex-column">
              <i class="fa-solid fa-quote-left pb-5"></i>
              <p className="pb-5">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
              <h6>-Santa Solana Post</h6>
              </div>
            </div>
            <div className="col-lg-4 p-5">
              <div className="d-flex flex-column">
              <i class="fa-solid fa-quote-left pb-5"></i>
              <p className="pb-5">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
              <h6>-Santa Solana Post</h6>
              </div>
            </div>
            <div className="col-lg-4 p-5">
              <div className="d-flex flex-column">
              <i class="fa-solid fa-quote-left pb-5"></i>
              <p className="pb-5">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
              <h6>-Santa Solana Post</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comp1;
