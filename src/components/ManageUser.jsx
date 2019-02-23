import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../support/css-table/main.css";
import "../support/css-table/util.css";

class ManageUser extends Component {
  state = {
    listUser: [],
    selectedIdEdit: 0
  };

  componentDidMount = () => {
    this.getListUser();
  };

  //get daftar user
  getListUser = () => {
    axios
      .get("http://localhost:1990/api/users")
      .then(res => {
        this.setState({ listUser: res.data, selectedIdEdit: 0 });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //delete user by id
  onBtnDeleteUser = id => {
    if (window.confirm("Yakin dihapus user ini?")) {
      axios
        .delete("http://localhost:1990/api/users/" + id)
        .then(res => {
          this.getListUser();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  //merender list user
  renderListUser = () => {
    var listJSXUser = this.state.listUser.map(
      ({ _id, fullname, phone, verified, email, lastLogin }) => {
        if (_id !== this.state.selectedIdEdit) {
          return (
            <tr key={_id}>
              <td className="column1">{_id.substring(0, 2) + "..."}</td>
              <td className="column2">{fullname}</td>
              <td className="column3">{phone}</td>
              <td className="column4">{verified}</td>
              <td className="column5">{email}</td>
              <td className="column6">{lastLogin}</td>
              <td className="column7">
                <input
                  className="btn btn-danger"
                  type="button"
                  value="Delete"
                  onClick={() => this.onBtnDeleteUser(_id)}
                />
              </td>
            </tr>
          );
        }
      }
    );
    return listJSXUser;
  };

  render() {
    console.log(this.state.listUser);
    if (this.props.username !== "") {
      return (
        <div className="limiter">
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100">
                <div className="col-lg-12 text-center">
                  <h1
                    className="section-heading text-capitalize"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Manage User
                  </h1>
                </div>
                <br />
                <table>
                  <thead>
                    <tr className="table100-head">
                      <th className="column1">ID</th>
                      <th className="column2">Nama User</th>
                      <th className="column3">Telp</th>
                      <th className="column4">Status Verifikasi</th>
                      <th className="column5">Email</th>
                      <th className="column6">Last Login</th>
                      <th className="column7">Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderListUser()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <Redirect to="/login" />;
  }
}

export default ManageUser;
