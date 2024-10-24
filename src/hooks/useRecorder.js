import { useState, useCallback } from 'react';

// Custom hook for recording audio
const useRecorder = (handleData) => {
  // State to hold the MediaRecorder instance
  const [mediaRecorder, setMediaRecorder] = useState(null);

  // Function to start recording audio
  const startRecording = useCallback(() => {
    // Request access to the user's microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream); // Create a MediaRecorder instance
        setMediaRecorder(recorder); // Store the recorder instance in state

        // Event handler for when audio data is available
        recorder.ondataavailable = (e) => {
          handleData(e.data); // Pass the recorded audio data to the provided handleData function
        };

        recorder.start(); // Start recording
      })
      .catch(err => console.error('Error accessing microphone:', err)); // Log any errors
  }, [handleData]); // Dependency array to ensure handleData is up to date

  // Function to stop recording audio
  const stopRecording = useCallback(() => {
    if (mediaRecorder) {
      mediaRecorder.stop(); // Stop the MediaRecorder
      mediaRecorder.stream.getTracks().forEach(track => track.stop()); // Stop all audio tracks
    }
  }, [mediaRecorder]); // Dependency array to ensure mediaRecorder is up to date

  // Return functions to start and stop recording
  return { startRecording, stopRecording };
};

export default useRecorder;
