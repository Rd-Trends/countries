import React, { Component } from "react";
import { styles } from "../style";

interface props {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<props> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          className={` ${styles.elementTextColor} flex flex-col items-center justify-center h-screen [&>p]:text-[1.2rem] [&>p]:mt-2`}
        >
          <span className=" text-[5rem]">Ooops!</span>
          <p>Slow or no internet connection</p>
          <p>Please check your internet settings</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
