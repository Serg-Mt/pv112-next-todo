import { memo, useCallback, useState } from 'react';
import Button from './Button';
import { useRef } from 'react';

export default memo(function Form({ addItem }) {
  const
    [value, setValue] = useState('-'),
    ref = useRef(''),
    onClick = useCallback(() => { setValue(''); addItem(ref.current); }, [addItem]);

  ref.current = value;

  console.debug('Form render');
  return <fieldset>
    <legend>Form</legend>
    <input value={value} onInput={evt => setValue(evt.target.value)} />
    <Button onClick={onClick}>Add</Button>
  </fieldset >;
});