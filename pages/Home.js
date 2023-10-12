import React, { useState } from 'react';
import DropFileInput from '../components/drop-file-input/DropFileInput';

const Home = () => {
  const [selectedFileType, setSelectedFileType] = useState(''); // State to store the selected file type
state = {
//     selectedFile: null,
//   };

//   handleFileChange = (event) => {
//     this.setState({
//       selectedFile: event.target.files[0],
//     });
//   };
  const handleFileTypeChange = (event) => {
    setSelectedFileType(event.target.value[0]);
  };
  // handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('image', this.state.selectedFile);
  //   console.log(this.state.selectedFile);

  //   try {
  //     const response = await axios.post('http://127.0.0.1:5000/upload-image', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="body">
      <div className="box">
        <h2 className="header">Drag And Drop Files Here</h2>
        <h4>Choose the type of file to be uploaded:</h4>

        <select value={selectedFileType} onChange={handleFileTypeChange}>
          <option name="Aadhar Card">Aadhar Card</option>
          <option name="Passport ID">Passport ID</option>
          <option name="Driving License">Driving License</option>
          <option name="Voter ID">Voter ID</option>
        </select>
        
        <DropFileInput />
        <button type="submit">Upload</button>
      </div>
    </div>
  );
};

export default Home;