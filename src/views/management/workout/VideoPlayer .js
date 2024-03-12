import React, { useRef, useState, useEffect } from 'react';
import * as tmPose from '@teachablemachine/pose';

// useInterval 훅 정의
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [model, setModel] = useState(null);
  
  let [pause, setPause] = useState(false);
  
  let [count, setCount] = useState(0);
  let [stand, setStand] = useState(0);

  const dropRef = useRef(null);
  const videoRef = useRef(null);

  let check = 0;

  useEffect(() => {
    const loadModel = async () => {
      // Teachable Machine Pose 모델 로드
      const modelURL = './my_model/model.json';
      const metadataURL = './my_model/metadata.json';
      const loadedModel = await tmPose.load(modelURL, metadataURL);
      setModel(loadedModel);
    };

    loadModel();
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVideoSrc(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const getPredictionAccuracy = async () => {
    try {
      const videoElement = videoRef.current;
      if(!videoElement) return;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      
      // 특성 벡터 추출
      const features = await model.estimatePose(canvas);
      const { pose, posenetOutput } = features;
      
      // 모델에 전달하여 예측 실행
      const prediction = await model.predict(posenetOutput);

      let accuracy = prediction[1].probability.toFixed(2);
      if(!pause && accuracy > 0.95 && stand==0){
        check++;
        if(check >= 2){
          setCount(count=>count+1);
          setStand(stand=>stand+1);
          check = 0;
        }
      }else if(stand!=0 && accuracy < 0.3){
        setStand(0);
      }
      
    } catch (error) {
      console.error('Error getting prediction accuracy:', error);
    }
  };

  useInterval(() => {
    getPredictionAccuracy();
  }, 300);

  const handlePlaying = () => {
    setPause(false);
    pause = false;
  };

  const handlePause = () => {
    setPause(true);
    pause = true;
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('playing', handlePlaying);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        videoElement.removeEventListener('playing', handlePlaying);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, [videoRef]);

  return (
    <div>
      <div ref={dropRef} style={{ width: '100%', height: '300px', border: '2px dashed #ccc', textAlign: 'center', paddingTop: '30px' }} onDrop={handleDrop} onDragOver={handleDragOver}>
        {videoSrc ? (
          <video ref={videoRef} controls style={{ width: '100%', height: '100%' }}>
            <source src={videoSrc} type="video/mp4" />
            비디오 태그를 지원하지 않는 브라우저입니다.
          </video>
        ) : (
          <p>비디오 파일을 여기로 드래그 앤 드롭하세요.</p>
        )}
      </div>

      <div>
        <h2 id='pose-counts'>예측 정확도: {count}</h2>
      </div>
    </div>
  );
};

export default VideoPlayer;