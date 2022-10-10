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
    <div className="container">
      <h5 className="text-center custom-bg">User Details</h5>
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
          <form onSubmit={handleSubmit} className="text-center">
            <div className="row">
              <div className="col col-12  font-weight-bold">First Name</div>
              <div className="col">
                <input
                  type="text"
                  name="first_name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.first_name && touched.first_name && errors.first_name}
            </div>
            <div className="row">
              <div className="col col-12  font-weight-bold">Last Name</div>
              <div className="col">
                <input
                  type="text"
                  name="last_name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.last_name && touched.last_name && errors.last_name}
            </div>
            <div className="row">
              <div className="col col-12  font-weight-bold">Designation</div>
              <div className="col">
                <input
                  type="text"
                  name="designation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.designation}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.designation && touched.designation && errors.designation}
            </div>
            <div className="row">
              <div className="col col-12 font-weight-bold">Email</div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.email && touched.email && errors.email}
            </div>
            <div className="row">
              <div className="col col-12  font-weight-bold">Status</div>
              <div className="col-12  font-weight-bold">
                <span className="badge badge-color m-1">Active=1</span>
                <span className="badge badge-color m-1">Deactivate=2</span>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="active"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.active}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.active && touched.active && errors.active}
            </div>
            <div className="row">
              <div className="col-12  font-weight-bold">USER ID</div>

              {props.source !== "newUser" && (
                <div className="col-12  font-weight-bold">
                  <span className="badge badge-color m-1">
                    Id disabled while editing
                  </span>
                </div>
              )}

              <div className="col">
                <input
                  type="number"
                  name="user_id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={props.source === "newUser" ? false : true}
                  value={values.user_id}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.user_id && touched.user_id && errors.user_id}
            </div>
            <div className="row">
              <div className="col col-12  font-weight-bold">Date of Birth</div>
              <div className="col">
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dob}
                />
              </div>
            </div>
            <div className="text-danger">
              {errors.dob && touched.dob && errors.dob}
            </div>

            <div className="row">
              <div>
                <input
                  type="submit"
                  className="btn btn-primary row mt-2 mb-2"
                  disabled={isSubmitting}
                />
              </div>
              {props.source !== "newUser" && (
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-danger row mt-2 mb-2"
                    onClick={() =>
                      props.deleteUser({ user_id: values.user_id })
                    }
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormData;
