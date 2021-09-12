import { FC, useState } from 'react';
import { useSetRecoilState } from "node_modules/recoil";
import { TodoItem, todoListState, updateToDoItemAction } from 'recoil/todo-atoms';

// Styles
import { ToDoItemStyle } from './styled';
import { List, Input, Button } from 'semantic-ui-react'

interface ToDoItemInterface extends TodoItem { }

const ToDoItem: FC<ToDoItemInterface> = ({
  id,
  isComplete = false,
  text = ''
}): JSX.Element => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>('');

  const todoList = useSetRecoilState(todoListState);

  const handleUpdateItem = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => (
    setNewText(value)
  );

  const handleComplete = () => {
    updateToDoItemAction(todoList, id!, {
      isComplete: true
    })
  };

  const handleUpdateSave = () => {
    updateToDoItemAction(todoList, id!, {
      text: newText
    })
  };

  return (
    <List.Item>
      <List.Icon
        name={isComplete ? 'check circle outline' : 'circle outline'}
        size='large'
        verticalAlign='middle'
      />
      <List.Content>
        <ToDoItemStyle>
          <div className="item">
            <div className="text">
              {editMode ?
                <Input
                  type="text"
                  defaultValue={text}
                  onChange={handleUpdateItem}
                /> :
                <span className={isComplete ? 'complete' : ''}>
                  {text}
                </span>
              }
            </div>
            <div className="button">
              <div className="edit">
                {!isComplete &&
                  <Button
                    color='blue'
                    size='mini'
                    onClick={() => {
                      if (editMode) {
                        handleUpdateSave();
                        setEditMode(false);
                      }
                      else {
                        setEditMode(true);
                      }
                    }}
                  >
                    {!editMode ? 'Edit' : 'Save'}
                  </Button>
                }
              </div>
              <div className="complete">
                {!isComplete && (
                  <Button
                    color='green'
                    size='mini'
                    disabled={editMode}
                    onClick={handleComplete}
                  >
                    Complete
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ToDoItemStyle>
      </List.Content>
    </List.Item>
  )
}

export { ToDoItem }
