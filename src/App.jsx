
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './counter';
import Users from './users';
import Friends from './Friends';
import Posts from './posts';
import Players from './Players';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())


// const fetchFriends = async () =>{
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// return res.json();
// }

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }


function App() {
// const postsPromise = fetchPosts();

//  const friendsPromise = fetchFriends();

  function handleClick(){
    alert('I am clicked')
  }

const handleClick3 = () => {
  alert('clicked 3')
}

const handleAdd5 = (num) => {
  const newNum = num + 5;
  alert(newNum);

}

  return (
    <>
     
      <h3>Vite + React</h3>

{/* <Suspense fallback={<h4>Post are coming...</h4>}>
<Posts postsPromise={postsPromise}></Posts>
</Suspense> */}

<Players></Players>

<Batsman></Batsman>
<Counter></Counter>

{/* <Suspense fallback={<h3>Loading...</h3>}>
  <Users fetchUsers = {fetchUsers}></Users>
</Suspense> */}

{/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
   <Friends friendsPromise ={friendsPromise}></Friends>
</Suspense> */}

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me2</button>
      
      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => alert('click 4') }>Click me 4</button>

      <button onClick={() => handleAdd5(8)}>Click Add 5</button>
    </>
  )
}

export default App
