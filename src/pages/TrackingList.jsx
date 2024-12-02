import React from "react";
import TrackingListTable from "../components/TrackingListTable";
import { Link } from "react-router-dom";

const TrackingList = () => {
  return (
    <main>
      <Link to="/" className="btn btn-link m-3">
        Вернуться на главную
      </Link>
      <TrackingListTable />
    </main>
  );
};

export default TrackingList;
