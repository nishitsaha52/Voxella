import React from 'react';
import { RiChatHistoryLine } from "react-icons/ri";

const PastTranscriptions = ({ transcriptions }) => {
  return (
    <>
      <h2 className="past-transcriptions-title"><RiChatHistoryLine />Past Transcriptions</h2>
      <ul className="past-transcriptions-list">
        {transcriptions.map((text, index) => (
          <li key={index} className="past-transcription-item">{text}</li>
        ))}
      </ul>
    </>
  );
};

export default PastTranscriptions;
