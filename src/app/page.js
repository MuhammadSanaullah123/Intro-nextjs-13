import Image from "next/image";
import styles from "./page.module.css";
import NewTodoForm from "../../components/NewTodoForm";
const Home = () => {
  return (
    <div>
      <NewTodoForm />
    </div>
  );
};

export default Home;
