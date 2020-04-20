import React, { useState, useEffect } from "react";
import { add } from "../../services/volunteer.service";
import constants from "../../configs/constants";
import { initTime, getFormattedMobileNumber } from "../../helpers/common";

function VolunteerInvitationForm({ onHide }) {
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [time, setTime] = useState([]);
  const [errors, setError] = useState();

  const init = () => {
    setTime(initTime());
  };
  const getRequestObj = () => {
    let req = data;
    req[
      "availableTime"
    ] = `${req["availableTimeFrom"]} - ${req["availableTimeTo"]}`;
    delete req["availableTimeFrom"];
    delete req["availableTimeTo"];
    req["mobileNumber"] = getFormattedMobileNumber(req["mobileNumber"]);
    return req;
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await add(getRequestObj());
    if (!res.isSuccess) {
      setMessage(JSON.stringify(res.message));
      return;
    }
    onSuccessSubmission();
  };

  const onSuccessSubmission = () => {
    setData({});
    setMessage(constants.content.invitationSubmitted);
    setTimeout(() => {
      onHide();
    }, 800);
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
    const msg = validate(name, value);
    setError({ [name]: msg });
  };

  const validate = (name, value) => {
    switch (name) {
      case "name":
        return !value || value.length < 5
          ? "يجب ان لا يقل الاسم عن 5 أحرف"
          : "";
      case "specialist":
        return !value || value.length < 5
          ? "التخصص مطلوب ويجب ان لا يقل عن 5 احرف"
          : "";
      case "mobileNumber":
        return !value || value.length < 5
          ? "رقم الجوال مطلوب ويجب ان لا يقل عن ارقام"
          : "";
      default:
        return "";
    }
  };

  useEffect(() => {
    init();
  }, []);

  console.log(errors);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">الاسم :</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="الاسم الثلاثي"
            name="name"
            onChange={onChange}
          />

          {errors && errors["name"] ? (
            <p className="text-danger p-1">{errors["name"]}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="specialist">التخصص :</label>
          <input
            type="text"
            className="form-control"
            id="specialist"
            placeholder="اسم التخصص باللغة العربية"
            name="specialist"
            onChange={onChange}
          />
          {errors && errors["specialist"] ? (
            <p className="text-danger p-1">{errors["specialist"]}</p>
          ) : null}
        </div>

        <label htmlFor="mobileNumber">رقم الجوال :</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            dir="ltr"
            id="mobileNumber"
            placeholder="55xxxxxx"
            name="mobileNumber"
            onChange={onChange}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              966
            </span>
          </div>
        </div>

        {errors && errors["mobileNumber"] ? (
          <p className="text-danger p-1">{errors["mobileNumber"]}</p>
        ) : null}

        <div className="row form-group">
          <div className="col-12">
            <p className="mb-0 text-muted">الأوقات المتاح فيها</p>
          </div>
          <div className="col-4">
            <label htmlFor="availableTimeFrom">من :</label>
            <select
              className="form-control"
              name="availableTimeFrom"
              onChange={onChange}
            >
              {time.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label htmlFor="availableTimeTo">إلى :</label>
            <select
              className="form-control"
              name="availableTimeTo"
              onChange={onChange}
            >
              {time.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label>التوقيت :</label>
            <div className="d-flex flex-row justify-content-around mt-2">
              <label className="text-black" htmlFor="shiftTimeMorning">
                <input
                  type="radio"
                  name="shiftTime"
                  id="shiftTimeMorning"
                  value={"مساءً"}
                  onChange={onChange}
                />
                مساءً
              </label>
              <label className="text-black" htmlFor="shiftTimeEvening">
                <input
                  type="radio"
                  id="shiftTimeEvening"
                  name="shiftTime"
                  value={"صباحاً"}
                />
                صباحاً
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exceptDays">الأيام الغير متاح فيها :</label>
          {/* multiple days selection  */}
          <select
            className="form-control"
            name="exceptDays"
            onChange={onChange}
            multiple
          >
            {constants.content.days.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-4 text-center">
            <button
              type="submit"
              disabled={!errors}
              className="btn btn-primary btn-block"
            >
              اضافة
            </button>
          </div>
        </div>

        {message !== "" && (
          <p className="mt-3 text-center text-danger">{message}</p>
        )}
      </form>
    </div>
  );
}

export default VolunteerInvitationForm;
