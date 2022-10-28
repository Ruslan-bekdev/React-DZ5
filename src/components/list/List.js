const List = ({array}) => {
  const ListItems = () => {
    return (
      array.map((item) =>
      <li key={item}>{item}</li>)
    )
  }
  return <ul> <ListItems/> </ul>;
}

export default List;