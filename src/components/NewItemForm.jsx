import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    departure: "",
    destination: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Название обязательно";
    if (!formData.departure)
      newErrors.departure = "Пункт отправления обязателен";
    if (!formData.destination)
      newErrors.destination = "Пункт назначения обязателен";
    if (!formData.date) newErrors.date = "Дата отправки обязательна";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      alert("Форма успешно отправлена!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Бронирование отправки</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Название
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="departure" className="form-label">
            Пункт отправления
          </label>
          <select
            className={`form-select ${errors.departure ? "is-invalid" : ""}`}
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}>
            <option value="">Выберите пункт отправления</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Новосибирск">Новосибирск</option>
            <option value="Тюмень">Тюмень</option>
            <option value="Екатеринбург">Екатеринбург</option>
            <option value="Другое">Другое</option>
          </select>
          {errors.departure && (
            <div className="invalid-feedback">{errors.departure}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="destination" className="form-label">
            Пункт назначения
          </label>
          <select
            className={`form-select ${errors.destination ? "is-invalid" : ""}`}
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
          <label htmlFor="date" className="form-label">
            Дата отправки
          </label>
          <input
            type="date"
            className={`form-control ${errors.date ? "is-invalid" : ""}`}
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <div className="invalid-feedback">{errors.date}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
