import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../support/css-modal-addproduct/main.css";
import "../support/css-modal-addproduct/main.min.css";

class ModalEditProduct extends Component {
  state = {
    modal: false,
    judul: "",
    harga: "",
    caraPakai: "",
    imageUrl: "",
    imageUrl1: "",
    storageInfo: "",
    stock: "",
    merk: "",
    deskripsi: ""
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //handle setelah klik tombol add
  handleAddSubmit = event => {
    event.preventDefault();
    var {
      judul,
      harga,
      caraPakai,
      imageUrl,
      imageUrl1,
      storageInfo,
      stock,
      merk,
      deskripsi
    } = this.state;
    console.log(`
-- SUBMITTING --
${judul}
${harga}
${caraPakai}
${imageUrl}
${imageUrl1}
${storageInfo}
${stock}
${merk}
${deskripsi}`);
    // this.props.addProduct({
    //   judul,
    //   harga,
    //   caraPakai,
    //   imageUrl,
    //   storageInfo,
    //   stock,
    //   merk,
    //   deskripsi
    // });
    axios
      .post("http://localhost:1990/product/addproduct", {
        judul,
        harga,
        caraPakai,
        imageUrl,
        imageUrl1,
        storageInfo,
        stock,
        deskripsi
      })
      .then(res => {
        alert(`Sukses Tambah Product ${this.state.judul}`);
        this.toggle();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.judul !== 0) {
      return (
        <div>
          <Button color="primary" onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            style={{ width: "750px" }}
          >
            <ModalHeader toggle={this.toggle}>Tambah Product Obat</ModalHeader>
            <ModalBody>
              <div className="wrapper wrapper--w790">
                <div className="card card-5">
                  <div className="card-body">
                    <form method="POST">
                      <div className="form-row">
                        <div className="name">Nama Obat</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="judul"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Harga</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="harga"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Cara Pakai</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="caraPakai"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Gambar 1</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="imageUrl"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Gambar 2</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="imageUrl1"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Penyimpanan</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="storageInfo"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Stock</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <input
                                className="input--style-5"
                                type="text"
                                name="stock"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Deskripsi</div>
                        <div className="value">
                          <div className="row row-space">
                            <div className="input-group-desc">
                              <textarea
                                className="input--style-5"
                                type="text"
                                name="deskripsi"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="name">Subject</div>
                        <div className="value">
                          <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                              <select name="subject">
                                <option disabled="disabled" selected="selected">
                                  Choose option
                                </option>
                                <option>Subject 1</option>
                                <option>Subject 2</option>
                                <option>Subject 3</option>
                              </select>
                              <div className="select-dropdown" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddSubmit}>
                Accept
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    return <Redirect to="/manageobat" />;
  }
}

export default ModalEditProduct;
