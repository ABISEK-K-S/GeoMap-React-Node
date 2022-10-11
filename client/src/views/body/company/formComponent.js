import React, { Component, useEffect, useState } from "react";
import { Formik } from "formik";
import MapChart from "./mapChart";
import Employee from "./employee";

function FormData(props) {
  const [EmployeeList, updateEmployeeList] = useState([]);
  const [initialData, ModifyInitialData] = useState({
    COMPANY_NAME: props.selectedData?.COMPANY_NAME
      ? props.selectedData.COMPANY_NAME
      : "",
    COMPANY_ID: props.selectedData?.COMPANY_ID
      ? props.selectedData.COMPANY_ID
      : "",
    COORDINATES: props.selectedData?.COORDINATES
      ? props.selectedData.COORDINATES
      : ""
  });

  useEffect(() => {
    props.selectedData.users &&
      updateEmployeeList(JSON.parse(props.selectedData.users));
  }, [props.selectedData?.users]);

  useEffect(() => {
    ModifyInitialData({
      COMPANY_NAME: props.selectedData?.COMPANY_NAME
        ? props.selectedData.COMPANY_NAME
        : "",
      COMPANY_ID: props.selectedData?.COMPANY_ID
        ? props.selectedData.COMPANY_ID
        : "",
      COORDINATES: props.selectedData?.COORDINATES
        ? props.selectedData.COORDINATES
        : ""
    });
  }, [props.selectedData?.COMPANY_NAME]);

  useEffect(() => {
    return () => {
      props.updateSelectedData({});
    };
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        <h5 className="text-center custom-bg">User Details</h5>
        <Formik
          enableReinitialize
          initialValues={initialData}
          validate={(values) => {
            const errors = {};
            if (!values.COMPANY_NAME) {
              errors.COMPANY_NAME = "Company Name is Required";
            }
            if (!values.COMPANY_ID) {
              errors.COMPANY_ID = "Company ID is Required";
            }
            if (!values.COORDINATES) {
              errors.COORDINATES = "Coordinates is Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              props.source && props.source === "newCompany"
                ? props.createCompany(values)
                : props.changeCompanyDetails(values);
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
                <div className="col col-12  font-weight-bold">Company Name</div>
                <div className="col">
                  <input
                    type="text"
                    name="COMPANY_NAME"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.COMPANY_NAME}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.COMPANY_NAME &&
                  touched.COMPANY_NAME &&
                  errors.COMPANY_NAME}
              </div>
              <div className="row">
                <div className="col col-12  font-weight-bold">Company ID</div>
                {props.source !== "newUser" && (
                  <div className="col-12  font-weight-bold">
                    <span className="badge badge-color m-1">
                      Id disabled while editing
                    </span>
                  </div>
                )}
                <div className="col">
                  <input
                    type="text"
                    name="COMPANY_ID"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.COMPANY_ID}
                    disabled={props.source === "newCompany" ? false : true}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.COMPANY_ID && touched.COMPANY_ID && errors.COMPANY_ID}
              </div>

              <div className="row">
                <div className="col col-12  font-weight-bold">CO-ORDINATES</div>
                <div className="col-12  font-weight-bold">
                  <span className="badge badge-color m-1">Latitude</span>
                  <span className="badge badge-color m-1">Longitude</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="COORDINATES"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.COORDINATES}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.COORDINATES &&
                  touched.COORDINATES &&
                  errors.COORDINATES}
              </div>

              <div className="row">
                <div>
                  <input
                    type="submit"
                    className="btn btn-primary  mt-2 mb-2"
                    disabled={isSubmitting}
                  />
                </div>
                {props.source !== "newCompany" && (
                  <div className="row m-2">
                    <button
                      type="button"
                      className="btn btn-danger mt-2 mb-2"
                      onClick={() =>
                        props.deleteCompany({ COMPANY_ID: values.COMPANY_ID })
                      }
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-success mt-2 mb-2"
                      onClick={() => props.updateUserList(true)}
                    >
                      View Employees
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
      {props.source !== "newCompany" && (
        <div className="col-7">{<MapChart {...props} />}</div>
      )}
      {props.source !== "newCompany" && props.showUserList && (
        <div className="col-1">
          <Employee
            {...props}
            EmployeeList={EmployeeList}
            updateEmployeeList={updateEmployeeList}
          />
        </div>
      )}
    </div>
  );
}

export default FormData;
