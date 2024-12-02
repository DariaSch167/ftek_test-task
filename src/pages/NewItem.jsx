import React from "react";
import NewItemForm from "../components/NewItemForm";
import { Link } from "react-router-dom";

const NewItem = () => {
  return (
    <main>
      <Link to="/" className="btn btn-link m-3">
        Вернуться на главную
      </Link>
      <NewItemForm />
    </main>
  );
};

export default NewItem;
