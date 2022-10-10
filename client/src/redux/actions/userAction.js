import { USER } from "../types/userType";
import axios from "axios";
import { toast } from "react-toastify";

export const updateUserData = (data) => {
  return {
    type: USER.UPDATE_USER_DATA,
    data: data
  };
};

export const getUserData = () => async (dispatch) => {
  var requestData = {
    method: "GET",
    url: "http://localhost:3000/user/list-users",
    params: {},
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      dispatch(updateUserData(response.data));
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const changeUserDetails = (data) => async (dispatch) => {
  var requestData = {
    method: "PUT",
    url: "http://localhost:3000/user/update",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getUserData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const createUser = (data) => async (dispatch) => {
  var requestData = {
    method: "GET",
    url: "http://localhost:3000/user/create",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getUserData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};

export const deleteUser = (data) => async (dispatch) => {
  var requestData = {
    method: "DELETE",
    url: "http://localhost:3000/user/delete",
    params: data,
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      if (response.data.outcome === "success") {
        toast.success(response.data.message);
        dispatch(getUserData());
      }
    })
    .catch(function (error) {
      toast.error(error);
      console.error(error);
    });
};
