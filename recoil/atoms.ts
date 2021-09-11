/**
 * To Do List Atoms
 *
 * @see https://recoiljs.org/docs/api-reference/core/atom
 * @see https://recoiljs.org/docs/api-reference/core/useRecoilState/
 *
 * ==============================================================================================================================
 * ==============================================================================================================================
 * ==============================================================================================================================
 */

import { atom, SetterOrUpdater } from 'node_modules/recoil';

export type TodoItem = {
  id?: number;
  text?: string;
  isComplete?: boolean;
}

/**
 * Defines what the state looks like. Accessible anywhere.
 */
export const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
});

/**
 * Creates a new todo item by accepting the 'useSetRecoilState' as the main param followed by the new data.
 * @param state
 * @param param1
 * @returns
 */
export const createToDoItemAction = (
  state: SetterOrUpdater<TodoItem[]>,
  { id, isComplete, text }: TodoItem,
) => (
  state((oldList) => {
    const updated = [
      ...oldList,
      {
        id,
        isComplete,
        text
      }
    ];
    localStorage.setItem('toDoItems', JSON.stringify(updated));
    return updated
  })
)

/**
 * Updates the todo item state with the 'useSetRecoilState', the ID of the to-be-updated item, and the new data.
 * @param state
 * @param toDoItemID
 * @param updatedItem
 * @returns
 */
export const updateToDoItemAction = (
  state: SetterOrUpdater<TodoItem[]>,
  toDoItemID: number,
  updatedItem: TodoItem,
) => (
  state((oldList) => {
    const updated = oldList.map(item => toDoItemID === item.id ? {
      ...item,
      ...updatedItem
    } : item);
    localStorage.setItem('toDoItems', JSON.stringify(updated));
    return updated;
  })
);

/**
 * Updates all to do items .
 * @param state
 * @param toDoItemID
 * @param updatedItem
 * @returns
 */
export const updateAllToDoItemAction = (
  state: SetterOrUpdater<TodoItem[]>,
  updatedItems: TodoItem[],
) => (
  state(() => {
    localStorage.setItem('toDoItems', JSON.stringify(updatedItems));
    return updatedItems;
  })
);

/**
 * Delete a specific todo item by ID by accepting the 'useSetRecoilState' as the first param followed by the ID of the to-be-deleted item
 * @param state
 * @param toDoItemID
 * @param updatedItem
 * @returns
 */
export const deleteToDoItemAction = (
  state: SetterOrUpdater<TodoItem[]>,
  toDoItemID: number
) => (
  state((oldList) => {
    const updated = oldList.filter(item => toDoItemID != item.id);
    localStorage.setItem('toDoItems', JSON.stringify(updated));
    return updated;
  })
);

/**
 * Nothing fancy.. deletes all to do items.
 * @returns
 */
export const deleteAllToDoItemAction = (state: SetterOrUpdater<TodoItem[]>) => {
  localStorage.setItem('toDoItems', JSON.stringify([]));
  return state(() => [])
};
