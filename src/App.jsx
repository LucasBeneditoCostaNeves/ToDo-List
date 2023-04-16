import './App.css';
import { Input } from './components/input';
import { useForm } from "react-hook-form"
import { Header } from './components/header';
import { List } from './components/list';
import { GlobalStyle } from './style/globalStyled';
import { Form } from './components/form';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState([])
  const [checkData, setCheckData] = useState([])

  const filterCheck = (title) => {
    const filter = data.filter((element) => element.text != title)
    setData(filter)
    toast.info("🗑️Tarefa Removida!")
  }

  const addCheck = (elemen) => {
    const filter = data.filter((element) => element.text != elemen.text)
    setData(filter)

    setCheckData([...checkData,elemen])
    toast("🥳Tarefa concluída, Parabéns!")
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Form data={data} setData={setData}/>
      <List title="Tarefas:" array={data} filterCheck={filterCheck} addCheck={addCheck} />
      <List title="Tarefas Concluídas:" array={checkData}  />
      <ToastContainer autoClose="1500"/>
    </div>
  );
}

export default App;
