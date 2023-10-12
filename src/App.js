// import React, { Component } from 'react';
// import axios from 'axios';

// class ImageUpload extends Component {
//   state = {
//     selectedFile: null,
//   };

//   handleFileChange = (event) => {
//     this.setState({
//       selectedFile: event.target.files[0],
//     });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('image', this.state.selectedFile);
//     console.log(this.state.selectedFile);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/upload-image', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h2>Upload an Image</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input type="file" onChange={this.handleFileChange} />
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ImageUpload;

import "./App.css";
import NavbarHome from "./components/Navbar";
import Demo from "./components/Demo"

function App() {
  return (
    <>
      <div class="moon"></div>
      <NavbarHome />

          <Demo />
       <div class="filter"></div>
      <canvas id="canvas"></canvas> 

      <test />
    </>
  );
    }




export default App;
