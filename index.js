const store = require('./app/store')

//we import the actions in the index page.
const { cakeActions } = require('./features/cake/cakeSlice')
//import the icecream actions from the slice page.
const { iceCreamActions } = require('./features/icecream/icecreamSlice')

//log the inital state.
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {})

//dispatch some actions.
//ypu need the actions.
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

//restoke the cakes.
store.dispatch(cakeActions.restocked(3))

//handle the cake requests.
//dispatch some actions.
//ypu need the actions.
store.dispatch(iceCreamActions.orderIceCream())
store.dispatch(iceCreamActions.orderIceCream())

//restoke the cakes.
store.dispatch(iceCreamActions.restockIceCream(2))

//stop the redux cycle.
unsubscribe()
