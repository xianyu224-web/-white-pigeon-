// ===== 中英文切换 =====
const translations = {
  zh: {
    pageTitle: 'Personal Blog',
    navWorks: '作品集',
    navAbout: '关于',
    navContact: '联系',
    heroRole: '学生 / 开发者',
    heroName: '易雯静 · 湖南郴州',
    heroMore: '了解更多 →',
    worksTitle: '作品集',
    worksMore: '所有作品 →',
    cinemaTitle: '电影票管理系统 <span class="demo-tag">在线演示 →</span>',
    cinemaDesc: '基于 Java Servlet + MySQL 的电影票选座购票系统，支持电影浏览、选座、支付、订单管理等完整功能。',
    demoTag: '在线演示 →',
    dormitoryTitle: '宿舍管理系统 <span class="demo-tag">在线演示 →</span>',
    dormitoryDesc: '基于 Java Web 的宿舍管理系统，支持学生和宿管双角色，涵盖学生信息、宿舍分配、退宿管理等功能。',
    aboutEdu: '教育经历',
    schoolName: '郴州思科职业学院',
    schoolMajor: '计算机专业技术',
    schoolDegree: '专科',
    aboutSkills: '技术栈',
    skillLang: '编程语言',
    skillFront: '前端 / 后端',
    skillOps: '系统与运维',
    skillDesign: '设计 / 多媒体',
    contactTitle: '联系方式',
    contactEmail: '邮箱',
    contactWechat: '微信'
  },
  en: {
    pageTitle: 'Personal Blog',
    navWorks: 'Portfolio',
    navAbout: 'About',
    navContact: 'Contact',
    heroRole: 'Student / Developer',
    heroName: 'Yi Wenjing · Chenzhou, Hunan',
    heroMore: 'Learn More →',
    worksTitle: 'Portfolio',
    worksMore: 'All Works →',
    cinemaTitle: 'Cinema Ticket System <span class="demo-tag">Live Demo →</span>',
    cinemaDesc: 'A movie ticket booking system based on Java Servlet + MySQL, supporting movie browsing, seat selection, payment, and order management.',
    demoTag: 'Live Demo →',
    dormitoryTitle: 'Dormitory Management System <span class="demo-tag">Live Demo →</span>',
    dormitoryDesc: 'A dormitory management system based on Java Web, supporting both student and admin roles, covering student info, dorm allocation, and check-out management.',
    aboutEdu: 'Education',
    schoolName: 'Chenzhou Cisco Vocational College',
    schoolMajor: 'Computer Science & Technology',
    schoolDegree: 'Associate Degree',
    aboutSkills: 'Tech Stack',
    skillLang: 'Programming Languages',
    skillFront: 'Frontend / Backend',
    skillOps: 'Systems & DevOps',
    skillDesign: 'Design / Multimedia',
    contactTitle: 'Contact',
    contactEmail: 'Email',
    contactWechat: 'WeChat'
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem('preferredLang', lang);
}

// 初始化语言
const savedLang = localStorage.getItem('preferredLang') || 'zh';
const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.value = savedLang;
  langSwitch.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}
setLanguage(savedLang);

// ===== 滚动触发入场动画 =====
const revealItems = document.querySelectorAll('.scroll-reveal-item');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealItems.forEach(item => revealObserver.observe(item));

// ===== 导航栏：滚动时自动高亮当前区块 =====
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// 平滑滚动（补偿固定导航栏高度）
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 65, behavior: 'smooth' });
    }
  });
});
