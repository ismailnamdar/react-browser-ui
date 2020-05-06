import React from 'react'
import PropTypes from 'prop-types'
import Chrome, { Tab, Divider, AddButton } from './Chrome.js'

const BROWSER_TYPES = {
  CHROME: 'chrome',
  FIREFOX: 'firefox',
  IE: 'ie'
}

const Browser = ({ type, ...rest }) => {
  if (type === BROWSER_TYPES.CHROME) {
    return <Chrome {...rest} />
  }
  if (type === BROWSER_TYPES.FIREFOX) {
    return <React.Fragment>{`${type} is currently not supported`}</React.Fragment>
  }
  if (type === BROWSER_TYPES.IE) {
    return <React.Fragment>{`${type} is currently not supported`}</React.Fragment>
  }
  return <React.Fragment>{` Unknown browser type: ${type}`}</React.Fragment>
}

Browser.propTypes = {
  type: PropTypes.oneOf([BROWSER_TYPES.CHROME])
}

Browser.defaultProps = {
  type: BROWSER_TYPES.CHROME
}

export { Tab, Divider, AddButton }

export default Browser
