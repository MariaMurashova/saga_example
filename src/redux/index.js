const initStore = {
  counter: 88,
  content: []
}



export default function reducer(store = initStore, action) {
  // console.log('  action ==>', action, '  action.payload ', action.payload);
  switch (action.type) {
    case 'INC':
      return { ...store, counter: store.counter + 1 }
    case 'DEC':
      return { ...store, counter: store.counter - 1 }
    case 'ADD_CONTENT':
      const label = action.payload;
      const id = Math.random();
      return { ...store, content: [...store.content, { label, id }] }
    // return { ...store, content: store.content.concat([{ label, id }]) }
    default:
      return store
  }
}
