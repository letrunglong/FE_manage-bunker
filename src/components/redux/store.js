import reducer from './reducers'
const { createStore } = require("redux");

const store = createStore(reducer)

export default store