import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  const addtask = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    const newTask = inputValue
    setTasks([...tasks, newTask])
    setInputValue('')
  }
  const [activeTab, setActiveTab] = useState('all')
  const [activeTaskIndex, setActiveTaskIndex] = useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState('')

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
    setActiveTaskIndex(null)
  }

  const startEdit = (index) => {
    setEditIndex(index)
    setEditValue(tasks[index])
  }

  const saveEdit = (index) => {
    if (editValue.trim() === '') return
    const updatedTasks = [...tasks]
    updatedTasks[index] = editValue
    setTasks(updatedTasks)
    setEditIndex(null)
    setEditValue('')
    setActiveTaskIndex(null)
  }

  const TABS = [
    { id: 'all', label: 'Todas', Icon: IconList },
    { id: 'completed', label: 'Completadas', Icon: IconCheckCircle },
    { id: 'pending', label: 'Pendientes', Icon: IconCircle },
  ];



  function IconList({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    );
  }

  function IconCheckCircle({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );
  }


  function IconCircle({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }


  return (
    <>
      <div className="app-content">
        <div className="todo-container">
          <header className="todo-header">
            <h1 className="h1-todo">mis tareas</h1>
          </header>
        </div>

        <form className="form" onSubmit={addtask}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ej: comprar sensores..."
          />
          <button type="submit">Agregar</button>
        </form>

        {activeTaskIndex !== null && (
          <div
            className="action-sheet-overlay"
            role="presentation"
            onClick={() => setActiveTaskIndex(null)}
          >
            <div
              className="action-sheet"
              role="dialog"
              aria-modal="true"
              aria-labelledby="action-sheet-title"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Panel acciÃ³n / Action panel */}
              {editIndex === activeTaskIndex ? (
                <div className="action-sheet__panel">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    placeholder="Editar tarea..."
                    className="action-sheet__input"
                    autoFocus
                  />
                  <div className="action-sheet__separator" />
                  <button
                    type="button"
                    className="action-sheet__btn"
                    onClick={() => saveEdit(activeTaskIndex)}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="action-sheet__btn"
                    onClick={() => {
                      setEditIndex(null)
                      setEditValue('')
                    }}
                  >
                    Cancelar EdiciÃ³n
                  </button>
                </div>
              ) : (
                <div className="action-sheet__panel">
                  <p id="action-sheet-title" className="action-sheet__title">
                    {activeTaskIndex !== null && tasks[activeTaskIndex]}
                  </p>
                  <div className="action-sheet__separator" />
                  <button
                    type="button"
                    className="action-sheet__btn"
                    onClick={() => {
                      alert('Completada')
                      setActiveTaskIndex(null)
                    }}
                  >
                    Completada
                  </button>
                  <button
                    type="button"
                    className="action-sheet__btn"
                    onClick={() => startEdit(activeTaskIndex)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="action-sheet__btn action-sheet__btn--danger"
                    onClick={() => deleteTask(activeTaskIndex)}
                  >
                    Eliminar
                  </button>
                </div>
              )}

              <button
                type="button"
                className="action-sheet__btn action-sheet__btn--cancel"
                onClick={() => setActiveTaskIndex(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        <ul>
          {tasks.map((task, index) => (
            <div className="div-li-todo">
              <li key={index} className="todo-item">
                <span>{task}</span>
                <button
                  type="button"
                  aria-label="opciones de la tarea"
                  onClick={() => setActiveTaskIndex(index)}
                >
                  opciones
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <nav className="todo-navbar" aria-label="Filtrar tareas">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            className={`todo-navbar__tab ${activeTab === id ? 'todo-navbar__tab--active' : ''}`}
            onClick={() => setActiveTab(id)}
            aria-current={activeTab === id ? 'page' : undefined}
          >
            <Icon className="todo-navbar__icon" />
            <span className="todo-navbar__label">{label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}

export default App
