import React from "react";
import { connect } from "react-redux";
import { createCountry } from "../../../../actions";

import StaffForm from "./StaffForm";

class StaffFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    console.log("a;; the props are:", this.props);
  }

  onSubmit = (formValues) => {
    this.props.createCountry(formValues, this.props.token);
    this.props.handleDialogOpenStatus();
  };
  render() {
    return (
      <div>
        <StaffForm onSubmit={this.onSubmit} userId={this.props.userId} />
      </div>
    );
  }
}

export default connect(null, { createCountry })(StaffFormContainer);
