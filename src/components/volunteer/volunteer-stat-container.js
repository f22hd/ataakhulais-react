import React, { useEffect, useState } from "react";
import { getStat } from "../../services/volunteer.service";
import Stat from "../../components/volunteer/volunteer-stat";
import constatns from "../../configs/constants";

const initiateStatObj = {
  count: 0,
  subTitle: "",
  text: "",
};

function VolunteerStatContainer() {
  const [specialist, setSpecialist] = useState(initiateStatObj);
  const [volunteers, setVolunteers] = useState(initiateStatObj);

  const loadStat = async () => {
    const res = await getStat();
    if (res.isSuccess) {
      const specObj = {
        count: res.data.specialist,
        subTitle: constatns.content.specialist,
        text: constatns.content.specialistText,
      };
      const volObj = {
        count: res.data.volunteers,
        subTitle: constatns.content.volunteer,
        text: constatns.content.volunteerText,
      };
      setSpecialist(specObj);
      setVolunteers(volObj);
    }
  };

  useEffect(() => {
    loadStat();
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-sm-6 col-10 my-3 stat-card">
        <Stat data={specialist} />
      </div>
      <div className="col-sm-6 col-10 my-3 stat-card">
        <Stat data={volunteers} />
      </div>
    </div>
  );
}

export default VolunteerStatContainer;
