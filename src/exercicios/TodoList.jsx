import React, { useState, Fragment } from 'react'
// import './App.css'

function TodoList() {

  const [id, setId] = useState(3)
  const [todoName, setTodoName] = useState("")
  const [editItem, setEditItem] = useState(null)

  const [todos, setTodos] = useState([
    { id: 0, name: "A" },
    { id: 1, name: "B" },
    { id: 2, name: "C" }
  ])

  function deleteItem(id) {
    const r = todos.filter(t => t.id !== id)
    setTodos(r)
  }

  function onEdit(todo) {
    setEditItem({ ...todo })
  }

  function addItem(e) {
    e.preventDefault()
    setTodos([...todos, { id: id, name: todoName }])
    setId(id + 1)
    setTodoName("")
  }

  function onEditItem(e) {
    setEditItem({ ...editItem, name: e.target.value })
  }

  function onDoneEdit() {
    setTodos(
      todos.map(t => {
        if (t.id === editItem?.id) {
          return editItem
        }
        return t
      })
    )
    setEditItem(null)
  }

  return (
    <div>
      <ul>
        {
          todos.map(todo => {
            const isEditing = editItem?.id == todo.id;

            return (
              <li key={todo.id}>
                {
                  !isEditing &&
                  <Fragment>
                    {todo.name}
                  </Fragment>
                }

                {
                  isEditing &&
                  <Fragment>
                    <input
                      // UNCONTROLLED COMPONENT
                      //defaultValue={todo.name}

                      // CONTROLLED COMPONENT
                       value={editItem.name}

                      onChange={onEditItem}
                    />
                  </Fragment>
                }

                {
                  !isEditing &&
                  <button onClick={e => onEdit(todo)} >
                    Edit
                  </button>
                }

                {
                  isEditing &&
                  <button onClick={(e) => onDoneEdit()} >
                    done
                  </button>
                }

                <button onClick={e => deleteItem(todo.id)} >delete</button>
              </li>)
          }
          )
        }
      </ul>

      <form onSubmit={addItem}>
        <input placeholder='Todo name' value={todoName}
          onChange={e => setTodoName(e.target.value)} />
        <button> Add </button>
      </form>
    </div>
  )
}

export default TodoList
