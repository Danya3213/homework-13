import { Component } from "react";
import "./index.scss";
import Modal from "./Modal/Modal";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      closed: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ open: true });
  };

  handleCloseModal = () => {
    this.setState({ open: false });
  };

  handleOnCloseModal = () => {
    this.setState({ closed: true });

    setTimeout(() => {
      this.setState({ closed: false });
    }, 1500);
  };

  render() {
    return (
      <section>
        <button className="wrapper__button" onClick={this.handleOpenModal}>
          {this.state.closed ? "You close modal" : "Open modal"}
        </button>
        {this.state.open ? (
          <Modal
            onClick={this.handleCloseModal}
            onClose={this.handleOnCloseModal}
          />
        ) : (
          ""
        )}
      </section>
    );
  }
}
