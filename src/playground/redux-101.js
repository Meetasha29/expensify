import{ createStore,Reducer} from 'redux';

//default state object

const incrementcount=({incrementBy=1}={})=>{
  return{
    type: 'INCREMENT',
    incrementBy
  }
};
const decrementcount=({decrementBy=1}={})=>{
  return{
    type: 'DECREMENT',
    decrementBy
  }
};
const resetcount=()=>{
  return{
    type: 'RESET'
  }
};
const setcount=({count=0}={})=>{
  return{
    type: 'SET',
    count
  }
};
const countReducer=(state={count:0},action)=>{
  switch(action.type){
    case 'INCREMENT':
    return{
      count: state.count+action.incrementBy
    };
    case 'DECREMENT':
    return{
      count: state.count-action.decrementBy
    };
    case 'SET':
    return{
      count: action.count
    };
    case 'RESET':
    return{
      count: 0
    };
    default:
    return state;
  }
};
const store = createStore(countReducer);
const unsubscribe=store.subscribe(()=>{
  console.log(store.getState());
})

//everytime i ca ll dispatch i access the store and state value and change it
store.dispatch(incrementcount({incrementBy:5}));
store.dispatch(decrementcount({decrementBy:5}));
store.dispatch(resetcount());
store.dispatch(setcount({count:101}));
