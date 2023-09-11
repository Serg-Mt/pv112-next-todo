import Item from './Item';


export default function List({ list, delItem }) {
  console.debug('List render');
  return <fieldset>
    <legend>List</legend>
    <ol>
      {list.map(item =>
        <Item key={item.id} item={item} delItem={delItem} />)}
    </ol>
  </fieldset>;
}