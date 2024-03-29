import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // Set the wrapper ref
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

// Alert if clicked on outside of element

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closePop();
    }
  }

  render() {
    return <div className={this.props.classes} ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}
