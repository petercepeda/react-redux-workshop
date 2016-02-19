import React, { Component, PropTypes } from 'react'
import Toggle from './Toggle'
import css from '../styles/settings'

export default class Settings extends Component {
  render() {
    return (
      <div className={css.settings}>
        <h1 className={css.heading}>Settings</h1>
      </div>
    )
  }
}
