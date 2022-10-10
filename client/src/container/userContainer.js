import React from "react";
import UserComponent from "../views/body/user/userComponent";
import {
  getUserData,
  changeUserDetails,
  createUser,
  deleteUser
} from "../redux/actions/userAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    UserDetails: state.userReducer.UserDetails
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (data) => dispatch(getUserData(data)),
    changeUserDetails: (data) => dispatch(changeUserDetails(data)),
    createUser: (data) => dispatch(createUser(data)),
    deleteUser: (data) => dispatch(deleteUser(data))
  };
};

function UserContainer(props) {
  return <UserComponent {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
