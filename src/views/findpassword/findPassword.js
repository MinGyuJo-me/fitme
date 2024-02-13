import React, { useState } from 'react';
import './findPassword.css'; // CSS 파일 import

function FindPassword() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: 이메일 입력, 2: 인증코드 입력, 3: 새 비밀번호 입력

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // 이메일을 서버로 보내고, 유효한 이메일인지 확인하는 코드 작성
    // 서버에서 이메일 전송 후 인증코드를 발급하도록 요청

    // 인증코드 입력 단계로 전환
    setStep(2);
  };

  const handleVerificationCodeSubmit = (e) => {
    e.preventDefault();
    // 인증코드를 서버로 보내고, 올바른 코드인지 확인하는 코드 작성

    // 새 비밀번호 입력 단계로 전환
    setStep(3);
  };

  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault();
    // 새 비밀번호를 서버로 보내고, 변경하는 코드 작성
    alert('비밀번호가 성공적으로 변경되었습니다.');

    // 비밀번호 찾기 과정 종료 후 다른 페이지로 이동하도록 코드 작성
  };

  return (
    <div>
      {step === 1 && (
        <form className="step1" onSubmit={handleEmailSubmit}>
          <label>
            이메일:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <button type="submit">인증메일 발송</button>
        </form>
      )}
      {step === 2 && (
        <form className="step2" onSubmit={handleVerificationCodeSubmit}>
          <label>
            인증코드:
            <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
          </label>
          <button type="submit">인증 확인</button>
        </form>
      )}
      {step === 3 && (
        <form className="step3" onSubmit={handlePasswordChangeSubmit}>
          <label>
            새 비밀번호:
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </label>
          <button type="submit">비밀번호 변경</button>
        </form>
      )}
    </div>
  );
}

export default FindPassword;
