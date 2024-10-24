import React, { useState } from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';
import useRecorder from '../hooks/useRecorder';

function MicrophoneButton({ handleData }) {
  const [isRecording, setIsRecording] = useState(false);
  const { startRecording, stopRecording } = useRecorder(handleData);

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="button-container">
      <button
        onClick={toggleRecording}
        className={`microphone-button ${isRecording ? 'recording' : 'not-recording'}`}
      >
        {isRecording ? (
          <FaStop className="icon" />
        ) : (
          <FaMicrophone className="icon" />
        )}
        {isRecording && (
          <span className="ping-animation"></span>
        )}
      </button>
    </div>
  );
}

export default MicrophoneButton;
 