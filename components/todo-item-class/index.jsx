import { useCallback, useState } from 'react';
import Form from './Form';
import { Item } from './Item';
import List from './List';

export default function ToDoApp() {
  const
    [list, setList] = useState([new Item('111'), new Item('222')]),
    addItem = useCallback(text => setList(old => old.concat(new Item(text))), []),
    delItem = useCallback(id => setList(old => old.filter(item => id !== item.id)), []);

  return <>
    <Form addItem={addItem} />
    <List list={list} delItem={delItem} />
  </>;
}