import React, { useEffect, useState, Suspense } from "react";
import { getList, search } from "../services/volunteer.service";
import Loading from "../components/loading";
import "./landing-page.css";

const SearchForm = React.lazy(() =>
  import("../components/volunteer/volunteer-search")
);
const VolunteerStatContainer = React.lazy(() =>
  import("../components/volunteer/volunteer-stat-container")
);
const VolunteerCard = React.lazy(() =>
  import("../components/volunteer/volunteer-card")
);
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
        <Suspense fallback={<Loading />}>
          <VolunteerStatContainer />
        </Suspense>
      </section>

      <div className="section-volunteers">
        <section className="section pb-0">
          <Suspense fallback={<Loading />}>
            <SearchForm onSearch={doSearch} />
          </Suspense>
        </section>

        <section className="section py-0">
          <div className="row justify-content-center">
            <Suspense fallback={<div>Loading...</div>}>
              {list.length > 0 &&
                list.map((v, index) => {
                  return (
                    <div key={index} className="col-sm-10 col-lg-4 col-12 my-3">
                      <VolunteerCard volunteer={v} />
                    </div>
                  );
                })}
            </Suspense>

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
