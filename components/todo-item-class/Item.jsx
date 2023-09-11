import { memo } from 'react';

export class Item {
  checked = false;

  constructor(text) {
    Object.assign(this, { id: Math.random(), text });
    // this.id = Math.random();
    // this.text = text;
    // this.checked = false;
  }
  toggleCheckbox(){
    this.checked = !this.checked;
  }
}



export default memo(function Item({ item, delItem }) {
  console.debug('Item render id=', item.id,);
  return <li>
    <input type="checkbox" onChange={() => item.toggleCheckbox()} />
    <span>{item.text}</span>
    <button onClick={() => delItem(item.id)}>❌</button>
  </li>;
});