/**
 * 电影票管理系统 - 演示版 Mock 数据模块
 * 所有 API 调用均通过此模块模拟，数据存储在 localStorage 中
 */

// ================ 演示版提示条 ================
function addDemoBanner() {
    if (document.getElementById('demoBanner')) return;
    const banner = document.createElement('div');
    banner.id = 'demoBanner';
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #0a0a0a;
        color: #fff;
        text-align: center;
        padding: 10px 20px;
        font-size: 13px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        letter-spacing: 0.5px;
        border-bottom: 1px solid #333;
        font-family: Inter, system-ui, sans-serif;
    `;
    banner.innerHTML = '<i class="fas fa-info-circle"></i> 演示版 - 所有数据均为模拟，仅供演示使用';
    document.body.appendChild(banner);

    // 调整 body 顶部间距
    document.body.style.paddingTop = '44px';

    // 如果页面有 sticky header，也需要调整
    const header = document.querySelector('.header');
    if (header) {
        header.style.top = '44px';
    }
}

// ================ Mock 数据 ================

// 模拟电影数据
const MOCK_MOVIES = [
    {
        movieId: 1,
        title: "星际穿越",
        posterUrl: "https://picsum.photos/seed/interstellar/300/400",
        duration: 169,
        genre: "科幻,冒险",
        description: "一支探险队利用新发现的虫洞，展开人类历史上最宏大的太空旅程，穿越星际寻找人类新家园。",
        price: 45.00,
        releaseDate: "2023-10-01",
        rating: 9.3,
        currency: "CNY",
        priceStatus: 1,
        director: "克里斯托弗·诺兰",
        actors: "马修·麦康纳,安妮·海瑟薇,杰西卡·查斯坦"
    },
    {
        movieId: 2,
        title: "盗梦空间",
        posterUrl: "https://picsum.photos/seed/inception/300/400",
        duration: 148,
        genre: "科幻,惊悚",
        description: "一群盗梦者潜入人们的梦境，窃取和植入思想。当任务难度升级到盗梦，一切变得扑朔迷离。",
        price: 38.00,
        releaseDate: "2023-09-15",
        rating: 9.2,
        currency: "CNY",
        priceStatus: 1,
        director: "克里斯托弗·诺兰",
        actors: "莱昂纳多·迪卡普里奥,约瑟夫·高登-莱维特,艾伦·佩吉"
    },
    {
        movieId: 3,
        title: "泰坦尼克号",
        posterUrl: "https://picsum.photos/seed/titanic/300/400",
        duration: 195,
        genre: "爱情,灾难",
        description: "豪华邮轮泰坦尼克号的沉没与一段跨越阶层的爱情故事，杰克和露丝在船上相遇相爱。",
        price: 52.00,
        releaseDate: "2023-10-05",
        rating: 9.4,
        currency: "CNY",
        priceStatus: 1,
        director: "詹姆斯·卡梅隆",
        actors: "莱昂纳多·迪卡普里奥,凯特·温斯莱特,比利·赞恩"
    },
    {
        movieId: 4,
        title: "阿凡达：水之道",
        posterUrl: "https://picsum.photos/seed/avatar2/300/400",
        duration: 192,
        genre: "科幻,动作",
        description: "杰克·萨利与奈蒂莉组建了家庭，他们的孩子也逐渐成长。然而危机未曾消散，萨利一家不得不彼此保护。",
        price: 58.00,
        releaseDate: "2023-12-16",
        rating: 8.5,
        currency: "CNY",
        priceStatus: 1,
        director: "詹姆斯·卡梅隆",
        actors: "萨姆·沃辛顿,佐伊·索尔达娜,西格妮·韦弗"
    },
    {
        movieId: 5,
        title: "流浪地球2",
        posterUrl: "https://picsum.photos/seed/wandering2/300/400",
        duration: 173,
        genre: "科幻,灾难",
        description: "太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新的家园。然而宇宙之路危机四伏。",
        price: 48.00,
        releaseDate: "2023-01-22",
        rating: 8.3,
        currency: "CNY",
        priceStatus: 1,
        director: "郭帆",
        actors: "吴京,刘德华,李雪健"
    },
    {
        movieId: 6,
        title: "满江红",
        posterUrl: "https://picsum.photos/seed/manjianghong/300/400",
        duration: 159,
        genre: "悬疑,喜剧",
        description: "南宋绍兴年间，岳飞死后四年，秦桧率兵与金国会谈。会谈前夜，金国使者死在宰相驻地。",
        price: 42.00,
        releaseDate: "2023-01-22",
        rating: 7.8,
        currency: "CNY",
        priceStatus: 1,
        director: "张艺谋",
        actors: "沈腾,易烊千玺,张译"
    },
    {
        movieId: 7,
        title: "速度与激情10",
        posterUrl: "https://picsum.photos/seed/fast10/300/400",
        duration: 141,
        genre: "动作,犯罪",
        description: "多姆·托莱托带领他的家人必须面对一位从阴影中走出的敌人，这个对手发誓要为血债血偿。",
        price: 45.00,
        releaseDate: "2023-05-17",
        rating: 7.5,
        currency: "CNY",
        priceStatus: 1,
        director: "路易斯·莱特里尔",
        actors: "范·迪塞尔,米歇尔·罗德里格兹,杰森·莫玛"
    },
    {
        movieId: 8,
        title: "蜘蛛侠：纵横宇宙",
        posterUrl: "https://picsum.photos/seed/spiderverse/300/400",
        duration: 140,
        genre: "动画,动作",
        description: "迈尔斯·莫拉莱斯与关·史黛西重聚，二人穿梭多元宇宙。当他们与其他蜘蛛侠相遇时...",
        price: 40.00,
        releaseDate: "2023-06-02",
        rating: 8.8,
        currency: "CNY",
        priceStatus: 1,
        director: "乔伊姆·多斯·桑托斯",
        actors: "沙梅克·摩尔,海莉·斯坦菲尔德,奥斯卡·伊萨克"
    },
    {
        movieId: 9,
        title: "奥本海默",
        posterUrl: "https://picsum.photos/seed/oppenheimer/300/400",
        duration: 180,
        genre: "传记,剧情",
        description: "讲述美国'原子弹之父'罗伯特·奥本海默主导制造出世界上第一颗原子弹的故事。",
        price: 50.00,
        releaseDate: "2023-08-30",
        rating: 8.9,
        currency: "CNY",
        priceStatus: 1,
        director: "克里斯托弗·诺兰",
        actors: "基里安·墨菲,艾米莉·布朗特,马特·达蒙"
    },
    {
        movieId: 10,
        title: "芭比",
        posterUrl: "https://picsum.photos/seed/barbie/300/400",
        duration: 114,
        genre: "喜剧,奇幻",
        description: "芭比和肯住在色彩缤纷、看似完美的芭比乐园里。然而，当他们有机会去现实世界时...",
        price: 38.00,
        releaseDate: "2023-07-21",
        rating: 7.9,
        currency: "CNY",
        priceStatus: 0,
        director: "格蕾塔·葛韦格",
        actors: "玛格特·罗比,瑞恩·高斯林,亚美莉卡·费雷拉"
    }
];

// 模拟影院数据
const MOCK_CINEMAS = [
    {
        cinemaId: 1,
        cinemaName: "嘻囔国际影城（王府井店）",
        city: "北京",
        address: "北京市东城区王府井大街138号新东安市场6层",
        contactPhone: "010-58176688",
        hallCount: 8,
        tags: ["IMAX", "3D", "杜比音效", "VIP厅"]
    },
    {
        cinemaId: 2,
        cinemaName: "星光影城（朝阳大悦城店）",
        city: "北京",
        address: "北京市朝阳区朝阳北路101号朝阳大悦城9层",
        contactPhone: "010-85523388",
        hallCount: 10,
        tags: ["IMAX", "4DX", "杜比全景声"]
    },
    {
        cinemaId: 3,
        cinemaName: "太平洋影城（上海新天地店）",
        city: "上海",
        address: "上海市黄浦区兴业路123号新天地广场5层",
        contactPhone: "021-63856688",
        hallCount: 7,
        tags: ["IMAX", "3D", "VIP厅"]
    },
    {
        cinemaId: 4,
        cinemaName: "万达影城（五角场店）",
        city: "上海",
        address: "上海市杨浦区邯郸路600号万达广场3层",
        contactPhone: "021-55667788",
        hallCount: 12,
        tags: ["IMAX", "4DX", "杜比全景声", "VIP厅"]
    },
    {
        cinemaId: 5,
        cinemaName: "金逸影城（天河城店）",
        city: "广州",
        address: "广州市天河区天河路208号天河城广场7层",
        contactPhone: "020-85590288",
        hallCount: 9,
        tags: ["IMAX", "3D", "杜比音效"]
    },
    {
        cinemaId: 6,
        cinemaName: "中影国际影城（南山店）",
        city: "深圳",
        address: "深圳市南山区海德三道85号天利中央广场3层",
        contactPhone: "0755-86338988",
        hallCount: 6,
        tags: ["IMAX", "3D", "VIP厅"]
    },
    {
        cinemaId: 7,
        cinemaName: "百老汇影城（成都IFS店）",
        city: "成都",
        address: "成都市锦江区红星路三段1号IFS国际金融中心5层",
        contactPhone: "028-86668899",
        hallCount: 8,
        tags: ["IMAX", "杜比全景声", "VIP厅"]
    },
    {
        cinemaId: 8,
        cinemaName: "博纳国际影城（杭州店）",
        city: "杭州",
        address: "杭州市拱墅区延安路582号银泰百货7层",
        contactPhone: "0571-88006688",
        hallCount: 7,
        tags: ["IMAX", "3D", "杜比音效"]
    }
];

// 模拟影厅数据（按影院ID分组）
const MOCK_HALLS = {
    1: [
        { hall_id: 101, hall_name: '1号激光厅', cinema_id: 1, hall_type: '2D', total_rows: 12, seats_per_row: 15 },
        { hall_id: 102, hall_name: '2号IMAX巨幕厅', cinema_id: 1, hall_type: 'IMAX', total_rows: 15, seats_per_row: 20 },
        { hall_id: 103, hall_name: '3号VIP厅', cinema_id: 1, hall_type: 'VIP', total_rows: 8, seats_per_row: 10 },
        { hall_id: 104, hall_name: '4号激光厅', cinema_id: 1, hall_type: '3D', total_rows: 10, seats_per_row: 12 },
        { hall_id: 105, hall_name: '5号激光厅', cinema_id: 1, hall_type: '2D', total_rows: 10, seats_per_row: 12 },
        { hall_id: 106, hall_name: '6号杜比厅', cinema_id: 1, hall_type: '杜比全景声', total_rows: 12, seats_per_row: 14 },
        { hall_id: 107, hall_name: '7号儿童厅', cinema_id: 1, hall_type: '2D', total_rows: 8, seats_per_row: 10 },
        { hall_id: 108, hall_name: '8号情侣厅', cinema_id: 1, hall_type: 'VIP', total_rows: 6, seats_per_row: 8 }
    ],
    2: [
        { hall_id: 201, hall_name: '1号IMAX厅', cinema_id: 2, hall_type: 'IMAX', total_rows: 16, seats_per_row: 22 },
        { hall_id: 202, hall_name: '2号4DX厅', cinema_id: 2, hall_type: '4DX', total_rows: 10, seats_per_row: 12 },
        { hall_id: 203, hall_name: '3号激光厅', cinema_id: 2, hall_type: '2D', total_rows: 12, seats_per_row: 15 },
        { hall_id: 204, hall_name: '4号杜比厅', cinema_id: 2, hall_type: '杜比全景声', total_rows: 14, seats_per_row: 16 }
    ],
    3: [
        { hall_id: 301, hall_name: '1号IMAX厅', cinema_id: 3, hall_type: 'IMAX', total_rows: 14, seats_per_row: 18 },
        { hall_id: 302, hall_name: '2号VIP厅', cinema_id: 3, hall_type: 'VIP', total_rows: 8, seats_per_row: 10 },
        { hall_id: 303, hall_name: '3号激光厅', cinema_id: 3, hall_type: '2D', total_rows: 12, seats_per_row: 14 }
    ],
    6: [
        { hall_id: 601, hall_name: '1号激光厅', cinema_id: 6, hall_type: '2D', total_rows: 12, seats_per_row: 15 },
        { hall_id: 602, hall_name: '2号IMAX巨幕厅', cinema_id: 6, hall_type: 'IMAX', total_rows: 15, seats_per_row: 20 },
        { hall_id: 603, hall_name: '3号VIP厅', cinema_id: 6, hall_type: 'VIP', total_rows: 8, seats_per_row: 10 },
        { hall_id: 604, hall_name: '4号激光厅', cinema_id: 6, hall_type: '3D', total_rows: 10, seats_per_row: 12 },
        { hall_id: 605, hall_name: '5号激光厅', cinema_id: 6, hall_type: '2D', total_rows: 10, seats_per_row: 12 }
    ]
};

// 模拟场次时间
const MOCK_SHOWTIMES = ['10:30', '13:00', '15:30', '19:30', '22:00'];

// 模拟用户账号
const MOCK_USERS = [
    {
        userId: 1,
        username: 'demo',
        password: '123456',
        email: 'demo@cinema.com',
        phone: '13800138000',
        fullName: '演示用户',
        avatar: '',
        createTime: '2024-01-01T00:00:00.000Z'
    }
];

// ================ 存储键名常量 ================
const STORAGE_KEYS = {
    CURRENT_USER: 'currentUser',
    REMEMBERED_USER: 'rememberedUser',
    REMEMBERED_EMAIL: 'rememberedEmail',
    ORDERS: 'cinema_orders',
    SEAT_LOCKS: 'cinema_seat_locks',
    SELECTED_MOVIE: 'selectedMovie',
    ORDER_INFO: 'orderInfo',
    CURRENT_ORDER: 'currentOrder',
    REGISTERED_USERS: 'cinema_registered_users'
};

// ================ 工具函数 ================

// 模拟网络延迟
function mockDelay(data, delay = 500) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), delay);
    });
}

// 生成唯一订单号
function generateOrderId() {
    const now = new Date();
    const dateStr = now.getFullYear().toString() +
        (now.getMonth() + 1).toString().padStart(2, '0') +
        now.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return 'ORD' + dateStr + random;
}

// 从 localStorage 获取订单
function getOrders() {
    const ordersStr = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (ordersStr) {
        try {
            return JSON.parse(ordersStr);
        } catch (e) {
            return [];
        }
    }
    return [];
}

// 保存订单到 localStorage
function saveOrders(orders) {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
}

// 添加订单
function addOrder(order) {
    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    return order;
}

// 获取注册用户
function getRegisteredUsers() {
    const usersStr = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
    if (usersStr) {
        try {
            return JSON.parse(usersStr);
        } catch (e) {
            return [];
        }
    }
    return [];
}

// 保存注册用户
function saveRegisteredUsers(users) {
    localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(users));
}

// 获取座位锁定数据
function getSeatLocks() {
    const locksStr = sessionStorage.getItem(STORAGE_KEYS.SEAT_LOCKS);
    if (locksStr) {
        try {
            return JSON.parse(locksStr);
        } catch (e) {
            return {};
        }
    }
    return {};
}

// 保存座位锁定数据
function saveSeatLocks(locks) {
    sessionStorage.setItem(STORAGE_KEYS.SEAT_LOCKS, JSON.stringify(locks));
}

// 生成座位数据
function generateSeats(hallId, hall) {
    const rows = [];
    const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    const totalRows = hall.total_rows || 10;
    const seatsPerRow = hall.seats_per_row || 12;
    const seats = [];

    for (let r = 0; r < totalRows; r++) {
        const rowLabel = rowLabels[r] || String(r + 1);
        const isVIPRow = hall.hall_type === 'VIP' || (r >= totalRows - 2);

        for (let c = 1; c <= seatsPerRow; c++) {
            const seatId = `${hallId}-${rowLabel}-${c}`;
            // 约20%的座位是已售出状态
            const isSold = Math.random() < 0.2;
            const seatType = isVIPRow ? 'vip' : 'standard';

            seats.push({
                seat_id: seatId,
                seatId: seatId,
                hall_id: hallId,
                hallId: hallId,
                row_num: rowLabel,
                rowNum: rowLabel,
                col_num: c,
                colNum: c,
                seat_type: seatType,
                seatType: seatType,
                seat_status: isSold ? 'sold' : 'available',
                seatStatus: isSold ? 'sold' : 'available',
                is_locked: false,
                isLocked: false
            });
        }
    }

    return seats;
}

// ================ Mock API 函数 ================

// 1. 获取电影列表
function mockGetMovies() {
    return mockDelay({
        code: 200,
        success: true,
        message: '获取成功',
        data: MOCK_MOVIES
    }, 600);
}

// 2. 用户登录
function mockLogin(credentials) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const { username, email, password } = credentials;

            // 检查所有用户（内置 + 注册的）
            const registeredUsers = getRegisteredUsers();
            const allUsers = [...MOCK_USERS, ...registeredUsers];

            let user = null;
            if (username) {
                user = allUsers.find(u => u.username === username && u.password === password);
            } else if (email) {
                user = allUsers.find(u => u.email === email && u.password === password);
            }

            if (user) {
                // 返回用户信息（不包含密码）
                const userInfo = { ...user };
                delete userInfo.password;
                resolve({
                    code: 200,
                    success: true,
                    message: '登录成功',
                    data: userInfo
                });
            } else {
                resolve({
                    code: 401,
                    success: false,
                    message: '用户名或密码错误'
                });
            }
        }, 800);
    });
}

// 3. 用户注册
function mockRegister(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const registeredUsers = getRegisteredUsers();

            // 检查用户名是否已存在
            const usernameExists = MOCK_USERS.some(u => u.username === userData.username) ||
                registeredUsers.some(u => u.username === userData.username);
            if (usernameExists) {
                resolve({
                    code: 400,
                    success: false,
                    message: '用户名已被注册'
                });
                return;
            }

            // 检查邮箱是否已存在
            const emailExists = MOCK_USERS.some(u => u.email === userData.email) ||
                registeredUsers.some(u => u.email === userData.email);
            if (emailExists) {
                resolve({
                    code: 400,
                    success: false,
                    message: '邮箱已被注册'
                });
                return;
            }

            // 创建新用户
            const newUser = {
                userId: Date.now(),
                username: userData.username,
                password: userData.password,
                email: userData.email,
                phone: userData.phone || '',
                fullName: userData.fullName || userData.username,
                avatar: '',
                createTime: new Date().toISOString()
            };

            registeredUsers.push(newUser);
            saveRegisteredUsers(registeredUsers);

            const userInfo = { ...newUser };
            delete userInfo.password;

            resolve({
                code: 200,
                success: true,
                message: '注册成功',
                data: userInfo
            });
        }, 1000);
    });
}

// 4. 获取影院列表
function mockGetCinemas() {
    return mockDelay({
        code: 200,
        success: true,
        message: '获取成功',
        data: MOCK_CINEMAS
    }, 500);
}

// 5. 获取影厅列表
function mockGetHalls(cinemaId) {
    const halls = MOCK_HALLS[cinemaId] || MOCK_HALLS[6] || [];
    return mockDelay({
        code: 200,
        success: true,
        message: '获取成功',
        data: halls
    }, 400);
}

// 6. 获取座位信息
function mockGetSeats(hallId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 查找影厅信息
            let hall = null;
            for (const cinemaId in MOCK_HALLS) {
                const found = MOCK_HALLS[cinemaId].find(h => h.hall_id == hallId);
                if (found) {
                    hall = found;
                    break;
                }
            }
            if (!hall) {
                // 默认影厅配置
                hall = { total_rows: 10, seats_per_row: 12, hall_type: '2D' };
            }

            const seats = generateSeats(hallId, hall);

            // 应用已锁定的座位
            const locks = getSeatLocks();
            const lockKey = `hall_${hallId}`;
            const lockedSeats = locks[lockKey] || [];

            seats.forEach(seat => {
                if (lockedSeats.includes(seat.seatId)) {
                    seat.is_locked = true;
                    seat.isLocked = true;
                }
            });

            resolve({
                code: 200,
                success: true,
                message: '获取成功',
                data: seats
            });
        }, 600);
    });
}

// 7. 锁定座位
function mockLockSeat(seatId, hallId, userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const locks = getSeatLocks();
            const lockKey = `hall_${hallId}`;

            if (!locks[lockKey]) {
                locks[lockKey] = [];
            }

            // 检查是否已被锁定
            if (locks[lockKey].includes(seatId)) {
                resolve({
                    code: 400,
                    success: false,
                    message: '该座位已被锁定，请选择其他座位'
                });
                return;
            }

            // 90% 成功率（模拟偶尔锁定失败）
            if (Math.random() < 0.9) {
                locks[lockKey].push(seatId);
                saveSeatLocks(locks);
                resolve({
                    code: 200,
                    success: true,
                    message: '锁定成功'
                });
            } else {
                resolve({
                    code: 400,
                    success: false,
                    message: '座位已被其他用户锁定'
                });
            }
        }, 300);
    });
}

// 8. 释放座位
function mockUnlockSeat(seatId, hallId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const locks = getSeatLocks();
            const lockKey = `hall_${hallId}`;

            if (locks[lockKey]) {
                const idx = locks[lockKey].indexOf(seatId);
                if (idx > -1) {
                    locks[lockKey].splice(idx, 1);
                    saveSeatLocks(locks);
                }
            }

            resolve({
                code: 200,
                success: true,
                message: '释放成功'
            });
        }, 200);
    });
}

// 9. 创建订单
function mockCreateOrder(orderData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orderId = generateOrderId();
            const order = {
                orderId: orderId,
                userId: orderData.userId,
                userName: orderData.userName || '用户',
                movieId: orderData.movieId,
                movieTitle: orderData.movieTitle,
                hallId: orderData.hallId,
                hallName: orderData.hallName,
                showTime: orderData.showTime,
                seats: orderData.seats || [],
                seatsDisplay: (orderData.seats || []).map(s => `${s.rowNum}排${s.colNum}座`).join(', '),
                ticketPrice: orderData.ticketPrice || 45,
                totalPrice: orderData.totalPrice || 0,
                totalAmount: orderData.totalPrice || 0,
                paymentMethod: orderData.paymentMethod || '',
                orderStatus: 'pending',
                createdAt: new Date().toISOString(),
                createTime: new Date().toISOString()
            };

            addOrder(order);

            resolve({
                code: 200,
                success: true,
                message: '订单创建成功',
                data: { orderId: orderId, ...order }
            });
        }, 800);
    });
}

// 10. 支付订单
function mockPayOrder(orderId, paymentMethod) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = getOrders();
            const orderIndex = orders.findIndex(o => o.orderId === orderId);

            if (orderIndex === -1) {
                resolve({
                    code: 404,
                    success: false,
                    message: '订单不存在'
                });
                return;
            }

            orders[orderIndex].orderStatus = 'paid';
            orders[orderIndex].paymentMethod = paymentMethod;
            orders[orderIndex].paymentTime = new Date().toISOString();
            saveOrders(orders);

            resolve({
                code: 200,
                success: true,
                message: '支付成功',
                data: orders[orderIndex]
            });
        }, 1500);
    });
}

// 11. 获取用户订单
function mockGetUserOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = getOrders().filter(o => o.userId == userId);
            resolve({
                code: 200,
                success: true,
                message: '获取成功',
                data: orders
            });
        }, 500);
    });
}

// 12. 获取订单详情
function mockGetOrderById(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = getOrders();
            const order = orders.find(o => o.orderId === orderId);

            if (order) {
                resolve({
                    code: 200,
                    success: true,
                    message: '获取成功',
                    data: order
                });
            } else {
                resolve({
                    code: 404,
                    success: false,
                    message: '订单不存在'
                });
            }
        }, 400);
    });
}

// 13. 取消订单
function mockCancelOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = getOrders();
            const orderIndex = orders.findIndex(o => o.orderId === orderId);

            if (orderIndex === -1) {
                resolve({
                    code: 404,
                    success: false,
                    message: '订单不存在'
                });
                return;
            }

            orders[orderIndex].orderStatus = 'cancelled';
            saveOrders(orders);

            resolve({
                code: 200,
                success: true,
                message: '订单已取消'
            });
        }, 500);
    });
}

// ================ 页面通用工具 ================

// 显示消息提示
function showMessage(message, type = 'info') {
    let messageEl = document.getElementById('message-toast');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.id = 'message-toast';
        messageEl.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
            max-width: 400px;
        `;
        document.body.appendChild(messageEl);
    }

    const bgColors = {
        success: 'linear-gradient(135deg, #00b894, #00a885)',
        error: 'linear-gradient(135deg, #ff4757, #ff3838)',
        warning: 'linear-gradient(135deg, #fdcb6e, #f39c12)',
        info: 'linear-gradient(135deg, #4361ee, #3a56d4)'
    };

    messageEl.textContent = message;
    messageEl.style.background = bgColors[type] || bgColors.info;
    messageEl.style.opacity = '1';
    messageEl.style.transform = 'translateX(0)';

    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateX(100px)';
    }, 3000);
}

