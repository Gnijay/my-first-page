// 删掉 import 语句（浏览器不认识 import，CSS 已经在 index.html 里引入了）
// 直接用 React 全局变量（来自 index.html 里的 CDN）
const { useState } = React;

const IDUploadPage = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleUpload = (side) => {
    // 模拟上传/拍照功能
    console.log(`点击了${side}面上传`);
  };

  return (
    <div className="id-upload-page">
      {/* 这里保留你原来的所有页面结构代码，完全不动 */}
      {/* 状态栏 */}
      <div className="status-bar">
        <span className="time">14:43</span>
        <div className="status-icons">
          <span className="signal">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <rect x="2" y="14" width="4" height="6" rx="0.5" fill="currentColor"/>
              <rect x="8" y="10" width="4" height="10" rx="0.5" fill="currentColor"/>
              <rect x="14" y="6" width="4" height="14" rx="0.5" fill="currentColor"/>
            </svg>
          </span>
          <span className="network">5G</span>
          <span className="battery">
            <svg viewBox="0 0 24 12" width="24" height="12">
              <rect x="1" y="1" width="20" height="10" rx="2" stroke="currentColor" fill="none" strokeWidth="1.5"/>
              <rect x="3" y="3" width="14" height="6" rx="1" fill="currentColor"/>
              <rect x="21" y="4" width="2" height="4" rx="0.5" fill="currentColor"/>
            </svg>
          </span>
        </div>
      </div>

      {/* 导航栏 */}
      <div className="nav-bar">
        <button className="back-btn">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="title">证照上传</h1>
        <div className="placeholder"></div>
      </div>

      {/* 主内容区 */}
      <div className="content">
        {/* 头部提示 */}
        <div className="header-section">
          <h2 className="main-title">请扫描身份证正反面照片</h2>
          <button className="manual-entry-btn">
            填写身份证信息
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* 上传区域 */}
        <div className="upload-section">
          {/* 人像面 */}
          <div className="upload-card" onClick={() => handleUpload('front')}>
            <div className="scan-frame">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
              {frontImage ? (
                <img src={frontImage} alt="人像面" className="uploaded-image" />
              ) : (
                <div className="upload-placeholder">
                  <div className="id-preview front-preview">
                    <div className="id-lines">
                      <div className="line"></div>
                      <div className="line short"></div>
                      <div className="line"></div>
                    </div>
                    <div className="avatar-placeholder">
                      <div className="avatar-head"></div>
                      <div className="avatar-body"></div>
                    </div>
                  </div>
                  <div className="camera-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="24" cy="26" r="8" stroke="#999" strokeWidth="2" fill="none"/>
                      <circle cx="24" cy="26" r="4" fill="#999"/>
                      <rect x="8" y="14" width="32" height="24" rx="4" stroke="#999" strokeWidth="2" fill="none"/>
                      <circle cx="36" cy="18" r="2" fill="#999"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <p className="upload-text">
              点击相机识别 <span className="highlight">人像面</span>
            </p>
          </div>

          {/* 国徽面 */}
          <div className="upload-card" onClick={() => handleUpload('back')}>
            <div className="scan-frame">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
              {backImage ? (
                <img src={backImage} alt="国徽面" className="uploaded-image" />
              ) : (
                <div className="upload-placeholder">
                  <div className="id-preview back-preview">
                    <div className="emblem-placeholder">
                      <div className="emblem-circle">
                        <svg viewBox="0 0 40 40" width="40" height="40">
                          <circle cx="20" cy="20" r="18" stroke="#ccc" strokeWidth="1.5" fill="none"/>
                          <path d="M20 8l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" fill="#ccc"/>
                        </svg>
                      </div>
                    </div>
                    <div className="back-lines">
                      <div className="line long"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="camera-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="24" cy="26" r="8" stroke="#999" strokeWidth="2" fill="none"/>
                      <circle cx="24" cy="26" r="4" fill="#999"/>
                      <rect x="8" y="14" width="32" height="24" rx="4" stroke="#999" strokeWidth="2" fill="none"/>
                      <circle cx="36" cy="18" r="2" fill="#999"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <p className="upload-text">
              点击相机识别 <span className="highlight">国徽面</span>
            </p>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="tips-section">
          <span className="tips-text">拍摄时请保持身份证完整，字号清晰</span>
          <span className="tips-icon">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <circle cx="8" cy="8" r="7" stroke="#1890ff" strokeWidth="1.5" fill="none"/>
              <text x="8" y="12" textAnchor="middle" fill="#1890ff" fontSize="10" fontWeight="bold">?</text>
            </svg>
          </span>
        </div>
      </div>

      {/* 底部区域 */}
      <div className="footer-section">
        <p className="consent-text">您同意我们采集您的身份照片，用于身份验证</p>
        <button className="next-btn">下一步</button>
      </div>

      {/* 底部链接 */}
      <div className="bottom-link">
        <a href="#">其他证件入口</a>
      </div>
    </div>
  );
};

// 删掉 export 语句，新增渲染代码（浏览器能识别）
ReactDOM.createRoot(document.getElementById('root')).render(<IDUploadPage />);
