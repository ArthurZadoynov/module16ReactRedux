import Todo from './components/todo/Todo'
import VisibilityFilter from './components/filter/visibilityFilter'

function App () {

  return (
    <>
      <main>
        <div className="container">
          <h1>Список задач</h1>
          <Todo />
          <VisibilityFilter/>
        </div>
      </main>
    </>
  )
}

export default App
