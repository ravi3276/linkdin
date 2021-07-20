import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
          {/* HEADER */}
          <Header />

          {/* APPBODY */}

          <div className="app__body">
            <Sidebar />
            <Feed />
          {/* <Wedgets /> */}
          </div>
          {/* SIDEBAR */}

          {/* FEED */}

          {/* WEDGETZ */}
    </div>
  );
}

export default App;
