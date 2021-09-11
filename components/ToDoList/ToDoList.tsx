import { FC, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from "node_modules/recoil";
import { todoListState, deleteAllToDoItemAction, updateAllToDoItemAction } from 'recoil/atoms';

// Styles
import { ToDoListStyle } from './styled';
import { ToDoItem } from '../ToDoItem';
import { Button, List } from 'semantic-ui-react'

const ToDoList: FC = (): JSX.Element => {

  const todoList = useRecoilValue(todoListState);
  const setToDo = useSetRecoilState(todoListState);

  // Testing with next, recoil, local storage
  if (process.browser) {
    useEffect(() => {
      updateAllToDoItemAction(
        setToDo,
        JSON.parse(
          localStorage.getItem('toDoItems')!
        )
      )
    }, []);
  }

  return (
    <ToDoListStyle>
      <div className="container">
        <div className="title">
          <h1>To Do List</h1>
          {todoList?.length ?
            <div className="delete-all">
              <Button
                color='red'
                size='mini'
                onClick={() => (
                  deleteAllToDoItemAction(setToDo)
                )}
              >
                Delete All
              </Button>
            </div>
            :
            null
          }
        </div>
        <List divided relaxed className="items">
          {todoList?.length ?
            <>
              {todoList.map((item) => (
                <ToDoItem key={item.id} {...item} />
              ))}
            </> :
            <>
              <div className="no-item">
                <h3>
                  No items found
                </h3>
              </div>
            </>
          }
        </List>
      </div>
    </ToDoListStyle>
  )
}

export { ToDoList }
