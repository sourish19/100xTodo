import TodoLayout from "./layouts/TodoLayout";
import { TaskStats } from "./components";

const App = () => {
  return (
    <TodoLayout>
      <TaskStats
        fieldNumber={[
          { name: "Total Tasks", color: "bg-red-400" },
          { name: "Complete Tasks", color: "bg-emerald-400" },
          { name: "Delete Tasks", color: "bg-blue-400" },
        ]}
      />
    </TodoLayout>
  );
};

export default App;
