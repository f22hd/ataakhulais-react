import React from "react";

function CopyRight() {
  return (
    <div>
      <div
        className="row mx-0  py-3"
        style={({ lineHeight: 1 }, { backgroundColor: "#424950" })}
      >
        <div className="col d-flex justify-content-center text-white">
          <span className="inline-block my-auto">للتواصل مع حساب المبادرة</span>
          <a
            href="https://twitter.com/ataakhulais"
            aria-label="Twitter Account"
            rel="noreferrer noopener"
            className="px-2 my-auto text-blue"
            target="_blank"
          >
            <i
              className="fa fa-twitter text-primary"
              style={{ fontSize: "1.3rem" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
