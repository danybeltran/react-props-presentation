import React from "react";
import Button from "./components/Button";

// Stateful

// function UserInfo(props) {
//   const userId = props.userId;
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     try {
//       fetch("url/" + userId)
//         .then((data) => data.json())
//         .then((userInfo) => {
//           setUser(userInfo);
//         });
//     } catch (err) {
//       alert("La llamada a la api falló=(");
//     }
//   }, [userId]);
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//     </div>
//   );
// }

// Stateless
function SayHello(props) {
  return <h2>{props.name}</h2>;
}

export default function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}
