import React from "react";
import TrackingListTable from "../components/TrackingListTable";
import { Link } from "react-router-dom";

const TrackingList = () => {
  return (
    <main>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="btn btn-link mx-3 mt-3">
            Вернуться на главную
          </Link>
        </li>
        <li>
          <Link to="/new_item" className="btn btn-link mx-3">
            Оформить новую доставку
          </Link>
        </li>
      </ul>
      <TrackingListTable />
    </main>
  );
};

export default TrackingList;
