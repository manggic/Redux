   * state in Redux comes from reducers 
   * Redux reducer is just a JavaScript function
   * state is immutable and cannot change in place
   * second principle of Redux says the only way to change the state is by sending a signal to the store. This signal is an action.
   * Redux actions are nothing more than JavaScript objects.
   * The type property drives how the state should change and it's always required by Redux. The payload property instead describes what should change, and might be omitted
   * best practice in Redux we wrap every action within a function,Such function takes the name of action creator.
   * When an action is dispatched, the store forwards a message (the action object) to the reducer.
   * depending on the action type, the reducer produces the next state

```
const initialState = {
    articles = []
}


if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
```    
> use concat, slice, or the spread operator for arrays.<br>
> use Object.assign or object spread of objects


* __getState__ :  for reading the current state of the application
* __dispatch__  :  for dispatching an action
* __subscribe__ :  for listening to state changes


```
store.getState();
// output: {articles: Array(0)}

store.subscribe(() => console.log('Look ma, Redux!!'));
//The subscribe method accepts a callback that will fire whenever an action is dispatched. Dispatching an action means notifying the store that we intend to change the state.

store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

```


* There are bindings for joining together Redux with your favorite framework/library,For React there is react-redux.
  
* __connect__ : This method connects a React component with the Redux store.
* __mapStateToProps__ : it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.
* __mapDispatchToProps__ : mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to send messages to the store.
*  

```
function mapDispatchToProps( dispatch ) {
    return {
      addArticle: function(article) {
         dispatch(addArticle(article))
     }
    }  
}

const mapStateToProps = (state) => {
    return{ articles  : state.articles }    
}
```

* the first argument for connect must be null when mapStateToProps is absent like in our example.

```
const Form = connect(null,mapDispatchToProps)(ConnectedForm)
```

* Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer.
* a Redux middleware is a function returning a function, which takes next as a parameter. Then the inner function returns another function which takes action as a parameter and finally returns next(action).
```
function forbiddenWordsMiddleware() {
  return function(next){
    return function(action){
      // do your stuff
      return next(action);
    }
  }
}
```
* If you're interested in reading the next state of the app after the middleware chain runs you can capture it with getState after next(action)
```
function forbiddenWordsMiddleware({ getState, dispatch }) {
  return function(next){
    return function(action){
      // do your stuff
      const nextAction = next(action);
      // read the next state
      const state = getState();
      // return the next action
      return nextAction;  
    }
  }
}
```
# Asynchronous actions in Redux with Redux Thunk
* calling Fetch from an action creator does not work
* That's because Redux is expecting objects as actions, but we're trying to return a Promise.
* With redux-thunk (it's a middleware) we can overcome the problem and return functions from action creators. This way we can call APIs, delay the dispatch of an action, and more

## Modern Redux with Redux Toolkit

* With configureStore from Redux Toolkit we can simplify store creation.
> npm i @reduxjs/toolkit

* configureStore accepts a configuration object where you can define:
 
     - a root reducer, or an object of slices
     - your middleware.
     - optional store enhancers
     - a preloaded state

```
const store  = configureStore({
    reducer: {
         auth : authReducer 
    },
    
    middleware
}  )
```
* createAction
    -  With createAction we can get rid of action creators and named actions to condense all in one place
       
> const loginSuccess = createAction("LOGIN_SUCCESS"); // Creates an action creator
> store.dispatch(loginSuccess("aPayload"))  //Calls the action creator
 
* createReducer
    -  createReducer function from Redux Toolkit takes an initial state, and a mapping object where:
         * properties in this mapping are action types
         * values are reducing function
    - Wait! createReducer really shines when dealing with mutations. Under the hood it uses immer, which allows for writing mutative logic, which in reality does not alter the original object

* createSlice 
    -  It is able to keep everything in a single place: reducers, action creators, state.

```
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

const { loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;
```

* The slice name is the action prefix. For example if I dispatch:
> store.dispatch( loginSuccess("some_asasa_token") )
* The generated action is:
> { type: "auth/loginSuccess", payload: "some_asasa_token" }

* The "case reducers" are the same as a classic switch block of a reducer. This reducer:

```
// classic reducer
function authReducer(state = authState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // return the next state
    case LOGIN_FAILED:
      // return the next state
    default:
      return state;
  }
}
```

* Translates to the reducers key of the slice:
```
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
  }

```
* In exchange createSlice returns action creators:
> const { loginSuccess, loginFailed } = authSlice.actions;
* And a reducer as well:
> const authReducer = authSlice.reducer;

* The reducer is used in configureStore:
```
const authReducer = authSlice.reducer;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});
```







