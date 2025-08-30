import TodoLayout from './layouts/TodoLayout'
import { 
  TaskStats, 
  TaskCards, 
  TaskForm, 
  ErrorBoundary, 
  LoadingSpinner, 
  ErrorDisplay 
} from './components'
import { TodoContextProvider } from './context'
import { useTodoManager } from './hooks'
import { TODO_CONFIG } from './constants/todoConfig'

const App = () => {
  // Use custom hook for todo management
  const todoManager = useTodoManager()

  return (

      <TodoContextProvider value={todoManager}>
        <TodoLayout>          
          <div>
            <TaskForm
              mode="add"
              dialogTitle={TODO_CONFIG.FORM.DIALOG_TITLES.ADD}
              dialogDesc={TODO_CONFIG.FORM.DIALOG_DESCRIPTIONS.ADD}
            />
            <TaskCards />
          </div>
          
          <TaskStats
            fields={TODO_CONFIG.STATS.FIELDS}
            stats={todoManager.todoStats}
          />
        </TodoLayout>
      </TodoContextProvider>
  )
}

export default App
