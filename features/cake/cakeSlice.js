const { createSlice } = require('@reduxjs/toolkit')

//create the inital state.
const initialState = {
	numberOfCakes: 10,
}

//create the slice.(reducer)
const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: state => {
			state.numberOfCakes--
		},
		restocked: (state, action) => {
			state.numberOfCakes += action.payload
		},
	},
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
