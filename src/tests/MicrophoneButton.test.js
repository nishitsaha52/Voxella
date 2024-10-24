import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MicrophoneButton from '../components/MicrophoneButton';
import useRecorder from '../hooks/useRecorder';

// Mock the useRecorder hook
jest.mock('../hooks/useRecorder');

describe('MicrophoneButton Component', () => {
  let startRecordingMock, stopRecordingMock;

  beforeEach(() => {
    // Define mock implementations for start and stop recording
    startRecordingMock = jest.fn();
    stopRecordingMock = jest.fn();

    // Mock the hook to return these functions
    useRecorder.mockReturnValue({
      startRecording: startRecordingMock,
      stopRecording: stopRecordingMock
    });
  });

  test('toggles recording state when button is clicked', async () => {
    const handleDataMock = jest.fn();
    const { getByRole } = render(<MicrophoneButton handleData={handleDataMock} />);
    
    const button = getByRole('button');
    
    // Initial click to start recording
    fireEvent.click(button);
    
    // Expect startRecording to be called and button to have 'recording' class
    expect(startRecordingMock).toHaveBeenCalled();
    await waitFor(() => expect(button).toHaveClass('recording'));
    
    // Second click to stop recording
    fireEvent.click(button);
    
    // Expect stopRecording to be called and button to have 'not-recording' class
    expect(stopRecordingMock).toHaveBeenCalled();
    await waitFor(() => expect(button).toHaveClass('not-recording'));
  });
});