// 获取当前登录用户
function getCurrentUser() {
    const userData = sessionStorage.getItem(STORAGE_KEYS.CURRENT_USER) ||
        localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (userData) {
        try {
            return JSON.parse(userData);
        } catch (e) {
            return null;
        }
    }
    return null;
}

// 设置当前登录用户
function setCurrentUser(user, remember = false) {
    sessionStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    if (remember) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
        if (user.username) {
            localStorage.setItem(STORAGE_KEYS.REMEMBERED_USER, user.username);
        }
    } else {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
}

// 退出登录
function logoutUser() {
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

// 格式化时长
function formatDuration(minutes) {
    if (!minutes) return '未知';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
        return `${hours}小时${mins}分钟`;
    }
    return `${mins}分钟`;
}

// 格式化日期
function formatDate(dateStr) {
    if (!dateStr) return '未知';
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('zh-CN');
    } catch (e) {
        return dateStr;
    }
}

// 获取评分星星
function getRatingStars(rating) {
    if (!rating) return '暂无评分';
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1;
    let stars = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '★';
        } else if (i === fullStars && halfStar) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    return `<span style="color: #ffc107;">${stars}</span> ${rating.toFixed(1)}`;
}

// 初始化：页面加载时添加演示提示条（仅在主页显示）
document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    // 只在首页显示演示条
    if (filename === 'index.html' || filename === '' || filename === '/') {
        addDemoBanner();
    }
});
