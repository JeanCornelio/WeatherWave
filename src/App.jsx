
import './App.css'
import { Header } from './ui'

function App() {


  return (
    <div className=''>
      <Header/>
      <main className=' flex justify-center'>
      <div id="hero" className='h-[500px] bg-sky-blue-400 rounded-2xl w-full container flex items-center justify-between px-4'>
      <div className='flex flex-col gap-4 justify-start   w-[400px] '>
        <h1 className='text-5xl font-bold  text-white'>Santo Domingo</h1>
          <div className='flex justify-between text-white '>
            <p>Monday, May 23</p>
            <p>Update As Of 2:45 PM</p>
          </div>
          <div className=' bg-white rounded-2xl grid grid-cols-2 gap-4 text-dark p-8  '>
            <div className='flex gap-4 items-center'>
              <div className='bg-sky-blue-800 flex p-2 rounded-md'>
              <span className="icon-[mdi--weather-windy] text-white" />
              </div>
              <p>Wind 3km/h</p>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='bg-sky-blue-800 flex p-2 rounded-md'>
              <span className="icon-[mdi--weather-windy] text-white" />
              </div>
              <p>Wind 3km/h</p>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='bg-sky-blue-800 flex p-2 rounded-md'>
              <span className="icon-[mdi--weather-windy] text-white" />
              </div>
              <p>Wind 3km/h</p>
            </div>
             <div className='flex gap-4 items-center'>
              <div className='bg-sky-blue-800 flex p-2 rounded-md'>
              <span className="icon-[mdi--weather-windy] text-white" />
              </div>
              <p>Wind 3km/h</p>
            </div>
        </div> 
        </div>  
        <div className='bg-white shadow-md p-4 w-[220px] h-[320px] rounded-2xl flex flex-col items-baseline gap-4  px-3'>
          <p className='bg-sky-blue-300 rounded-3xl px-4 py-1 text-white '> Today</p>
        <h1 className='text-5xl font-bold text-sky-blue-600 self-center'>23 C</h1>
          <div className='flex justify-between'>
            <p>23 c</p>
            <p>-31 c</p>
          </div>
        </div> 
      </div>
      </main>
     
    </div>
  )
}

export default App
