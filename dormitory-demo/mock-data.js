/**
 * 宿舍管理系统 - 演示版 Mock 数据
 * 所有数据存储在 localStorage 中
 */

// ========== 演示版提示条 ==========
function addDemoBanner() {
    if (document.getElementById('demoBanner')) return;
    const banner = document.createElement('div');
    banner.id = 'demoBanner';
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #000;
        color: #fff;
        text-align: center;
        padding: 10px 20px;
        font-size: 13px;
        font-weight: 500;
        z-index: 10000;
        letter-spacing: 0.5px;
        border-bottom: 1px solid #333;
        font-family: Inter, system-ui, sans-serif;
    `;
    banner.innerHTML = '<i class="fa fa-info-circle"></i> 演示版 - 所有数据均为模拟，仅供演示使用';
    document.body.appendChild(banner);
    document.body.style.paddingTop = '44px';
}

// ========== 数据初始化 ==========
const STORAGE_KEYS = {
    STUDENTS: 'dorm_mock_students',
    DORMS: 'dorm_mock_dorms',
    DORM_ADMINS: 'dorm_mock_dormadmins',
    CURRENT_USER: 'dorm_current_user',
    INITIALIZED: 'dorm_mock_initialized'
};

function initMockData() {
    if (localStorage.getItem(STORAGE_KEYS.INITIALIZED)) return;

    const dorms = [
        { dormId: 1, dormNo: '101', buildingNo: 'A栋', capacity: 4, currentCount: 3, roomType: '4人间', fee: 1200 },
        { dormId: 2, dormNo: '102', buildingNo: 'A栋', capacity: 4, currentCount: 4, roomType: '4人间', fee: 1200 },
        { dormId: 3, dormNo: '103', buildingNo: 'A栋', capacity: 4, currentCount: 2, roomType: '4人间', fee: 1200 },
        { dormId: 4, dormNo: '201', buildingNo: 'A栋', capacity: 6, currentCount: 4, roomType: '6人间', fee: 800 },
        { dormId: 5, dormNo: '202', buildingNo: 'A栋', capacity: 6, currentCount: 5, roomType: '6人间', fee: 800 },
        { dormId: 6, dormNo: '301', buildingNo: 'B栋', capacity: 4, currentCount: 3, roomType: '4人间', fee: 1200 },
        { dormId: 7, dormNo: '302', buildingNo: 'B栋', capacity: 4, currentCount: 0, roomType: '4人间', fee: 1200 },
        { dormId: 8, dormNo: '303', buildingNo: 'B栋', capacity: 4, currentCount: 4, roomType: '4人间', fee: 1200 },
        { dormId: 9, dormNo: '401', buildingNo: 'B栋', capacity: 6, currentCount: 2, roomType: '6人间', fee: 800 },
        { dormId: 10, dormNo: '402', buildingNo: 'B栋', capacity: 6, currentCount: 6, roomType: '6人间', fee: 800 },
        { dormId: 11, dormNo: '501', buildingNo: 'C栋', capacity: 4, currentCount: 1, roomType: '4人间', fee: 1200 },
        { dormId: 12, dormNo: '502', buildingNo: 'C栋', capacity: 4, currentCount: 3, roomType: '4人间', fee: 1200 },
        { dormId: 13, dormNo: '503', buildingNo: 'C栋', capacity: 4, currentCount: 2, roomType: '4人间', fee: 1200 },
        { dormId: 14, dormNo: '601', buildingNo: 'C栋', capacity: 6, currentCount: 0, roomType: '6人间', fee: 800 },
        { dormId: 15, dormNo: '602', buildingNo: 'C栋', capacity: 6, currentCount: 4, roomType: '6人间', fee: 800 }
    ];

    const students = [
        { studentId: 1, studentNo: '2024001', name: '张三', gender: '男', className: '计算机1班', phone: '13800138001', email: 'zhangsan@example.com', dormId: 1, dormNo: '101', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 2, studentNo: '2024002', name: '李四', gender: '男', className: '计算机1班', phone: '13800138002', email: 'lisi@example.com', dormId: 1, dormNo: '101', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 3, studentNo: '2024003', name: '王五', gender: '男', className: '计算机2班', phone: '13800138003', email: 'wangwu@example.com', dormId: 1, dormNo: '101', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 4, studentNo: '2024004', name: '赵六', gender: '男', className: '计算机2班', phone: '13800138004', email: 'zhaoliu@example.com', dormId: 2, dormNo: '102', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 5, studentNo: '2024005', name: '钱七', gender: '男', className: '软件工程1班', phone: '13800138005', email: 'qianqi@example.com', dormId: 2, dormNo: '102', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 6, studentNo: '2024006', name: '孙八', gender: '男', className: '软件工程1班', phone: '13800138006', email: 'sunba@example.com', dormId: 2, dormNo: '102', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 7, studentNo: '2024007', name: '周九', gender: '男', className: '软件工程2班', phone: '13800138007', email: 'zhoujiu@example.com', dormId: 2, dormNo: '102', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 8, studentNo: '2024008', name: '吴十', gender: '男', className: '软件工程2班', phone: '13800138008', email: 'wushi@example.com', dormId: 3, dormNo: '103', buildingNo: 'A栋', status: '退宿', password: '123456' },
        { studentId: 9, studentNo: '2024009', name: '郑十一', gender: '男', className: '网络工程1班', phone: '13800138009', email: 'zheng11@example.com', dormId: 3, dormNo: '103', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 10, studentNo: '2024010', name: '王小红', gender: '女', className: '网络工程1班', phone: '13800138010', email: 'wangxh@example.com', dormId: 4, dormNo: '201', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 11, studentNo: '2024011', name: '李小花', gender: '女', className: '网络工程2班', phone: '13800138011', email: 'lixh@example.com', dormId: 4, dormNo: '201', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 12, studentNo: '2024012', name: '张小美', gender: '女', className: '网络工程2班', phone: '13800138012', email: 'zhangxm@example.com', dormId: 4, dormNo: '201', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 13, studentNo: '2024013', name: '刘小丽', gender: '女', className: '物联网1班', phone: '13800138013', email: 'liuxl@example.com', dormId: 4, dormNo: '201', buildingNo: 'A栋', status: '退宿', password: '123456' },
        { studentId: 14, studentNo: '2024014', name: '陈小芳', gender: '女', className: '物联网1班', phone: '13800138014', email: 'chenxf@example.com', dormId: 5, dormNo: '202', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 15, studentNo: '2024015', name: '杨小燕', gender: '女', className: '物联网2班', phone: '13800138015', email: 'yangxy@example.com', dormId: 5, dormNo: '202', buildingNo: 'A栋', status: '在校', password: '123456' },
        { studentId: 16, studentNo: '2024016', name: '黄小军', gender: '男', className: '人工智能1班', phone: '13800138016', email: 'huangxj@example.com', dormId: 6, dormNo: '301', buildingNo: 'B栋', status: '在校', password: '123456' },
        { studentId: 17, studentNo: '2024017', name: '朱小伟', gender: '男', className: '人工智能1班', phone: '13800138017', email: 'zhuxw@example.com', dormId: 6, dormNo: '301', buildingNo: 'B栋', status: '在校', password: '123456' },
        { studentId: 18, studentNo: '2024018', name: '林小强', gender: '男', className: '人工智能2班', phone: '13800138018', email: 'linxq@example.com', dormId: 6, dormNo: '301', buildingNo: 'B栋', status: '在校', password: '123456' },
        { studentId: 19, studentNo: '2024019', name: '何小明', gender: '男', className: '人工智能2班', phone: '13800138019', email: 'hexm@example.com', dormId: 8, dormNo: '303', buildingNo: 'B栋', status: '在校', password: '123456' },
        { studentId: 20, studentNo: '2024020', name: '罗小勇', gender: '男', className: '大数据1班', phone: '13800138020', email: 'luoxy@example.com', dormId: 8, dormNo: '303', buildingNo: 'B栋', status: '在校', password: '123456' }
    ];

    const dormAdmins = [
        { id: 1, adminNo: 'AD001', name: '王阿姨', buildingNo: 'A栋', role: '主管', phone: '13900139001', email: 'wangayi@example.com', password: '123456' },
        { id: 2, adminNo: 'AD002', name: '李阿姨', buildingNo: 'A栋', role: '普通宿管', phone: '13900139002', email: 'liayi@example.com', password: '123456' },
        { id: 3, adminNo: 'AD003', name: '张叔叔', buildingNo: 'B栋', role: '主管', phone: '13900139003', email: 'zhangss@example.com', password: '123456' },
        { id: 4, adminNo: 'AD004', name: '刘叔叔', buildingNo: 'B栋', role: '普通宿管', phone: '13900139004', email: 'liuss@example.com', password: '123456' },
        { id: 5, adminNo: 'AD005', name: '陈阿姨', buildingNo: 'C栋', role: '主管', phone: '13900139005', email: 'chenayi@example.com', password: '123456' },
        { id: 6, adminNo: 'AD006', name: '赵阿姨', buildingNo: 'C栋', role: '普通宿管', phone: '13900139006', email: 'zhaoyi@example.com', password: '123456' }
    ];

    localStorage.setItem(STORAGE_KEYS.DORMS, JSON.stringify(dorms));
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    localStorage.setItem(STORAGE_KEYS.DORM_ADMINS, JSON.stringify(dormAdmins));
    localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
}

initMockData();

// ========== 数据访问 ==========
function getDorms() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.DORMS) || '[]'); }
function saveDorms(d) { localStorage.setItem(STORAGE_KEYS.DORMS, JSON.stringify(d)); }
function getStudents() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDENTS) || '[]'); }
function saveStudents(s) { localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(s)); }
function getDormAdmins() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.DORM_ADMINS) || '[]'); }
function saveDormAdmins(a) { localStorage.setItem(STORAGE_KEYS.DORM_ADMINS, JSON.stringify(a)); }

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || 'null');
}
function setCurrentUser(user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
}
function clearCurrentUser() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

// ========== 认证 ==========
function studentLogin(studentNo, password) {
    const students = getStudents();
    const s = students.find(x => x.studentNo === studentNo && x.password === password);
    if (!s) return { success: false, message: '学号或密码错误' };
    if (s.status === '退宿') return { success: false, message: '您已退宿，无法登录' };
    const user = { ...s, role: 'student' };
    delete user.password;
    setCurrentUser(user);
    return { success: true, user };
}

function adminLogin(adminNo, password) {
    const admins = getDormAdmins();
    const a = admins.find(x => x.adminNo === adminNo && x.password === password);
    if (!a) return { success: false, message: '工号或密码错误' };
    const user = { ...a, role: 'admin' };
    delete user.password;
    setCurrentUser(user);
    return { success: true, user };
}

function logout() {
    clearCurrentUser();
    window.location.href = 'index.html';
}

function requireLogin() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return user;
}

function requireAdmin() {
    const user = requireLogin();
    if (user && user.role !== 'admin') {
        window.location.href = 'profile.html';
        return null;
    }
    return user;
}

// ========== 学生管理 ==========
function getStudentPage(page, size, keyword) {
    let list = getStudents();
    if (keyword) {
        const kw = keyword.toLowerCase();
        list = list.filter(s =>
            s.studentNo.toLowerCase().includes(kw) ||
            s.name.toLowerCase().includes(kw) ||
            (s.className && s.className.toLowerCase().includes(kw))
        );
    }
    const total = list.length;
    const start = (page - 1) * size;
    const pageList = list.slice(start, start + size);
    return { list: pageList, total, page, size, totalPages: Math.ceil(total / size) || 1 };
}

function addStudent(student) {
    const students = getStudents();
    if (students.find(s => s.studentNo === student.studentNo)) {
        return { success: false, message: '学号已存在' };
    }
    const newId = students.length > 0 ? Math.max(...students.map(s => s.studentId)) + 1 : 1;
    let dormNo = '', buildingNo = '';
    if (student.dormId && student.dormId > 0) {
        const dorm = getDorms().find(d => d.dormId === student.dormId);
        if (dorm) { dormNo = dorm.dormNo; buildingNo = dorm.buildingNo; }
    }
    const newStudent = {
        studentId: newId,
        studentNo: student.studentNo,
        name: student.name,
        gender: student.gender || '',
        className: student.className || '',
        phone: student.phone || '',
        email: student.email || '',
        dormId: parseInt(student.dormId) || 0,
        dormNo, buildingNo,
        status: student.status || '在校',
        password: student.password || '123456'
    };
    students.push(newStudent);
    saveStudents(students);

    if (newStudent.dormId > 0) {
        const dorms = getDorms();
        const idx = dorms.findIndex(d => d.dormId === newStudent.dormId);
        if (idx !== -1) { dorms[idx].currentCount = (dorms[idx].currentCount || 0) + 1; saveDorms(dorms); }
    }
    return { success: true, student: newStudent };
}

function updateStudent(student) {
    const students = getStudents();
    const idx = students.findIndex(s => s.studentId === student.studentId);
    if (idx === -1) return { success: false, message: '学生不存在' };

    const oldDormId = students[idx].dormId;
    const newDormId = parseInt(student.dormId) || 0;
    let dormNo = '', buildingNo = '';
    if (newDormId > 0) {
        const dorm = getDorms().find(d => d.dormId === newDormId);
        if (dorm) { dormNo = dorm.dormNo; buildingNo = dorm.buildingNo; }
    }

    students[idx] = {
        ...students[idx],
        ...student,
        dormId: newDormId,
        dormNo, buildingNo
    };
    if (!student.password) delete students[idx].password;
    saveStudents(students);

    if (oldDormId !== newDormId) {
        const dorms = getDorms();
        if (oldDormId > 0) {
            const oi = dorms.findIndex(d => d.dormId === oldDormId);
            if (oi !== -1) { dorms[oi].currentCount = Math.max(0, (dorms[oi].currentCount || 0) - 1); }
        }
        if (newDormId > 0) {
            const ni = dorms.findIndex(d => d.dormId === newDormId);
            if (ni !== -1) { dorms[ni].currentCount = (dorms[ni].currentCount || 0) + 1; }
        }
        saveDorms(dorms);
    }
    return { success: true };
}

function deleteStudent(studentId) {
    let students = getStudents();
    const student = students.find(s => s.studentId === studentId);
    if (!student) return { success: false, message: '学生不存在' };

    if (student.dormId && student.dormId > 0) {
        const dorms = getDorms();
        const idx = dorms.findIndex(d => d.dormId === student.dormId);
        if (idx !== -1) { dorms[idx].currentCount = Math.max(0, (dorms[idx].currentCount || 0) - 1); saveDorms(dorms); }
    }

    students = students.filter(s => s.studentId !== studentId);
    saveStudents(students);
    return { success: true };
}

function moveOutStudent(studentId) {
    const students = getStudents();
    const idx = students.findIndex(s => s.studentId === studentId);
    if (idx === -1) return { success: false, message: '学生不存在' };

    if (students[idx].dormId && students[idx].dormId > 0) {
        const dorms = getDorms();
        const di = dorms.findIndex(d => d.dormId === students[idx].dormId);
        if (di !== -1) { dorms[di].currentCount = Math.max(0, (dorms[di].currentCount || 0) - 1); saveDorms(dorms); }
    }

    students[idx].status = '退宿';
    students[idx].dormId = 0;
    students[idx].dormNo = '';
    students[idx].buildingNo = '';
    saveStudents(students);
    return { success: true };
}

// ========== 宿舍管理 ==========
function getDormPage(page, size, keyword) {
    let list = getDorms();
    if (keyword) {
        const kw = keyword.toLowerCase();
        list = list.filter(d =>
            d.dormNo.toLowerCase().includes(kw) ||
            d.buildingNo.toLowerCase().includes(kw)
        );
    }
    const total = list.length;
    const start = (page - 1) * size;
    const pageList = list.slice(start, start + size);
    return { list: pageList, total, page, size, totalPages: Math.ceil(total / size) || 1 };
}

function addDorm(dorm) {
    const dorms = getDorms();
    const newId = dorms.length > 0 ? Math.max(...dorms.map(d => d.dormId)) + 1 : 1;
    const newDorm = {
        dormId: newId,
        dormNo: dorm.dormNo,
        buildingNo: dorm.buildingNo,
        capacity: parseInt(dorm.capacity) || 4,
        currentCount: parseInt(dorm.currentCount) || 0,
        roomType: dorm.roomType || '',
        fee: parseFloat(dorm.fee) || 0
    };
    dorms.push(newDorm);
    saveDorms(dorms);
    return { success: true, dorm: newDorm };
}

function updateDorm(dorm) {
    const dorms = getDorms();
    const idx = dorms.findIndex(d => d.dormId === dorm.dormId);
    if (idx === -1) return { success: false, message: '宿舍不存在' };
    dorms[idx] = { ...dorms[idx], ...dorm };
    saveDorms(dorms);
    return { success: true };
}

function deleteDorm(dormId) {
    let dorms = getDorms();
    const dorm = dorms.find(d => d.dormId === dormId);
    if (!dorm) return { success: false, message: '宿舍不存在' };
    if ((dorm.currentCount || 0) > 0) {
        return { success: false, message: '该宿舍还有学生入住，无法删除' };
    }
    dorms = dorms.filter(d => d.dormId !== dormId);
    saveDorms(dorms);
    return { success: true };
}

// ========== 宿管管理 ==========
function getDormAdminPage(page, size, keyword) {
    let list = getDormAdmins();
    if (keyword) {
        const kw = keyword.toLowerCase();
        list = list.filter(a =>
            a.adminNo.toLowerCase().includes(kw) ||
            a.name.toLowerCase().includes(kw) ||
            (a.buildingNo && a.buildingNo.toLowerCase().includes(kw))
        );
    }
    const total = list.length;
    const start = (page - 1) * size;
    const pageList = list.slice(start, start + size);
    return { list: pageList, total, page, size, totalPages: Math.ceil(total / size) || 1 };
}

function addDormAdmin(admin) {
    const admins = getDormAdmins();
    if (admins.find(a => a.adminNo === admin.adminNo)) {
        return { success: false, message: '工号已存在' };
    }
    const newId = admins.length > 0 ? Math.max(...admins.map(a => a.id)) + 1 : 1;
    const newAdmin = {
        id: newId,
        adminNo: admin.adminNo,
        name: admin.name,
        buildingNo: admin.buildingNo || '',
        role: admin.role || '普通宿管',
        phone: admin.phone || '',
        email: admin.email || '',
        password: admin.password || '123456'
    };
    admins.push(newAdmin);
    saveDormAdmins(admins);
    return { success: true, admin: newAdmin };
}

function updateDormAdmin(admin) {
    const admins = getDormAdmins();
    const idx = admins.findIndex(a => a.id === admin.id);
    if (idx === -1) return { success: false, message: '宿管不存在' };
    admins[idx] = { ...admins[idx], ...admin };
    if (!admin.password) delete admins[idx].password;
    saveDormAdmins(admins);
    return { success: true };
}

function deleteDormAdmin(id) {
    let admins = getDormAdmins();
    admins = admins.filter(a => a.id !== id);
    saveDormAdmins(admins);
    return { success: true };
}

// ========== 注册 ==========
function studentRegister(data) {
    const students = getStudents();
    if (students.find(s => s.studentNo === data.studentNo)) {
        return { success: false, message: '学号已存在' };
    }
    const newId = students.length > 0 ? Math.max(...students.map(s => s.studentId)) + 1 : 1;
    const newStudent = {
        studentId: newId,
        studentNo: data.studentNo,
        name: data.name,
        gender: data.gender || '',
        className: data.className || '',
        phone: data.phone || '',
        email: data.email || '',
        dormId: 0,
        dormNo: '',
        buildingNo: '',
        status: '在校',
        password: data.password
    };
    students.push(newStudent);
    saveStudents(students);
    return { success: true };
}

// ========== 统计 ==========
function getStats() {
    const students = getStudents();
    const dorms = getDorms();
    const admins = getDormAdmins();
    const assignedDorms = dorms.filter(d => (d.currentCount || 0) > 0).length;
    return {
        studentCount: students.length,
        dormCount: dorms.length,
        adminCount: admins.length,
        assignedCount: assignedDorms
    };
}

// ========== 工具函数 ==========
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: toastIn 0.3s ease;
    `;
    if (type === 'success') {
        toast.style.background = '#fff';
        toast.style.color = '#000';
        toast.style.border = '2px solid #000';
    } else {
        toast.style.background = '#fff';
        toast.style.color = '#dc2626';
        toast.style.border = '2px solid #dc2626';
    }
    toast.innerHTML = `<i class="fa fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" style="margin-right:8px;"></i>${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes toastOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(style);
