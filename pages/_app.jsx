import React from 'react'

import '../styles/global.css'

// eslint-disable-next-line react/prop-types
function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
