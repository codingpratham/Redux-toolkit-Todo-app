import React from 'react'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'

export const App = () => {
  return (
    <>
    <div className='flex-wrap justify-center items-center h-screen'>

    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App