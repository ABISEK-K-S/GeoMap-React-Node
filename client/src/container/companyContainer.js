import React from "react";
import CompanyComponent from "../views/body/company/companyComponent";
import {
  changeCompanyDetails,
  createCompany,
  deleteCompany,
  getCompanyData
} from "../redux/actions/companyAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    CompanyDetails: state.companyReducer.CompanyDetails
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyData: (data) => dispatch(getCompanyData(data)),
    createCompany: (data) => dispatch(createCompany(data)),
    changeCompanyDetails: (data) => dispatch(changeCompanyDetails(data)),
    deleteCompany: (data) => dispatch(deleteCompany(data))
  };
};

function CompanyContainer(props) {
  return <CompanyComponent {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);
