import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, addToNumber} from './store/modules/counterStore'
import { useEffect } from 'react';
import { fetchChannels } from './store/modules/channelStore';

function App() {
  const { count } = useSelector( state => state.counter )
  const { channels } = useSelector( state => state.channels )
  const dispatch = useDispatch(); 
  //使用useEffect出发异步请求执行
  useEffect(() => {
    dispatch(fetchChannels())
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
        {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addToNumber(5))}>+5</button>
      <ul>
        {channels.map(item => 
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
