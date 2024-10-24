import React from 'react';
import { render } from '@testing-library/react';
import PastTranscriptions from '../components/PastTranscriptions';

test('renders list of past transcriptions', () => {
  const transcriptions = ["Hello World", "This is a test", "Another transcription"];
  const { getByText } = render(<PastTranscriptions transcriptions={transcriptions} />);
  
  transcriptions.forEach((text) => {
    expect(getByText(text)).toBeInTheDocument();
  });
});
