import { useState } from "react";
import Counter from "./Counter";
const people = [
  {id:1 , name:"Rohit", role:"Aspiring MERN Developer", age:23, skills:["SQL", "MongoDB"]},
  {id:2 , name:"Aman", role:"Aspiring Data Scientist", age:24, skills:["Communication", "Python"]},
  {id:3 , name:"Sumit", role:"Aspiring Java Developer", age:25, skills:["Java", "Spring"]},
  {id:4 , name:"Rhitwik", role:"Aspiring Data Analyst", age:26, skills:["PowerBi", "Tableau"]},
]
function ProfileCard({ name, role, age ,skills}) {
  const [showSkills, setShowSkills] = useState(false);
  return (
    <div>
      <h1>{name}</h1>
      <p>{role}</p>
      <p>Age: {age}</p>
      <p>Next year: {age + 1}</p>
      <button onClick={() => { setShowSkills(!showSkills) }}>
        {showSkills ? "Hide skills" : "Show skills"}
      </button>
      {showSkills && <>
        <h3>My skills:</h3>
        <ul className="skills">
          {skills.map((s) => (<li key={s}>{s}</li>))}
        </ul>
      </>}
    </div>

  );
}
function App() {
  return (
    <div>
      {people.map((person)=>(<ProfileCard key={person.id} name={person.name} role={person.role} age={person.age}  skills={person.skills}/>))}

      <Counter />
      <Counter />
    </div>
  )
}
export default App;
