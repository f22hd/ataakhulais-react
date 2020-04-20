import React, { useEffect, useState } from "react";
import SearchForm from "../components/volunteer/volunteer-search";
import { getList, search } from "../services/volunteer.service";
import VolunteerCard from "../components/volunteer/volunteer-card";
import VolunteerStatContainer from "../components/volunteer/volunteer-stat-container";
import "./landing-page.css";

function LandingPage() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");

  const doSearch = async (text) => {
    const res = await search(text);
    if (!res.isSuccess) {
      setMessage(res.message);
      setList([]);
      return;
    }
    const { list } = res.data;
    if (list.length > 0) {
      setList(res.data.list);
    } else {
      setList([]);
      setMessage("لا توجد نتائج");
    }
  };

  const loadData = async () => {
    const res = await getList();
    if (!res.isSuccess) {
      setMessage(res.message);
      return;
    }

    setList(res.data.list);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <section className="section">
        <VolunteerStatContainer />
      </section>

      <div className="section-volunteers">
        <section className="section pb-0">
          <SearchForm onSearch={doSearch} />
        </section>

        <section className="section py-0">
          <div className="row justify-content-center">
            {list.length > 0 &&
              list.map((v, index) => {
                return (
                  <div key={index} className="col-sm-10 col-lg-4 col-12 my-3">
                    <VolunteerCard volunteer={v} />
                  </div>
                );
              })}

            {message && (
              <h4 className="col-sm-6 text-center text-danger">{message}</h4>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
