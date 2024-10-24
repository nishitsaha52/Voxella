import React, { useState, useEffect } from 'react';
import MicrophoneButton from './components/MicrophoneButton';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import PastTranscriptions from './components/PastTranscriptions';
import { transcribeAudio } from './services/deepgramService';
import ThemeToggler from './components/ThemeToggler';
import Preloader from './components/PreLoader';
import './App.css';

function App() {
  const [transcription, setTranscription] = useState('');
  const [pastTranscriptions, setPastTranscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAudioData = async (audioBlob) => {
    try {
      const transcriptionResponse = await transcribeAudio(audioBlob);
      const newTranscription = transcriptionResponse.results.channels[0].alternatives[0].transcript;
      setTranscription(newTranscription);
      setPastTranscriptions([newTranscription, ...pastTranscriptions]);
    } catch (error) {
      setTranscription('Error with transcription.');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
      <div className="app-container">
      <div className="card-container">
        <div className="header">
          <h1>Voxella</h1>
          <ThemeToggler/>
        </div>
        <div className="content">
          <div className="instructions">
            <p>Click the microphone to start recording</p>
            <MicrophoneButton handleData={handleAudioData} />
          </div>
          <TranscriptionDisplay transcription={transcription} />
          <PastTranscriptions transcriptions={pastTranscriptions} />
        </div>
      </div>
    </div>
   )}
   </>
 );
};

export default App;
