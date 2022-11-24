import { Component } from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // Được thực thi khi bên trong các component của React throw ra 1 javascript error
  static getDerivedStateFromError(error: any) {
    // kết quả return ở đây sẽ được cập nhật cho state
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    // Hiển thị ra UI thay thế nếu ứng dụng bị lỗi
    if (this.state.hasError) {
      return <h1>Something wrong</h1>;
    }

    return this.props.children;
  }
}
