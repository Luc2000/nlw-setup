import { Habit } from "./components/Habits";

function App() {
  return (
    <div className="App">
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={100} />
    </div>
  );
}

export default App;
