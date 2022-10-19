import React, { useEffect, useState } from "react";
import Form from "./formComponent";

function Company(props) {
  const [company, updateCompany] = useState({});
  const [selectedData, updateSelectedData] = useState({});
  const [showForm, updateForm] = useState(false);
  const [source, updateSource] = useState("");
  const [showUserList, updateUserList] = useState(false);

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
    updateUserList(false);
  };

  return (
    <div className="row">
      <div className="col-2">
        <div className="list-group" id="list-tab" role="tablist">
          {company?.length > 0 &&
            company.map((data, i) => {
              return (
                <li
                  className={`list-group-item  bg-${
                    i % 2 == 0 ? "shade1" : "none"
                  }`}
                  key={data.id}
                  id="list-home-list"
                  onClick={() => handleClick(data)}
                >
                  {i + 1}. {data.COMPANY_NAME}
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
      <div className="col-10">
        {showForm && (
          <Form
            {...props}
            selectedData={selectedData}
            updateSelectedData={updateSelectedData}
            source={source}
            showUserList={showUserList}
            updateUserList={updateUserList}
          />
        )}
      </div>
    </div>
  );
}

export default Company;
