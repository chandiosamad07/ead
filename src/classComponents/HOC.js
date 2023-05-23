import React from 'react';

const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    state = {
      isLoading: true,
    };

    componentDidMount() {
      
      this.setState({ isLoading: false });
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? <div>Loading...</div> : <WrappedComponent {...this.props} />}
        </div>
      );
    }
  }

  return WithLoading;
};

export default withLoading;