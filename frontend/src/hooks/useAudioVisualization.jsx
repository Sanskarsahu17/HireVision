import { useState, useEffect } from 'react';

export const useAudioVisualization = (isRecording) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [audioLevels, setAudioLevels] = useState(Array(30).fill(0));

  useEffect(() => {
    if (isRecording) {
      const initAudio = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const context = new AudioContext();
          const source = context.createMediaStreamSource(stream);
          const analyzer = context.createAnalyser();
          analyzer.fftSize = 64;
          source.connect(analyzer);

          setAudioContext(context);
          setAudioStream(stream);

          const dataArray = new Uint8Array(analyzer.frequencyBinCount);
          
          const updateLevels = () => {
            if (!isRecording) return;
            
            analyzer.getByteFrequencyData(dataArray);
            const levels = Array.from(dataArray)
              .slice(0, 30)
              .map(value => (value / 255) * 100);
            
            setAudioLevels(levels);
            requestAnimationFrame(updateLevels);
          };

          updateLevels();
        } catch (error) {
          console.error('Error accessing microphone:', error);
        }
      };

      initAudio();
    } else {
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      if (audioContext) {
        audioContext.close();
      }
      setAudioLevels(Array(30).fill(0));
    }

    return () => {
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [isRecording]);

  return audioLevels;
};