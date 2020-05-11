import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CloseButton, FullscreenButton, MinifyButton} from './HeaderButton'

const TAB_COLOR = '#54585A'
const TAB_SELECTED_BORDER = '#0080FF'

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
  height: ${props => props.height || '33px'};
  background-color: ${TAB_COLOR};
  padding-right: ${props => !props.showHeader && '13px'};
  padding-left: ${props => !props.showHeader && '13px'};
  border-top-left-radius: ${props => !props.showHeader && '5px'};
  border-top-right-radius: ${props => !props.showHeader && '5px'};
`

const StyledTab = styled.div`
  min-width: ${props => props.maxWidth || '50px'};
  max-width: ${props => props.minWidth || '200px'};
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 8px 0 8px;
  align-items: center;
  box-sizing: border-box;
  border-style: solid;
  border-color: ${props => props.isActive ? TAB_SELECTED_BORDER : TAB_COLOR};
  border-width: 0;
  border-top-width: 2px; 
  outline: none;
  background-color: ${props => props.isActive ? 'white' : 'initial'};
  color: ${props => props.isActive ? 'initial' : 'white'};
  &:hover {
    background-color: ${props => !props.isActive && 'rgba(256,256,256,0.1)'};
  }
`

const Button = styled.button`
  height: ${props => props.length || '20'}px;
  width: ${props => props.length || '20'}px;
  border-radius: 2px; 
  display: flex;
  border-sizing: border-box;
  justify-content: center;
  align-items: ${props => props.alignItems};
  background-color: rgba(0,0,0,0);
  border-width: 0;
  font-size: ${props => props.fontSize || '0.9em'};
  color: ${props => props.isActive ? 'initial' : 'lightgrey'};
  outline: none;
  margin: ${props => props.margin};
  &:hover {
    background-color: ${props => props.isActive ? 'rgba(0,0,0,0.1)' : 'rgba(256,256,256,0.2)'};
  }
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
  color: ${props => props.isActive ? 'initial' : 'lightgrey'};
`
export const Divider = styled.div`
  background-color: #7C7F82;
  height: 100%;
  width: 0.5px;
`

export const Tab = ({ isActive, imageUrl, imageAlt, title, onClick, onClose }) => {
  return (
    <StyledTab tabIndex={0} isActive={isActive} onClick={onClick} onKeyPress={onClick}>
      {imageUrl && <img height={'16px'} width={'16px'} src={imageUrl} alt={imageAlt} />}
      {typeof title === 'string'
        ? (<Title margin={'0 6px 0 6px'} isActive={isActive}>
          {title}
        </Title>) : title}
      <Button tabIndex={0} isActive={isActive} alignItems={'center'} onClick={onClose}>
        {'X'}
      </Button>
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
  imageUrl: undefined,
  imageAlt: '',
  title: '',
  onClick: () => {},
  onClose: () => {}
}

const AddButton = (props) => (
  <Button length={28} margin={'2.5px 0 0 2px'} alignItems={'center'} {...props}>
    {'+'}
  </Button>
)

function Firefox({ showHeader, tabs, children, tabEnd, onClose, onMinifyClick, onFullscreenClick }) {
  return (
    <React.Fragment>
      {showHeader && (
        <Header>
          <CloseButton onClick={onClose} />
          <MinifyButton onClick={onMinifyClick} />
          <FullscreenButton onClick={onFullscreenClick} />
        </Header>
      )}
      <Tabs showHeader={showHeader}>
        {!showHeader && <div style={{ marginTop: 8, marginRight: 46 }}>
          <CloseButton onClick={onClose} />
          <MinifyButton onClick={onMinifyClick} />
          <FullscreenButton onClick={onFullscreenClick} />
        </div>}
        {tabs != null && <Divider />}
        {tabs}
        {tabEnd}
      </Tabs>
      <div style={{ height: '100%' }}>
        {children}
      </div>
    </React.Fragment>
  )
}

Firefox.propTypes = {
  showHeader: PropTypes.bool,
  tabs: PropTypes.node,
  children: PropTypes.node,
  tabEnd: PropTypes.node,
  onClose: PropTypes.func,
  onMinifyClick: PropTypes.func,
  onFullscreenClick: PropTypes.func
}

Firefox.defaultProps = {
  showHeader: false,
  tabs: <React.Fragment />,
  tabEnd: <React.Fragment />,
  children: undefined,
  onClose: () => {},
  onMinifyClick: () => {},
  onFullscreenClick: () => {}
}

Firefox.Divider = Divider
Firefox.Tab = Tab
Firefox.AddButton = AddButton

export default Firefox
