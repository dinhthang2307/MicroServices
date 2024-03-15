import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order Food</title>
      </Helmet>
          <Navbar />
          {children}
    </React.Fragment>
  )
}
