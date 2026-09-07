/**
 * 演示版提示条 - 在页面顶部显示醒目的演示提示
 */
(function() {
  'use strict';

  function addDemoBanner() {
    // 避免重复添加
    if (document.getElementById('demo-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'demo-banner';
    banner.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      background: linear-gradient(90deg, #fef3c7, #fde68a, #fef3c7);
      border-bottom: 2px solid #f59e0b;
      padding: 8px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      color: #92400e;
      box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);
      animation: slideDown 0.3s ease-out;
    `;

    banner.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 8px;">
        <i class="fa fa-exclamation-triangle" style="color: #d97706;"></i>
        <strong>演示版</strong> - 所有数据均为模拟数据，仅用于演示展示
        <span style="margin-left: 12px; font-size: 12px; font-weight: normal; color: #b45309;">
          学生账号：2024001 / 123456 &nbsp;|&nbsp; 宿管账号：D001 / 123456
        </span>
        <button id="demo-reset-btn" style="margin-left: 12px; padding: 3px 10px; font-size: 12px; background: #f59e0b; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
          重置数据
        </button>
      </span>
    `;

    document.body.insertBefore(banner, document.body.firstChild);

    // 给 body 加 padding 避免内容被遮挡
    document.body.style.paddingTop = '42px';

    // 绑定重置按钮
    const resetBtn = document.getElementById('demo-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        if (confirm('确定要重置所有模拟数据吗？这将恢复到初始状态。')) {
          if (window.MockData && window.MockData.resetAllData) {
            window.MockData.resetAllData();
          } else {
            // 备用方案：直接清除 localStorage
            localStorage.removeItem('dormitory_students');
            localStorage.removeItem('dormitory_dorms');
            localStorage.removeItem('dormitory_admins');
            sessionStorage.clear();
          }
          alert('数据已重置，页面即将刷新...');
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 500);
        }
      });
    }
  }

  // 添加动画样式
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideDown {
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // 页面加载完成后添加提示条（仅在登录页显示）
  function initBanner() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    // 只在登录页显示演示条
    if (filename === 'index.html' || filename === '' || filename === '/') {
      addDemoBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
