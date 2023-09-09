const List = (props) => {

  // eslint-disable-next-line react/prop-types
  const {name, getChild} = props

  const data = [
    {id: 0, name: 'zhangshan'},
    {id: 1, name: 'zhangshan'},
    {id: 2, name: 'zhangshan'},
  ]


  const getName = (e, item) => {
    getChild(e, item)
    // debugger
    console.log(name)
  }

  function handleClick(e, num) {
    console.log(e, num);
  }


  console.log(data)
  // let element = 
  return (
    <>
      <ul>
        {
          data.map(item => {
            return <li onClick={(e) => getName(e, item)} key={item.id}>{item.name}</li>
          })
        }
      </ul>
      <button onClick={(e) => handleClick(e,'111')}>enevt</button>
    </>
  )
}

export default List