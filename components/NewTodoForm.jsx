import { newTodo } from "../utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
