import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Typography from "@material-ui/core/Typography";
import history from "../../../../history";
import { fetchCountries } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";
import CountryEdit from "./CountryEdit";
import CountryDelete from "./CountryDelete";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      deleteOpen: false,
      blacklistOpen: false,
      id: null,
      params: {},
    };
  }
  componentDidMount() {
    this.props.fetchCountries(this.props.token);
  }

  handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ deleteOpen: false });
  };

  handleEditDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ editOpen: false });
  };

  renderEditDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          // style={{ zIndex: 1302 }}
          open={this.state.editOpen}
          onClose={() => [
            this.setState({ editOpen: false }),
            history.push("/utilities/countries"),
          ]}
        >
          <DialogContent>
            <CountryEdit
              token={this.props.token}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderDeleteDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.deleteOpen}
          onClose={() => [
            this.setState({ deleteOpen: false }),
            history.push(`/utilities/countries`),
          ]}
        >
          <DialogContent>
            <CountryDelete
              token={this.props.token}
              id={this.state.id}
              handleDialogOpenStatus={this.handleDialogOpenStatus}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderBlackListDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.blacklistOpen}
          onClose={() => [
            this.setState({ blacklistOpen: false }),
            history.push(`/utilities/countries`),
          ]}
        >
          <DialogContent>
            <Typography>This is the blacklist dialog</Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  };
  renderProductList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 100 },
      { field: "name", headerName: "Country Name", width: 200 },
      { field: "code", headerName: "Country Code", width: 200 },
      { field: "continent", headerName: "Continent", width: 200 },
      { field: "region", headerName: "Continent Region", width: 200 },
      { field: "description", headerName: "Description", width: 200 },

      {
        field: "editaction",
        headerName: "",
        width: 30,
        description: "Update row",
        renderCell: (params) => (
          <strong>
            {/* {params.value.getFullYear()} */}
            <EditRoundedIcon
              onClick={() => [
                this.setState({
                  editOpen: true,
                  id: params.id,
                  params: params.row,
                }),
                history.push(`/utilities/countries/edit/${params.id}`),
                console.log("the country row is:", params.row),
              ]}
            />
          </strong>
        ),
      },
      {
        field: "blacklistaction",
        headerName: "",
        width: 30,
        description: "Blacklist country",
        renderCell: (params) => (
          <strong>
            {/* {params.value.getFullYear()} */}
            <CancelRoundedIcon
              style={{ color: "black" }}
              onClick={() => [
                this.setState({ blacklistOpen: true, id: params.id }),
                history.push(`/utilities/countries/blacklist/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
      {
        field: "deleteaction",
        headerName: "",
        width: 30,
        description: "Delete row",
        renderCell: (params) => (
          <strong>
            {/* {params.value.getFullYear()} */}
            <DeleteRoundedIcon
              style={{ color: "red" }}
              onClick={() => [
                this.setState({ deleteOpen: true, id: params.id }),
                history.push(`/utilities/countries/delete/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.countries.map((country) => {
      let row = {
        numbering: ++counter,
        id: country.id,
        name: country.name,
        continent: country.continent,
        region: country.region,
        description: country.description,
        code: country.code,
      };
      rows.push(row);
    });
    return <DataGridContainer columns={columns} rows={rows} />;
  };
  render() {
    return (
      <>
        {this.renderDeleteDialogForm()}
        {this.renderEditDialogForm()}
        {this.renderProductList()}
        {this.renderBlackListDialogForm()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { countries: Object.values(state.country) };
};

export default connect(mapStateToProps, { fetchCountries })(CountryList);
