function App(){
    return (
        <div>
            Hello <b>react</b>
        </div>
    );
}

function App(){
    return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}

import { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <h1>리액트 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </Fragment>
    );
  }
  
  export default App;