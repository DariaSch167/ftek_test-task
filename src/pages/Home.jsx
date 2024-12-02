import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home_background d-flex justify-content-center vh-100">
      <div className="text-center custom-padding">
        <h1 className="mb-4">Отслеживание грузов транспортной компании</h1>
        <div>
          <Link to="/new_item" className="btn btn-warning me-2">
            Новая посылка
          </Link>
          <Link to="/track_list" className="btn btn-warning">
            Список доставок
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
