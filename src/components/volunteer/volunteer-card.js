import React from "react";
import "./volunteer-card.css";

function VolunteerCard({ volunteer }) {
  const callUrl = `tel:${volunteer.mobileNumber}`;

  const openChat = () => {
    const whatsAppUrl = `https://wa.me/${volunteer.mobileNumber}`;
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className=" mb-1">{volunteer.name}</h5>
        <div className="card-text">
          <h6>{volunteer.specialist}</h6>

          <div className="row my-3">
            <div className="col  text-left">
              <div className="d-flex">
                <i className="fa fa-clock-o my-auto"></i>
                <span className="d-inline-block mt-auto">
                  {volunteer.availableTime} {volunteer?.shiftTime}
                </span>
              </div>
            </div>
            {volunteer.exceptDays && (
              <div className="col">
                <div className="d-flex justify-content-center">
                  <i className="fa fa-ban my-auto"></i>
                  <span className="d-inline-block mt-auto">
                    {volunteer.exceptDays}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="row mt-3">
            <div className="col text-left my-auto">
              <div className="d-flex">
                <i className="fa fa-phone my-auto"></i>
                <a
                  className="link mt-auto"
                  href={callUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {volunteer?.mobileNumber}
                </a>
              </div>
            </div>
            <div className="col my-auto">
              <button
                className="btn btn-sm btn-outline-success btn-chat d-flex m-auto py-2"
                onClick={() => openChat}
              >
                <i className="fa fa-whatsapp  my-auto"></i>
                <div className="inline-block my-auto">بدء المحادثة</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerCard;
