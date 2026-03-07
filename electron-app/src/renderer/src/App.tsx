import Navbar from './components/Navbar'
import './assets/main.css'

function App(): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 p-6 w-full flex-1"></main>
    </div>
  )
}

export default App
