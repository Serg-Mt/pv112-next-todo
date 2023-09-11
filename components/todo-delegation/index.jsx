import { useCallback, useState } from 'react';
import Form from './Form';
import { createItem } from './Item';
import List from './List';

export default function ToDoApp() {
  const
    [list, setList] = useState([createItem('111'), createItem('222')]),
    addItem = useCallback(text => setList(old => old.concat(createItem(text))), []),
    delItem = id => setList(old => old.filter(item => id !== item.id)),
    // ref = useRef([]),
    toggleCheckbox = id => {
      const
        index = list.findIndex(item => id === item.id),
        { checked, ...rest } = list[index];
      setList(list.with(index, { ...rest, checked: !checked }));
    },
    onClick = evt => {
      const
        id = +evt.target.closest('li[data-id]')?.dataset?.id,
        checkbox = evt.target.closest('input[type=checkbox]'),
        delButton = evt.target.closest('button.del-button');
      console.log('id=', id, checkbox, delButton);

      switch (true) {
        case !!checkbox:
          toggleCheckbox(id);
          return;
        case !!delButton:
          delItem(id);
          return;
      }
    };


  return <>
    <Form addItem={addItem} />
    <div onClick={onClick}>
      <List list={list} />
    </div>
  </>;
}