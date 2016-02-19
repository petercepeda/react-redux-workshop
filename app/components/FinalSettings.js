import React, { Component, PropTypes } from 'react'
import Toggle from './FinalToggle'
import css from '../styles/settings'
import { settings } from '../assets/json/settings'

export default class Settings extends Component {
  state = {
    enabled: []
  };

  render() {
    return (
      <div className={css.settings}>
        <h1 className={css.heading}>Settings</h1>
        {settings.map(this._renderToggle)}
        <div className={css.debug}>
          Enabled: {this.state.enabled.length ? this.state.enabled.join(', ') : 'None'}
        </div>
      </div>
    )
  }

  _renderToggle = ({ id, title }) => {
    const handleEnable = () => {
      this.setState({ enabled: this.state.enabled.concat([id]) })
    }

    const handleDisable = () => {
      const enabled = this.state.enabled.slice()
      enabled.splice(enabled.indexOf(id), 1)
      this.setState({ enabled })
    }

    return (
      <Toggle
        key={id}
        enabledText='Yep'
        disabledText='Nope'
        onEnable={handleEnable}
        onDisable={handleDisable}
      >
        {title}
      </Toggle>
    )
  };
}
