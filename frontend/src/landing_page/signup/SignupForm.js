// import React, { useState } from "react";


// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:3002/signup",
//         {
//           name,
//           email,
//           password,
//         }
//       );

//       localStorage.setItem(
//         "token",
//         res.data.token
//       );

//       alert("Signup Successful!");

//       window.location.href =
//         "http://localhost:3001";
//     } catch (err) {
//       console.log(err);

//       alert(
//         err.response?.data?.message ||
//         "Signup Failed"
//       );
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "400px",
//         margin: "100px auto",
//       }}
//     >
//       <h1>Create Account</h1>

//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) =>
//             setName(e.target.value)
//           }
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//         />

//         <br />
//         <br />

//         <button type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/signup",
        {
          name,
          email,
          password,
        }
      );

      // Save JWT token
      localStorage.setItem("token", res.data.token);

      alert("Signup Successful!");

      // Redirect to Dashboard
      window.location.href = "http://localhost:3001";

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Signup Failed"
      );
    }
  };

  return (
    <form onSubmit={handleSignup} className="auth-form">

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">
        Sign Up
      </button>

    </form>
  );
}

export default SignupForm;


