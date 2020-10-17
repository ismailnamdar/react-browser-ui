import React, {useState} from 'react'
import Browser, { Chrome } from 'react-browser-ui'

const { Tab, Divider, AddButton } = Chrome;

function ChromeControlledComponentExample() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('green');
  const tabEnd = (
    <>
      <Divider />
      <AddButton />
    </>
  )
  if (isVisible === false) {
    return (
      <></>
    )
  }
  return (
    <div style={{ width: 600, height: 500, marginTop: 100 }}>
      <Browser
        type={'chrome'}
        showHeader={false}
        activeTabKey={activeTab}
        tabEnd={tabEnd}
        onChange={(key) => {
          console.log(`tab changed to ${key}`);
          setActiveTab(key)
        }}
        onClose={() => setIsVisible(false)}>
        <Tab key={'green'} imageUrl={''} imageAlt={'green tab image'} title={'Green'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
        <Tab key={'blue'} imageUrl={''} imageAlt={'blue tab image'} title={'Blue'}>
          <div style={{ backgroundColor: 'blue', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
      </Browser>
    </div>
  )
}

export default ChromeControlledComponentExample
