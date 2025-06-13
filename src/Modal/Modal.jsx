import { Component } from "react";
import "./Modal.scss";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentDidMount: false,
      anim: false,
    };
  }

  componentWillUnmount() {
    this.props.onClose();
    window.removeEventListener("keyup", this.handleKeyDown);
  }

  componentDidMount() {
    this.setState({ componentDidMount: true });

    setTimeout(() => {
      this.setState({ componentDidMount: false });
    }, 1000);

    setTimeout(() => {
      this.setState({ anim: true });
    }, 10);
    window.addEventListener("keyup", this.handleKeyDown);
  }

  handleOnClose = () => {
    this.setState({ anim: false });
    setTimeout(() => {
      this.props.onClick();
    }, 300);
  };

  handleKeyDown = (e) => {
    if (e.key === "Escape") {
      this.handleOnClose();
    }
  };

  render() {
    return (
      <>
        <div
          onClick={this.handleOnClose}
          className={`modal${this.state.anim ? " _active" : ""}`}
        >
          <h3 className="modal__title">Modal</h3>
          <h3 className="modal__title--small">
            Click on modal window to close it
          </h3>
          {this.state.componentDidMount ? (
            <h3 className="modal__title--small">
              Component did mount triggered
            </h3>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
