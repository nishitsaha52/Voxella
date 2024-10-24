import React from 'react';
import { render } from '@testing-library/react';
import TranscriptionDisplay from '../components/TranscriptionDisplay';

test('displays provided transcription or default message', () => {
  const transcriptionText = "This is a sample transcription.";
  const { getByText, rerender } = render(<TranscriptionDisplay transcription={transcriptionText} />);
  
  // Check if the provided transcription is displayed
  expect(getByText(transcriptionText)).toBeInTheDocument();
  
  // Rerender with no transcription to check for default message
  rerender(<TranscriptionDisplay transcription="" />);
  expect(getByText('Start recording to see transcription...')).toBeInTheDocument();
});
