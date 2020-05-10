import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CloseButton, FullscreenButton, MinifyButton} from './HeaderButton'

const Header = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.height || '32px'};
  background-image: linear-gradient(to bottom, #EDEBED, #E2E0E2, #D7D5D7);
  padding: 3px 13px 3px 13px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  & > *:not(:first-child) {
    margin-left: 8px
  }
`

const Tabs = styled.div`
  display: flex;
  flex: 1;
  height: ${props => props.height || '26px'};
  background-image: linear-gradient(to bottom, #C3C2C4, #BEBEBF);
`

const StyledTab = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1px 4px 0 4px;
  box-sizing: border-box;
  outline: none;
  background-image: ${props => props.isActive && 'linear-gradient(to bottom, #EDEBED, #E2E0E2, #D7D5D7)'};
  background-color:  ${props => !props.isActive && 'rgba(0,0,0,0)'};
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: rgba(0,0,0,0.1);
  &:hover {
    border-color: ${props => !props.isActive && 'rgba(0,0,0,0)'};
    background-color: ${props => !props.isActive && 'rgba(0,0,0,0.1)'};
  }
  &:hover > button:first-child {
    visibility: initial;
  }
`

const Button = styled.button`
  height: ${props => props.length || '18'}px;
  width: ${props => props.length || '18'}px;
  display: flex;
  border-sizing: border-box;
  justify-content: center;
  align-items: ${props => props.alignItems};
  background-color: rgba(0,0,0,0);
  border-width: ${props => props.borderWidth || '0'};
  border-color: rgba(0,0,0,0.1);
  font-size: ${props => props.fontSize || '0.7em'};
  outline: none;
  margin: ${props => props.margin};
  visibility: ${props => props.visibility};
  display: flex;
  color: grey;
  &:hover {
    border-color: ${props => !props.isActive && 'rgba(0,0,0,0)'};
    background-color: ${props => props.isActive ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.1)'};
  }
`

const Title = styled.span`
  font-size: 12px;
  margin: 0;
  margin-top: -2px;
  margin: ${props => props.margin};
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
`
export const Divider = styled.div`
  background-color: rgba(0,0,0,0.1);
  height: 100%;
  width: 1px;
`

export const Tab = ({ isActive, imageUrl, imageAlt, title, onClick, onClose }) => {
  return (
    <StyledTab tabIndex={0} isActive={isActive} onClick={onClick} onKeyPress={onClick}>
      <Button tabIndex={0} isActive={isActive} alignItems={'center'} visibility={'hidden'}onClick={onClose}>
        {'X'}
      </Button>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {imageUrl && <img height={'16px'} width={'16px'} src={imageUrl} alt={imageAlt} />}
        {typeof title === 'string'
          ? (<Title margin={'0 6px 0 6px'} isActive={isActive}>
            {title}
          </Title>) : title}
      </div>
      <Button alignItems={'center'} visibility={'hidden'}>
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
  <Button length={28} borderWidth={'1px 0 1px 0'} {...props}>
    {'+'}
  </Button>
)

function Safari({ showHeader, tabs, children, tabEnd, onClose, onMinifyClick, onFullscreenClick }) {
  return (
    <React.Fragment>
      {!showHeader && (
        <Header>
          <CloseButton onClick={onClose} />
          <MinifyButton onClick={onMinifyClick} />
          <FullscreenButton onClick={onFullscreenClick} />
        </Header>
      )}
      <Tabs showHeader={showHeader}>
        {tabs}
        {tabEnd}
      </Tabs>
      <div style={{ height: '100%' }}>
        {children}
      </div>
    </React.Fragment>
  )
}

Safari.propTypes = {
  showHeader: PropTypes.bool,
  tabs: PropTypes.node,
  children: PropTypes.node,
  tabEnd: PropTypes.node,
  onClose: PropTypes.func,
  onMinifyClick: PropTypes.func,
  onFullscreenClick: PropTypes.func
}

Safari.defaultProps = {
  showHeader: false,
  tabs: <React.Fragment />,
  tabEnd: <React.Fragment />,
  children: <React.Fragment />,
  onClose: () => {},
  onMinifyClick: () => {},
  onFullscreenClick: () => {}
}

Safari.Divider = Divider
Safari.Tab = Tab
Safari.AddButton = AddButton

export default Safari
