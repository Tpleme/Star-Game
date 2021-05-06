import { useState } from 'react';
import utils from './utils';
import './App.css';

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums] = useState([]);
}


export default StarMatch;
