import React, {Children, cloneElement, isValidElement, useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SUCCESS_COLOR = '#62C655'
const DANGER_COLOR = '#EC6A5E'
const WARNING_COLOR = '#F5BF4F'

const Header = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.height || '20px'};
  background-color: ${props => props.backgroundColor || '#ebecee'};
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
  background-color: #ebecee;
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
  background-color: ${props => props.isActive ? 'white' : 'initial'};
  // ${props => props.isActive && `
  //   margin-left: -1px;
  //   margin-right: -1px;
  //   z-index: 1;
  //   border-style: solid;
  //   border-width: 1px;
  //   border-color: white;
  // `}
  &:hover {
    background-color: ${props => !props.isActive && (props.hoverColor || '#F2F3F5')};
    // border-style: solid;
    // border-width: 1px;
    // border-color: white;
    // border-color: ${props => !props.isActive && (props.hoverColor || '#F2F3F5')};
    // margin-left: -1px;
    // margin-right: -1px;
    // z-index: 1;
  }
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

function BrowserHeader({ children }) {
  return (
    <Header>
      <HeaderButton
        color={DANGER_COLOR}
        border={'0.5px solid #CE5347'}
        boxShadow={'inset 0px 0px 6px #EC6D62'} />
      <HeaderButton
        color={WARNING_COLOR}
        border={'0.5px solid #D6A243'}
        boxShadow={'inset 0px 0px 6px #F5C451'} />
      <HeaderButton
        color={SUCCESS_COLOR}
        border={'0.5px solid #58A942'}
        boxShadow={'inset 0px 0px 6px #68CC58'} />
      {children}
    </Header>
  )
}

BrowserHeader.propTypes = {
  children: PropTypes.node,
};

BrowserHeader.defaultProps = {
  children: <React.Fragment />,
};

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
    <CircleButton tabIndex={0} length={28} fontSize={22} margin={'10px 0 0 8px'} {...props} >
      {'+'}
    </CircleButton>
  )
}

const Chrome = ({ activeTabKey, showHeader, children, tabEnd, onClose, onMinifyClick, onFullscreenClick }) => {
  const [activeTab, setActiveTab] = useState(null)
  useEffect(() => {
    setActiveTab(activeTabKey)
  }, [activeTabKey])
  const onClick = (newActiveTab) => {
    setActiveTab(newActiveTab)
  }
  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const modifiedChildren = [cloneElement(child, { ...child.props, isActive: child.key === activeTab, onClick: () => onClick(child.key) })]
      if (index !== children.length - 1) {
        modifiedChildren.push(<Divider />)
      }
      return modifiedChildren
    }

    return child
  })
  return (
    <React.Fragment>
      {showHeader && <BrowserHeader />}
      <Tabs borderDisable={showHeader}>
        {!showHeader && <HeaderButtonContainer>
          <HeaderButton
            color={DANGER_COLOR}
            border={'0.5px solid #CE5347'}
            boxShadow={'inset 0px 0px 6px #EC6D62'}
            onClose={onClose} />
          <HeaderButton
            color={WARNING_COLOR}
            marginLeft={8}
            border={'0.5px solid #D6A243'}
            boxShadow={'inset 0px 0px 6px #F5C451'}
            onClick={onMinifyClick} />
          <HeaderButton
            color={SUCCESS_COLOR}
            marginLeft={8}
            border={'0.5px solid #58A942'}
            boxShadow={'inset 0px 0px 6px #68CC58'}
            onClick={onFullscreenClick} />
        </HeaderButtonContainer>}
        {childrenWithProps}
        {tabEnd}
      </Tabs>
      <Content>
        {Children.map(children, child => {
          if (child.key === activeTab) {
            return child.props.children
          }
          return null
        })}
      </Content>
    </React.Fragment>
  )
}

Chrome.propTypes = {
  activeTabKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showHeader: PropTypes.bool,
  children: PropTypes.node,
  tabEnd: PropTypes.node,
  onClose: PropTypes.func,
  onMinifyClick: PropTypes.func,
  onFullscreenClick: PropTypes.func,
}

Chrome.defaultProps = {
  activeTabKey: undefined,
  showHeader: false,
  tabEnd: <React.Fragment />,
  children: <React.Fragment />,
  onClose: () => {},
  onMinifyClick: () => {},
  onFullscreenClick: () => {},
}

export default Chrome
