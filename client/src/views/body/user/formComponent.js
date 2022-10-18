import React, { Component, useEffect, useState } from "react";
import { Formik } from "formik";
import moment from "moment";

function FormData(props) {
  const [initialData, ModifyInitialData] = useState({
    first_name: props.selectedData?.first_name
      ? props.selectedData.first_name
      : "",
    last_name: props.selectedData?.last_name
      ? props.selectedData.last_name
      : "",
    designation: props.selectedData?.designation
      ? props.selectedData.designation
      : "",
    dob: props.selectedData?.dob
      ? moment(props.selectedData.dob).format("YYYY-MM-DD")
      : "",
    user_id: props.selectedData?.user_id ? props.selectedData.user_id : "",
    email: props.selectedData?.email ? props.selectedData.email : "",
    active:
      props.selectedData?.active === 1 || props.selectedData?.active === 2
        ? props.selectedData.active
        : ""
  });

  useEffect(() => {
    ModifyInitialData({
      first_name: props.selectedData?.first_name
        ? props.selectedData.first_name
        : "",
      last_name: props.selectedData?.last_name
        ? props.selectedData.last_name
        : "",
      designation: props.selectedData?.designation
        ? props.selectedData.designation
        : "",
      dob: props.selectedData?.dob
        ? moment(props.selectedData.dob).format("YYYY-MM-DD")
        : "",
      user_id: props.selectedData?.user_id ? props.selectedData.user_id : "",
      email: props.selectedData?.email ? props.selectedData.email : "",
      active:
        props.selectedData?.active == 1 || props.selectedData?.active == 2
          ? props.selectedData.active
          : ""
    });
  }, [props.selectedData.first_name]);

  useEffect(() => {
    return () => {
      props.updateSelectedData({});
    };
  }, []);

  return (
    <div className="row border rounded">
      <h5 className="text-center">User Details</h5>
      <Formik
        enableReinitialize
        initialValues={initialData}
        validate={(values) => {
          const errors = {};
          if (!values.first_name) {
            errors.first_name = "Fisrt Name is Required";
          }
          if (!values.last_name) {
            errors.last_name = "Last Name is Required";
          }
          if (!values.designation) {
            errors.designation = "Designation is Required";
          }
          if (!values.active) {
            errors.active = "Status is Required";
          }
          if (!values.user_id) {
            errors.user_id = "User ID is Required";
          }
          if (!values.dob) {
            errors.dob = "Date of Birth is Required";
          }
          if (!values.email) {
            errors.email = "Email Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            props.source === "newUser"
              ? props.createUser(values)
              : props.changeUserDetails(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          touched
        }) => (
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              id="name"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
            />
            <div className="text-danger">
              {errors.first_name && touched.first_name && errors.first_name}
            </div>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              id="name"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
            />
            <div className="text-danger">
              {errors.last_name && touched.last_name && errors.last_name}
            </div>
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.designation}
            />
            <div className="text-danger">
              {errors.designation && touched.designation && errors.designation}
            </div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="text-danger">
              {errors.email && touched.email && errors.email}
            </div>
            <label>Status</label>
            <div>
              <input
                type="radio"
                name="active"
                className="form-check-input mx-2 mb-3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={1}
                checked={values.active == 1}
              />
              <span>Active</span>
              <input
                type="radio"
                name="active"
                className="form-check-input mx-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={2}
                checked={values.active == 2}
              />
              <span>In-active</span>
            </div>
            <div className="text-danger">
              {errors.active && touched.active && errors.active}
            </div>
            <label>
              USER ID
              {props.source !== "newUser" && (
                <span class="form-text text-muted">
                  {" "}
                  (Id disabled while editing)
                </span>
              )}
            </label>

            <input
              type="number"
              name="user_id"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={props.source === "newUser" ? false : true}
              value={values.user_id}
            />
            <div className="text-danger">
              {errors.user_id && touched.user_id && errors.user_id}
            </div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
            />

            <div className="text-danger">
              {errors.dob && touched.dob && errors.dob}
            </div>
            <input
              type="submit"
              className="btn btn-success form-control my-2"
              disabled={isSubmitting}
            />
            {props.source !== "newUser" && (
              <button
                type="button"
                className="btn btn-danger form-control mt-2 mb-2"
                onClick={() => props.deleteUser({ user_id: values.user_id })}
              >
                Delete
              </button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormData;
