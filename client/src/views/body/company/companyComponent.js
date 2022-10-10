import React, { useEffect, useState } from "react";
import Form from "./formComponent";

function Company(props) {
  const [company, updateCompany] = useState({});
  const [selectedData, updateSelectedData] = useState({});
  const [showForm, updateForm] = useState(false);
  const [source, updateSource] = useState("");
  useEffect(() => {
    props.getCompanyData();
  }, []);

  useEffect(() => {
    updateCompany(props.CompanyDetails);
  }, [props.CompanyDetails]);

  const createCompany = () => {
    updateSelectedData({});
    updateForm(true);
    updateSource("newCompany");
  };

  const handleClick = (currentData) => {
    updateSelectedData(currentData);
    updateForm(true);
    updateSource("");
  };

  return (
    <div className="row">
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          {company?.length > 0 &&
            company.map((data) => {
              return (
                <li
                  className="list-group-item"
                  key={data.id}
                  id="list-home-list"
                  onClick={() => handleClick(data)}
                >
                  {data.COMPANY_NAME}
                </li>
              );
            })}
        </div>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={() => createCompany()}
        >
          Create Company
        </button>
      </div>
      <div className="col-8">
        {showForm && (
          <Form
            {...props}
            selectedData={selectedData}
            updateSelectedData={updateSelectedData}
            source={source}
          />
        )}
      </div>
    </div>
  );
}

export default Company;
