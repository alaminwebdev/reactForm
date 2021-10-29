import React from "react";
import { Route  } from "react-router-dom";
import ControlForm from "./controlForm/ControlForm";
import UncontrolForm from "./unControlForm/UncontrolForm";
import MUIForm from "./MuiForm/MUIForm";


const Body = () => {
  return (
    <div >
      <Route path="/" exact render={() => <ControlForm/>} />
      <Route path="/uncontolform" exact component={UncontrolForm} />
      <Route path="/muiform" exact component={MUIForm} />
    </div>
  );
};

export default Body;
