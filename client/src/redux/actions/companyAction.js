import { COMPANY } from "../types/companyType";
import axios from "axios";
import { toast } from "react-toastify";

export const updateCompanyData = (data) => {
  return {
    type: COMPANY.UPDATE_COMPANY_DATA,
    data: data
  };
};

export const getCompanyData = () => async (dispatch) => {
  var requestData = {
    method: "GET",
    url: "http://localhost:3000/company/list-company",
    params: {},
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      dispatch(updateCompanyData(response.data));
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const changeCompanyDetails = (data) => async (dispatch) => {
  var requestData = {
    method: "PUT",
    url: "http://localhost:3000/company/update",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getCompanyData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const createCompany = (data) => async (dispatch) => {
  var requestData = {
    method: "GET",
    url: "http://localhost:3000/company/create",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getCompanyData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const deleteCompany = (data) => async (dispatch) => {
  var requestData = {
    method: "DELETE",
    url: "http://localhost:3000/company/delete",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getCompanyData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const removeUserFromCompany = (data) => async (dispatch) => {
  var requestData = {
    method: "DELETE",
    url: "http://localhost:3000/company/remove-user",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getCompanyData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};
