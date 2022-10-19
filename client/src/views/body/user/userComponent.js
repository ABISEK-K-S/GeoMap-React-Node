import React, { useEffect, useState } from "react";
import Form from "./formComponent";

function User(props) {
  const [user, updateUser] = useState({});
  const [selectedData, updateSelectedData] = useState({});
  const [showForm, updateForm] = useState(false);
  const [source, updateSource] = useState("");

  useEffect(() => {
    props.getUserData();
  }, []);

  useEffect(() => {
    updateUser(props.UserDetails);
  }, [props.UserDetails]);

  const createUser = () => {
    updateSelectedData({});
    updateForm(true);
    updateSource("newUser");
  };

  const handleClick = (currentData) => {
    updateSelectedData(currentData);
    updateForm(true);
    updateSource("");
  };

  return (
    <div className="row">
      <div className="col-3">
        <div className="list-group" id="list-tab" role="tablist">
          {user?.length > 0 &&
            user.map((data, i) => {
              return (
                <li
                  className={`list-group-item  bg-${
                    i % 2 == 0 ? "shade1" : "none"
                  }`}
                  key={data.id}
                  id="list-home-list"
                  onClick={() => handleClick(data)}
                >
                  {i + 1}. {data.first_name} {data.last_name}
                </li>
              );
            })}
        </div>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={() => createUser()}
        >
          Create User
        </button>
      </div>
      <div className="col-4">
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

export default User;
