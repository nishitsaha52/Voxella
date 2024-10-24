import React, { useState, useEffect } from 'react';
import MicrophoneButton from './components/MicrophoneButton';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import PastTranscriptions from './components/PastTranscriptions';
import { transcribeAudio } from './services/deepgramService';
import ThemeToggler from './components/ThemeToggler';
import Preloader from './components/PreLoader';
import './App.css';

function App() {
  // State variables
  const [transcription, setTranscription] = useState(''); // Current transcription text
  const [pastTranscriptions, setPastTranscriptions] = useState([]); // Array to store past transcriptions
  const [loading, setLoading] = useState(true); // Loading state for the preloader

  // Function to handle audio data from the microphone
  const handleAudioData = async (audioBlob) => {
    try {
      // Call the transcription service and await the response
      const transcriptionResponse = await transcribeAudio(audioBlob);
      // Extract the transcription text from the response
      const newTranscription = transcriptionResponse.results.channels[0].alternatives[0].transcript;
      // Update the current transcription state
      setTranscription(newTranscription);
      // Add the new transcription to the past transcriptions
      setPastTranscriptions([newTranscription, ...pastTranscriptions]);
    } catch (error) {
      // Handle any errors that occur during transcription
      setTranscription('Error with transcription.');
    }
  };

  // Effect to manage the loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? ( // Conditional rendering based on loading state
        <Preloader /> // Show preloader while loading
      ) : (
      <div className="app-container">
        <div className="card-container">
          <div className="header">
            <h1>Voxella</h1> 
            <ThemeToggler /> 
          </div>
          <div className="content">
            <div className="instructions">
              <p>Click the microphone to start recording</p> 
              <MicrophoneButton handleData={handleAudioData} />   {/* Button to start audio recording */}
            </div>
            <TranscriptionDisplay transcription={transcription} />           {/* Display Present Transcription */}
            <PastTranscriptions transcriptions={pastTranscriptions} />       {/* Display Past Transcriptions */}
          </div>
        </div>
      </div>
   )}
   </>
 );
};

export default App;
