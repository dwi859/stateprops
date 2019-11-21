import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop';


function App() {
  return (
    <div className="wraperapp">
      <Kursus/>
      <p>contoh state</p>
      <hr/>
     
      <Materi img={require('./props/kursus.png')} des="belajar seo" harga="120000"/>
      <Materi img={require('./props/kursuse.png')} des="belajar google adword" harga="400000"/>
      <Materi img={require('./props/seo.png')} des="belajar React-js" harga="500000"/>
    </div>
  );
}

export default App;
