import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { fetchSmurfs } from "../actions";

function SmurfList(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, [props.smurfs.length]);
  return (
    <div>
      <h1>Smurf Village</h1>
      {props.isLoading ? <h3>Herding all the smurfs...</h3> : null}
      {props.error ? <p>The smurfs seem to be hiding</p> : null}
      {props.smurfs.length > 0 ? (
        <div>
          {props.smurfs.map((smurf) => {
            return <Smurf smurf={smurf} key={smurf.id} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
