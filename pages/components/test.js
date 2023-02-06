import {  useState } from 'react';

const TestBox = () => {
  const name_0 = 'Harry';
  let count_0 = 0;
  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0);

  const handleChange_0 = () => {
    // count_0 += 1;
    console.log("clicked_0");
  }

  const handleChange_1 = () => {
    console.log("clicked_1");
    // setCount(count + 1);
    count_0 = count_0 + 1
    console.log(count_0)
  }
  return (
  <div className="big-img">
    <p>{name_0}{count_0} and {name}{count}</p>
    <button onClick={handleChange_0}>change normal varible</button>
    <br></br>
    <br></br>
    <button onClick={handleChange_1}>change state varible</button>
  </div>
  );
}

export default TestBox;