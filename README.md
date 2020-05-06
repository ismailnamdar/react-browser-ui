# react-browser-ui

> use browser ui components inside your app!

[![NPM](https://img.shields.io/npm/v/react-browser-ui.svg)](https://www.npmjs.com/package/react-browser-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-browser-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import Browser, { Tab, Divider, AddButton } from 'react-browser-ui'

function ExampleComponent () {
  const tabEnd = (
    <>
      <Divider />
      <AddButton />
    </>
  )
  return (
    <div style={{ width: '100%', height: 600 }}>
      <Browser
        type={'chrome'}
        showHeader={false}
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
```

## License

MIT © [ismailnamdar](https://github.com/ismailnamdar)
