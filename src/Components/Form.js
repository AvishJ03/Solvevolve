import React from "react";
import { useFormik } from "formik";

const Form = ({ schedule, setSchedule }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      start: "",
      end: ""
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      let flag = false;
      schedule.forEach((element) => {
        if (
          element.date === values.date &&
          element.start.slice(0, 2) === values.start.slice(0, 2)
        ) {
          flag = true;
        }
      });
      if (flag) {
        alert("Another event already exists!");
      } else {
        setSchedule((old) => [...old, values]);
        resetForm();
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />

      <label htmlFor="start">start Time</label>
      <input
        id="start"
        name="start"
        type="time"
        onChange={formik.handleChange}
        value={formik.values.start}
      />
      <label htmlFor="end">End Time</label>
      <input
        id="end"
        name="end"
        type="time"
        onChange={formik.handleChange}
        value={formik.values.end}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
