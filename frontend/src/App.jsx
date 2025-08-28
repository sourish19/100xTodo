import TodoLayout from './layouts/TodoLayout'
import { TaskStats, TaskCards, AddTasks } from './components'

const App = () => {
  return (
    <TodoLayout>
      <div>
        <AddTasks />
        <TaskCards />
      </div>
      <TaskStats
        fieldNumber={[
          { name: 'Total Tasks', color: 'bg-red-400' },
          { name: 'Complete Tasks', color: 'bg-purple-400' },
          { name: 'Delete Tasks', color: 'bg-blue-400' },
        ]}
      />
    </TodoLayout>
  )
}

export default App
