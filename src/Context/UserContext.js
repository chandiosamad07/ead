import React from 'react'

const UserContext = React.createContext("Chandio")
""
const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export {UserConsumer, UserProvider}