import NewTodoForm from "../../../components/NewTodoForm";

const DashbaordLayout = ({ children }) => {
  return (
    <>
      <h1>DashbaordLayout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </>
  );
};

export default DashbaordLayout;
