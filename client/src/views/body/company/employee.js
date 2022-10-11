import React, { useEffect } from "react";

function Employee(props) {
  useEffect(() => {
    return () => {
      props.updateUserList(false);
    };
  }, []);
  return (
    <ul className="list-group list-group-flush">
      {props.EmployeeList &&
        Object.entries(props.EmployeeList).map((data) => {
          return (
            <li className="list-group-item" key={data[1]}>
              <div className="btn-toolbar justify-content-between">
                <div className="row">
                  <div className="m-2">
                    User:
                    {data[1]}
                  </div>
                  <button
                    type="button"
                    className="m-2 btn btn-danger"
                    onClick={() => {
                      const request = {
                        user_id: data[1],
                        company_id: props.selectedData.COMPANY_ID,
                        user_list: props.selectedData.users
                      };
                      props.removeUserFromCompany(request);
                      props.updateUserList(false);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Employee;
