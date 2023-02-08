import { cleanup } from "@testing-library/react";
import React from "react";
import Content from './Content'
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
import { act } from "react-dom/test-utils";



// useReducer

// 1. Init state
const initState = {
   job: '',
   jobs: []
}


// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
   return {
      type: SET_JOB,
      payload
   }
}

const addJob = payload => {
   return {
      type: ADD_JOB,
      payload
   }
}

const deleteJob = payload => {
   return {
      type: DELETE_JOB,
      payload
   }
}

// 3. Reducer
let newState

const reducer = (state, action) => {
   switch (action.type) {
      case SET_JOB:
         newState = {
            ...state,
            job: action.payload
         }
         break;
      case ADD_JOB:
         newState = {
            ...state,
            jobs: [...state.jobs, action.payload]
         }
         break;
      case DELETE_JOB:
         const newJobs = [...state.jobs]
         newJobs.splice(action.payload, 1)
         newState = {
            ...state,
            jobs: newJobs
         }
         break;
      default:
         throw new Error('Invalid action')
   }
   console.log('New state: ', newState)
   return newState
}

// 4. Dispatch


const HeaderHook = () => {


   /* ------------- useState ------------ */


   // const [counter, setCounter] = useState(1)

   // const handleIncrease = () => {
   //     setCounter(counter + 1)

   //     //dùng callback
   //     setCounter(prevState => prevState + 1);
   //     setCounter(prevState => prevState + 1);
   //     setCounter(prevState => prevState + 1);

   // }
   // const [info, setInfo] = useState({
   //     name: 'Nguyen Van A',
   //     age: 18,
   //     address: "Ha Noi"
   // })

   // const handleChange = () => {
   //     setInfo({
   //         name: 'Nguyen Van B',
   //     })
   // }

   // return (
   //     <>
   //         {/* <h1>{counter}</h1> */}
   //         {/* <button onClick={handleIncrease}>Increase</button> */}
   //         <p>{info.name}</p>
   //         <button onClick={handleChange}>Change</button>
   //     </>
   // )


   /* ------------- Gifts ------------ */


   // const gifts = [
   //     'CPU i9',
   //     'RAM 32GB RAM',
   //     'Keyboard RGB',
   //     'Bing Chilling',
   //     '♥',
   // ]

   // const [gift, setGift] = useState()

   // const randomGift = () => {
   //     const index = Math.floor(Math.random() * gifts.length)
   //     setGift(gifts[index])
   // }

   // return (
   //     <div>
   //         <h2>{gift || 'Chưa có phần thưởng'}</h2>
   //         <button onClick={randomGift}>Lấy thưởng</button>
   //     </div>
   // )


   /* ------------- Change Input ------------ */


   // const [name, setName] = useState('')

   // console.log(name);

   // const changeName = () => {
   //     setName('Nguyen Van B')
   // }

   // return (
   //     <>
   //         <input value={name}
   //             onChange={e => setName(e.target.value)}
   //         />
   //         &nbsp;
   //         &nbsp;
   //         <button onClick={changeName}>
   //             Change
   //         </button>
   //     </>
   // )

   //     const courses = [
   //         {
   //             id: 1,
   //             name: 'HTML, CSS'
   //         },
   //         {
   //             id: 2,
   //             name: 'JavaScript'
   //         },
   //         {
   //             id: 3,
   //             name: 'ReactJS'
   //         }
   //     ]


   /* ------------- Change Radio ------------ */


   //     const [checked, setChecked] = useState()

   //     const handleSubmit = () => {
   //         console.log({ id: checked })
   //     }

   //     return (
   //         <>
   //             {courses.map(course => (
   //                 <div key={course.id}>
   //                     <input type='radio'
   //                         checked={checked === course.id}
   //                         onChange={() => setChecked(course.id)}
   //                     />
   //                     {course.name}

   //                 </div>
   //             ))}
   //             <button onClick={handleSubmit}>
   //                 Register
   //             </button>
   //         </>
   //     )





   // const storageJobs = JSON.parse(localStorage.getItem('jobs'))

   // const [job, setJob] = useState('');
   // console.log(">>>job: ", job)

   // const [jobs, setJobs] = useState(storageJobs);

   // const handleAdd = () => {
   //     if (job.length == 0) {
   //         alert('Vui lòng không để trống!')
   //     }
   //     else {
   //         setJobs(prev => {
   //             const newJobs = [...prev, job]

   //             // Save to localstorage
   //             const jsonJobs = JSON.stringify(newJobs)
   //             localStorage.setItem('jobs', jsonJobs)
   //             return newJobs
   //         });
   //         setJob('');
   //     }
   // }

   // return (
   //     <>
   //         <input
   //             value={job}
   //             onChange={(e => setJob(e.target.value))}
   //         />
   //         &nbsp;
   //         <button onClick={handleAdd}>Add</button>
   //         <ul>
   //             {jobs.map((job, index) => (
   //                 <li key={index}>{index + 1}: {job}</li>
   //             ))}
   //         </ul>
   //     </>
   // )



   /* ------------- useEffect ------------ */

   // Side effects
   // Events: Add / remove event listener
   // Observar pattern: Subscribe / unsubscribe
   // Closure
   // Timers: setInterval, setTimeout, clearInterval, clearTimeout
   // useState
   // Mounted / unmounted
   // ===
   // Call API

   // useEffect(callback, [deps])

   /**
    1. Update DOM
    2. Call API
    3. Listen DOM events
       - Scroll
       - Resize
    4. Cleanup
       - Remove listener / Unsubscribe
       - Clear timer
    */

   /**
    1. useEffect(callback)
       - Gọi callback mỗi khi component re-render
       - Gọi callback sau khi component thêm element vào DOM
    2. useEffect(callback, [])
       - Chỉ gọi callback 1 lần sau khi component mounted
    3. useEffect(callback, [deps])
       - callback sẽ đc gọi lại mỗi khi dependencies thay đổi
 
    Cả 3:
       - callback luôn đc gọi sau khi component mounted
       - cleanup function luôn được gọi trước khi component unmounted
       - cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
 
   */


   //  1. useEffect(callback)

   // const [title, setTitle] = useState('')

   // useEffect(() => {
   //     document.title = title
   // })

   // return (
   //     <div>
   //         <input
   //             value={title}
   //             onChange={e => setTitle(e.target.value)}
   //         />
   //     </div>
   // )


   // 2. useEffect(callback, [])
   // Giúp tránh việc call API vô hạn

   // const [title, setTitle] = useState('')
   // const [posts, setPosts] = useState([])

   // useEffect(() => {
   //     fetch('https://jsonplaceholder.typicode.com/posts')
   //         .then(res => res.json())
   //         .then(posts => {
   //             setPosts(posts);
   //         })
   // }, []);

   // return (
   //     <div>
   //         <input
   //             value={title}
   //             onChange={e => setTitle(e.target.value)}
   //         />
   //     </div>
   // )



   // 3. useEffect(callback, [deps])

   // const tabs = ['posts', 'comments', 'albums']

   // const [title, setTitle] = useState('')
   // const [posts, setPosts] = useState([])
   // const [type, setType] = useState('posts')

   // useEffect(() => {
   //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
   //         .then(res => res.json())
   //         .then(posts => {
   //             setPosts(posts);
   //         })
   // }, [type]);





   // return (
   //     <div>

   //         <input
   //             value={title}
   //             onChange={e => setTitle(e.target.value)}
   //         />

   //         <div>
   //             {tabs.map(tab => (
   //                 <button
   //                     key={tab}
   //                     style={type === tab ? {
   //                         color: '#fff',
   //                         backgroundColor: '#333',
   //                     } : {}}
   //                     onClick={() => setType(tab)}>
   //                     {tab}
   //                 </button>
   //             ))}

   //         </div>

   //         <ul>
   //             {posts.map(post => (
   //                 <li key={post.id}>{post.title || post.name}</li>
   //             ))}
   //         </ul>
   //     </div>
   // )



   /* ------------- useEffect() with DOM events ------------ */


   // const tabs = ['posts', 'comments', 'albums']
   // const [title, setTitle] = useState('')
   // const [posts, setPosts] = useState([])
   // const [type, setType] = useState('posts')
   // const [showGoToTop, setShowGoToTop] = useState(false)
   // const [width, setWidth] = useState(window.innerWidth)

   // useEffect(() => {
   //     const handleScroll = () => {
   //         console.log(window.scrollY);
   //         if (window.scrollY >= 300) {
   //             setShowGoToTop(true);
   //         }
   //         else {
   //             setShowGoToTop(false);
   //         }
   //     }
   //     window.addEventListener('scroll', handleScroll);

   //     const handleResize = () => {
   //         setWidth(window.innerWidth)
   //     }
   //     window.addEventListener('resize', handleResize);
   //     // cleanup function
   //     // return () => {
   //     //     window.removeEventListener('scroll', handleScroll)
   //     // }

   //     // cleanup function
   //     return () => {
   //         window.removeEventListener('scroll', handleScroll)
   //     }

   // }, []);

   // useEffect(() => {
   //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
   //         .then(res => res.json())
   //         .then(posts => {
   //             setPosts(posts);
   //         })
   // }, [type]);

   // const handleOnTop = () => {
   //     // window.scrollTop();
   // }

   // return (
   //     <div>
   //         <div>
   //             <h2>Size: {width}</h2>
   //         </div>

   //         <input
   //             value={title}
   //             onChange={e => setTitle(e.target.value)}
   //         />

   //         <div>
   //             {tabs.map(tab => (
   //                 <button
   //                     key={tab}
   //                     style={type === tab ? {
   //                         color: '#fff',
   //                         backgroundColor: '#333',
   //                     } : {}}
   //                     onClick={() => setType(tab)}>
   //                     {tab}
   //                 </button>

   //             ))}

   //         </div>

   //         <ul>
   //             {posts.map(post => (
   //                 <li key={post.id}>{post.title || post.name}</li>
   //             ))}
   //         </ul>
   //         {showGoToTop && (
   //             <button
   //                 style={{
   //                     position: 'fixed',
   //                     right: 20,
   //                     bottom: 20,
   //                 }}
   //                 onClick={handleOnTop}
   //             >
   //                 Go to Top
   //             </button>
   //         )}
   //     </div>
   // )



   /* ------------- useEffect() with timer functions ------------ */

   // const [countdown, setCountdown] = useState(200);

   // useEffect(() => {
   //     const timeId = setInterval(() => {
   //         setCountdown(prevState => prevState - 1);
   //     }, 1000)

   //     return () => clearInterval(timeId);
   // }, [])

   // return (
   //     <div>
   //         <h1>{countdown}</h1>
   //     </div>
   // )



   /* ------------- useEffect() with preview avatar ------------ */

   // const [avatar, setAvatar] = useState()


   // useEffect(() => {

   //    // cleanup
   //    return () => {
   //       avatar && URL.revokeObjectURL(avatar.preview)
   //    }
   // }, [avatar])

   // const handlePreviewAvatar = (e) => {
   //    const file = e.target.files[0]
   //    file.preview = URL.createObjectURL(file)
   //    setAvatar(file)

   //    console.log(URL.createObjectURL(file));

   // }

   // return (
   //    <div>
   //       <input
   //          type="file"
   //          onChange={handlePreviewAvatar}
   //       ></input>
   //       {avatar && (
   //          <img src={avatar.preview} alt="" width="20%"></img>
   //       )}
   //    </div>
   // )



   /* ------------- useEffect() with fake Chat App ------------ */

   // const lessons = [
   //    {
   //       id: 1,
   //       name: 'ReactJS là gì? Tại sao nên học ReactJS'
   //    },
   //    {
   //       id: 2,
   //       name: 'Hạ giọng với người khác'
   //    },
   //    {
   //       id: 3,
   //       name: 'Đứng sau lưng người khác'
   //    },
   // ]

   // const [lessonId, setLessons] = useState(1)

   // useEffect(() => {
   //    const handleComment = ({ detail }) => {
   //       console.log(detail);
   //    }
   //    window.addEventListener(`lesson-${lessonId}`, handleComment)

   //    return () => {
   //       window.removeEventListener(`lesson-${lessonId}`, handleComment)
   //    }

   // }, [lessonId])

   // return (
   //    <div>
   //       <ul>
   //          {lessons.map(lessons => (
   //             <li
   //                key={lessons.id}
   //                style={{
   //                   color: lessonId === lessons.id ?
   //                      'red' : '#333'
   //                }}
   //                onClick={() => setLessons(lessons.id)}
   //             >
   //                {lessons.name}
   //             </li>
   //          ))}
   //       </ul>
   //    </div>
   // )



   /* ------------- useLayoutEffect() hook? ------------ */

   // useEffect
   // 1. Cập nhật lại state
   // 2. Cập nhật DOM (mutated)
   // 3. Render lại UI
   // 4. Gọi cleanup nếu deps thay đổi
   // 5. Gọi useEffect callback

   // useLayoutEffect
   // 1. Cập nhật lại state
   // 2. Cập nhật DOM (mutated)
   // 3. Gọi cleanup nếu deps thay đổi (sync)
   // 4. Gọi useLayoutEffect callback (sync)
   // 5. Render lại UI



   // const [count, setCount] = useState(0)

   // Khi dùng useEffect
   // useEffect(() => {
   //    if (count > 3)
   //       setCount(0)
   // }, [count])

   // Khi dùng useLayoutEffect
   // useLayoutEffect(() => {
   //    if (count > 3)
   //       setCount(0)
   // }, [count])

   // const handleCount = () => {
   //    setCount(count + 1)
   // }

   // return (
   //    <div>
   //       <h2>{count}</h2>
   //       <button onClick={handleCount}>Run</button>
   //    </div>
   // )



   /* ------------- useRef() hook ------------ */

   // const [count, setCount] = useState(60)
   // const ref = useRef(99)
   // const timerId = useRef()
   // const prevCount = useRef()

   // useEffect(() => {
   //    prevCount.current = count
   // }, [count])

   // const handleStart = () => {
   //    // setCount(count - 1)
   //    timerId.current = setInterval(() => {
   //       setCount((prevCount => prevCount - 1))
   //    }, 1000)

   //    console.log('Start --> ', timerId.current)
   // }

   // const handleStop = () => {
   //    clearInterval(timerId.current)

   //    console.log('Stop --> ', timerId.current)
   // }

   // console.log(count, prevCount.current)

   // return (
   //    <div>
   //       <h1>{count}</h1>
   //       <button onClick={handleStart}>Start</button>
   //       &nbsp;
   //       &nbsp;
   //       <button onClick={handleStop}>Stop</button>
   //    </div>
   // )



   /* ------------- React.memo() HOC ------------ */

   // 1. memo() --> Higher Order Component (HOC)
   // 2. useCallback()
   // - Reference types
   // - React memo()

   // Hooks
   // HOC
   // Render props

   // const [count, setCount] = useState(0)

   // const handleIncrease = useCallback(() => {
   //    setCount(prevCount => prevCount + 1)
   // }, [])


   // return (
   //    <div>
   //       <Content onIncrease={handleIncrease} />
   //       <h1>{count}</h1>
   //    </div >
   // )




   // /* ------------- useMemo() hook ------------ */

   // const [name, setName] = useState('')
   // const [price, setPrice] = useState('')
   // const [products, setProducts] = useState([])

   // const nameRef = useRef()

   // const handleSubmit = () => {
   //    setProducts([...products, {
   //       name,
   //       price: +price
   //    }])
   //    setName('')
   //    setPrice('')
   //    nameRef.current.focus()
   // }

   // console.log(products)

   // // const total = products.reduce((result, prod) =>
   // //    result + prod.price,
   // //    0
   // // )

   // const total = useMemo(() => {
   //    const result = products.reduce((result, prod) => {
   //       console.log('Tính toán lại...')
   //       return result + prod.price
   //    }, 0)
   //    return result
   // }, [products])

   // return (
   //    <div style={{ padding: '10px 32px' }}>
   //       <input
   //          ref={nameRef}
   //          value={name}
   //          placeholder="Enter name..."
   //          onChange={e => setName(e.target.value)}
   //       />
   //       <br />
   //       <input
   //          value={price}
   //          placeholder="Enter price..."
   //          onChange={e => setPrice(e.target.value)}
   //       />
   //       <br />
   //       <button onClick={handleSubmit}>Add</button>
   //       <br />
   //       Total: {total}
   //       <ul>
   //          {products.map((product, index) => (
   //             <li key={index}>{product.name} - {product.price}</li>
   //          ))}
   //       </ul>
   //    </div>
   // )



   // /* ------------- useReducer() hook ------------ */

   // useState
   // 1. Intit state: 0
   // 2. Actions: Up (state + 1) / Down (state - 1)

   // useReducer
   // 1. Init state: 0
   // 2. Actions: Up (state + 1) / Down (state - 1)
   // Reducer
   // 4. Dispatch

   // Init state
   // const initState = 0

   // // Action
   // const UP_ACTION = 'up'
   // const DOWN_ACTION = 'down'

   // // Reducer
   // const reducer = (state, action) => {
   //    switch (action) {
   //       case UP_ACTION:
   //          return state + 1
   //       case DOWN_ACTION:
   //          return state - 1
   //       default:
   //          throw new Error('Invalid action')
   //    }
   // }

   // const [count, dispatch] = useReducer(reducer, initState)

   // return (
   //    <div>
   //       <h2>{count}</h2>
   //       <button
   //          onClick={() => dispatch(DOWN_ACTION)}
   //       >Down</button>
   //       &nbsp;
   //       &nbsp;
   //       <button
   //          onClick={() => dispatch(UP_ACTION)}
   //       >Up</button>
   //    </div>
   // )




   // /* ------------- Todo App with useReducer() hook ------------ */

   // const [name, setName] = useState('')
   // const [results, setResults] = useState([])

   // const handleAdd = () => {
   //    name == '' ? alert('Chưa nhập thông tin!') : setResults([...results, name])
   //    setName('')
   // }

   // return (
   //    <div>
   //       <h3>Todo</h3>
   //       <input
   //          value={name}
   //          placeholder="Enter to do"
   //          onChange={e => setName(e.target.value)}
   //       ></input>
   //       &nbsp;
   //       &nbsp;
   //       <button
   //          onClick={handleAdd}
   //       >Add</button>
   //       <ul>
   //          {results.map((result, index) => (
   //             <li key={index}>
   //                {index + 1} - {result} &times;
   //             </li>
   //          ))}
   //       </ul>
   //    </div>
   // )

   // useReducer

   const [state, dispatch] = useReducer(reducer, initState)
   const { job, jobs } = state

   const inputRef = useRef()

   const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
      inputRef.current.focus()
   }

   return (
      <div>
         <h3>Todo</h3>
         <input
            ref={inputRef}
            value={job}
            placeholder="Enter todo..."
            onChange={e => {
               dispatch(setJob(e.target.value))
            }}
         ></input>
         &nbsp;
         &nbsp;
         <button
            onClick={handleSubmit}
         >
            Add
         </button>
         <ul>
            {jobs.map((job, index) => (
               <li key={index}>{job}
                  <span onClick={() => dispatch(deleteJob(index))}>
                     &times;
                  </span>
               </li>
            ))}
         </ul>
      </div>
   )

}

export default HeaderHook;