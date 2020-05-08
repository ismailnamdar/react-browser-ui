import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SUCCESS_COLOR = '#62C655'
const DANGER_COLOR = '#EC6A5E'
const WARNING_COLOR = '#F5BF4F'

const HeaderButton = styled.button`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${props => props.color};
  border: ${props => props.border};
  box-sizing: border-box;
  box-shadow: ${props => props.boxShadow};
  margin-left: ${props => props.marginLeft}px;
  padding: 0;
`;

const CloseButton = ({ onClick }) => (
  <HeaderButton
    color={DANGER_COLOR}
    border={'0.5px solid #CE5347'}
    boxShadow={'inset 0px 0px 6px #EC6D62'}
    onClose={onClick} />
)

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  onClick: () => {},
};

const MinifyButton = ({ onClick }) => (
  <HeaderButton
    color={WARNING_COLOR}
    marginLeft={8}
    border={'0.5px solid #D6A243'}
    boxShadow={'inset 0px 0px 6px #F5C451'}
    onClick={onClick} />
)

MinifyButton.propTypes = {
  onClick: PropTypes.func,
};

MinifyButton.defaultProps = {
  onClick: () => {},
};

const FullscreenButton = ({ onClick }) => (
  <HeaderButton
    color={SUCCESS_COLOR}
    marginLeft={8}
    border={'0.5px solid #58A942'}
    boxShadow={'inset 0px 0px 6px #68CC58'}
    onClick={onClick} />
)

FullscreenButton.propTypes = {
  onClick: PropTypes.func,
};

FullscreenButton.defaultProps = {
  onClick: () => {},
};

export { CloseButton, MinifyButton, FullscreenButton };

export default HeaderButton;
