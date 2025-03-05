import './App.css';
import teamsData from './CollegeBasketballTeams.json'; // Import the JSON file

// make the heading
function Heading() {
  return <h1>March Madness</h1>;
}

// get the team information that we need
function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      {/* print out the information needed */}
      <h2>School Name: {school}</h2>
      <h3>Mascot Name: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

// loop through the teams
function TeamList() {
  return (
    <>
      {teamsData.teams.map((singleTeam, index) => (
        <Team key={index} {...singleTeam} />
      ))}
    </>
  );
}

// display the information
function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;
