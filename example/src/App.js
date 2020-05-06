import React, { Component } from 'react'

import Browser, { Tab, Divider, AddButton } from 'react-browser-ui'

export default class App extends Component {
  render () {
    const tabEnd = (
      <>
        <Divider />
        <AddButton />
      </>
    );
    return (
      <div style={{ width: '100%', height: 600 }}>
        <Browser
          type={'chrome'}
          showHeader={true}
          activeTabKey={'green'}
          tabEnd={tabEnd}>
          <Tab key={'green'} title={'Green'}>
            <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9 }} />
          </Tab>
          <Tab key={'blue'} title={'Blue'}>
            <div style={{ backgroundColor: 'blue', height: '100%', width: '100%', opacity: 0.9 }} />
          </Tab>
        </Browser>
      </div>
    )
  }
}
