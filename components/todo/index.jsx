import { useState, useCallback } from 'react';
import Form from './Form';
import List from './List';
import { createItem } from './Item';
import { useRef } from 'react';

export default function ToDoApp() {
  const
    [list, setList] = useState([createItem('111'), createItem('222')]),
    addItem = useCallback(text => setList(old => old.concat(createItem(text))), []),
    delItem = useCallback(id => setList(old => old.filter(item => id !== item.id)), []),
    ref = useRef([]),
    toggleCheckbox = useCallback(id => {
      const
        index = ref.current.findIndex(item => id === item.id),
        { checked, ...rest } = ref.current[index];
      setList(ref.current.with(index, { ...rest, checked: !checked }));
    }, []);

  ref.current = list;

  return <>
    <Form addItem={addItem} />
    <List list={list} delItem={delItem} toggleCheckbox={toggleCheckbox} />
  </>;
}