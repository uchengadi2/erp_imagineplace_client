import React from "react";
import { connect } from "react-redux";
import { createState } from "../../../../actions";

import HOServiceOutletForm from "./HOServiceOutletForm";

class HOServiceOutletFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}

  onSubmit = (formValues) => {
    this.props.createState(formValues, this.props.token);
    this.props.handleDialogOpenStatus();
  };
  render() {
    return (
      <div>
        <HOServiceOutletForm
          onSubmit={this.onSubmit}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default connect(null, { createState })(HOServiceOutletFormContainer);
