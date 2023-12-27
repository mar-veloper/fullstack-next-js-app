import Script from 'next/script'
import React from 'react'

const GoogleAnaliticsScript = () => {
  return (
    <Script strategy="afterInteractive">{`
  Insert your Google Analytics script here...
  `}</Script>
  )
}

export default GoogleAnaliticsScript
