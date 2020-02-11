import { selectTodo } from '../selectors';

describe('Todo - selectors', () => {
  const todos = [
    { id: 1, text: 'text 1' },
    { id: 2, text: 'text 2' }
  ];

  describe('selectTodo', () => {
    it('returns the todo for the given id if it exists', () => {
      expect(selectTodo(todos, 1)).toMatchObject(todos[0]);
    });

    it('returns null if no todo exists in the list', () => {
      expect(selectTodo(todos, 4)).toBeNull();
    });
  });
});
