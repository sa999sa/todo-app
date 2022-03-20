import { useState } from "react";
import { List } from "./List";


function App() {
  const [description,setDescription]= useState('initial');
  
  const changeDescription = () => { 
        setDescription('onClick');
  }
  return (
    <div>
      { description }
          <List title="取り扱い言語一覧" />
          <button onClick={() =>changeDescription()}>ボタン</button>
    </div>
  );
}

export default App;
