import React from 'react';
import { CgTranscript } from "react-icons/cg";

const TranscriptionDisplay = ({ transcription }) => {
  return (
    <div className="transcription-display">
    <h2 className="transcription-title"><CgTranscript />Transcription</h2>
    <div className="transcription-container">
      <p className="transcription-text">
        {transcription || 'Start recording to see transcription...'}
      </p>
    </div>
    </div>
  );
};

export default TranscriptionDisplay;
