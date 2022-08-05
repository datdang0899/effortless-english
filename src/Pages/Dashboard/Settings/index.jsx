import React from "react";
import CardImageProfile from "../../../Components/CardImageProfile";
import InputFormSetting from "./InputFormSetting";
import Button from "../../../Components/Common/Button" ; 

function Settings(props) {
  const list = [
    {
      label: "First Name",
    },
    {
      label: "Last Name",
    },
    {
      label: "Birthday",
    },
    {
      label: "Gender",
    },
    {
      label: "Email",
    },
    {
      label: "Phone",
    },
  ];
  return (
    <div className="settings-section">
      <div className="row">
        <div className="settings-general col">
          <h2 className="settings-general_heading">General information</h2>
          <form className="settings-general_form row">
            {list.map((item) => (
              <InputFormSetting
                cols=" col-sm-12 col-md-6 col-lg-4"
                label={item.label}
              />
            ))}
          </form>
          <Button text="save all" bg="skype-color" />
        </div>
        <div className="settings-user col-lg-3 mb-3">
          <CardImageProfile />
        </div>
      </div>
    </div>
  );
}

export default Settings;
