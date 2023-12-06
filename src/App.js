import logo from './logo.svg';
import './App.css';
import { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div className="App flex justify-center flex-col max-w-4xl">
      <header className="top-header">
        <div>
          Hey, John.
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput />}
        />
      </header>
      <div>
        <div className='page-title'>AI Dialog -----</div>
      </div>
      <div className='article shadow-xl max-w-xl mb-4 flex items-start justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <div className='article-title'>When will the first general AI system be devised, tested, and publicly announced?</div>
          <div className='article-content'>This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.</div>
          <a href='https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/' className='article-link' target='_blank'>Read Article</a>
        </div>  
        <Button className='bg-transparent hover:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded' data-modal-target="small-modal" data-modal-toggle="small-modal">⭐</Button>
      </div>
      <div className='article shadow-xl max-w-xl mb-4 flex items-start justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <div className='article-title'>Title 2. Video</div>
          <video className="h-full w-full rounded-lg w-3/4" controls>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='article-content'>This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.</div>
          <a href='https://docs.material-tailwind.com/demo.mp4' className='article-link' target='_blank'>Watch Video</a>
        </div>  
        <Button className='bg-transparent hover:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded'>⭐</Button>      
      </div>
      <div className='article shadow-xl max-w-xl mb-4 flex items-start justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <div className='article-title'>Title 3. Tweet</div>
          <div className='article-content'>This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.</div>
          <a href='https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/' className='article-link' target='_blank'>See Tweet</a>
        </div>  
        <Button className='bg-transparent hover:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded'>⭐</Button>      
      </div>
      
    </div>
  );
}

export default App;
