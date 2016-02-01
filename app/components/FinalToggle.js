import React, { Component, PropTypes } from 'react'
import classnames from 'classnames/bind'
import css from '../styles/toggle'

export default class Toggle extends Component {
  static propTypes = {
    enabledText: PropTypes.string,
    disabledText: PropTypes.string,
    onEnable: PropTypes.func,
    onDisable: PropTypes.func
  };

  static defaultProps = {
    enabledText: 'ON',
    disabledText: 'OFF',
    onEnable() {},
    onDisable() {}
  };

  state = {
    enabled: false
  };

  render() {
    const { enabled } = this.state
    return (
      <div className={css.control} onClick={this._handleClick}>
        <div className={classnames.bind(css)('toggle', { enabled })}>
          {enabled ? this.props.enabledText : this.props.disabledText}
        </div>
        <div className={css.label}>{this.props.children}</div>
      </div>
    )
  }

  _handleClick = (event) => {
    this.setState({ enabled: !this.state.enabled }, () =>
      this.state.enabled ? this.props.onEnable() : this.props.onDisable()
    )
  };
}
