import { FC, useState } from 'react';
import { useSetRecoilState } from "node_modules/recoil";
import { todoListState, createToDoItemAction } from 'recoil/todo-atoms';

// Styles
import { CreateToDoItemStyle } from './styled';

// Semantic UI
import { Input, Button } from 'semantic-ui-react';
import { RandomQuote } from '../RandomQuote';

const CreateToDoItem: FC = (): JSX.Element => {

  const [inputValue, setInputValue] = useState("");
  const todoList = useSetRecoilState(todoListState);

  const handleAddItem = () => {

    if (!inputValue.length) {
      console.error('Please enter a value');
      return
    };

    createToDoItemAction(todoList, {
      id: Math.floor(Math.random() * 9999),
      isComplete: false,
      text: inputValue
    });

    // reset local state so another can be added
    setInputValue("");

  };

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => (
    setInputValue(value)
  );

  return (
    <CreateToDoItemStyle>
      <div className="container">
        <div className="left">
          <RandomQuote />
        </div>
        <div className="right">
          <Input type="text" value={inputValue} onChange={handleChange} />
          <Button color='blue' onClick={handleAddItem}>Add</Button>
        </div>
      </div>
    </CreateToDoItemStyle>
  )
}

export { CreateToDoItem }
