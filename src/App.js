import './App.css';
import { Fragment, useState, forwardRef, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import { Dialog, Transition } from '@headlessui/react'
import YouTube from 'react-youtube';
import "react-datepicker/dist/react-datepicker.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
const moment = require('moment');

var BACKEND_URL = "http://3.238.22.115:5000/api";
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [linkedinContent, setLinkedinContent] = useState("");
  const [linkedinImage, setLinkedinImage] = useState("");
  const [tweetContent, setTweetContent] = useState("");
  const [linkedinCopy, setLinkedinCopy] = useState(false);
  const [tweetCopy, setTweetCopy] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const cancelButtonRef = useRef(null)
  const [youtubeData, setYoutubeData] = useState([]);
  const [deepmindData, setDeepmindData] = useState([]);
  const [zapierData, setZapierData] = useState([]);
  const [automateData, setAutomateData] = useState([]);
  const [makeData, setMakeData] = useState([]);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input bg-sky-300 p-2 rounded-full shadow-lg" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const openDeepmindModal = (index) => {
    setLoading(true);
    console.log("deepmindData: ", deepmindData[index].content)
    fetch(BACKEND_URL + '/getLinkedin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "title": deepmindData[index].title, "content": deepmindData[index].content })
    })
      .then(response => response.json())
      .then(data => {
        console.log("response data: ", data);
        setLinkedinContent(data?.content);
        setLinkedinImage(data?.image[0]?.url);
        fetch(BACKEND_URL + '/getTwitter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "title": deepmindData[index].title, "content": deepmindData[index].content })
        })
          .then(response => response.json())
          .then(data => {
            console.log("response data: ", data);
            setTweetContent(data?.content);
            setOpen(true);
            setLoading(false);
          })
          .catch(error => {
            // Handle any errors
            setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
            setOpen(true);
            setLoading(false);
          });
      })
      .catch(error => {
        // Handle any errors
        setLinkedinContent("This is Linkedin content. There's a problem connecting backend or openai to generate Linkedin Post content.");
        setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
        setOpen(true);
        setLoading(false);
      });
  };
  const openZapierModal = (index) => {
    setLoading(true);
    console.log("zapierData: ", zapierData[index].content)
    fetch(BACKEND_URL + '/getLinkedin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "title": zapierData[index].title, "content": zapierData[index].content })
    })
      .then(response => response.json())
      .then(data => {
        console.log("response data: ", data);
        setLinkedinContent(data?.content);
        setLinkedinImage(data?.image[0]?.url);
        fetch(BACKEND_URL + '/getTwitter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "title": zapierData[index].title, "content": zapierData[index].content })
        })
          .then(response => response.json())
          .then(data => {
            console.log("response data: ", data);
            setTweetContent(data?.content);
            setOpen(true);
            setLoading(false);
          })
          .catch(error => {
            // Handle any errors
            setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
            setOpen(true);
            setLoading(false);
          });
      })
      .catch(error => {
        // Handle any errors
        setLinkedinContent("This is Linkedin content. There's a problem connecting backend or openai to generate Linkedin Post content.");
        setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
        setOpen(true);
        setLoading(false);
      });
  };
  const openAutomateModal = (index) => {
    setLoading(true);
    console.log("automateData: ", automateData[index].content)
    fetch(BACKEND_URL + '/getLinkedin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "title": automateData[index].title, "content": automateData[index].content })
    })
      .then(response => response.json())
      .then(data => {
        console.log("response data: ", data);
        setLinkedinContent(data?.content);
        setLinkedinImage(data?.image[0]?.url);
        fetch(BACKEND_URL + '/getTwitter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "title": automateData[index].title, "content": automateData[index].content })
        })
          .then(response => response.json())
          .then(data => {
            console.log("response data: ", data);
            setTweetContent(data?.content);
            setOpen(true);
            setLoading(false);
          })
          .catch(error => {
            // Handle any errors
            setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
            setOpen(true);
            setLoading(false);
          });
      })
      .catch(error => {
        // Handle any errors
        setLinkedinContent("This is Linkedin content. There's a problem connecting backend or openai to generate Linkedin Post content.");
        setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
        setOpen(true);
        setLoading(false);
      });
  };
  const openMakeModal = (index) => {
    setLoading(true);
    console.log("automateData: ", makeData[index].content)
    fetch(BACKEND_URL + '/getLinkedin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "title": makeData[index].title, "content": makeData[index].content })
    })
      .then(response => response.json())
      .then(data => {
        console.log("response data: ", data);
        setLinkedinContent(data?.content);
        setLinkedinImage(data?.image[0]?.url);
        fetch(BACKEND_URL + '/getTwitter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "title": makeData[index].title, "content": makeData[index].content })
        })
          .then(response => response.json())
          .then(data => {
            console.log("response data: ", data);
            setTweetContent(data?.content);
            setOpen(true);
            setLoading(false);
          })
          .catch(error => {
            // Handle any errors
            setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
            setOpen(true);
            setLoading(false);
          });
      })
      .catch(error => {
        // Handle any errors
        setLinkedinContent("This is Linkedin content. There's a problem connecting backend or openai to generate Linkedin Post content.");
        setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
        setOpen(true);
        setLoading(false);
      });
  };
  const openYoutubeModal = (index) => {
    setLoading(true);
    console.log("youtubeData: ", youtubeData[index].label)
    fetch(BACKEND_URL + '/getLinkedin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "title": youtubeData[index].title, "content": youtubeData[index].label })
    })
      .then(response => response.json())
      .then(data => {
        console.log("response data: ", data);
        setLinkedinContent(data?.content);
        setLinkedinImage(data?.image[0]?.url);
        fetch(BACKEND_URL + '/getTwitter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "title": youtubeData[index].title, "content": youtubeData[index].label })
        })
          .then(response => response.json())
          .then(data => {
            console.log("response data: ", data);
            setTweetContent(data?.content);
            setOpen(true);
            setLoading(false);
          })
          .catch(error => {
            // Handle any errors
            setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
            setOpen(true);
            setLoading(false);
          });
      })
      .catch(error => {
        // Handle any errors
        setLinkedinContent("This is Linkedin content. There's a problem connecting backend or openai to generate Linkedin Post content.");
        setTweetContent("This is tweet content. There's a problem connecting backend or openai to generate tweet content.");
        setOpen(true);
        setLoading(false);
      });
  };
  function copyLinkedin() {
    setLinkedinCopy(true);
    setTimeout(() => {
      setLinkedinCopy(false);
    }, 5000);
  }
  function copyTweet() {
    setTweetCopy(true);
    setTimeout(() => {
      setTweetCopy(false);
    }, 5000);
  }

  useEffect(() => {
    fetch('./scaned youtube.json')
      .then(response => response.text())
      .then(text => {
        if (text[0] === "<") return;
        const rows = JSON.parse(text);
        setYoutubeData(rows);
      });

    fetch('./scaned deepmind google.json')
      .then(response => response.text())
      .then(text => {
        if (text[0] === "<") return;
        const rows = JSON.parse(text);
        setDeepmindData(rows);
      });

    fetch('./scaned zapier.json')
      .then(response => response.text())
      .then(text => {
        if (text[0] === "<") return;
        const rows = JSON.parse(text);
        setZapierData(rows);
      });

    fetch('./scaned automate.json')
      .then(response => response.text())
      .then(text => {
        if (text[0] === "<") return;
        const rows = JSON.parse(text);
        setAutomateData(rows);
      });

    fetch('./scaned make.json')
      .then(response => response.text())
      .then(text => {
        if (text[0] === "<") return;
        const rows = JSON.parse(text);
        setMakeData(rows);
      });

  }, []);
  return (
    <>
      <div className="App flex justify-center flex-col max-w-4xl">
        <header className="top-header">
          <div className='text-sm w-11/12 text-left'>
            Hey, <span className='text-lg font-bold'>John</span>.
          </div>
          <DatePicker
            className='w-1/12 text-right'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          />
        </header>
        <div className="flex justify-center flex-col max-w-4xl items-center">
          <div>
            <div className='page-title'>AI News Web Scraper</div>
          </div>
          {youtubeData.map((data, index) => {
            if (data?.time?.split(" ")[0] == moment(startDate).format('YYYY/MM/DD')) {
              return (
                <div className='article shadow-xl max-w-3xl mb-4 flex items-start justify-between' key={"youtube-" + index}>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='article-title'>{data?.title}</div>
                    <YouTube videoId={data?.link?.split("=")[1]} />
                    <div className='article-content'>{data?.label}</div>
                    <a href={data?.link} rel="noreferrer" className='article-link' target='_blank'>Watch Video</a>
                  </div>
                  <Button className='bg-sky-300 hover:bg-sky-500 active:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 hover:border-transparent rounded' onClick={() => openYoutubeModal(index)}>⭐</Button>
                </div>
              )
            }
          })}
          {deepmindData.map((data, index) => {
            if (data?.time?.split(" ")[0] != moment(startDate).format('YYYY/MM/DD')) return;
            return (
              <div className='article shadow-xl max-w-3xl mb-4 flex items-start justify-between' key={"deepmind-" + index}>
                <div className='flex flex-col items-start justify-between'>
                  <div className='article-title'>{data.title?.replace("&amp;", "")}</div>
                  <img src={data.imgSource?.split(",")[0].split(" ")[0]} />
                  <div className='article-content'>{data.content}</div>
                  <a href={data.link} className='article-link' rel="noreferrer" target='_blank'>Read Article</a>
                </div>
                <Button className='bg-sky-300 hover:bg-sky-500 active:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 hover:border-transparent rounded' onClick={() => openDeepmindModal(index)}>⭐</Button>
              </div>
            )
          })}
          {zapierData.map((data, index) => {
            if (data?.time?.split(" ")[0] != moment(startDate).format('YYYY/MM/DD')) return;
            return (
              <div className='article shadow-xl max-w-3xl mb-4 flex items-start justify-between' key={"deepmind-" + index}>
                <div className='flex flex-col items-start justify-between'>
                  <div className='article-title'>{data.title?.replace("&amp;", "")}</div>
                  <img src={data.imgSource?.split(",")[0].split(" ")[0]} />
                  <div className='article-content'>{data.content}</div>
                  <a href={data.link} className='article-link' rel="noreferrer" target='_blank'>Read Article</a>
                </div>
                <Button className='bg-sky-300 hover:bg-sky-500 active:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 hover:border-transparent rounded' onClick={() => openZapierModal(index)}>⭐</Button>
              </div>
            )
          })}
          {automateData.map((data, index) => {
            if (data?.time?.split(" ")[0] != moment(startDate).format('YYYY/MM/DD')) return;
            return (
              <div className='article shadow-xl max-w-3xl mb-4 flex items-start justify-between' key={"deepmind-" + index}>
                <div className='flex flex-col items-start justify-between'>
                  <div className='article-title'>{data.title?.replace("&amp;", "")}</div>
                  {/* <img src={data.imgSource?.split(",")[0].split(" ")[0]} /> */}
                  <div className='article-content'>{data.content}</div>
                  <a href={data.link} className='article-link' rel="noreferrer" target='_blank'>Read Article</a>
                </div>
                <Button className='bg-sky-300 hover:bg-sky-500 active:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 hover:border-transparent rounded' onClick={() => openAutomateModal(index)}>⭐</Button>
              </div>
            )
          })}
          {makeData.map((data, index) => {
            if (data?.time?.split(" ")[0] != moment(startDate).format('YYYY/MM/DD')) return;
            return (
              <div className='article shadow-xl max-w-3xl mb-4 flex items-start justify-between' key={"deepmind-" + index}>
                <div className='flex flex-col items-start justify-between'>
                  <div className='article-title'>{data.title?.replace("&amp;", "")}</div>
                  <img src={data.imgSource?.split(",")[0].split(" ")[0]} />
                  <div className='article-content'>{data.content.length > 500 ? data.content.substring(0, 500) + "..." : data.content}</div>
                  <a href={data.link} className='article-link' rel="noreferrer" target='_blank'>Read Article</a>
                </div>
                <Button className='bg-sky-300 hover:bg-sky-500 active:bg-sky-100 text-blue-700 font-semibold hover:text-white py-1 px-1 hover:border-transparent rounded' onClick={() => openMakeModal(index)}>⭐</Button>
              </div>
            )
          })}
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 lg:w-full lg:max-w-2xl">
                    <div className="bg-gray-100 px-4 pb-4 pt-2 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                          <Dialog.Title as="h3" className="text-base leading-6 text-gray-900 text-xl font-bold uppercase">
                            Share this Post
                          </Dialog.Title>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-4 pt-2 sm:p-10 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                          <div className="">
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
                              <span className='text-lg pl-1 font-semibold'>Linkedin</span>
                            </h5>
                            <div className='flex'>
                              <div className='border flex w-3/4 mr-2 p-2'>
                                <p className="text-sm text-gray-500 w-11/12">
                                  {linkedinContent}
                                </p>
                                <div className='w-1/12'>
                                  <CopyToClipboard text={linkedinContent}>
                                    <button><svg className="h-8 w-8 text-red-500 cursor-pointer" onClick={copyLinkedin} viewBox="0 0 24 24" fill="none" stroke={linkedinCopy ? "#aaa" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></button>
                                  </CopyToClipboard>
                                </div>
                              </div>
                              <div className='border flex w-1/4' style={{ backgroundImage: "url(" + linkedinImage + ")", backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                              </div>
                            </div>

                          </div>
                          <div className="mt-3">
                            <h5 className='flex items-center'>
                              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter">
                                <path
                                  fill="#61dafb"
                                  stroke="none"
                                  d="M22.99121,3.9502a.99942.99942,0,0,0-1.51074-.85938,7.47956,7.47956,0,0,1-1.873.793,5.15234,5.15234,0,0,0-3.374-1.24219,5.23238,5.23238,0,0,0-5.22363,5.06348A11.03194,11.03194,0,0,1,4.19629,3.78125,1.01154,1.01154,0,0,0,3.33887,3.416a.99852.99852,0,0,0-.78516.5,5.2755,5.2755,0,0,0-.24219,4.76855l-.00195.00195a1.0411,1.0411,0,0,0-.49512.88868,3.04174,3.04174,0,0,0,.02637.43945,5.1854,5.1854,0,0,0,1.56836,3.3125.99813.99813,0,0,0-.06641.76953,5.20436,5.20436,0,0,0,2.36231,2.92187,7.46464,7.46464,0,0,1-3.58985.44825.99975.99975,0,0,0-.665,1.833A12.94248,12.94248,0,0,0,8.46,21.36133,12.7878,12.7878,0,0,0,20.9248,11.998,12.82166,12.82166,0,0,0,21.46,8.35156c0-.06543,0-.13281-.001-.20019A5.76963,5.76963,0,0,0,22.99121,3.9502ZM19.68457,7.16211a.995.995,0,0,0-.2334.70215c.00977.165.00879.331.00879.4873a10.82371,10.82371,0,0,1-.4541,3.08106A10.68457,10.68457,0,0,1,8.46,19.36133a10.93791,10.93791,0,0,1-2.55078-.30078,9.47951,9.47951,0,0,0,2.94238-1.56348A1.00033,1.00033,0,0,0,8.25,15.71094a3.208,3.208,0,0,1-2.21387-.93457q.22413-.04248.44532-.10547a1.00026,1.00026,0,0,0-.08008-1.94336,3.19824,3.19824,0,0,1-2.25-1.72559,5.29929,5.29929,0,0,0,.54492.0459,1.02093,1.02093,0,0,0,.9834-.69629A.9998.9998,0,0,0,5.2793,9.21484,3.19559,3.19559,0,0,1,3.85547,6.542c0-.0664.00195-.13281.00586-.19824a13.01365,13.01365,0,0,0,8.209,3.47949,1.02046,1.02046,0,0,0,.81739-.3584,1.00037,1.00037,0,0,0,.206-.86816,3.15653,3.15653,0,0,1-.08691-.72852A3.23,3.23,0,0,1,16.2334,4.6416a3.18428,3.18428,0,0,1,2.34472,1.02051A.993.993,0,0,0,19.499,5.96a9.27073,9.27073,0,0,0,1.21192-.32226A6.68126,6.68126,0,0,1,19.68457,7.16211Z"></path>
                              </svg>
                              <span className='text-lg pl-1 font-semibold'>Tweet</span>
                            </h5>
                            <div className='flex'>
                              <div className='border flex w-3/4 mr-2 p-2'>
                                <div className='flex items-center'>
                                  <img src="./pic.png" className='w-20 h-20 rounded-full border-2 mr-2 object-cover' alt="tweet avatar" />
                                  <p className="text-sm text-gray-500 w-11/12">
                                    {tweetContent}
                                  </p>
                                </div>
                                <div className='w-1/12'>
                                  <CopyToClipboard text={tweetContent}>
                                    <button><svg className="h-8 w-8 text-red-500 cursor-pointer" onClick={copyTweet} viewBox="0 0 24 24" fill="none" stroke={tweetCopy ? "#aaa" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></button>
                                  </CopyToClipboard>
                                </div>
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
      <div className='spinner-wrapper' style={{ display: loading ? "flex" : "none" }}>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  );
}

export default App;
