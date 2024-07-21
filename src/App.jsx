import { useState } from 'react';
import data from './data';
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h2> 5 Birthdays Today</h2>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
      <button onClick={() => setPeople([])}>Clear All</button>
    </>
  );
};
export default App;
