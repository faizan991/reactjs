import './App.css';
import React, { useState, useEffect } from 'react'
//import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './components/auth';

import RequireAuth from './components/RequireAuth';

import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Test from './components/test';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/profile';
import Login from './components/Login';
import LIstPosts from './components/LIstPosts';

import NotFound from './components/NotFound';
import NestedRoute from './components/nestedRoute';

const Lazy = React.lazy(() => import('./components/LazyComponent'))
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fatchTasks();
      setTask(taskFromServer)
    }
    getTask()
  }, [])

  // Tasks List
  const fatchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  // Fatch Task
  const fatchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    /* const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id , ...task} */
    setTask([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToggle = await fatchTask(id)
    const upTask = { ...taskToggle, reminder: !taskToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(upTask),
    })

    const data = await res.json()
    console.log(id);
    setTask(
      tasks.map((task) =>
        // task.id === id ? { ...task , reminder: !task.reminder } : task
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <AuthProvider>

        <Header title={'Task Tracker'} onAdd={() => setShowAddTask(!showAddTask)} showTask={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To view'}
        <Test />
        <BRouter>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='about' element={<About />} />
            <Route path='lazy' element={<React.Suspense fallback='Loading........'> <Lazy /> </React.Suspense>} />
            <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='login' element={<Login />} />
            <Route path='list-posts' element={<LIstPosts />} />
            
            <Route path='home' element={<Home />} >
              <Route index element={<NestedRoute />} />
              <Route path='nested-route' element={<NestedRoute />} />
              <Route path=':dynamic' element={<NestedRoute />} /> {/* this is Dynamic Routes  */}
            </Route>


            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
