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
        alert("Event added!");
        resetForm();
      }
    }
  });
  return (
    <div className="border-2 rounded-2xl bg-purple-100 sticky top-64 left-0 text-left p-5 mx-2">
      <h1 className="text-3xl font-bold">Add events</h1>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          className="border-2 border-black rounded"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="date">Date: </label>
        <input
          className="border-2 border-black rounded"
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />

        <label htmlFor="start">Start Time: </label>
        <input
          className="border-2 border-black rounded"
          id="start"
          name="start"
          type="time"
          onChange={formik.handleChange}
          value={formik.values.start}
        />
        <label htmlFor="end">End Time: </label>
        <input
          className="border-2 border-black rounded"
          id="end"
          name="end"
          type="time"
          onChange={formik.handleChange}
          value={formik.values.end}
        />

        <button
          className="mx-auto rounded-lg bg-purple-500 hover:bg-purple-600 text-white mt-4 w-20 py-2 border-2 border-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
