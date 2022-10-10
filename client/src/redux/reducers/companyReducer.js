import { COMPANY } from "../types/companyType";

const INITIAL_STATE = {
  CompanyDetails: {}
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANY.UPDATE_COMPANY_DATA:
      return {
        ...state,
        CompanyDetails: action.data
      };

    default:
      return state;
  }
};

export default storeReducer;
