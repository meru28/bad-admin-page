import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import "../support/css-modal-addproduct/main.css";
import "../support/css-modal-addproduct/main.min.css";

class ModalEditProduct extends Component {
  state = {
    modal: false,
    judul: this.props.modalValue.judul,
    harga: this.props.modalValue.harga,
    caraPakai: this.props.modalValue.caraPakai,
    imageUrl: this.props.modalValue.imageUrl,
    imageUrl1: this.props.modalValue.imageUrl1,
    storageInfo: this.props.modalValue.storageInfo,
    stock: this.props.modalValue.stock,
    merk: this.props.modalValue.merk,
    deskripsi: this.props.modalValue.deskripsi
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // prettier-ignore
  onSubmit = (_id, judul, harga, caraPakai, imageUrl, imageUrl1, storageInfo, stock, deskripsi) => {
    // console.log(`
    // -- SUBMITTING --
    // ${judul}
    // ${harga}
    // ${caraPakai}
    // ${imageUrl}
    // ${imageUrl1}
    // ${storageInfo}
    // ${stock}
    // ${deskripsi}
    // `);
    axios
      .post("http://localhost:1990/product/" + _id, {
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
        // alert(`Sukses update Product ${this.state.judul}`);
        console.log(res);
        this.setState({ modal: !this.state.modal });
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {
      judul,
      harga,
      caraPakai,
      imageUrl,
      imageUrl1,
      storageInfo,
      stock,
      deskripsi
    } = this.state;
    const { _id } = this.props.modalValue;
    if (this.state.judul !== 0) {
      console.log(this.state.judul);
      return (
        <div>
          <Button color="primary" size="sm" onClick={this.toggle}>
            <FiEdit />
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              <span style={{ textAlign: "center" }}>
                <h2>Edit Product</h2>
                <br />
              </span>
              <span style={{ fontWeight: "bolder", color: "red" }}>
                {this.props.modalValue.judul} - (id:{" "}
                {_id.substring(0, 2) + "..."})
              </span>
            </ModalHeader>
            <ModalBody>
              <ListGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Nama Obat</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={"default: " + this.props.modalValue.judul}
                    value={judul}
                    name="judul"
                    onChange={this.handleChange}
                    className="input--style-5"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Harga</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={"default: " + this.props.modalValue.harga}
                    value={harga}
                    name="harga"
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Penggunaan</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={"default: " + this.props.modalValue.caraPakai}
                    value={caraPakai}
                    name="caraPakai"
                    onChange={this.handleChange}
                    className="input--style-5"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Gambar 1</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={"default: " + this.props.modalValue.imageUrl}
                    value={imageUrl}
                    name="imageUrl"
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Gambar 2</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={"default: " + this.props.modalValue.imageUrl1}
                    value={imageUrl1}
                    name="imageUrl1"
                    onChange={this.handleChange}
                    className="input--style-5"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Penyimpanan</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="textarea"
                    placeholder={
                      "default: " + this.props.modalValue.storageInfo
                    }
                    name="storageInfo"
                    value={storageInfo}
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Stock</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="number"
                    placeholder={"default: " + this.props.modalValue.stock}
                    value={stock}
                    name="stock"
                    onChange={this.handleChange}
                    className="input--style-5"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Deskripsi</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="textarea"
                    placeholder={"default: " + this.props.modalValue.deskripsi}
                    value={deskripsi}
                    name="deskripsi"
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </ListGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                size="sm"
                onClick={() =>
                  this.onSubmit(
                    _id,
                    judul,
                    harga,
                    caraPakai,
                    imageUrl,
                    imageUrl1,
                    storageInfo,
                    stock,
                    deskripsi
                  )
                }
              >
                Confirm Changes
              </Button>{" "}
              <Button color="secondary" size="sm" onClick={this.toggle}>
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
