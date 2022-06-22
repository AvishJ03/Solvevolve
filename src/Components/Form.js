import React from "react";
import { useFormik } from "formik";

const Form = ({ setSchedule }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      start: "",
      end: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      setSchedule((old) => [...old, values]);
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
