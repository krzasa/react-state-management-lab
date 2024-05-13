import './App.css'
import FighterListItem from './components/ZombieFighters';
import { useState } from 'react';

const team = [];
let money = 100;
const zombieFighters= 
[
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalAgility, setTotalAgility] = useState(0);
  const [totalStrength, setTotalStrength] = useState(0);

  const handleMove = (char) => {
    if (money >= char.price) {
    setTeam([...team, char]); // Add selected fighter to team array
    setMoney(money - char.price); // Update money
    setTotalAgility(totalAgility + char.agility); // Update total agility
    setTotalStrength(totalStrength + char.strength); // Update total strength
  
  } else {
    alert('Not enough money');
  }
}
  const handleRemove = (index) => {
    const removedFighter = team[index];
    const updatedTeam = team.filter((fighter, i) => i !== index);
    setTeam(updatedTeam);
    setMoney(money + removedFighter.price); // Update money
    setTotalAgility(totalAgility - removedFighter.agility); // Update total agility
    setTotalStrength(totalStrength - removedFighter.strength); // Update total strength
  };



  // Calculate total strength of the team array
  // const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0);
  // Calculate total agility of the team array
  // const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);
// Above code is what I ending up doing with info found from w3schools, the reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result.
// for each team array item add to the total of each members desired skill
//Unfortunately can't use the reduce() method due to having to remove team members, reduce() will only add the team member value but there is a simpler way to do that, and that requires hooks which are the useState() methods.
  return (
<> 
    <h1>Zombie Fighters</h1>
    <h3>Current money: {money}</h3>
    <h3>Total Team Strength: {totalStrength}</h3> 
    <h3>Total Team Agility: {totalAgility}</h3> 
    <h3>Team </h3>
    <ul>
      {team.map((char, index) => (
            <FighterListItem 
            key={index}
            char={char}
            handleMove={handleMove}
            handleRemove={() => handleRemove(index)} // Pass handleRemove function as 3rd prop
             />
          ))}
    </ul>
    <h2>Fighters: </h2>
      <ul>
      {zombieFighters.map((char) => (
            <FighterListItem 
            key={char.name}
            char={char}
            handleMove={handleMove}
             />
             
          ))
          }

    </ul>
  </>
  );
}

export default App