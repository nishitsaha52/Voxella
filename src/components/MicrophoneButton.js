import React, { useState } from 'react';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { FaCircleStop } from "react-icons/fa6";
import useRecorder from '../hooks/useRecorder';

// MicrophoneButton component to control audio recording
function MicrophoneButton({ handleData }) {
  // State to track if recording is in progress
  const [isRecording, setIsRecording] = useState(false);
  // Use the custom hook to get start and stop recording functions
  const { startRecording, stopRecording } = useRecorder(handleData);

  // Toggle recording state when button is clicked
  const toggleRecording = () => {
    if (isRecording) {
      stopRecording(); // Stop recording if currently recording
    } else {
      startRecording(); // Start recording if not currently recording
    }
    setIsRecording(!isRecording); // Toggle the recording state
  };

  return (
    <div className="button-container">
      <button
        onClick={toggleRecording} // Handle button click to toggle recording
        className={`microphone-button ${isRecording ? 'recording' : 'not-recording'}`} // Apply conditional class based on recording state
      >
        {isRecording ? (
          <FaCircleStop className="icon" /> // Show stop icon if recording
        ) : (
          <FaMicrophoneAlt className="icon" /> // Show microphone icon if not recording
        )}
        {isRecording && ( // Show animation only when recording
          <span className="ping-animation"></span>
        )}
      </button>
    </div>
  );
}

export default MicrophoneButton;
