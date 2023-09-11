import { memo } from 'react';

export function createItem(text) {
  return { id: Math.random(), text, checked: false };
}

export default memo(function Item({ item }) {
  console.debug('Item render id=', item.id,);
  return <li data-id={item.id}>
    <input type="checkbox" onChange={() => { }} />
    <span>{item.text}</span>
    <button className='del-button'>❌</button>
  </li>;
});