import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CloseButton, FullscreenButton, MinifyButton} from './HeaderButton'

const TAB_COLOR = '#ebecee'

const Header = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.height || '20px'};
  background-color: ${props => props.backgroundColor || TAB_COLOR};
  padding: 3px 10px 3px 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  & > *:not(:first-child) {
    margin-left: 8px
  }
`
const Tabs = styled.div`
  display: flex;
  height: ${props => props.height || '42px'};
  // background: linear-gradient(180deg, #DFE1E5 0.6%, #DFE1E5 99.4%);
  background-color: ${TAB_COLOR};
  border-top-left-radius: ${props => !props.borderDisable && '5px'};
  border-top-right-radius: ${props => !props.borderDisable && '5px'};
  padding-right: 13px;
  padding-left: 13px;
`
const Content = styled.div`
  height: 100%;
`
const StyledTab = styled.div`
  min-width: ${props => props.maxWidth || '50px'};
  max-width: ${props => props.minWidth || '200px'};
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 7px;
  padding: 0 8px 0 8px;
  align-items: center;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  outline: none;
  background-color: ${props => props.isActive ? 'white' : 'initial'};
  position: relative;
  margin-left: -1px;
  margin-right: -1px;
  ${props => props.isActive && `
    z-index: 3;
    border-style: solid;
    border-width: 0;
    border-color: white;`}
  ${props => `
    &:hover {
      background-color: ${!props.isActive && (props.hoverColor || '#F2F3F5')};
      z-index: 1;
      width: calc(100% + 2px);
    }
    &:${props.isActive ? '' : 'hover:'}before {
      content: "";
      position: absolute;
      background-color: rgba(0,0,0,0);
      left: -16px;
      bottom: 0;
      height: 8px;
      width: 16px;
      border-bottom-right-radius: 16px;
      box-shadow: 8px 0 0 0 ${props.isActive ? '#ffffff' : '#F2F3F5'};
      z-index: 1;
    }
    &:${props.isActive ? '' : 'hover:'}after {
      content: "";
      position: absolute;
      background-color: rgba(0,0,0,0);
      right: -16px;
      bottom: 0;
      height: 8px;
      width: 16px;
      border-bottom-left-radius: 16px;
      box-shadow: -8px 0 0 0 ${props.isActive ? '#ffffff' : '#F2F3F5'};
      z-index: 1;
    }
  `}
`
export const Divider = styled.div`
  background-color: #7C7F82;
  height: 21px;
  width: 1px;
  margin-top: 14px;
`
const CircleButton = styled.div`
  height: ${props => props.length || '16'}px;
  width: ${props => props.length || '16'}px;
  border-radius: ${props => props.length / 2 || '8'}px;
  font-size: ${props => props.fontSize || '12'}px;
  background-color: ${props => props.color};
  margin: ${props => props.margin};
  display: flex;
  justify-content: center;
  align-items: ${props => props.alignItems};
  outline: none;
  &:hover {
    background-color: ${props => props.hoverColor || 'lightgrey'};
  }
`

const HeaderButtonContainer = styled.div`
  padding-right: 13px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
 
`

const Title = styled.span`
  font-size: 14px;
  margin: 0;
  margin-top: -2px;
  margin: ${props => props.margin};
  flex: 1;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
`

export const Tab = ({ isActive, imageUrl, imageAlt, title, onClick, onClose }) => {
  return (
    <StyledTab tabIndex={0} isActive={isActive} onClick={onClick} onKeyPress={onClick}>
      {imageUrl && <img height={'16px'} width={'16px'} src={imageUrl} alt={imageAlt} />}
      {typeof title === 'string'
        ? (<Title margin={'0 6px 0 6px'}>
          {title}
        </Title>) : title}
      <CircleButton tabIndex={0} alignItems={'center'} onClick={onClose}>
        {'X'}
      </CircleButton>
    </StyledTab>
  )
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

Tab.defaultProps = {
  isActive: false,
  imageUrl: null,
  imageAlt: '',
  title: '',
  onClick: () => {},
  onClose: () => {}
}

export const AddButton = (props) => {
  return (
    <CircleButton tabIndex={0} length={28} fontSize={22} margin={'10px 0 0 8px'} alignItems={"center"} {...props} >
      {'+'}
    </CircleButton>
  )
}

const Chrome = ({ showHeader, tabs, children, tabEnd, onClose, onMinifyClick, onFullscreenClick }) => {
  return (
    <React.Fragment>
      {showHeader && (
        <Header>
          <CloseButton onClick={onClose} />
          <MinifyButton onClick={onMinifyClick} />
          <FullscreenButton onClick={onFullscreenClick} />
        </Header>
      )}
      <Tabs borderDisable={showHeader}>
        {!showHeader && <HeaderButtonContainer>
          <CloseButton onClick={onClose} />
          <MinifyButton onClick={onMinifyClick} />
          <FullscreenButton onClick={onFullscreenClick} />
        </HeaderButtonContainer>}
        {tabs}
        {tabEnd}
      </Tabs>
      <Content>
        {children}
      </Content>
    </React.Fragment>
  )
}

Chrome.propTypes = {
  showHeader: PropTypes.bool,
  tabs: PropTypes.node,
  children: PropTypes.node,
  tabEnd: PropTypes.node,
  onClose: PropTypes.func,
  onMinifyClick: PropTypes.func,
  onFullscreenClick: PropTypes.func
}

Chrome.defaultProps = {
  showHeader: false,
  tabs: <React.Fragment />,
  tabEnd: <React.Fragment />,
  children: <React.Fragment />,
  onClose: () => {},
  onMinifyClick: () => {},
  onFullscreenClick: () => {}
}

Chrome.Divider = Divider
Chrome.Tab = Tab
Chrome.AddButton = AddButton

export default Chrome
