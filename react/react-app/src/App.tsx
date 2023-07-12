import React from 'react'
import ListGroup from './components/ListGroup'

const App = () => {
  const items = ["ajklsdghf", "iilahdf", "haisndf"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App;