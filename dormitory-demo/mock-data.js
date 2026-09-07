/**
 * 宿舍管理系统 - 模拟数据模块
 * 所有数据存储在 localStorage 中，模拟后端 API 行为
 * 使用 setTimeout 模拟网络延迟
 */

(function(global) {
  'use strict';

  // ============ 存储键名 ============
  const STORAGE_KEYS = {
    STUDENTS: 'dormitory_students',
    DORMS: 'dormitory_dorms',
    ADMINS: 'dormitory_admins',
    CURRENT_LOGIN: 'dormitory_current_login'
  };

  // ============ 默认模拟数据 ============
  const DEFAULT_DORMS = [
    { dormId: 1, buildingNo: 'A栋', dormNo: '101', floorNo: 1, roomType: '4人间', capacity: 4, currentCount: 3, status: 'available', createdAt: '2024-01-15T08:00:00' },
    { dormId: 2, buildingNo: 'A栋', dormNo: '102', floorNo: 1, roomType: '4人间', capacity: 4, currentCount: 4, status: 'full', createdAt: '2024-01-15T08:00:00' },
    { dormId: 3, buildingNo: 'A栋', dormNo: '201', floorNo: 2, roomType: '6人间', capacity: 6, currentCount: 4, status: 'available', createdAt: '2024-01-15T08:00:00' },
    { dormId: 4, buildingNo: 'A栋', dormNo: '202', floorNo: 2, roomType: '4人间', capacity: 4, currentCount: 2, status: 'available', createdAt: '2024-01-15T08:00:00' },
    { dormId: 5, buildingNo: 'B栋', dormNo: '101', floorNo: 1, roomType: '4人间', capacity: 4, currentCount: 4, status: 'full', createdAt: '2024-02-10T09:00:00' },
    { dormId: 6, buildingNo: 'B栋', dormNo: '102', floorNo: 1, roomType: '2人间', capacity: 2, currentCount: 1, status: 'available', createdAt: '2024-02-10T09:00:00' },
    { dormId: 7, buildingNo: 'B栋', dormNo: '301', floorNo: 3, roomType: '6人间', capacity: 6, currentCount: 6, status: 'full', createdAt: '2024-02-10T09:00:00' },
    { dormId: 8, buildingNo: 'C栋', dormNo: '101', floorNo: 1, roomType: '8人间', capacity: 8, currentCount: 5, status: 'available', createdAt: '2024-03-05T10:00:00' },
    { dormId: 9, buildingNo: 'C栋', dormNo: '201', floorNo: 2, roomType: '4人间', capacity: 4, currentCount: 0, status: 'maintenance', createdAt: '2024-03-05T10:00:00' },
    { dormId: 10, buildingNo: 'C栋', dormNo: '301', floorNo: 3, roomType: '4人间', capacity: 4, currentCount: 3, status: 'available', createdAt: '2024-03-05T10:00:00' },
    { dormId: 11, buildingNo: 'D栋', dormNo: '101', floorNo: 1, roomType: '2人间', capacity: 2, currentCount: 2, status: 'full', createdAt: '2024-04-01T11:00:00' },
    { dormId: 12, buildingNo: 'D栋', dormNo: '201', floorNo: 2, roomType: '4人间', capacity: 4, currentCount: 1, status: 'available', createdAt: '2024-04-01T11:00:00' },
  ];

  const DEFAULT_STUDENTS = [
    { studentId: 1, studentNo: '2024001', name: '张三', gender: '男', phone: '13800138001', email: 'zhangsan@example.com', className: '计算机科学与技术1班', dormId: 1, buildingNo: 'A栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 2, studentNo: '2024002', name: '李四', gender: '男', phone: '13800138002', email: 'lisi@example.com', className: '计算机科学与技术1班', dormId: 1, buildingNo: 'A栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 3, studentNo: '2024003', name: '王五', gender: '男', phone: '13800138003', email: 'wangwu@example.com', className: '计算机科学与技术1班', dormId: 1, buildingNo: 'A栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 4, studentNo: '2024004', name: '赵六', gender: '男', phone: '13800138004', email: 'zhaoliu@example.com', className: '软件工程2班', dormId: 2, buildingNo: 'A栋', dormNo: '102', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 5, studentNo: '2024005', name: '钱七', gender: '男', phone: '13800138005', email: 'qianqi@example.com', className: '软件工程2班', dormId: 2, buildingNo: 'A栋', dormNo: '102', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 6, studentNo: '2024006', name: '孙八', gender: '男', phone: '13800138006', email: 'sunba@example.com', className: '软件工程2班', dormId: 2, buildingNo: 'A栋', dormNo: '102', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 7, studentNo: '2024007', name: '周九', gender: '男', phone: '13800138007', email: 'zhoujiu@example.com', className: '软件工程2班', dormId: 2, buildingNo: 'A栋', dormNo: '102', password: '123456', status: '在校', createdAt: '2024-09-01T08:00:00' },
    { studentId: 8, studentNo: '2024008', name: '吴十', gender: '女', phone: '13800138008', email: 'wushi@example.com', className: '数据科学3班', dormId: 5, buildingNo: 'B栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-02T08:00:00' },
    { studentId: 9, studentNo: '2024009', name: '郑十一', gender: '女', phone: '13800138009', email: 'zheng11@example.com', className: '数据科学3班', dormId: 5, buildingNo: 'B栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-02T08:00:00' },
    { studentId: 10, studentNo: '2024010', name: '王十二', gender: '女', phone: '13800138010', email: 'wang12@example.com', className: '数据科学3班', dormId: 5, buildingNo: 'B栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-02T08:00:00' },
    { studentId: 11, studentNo: '2024011', name: '冯十三', gender: '女', phone: '13800138011', email: 'feng13@example.com', className: '数据科学3班', dormId: 5, buildingNo: 'B栋', dormNo: '101', password: '123456', status: '在校', createdAt: '2024-09-02T08:00:00' },
    { studentId: 12, studentNo: '2024012', name: '陈十四', gender: '女', phone: '13800138012', email: 'chen14@example.com', className: '人工智能1班', dormId: 6, buildingNo: 'B栋', dormNo: '102', password: '123456', status: '在校', createdAt: '2024-09-02T08:00:00' },
    { studentId: 13, studentNo: '2024013', name: '褚十五', gender: '男', phone: '13800138013', email: 'chu15@example.com', className: '网络工程1班', dormId: 0, buildingNo: '', dormNo: '', password: '123456', status: '在校', createdAt: '2024-09-03T08:00:00' },
    { studentId: 14, studentNo: '2024014', name: '卫十六', gender: '男', phone: '13800138014', email: 'wei16@example.com', className: '网络工程1班', dormId: 0, buildingNo: '', dormNo: '', password: '123456', status: '退宿', createdAt: '2024-09-03T08:00:00' },
    { studentId: 15, studentNo: '2024015', name: '蒋十七', gender: '女', phone: '13800138015', email: 'jiang17@example.com', className: '物联网2班', dormId: 7, buildingNo: 'B栋', dormNo: '301', password: '123456', status: '在校', createdAt: '2024-09-03T08:00:00' },
  ];

  const DEFAULT_ADMINS = [
    { adminId: 1, adminNo: 'D001', name: '李主管', phone: '13900139001', email: 'lizhuguan@example.com', buildingNo: 'A栋', role: '主管', password: '123456', createdAt: '2023-06-01T08:00:00' },
    { adminId: 2, adminNo: 'D002', name: '王阿姨', phone: '13900139002', email: 'wangayi@example.com', buildingNo: 'A栋', role: '普通宿管', password: '123456', createdAt: '2023-08-15T08:00:00' },
    { adminId: 3, adminNo: 'D003', name: '张阿姨', phone: '13900139003', email: 'zhangayi@example.com', buildingNo: 'B栋', role: '普通宿管', password: '123456', createdAt: '2023-09-01T08:00:00' },
    { adminId: 4, adminNo: 'D004', name: '刘师傅', phone: '13900139004', email: 'liushifu@example.com', buildingNo: 'C栋', role: '普通宿管', password: '123456', createdAt: '2024-01-10T08:00:00' },
    { adminId: 5, adminNo: 'D005', name: '陈阿姨', phone: '13900139005', email: 'chenayi@example.com', buildingNo: 'D栋', role: '普通宿管', password: '123456', createdAt: '2024-03-20T08:00:00' },
  ];

  // ============ 工具函数 ============

  // 模拟网络延迟
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 300));
  }

  // 从 localStorage 获取数据
  function getStorageData(key, defaultData) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('读取 localStorage 失败:', e);
    }
    // 初始化默认数据
    localStorage.setItem(key, JSON.stringify(defaultData));
    return [...defaultData];
  }

  // 保存数据到 localStorage
  function setStorageData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('写入 localStorage 失败:', e);
    }
  }

  // 生成新的 ID
  function generateNextId(items, idField) {
    if (!items || items.length === 0) return 1;
    const maxId = items.reduce((max, item) => Math.max(max, item[idField] || 0), 0);
    return maxId + 1;
  }

  // ============ 学生相关 API ============

  const MockStudentAPI = {
    // 学生登录
    async login(studentNo, password) {
      await delay(500);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const student = students.find(s => s.studentNo === studentNo && s.password === password);

      if (student) {
        const studentInfo = { ...student };
        delete studentInfo.password;
        return { success: true, student: studentInfo, message: '登录成功' };
      }
      return { success: false, message: '学号或密码错误' };
    },

    // 学生注册
    async register(data) {
      await delay(600);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);

      // 检查学号是否已存在
      if (students.some(s => s.studentNo === data.studentNo)) {
        return { success: false, message: '该学号已被注册' };
      }

      const newStudent = {
        studentId: generateNextId(students, 'studentId'),
        studentNo: data.studentNo,
        name: data.name,
        gender: data.gender || '男',
        phone: data.phone || '',
        email: data.email || '',
        className: data.className || '',
        dormId: data.dormId || 0,
        buildingNo: data.buildingNo || '',
        dormNo: data.dormNo || '',
        password: data.password,
        status: data.dormId && data.dormId > 0 ? '在校' : '',
        createdAt: new Date().toISOString()
      };

      // 如果分配了宿舍，更新宿舍人数
      if (newStudent.dormId > 0) {
        const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
        const dorm = dorms.find(d => d.dormId === newStudent.dormId);
        if (dorm) {
          newStudent.buildingNo = dorm.buildingNo;
          newStudent.dormNo = dorm.dormNo;
          dorm.currentCount = (dorm.currentCount || 0) + 1;
          if (dorm.currentCount >= dorm.capacity) {
            dorm.status = 'full';
          }
          setStorageData(STORAGE_KEYS.DORMS, dorms);
        }
      }

      students.push(newStudent);
      setStorageData(STORAGE_KEYS.STUDENTS, students);

      const studentInfo = { ...newStudent };
      delete studentInfo.password;
      return { success: true, student: studentInfo, autoLogin: true, message: '注册成功' };
    },

    // 获取学生信息（通过ID）
    async getById(id) {
      await delay(200);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const student = students.find(s => s.studentId === id || s.id === id);
      if (student) {
        return { ...student };
      }
      return { success: false, message: '学生不存在' };
    },

    // 获取学生信息（通过学号）
    async getByNo(studentNo) {
      await delay(200);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const student = students.find(s => s.studentNo === studentNo);
      if (student) {
        return { ...student };
      }
      return { success: false, message: '学生不存在' };
    },

    // 获取所有学生列表
    async list() {
      await delay(300);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      return students.map(s => {
        const info = { ...s };
        delete info.password;
        return info;
      });
    },

    // 根据宿舍获取学生
    async getByDorm(dormId) {
      await delay(200);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      return students
        .filter(s => s.dormId === dormId && s.status !== '退宿')
        .map(s => {
          const info = { ...s };
          delete info.password;
          return info;
        });
    },

    // 更新学生信息
    async update(data) {
      await delay(300);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const index = students.findIndex(s => s.studentId === data.studentId || s.id === data.studentId);

      if (index === -1) {
        return { success: false, message: '学生不存在' };
      }

      // 保留原密码
      const originalPassword = students[index].password;
      students[index] = { ...students[index], ...data, password: originalPassword };
      setStorageData(STORAGE_KEYS.STUDENTS, students);

      return { success: true, message: '更新成功' };
    },

    // 添加学生
    async add(data) {
      await delay(400);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);

      if (students.some(s => s.studentNo === data.studentNo)) {
        return { success: false, message: '该学号已存在' };
      }

      const newStudent = {
        studentId: generateNextId(students, 'studentId'),
        studentNo: data.studentNo,
        name: data.name,
        gender: data.gender || '男',
        phone: data.phone || '',
        email: data.email || '',
        className: data.className || '',
        dormId: data.dormId || 0,
        buildingNo: data.buildingNo || '',
        dormNo: data.dormNo || '',
        password: data.password || '123456',
        status: data.status || (data.dormId && data.dormId > 0 ? '在校' : ''),
        createdAt: new Date().toISOString()
      };

      // 如果分配了宿舍，更新宿舍人数
      if (newStudent.dormId > 0) {
        const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
        const dorm = dorms.find(d => d.dormId === newStudent.dormId);
        if (dorm) {
          newStudent.buildingNo = dorm.buildingNo;
          newStudent.dormNo = dorm.dormNo;
          dorm.currentCount = (dorm.currentCount || 0) + 1;
          if (dorm.currentCount >= dorm.capacity) {
            dorm.status = 'full';
          }
          setStorageData(STORAGE_KEYS.DORMS, dorms);
        }
      }

      students.push(newStudent);
      setStorageData(STORAGE_KEYS.STUDENTS, students);

      return { success: true, message: '添加成功' };
    },

    // 删除学生
    async remove(id) {
      await delay(300);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const index = students.findIndex(s => s.studentId === id || s.id === id);

      if (index === -1) {
        return { success: false, message: '学生不存在' };
      }

      const student = students[index];
      // 如果学生有宿舍，更新宿舍人数
      if (student.dormId && student.dormId > 0 && student.status !== '退宿') {
        const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
        const dorm = dorms.find(d => d.dormId === student.dormId);
        if (dorm && dorm.currentCount > 0) {
          dorm.currentCount--;
          if (dorm.currentCount < dorm.capacity && dorm.status === 'full') {
            dorm.status = 'available';
          }
          setStorageData(STORAGE_KEYS.DORMS, dorms);
        }
      }

      students.splice(index, 1);
      setStorageData(STORAGE_KEYS.STUDENTS, students);

      return { success: true, message: '删除成功' };
    },

    // 学生退宿
    async moveOut(studentId) {
      await delay(400);
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const index = students.findIndex(s => s.studentId === studentId || s.id === studentId);

      if (index === -1) {
        return { success: false, message: '学生不存在' };
      }

      const student = students[index];
      const dormId = student.dormId;

      // 更新学生状态
      students[index].status = '退宿';
      students[index].dormId = 0;
      students[index].buildingNo = '';
      students[index].dormNo = '';
      setStorageData(STORAGE_KEYS.STUDENTS, students);

      // 更新宿舍人数
      if (dormId && dormId > 0) {
        const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
        const dorm = dorms.find(d => d.dormId === dormId);
        if (dorm && dorm.currentCount > 0) {
          dorm.currentCount--;
          if (dorm.currentCount < dorm.capacity && dorm.status === 'full') {
            dorm.status = 'available';
          }
          setStorageData(STORAGE_KEYS.DORMS, dorms);
        }
      }

      return { success: true, message: '退宿成功' };
    },

    // 检查登录状态
    async checkLogin() {
      await delay(100);
      const loginType = sessionStorage.getItem('loginType');
      const studentStr = sessionStorage.getItem('student');

      if (loginType === 'student' && studentStr) {
        try {
          const student = JSON.parse(studentStr);
          return { success: true, isLogin: true, student: student, data: student };
        } catch (e) {
          // ignore
        }
      }
      return { success: false, isLogin: false };
    }
  };

  // ============ 宿舍相关 API ============

  const MockDormAPI = {
    // 获取宿舍列表
    async list() {
      await delay(300);
      return getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
    },

    // 获取可用宿舍列表
    async available() {
      await delay(200);
      const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
      return dorms.filter(d => d.status === 'available' && d.currentCount < d.capacity);
    },

    // 获取单个宿舍信息
    async getById(id) {
      await delay(200);
      const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
      const dorm = dorms.find(d => d.dormId === id || d.id === id);
      if (dorm) {
        return { ...dorm };
      }
      return { success: false, message: '宿舍不存在' };
    },

    // 添加宿舍
    async add(data) {
      await delay(400);
      const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);

      // 检查同一楼栋是否有相同宿舍号
      if (dorms.some(d => d.buildingNo === data.buildingNo && d.dormNo === data.dormNo)) {
        return { success: false, message: '该楼栋已存在相同宿舍号' };
      }

      const newDorm = {
        dormId: generateNextId(dorms, 'dormId'),
        buildingNo: data.buildingNo,
        dormNo: data.dormNo,
        floorNo: data.floorNo || 1,
        roomType: data.roomType || '4人间',
        capacity: data.capacity || 4,
        currentCount: data.currentCount || 0,
        status: data.status || 'available',
        createdAt: new Date().toISOString()
      };

      dorms.push(newDorm);
      setStorageData(STORAGE_KEYS.DORMS, dorms);

      return { success: true, message: '添加成功' };
    },

    // 更新宿舍
    async update(data) {
      await delay(300);
      const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
      const index = dorms.findIndex(d => d.dormId === data.dormId || d.id === data.dormId);

      if (index === -1) {
        return { success: false, message: '宿舍不存在' };
      }

      dorms[index] = { ...dorms[index], ...data };
      setStorageData(STORAGE_KEYS.DORMS, dorms);

      return { success: true, message: '更新成功' };
    },

    // 删除宿舍
    async remove(id) {
      await delay(300);
      const dorms = getStorageData(STORAGE_KEYS.DORMS, DEFAULT_DORMS);
      const index = dorms.findIndex(d => d.dormId === id || d.id === id);

      if (index === -1) {
        return { success: false, message: '宿舍不存在' };
      }

      // 检查是否还有学生
      const students = getStorageData(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
      const hasStudents = students.some(s => s.dormId === id && s.status !== '退宿');
      if (hasStudents) {
        return { success: false, message: '该宿舍还有学生入住，无法删除' };
      }

      dorms.splice(index, 1);
      setStorageData(STORAGE_KEYS.DORMS, dorms);

      return { success: true, message: '删除成功' };
    }
  };

  // ============ 宿管相关 API ============

  const MockAdminAPI = {
    // 宿管登录
    async login(adminNo, password) {
      await delay(500);
      const admins = getStorageData(STORAGE_KEYS.ADMINS, DEFAULT_ADMINS);
      const admin = admins.find(a => a.adminNo === adminNo && a.password === password);

      if (admin) {
        return { success: true, adminNo: admin.adminNo, name: admin.name, role: admin.role, buildingNo: admin.buildingNo, message: '登录成功' };
      }
      return { success: false, message: '工号或密码错误' };
    },

    // 检查登录状态
    async checkLogin() {
      await delay(100);
      const loginType = sessionStorage.getItem('loginType');
      if (loginType === 'dormAdmin') {
        return {
          success: true,
          adminNo: sessionStorage.getItem('adminNo') || '',
          name: sessionStorage.getItem('name') || '',
          role: sessionStorage.getItem('role') || '普通宿管',
          buildingNo: sessionStorage.getItem('buildingNo') || ''
        };
      }
      return { success: false };
    },

    // 获取宿管列表
    async list() {
      await delay(300);
      const admins = getStorageData(STORAGE_KEYS.ADMINS, DEFAULT_ADMINS);
      return admins.map(a => {
        const info = { ...a };
        delete info.password;
        return info;
      });
    },

    // 获取单个宿管
    async getById(id) {
      await delay(200);
      const admins = getStorageData(STORAGE_KEYS.ADMINS, DEFAULT_ADMINS);
      const admin = admins.find(a => a.adminId === id || a.id === id);
      if (admin) {
        const info = { ...admin };
        delete info.password;
        return info;
      }
      return { success: false, message: '宿管不存在' };
    },

    // 添加宿管
    async add(data) {
      await delay(400);
      const admins = getStorageData(STORAGE_KEYS.ADMINS, DEFAULT_ADMINS);

      if (admins.some(a => a.adminNo === data.adminNo)) {
        return { success: false, message: '该工号已存在' };
      }

      const newAdmin = {
        adminId: generateNextId(admins, 'adminId'),
        adminNo: data.adminNo,
        name: data.name,
        phone: data.phone || '',
        email: data.email || '',
        buildingNo: data.buildingNo || '',
        role: data.role || '普通宿管',
        password: data.password || '123456',
        createdAt: new Date().toISOString()
      };

      admins.push(newAdmin);
      setStorageData(STORAGE_KEYS.ADMINS, admins);

      return { success: true, message: '添加成功' };
    },

    // 更新宿管
    async update(data) {
      await delay(300);
      const admins = getStorageData(STORAGE_KEYS.ADMINS, DEFAULT_ADMINS);
      const index = admins.findIndex(a => a.adminId === data.adminId || a.id === data.adminId);

      if (index === -1) {
        return { success: false, message: '宿管不存在' };
      }

      // 保留原密码
      const originalPassword = admins[index].password;
      admins[index] = { ...admins[index], ...data, password: data.password || originalPassword };
      setStorageData(STORAGE_KEYS.ADMINS, admins);

      return { success: true, message: '更新成功' };
    },

    // 删除宿管
    async remove(id) {
      await delay(300);
      const admins = getStorageData(STORAGE_KEYS.ADMINS, DEFAULT_ADMINS);
      const index = admins.findIndex(a => a.adminId === id || a.id === id);

      if (index === -1) {
        return { success: false, message: '宿管不存在' };
      }

      admins.splice(index, 1);
      setStorageData(STORAGE_KEYS.ADMINS, admins);

      return { success: true, message: '删除成功' };
    }
  };

  // ============ 重置数据 ============
  function resetAllData() {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(DEFAULT_STUDENTS));
    localStorage.setItem(STORAGE_KEYS.DORMS, JSON.stringify(DEFAULT_DORMS));
    localStorage.setItem(STORAGE_KEYS.ADMINS, JSON.stringify(DEFAULT_ADMINS));
    sessionStorage.clear();
  }

  // ============ 初始化数据（首次加载时） ============
  function initData() {
    if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(DEFAULT_STUDENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.DORMS)) {
      localStorage.setItem(STORAGE_KEYS.DORMS, JSON.stringify(DEFAULT_DORMS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ADMINS)) {
      localStorage.setItem(STORAGE_KEYS.ADMINS, JSON.stringify(DEFAULT_ADMINS));
    }
  }

  // 立即初始化
  initData();

  // ============ 导出到全局 ============
  global.MockData = {
    student: MockStudentAPI,
    dorm: MockDormAPI,
    admin: MockAdminAPI,
    resetAllData: resetAllData,
    initData: initData
  };

})(window);
