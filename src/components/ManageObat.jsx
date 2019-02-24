import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ModalAddProduct from "./ModalAddProduct";
import ModalEditProduct from "./ModalEditProduct";
// import "../support/css/bunting.css";
import "../support/css-table/main.css";
import "../support/css-table/util.css";

class ManageObat extends Component {
  state = {
    judul: "",
    listObat: [],
    selectedIdEdit: 0
  };

  //spy triger func getlistobat setelah render pertama
  componentDidMount = () => {
    this.getListObat();
  };

  //get daftar produk
  getListObat = () => {
    axios
      .get("http://localhost:1990/product")
      .then(res => {
        this.setState({ listObat: res.data, selectedIdEdit: 0 });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onBtnDeleteClick = id => {
    if (window.confirm("Yakin hapus product ini bro?")) {
      axios
        .delete("http://localhost:1990/product/" + id)
        .then(res => {
          this.getListObat();
          alert(`Sukses hapus product ${this.state.judul}`);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  //merender list obat
  renderBodyObat = () => {
    var listJSXObat = this.state.listObat.map((item, index) => {
      return (
        <tr key={item._id}>
          <th scope="row" style={{ textAlign: "center" }}>
            {index + 1}
          </th>
          <td className="column1">{item._id.substring(0, 2) + "..."}</td>
          <td className="column2">{item.judul.substring(0, 10) + "..."}</td>
          <td className="column3">Rp. {item.harga}</td>
          <td className="column4">{item.caraPakai.substring(0, 5) + "..."}</td>
          <td className="column5">
            <img src={item.imageUrl} width="30px" alt={item._id} />
          </td>
          <td className="column6">
            <img src={item.imageUrl1} width="30px" alt={item._id} />
          </td>
          <td className="column7">
            {item.storageInfo.substring(0, 10) + "..."}
          </td>
          <td className="column8">{item.stock}</td>
          <td className="column9">{item.merk}</td>
          <td className="column10">
            {item.deskripsi.substring(0, 20) + "..."}
          </td>
          <td className="column11">
            <ModalEditProduct modalValue={item} />
          </td>
          <td className="column12">
            <input
              className="btn btn-danger"
              type="button"
              value="Delete"
              onClick={() => this.onBtnDeleteClick(item._id)}
            />
          </td>
        </tr>
      );
    });
    return listJSXObat;
  };

  //render pertama
  render() {
    if (this.props.username !== "") {
      return (
        <div className="limiter">
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100">
                <div className="col-lg-12 text-center">
                  <h2
                    className="section-heading text-capitalize"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Manage Obat
                  </h2>
                </div>
                <br />
                <ModalAddProduct buttonLabel="Tambah Obat" />
                <br />
                <table>
                  <thead>
                    <tr className="table100-head">
                      <th className="column0">No.</th>
                      <th className="column1">ID</th>
                      <th className="column2">Nama Obat</th>
                      <th className="column3">Harga</th>
                      <th className="column4">Penggunaan</th>
                      <th className="column5">Gambar</th>
                      <th className="column6">Gambar2</th>
                      <th className="column7">Penyimpanan</th>
                      <th className="column8">Stock</th>
                      <th className="column9">Merk</th>
                      <th className="column10">Deskripsi</th>
                      <th className="column11">Edit</th>
                      <th className="column12">Delete</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderBodyObat()}</tbody>
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

export default ManageObat;
