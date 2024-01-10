import { VideoPlayer } from './components/VideoPlayer';
import { Options } from './components/Options';
import { Notifications } from './components/Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header text-4xl text-center mb-14">
        <h1 className='py-8 text-4xl font-bold text-white'>Video Chat App</h1>
      </header>
      <VideoPlayer />
      <Options>
          <Notifications />
      </Options>
    </div>
  );
}

export default App;
