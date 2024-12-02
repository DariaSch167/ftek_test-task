import React from "react";
import NewItemForm from "../components/NewItemForm";
import { Link } from "react-router-dom";

const NewItem = () => {
  return (
    <main>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="btn btn-link mx-3 mt-3">
            Вернуться на главную
          </Link>
        </li>
        <li>
          <Link to="/track_list" className="btn btn-link mx-3">
            Перейти к списку доставок
          </Link>
        </li>
      </ul>
      <NewItemForm />
    </main>
  );
};

export default NewItem;
