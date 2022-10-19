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
      : "",
    ADDRESS: props.selectedData?.ADDRESS ? props.selectedData.ADDRESS : ""
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
        : "",
      ADDRESS: props.selectedData?.ADDRESS ? props.selectedData.ADDRESS : ""
    });
  }, [props.selectedData?.COMPANY_NAME]);

  useEffect(() => {
    return () => {
      props.updateSelectedData({});
    };
  }, []);

  return (
    <div className="row">
      <div className="col-4 border rounded">
        <h5 className="text-center">User Details</h5>
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
            if (!values.ADDRESS) {
              errors.ADDRESS = "Address is Required";
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
            <form onSubmit={handleSubmit}>
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                name="COMPANY_NAME"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.COMPANY_NAME}
              />
              <div className="text-danger">
                {errors.COMPANY_NAME &&
                  touched.COMPANY_NAME &&
                  errors.COMPANY_NAME}
              </div>
              <label>Company ID</label>
              {props.source !== "newCompany" && (
                <span class="form-text text-muted">
                  {" "}
                  (Id disabled while editing)
                </span>
              )}
              <input
                type="text"
                className="form-control"
                name="COMPANY_ID"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.COMPANY_ID}
                disabled={props.source === "newCompany" ? false : true}
              />
              <div className="text-danger">
                {errors.COMPANY_ID && touched.COMPANY_ID && errors.COMPANY_ID}
              </div>
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name="ADDRESS"
                placeholder="Please enter address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ADDRESS}
              />
              <div className="text-danger">
                {errors.ADDRESS && touched.ADDRESS && errors.ADDRESS}
              </div>
              <label>Coordinates</label>
              <input
                type="text"
                className="form-control"
                name="COORDINATES"
                placeholder="Latitude,Longitude"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.COORDINATES}
              />
              <div className="text-danger">
                {errors.COORDINATES &&
                  touched.COORDINATES &&
                  errors.COORDINATES}
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-2 mb-2"
                disabled={isSubmitting}
              />
              {props.source !== "newCompany" && (
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                      props.deleteCompany({ COMPANY_ID: values.COMPANY_ID })
                    }
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mt-2"
                    onClick={() => props.updateUserList(true)}
                  >
                    View Employees
                  </button>
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
      {props.source !== "newCompany" && props.showUserList && (
        <div className="col-2 border">
          <Employee
            {...props}
            EmployeeList={EmployeeList}
            updateEmployeeList={updateEmployeeList}
          />
        </div>
      )}
      {props.source !== "newCompany" && (
        <div className="col-6">
          {
            <>
              <MapChart {...props} />
              <div className=" text-center fw-bold text-success">
                {props.selectedData?.ADDRESS}
              </div>
            </>
          }
        </div>
      )}
    </div>
  );
}

export default FormData;
