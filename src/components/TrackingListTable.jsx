import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCargo } from "../store/trackingSlice";

const TrackingListTable = () => {
  const cargos = useSelector((state) => state.cargos);
  const dispatch = useDispatch();

  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredCargos = cargos.filter((cargo) => {
    if (!selectedStatus) return true;
    return cargo.status === selectedStatus;
  });

  const handleStatusChange = (id, newStatus, departureDate) => {
    const today = new Date();
    const selectedDate = new Date(departureDate);

    if (newStatus === "Доставлен" && selectedDate > today) {
      alert(
        "Невозможно изменить статус на 'Доставлен', так как дата отправки в будущем."
      );
      return;
    }

    dispatch(updateCargo({ id, data: { status: newStatus } }));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Ожидает отправки":
        return "bg-warning text-dark";
      case "В пути":
        return "bg-primary text-white";
      case "Доставлен":
        return "bg-success text-white";
      default:
        return "";
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Список доставок</h2>
      <div className="mb-4">
        <label className="form-label">Фильтровать по статусу:</label>
        <select
          className="form-select"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">Все</option>
          <option value="Ожидает отправки">Ожидает отправки</option>
          <option value="В пути">В пути</option>
          <option value="Доставлен">Доставлен</option>
        </select>
      </div>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Статус</th>
            <th>Пункт отправления</th>
            <th>Пункт назначения</th>
            <th>Дата отправки</th>
          </tr>
        </thead>
        <tbody>
          {filteredCargos.map((cargo) => (
            <tr key={cargo.id}>
              <td>{cargo.id}</td>
              <td>{cargo.name}</td>
              <td>
                <select
                  className={`form-select ${getStatusClass(cargo.status)}`}
                  value={cargo.status}
                  onChange={(e) =>
                    handleStatusChange(
                      cargo.id,
                      e.target.value,
                      cargo.departureDate
                    )
                  }>
                  <option value="Ожидает отправки">Ожидает отправки</option>
                  <option value="В пути">В пути</option>
                  <option value="Доставлен">Доставлен</option>
                </select>
              </td>
              <td>{cargo.origin}</td>
              <td>{cargo.destination}</td>
              <td>{cargo.departureDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackingListTable;
