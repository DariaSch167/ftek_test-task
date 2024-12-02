import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addCargo } from "../store/trackingSlice";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    departureDate: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(formData.departureDate);
    const formErrors = {};

    if (!formData.name) formErrors.name = "Название обязательно.";
    if (!formData.origin) formErrors.origin = "Выберите пункт отправления.";
    if (!formData.destination)
      formErrors.destination = "Выберите пункт назначения.";

    if (!formData.departureDate) {
      formErrors.departureDate = "Дата отправки обязательна.";
    } else if (selectedDate < today.setHours(0, 0, 0, 0)) {
      formErrors.departureDate =
        "Дата отправки не может быть раньше сегодняшнего дня.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const generateId = () => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      return `CARGO${randomNum}`;
    };

    const cargoData = {
      ...formData,
      id: generateId(),
      status: "Ожидает отправки",
    };

    console.log("Форма успешно отправлена:", cargoData);
    dispatch(addCargo(cargoData));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 px-3">
          <h2 className="mb-4">Добавить новый груз</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <label name="name" className="form-label">
                Название
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label name="origin" className="form-label">
                Пункт отправления
              </label>
              <select
                className={`form-select ${errors.origin ? "is-invalid" : ""}`}
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}>
                <option value="">Выберите пункт отправления</option>
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Новосибирск">Новосибирск</option>
                <option value="Тюмень">Тюмень</option>
                <option value="Екатеринбург">Екатеринбург</option>
              </select>
              {errors.origin && (
                <div className="invalid-feedback">{errors.origin}</div>
              )}
            </div>

            <div className="mb-3">
              <label name="destination" className="form-label">
                Пункт назначения
              </label>
              <select
                className={`form-select ${
                  errors.destination ? "is-invalid" : ""
                }`}
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}>
                <option value="">Выберите пункт назначения</option>
                <option value="Луганск">Луганск</option>
                <option value="Донецк">Донецк</option>
                <option value="Свердловск">Свердловск</option>
              </select>
              {errors.destination && (
                <div className="invalid-feedback">{errors.destination}</div>
              )}
            </div>

            <div className="mb-3">
              <label name="departureDate" className="form-label">
                Дата отправки
              </label>
              <input
                type="date"
                className={`form-control ${
                  errors.departureDate ? "is-invalid" : ""
                }`}
                id="departureDate"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
              />
              {errors.date && (
                <div className="invalid-feedback">{errors.departureDate}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary text-white">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
