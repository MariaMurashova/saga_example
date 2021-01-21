import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const { counter, content } = useSelector(store => store)


  return (
    <div className="component">
      <h1>APP</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch({ type: 'INC' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: 'FETCH_ON_API', payload: counter })}>FETCH</button>
      <div>
        <ol>
          {content.map(item => <li key={item.id}>{item.label}</li>)}
        </ol>
      </div>
    </div>
  );
}
export default App;
