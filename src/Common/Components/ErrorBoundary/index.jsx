/* istanbul ignore file */
/* eslint-disable react/prop-types */
import { Component, memo } from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../../../Container/ErrorPage';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
        return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }
  
    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        return hasError ? <ErrorPage /> : children; 
    }
}

ErrorBoundary.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default memo(ErrorBoundary);