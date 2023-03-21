import { Component } from "react";
import Error from "../../../components/Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      // error logic
      return <Error />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
