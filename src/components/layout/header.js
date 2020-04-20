import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <section className="intro text-center section">
        <div className="row">
          <div className="col-sm-4 my-auto">
            <div className="logo"></div>
          </div>
          <div className="col-sm-8 my-auto">
            <h1 className="py-2">مجموعة عطاء الطبية بمحافظة خليص</h1>
            <p className="lead">
              مبادرة مجموعة عطاء الطبية بمحافظة خليص تقدم استشارات طبية مجانية
              في الأوقات المتاحة أدناه
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
