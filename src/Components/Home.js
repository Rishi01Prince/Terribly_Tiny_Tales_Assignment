import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


export default function Home() {
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      // Fetching data from the given URL
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const filecontent = await response.text();

      const arr_of_words = filecontent.split(/\s+/);

      // Object to store word and its frequency
      let frequency = {};

      arr_of_words.forEach((word) => {
        if (frequency[word] === undefined) {
          frequency[word] = 1;
        } else {
          frequency[word] += 1;
        }
      });

      // Sorting the object in descending order of frequency
      const pairs = Object.entries(frequency);
      const sorted_pairs = pairs.sort((a, b) => b[1] - a[1]);

      const req_words = sorted_pairs.slice(0, 20);

      //strings to be passed to display component
      const labels = req_words.map((x) => x[0]);
      //frequency to be passed to display component
      const data = req_words.map((x) => x[1]);

      // Passing histogram data to display component
      navigate('/display', { state: { labels, data } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log('clicked');
    await loadData();
  };

  return (
    <div className="container">

      <div className='circle'>

        <div className='div_para'>
          <p className='para'>Please click the button below to view the top 20 most frequent words</p>
        </div>

        <div className='buttona'>
          <button onClick={handleClick}>Click me</button>
        </div>

      </div>

    </div>
  );
}
