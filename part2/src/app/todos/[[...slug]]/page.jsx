'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const mockTodos = [
  { id: '1', title: 'Acheter du pain' },
  { id: '2', title: 'Lire un livre' },
]

export default function CatchAllTodos() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug || []

  const [todos, setTodos] = useState(mockTodos)
  const [title, setTitle] = useState('')

  // 🚩 Cas : /todos
  if (slug.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Liste des Tâches</h1>
        <ul className="mb-4">
          {todos.map(todo => (
            <li key={todo.id} className="mb-2">
              {todo.title}{' '}
              <button
                onClick={() => router.push(`/todos/${todo.id}/edit`)}
                className="text-blue-500 underline"
              >
                Modifier
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => router.push('/todos/create')}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Nouvelle tâche
        </button>
      </div>
    )
  }

  // 🚩 Cas : /todos/create
  if (slug[0] === 'create') {
    const handleCreate = e => {
      e.preventDefault()
      const newTodo = { id: Date.now().toString(), title }
      setTodos([...todos, newTodo])
      router.push('/todos')
    }

    return (
      <form onSubmit={handleCreate} className="space-y-4">
        <h2 className="text-xl font-bold">Créer une tâche</h2>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2 w-full"
          placeholder="Titre"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>
    )
  }

  // 🚩 Cas : /todos/[id]/edit
  if (slug.length === 2 && slug[1] === 'edit') {
    const todo = todos.find(t => t.id === slug[0])

    const handleEdit = e => {
      e.preventDefault()
      const updated = todos.map(t => (t.id === todo.id ? { ...t, title } : t))
      setTodos(updated)
      router.push('/todos')
    }

    useEffect(() => {
      if (todo) setTitle(todo.title)
    }, [todo])

    if (!todo) return <div>Tâche introuvable</div>

    return (
      <form onSubmit={handleEdit} className="space-y-4">
        <h2 className="text-xl font-bold">Modifier la tâche</h2>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Modifier
        </button>
      </form>
    )
  }

  return <div>Page inconnue</div>
}
