import axios from 'axios';

// Define the Deepgram API endpoint for audio transcription
const DEEPGRAM_API_URL = 'https://api.deepgram.com/v1/listen';

// Retrieve the Deepgram API key from environment variables
const DEEPGRAM_API_KEY = process.env.REACT_APP_DEEPGRAM_API_KEY;

// Function to transcribe audio using the Deepgram API
export const transcribeAudio = async (audioBlob) => {
  // Create a new FormData object to hold the audio file
  const formData = new FormData();
  formData.append('audio', audioBlob); // Append the audio blob to the FormData

  try {
    // Make a POST request to the Deepgram API with the audio data
    const response = await axios.post(DEEPGRAM_API_URL, formData, {
      headers: {
        'Authorization': `Token ${DEEPGRAM_API_KEY}`, // Include the API key for authorization
        'Content-Type': 'multipart/form-data', // Set the content type for file upload
      },
    });

    // Return the response data containing the transcription result
    return response.data;
  } catch (error) {
    // Log any errors that occur during the transcription request
    console.error('Transcription error:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
