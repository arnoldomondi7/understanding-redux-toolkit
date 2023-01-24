//contains the code related to our redux store.
const { configureStore } = require('@reduxjs/toolkit')

//import the reducers.
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

// //get the logger to work with async functions.
// const reduxLogger = require('redux-logger')
// //get the logger.
// const logger = reduxLogger.createLogger()

//create the store function.
const store = configureStore({
	//this is where we specify all the reducers.
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
		user: userReducer,
	},
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
module.exports = store
