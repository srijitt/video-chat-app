import { VideoPlayer } from './components/VideoPlayer';
import { Options } from './components/Options';
import { Notifications } from './components/Notifications';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <VideoPlayer />
      <Options>
          <Notifications />
      </Options>
    </div>
  );
}

export default App;
