import logo from './logo.svg';
import './App.css';
import { Fragment, useState, forwardRef, useRef } from 'react';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const openModal = () => {
    setOpen(true);
  }
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
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
        <div className='page-title'>AI News Web Scraper</div>
      </div>
      <div className='article shadow-xl max-w-xl mb-4 flex items-start justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <div className='article-title'>When will the first general AI system be devised, tested, and publicly announced?</div>
          <div className='article-content'>This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.</div>
          <a href='https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/' className='article-link' target='_blank'>Read Article</a>
        </div>
        <Button className='bg-transparent hover:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded' onClick={openModal}>⭐</Button>
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
        <Button className='bg-transparent hover:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded' onClick={openModal}>⭐</Button>
      </div>
      <div className='article shadow-xl max-w-xl mb-4 flex items-start justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <div className='article-title'>Title 3. Tweet</div>
          <div className='article-content'>This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.</div>
          <a href='https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/' className='article-link' target='_blank'>See Tweet</a>
        </div>
        <Button className='bg-transparent hover:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded' onClick={openModal}>⭐</Button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 text-xl">
                          Share this Post
                        </Dialog.Title>
                        <div className="mt-2">
                          <h5 className='flex items-center'>
                            <svg className="h-5 w-5 text-red-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#61dafb"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect x="2" y="9" width="4" height="12" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className='text-lg pl-1'>Linkedin</span>
                          </h5>
                          <div className='flex'>
                            <div className='border flex w-3/4 mr-2'>
                              <p className="text-sm text-gray-500 p-2">
                                This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.
                              </p>
                              <svg className="h-14 w-14 text-red-500" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                            </div>
                            <div className='border flex w-1/4' style={{backgroundImage:`url("./pic.png")`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                            </div>
                          </div>

                        </div>
                        <div className="mt-2">
                          <h5 className='flex items-center'>
                            <svg className="h-5 w-5 text-red-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#61dafb"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect x="2" y="9" width="4" height="12" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className='text-lg pl-1'>Tweet</span>
                          </h5>
                          <div className='flex'>
                            <div className='border flex w-3/4 mr-2'>
                              <p className="text-sm text-gray-500 p-2">
                                This question is a duplicate of this one with a stronger operationalization for artificial general intelligence, and including robotic capabilities. I will copy relevant parts of that question to this one.
                              </p>
                              <svg className="h-14 w-14 text-red-500" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Post
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default App;
