/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/C_Hero.ts":
/*!***********************!*\
  !*** ./src/C_Hero.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Hero = exports.alert_heroes_info = void 0;
function alert_heroes_info(a) {
    var _a, _b, _c, _d;
    if (a === undefined)
        return;
    alert('Number of Hero = ' + a.length.toString());
    for (var i in a) {
        if (a[i] === undefined)
            continue;
        alert("Hero[" + i.toString() + "] Info:\n"
            + "\nid:    " + ((_b = (_a = a[i]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '?')
            + "\nname:  " + ((_d = (_c = a[i]) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '?')
            + "\n");
    }
}
exports.alert_heroes_info = alert_heroes_info;
class C_Hero {
    constructor(a) {
        this.my_id = 0;
        this.my_name = 'No Name Hero';
        if (a !== undefined)
            this.__init(a);
    }
    __init(a) {
        var _a, _b;
        this.my_id = (_a = a.id) !== null && _a !== void 0 ? _a : this.my_id;
        this.my_name = (_b = a.name) !== null && _b !== void 0 ? _b : this.my_name;
    }
    set_prp(arg) {
        this.__init(arg);
    }
    id() {
        return 'Hero_' + this.my_id.toString(16).padStart(5, '0');
    }
    neme() {
        return this.my_name;
    }
    encode() {
        const ret = {
            id: this.my_id,
            name: this.my_name,
        };
        return ret;
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.id !== undefined)
            this.my_id = a.id;
        if (a.name !== undefined)
            this.my_name = a.name;
        return this;
    }
    static create_hero() {
        const new_hero = new C_Hero();
        new_hero.set_prp({ id: Math.floor(-1000.0 * Math.random()) });
        new_hero.set_prp({ name: new_hero.id() });
        return new_hero;
    }
    static encode_heroes(heroes) {
        const heroes_data = [];
        for (var hero of heroes) {
            heroes_data.push(hero.encode());
        }
        return heroes_data;
    }
    static decode_heroes(heroes_data) {
        const heroes = [];
        if (heroes_data !== undefined) {
            for (var hero_data of heroes_data) {
                heroes.push(new C_Hero().decode(hero_data));
            }
        }
        return heroes;
    }
}
exports.C_Hero = C_Hero;


/***/ }),

/***/ "./src/C_Maze.ts":
/*!***********************!*\
  !*** ./src/C_Maze.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Maze = exports.alert_maze_info = void 0;
const T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "./src/T_MzKind.ts");
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/C_Point.ts");
const C_Range_1 = __webpack_require__(/*! ./C_Range */ "./src/C_Range.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
const global_2 = __webpack_require__(/*! ./global */ "./src/global.ts");
function alert_maze_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (a === undefined)
        return;
    alert("Maze Info:"
        + "\nmaze id :" + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nfloor: " + ((_b = a.floor) !== null && _b !== void 0 ? _b : '?')
        + "\ntitle: " + ((_c = a.title) !== null && _c !== void 0 ? _c : '?')
        + "\nsize_x: " + ((_d = a.size_x) !== null && _d !== void 0 ? _d : '?')
        + "\nsize_y: " + ((_e = a.size_y) !== null && _e !== void 0 ? _e : '?')
        + "\nsize_z: " + ((_f = a.size_z) !== null && _f !== void 0 ? _f : '?')
        + "\n");
    alert("maze:\n" + ((_g = a.maze) !== null && _g !== void 0 ? _g : '?')
        + "\n");
    alert("mask:\n" + ((_h = a.mask) !== null && _h !== void 0 ? _h : '?')
        + "\n");
}
exports.alert_maze_info = alert_maze_info;
class C_MazeCell {
    constructor(m, a) {
        this.cell = T_MzKind_1.T_MzKind.NoDef;
        this.maze = m;
        this.set(a);
    }
    get() {
        return this.cell;
    }
    set(a) {
        if (typeof a === "undefined") {
            this.cell = T_MzKind_1.T_MzKind.NoDef;
        }
        else if (typeof a === "number") {
            this.cell = T_MzKind_1.T_RvMzKind[a];
        }
        else if (typeof a === "object") {
            this.cell = a;
        }
        else {
            this.cell = T_MzKind_1.T_MzKind.NoDef;
        }
    }
    to_int(v) {
        const kind = v !== null && v !== void 0 ? v : this.cell;
        return kind;
    }
    static to_int(kind) {
        return kind;
    }
    to_letter(v) {
        const kind = v !== null && v !== void 0 ? v : this.cell;
        return C_MazeCell.to_letter(kind);
    }
    static to_letter(kind) {
        switch (kind) {
            case T_MzKind_1.T_MzKind.Floor: return '　';
            case T_MzKind_1.T_MzKind.Unexp: return '・';
            case T_MzKind_1.T_MzKind.Stone: return '＃';
            case T_MzKind_1.T_MzKind.Unkwn: return '？';
            case T_MzKind_1.T_MzKind.StrUp: return '上';
            case T_MzKind_1.T_MzKind.StrDn: return '下';
            case T_MzKind_1.T_MzKind.StrUD: return '通';
            case T_MzKind_1.T_MzKind.Empty: return 'Ｏ';
            case T_MzKind_1.T_MzKind.NoDef: return 'Ｘ';
            default: return 'Ｘ';
        }
    }
    from_letter(str) {
        this.cell = C_MazeCell.from_letter(str);
        return this.cell;
    }
    static from_letter(str) {
        switch (str) {
            case '　': return T_MzKind_1.T_MzKind.Floor;
            case '・': return T_MzKind_1.T_MzKind.Unexp;
            case '＃': return T_MzKind_1.T_MzKind.Stone;
            case '？': return T_MzKind_1.T_MzKind.Unkwn;
            case '上': return T_MzKind_1.T_MzKind.StrUp;
            case '下': return T_MzKind_1.T_MzKind.StrDn;
            case '通': return T_MzKind_1.T_MzKind.StrUD;
            case 'Ｏ': return T_MzKind_1.T_MzKind.Empty;
            case 'Ｘ': return T_MzKind_1.T_MzKind.NoDef;
            default: return T_MzKind_1.T_MzKind.NoDef;
        }
    }
    encode() {
        return C_MazeCell.encode(this.cell);
    }
    static encode(v) {
        return v.toString(16).padStart(2, "0");
    }
    decode(str) {
        this.cell = C_MazeCell.decode(str);
    }
    static decode(str) {
        return parseInt(str, 16);
    }
}
class C_Maze {
    constructor({ maze_id = -1, floor = 0, title = '', size_x = 3, size_y = 3, size_z = 1 }) {
        this.my_layer = 0;
        this.maze_id = maze_id;
        this.floor = floor;
        this.title = title;
        this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(size_x - 1, size_y - 1, size_z - 1));
        this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
        this.masks = this.__init_mask(true);
        this.objs = [];
    }
    init({ maze_id, floor, title, size_x, size_y, size_z }) {
        this.maze_id = maze_id;
        this.floor = floor;
        this.title = title;
        this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(size_x - 1, size_y - 1, size_z - 1));
        this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
        this.masks = this.__init_mask(true);
        this.objs = [];
    }
    __init_maze(kind = T_MzKind_1.T_MzKind.Stone) {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        const cells = Array(size_z);
        for (var z = 0; z < size_z; z++) {
            cells[z] = Array(size_y);
            for (var y = 0; y < size_y; y++) {
                cells[z][y] = Array(size_x);
                for (var x = 0; x < size_x; x++) {
                    cells[z][y][x] = new C_MazeCell(this, kind);
                }
            }
        }
        return cells;
    }
    __init_mask(YN) {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        const masks = Array(size_z);
        for (var z = 0; z < size_z; z++) {
            masks[z] = Array(size_y);
            for (var y = 0; y < size_y; y++) {
                masks[z][y] = Array(size_x);
                for (var x = 0; x < size_x; x++) {
                    masks[z][y][x] = YN;
                }
            }
        }
        return masks;
    }
    within(p) {
        return this.size.within(p);
    }
    add_obj(obj) {
        this.objs.push(obj);
    }
    remove_obj(obj) {
        this.objs = this.objs.filter(item => item.id() !== obj.id());
    }
    get_obj_xyz(x, y, z) {
        return this.get_obj(new C_Point_1.C_Point(x, y, z));
    }
    get_obj(p) {
        var layer = -1;
        var obj = null;
        for (const item of this.objs) {
            if (item.within(p)) {
                if (item.layer() > layer) {
                    layer = item.layer();
                    obj = item;
                }
            }
        }
        return obj;
    }
    change_unexp_to_floor() {
        if (this.get_cell(global_2.g_team.get_p()) == T_MzKind_1.T_MzKind.Unexp) {
            this.set_cell(global_2.g_team.get_p(), T_MzKind_1.T_MzKind.Floor);
        }
    }
    clear_mask_around_the_team() {
        this.__clear_mask(global_2.g_team.get_around(0, -1));
        this.__clear_mask(global_2.g_team.get_around(0, 0));
        this.__clear_mask(global_2.g_team.get_around(0, 1));
        const depth = 5;
        for (var d = 1; d < depth; d++) {
            const front_pos = global_2.g_team.get_around(d, 0);
            if (this.is_movable(front_pos)) {
                this.__clear_mask(global_2.g_team.get_around(d, -1));
                this.__clear_mask(global_2.g_team.get_around(d, 0));
                this.__clear_mask(global_2.g_team.get_around(d, 1));
            }
            else {
                this.__clear_mask(global_2.g_team.get_around(d, -1));
                this.__clear_mask(global_2.g_team.get_around(d, 0));
                this.__clear_mask(global_2.g_team.get_around(d, 1));
                break;
            }
        }
    }
    __clear_mask(clr_pos) {
        if (!this.size.within(clr_pos))
            return;
        this.masks[clr_pos.z][clr_pos.y][clr_pos.x] = false;
    }
    is_movable(p) {
        if (!this.size.within(p))
            return false;
        switch (this.get_cell(p)) {
            case T_MzKind_1.T_MzKind.Floor:
            case T_MzKind_1.T_MzKind.Unexp:
            case T_MzKind_1.T_MzKind.StrUp:
            case T_MzKind_1.T_MzKind.StrDn:
                return true;
        }
        return false;
    }
    get_x_max() { return this.size.size_x(); }
    get_y_max() { return this.size.size_y(); }
    get_z_max() { return this.size.size_z(); }
    get_maze_cell(p) {
        if (this.size.within(p))
            return this.cells[p.z][p.y][p.x];
        return null;
    }
    get_cell(p) {
        if (this.size.within(p))
            return this.cells[p.z][p.y][p.x].get();
        return T_MzKind_1.T_MzKind.NoDef;
    }
    set_cell(p, k) {
        if (this.size.within(p))
            this.cells[p.z][p.y][p.x].set(k);
    }
    can_move(p) {
        return this.size.within(p);
    }
    can_UD(p) {
        return this.is_movable(p);
    }
    to_letter(p) {
        return this.cells[p.z][p.y][p.x].to_letter();
    }
    to_string(floor = 0) {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        var ret_str = '';
        for (var y = 0; y < size_y; y++) {
            for (var x = 0; x < size_x; x++) {
                const obj = this.get_obj_xyz(x, y, floor);
                if (!global_1.g_debug_mode && this.masks[floor][y][x]) {
                    ret_str += '■';
                }
                else {
                    if (obj === null) {
                        ret_str += this.cells[floor][y][x].to_letter();
                    }
                    else {
                        ret_str += obj.to_letter();
                    }
                }
            }
            ret_str += "\n";
        }
        return ret_str;
    }
    encode() {
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        var z_array = [];
        for (var z = 0; z < size_z; z++) {
            var y_array = [];
            for (var y = 0; y < size_y; y++) {
                var x_array = [];
                for (var x = 0; x < size_x; x++) {
                    x_array.push(this.cells[z][y][x].encode());
                }
                y_array.push(x_array.join('X'));
            }
            z_array.push(y_array.join('Y'));
        }
        const maze_str = z_array.join('Z');
        var z_array = [];
        for (var z = 0; z < size_z; z++) {
            var y_array = [];
            for (var y = 0; y < size_y; y++) {
                var x_array = [];
                for (var x = 0; x < size_x; x++) {
                    x_array.push(this.masks[z][y][x] ? '1' : '0');
                }
                y_array.push(x_array.join('X'));
            }
            z_array.push(y_array.join('Y'));
        }
        const mask_str = z_array.join('Z');
        return {
            id: this.maze_id,
            floor: this.floor,
            title: this.title,
            size_x: this.size.size_x(),
            size_y: this.size.size_y(),
            size_z: this.size.size_z(),
            maze: maze_str,
            mask: mask_str,
        };
    }
    decode(a) {
        if (a === undefined)
            return;
        if (a.id !== undefined)
            this.maze_id = a.id;
        if (a.floor !== undefined)
            this.floor = a.floor;
        if (a.title !== undefined)
            this.title = a.title;
        if (a.objs !== undefined)
            this.objs = a.objs;
        if (a.size_x !== undefined && a.size_y !== undefined && a.size_z !== undefined) {
            this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(a.size_x - 1, a.size_y - 1, a.size_z - 1));
            this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
            this.masks = this.__init_mask(true);
        }
        const size_x = this.size.size_x();
        const size_y = this.size.size_y();
        const size_z = this.size.size_z();
        if (a.maze !== undefined) {
            for (var z = 0; z < size_z; z++)
                for (var y = 0; y < size_y; y++)
                    for (var x = 0; x < size_x; x++) {
                        this.cells[z][y][x].set(T_MzKind_1.T_MzKind.Stone);
                    }
            const z_array = a.maze.split('Z');
            const z_max = _min(size_z, z_array.length);
            for (var z = 0; z < z_max; z++) {
                const y_array = z_array[z].split('Y');
                const y_max = _min(size_y, y_array.length);
                for (var y = 0; y < y_max; y++) {
                    const x_array = y_array[y].split('X');
                    const x_max = _min(size_x, x_array.length);
                    for (var x = 0; x < x_max; x++) {
                        this.cells[z][y][x].decode(x_array[x]);
                    }
                }
            }
        }
        if (a.mask !== undefined) {
            this.__init_mask(true);
            const z_array = a.mask.split('Z');
            const z_max = _min(size_z, z_array.length);
            for (var z = 0; z < z_max; z++) {
                const y_array = z_array[z].split('Y');
                const y_max = _min(size_y, y_array.length);
                for (var y = 0; y < y_max; y++) {
                    const x_array = y_array[y].split('X');
                    const x_max = _min(size_x, x_array.length);
                    for (var x = 0; x < x_max; x++) {
                        if (x_array[x] !== '0') {
                            this.masks[z][y][x] = true;
                        }
                        else {
                            this.masks[z][y][x] = false;
                        }
                    }
                }
            }
        }
    }
}
exports.C_Maze = C_Maze;
function _min(a, b) {
    return (a <= b) ? a : b;
}
function _max(a, b) {
    return (a >= b) ? a : b;
}


/***/ }),

/***/ "./src/C_MazeViewMessage.ts":
/*!**********************************!*\
  !*** ./src/C_MazeViewMessage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_MazeViewMessage = void 0;
class C_MazeViewMessage {
    constructor() {
        C_MazeViewMessage.me = this;
        this.p = document.getElementById('Maze_view_message');
        C_MazeViewMessage.me.clear_message();
    }
    static get() {
        if (typeof this.me !== "object" || !(this.me instanceof C_MazeViewMessage))
            this.me = new C_MazeViewMessage();
        return this.me;
    }
    display_message(mes, fr_color = 'inherit', bg_color = 'inherit') {
        this.p.style.setProperty('color', fr_color);
        this.p.style.setProperty('background-color', bg_color);
        this.p.innerHTML = mes;
    }
    clear_message() {
        this.display_message('　');
    }
    normal_message(mes) {
        this.display_message(mes);
    }
    notice_message(mes) {
        this.display_message(mes, '#006600', '#ccffcc');
    }
    warning_message(mes) {
        this.display_message(mes, '#ffffff', '#ff0000');
    }
}
exports.C_MazeViewMessage = C_MazeViewMessage;


/***/ }),

/***/ "./src/C_Point.ts":
/*!************************!*\
  !*** ./src/C_Point.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Point = void 0;
class C_Point {
    constructor(x, y, z) {
        if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
            this.x = x;
            this.y = y;
            this.z = z;
            return;
        }
        else if (typeof x === "object") {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        }
        else {
            this.x = -2;
            this.y = -2;
            this.z = -2;
        }
    }
    within(p) {
        return (p.x == this.x && p.y == this.y && p.z == this.z);
    }
    encode() {
        return { x: this.x, y: this.y, z: this.z };
    }
    decode(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this;
    }
}
exports.C_Point = C_Point;


/***/ }),

/***/ "./src/C_Range.ts":
/*!************************!*\
  !*** ./src/C_Range.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Range = void 0;
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/C_Point.ts");
class C_Range {
    constructor(p1, p2) {
        const min_x = _min(p1.x, p2.x);
        const max_x = _max(p1.x, p2.x);
        const min_y = _min(p1.y, p2.y);
        const max_y = _max(p1.y, p2.y);
        const min_z = _min(p1.z, p2.z);
        const max_z = _max(p1.z, p2.z);
        this.min = new C_Point_1.C_Point(min_x, min_y, min_z);
        this.max = new C_Point_1.C_Point(max_x, max_y, max_z);
    }
    within(a) {
        if (typeof a === "object" && a instanceof C_Point_1.C_Point) {
            const p = a;
            if (p.x < this.min.x || p.x > this.max.x)
                return false;
            if (p.y < this.min.y || p.y > this.max.y)
                return false;
            if (p.z < this.min.z || p.z > this.max.z)
                return false;
            return true;
        }
        if (typeof a === "object" && a instanceof C_Range) {
            const p = a;
            if (p.min_x() < this.min.x || p.max_x() > this.max.x)
                return false;
            if (p.min_y() < this.min.y || p.max_y() > this.max.y)
                return false;
            if (p.min_z() < this.min.z || p.max_z() > this.max.z)
                return false;
            return true;
        }
        return false;
    }
    min_x() { return this.min.x; }
    max_x() { return this.max.x; }
    min_y() { return this.min.y; }
    max_y() { return this.max.y; }
    min_z() { return this.min.z; }
    max_z() { return this.max.z; }
    size_x() {
        return this.max.x - this.min.x + 1;
    }
    size_y() {
        return this.max.y - this.min.y + 1;
    }
    size_z() {
        return this.max.z - this.min.z + 1;
    }
    do_all_xyz(fn) {
        for (var z = this.min.z; z <= this.max.z; z++) {
            for (var y = this.min.y; y <= this.max.y; y++) {
                for (var x = this.min.x; y <= this.max.x; x++) {
                    if (!fn(x, y, x))
                        return false;
                }
            }
        }
        return true;
    }
}
exports.C_Range = C_Range;
function _min(a, b) {
    return (a <= b) ? a : b;
}
function _max(a, b) {
    return (a >= b) ? a : b;
}


/***/ }),

/***/ "./src/C_Team.ts":
/*!***********************!*\
  !*** ./src/C_Team.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Team = exports.alert_team_info = void 0;
const C_Walker_1 = __webpack_require__(/*! ./C_Walker */ "./src/C_Walker.ts");
const T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "./src/T_Direction.ts");
const C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "./src/C_Hero.ts");
function alert_team_info(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (a === undefined)
        return;
    alert("Team Info:"
        + "\nid:    " + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nname:  " + ((_b = a.name) !== null && _b !== void 0 ? _b : '?')
        + "\ncur_x: " + ((_d = (_c = a.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '?')
        + "\ncur_y: " + ((_f = (_e = a.point) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : '?')
        + "\ncur_z: " + ((_h = (_g = a.point) === null || _g === void 0 ? void 0 : _g.z) !== null && _h !== void 0 ? _h : '?')
        + "\ncur_d: " + ((_k = (_j = a.direct) === null || _j === void 0 ? void 0 : _j.d) !== null && _k !== void 0 ? _k : '?')
        + "\n");
}
exports.alert_team_info = alert_team_info;
class C_Team {
    constructor(a) {
        var _a, _b, _c;
        this.my_layer = 99;
        this.my_id = (_a = a === null || a === void 0 ? void 0 : a.id) !== null && _a !== void 0 ? _a : 0;
        this.my_name = (_b = a === null || a === void 0 ? void 0 : a.name) !== null && _b !== void 0 ? _b : 'Neo Team?';
        this.walker = new C_Walker_1.C_Walker();
        this.heroes = [];
        this.hope_motion = (_c = a === null || a === void 0 ? void 0 : a.motion) !== null && _c !== void 0 ? _c : 'NOP';
        if (a !== undefined)
            this.__init(a);
    }
    __init(a) {
        var _a, _b, _c;
        this.my_id = (_a = a.id) !== null && _a !== void 0 ? _a : this.my_id;
        this.my_name = (_b = a.name) !== null && _b !== void 0 ? _b : this.my_name;
        if (a.p !== undefined)
            this.walker.set_p(a.p);
        if (a.x !== undefined)
            this.walker.set_x(a.x);
        if (a.y !== undefined)
            this.walker.set_x(a.y);
        if (a.z !== undefined)
            this.walker.set_x(a.z);
        if (a.d !== undefined)
            this.walker.set_dir(a.d);
        this.hope_motion = (_c = a.motion) !== null && _c !== void 0 ? _c : this.hope_motion;
        if (a.heroes !== undefined) {
            for (const hero of a.heroes) {
                this.append_hero(hero);
            }
        }
    }
    set_prp(arg) {
        this.__init(arg);
    }
    id() {
        return 'Team_' + this.my_id.toString(16).padStart(5, '0');
    }
    within(p) {
        const here = this.walker.get_p();
        return here.within(p);
    }
    layer() { return this.my_layer; }
    set_layer(layer) { this.my_layer = layer; }
    to_letter() {
        switch (this.walker.get_dir()) {
            case T_Direction_1.T_Direction.N: return '↑';
            case T_Direction_1.T_Direction.E: return '→';
            case T_Direction_1.T_Direction.S: return '↓';
            case T_Direction_1.T_Direction.W: return '←';
            default: return '🌀';
        }
    }
    get_p() {
        return this.walker.get_p();
    }
    set_p(p, d) {
        this.walker.set_p(p, d);
    }
    get_z() {
        return this.walker.get_z();
    }
    set_z(z) {
        if (z < 0)
            return;
        this.walker.set_z(z);
    }
    get_dir() {
        return this.walker.get_dir();
    }
    set_dir(d) {
        this.walker.set_dir(d);
    }
    get_around(front, right, up = 0) {
        return this.walker.get_around(front, right, up);
    }
    hope_p_fwd() {
        return {
            has_hope: true,
            hope: "Move",
            subj: this.walker.get_p_fwd(),
            doOK: () => { this.walker.set_p_fwd(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_bak() {
        return {
            has_hope: true,
            hope: "Move",
            subj: this.walker.get_p_bak(),
            doOK: () => { this.walker.set_p_bak(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_turn_r() {
        return {
            has_hope: true,
            hope: "Turn",
            subj: this.walker.get_p(),
            doOK: () => { this.walker.turn_r(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_turn_l() {
        return {
            has_hope: true,
            hope: "Turn",
            subj: this.walker.get_p(),
            doOK: () => { this.walker.turn_l(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_up() {
        return {
            has_hope: true,
            hope: "Up",
            subj: this.walker.get_p_up(),
            doOK: () => { this.move_p_up(); },
            doNG: () => { this.isNG(); },
        };
    }
    hope_p_down() {
        return {
            has_hope: true,
            hope: "Down",
            subj: this.walker.get_p_down(),
            doOK: () => { this.move_p_down(); },
            doNG: () => { this.isNG(); },
        };
    }
    move_p_up() {
        this.walker.set_p_up();
    }
    move_p_down() {
        this.walker.set_p_down();
    }
    isNG() {
        return;
    }
    append_hero(hero) {
        this.heroes.push(hero);
    }
    remove_hero(hero) {
        this.heroes = this.heroes.filter((item) => item !== hero);
    }
    encode() {
        const x = this.walker.get_x();
        const y = this.walker.get_y();
        const z = this.walker.get_z();
        const d = this.walker.get_dir();
        return {
            id: this.my_id,
            name: this.my_name,
            point: { x: x, y: y, z: z },
            direct: { d: d },
            heroes: C_Hero_1.C_Hero.encode_heroes(this.heroes),
            motion: this.hope_motion,
        };
    }
    decode(a) {
        if (a === undefined)
            return this;
        if (a.id !== undefined)
            this.my_id = a.id;
        if (a.name !== undefined)
            this.my_name = a.name;
        if (a.motion !== undefined)
            this.hope_motion = a.motion;
        if (a.point !== undefined && typeof a.point == 'object') {
            this.walker.decode(a.point);
        }
        if (a.x !== undefined && a.y !== undefined && a.z !== undefined) {
            this.walker.decode({ x: a.x, y: a.y, z: a.z });
        }
        if (a.direct !== undefined && typeof a.point === 'object') {
            this.walker.decode(a.direct);
        }
        if (a.heroes !== undefined) {
            this.heroes = C_Hero_1.C_Hero.decode_heroes(a.heroes);
        }
        return this;
    }
}
exports.C_Team = C_Team;


/***/ }),

/***/ "./src/C_UrlOpt.ts":
/*!*************************!*\
  !*** ./src/C_UrlOpt.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_UrlOpt = void 0;
class C_UrlOpt {
    constructor(a) {
        if (typeof a === "undefined") {
            this.v = {};
            return;
        }
        if (typeof a === "string") {
            this.set_from_string(a);
        }
        if (typeof a === "object") {
            this.v = a;
            return;
        }
        this.v = {};
        return;
    }
    get_keys() {
        const key_list = new Array;
        for (var key in this.v) {
            key_list.push(key);
        }
        return key_list;
    }
    get(key) {
        if (key in this.v) {
            if (typeof this.v[key] === "number") {
                return this.v[key].toString();
            }
            return this.v[key];
        }
        else {
            return "";
        }
    }
    set(ukn, val) {
        if (typeof ukn === "string") {
            if (typeof val === "undefined") {
                this.add_from_string(ukn);
                return;
            }
            else if (typeof val === "string") {
                this.v[ukn] = val;
                return;
            }
            else if (typeof val === "number") {
                this.v[ukn] = val.toString();
                return;
            }
            else {
                this.v[ukn] = "";
            }
        }
        if (typeof ukn === "object") {
            const attr = ukn;
            for (const item in attr) {
                this.v[item] = attr[item];
            }
            return;
        }
        return;
    }
    remove(key) {
        if (key in this.v) {
            delete this.v[key];
        }
    }
    clear() {
        this.v = {};
    }
    to_string() {
        const len = Object.keys(this.v).length;
        if (len < 1)
            return "";
        var str_array = [];
        for (const key in this.v) {
            str_array.push(key + "=" + this.v[key]);
        }
        return str_array.join("&");
    }
    to_FormData() {
        const len = Object.keys(this.v).length;
        if (len < 1)
            return null;
        var form_data = new FormData();
        for (const key in this.v) {
            const value = this.v[key];
            if (typeof value === "string")
                form_data.append(key, value);
            else
                form_data.append(key, value.toString());
        }
        return form_data;
    }
    set_from_string(s) {
        this.clear();
        this.add_from_string(s);
    }
    add_from_string(s) {
        const str = s.replace(/^(\??)(.*)$/, '$2');
        const str_array = str.split("&");
        str_array.forEach((item) => {
            const key_value = item.split("=");
            if (key_value.length < 2) {
                this.v[key_value[0]] = '';
            }
            else {
                this.v[key_value[0]] = key_value[1];
            }
        });
    }
}
exports.C_UrlOpt = C_UrlOpt;


/***/ }),

/***/ "./src/C_Walker.ts":
/*!*************************!*\
  !*** ./src/C_Walker.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Walker = void 0;
const T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "./src/T_Direction.ts");
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/C_Point.ts");
class C_Walker {
    constructor() {
        this.p = new C_Point_1.C_Point();
        this.d = T_Direction_1.T_Direction.N;
    }
    get_dir() { return this.d; }
    set_dir(d) {
        this.d = d;
    }
    get_p() {
        return new C_Point_1.C_Point(this.p);
    }
    set_p(p, d) {
        this.p = p;
        this.d = d !== null && d !== void 0 ? d : this.d;
    }
    get_x() { return this.p.x; }
    get_y() { return this.p.y; }
    get_z() { return this.p.z; }
    set_x(x) { this.p.x = x; }
    set_y(y) { this.p.y = y; }
    set_z(z) { this.p.z = z; }
    get_p_fwd() {
        return this.__get_p_move(1);
    }
    set_p_fwd() {
        this.set_p(this.get_p_fwd());
    }
    get_p_bak() {
        return this.__get_p_move(-1);
    }
    set_p_bak() {
        this.set_p(this.get_p_bak());
    }
    get_p_up() {
        const p = new C_Point_1.C_Point(this.p);
        p.z--;
        return p;
    }
    set_p_up() {
        this.set_p(this.get_p_up());
    }
    get_p_down() {
        const p = new C_Point_1.C_Point(this.p);
        p.z++;
        return p;
    }
    set_p_down() {
        this.set_p(this.get_p_down());
    }
    __get_p_move(offset) {
        const p = new C_Point_1.C_Point(this.p);
        switch (this.d) {
            case T_Direction_1.T_Direction.N:
                p.y -= offset;
                break;
            case T_Direction_1.T_Direction.E:
                p.x += offset;
                break;
            case T_Direction_1.T_Direction.S:
                p.y += offset;
                break;
            case T_Direction_1.T_Direction.W:
                p.x -= offset;
                break;
        }
        return p;
    }
    get_around(front, right, up) {
        const cur_pos = this.p;
        const cur_dir = this.d;
        var target_x = this.p.x;
        var target_y = this.p.y;
        var target_z = this.p.z - up;
        switch (this.d) {
            case T_Direction_1.T_Direction.N:
                target_x += right;
                target_y -= front;
                break;
            case T_Direction_1.T_Direction.E:
                target_x += front;
                target_y += right;
                break;
            case T_Direction_1.T_Direction.S:
                target_x -= right;
                target_y += front;
                break;
            case T_Direction_1.T_Direction.W:
                target_x -= front;
                target_y -= right;
                break;
        }
        return new C_Point_1.C_Point(target_x, target_y, target_z);
    }
    turn_r() {
        switch (this.d) {
            case T_Direction_1.T_Direction.N:
                this.d = T_Direction_1.T_Direction.E;
                break;
            case T_Direction_1.T_Direction.E:
                this.d = T_Direction_1.T_Direction.S;
                break;
            case T_Direction_1.T_Direction.S:
                this.d = T_Direction_1.T_Direction.W;
                break;
            case T_Direction_1.T_Direction.W:
                this.d = T_Direction_1.T_Direction.N;
                break;
        }
    }
    turn_l() {
        switch (this.d) {
            case T_Direction_1.T_Direction.N:
                this.d = T_Direction_1.T_Direction.W;
                break;
            case T_Direction_1.T_Direction.E:
                this.d = T_Direction_1.T_Direction.N;
                break;
            case T_Direction_1.T_Direction.S:
                this.d = T_Direction_1.T_Direction.E;
                break;
            case T_Direction_1.T_Direction.W:
                this.d = T_Direction_1.T_Direction.S;
                break;
        }
    }
    turn_b() {
        switch (this.d) {
            case T_Direction_1.T_Direction.N:
                this.d = T_Direction_1.T_Direction.S;
                break;
            case T_Direction_1.T_Direction.E:
                this.d = T_Direction_1.T_Direction.W;
                break;
            case T_Direction_1.T_Direction.S:
                this.d = T_Direction_1.T_Direction.N;
                break;
            case T_Direction_1.T_Direction.W:
                this.d = T_Direction_1.T_Direction.W;
                break;
        }
    }
    encode() {
        return {
            x: this.p.x,
            y: this.p.y,
            z: this.p.z,
            d: this.d,
        };
    }
    decode(a) {
        if (a.x !== undefined && a.y !== undefined && a.z !== undefined) {
            this.p.x = a.x;
            this.p.y = a.y;
            this.p.z = a.z;
        }
        if (a.d !== undefined)
            this.d = a.d;
        return this;
    }
}
exports.C_Walker = C_Walker;


/***/ }),

/***/ "./src/C_Wall.ts":
/*!***********************!*\
  !*** ./src/C_Wall.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Wall = void 0;
class C_Wall {
    constructor(depth = 5, size) {
        if (depth < 3)
            depth = 5;
        if (depth % 2 !== 1)
            depth++;
        const min_x = size.min_x();
        const min_y = size.min_y();
        const max_x = size.max_x();
        const max_y = size.max_y();
        const center_x = (max_x - min_x) / 2;
        const front_wall_size_x = (max_x - min_x) / depth;
        const side_wall_size_x = (center_x - front_wall_size_x / 2) / depth;
        const front_wall_H_size_x = new Array(depth + 1);
        front_wall_H_size_x[depth] = front_wall_size_x / 2;
        for (var i = depth - 1; i >= 0; i--) {
            front_wall_H_size_x[i] = front_wall_H_size_x[i + 1] + side_wall_size_x;
        }
        const side_wall_size_T = (max_y - min_y) * 1.0 / ((depth + 1) * 2 + 1);
        const side_wall_size_B = (max_y - min_y) * 1.0 / ((depth + 1) * 2 + 1);
        const wall = new Array(depth + 1);
        for (var j = 0; j < depth + 1; j++) {
            wall[j] = new Array(depth + 1);
            for (var k = 0; k < depth + 1; k++) {
                const wk_x = center_x - front_wall_H_size_x[j] * (depth - 2 * k);
                wall[j][k] = {
                    min_x: wk_x,
                    max_x: wk_x + front_wall_H_size_x[j] * 2,
                    min_y: min_y + side_wall_size_T * j,
                    max_y: max_y - side_wall_size_B * j,
                };
            }
        }
        this.d = depth;
        this.w = wall;
    }
    get_depth() {
        return this.d;
    }
    get(depth, offset) {
        const H_dept = (this.d - 1) / 2;
        return this.w[depth][H_dept + offset];
    }
}
exports.C_Wall = C_Wall;


/***/ }),

/***/ "./src/F_POST_and_move_page.ts":
/*!*************************************!*\
  !*** ./src/F_POST_and_move_page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.POST_and_move_page = exports.POST_and_get_JSON = void 0;
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function POST_and_get_JSON(url, opt) {
    return __awaiter(this, void 0, void 0, function* () {
        const form_data = opt.to_FormData();
        if (form_data === null)
            return '';
        try {
            const res = yield fetch(url, {
                method: 'POST',
                body: form_data
            });
            return yield res.json();
        }
        catch (err) {
            global_1.g_mvm.warning_message('通信エラー: ' + err);
            return undefined;
        }
    });
}
exports.POST_and_get_JSON = POST_and_get_JSON;
function POST_and_move_page(url, opt) {
    const form = create_form(url, opt);
    document.body.appendChild(form);
    form.submit();
}
exports.POST_and_move_page = POST_and_move_page;
function create_form(url, opt) {
    const form = document.createElement('form');
    form.setAttribute('id', 'dummy_form_' + new Date().valueOf().toString());
    form.setAttribute('method', 'POST');
    form.setAttribute('action', url);
    form.style.setProperty('display', 'none');
    for (var key of opt.get_keys()) {
        create_input(form, key, opt.get(key));
    }
    document.body.appendChild(form);
    return form;
}
function create_input(form, name, value) {
    var fid;
    const i = document.createElement('input');
    if (form.getAttribute('id') !== null) {
        fid = form.getAttribute('id');
    }
    else {
        fid = 'dummy_form';
        form.setAttribute('id', fid);
    }
    i.setAttribute('type', 'hidden');
    i.setAttribute('for', fid);
    i.setAttribute('name', name);
    i.setAttribute('value', value);
    i.style.setProperty('display', 'none');
    form.appendChild(i);
    return i;
}


/***/ }),

/***/ "./src/F_display_maze.ts":
/*!*******************************!*\
  !*** ./src/F_display_maze.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.maze3D_blink_off_direction = exports.maze3D_blink_on_direction = exports.displey_mase3D_direction = exports.display_maze3D = exports.init_maze3D = exports.display_maze2D = void 0;
const C_Point_1 = __webpack_require__(/*! ./C_Point */ "./src/C_Point.ts");
const C_Range_1 = __webpack_require__(/*! ./C_Range */ "./src/C_Range.ts");
const T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "./src/T_MzKind.ts");
const C_Wall_1 = __webpack_require__(/*! ./C_Wall */ "./src/C_Wall.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
const T_Direction_1 = __webpack_require__(/*! ./T_Direction */ "./src/T_Direction.ts");
function display_maze2D() {
    const pre = document.getElementById('Maze_view2D_pre');
    if (pre !== null)
        pre.innerText = global_1.g_maze.to_string(global_1.g_team.get_p().z);
}
exports.display_maze2D = display_maze2D;
function init_maze3D() {
    const canvas = document.getElementById('Maze_view3D_canvas');
    if (canvas === null) {
        alert('Canvas isnt found! id=Maze_view3D_canvas');
        return { canvas: null, con: null, depth: 0, wall: null };
    }
    const con = canvas.getContext('2d');
    if (con === null) {
        alert('Browser dont surpport 2D graphics!');
        return { canvas: null, con: null, depth: 0, wall: null };
    }
    const depth = 5;
    const top_p = new C_Point_1.C_Point(0, 0, 0);
    const btm_p = new C_Point_1.C_Point(canvas.clientWidth - 1, canvas.clientHeight - 1, 0);
    const wall = new C_Wall_1.C_Wall(depth, new C_Range_1.C_Range(top_p, btm_p));
    return { canvas: canvas, con: con, depth: depth, wall: wall };
}
exports.init_maze3D = init_maze3D;
function draw_init_maze3D() {
    if (global_1.g_ds.canvas === null || global_1.g_ds.con === null)
        return;
    global_1.g_ds.con.fillStyle = '#aaaaaa';
    global_1.g_ds.con.fillRect(0, 0, global_1.g_ds.canvas.clientWidth - 1, get_holizon_line());
    global_1.g_ds.con.fillStyle = '#6666ff';
    global_1.g_ds.con.fillRect(0, get_holizon_line(), global_1.g_ds.canvas.clientWidth - 1, global_1.g_ds.canvas.clientHeight - 1);
    drow_floor_line();
}
function get_holizon_line() {
    if (global_1.g_ds.wall === null)
        return -1;
    return global_1.g_ds.wall.get(global_1.g_ds.depth, 0).max_y;
}
function drow_floor_line() {
    if (global_1.g_ds.canvas === null || global_1.g_ds.con === null || global_1.g_ds.wall === null)
        return;
    const con = global_1.g_ds.con;
    const wall = global_1.g_ds.wall;
    const depth = global_1.g_ds.depth;
    const H_dept = (depth - 1) / 2;
    const left_x = 0;
    const right_x = global_1.g_ds.canvas.clientWidth - 1;
    const front_y = global_1.g_ds.canvas.clientHeight - 1;
    const back_y = get_holizon_line();
    con.strokeStyle = '#9999ff';
    con.lineWidth = 1;
    for (var y = 0; y < depth + 1; y++) {
        con.beginPath();
        con.moveTo(left_x, wall.get(y, 0).max_y);
        con.lineTo(right_x, wall.get(y, 0).max_y);
        con.stroke();
    }
    for (var x = -H_dept; x < H_dept + 1; x++) {
        con.beginPath();
        con.moveTo(wall.get(0, x).min_x, front_y);
        con.lineTo(wall.get(depth, x).min_x, back_y);
        con.stroke();
    }
}
function display_maze3D() {
    if (global_1.g_ds.canvas === null || global_1.g_ds.con === null || global_1.g_ds.wall === null)
        return;
    draw_init_maze3D();
    displey_mase3D_direction();
    const depth = global_1.g_ds.depth;
    const H_depth = (depth - 1) / 2;
    for (var j = global_1.g_ds.depth - 1; j >= 0; j--) {
        for (var k = -H_depth; k < 0; k++) {
            switch (global_1.g_maze.get_cell(global_1.g_team.get_around(j, k, 0))) {
                case T_MzKind_1.T_MzKind.Stone:
                    drow_right_side_stone(j, k);
                    break;
                case T_MzKind_1.T_MzKind.Unexp:
                    drow_floor_unexp(j, k);
                    break;
                case T_MzKind_1.T_MzKind.StrUp:
                case T_MzKind_1.T_MzKind.StrDn:
                case T_MzKind_1.T_MzKind.StrUD:
                    drow_right_side_stairs(j, k);
                    break;
                case T_MzKind_1.T_MzKind.Floor:
                default:
                    drow_floor(j, k);
                    break;
            }
        }
        for (var k = H_depth; k > 0; k--) {
            switch (global_1.g_maze.get_cell(global_1.g_team.get_around(j, k, 0))) {
                case T_MzKind_1.T_MzKind.Stone:
                    drow_left_side_stone(j, k);
                    break;
                case T_MzKind_1.T_MzKind.Unexp:
                    drow_floor_unexp(j, k);
                    break;
                case T_MzKind_1.T_MzKind.StrUp:
                case T_MzKind_1.T_MzKind.StrDn:
                case T_MzKind_1.T_MzKind.StrUD:
                    drow_left_side_stairs(j, k);
                    break;
                case T_MzKind_1.T_MzKind.Floor:
                default:
                    drow_floor(j, k);
                    break;
            }
        }
        switch (global_1.g_maze.get_cell(global_1.g_team.get_around(j, 0, 0))) {
            case T_MzKind_1.T_MzKind.Stone:
                drow_front_stone(j, 0);
                break;
            case T_MzKind_1.T_MzKind.Unexp:
                drow_floor_unexp(j, 0);
                break;
            case T_MzKind_1.T_MzKind.StrUp:
            case T_MzKind_1.T_MzKind.StrDn:
            case T_MzKind_1.T_MzKind.StrUD:
                drow_front_stairs(j, 0);
                break;
            case T_MzKind_1.T_MzKind.Floor:
            default:
                drow_floor(j, 0);
                break;
        }
    }
}
exports.display_maze3D = display_maze3D;
function drow_floor_unexp(d, w) {
    drow_floor(d, w, '#66ffff');
}
function drow_front_stone(d, w) {
    drow_front(d, w, '#00ff00', '#0000ff');
}
function drow_left_side_stone(d, w) {
    drow_left_side(d, w, '#00ff00', '#0000ff');
    drow_front(d, w, '#00ff00', '#0000ff');
}
function drow_right_side_stone(d, w) {
    drow_right_side(d, w, '#00ff00', '#0000ff');
    drow_front(d, w, '#00ff00', '#0000ff');
}
function drow_front_stairs(d, w) {
    drow_floor(d, w, '#ffffcc', '#ffff00');
    drow_ceiling(d, w, '#ffffcc', '#ffff00');
    drow_front(d, w, null, '#ffff00');
}
function drow_left_side_stairs(d, w) {
    drow_floor(d, w, '#ffffcc', '#ffff00');
    drow_ceiling(d, w, '#ffffcc', '#ffff00');
    drow_left_side(d, w, null, '#ffff00');
}
function drow_right_side_stairs(d, w) {
    drow_floor(d, w, '#ffffcc', '#ffff00');
    drow_ceiling(d, w, '#ffffcc', '#ffff00');
    drow_right_side(d, w, null, '#ffff00');
}
function drow_floor(d, w, fill = '#6666ff', line = '#9999ff') {
    if (global_1.g_ds.wall === null)
        return;
    const rect_front = global_1.g_ds.wall.get(d, w);
    const rect_back = global_1.g_ds.wall.get(d + 1, w);
    const rect = {
        tl: { x: rect_front.min_x, y: rect_front.max_y },
        tr: { x: rect_front.max_x, y: rect_front.max_y },
        br: { x: rect_back.max_x, y: rect_back.max_y },
        bl: { x: rect_back.min_x, y: rect_back.max_y }
    };
    drow_cell(rect, fill, line);
}
function drow_ceiling(d, w, fill = '#aaaaaa', line = '#9999ff') {
    if (global_1.g_ds.wall === null)
        return;
    const rect_front = global_1.g_ds.wall.get(d, w);
    const rect_back = global_1.g_ds.wall.get(d + 1, w);
    const rect = {
        tl: { x: rect_front.min_x, y: rect_front.min_y },
        tr: { x: rect_front.max_x, y: rect_front.min_y },
        br: { x: rect_back.max_x, y: rect_back.min_y },
        bl: { x: rect_back.min_x, y: rect_back.min_y }
    };
    drow_cell(rect, fill, line);
}
function drow_front(d, w, fill = '#00ff00', line = '#0000ff') {
    if (global_1.g_ds.wall === null)
        return;
    const con = global_1.g_ds.con;
    const rect_front = global_1.g_ds.wall.get(d, w);
    const rect = {
        tl: { x: rect_front.min_x, y: rect_front.min_y },
        tr: { x: rect_front.max_x, y: rect_front.min_y },
        br: { x: rect_front.max_x, y: rect_front.max_y },
        bl: { x: rect_front.min_x, y: rect_front.max_y }
    };
    drow_cell(rect, fill, line);
}
function drow_left_side(d, w, fill = '#00cc00', line = '#0000ff') {
    if (global_1.g_ds.wall === null)
        return;
    const con = global_1.g_ds.con;
    const rect_front = global_1.g_ds.wall.get(d, w);
    const rect_back = global_1.g_ds.wall.get(d + 1, w);
    const rect = {
        tl: { x: rect_front.min_x, y: rect_front.min_y },
        tr: { x: rect_back.min_x, y: rect_back.min_y },
        br: { x: rect_back.min_x, y: rect_back.max_y },
        bl: { x: rect_front.min_x, y: rect_front.max_y }
    };
    drow_cell(rect, fill, line);
}
function drow_right_side(d, w, fill = '#00cc00', line = '#0000ff') {
    if (global_1.g_ds.wall === null)
        return;
    const con = global_1.g_ds.con;
    const rect_front = global_1.g_ds.wall.get(d, w);
    const rect_back = global_1.g_ds.wall.get(d + 1, w);
    const rect = {
        tl: { x: rect_front.max_x, y: rect_front.min_y },
        tr: { x: rect_back.max_x, y: rect_back.min_y },
        br: { x: rect_back.max_x, y: rect_back.max_y },
        bl: { x: rect_front.max_x, y: rect_front.max_y }
    };
    drow_cell(rect, fill, line);
}
function drow_cell(r, fill, line) {
    if (global_1.g_ds.con === null || global_1.g_ds.wall === null)
        return;
    const con = global_1.g_ds.con;
    con.beginPath();
    con.moveTo(r.tl.x, r.tl.y);
    con.lineTo(r.tr.x, r.tr.y);
    con.lineTo(r.br.x, r.br.y);
    con.lineTo(r.bl.x, r.bl.y);
    con.closePath();
    if (fill != null) {
        con.fillStyle = fill;
        con.fill();
    }
    if (line !== null) {
        con.strokeStyle = line;
        con.lineWidth = 1;
        con.stroke();
    }
}
function displey_mase3D_direction() {
    const p_dir = document.getElementById('Maze_view3D_direction_info');
    if (p_dir === null) {
        alert('P element isnt found! id=Maze_view3D_direction_info');
        return;
    }
    var direction;
    switch (global_1.g_team.get_dir()) {
        case T_Direction_1.T_Direction.N:
            direction = '<span class="direction_N">《北》</span>';
            break;
        case T_Direction_1.T_Direction.E:
            direction = '<span class="direction_E">《東》</span>';
            break;
        case T_Direction_1.T_Direction.S:
            direction = '<span class="direction_S">《南》</span>';
            break;
        case T_Direction_1.T_Direction.W:
            direction = '<span class="direction_W">《西》</span>';
            break;
        default:
            direction = '<span class="direction_D">《謎》</span>';
            break;
    }
    const p = global_1.g_team.get_p();
    const mes = '地下 ' + (p.z + 1) + '階　' + direction + '　(x = <span id="direction_X">' + p.x + '</span>, y = <span id="direction_Y">' + p.y + '</span>)';
    p_dir.innerHTML = mes;
}
exports.displey_mase3D_direction = displey_mase3D_direction;
function maze3D_blink_on_direction() {
    const dir_x = document.getElementById('direction_X');
    if (dir_x === null)
        return;
    const dir_y = document.getElementById('direction_Y');
    if (dir_y === null)
        return;
    switch (global_1.g_team.get_dir()) {
        case T_Direction_1.T_Direction.N:
        case T_Direction_1.T_Direction.S:
            dir_x.classList.remove('blink');
            dir_y.classList.add('blink');
            return;
        case T_Direction_1.T_Direction.E:
        case T_Direction_1.T_Direction.W:
            dir_x.classList.add('blink');
            dir_y.classList.remove('blink');
            return;
    }
}
exports.maze3D_blink_on_direction = maze3D_blink_on_direction;
function maze3D_blink_off_direction() {
    const dir_x = document.getElementById('direction_X');
    if (dir_x === null)
        return;
    dir_x.classList.remove('blink');
    const dir_y = document.getElementById('direction_Y');
    if (dir_y === null)
        return;
    dir_y.classList.remove('blink');
}
exports.maze3D_blink_off_direction = maze3D_blink_off_direction;


/***/ }),

/***/ "./src/F_get_mai.ts":
/*!**************************!*\
  !*** ./src/F_get_mai.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getJSON_by_POST = exports.decode_all = exports.get_mai_maze = void 0;
const F_set_controlles_1 = __webpack_require__(/*! ./F_set_controlles */ "./src/F_set_controlles.ts");
const F_set_move_controlles_1 = __webpack_require__(/*! ./F_set_move_controlles */ "./src/F_set_move_controlles.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function get_mai_maze(url, opt) {
    getJSON_by_POST(url, opt, (xhr) => {
        const jsonObj = JSON.parse(xhr.responseText);
        decode_all(jsonObj);
        (0, global_1.init_debug_mode)();
        (0, F_set_controlles_1.init_controlles)();
        (0, F_set_move_controlles_1.do_move_bottom_half)('blink_off');
    });
}
exports.get_mai_maze = get_mai_maze;
function decode_all(jsonObj) {
    if (jsonObj.maze !== undefined)
        global_1.g_maze.decode(jsonObj.maze);
    if (jsonObj.team !== undefined)
        global_1.g_team.decode(jsonObj.team);
    global_1.g_maze.add_obj(global_1.g_team);
}
exports.decode_all = decode_all;
function getJSON_by_POST(url, opt, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                callback(xhr);
            }
            else {
                alert("HttpRequest ERROR code=" + xhr.status);
            }
        }
    };
    xhr.send(opt);
}
exports.getJSON_by_POST = getJSON_by_POST;


/***/ }),

/***/ "./src/F_instant_save.ts":
/*!*******************************!*\
  !*** ./src/F_instant_save.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.instant_save = exports.instant_load = void 0;
const C_UrlOpt_1 = __webpack_require__(/*! ./C_UrlOpt */ "./src/C_UrlOpt.ts");
const F_POST_and_move_page_1 = __webpack_require__(/*! ./F_POST_and_move_page */ "./src/F_POST_and_move_page.ts");
const F_get_mai_1 = __webpack_require__(/*! ./F_get_mai */ "./src/F_get_mai.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function instant_load() { }
exports.instant_load = instant_load;
function instant_save() {
    var _a;
    const maze_data = JSON.stringify(global_1.g_maze.encode(), null, "\t");
    const team_data = JSON.stringify(global_1.g_team.encode(), null, "\t");
    const opt = new C_UrlOpt_1.C_UrlOpt();
    opt.set('mode', 'instant_save');
    opt.set('save_id', 1);
    opt.set('save_title', '');
    opt.set('maze', maze_data);
    opt.set('team', team_data);
    (_a = (0, F_POST_and_move_page_1.POST_and_get_JSON)(global_1.g_get_maze_url, opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        if (jsonObj.ecode == 0) {
            global_1.g_mvm.normal_message('正常に保存されました');
        }
        else {
            global_1.g_mvm.warning_message("保存できませんでした\n" + jsonObj.emsg);
            alert(jsonObj.emsg);
        }
        (0, F_get_mai_1.decode_all)(jsonObj);
    });
}
exports.instant_save = instant_save;


/***/ }),

/***/ "./src/F_set_UD_controlles.ts":
/*!************************************!*\
  !*** ./src/F_set_UD_controlles.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.set_UD_controlles = exports.set_Dn_controlles = exports.set_Up_controlles = exports.clr_UD_controlles = void 0;
const F_set_controlles_1 = __webpack_require__(/*! ./F_set_controlles */ "./src/F_set_controlles.ts");
const T_CtlsMode_1 = __webpack_require__(/*! ./T_CtlsMode */ "./src/T_CtlsMode.ts");
const F_set_move_controlles_1 = __webpack_require__(/*! ./F_set_move_controlles */ "./src/F_set_move_controlles.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function clr_UD_controlles() {
    canUp = false;
    canDn = false;
    isUp = false;
    const u_arrow = document.getElementById('u_arrow');
    const d_arrow = document.getElementById('d_arrow');
    const y_btn = document.getElementById('y_btn');
    const n_btn = document.getElementById('n_btn');
    window.removeEventListener('keypress', key_press_function2);
    u_arrow.removeEventListener("click", hope_Up);
    d_arrow.removeEventListener("click", hope_Down);
    y_btn.removeEventListener("click", do_up);
    y_btn.removeEventListener("click", do_down);
    y_btn.removeEventListener("click", do_UD);
    n_btn.removeEventListener("click", do_cancel);
    u_arrow.style.setProperty('display', 'none');
    d_arrow.style.setProperty('display', 'none');
    y_btn.style.setProperty('display', 'none');
    n_btn.style.setProperty('display', 'none');
}
exports.clr_UD_controlles = clr_UD_controlles;
var canUp = false;
var canDn = false;
var isUp = false;
function set_Up_controlles() {
    global_1.g_mvm.notice_message('上りテレポーターが有ります。登りますか？登る ⇒ 〇 登らない ⇒ ✖');
    (0, F_set_controlles_1.hide_controlles)();
    canUp = true;
    canDn = false;
    __set_UD_controlles();
}
exports.set_Up_controlles = set_Up_controlles;
function set_Dn_controlles() {
    global_1.g_mvm.notice_message('下りテレポーターが有ります。降りますか？降りる ⇒ 〇 降りない ⇒ ✖');
    (0, F_set_controlles_1.hide_controlles)();
    canUp = false;
    canDn = true;
    __set_UD_controlles();
}
exports.set_Dn_controlles = set_Dn_controlles;
function set_UD_controlles() {
    global_1.g_mvm.notice_message('上下テレポーターが有ります。登りますか？登る⇒ 〇 降りる ⇒ (↓キー) 移動しない ⇒ ✖');
    (0, F_set_controlles_1.hide_controlles)();
    canUp = true;
    canDn = true;
    __set_UD_controlles();
}
exports.set_UD_controlles = set_UD_controlles;
function __set_UD_controlles() {
    global_1.g_ctls_mode[0] = T_CtlsMode_1.T_CtlsMode.UD;
    const y_btn = document.getElementById('y_btn');
    const n_btn = document.getElementById('n_btn');
    y_btn.style.setProperty('display', 'block');
    n_btn.style.setProperty('display', 'block');
    n_btn.addEventListener("click", do_cancel, false);
    if (canUp && !canDn) {
        y_btn.addEventListener("click", do_up, false);
    }
    if (canDn && !canUp) {
        y_btn.addEventListener("click", do_down, false);
    }
    if (canUp && canDn) {
        y_btn.addEventListener("click", do_UD, false);
        const u_arrow = document.getElementById('u_arrow');
        u_arrow.addEventListener("click", hope_Up, false);
        u_arrow.style.setProperty('display', 'block');
        const d_arrow = document.getElementById('d_arrow');
        d_arrow.addEventListener("click", hope_Down, false);
        d_arrow.style.setProperty('display', 'block');
        if (isUp)
            u_arrow.style.setProperty('visibility', 'hidden');
        else
            u_arrow.style.setProperty('visibility', 'visible');
        if (!isUp)
            d_arrow.style.setProperty('visibility', 'hidden');
        else
            d_arrow.style.setProperty('visibility', 'visible');
    }
    window.addEventListener('keypress', key_press_function2);
    const ctl_view = document.getElementById('move_ctl_view');
    ctl_view.style.setProperty('display', 'block');
}
function key_press_function2(e) {
    var _a, _b, _c, _d, _e, _f;
    switch (e.code) {
        case 'ArrowUp':
        case 'KeyK':
        case 'Numpad5':
            (_a = document.getElementById('u_arrow')) === null || _a === void 0 ? void 0 : _a.click();
            return;
        case 'ArrowDown':
        case 'KeyJ':
        case 'Numpad2':
            (_b = document.getElementById('d_arrow')) === null || _b === void 0 ? void 0 : _b.click();
            return;
        case 'KeyO':
        case 'KeyY':
        case 'Numpad0':
        case 'Digit0':
        case 'Enter':
        case 'NumpadEnter':
            (_c = document.getElementById('y_btn')) === null || _c === void 0 ? void 0 : _c.click();
            return;
        case 'KeyN':
        case 'KeyX':
        case 'NumpadAdd':
            (_d = document.getElementById('n_btn')) === null || _d === void 0 ? void 0 : _d.click();
            return;
        case 'KeyU':
            if (global_1.g_debug_mode && global_1.g_team.get_z() > 0) {
                global_1.g_team.set_z(global_1.g_team.get_z() - 1);
                return;
            }
            if (canUp) {
                (_e = document.getElementById('u_arrow')) === null || _e === void 0 ? void 0 : _e.click();
            }
            return;
        case 'KeyD':
            if (global_1.g_debug_mode && global_1.g_team.get_z() < (global_1.g_maze.get_z_max() - 1)) {
                global_1.g_team.set_z(global_1.g_team.get_z() + 1);
                return;
            }
            if (canDn) {
                (_f = document.getElementById('d_arrow')) === null || _f === void 0 ? void 0 : _f.click();
            }
            return;
    }
}
function do_cancel() {
    global_1.g_mvm.clear_message();
    (0, F_set_move_controlles_1.set_move_controlles)();
}
function do_up() {
    const rslt = global_1.g_team.hope_p_up();
    if (!rslt.has_hope || !global_1.g_maze.within(rslt.subj)) {
        rslt.doNG();
    }
    else {
        rslt.doOK();
    }
    global_1.g_mvm.clear_message();
    (0, F_set_move_controlles_1.set_move_controlles)();
    (0, F_set_move_controlles_1.do_move_bottom_half)('blink_off');
}
function do_down() {
    const rslt = global_1.g_team.hope_p_down();
    if (!rslt.has_hope || !global_1.g_maze.within(rslt.subj)) {
        rslt.doNG();
    }
    else {
        rslt.doOK();
    }
    global_1.g_mvm.clear_message();
    (0, F_set_move_controlles_1.set_move_controlles)();
    (0, F_set_move_controlles_1.do_move_bottom_half)('blink_off');
}
function do_UD() {
    if (!canUp || !canDn)
        return;
    if (isUp)
        do_up();
    else
        do_down();
}
function hope_Up() {
    var _a, _b;
    if (!canUp || !canDn)
        return;
    isUp = true;
    (_a = document.getElementById('u_arrow')) === null || _a === void 0 ? void 0 : _a.style.setProperty('visibility', 'hidden');
    (_b = document.getElementById('d_arrow')) === null || _b === void 0 ? void 0 : _b.style.setProperty('visibility', 'visible');
    global_1.g_mvm.notice_message('登りますか？登る⇒ 〇 降りる ⇒ (↓キー) 移動しない ⇒ ✖');
}
function hope_Down() {
    var _a, _b;
    if (!canUp || !canDn)
        return;
    isUp = false;
    (_a = document.getElementById('u_arrow')) === null || _a === void 0 ? void 0 : _a.style.setProperty('visibility', 'hidden');
    (_b = document.getElementById('d_arrow')) === null || _b === void 0 ? void 0 : _b.style.setProperty('visibility', 'visible');
    global_1.g_mvm.notice_message('降りますか？降りる⇒ 〇 登る ⇒ (↑キー) 移動しない ⇒ ✖');
}


/***/ }),

/***/ "./src/F_set_controlles.ts":
/*!*********************************!*\
  !*** ./src/F_set_controlles.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_controlles = exports.hide_controlles = void 0;
const F_set_move_controlles_1 = __webpack_require__(/*! ./F_set_move_controlles */ "./src/F_set_move_controlles.ts");
const F_set_UD_controlles_1 = __webpack_require__(/*! ./F_set_UD_controlles */ "./src/F_set_UD_controlles.ts");
function hide_controlles() {
    (0, F_set_move_controlles_1.clr_move_controlles)();
    (0, F_set_UD_controlles_1.clr_UD_controlles)();
    const move_ctl_view = document.getElementById('move_ctl_view');
    move_ctl_view === null || move_ctl_view === void 0 ? void 0 : move_ctl_view.style.setProperty('display', 'none');
}
exports.hide_controlles = hide_controlles;
function init_controlles() {
    hide_controlles();
    (0, F_set_move_controlles_1.set_move_controlles)();
}
exports.init_controlles = init_controlles;


/***/ }),

/***/ "./src/F_set_move_controlles.ts":
/*!**************************************!*\
  !*** ./src/F_set_move_controlles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.do_move_bottom_half = exports.set_move_controlles = exports.clr_move_controlles = void 0;
const F_set_controlles_1 = __webpack_require__(/*! ./F_set_controlles */ "./src/F_set_controlles.ts");
const T_MzKind_1 = __webpack_require__(/*! ./T_MzKind */ "./src/T_MzKind.ts");
const F_display_maze_1 = __webpack_require__(/*! ./F_display_maze */ "./src/F_display_maze.ts");
const T_CtlsMode_1 = __webpack_require__(/*! ./T_CtlsMode */ "./src/T_CtlsMode.ts");
const F_set_UD_controlles_1 = __webpack_require__(/*! ./F_set_UD_controlles */ "./src/F_set_UD_controlles.ts");
const F_instant_save_1 = __webpack_require__(/*! ./F_instant_save */ "./src/F_instant_save.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function clr_move_controlles() {
    const u_arrow = document.getElementById('u_arrow');
    const d_arrow = document.getElementById('d_arrow');
    const r_arrow = document.getElementById('r_arrow');
    const l_arrow = document.getElementById('l_arrow');
    window.removeEventListener('keypress', key_press_function1);
    u_arrow.removeEventListener("click", go_F);
    d_arrow.removeEventListener("click", go_B);
    r_arrow.removeEventListener("click", tr_R);
    l_arrow.removeEventListener("click", tr_L);
    u_arrow.style.setProperty('display', 'none');
    d_arrow.style.setProperty('display', 'none');
    l_arrow.style.setProperty('display', 'none');
    r_arrow.style.setProperty('display', 'none');
}
exports.clr_move_controlles = clr_move_controlles;
function set_move_controlles() {
    (0, F_set_controlles_1.hide_controlles)();
    global_1.g_ctls_mode[0] = T_CtlsMode_1.T_CtlsMode.Move;
    const u_arrow = document.getElementById('u_arrow');
    const d_arrow = document.getElementById('d_arrow');
    const r_arrow = document.getElementById('r_arrow');
    const l_arrow = document.getElementById('l_arrow');
    u_arrow.addEventListener("click", go_F, false);
    d_arrow.addEventListener("click", go_B, false);
    r_arrow.addEventListener("click", tr_R, false);
    l_arrow.addEventListener("click", tr_L, false);
    window.addEventListener('keypress', key_press_function1);
    u_arrow.style.setProperty('display', 'block');
    d_arrow.style.setProperty('display', 'block');
    l_arrow.style.setProperty('display', 'block');
    r_arrow.style.setProperty('display', 'block');
    const ctl_view = document.getElementById('move_ctl_view');
    ctl_view === null || ctl_view === void 0 ? void 0 : ctl_view.style.setProperty('display', 'block');
}
exports.set_move_controlles = set_move_controlles;
function key_press_function1(e) {
    var _a, _b, _c, _d;
    switch (e.code) {
        case 'ArrowUp':
        case 'KeyK':
        case 'Numpad5':
            (_a = document.getElementById('u_arrow')) === null || _a === void 0 ? void 0 : _a.click();
            break;
        case 'ArrowDown':
        case 'KeyJ':
        case 'Numpad2':
            (_b = document.getElementById('d_arrow')) === null || _b === void 0 ? void 0 : _b.click();
            break;
        case 'ArrowLeft':
        case 'KeyH':
        case 'Numpad1':
            (_c = document.getElementById('l_arrow')) === null || _c === void 0 ? void 0 : _c.click();
            break;
        case 'ArrowRight':
        case 'KeyL':
        case 'Numpad3':
            (_d = document.getElementById('r_arrow')) === null || _d === void 0 ? void 0 : _d.click();
            break;
        case 'KeyL':
            if (global_1.g_ctls_mode[0] == T_CtlsMode_1.T_CtlsMode.Move && global_1.g_debug_mode) {
                (0, F_instant_save_1.instant_load)();
                do_move_bottom_half('blink_off');
            }
            break;
        case 'KeyS':
            if (global_1.g_ctls_mode[0] == T_CtlsMode_1.T_CtlsMode.Move && global_1.g_debug_mode) {
                (0, F_instant_save_1.instant_save)();
                do_move_bottom_half('blink_off');
            }
            break;
        case 'KeyU':
            if (global_1.g_ctls_mode[0] == T_CtlsMode_1.T_CtlsMode.Move && global_1.g_debug_mode && global_1.g_team.get_z() > 0) {
                global_1.g_team.set_z(global_1.g_team.get_z() - 1);
                do_move_bottom_half('blink_off');
            }
            break;
        case 'KeyD':
            if (global_1.g_ctls_mode[0] == T_CtlsMode_1.T_CtlsMode.Move && global_1.g_debug_mode && global_1.g_team.get_z() < (global_1.g_maze.get_z_max() - 1)) {
                global_1.g_team.set_z(global_1.g_team.get_z() + 1);
                do_move_bottom_half('blink_off');
            }
            break;
    }
}
function clear_mask_around_the_team() {
    global_1.g_maze.clear_mask_around_the_team();
}
function change_unexp_to_floor() {
    global_1.g_maze.change_unexp_to_floor();
}
function go_F() {
    const rslt = global_1.g_team.hope_p_fwd();
    move_check(rslt);
    do_move_bottom_half('blink_on');
}
function go_B() {
    const rslt = global_1.g_team.hope_p_bak();
    move_check(rslt);
    do_move_bottom_half('blink_on');
}
function tr_R() {
    const rslt = global_1.g_team.hope_turn_r();
    move_check(rslt);
    do_move_bottom_half('blink_off');
}
function tr_L() {
    const rslt = global_1.g_team.hope_turn_l();
    move_check(rslt);
    do_move_bottom_half('blink_off');
}
function move_check(r) {
    if (!r.has_hope)
        return;
    if (r.hope == 'Turn') {
        r.doOK();
        return;
    }
    if (r.hope == 'Move') {
        const kind = global_1.g_maze.get_cell(r.subj);
        switch (kind) {
            case T_MzKind_1.T_MzKind.Floor:
            case T_MzKind_1.T_MzKind.Unexp:
                r.doOK();
                return;
            case T_MzKind_1.T_MzKind.StrUp:
            case T_MzKind_1.T_MzKind.StrDn:
            case T_MzKind_1.T_MzKind.StrUD:
                r.doOK();
                do_stairs_motion(kind);
                return;
        }
        r.doNG();
        return;
    }
}
function do_stairs_motion(kind) {
    switch (kind) {
        case T_MzKind_1.T_MzKind.StrUp:
            (0, F_set_UD_controlles_1.set_Up_controlles)();
            break;
        case T_MzKind_1.T_MzKind.StrDn:
            (0, F_set_UD_controlles_1.set_Dn_controlles)();
            break;
        case T_MzKind_1.T_MzKind.StrUD:
            (0, F_set_UD_controlles_1.set_UD_controlles)();
            break;
    }
}
function do_move_bottom_half(blink_mode) {
    change_unexp_to_floor();
    clear_mask_around_the_team();
    (0, F_display_maze_1.display_maze2D)();
    (0, F_display_maze_1.display_maze3D)();
    if (blink_mode === 'blink_on')
        (0, F_display_maze_1.maze3D_blink_on_direction)();
    else
        (0, F_display_maze_1.maze3D_blink_off_direction)();
    global_1.g_mvm.clear_message();
}
exports.do_move_bottom_half = do_move_bottom_half;


/***/ }),

/***/ "./src/T_CtlsMode.ts":
/*!***************************!*\
  !*** ./src/T_CtlsMode.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.T_CtlsMode = void 0;
exports.T_CtlsMode = {
    Nop: 0,
    Move: 1,
    UD: 2,
    Battle: 3,
    Unknown: 99
};


/***/ }),

/***/ "./src/T_Direction.ts":
/*!****************************!*\
  !*** ./src/T_Direction.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$DirectionName = exports.T_Direction = void 0;
exports.T_Direction = {
    N: 0,
    E: 1,
    S: 2,
    W: 3,
    X: 99
};
exports.$DirectionName = {
    0: '北',
    1: '東',
    2: '南',
    3: '西',
    99: '謎'
};


/***/ }),

/***/ "./src/T_MzKind.ts":
/*!*************************!*\
  !*** ./src/T_MzKind.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.T_RvMzKind = exports.T_MzKind = void 0;
exports.T_MzKind = {
    NoDef: 0,
    Floor: 1,
    Unexp: 2,
    Stone: 3,
    Unkwn: 4,
    StrUp: 5,
    StrDn: 6,
    StrUD: 7,
    Empty: 255,
};
exports.T_RvMzKind = {
    0: exports.T_MzKind.NoDef,
    1: exports.T_MzKind.Floor,
    2: exports.T_MzKind.Unexp,
    3: exports.T_MzKind.Stone,
    4: exports.T_MzKind.Unkwn,
    5: exports.T_MzKind.StrUp,
    6: exports.T_MzKind.StrDn,
    7: exports.T_MzKind.StrUD,
    255: exports.T_MzKind.Empty,
};


/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init_debug_mode = exports.init_after_loaded_DOM = exports.g_mvm = exports.g_ds = exports.g_debug_mode = exports.g_ctls_mode = exports.g_team = exports.g_maze = exports.g_check_JSON_url = exports.g_get_maze_url = void 0;
const my_url_base = "http://127.0.0.1/dev/mai/mai_maze/";
exports.g_get_maze_url = my_url_base + "mai_maze.php";
exports.g_check_JSON_url = my_url_base + "check_JSON.php";
const C_Maze_1 = __webpack_require__(/*! ./C_Maze */ "./src/C_Maze.ts");
exports.g_maze = new C_Maze_1.C_Maze({ maze_id: -1 });
const C_Team_1 = __webpack_require__(/*! ./C_Team */ "./src/C_Team.ts");
exports.g_team = new C_Team_1.C_Team();
exports.g_ctls_mode = new Array(1);
const F_display_maze_1 = __webpack_require__(/*! ./F_display_maze */ "./src/F_display_maze.ts");
exports.g_debug_mode = false;
const F_display_maze_2 = __webpack_require__(/*! ./F_display_maze */ "./src/F_display_maze.ts");
exports.g_ds = { canvas: null, con: null, depth: 0, wall: null };
const C_MazeViewMessage_1 = __webpack_require__(/*! ./C_MazeViewMessage */ "./src/C_MazeViewMessage.ts");
function init_after_loaded_DOM() {
    exports.g_ds = (0, F_display_maze_2.init_maze3D)();
    exports.g_mvm = C_MazeViewMessage_1.C_MazeViewMessage.get();
    exports.g_mvm.clear_message();
}
exports.init_after_loaded_DOM = init_after_loaded_DOM;
function init_debug_mode() {
    exports.g_debug_mode = true;
    const btn = document.getElementById('debug_mode');
    if (btn === null)
        return;
    toggle_debug_mode();
    btn.addEventListener("click", (event) => { toggle_debug_mode(); }, false);
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "Escape":
                btn.click();
        }
    });
}
exports.init_debug_mode = init_debug_mode;
function toggle_debug_mode() {
    const btn = document.getElementById('debug_mode');
    if (btn === null)
        return;
    if (exports.g_debug_mode) {
        exports.g_debug_mode = false;
        btn.setAttribute('value', 'false');
        btn.innerHTML = '通常モード中';
        btn.style.setProperty('background-color', '#f0f8ff');
        btn.style.setProperty('color', '#008000');
    }
    else {
        exports.g_debug_mode = true;
        btn.setAttribute('value', 'true');
        btn.innerHTML = 'デバッグモード中';
        btn.style.setProperty('background-color', '#ff0000');
        btn.style.setProperty('color', '#ffffff');
    }
    (0, F_display_maze_1.display_maze2D)();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const C_UrlOpt_1 = __webpack_require__(/*! ./C_UrlOpt */ "./src/C_UrlOpt.ts");
const F_get_mai_1 = __webpack_require__(/*! ./F_get_mai */ "./src/F_get_mai.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
window.addEventListener('DOMContentLoaded', function () {
    (0, global_1.init_after_loaded_DOM)();
    const get_maze_opt = new C_UrlOpt_1.C_UrlOpt({ mode: "new", num: 333 }).to_string();
    (0, F_get_mai_1.get_mai_maze)(global_1.g_get_maze_url, get_maze_opt);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDeEMsa0NBQXFCLEdBQUUsQ0FBQztJQUN4QixNQUFNLFlBQVksR0FBVyxJQUFJLG1CQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9FLDRCQUFZLEVBQUMsdUJBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21haS8uL3NyYy9DX0hlcm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19NYXplVmlld01lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfVGVhbS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19VcmxPcHQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfV2Fsa2VyLnRzIiwid2VicGFjazovL21haS8uL3NyYy9DX1dhbGwudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0ZfUE9TVF9hbmRfbW92ZV9wYWdlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX2Rpc3BsYXlfbWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9nZXRfbWFpLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX2luc3RhbnRfc2F2ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9zZXRfVURfY29udHJvbGxlcy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9zZXRfY29udHJvbGxlcy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9zZXRfbW92ZV9jb250cm9sbGVzLnRzIiwid2VicGFjazovL21haS8uL3NyYy9UX0N0bHNNb2RlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9UX0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvVF9NektpbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgX19pbml0X2FyZyA9IHtcclxuICAgIGlkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86IHN0cmluZywgXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEpTT05fSGVybyA9IHtcclxuICAgIGlkPzogICBudW1iZXIsIFxyXG4gICAgbmFtZT86IHN0cmluZywgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9oZXJvZXNfaW5mbyhhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICBmb3IgKHZhciBpIGluIGEpIHtcclxuICAgICAgICBpZiAoYVtpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBhbGVydChcIkhlcm9bXCIgKyBpLnRvU3RyaW5nKCkgKyBcIl0gSW5mbzpcXG5cIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAoYVtpXT8uaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAoYVtpXT8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVybyB7XHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IF9faW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGEpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdChhOiBfX2luaXRfYXJnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgID0gYS5pZCAgID8/IHRoaXMubXlfaWRcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBhLm5hbWUgPz8gdGhpcy5teV9uYW1lO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IF9faW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLl9faW5pdChhcmcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdIZXJvXycgKyB0aGlzLm15X2lkLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg1LCAnMCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5lbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IHJldDogSlNPTl9IZXJvID0ge1xyXG4gICAgICAgICAgICBpZDogICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgbmFtZTogIHRoaXMubXlfbmFtZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IENfSGVybyB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2lkICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9uYW1lID0gYS5uYW1lO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVfaGVybygpOiBDX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IG5ld19oZXJvID0gbmV3IENfSGVybygpO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe2lkOiAgICBNYXRoLmZsb29yKC0xMDAwLjAgKiBNYXRoLnJhbmRvbSgpKX0pO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe25hbWU6ICBuZXdfaGVyby5pZCgpfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19oZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGhlcm9lcy5wdXNoKG5ldyBDX0hlcm8oKS5kZWNvZGUoaGVyb19kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlcm9lcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRfTXpLaW5kLCBUX1J2TXpLaW5kIH0gZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1JhbmdlIH0gICAgICBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcbmltcG9ydCB7IElfRXhpc3QgfSAgICAgIGZyb20gXCIuL0lfRXZlbnRNYXBcIjtcclxuaW1wb3J0IHsgZ19kZWJ1Z19tb2RlIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGdfdGVhbSB9ICAgICAgIGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgSlNPTl9NYXplID0ge1xyXG4gICAgaWQ/OiAgICAgbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgc3RyaW5nLFxyXG4gICAgc2l6ZV94PzogbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogbnVtYmVyLFxyXG4gICAgbWF6ZT86ICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgIHN0cmluZywgXHJcbiAgICBvYmpzPzogICBvYmplY3RbXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X21hemVfaW5mbyhhOiBKU09OX01hemV8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgYWxlcnQoXCJNYXplIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKGEuaWQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmZsb29yOiBcIiAgICsgKGEuZmxvb3IgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiBcIiAgICsgKGEudGl0bGUgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKGEuc2l6ZV94ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKGEuc2l6ZV95ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICsgKGEuc2l6ZV96ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuICAgIGFsZXJ0KFxyXG4gICAgICAgIFwibWF6ZTpcXG5cIiAgICArIChhLm1hemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgYWxlcnQoXHJcbiAgICAgICAgXCJtYXNrOlxcblwiICAgICsgKGEubWFzayA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGwgIHtcclxuICAgIHByb3RlY3RlZCBjZWxsOiBUX016S2luZDtcclxuICAgIHByb3RlY3RlZCBtYXplOiBDX01hemU7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobTogQ19NYXplLCB2PzogVF9NektpbmQpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG06IENfTWF6ZSwgbj86IG51bWJlcik7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobTogQ19NYXplLCBhPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgdGhpcy5tYXplID0gbTtcclxuICAgICAgICB0aGlzLnNldChhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQoKTogIFRfTXpLaW5kIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCh2PzogVF9NektpbmQpOiB2b2lkO1xyXG4gICAgcHVibGljIHNldChuPzogbnVtYmVyKTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoYT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGwgPSBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbCA9IFRfUnZNektpbmRbYV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGwgPSBhIGFzIFRfTXpLaW5kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbCA9IFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19pbnQodj86IFRfTXpLaW5kKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCAga2luZDogIFRfTXpLaW5kID0gdiA/PyB0aGlzLmNlbGw7XHJcbiAgICAgICAgcmV0dXJuIGtpbmQgYXMgbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyB0b19pbnQoa2luZDogVF9NektpbmQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBraW5kIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIC8vIOaZrumAmuOBq25ld+OBmeOCjOOBsOiJr+OBhOOBruOBp+OBn+OBtuOCk+imgeOCieOBquOBhFxyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9pbnQobnVtOiBudW1iZXIpOiBDX01hemVDZWxsIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZUNlbGwobnVtKTtcclxuICAgIH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKHY/OiBUX016S2luZCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qga2luZDogVF9NektpbmQgPSB2ID8/IHRoaXMuY2VsbDtcclxuICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC50b19sZXR0ZXIoa2luZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHRvX2xldHRlcihraW5kOiBUX016S2luZCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IHJldHVybiAn44CAJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDogcmV0dXJuICfjg7snO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOiByZXR1cm4gJ++8gyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5rd246IHJldHVybiAn77yfJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDogcmV0dXJuICfkuIonO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOiByZXR1cm4gJ+S4iyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6IHJldHVybiAn6YCaJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5FbXB0eTogcmV0dXJuICfvvK8nO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLk5vRGVmOiByZXR1cm4gJ++8uCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn77y4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnJvbV9sZXR0ZXIoc3RyOiBzdHJpbmcpOiBUX016S2luZCB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gQ19NYXplQ2VsbC5mcm9tX2xldHRlcihzdHIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fbGV0dGVyKHN0cjogc3RyaW5nKTogVF9NektpbmQge1xyXG4gICAgICAgIHN3aXRjaCAoc3RyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ+OAgCc6IHJldHVybiBUX016S2luZC5GbG9vcjtcclxuICAgICAgICAgICAgY2FzZSAn44O7JzogcmV0dXJuIFRfTXpLaW5kLlVuZXhwO1xyXG4gICAgICAgICAgICBjYXNlICfvvIMnOiByZXR1cm4gVF9NektpbmQuU3RvbmU7XHJcbiAgICAgICAgICAgIGNhc2UgJ++8nyc6IHJldHVybiBUX016S2luZC5Vbmt3bjtcclxuICAgICAgICAgICAgY2FzZSAn5LiKJzogcmV0dXJuIFRfTXpLaW5kLlN0clVwO1xyXG4gICAgICAgICAgICBjYXNlICfkuIsnOiByZXR1cm4gVF9NektpbmQuU3RyRG47XHJcbiAgICAgICAgICAgIGNhc2UgJ+mAmic6IHJldHVybiBUX016S2luZC5TdHJVRDtcclxuICAgICAgICAgICAgY2FzZSAn77yvJzogcmV0dXJuIFRfTXpLaW5kLkVtcHR5O1xyXG4gICAgICAgICAgICBjYXNlICfvvLgnOiByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC5lbmNvZGUodGhpcy5jZWxsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlKHY6IFRfTXpLaW5kKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHYgYXMgbnVtYmVyKS50b1N0cmluZygxNikucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKHN0cjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gQ19NYXplQ2VsbC5kZWNvZGUoc3RyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKHN0cjogc3RyaW5nKTogVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChzdHIsIDE2KSBhcyBUX016S2luZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBmbG9vcjogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHRpdGxlOiAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbGF5ZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogICAgIENfUmFuZ2U7XHJcbiAgICBwcm90ZWN0ZWQgY2VsbHM6ICAgIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICBwcm90ZWN0ZWQgbWFza3M6ICAgIGJvb2xlYW5bXVtdW107XHJcbiAgICBwcm90ZWN0ZWQgb2JqczogICAgIElfRXhpc3RbXTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB7bWF6ZV9pZCA9IC0xLCBmbG9vciA9IDAsIHRpdGxlID0gJycsIHNpemVfeCA9IDMsIHNpemVfeSA9IDMsIHNpemVfeiA9IDF9OiB7XHJcbiAgICAgICAgICAgIG1hemVfaWQ/OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGZsb29yPzogICBudW1iZXIsXHJcbiAgICAgICAgICAgIHRpdGxlPzogICBzdHJpbmcsXHJcbiAgICAgICAgICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfeT86ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5tYXplX2lkID0gbWF6ZV9pZDtcclxuICAgICAgICB0aGlzLmZsb29yICAgPSBmbG9vcjtcclxuICAgICAgICB0aGlzLnRpdGxlICAgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnNpemUgICAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludChzaXplX3ggLSAxLCBzaXplX3kgLSAxLCBzaXplX3ogLSAxKSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICB0aGlzLm9ianMgICAgPSBbXSBhcyBJX0V4aXN0W107XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdChcclxuICAgICAgICB7bWF6ZV9pZCwgZmxvb3IsIHRpdGxlLCBzaXplX3gsIHNpemVfeSwgc2l6ZV96fToge1xyXG4gICAgICAgICAgICBtYXplX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGZsb29yOiAgIG51bWJlcixcclxuICAgICAgICAgICAgdGl0bGU6ICAgc3RyaW5nLFxyXG4gICAgICAgICAgICBzaXplX3g6ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfeTogIG51bWJlcixcclxuICAgICAgICAgICAgc2l6ZV96OiAgbnVtYmVyLFxyXG4gICAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubWF6ZV9pZCA9IG1hemVfaWQ7XHJcbiAgICAgICAgdGhpcy5mbG9vciAgID0gZmxvb3I7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoc2l6ZV94IC0gMSwgc2l6ZV95IC0gMSwgc2l6ZV96IC0gMSkpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0gW10gYXMgSV9FeGlzdFtdO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gbmV3IENfTWF6ZUNlbGwodGhpcywga2luZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXNrKFlOOiBib29sZWFuKTogYm9vbGVhbltdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hc2tzOiBib29sZWFuW11bXVtdID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgbWFza3Nbel0gPSBBcnJheShzaXplX3kpIGFzIGJvb2xlYW5bXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtYXNrc1t6XVt5XSAgPSBBcnJheShzaXplX3gpIGFzIGJvb2xlYW5bXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXNrcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g44Oh44Kk44K65YaF44Gu44Kq44OW44K444Kn44Kv44OI44KE44Oi44Oz44K544K/44O8562J44Gu6YWN572uXHJcbiAgICBwdWJsaWMgYWRkX29iaihvYmo6IElfRXhpc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianMucHVzaChvYmopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV9vYmoob2JqOiBJX0V4aXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYmpzID0gdGhpcy5vYmpzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQoKSAhPT0gb2JqLmlkKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX0V4aXN0fG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldF9vYmoobmV3IENfUG9pbnQoeCwgeSwgeikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmoocDogQ19Qb2ludCk6IElfRXhpc3R8bnVsbCB7XHJcbiAgICAgICAgdmFyIGxheWVyID0gLTE7XHJcbiAgICAgICAgdmFyIG9iajogSV9FeGlzdHxudWxsICAgPSBudWxsO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ud2l0aGluKHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5sYXllcigpID4gbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGl0ZW0ubGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlYW3jgYzmnaXjgZ/jg53jgqTjg7Pjg4jjgYzmnKrouI/lnLDjgaDjgaPjgZ/jgonjgZ/jgaDjga7luorjgavlpInjgYjjgotcclxuICAgIHB1YmxpYyBjaGFuZ2VfdW5leHBfdG9fZmxvb3IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2NlbGwoZ190ZWFtLmdldF9wKCkpID09IFRfTXpLaW5kLlVuZXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGwoZ190ZWFtLmdldF9wKCksIFRfTXpLaW5kLkZsb29yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMkTjg57jg4Pjg5fjga7jg57jgrnjgq/lpJbjgZfplqLpgKNcclxuICAgIHB1YmxpYyBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDnj77lnKjlnLDjgajnnJ/mqKrjga/oh6rli5XnmoTjgavopovjgYjjgotcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKDAsICAwKSk7XHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoMCwgIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVwdGggICA9ICA1OyAvLyAyROODnuODg+ODl+eUqOOBruWlpeihjOOBjemZkOeVjFxyXG5cclxuICAgICAgICAvLyDliY3mlrnjga7opovpgJrjgZfjgpLjg4Hjgqfjg4Pjgq/jgZfjgarjgYzjgonopovjgYjjgovjgajjgZPjgo3jga/op6PmlL7jgZnjgotcclxuICAgICAgICBmb3IgKHZhciBkID0gMTsgZCA8IGRlcHRoOyBkKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbnRfcG9zID0gZ190ZWFtLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsICAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubWFza3NbY2xyX3Bvcy56XVtjbHJfcG9zLnldW2Nscl9wb3MueF0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbW92YWJsZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdldF9jZWxsKHApKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBwdWJsaWMgZ2V0X3hfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3goKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3lfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3koKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3pfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3ooKTt9XHJcbiAgICBwdWJsaWMgZ2V0X21hemVfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8bnVsbCB7IC8vIOOBn+OBtuOCk+imgeOCieOBquOBhOODoeOCveODg+ODiVxyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0uZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9jZWxsIChwOiBDX1BvaW50LCBrOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLnNldChrKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fbW92ZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX1VEKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc19tb3ZhYmxlKHApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX2xldHRlcihwOiBDX1BvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS50b19sZXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19zdHJpbmcoZmxvb3I6IG51bWJlciA9IDApOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG4gICAgICAgIHZhciByZXRfc3RyOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZ2V0X29ial94eXooeCwgeSwgZmxvb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFnX2RlYnVnX21vZGUgJiYgdGhpcy5tYXNrc1tmbG9vcl1beV1beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9ICfilqAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gdGhpcy5jZWxsc1tmbG9vcl1beV1beF0udG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBvYmoudG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldF9zdHIgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldF9zdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLmNlbGxzW3pdW3ldW3hdLmVuY29kZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF6ZV9zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMubWFza3Nbel1beV1beF0gPyAnMScgOiAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXNrX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgIHRoaXMubWF6ZV9pZCxcclxuICAgICAgICAgICAgZmxvb3I6ICB0aGlzLmZsb29yLFxyXG4gICAgICAgICAgICB0aXRsZTogIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIHNpemVfeDogdGhpcy5zaXplLnNpemVfeCgpLFxyXG4gICAgICAgICAgICBzaXplX3k6IHRoaXMuc2l6ZS5zaXplX3koKSxcclxuICAgICAgICAgICAgc2l6ZV96OiB0aGlzLnNpemUuc2l6ZV96KCksXHJcbiAgICAgICAgICAgIG1hemU6ICAgbWF6ZV9zdHIsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgbWFza19zdHIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX01hemV8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1hemVfaWQgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLmZsb29yICE9PSB1bmRlZmluZWQpIHRoaXMuZmxvb3IgICA9IGEuZmxvb3I7XHJcbiAgICAgICAgaWYgKGEudGl0bGUgIT09IHVuZGVmaW5lZCkgdGhpcy50aXRsZSAgID0gYS50aXRsZTtcclxuICAgICAgICBpZiAoYS5vYmpzICAhPT0gdW5kZWZpbmVkKSB0aGlzLm9ianMgICAgPSBhLm9ianMgYXMgSV9FeGlzdFtdO1xyXG5cclxuICAgICAgICBpZiAoYS5zaXplX3ggIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeSAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV96ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaXplICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoYS5zaXplX3ggLSAxLCBhLnNpemVfeSAtIDEsIGEuc2l6ZV96IC0gMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoYS5tYXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XS5zZXQoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWF6ZS5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oc2l6ZV96LCB6X2FycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKHNpemVfeSwgeV9hcnJheS5sZW5ndGgpOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oc2l6ZV94LCB4X2FycmF5Lmxlbmd0aCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdLmRlY29kZSh4X2FycmF5W3hdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hc2suc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKHNpemVfeiwgel9hcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihzaXplX3ksIHlfYXJyYXkubGVuZ3RoKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKHNpemVfeCwgeF9hcnJheS5sZW5ndGgpOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhfYXJyYXlbeF0gIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gIF9taW4oYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhIDw9IGIpID8gYSA6IGI7XHJcbn1cclxuZnVuY3Rpb24gIF9tYXgoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhID49IGIpID8gYSA6IGI7XHJcbn1cclxuXHJcbiIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZVZpZXdNZXNzYWdlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgIG1lIDogQ19NYXplVmlld01lc3NhZ2U7XHJcbiAgICBwcm90ZWN0ZWQgcCAgOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgQ19NYXplVmlld01lc3NhZ2UubWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYXplX3ZpZXdfbWVzc2FnZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIENfTWF6ZVZpZXdNZXNzYWdlLm1lLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KCk6IENfTWF6ZVZpZXdNZXNzYWdlICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1lICE9PSBcIm9iamVjdFwiIHx8ICEodGhpcy5tZSBpbnN0YW5jZW9mIENfTWF6ZVZpZXdNZXNzYWdlKSkgXHJcbiAgICAgICAgICAgIHRoaXMubWUgPSBuZXcgQ19NYXplVmlld01lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkaXNwbGF5X21lc3NhZ2UobWVzOiBzdHJpbmcsIGZyX2NvbG9yID0gJ2luaGVyaXQnLCBiZ19jb2xvcjogc3RyaW5nID0gJ2luaGVyaXQnKSB7XHJcbiAgICAgICAgdGhpcy5wLnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsICAgICAgICAgICAgZnJfY29sb3IpO1xyXG4gICAgICAgIHRoaXMucC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGJnX2NvbG9yKTtcclxuICAgICAgICB0aGlzLnAuaW5uZXJIVE1MID0gbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcl9tZXNzYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKCfjgIAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBub3JtYWxfbWVzc2FnZShtZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKG1lcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm90aWNlX21lc3NhZ2UobWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZShtZXMsICcjMDA2NjAwJywgJyNjY2ZmY2MnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3YXJuaW5nX21lc3NhZ2UobWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZShtZXMsICcjZmZmZmZmJywgJyNmZjAwMDAnKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdHlwZSBKU09OX1BvaW50ID0ge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyLFxyXG4gICAgejogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50IHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHo6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyfENfUG9pbnR8SlNPTl9Qb2ludCwgeT86IG51bWJlciwgej86IG51bWJlcikge1xyXG4vLyAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggaW5zdGFuY2VvZiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHgueDtcclxuICAgICAgICAgICAgdGhpcy55ID0geC55O1xyXG4gICAgICAgICAgICB0aGlzLnogPSB4Lno7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gLTI7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IC0yO1xyXG4gICAgICAgICAgICB0aGlzLnogPSAtMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHAueCA9PSB0aGlzLnggJiYgcC55ID09IHRoaXMueSAmJiBwLnogPT0gdGhpcy56KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9Qb2ludCk6IENfUG9pbnQge1xyXG4gICAgICAgIHRoaXMueCA9IGEueDsgdGhpcy55ID0gYS55OyB0aGlzLnogPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDX1BvaW50IH0gZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfUmFuZ2Uge1xyXG4gICAgcHJvdGVjdGVkIG1pbjogQ19Qb2ludDtcclxuICAgIHByb3RlY3RlZCBtYXg6IENfUG9pbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KSB7XHJcbiAgICAgICAgY29uc3QgbWluX3ggPSBfbWluKHAxLngsIHAyLngpO1xyXG4gICAgICAgIGNvbnN0IG1heF94ID0gX21heChwMS54LCBwMi54KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3kgPSBfbWluKHAxLnksIHAyLnkpO1xyXG4gICAgICAgIGNvbnN0IG1heF95ID0gX21heChwMS55LCBwMi55KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3ogPSBfbWluKHAxLnosIHAyLnopO1xyXG4gICAgICAgIGNvbnN0IG1heF96ID0gX21heChwMS56LCBwMi56KTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQobWluX3gsIG1pbl95LCBtaW5feik7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQobWF4X3gsIG1heF95LCBtYXhfeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKGE6IENfUmFuZ2V8Q19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19Qb2ludCkgeyBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19Qb2ludDtcclxuICAgICAgICAgICAgaWYgKCBwLnggPCB0aGlzLm1pbi54IHx8IHAueCA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC55IDwgdGhpcy5taW4ueSB8fCBwLnkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueiA8IHRoaXMubWluLnogfHwgcC56ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19SYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1JhbmdlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3goKSA8IHRoaXMubWluLnggfHwgcC5tYXhfeCgpID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl95KCkgPCB0aGlzLm1pbi55IHx8IHAubWF4X3koKSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feigpIDwgdGhpcy5taW4ueiB8fCBwLm1heF96KCkgPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1pbl94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi54O31cclxuICAgIHB1YmxpYyBtYXhfeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueDt9XHJcbiAgICBwdWJsaWMgbWluX3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLnk7fVxyXG4gICAgcHVibGljIG1heF95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC55O31cclxuICAgIHB1YmxpYyBtaW5feigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4uejt9XHJcbiAgICBwdWJsaWMgbWF4X3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lno7fVxyXG4gICAgcHVibGljIHNpemVfeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueCArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueSArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4ueiArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGRvX2FsbF94eXooZm46ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbih4LCB5LCB4KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uICBfbWluKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSA8PSBiKSA/IGEgOiBiO1xyXG59XHJcbmZ1bmN0aW9uICBfbWF4KGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSA+PSBiKSA/IGEgOiBiO1xyXG59XHJcbiIsImltcG9ydCB7IElfRXhpc3QsIElfSGFzSG9wZSwgSV9Ib3BlQWN0aW9uIH0gZnJvbSBcIi4vSV9FdmVudE1hcFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19XYWxrZXIgfSAgICBmcm9tIFwiLi9DX1dhbGtlclwiO1xyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9IGZyb20gXCIuL1RfRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuXHJcbnR5cGUgX19pbml0X2FyZyA9IHtcclxuICAgIGlkPzpudW1iZXIsIFxyXG4gICAgbmFtZT86IHN0cmluZywgXHJcbiAgICBoZXJvZXM/OiBDX0hlcm9bXSwgXHJcbiAgICBwPzogQ19Qb2ludCwgXHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbiAgICBkPzogVF9EaXJlY3Rpb24sXHJcbiAgICBtb3Rpb24/OiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEpTT05fVGVhbSA9IHtcclxuICAgIGlkPzpudW1iZXIsIFxyXG4gICAgbmFtZT86IHN0cmluZywgXHJcbiAgICBwb2ludD86IHt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyfSwgXHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbiAgICBkaXJlY3Q/OiB7ZDogbnVtYmVyfSxcclxuICAgIGhlcm9lcz86IEpTT05fSGVyb1tdLCBcclxuICAgIG1vdGlvbj86IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3RlYW1faW5mbyhhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlRlYW0gSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKGEucG9pbnQ/LnggID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLnBvaW50Py55ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5wb2ludD8ueiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKGEuZGlyZWN0Py5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4vLyAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgYWxlcnRfaGVyb2VzX2luZm8oYS5oZXJvZXMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbSBpbXBsZW1lbnRzIElfRXhpc3Qge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCB3YWxrZXI6ICAgQ19XYWxrZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbGF5ZXI6IG51bWJlciA9IDk5O1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICBDX0hlcm9bXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaG9wZV9tb3Rpb246IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IF9faW5pdF9hcmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5teV9pZCAgID0gYT8uaWQgPz8gMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBhPy5uYW1lID8/ICdOZW8gVGVhbT8nO1xyXG4gICAgICAgIHRoaXMud2Fsa2VyID0gbmV3IENfV2Fsa2VyKCk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmhvcGVfbW90aW9uID0gYT8ubW90aW9uID8/ICdOT1AnOyAgICBcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChhKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXQoYTogX19pbml0X2FyZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICA9IGEuaWQgICA/PyB0aGlzLm15X2lkXHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gYS5uYW1lID8/IHRoaXMubXlfbmFtZTtcclxuICAgICAgICBpZiAoYS5wICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF9wKGEucCk7XHJcbiAgICAgICAgaWYgKGEueCAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfeChhLngpO1xyXG4gICAgICAgIGlmIChhLnkgIT09IHVuZGVmaW5lZCkgdGhpcy53YWxrZXIuc2V0X3goYS55KTtcclxuICAgICAgICBpZiAoYS56ICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF94KGEueik7XHJcbiAgICAgICAgaWYgKGEuZCAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfZGlyKGEuZCk7XHJcbiAgICAgICAgdGhpcy5ob3BlX21vdGlvbiA9IGEubW90aW9uID8/IHRoaXMuaG9wZV9tb3Rpb247IFxyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kX2hlcm8oaGVybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBfX2luaXRfYXJnKSB7XHJcbiAgICAgICAgdGhpcy5fX2luaXQoYXJnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnVGVhbV8nICsgdGhpcy5teV9pZC50b1N0cmluZygxNikucGFkU3RhcnQoNSwgJzAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhlcmUgPSB0aGlzLndhbGtlci5nZXRfcCgpO1xyXG4gICAgICAgIHJldHVybiBoZXJlLndpdGhpbihwKTsgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpOiB2b2lkIHt0aGlzLm15X2xheWVyID0gbGF5ZXI7fVxyXG4gICAgcHVibGljIHRvX2xldHRlcigpOiBzdHJpbmd8bnVsbCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLndhbGtlci5nZXRfZGlyKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiByZXR1cm4gJ+KGkSc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcmV0dXJuICfihpInO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHJldHVybiAn4oaTJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiByZXR1cm4gJ+KGkCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn8J+MgCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfcCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wKHA6Q19Qb2ludCwgZD86IFRfRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3AocCwgZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3ooKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X3ooKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfeih6OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoeiA8IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfeih6KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZGlyKCk6IFRfRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X2RpcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kaXIoZDogVF9EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfZGlyKGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfYXJvdW5kKGZyb250OiBudW1iZXIsIHJpZ2h0Om51bWJlciwgdXA6IG51bWJlciA9IDApOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X2Fyb3VuZChmcm9udCwgcmlnaHQsIHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaG9wZV9wX2Z3ZCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wX2Z3ZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMud2Fsa2VyLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcF9iYWsoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLndhbGtlci5zZXRfcF9iYWsoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fcigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy53YWxrZXIudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMud2Fsa2VyLnR1cm5fbCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBob3BlX3BfdXAoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVXBcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3BfdXAoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF91cCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9kb3duKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIkRvd25cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF9wX3VwKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbW92ZV9wX2Rvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3BfZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc05HKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMucHVzaChoZXJvKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHRoaXMuaGVyb2VzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gaGVybyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLndhbGtlci5nZXRfeCgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLndhbGtlci5nZXRfeSgpO1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLndhbGtlci5nZXRfeigpO1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLndhbGtlci5nZXRfZGlyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgcG9pbnQ6ICAge3g6IHgsIHk6IHksIHo6IHp9LFxyXG4gICAgICAgICAgICBkaXJlY3Q6ICB7ZDogZH0sXHJcbiAgICAgICAgICAgIGhlcm9lczogIENfSGVyby5lbmNvZGVfaGVyb2VzKHRoaXMuaGVyb2VzKSxcclxuICAgICAgICAgICAgbW90aW9uOiAgdGhpcy5ob3BlX21vdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogQ19UZWFtIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgIHRoaXMubXlfaWQgICAgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgIT09IHVuZGVmaW5lZCkgICB0aGlzLm15X25hbWUgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLm1vdGlvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmhvcGVfbW90aW9uID0gYS5tb3Rpb247XHJcblxyXG4gICAgICAgIGlmIChhLnBvaW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGEucG9pbnQgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrZXIuZGVjb2RlKGEucG9pbnQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKGEueCAhPT0gdW5kZWZpbmVkICYmIGEueSAhPT0gdW5kZWZpbmVkICYmIGEueiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2VyLmRlY29kZSh7eDogYS54LCB5OiBhLnksIHo6IGEuen0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEuZGlyZWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGEucG9pbnQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2VyLmRlY29kZShhLmRpcmVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IENfSGVyby5kZWNvZGVfaGVyb2VzKGEuaGVyb2VzKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCB0eXBlIFRfQXR0ciA9IHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX1VybE9wdCB7XHJcbiAgICBwcm90ZWN0ZWQgdjogVF9BdHRyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHM/OiAgc3RyaW5nKTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0PzogIFRfQXR0cik7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnYgPSB7fSBhcyBUX0F0dHI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2Zyb21fc3RyaW5nKGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy52ID0gYSBhcyBUX0F0dHI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52ID0ge30gYXMgVF9BdHRyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfa2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3Qga2V5X2xpc3Q6IHN0cmluZ1tdID0gbmV3IEFycmF5IGFzIHN0cmluZ1tdO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAga2V5X2xpc3QucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5X2xpc3Q7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgaWYgICh0eXBlb2YgdGhpcy52W2tleV0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZba2V5XSBhcyBzdHJpbmc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChzdHI6IHN0cmluZyk6ICB2b2lkO1xyXG4gICAgcHVibGljIHNldChhdHI6IFRfQXR0cik6ICB2b2lkO1xyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsPzogc3RyaW5nKTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbD86IG51bWJlcik6IHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KHVrbjogYW55LCAgICB2YWw/OiBzdHJpbmd8bnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1a24gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkX2Zyb21fc3RyaW5nKHVrbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudlt1a25dID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVrbiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cjogVF9BdHRyID0gdWtuIGFzIFRfQXR0cjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudltpdGVtXSA9IGF0dHJbaXRlbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudltrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYgPSB7fSBhcyBUX0F0dHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fc3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbGVuOiBudW1iZXIgPSAgT2JqZWN0LmtleXModGhpcy52KS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA8IDEpICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgdmFyIHN0cl9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgc3RyX2FycmF5LnB1c2goa2V5ICsgXCI9XCIgKyB0aGlzLnZba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyX2FycmF5LmpvaW4oXCImXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX0Zvcm1EYXRhKCk6IEZvcm1EYXRhfG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlbjogbnVtYmVyID0gIE9iamVjdC5rZXlzKHRoaXMudikubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPCAxKSAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZ3xudW1iZXIgPSB0aGlzLnZba2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0X2Zyb21fc3RyaW5nKHM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmFkZF9mcm9tX3N0cmluZyhzKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhZGRfZnJvbV9zdHJpbmcoczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gcy5yZXBsYWNlKC9eKFxcPz8pKC4qKSQvLCAnJDInKTtcclxuICAgICAgICBjb25zdCBzdHJfYXJyYXk6IHN0cmluZ1tdID0gc3RyLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICBzdHJfYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlfdmFsdWUgPSBpdGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKGtleV92YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZba2V5X3ZhbHVlWzBdXSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W2tleV92YWx1ZVswXV0gPSBrZXlfdmFsdWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUX0RpcmVjdGlvbiB9IGZyb20gXCIuL1RfRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5cclxudHlwZSBfX0pTT05fYXJnID0ge1xyXG4gICAgeD86IG51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICB6PzogbnVtYmVyLFxyXG4gICAgZD86IG51bWJlcixcclxufVxyXG5leHBvcnQgY2xhc3MgQ19XYWxrZXIge1xyXG4gICAgcHJvdGVjdGVkIHA6IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgZDogVF9EaXJlY3Rpb247XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnAgID0gbmV3IENfUG9pbnQoKTtcclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5OO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kaXIoKTogVF9EaXJlY3Rpb24ge3JldHVybiB0aGlzLmR9XHJcbiAgICBwdWJsaWMgc2V0X2RpcihkOiBUX0RpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3AoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3AocDogQ19Qb2ludCwgZD86IFRfRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLmQgPSBkID8/IHRoaXMuZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfeCgpOiBudW1iZXIge3JldHVybiB0aGlzLnAueH1cclxuICAgIHB1YmxpYyBnZXRfeSgpOiBudW1iZXIge3JldHVybiB0aGlzLnAueX1cclxuICAgIHB1YmxpYyBnZXRfeigpOiBudW1iZXIge3JldHVybiB0aGlzLnAuen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3goeDogbnVtYmVyKTogdm9pZCB7dGhpcy5wLnggPSB4fVxyXG4gICAgcHVibGljIHNldF95KHk6IG51bWJlcik6IHZvaWQge3RoaXMucC55ID0geX1cclxuICAgIHB1YmxpYyBzZXRfeih6OiBudW1iZXIpOiB2b2lkIHt0aGlzLnAueiA9IHp9XHJcblxyXG4gICAgcHVibGljIGdldF9wX2Z3ZCgpOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZndkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3AodGhpcy5nZXRfcF9md2QoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfYmFrKCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfYmFrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3AodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfdXAoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICAgICAgcC56LS07XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfdXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcCh0aGlzLmdldF9wX3VwKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2Rvd24oKTogQ19Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICAgICAgcC56Kys7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZG93bigpIHtcclxuICAgICAgICB0aGlzLnNldF9wKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0OiBudW1iZXIpOkNfUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludCh0aGlzLnApO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcC55IC09IG9mZnNldDticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiBwLnggKz0gb2Zmc2V0O2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHAueSArPSBvZmZzZXQ7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcC54IC09IG9mZnNldDticmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIpOiBDX1BvaW50IHtcclxuICAgICAgICBjb25zdCBjdXJfcG9zID0gdGhpcy5wO1xyXG4gICAgICAgIGNvbnN0IGN1cl9kaXIgPSB0aGlzLmQ7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMucC54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLnAueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5wLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludCh0YXJnZXRfeCwgdGFyZ2V0X3ksIHRhcmdldF96KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX3IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5kID0gVF9EaXJlY3Rpb24uRTticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogX19KU09OX2FyZyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5wLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucC55LFxyXG4gICAgICAgICAgICB6OiB0aGlzLnAueixcclxuICAgICAgICAgICAgZDogdGhpcy5kIGFzIG51bWJlcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IF9fSlNPTl9hcmcpOiBDX1dhbGtlciB7XHJcbiAgICAgICAgaWYgKGEueCAhPT0gdW5kZWZpbmVkICYmIGEueSAhPT0gdW5kZWZpbmVkICYmIGEueiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucC54ID0gYS54O1xyXG4gICAgICAgICAgICB0aGlzLnAueSA9IGEueTtcclxuICAgICAgICAgICAgdGhpcy5wLnogPSBhLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmQgIT09IHVuZGVmaW5lZCkgdGhpcy5kICAgPSBhLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENfUmFuZ2UgfSBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBUX1dhbGwgPSB7XHJcbiAgICBtaW5feDogbnVtYmVyLFxyXG4gICAgbWF4X3g6IG51bWJlcixcclxuICAgIG1pbl95OiBudW1iZXIsXHJcbiAgICBtYXhfeTogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19XYWxsIHtcclxuICAgIHByb3RlY3RlZCB3OiBUX1dhbGxbXVtdO1xyXG4gICAgcHJvdGVjdGVkIGQ6IG51bWJlclxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlcHRoOiBudW1iZXIgPSA1LCBzaXplOiBDX1JhbmdlKSB7XHJcbiAgICAgICAgaWYgKGRlcHRoIDwgMykgZGVwdGggPSA1O1xyXG4gICAgICAgIGlmIChkZXB0aCAlIDIgIT09IDEpIGRlcHRoKys7ICAvLyDlpYfmlbDjga7jgb/lr77lv5zjgIJcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3g6IG51bWJlciA9IHNpemUubWluX3goKTtcclxuICAgICAgICBjb25zdCBtaW5feTogbnVtYmVyID0gc2l6ZS5taW5feSgpO1xyXG4gICAgICAgIGNvbnN0IG1heF94OiBudW1iZXIgPSBzaXplLm1heF94KCk7XHJcbiAgICAgICAgY29uc3QgbWF4X3k6IG51bWJlciA9IHNpemUubWF4X3koKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNlbnRlcl94OiBudW1iZXIgPSAobWF4X3ggLSBtaW5feCkgLyAyO1xyXG4gICAgXHJcbiAgICAgICAgLy8g5Z+65rqW44Go44Gq44KL5aOBKOS4gOeVqumBoOOBj+OBruWjgSnjga7mraPpnaLjgrXjgqTjgroo5qiq5bmFKeOCkuaxguOCgeOCi1xyXG4gICAgICAgIC8vIOS4gOeVqumBoOOBjyhkZXB0aCAtIDEp44Gu5aOB44Gu5pWw44GMZGVwdGjlgIvjgavjgarjgovjgojjgYbjgavoqr/mlbTjgZnjgotcclxuICAgICAgICBjb25zdCBmcm9udF93YWxsX3NpemVfeDogbnVtYmVyID0gKG1heF94IC0gbWluX3gpIC8gZGVwdGg7XHJcblxyXG4gICAgICAgIC8vIOWfuua6luOBqOOBquOCi+WBtOWjgeOBruOCteOCpOOCuijmqKrluYUp44KS5rGC44KB44KLXHJcbiAgICAgICAgLy8g5LiA55Wq6YGg44GP44Gu5aOBKOS4reWkrinjga7lt6bnq6/jgYvjgolkZXB0aOWAi+OBruWBtOWjgeOCkuWPluOCjOOCi+OCiOOBhuOBq+OCteOCpOOCuuiqv+aVtOOBmeOCi1xyXG4gICAgICAgIGNvbnN0IHNpZGVfd2FsbF9zaXplX3g6ICBudW1iZXIgPSAoY2VudGVyX3ggLSBmcm9udF93YWxsX3NpemVfeCAvIDIpIC8gZGVwdGg7XHJcbiAgICBcclxuICAgICAgICAvLyDlkIRkZXB0aOWIpeOBruato+mdouWjgeOBruaoquW5heOCkuaxguOCgeOCi+OAglxyXG4gICAgICAgIC8vIOioiOeul+OBruWIqeS+v+aAp+OCkuiAg+aFruOBl+OBpuOAgeODj+ODvOODleOCteOCpOOCuuOCkuaxguOCgeOCi1xyXG4gICAgICAgIGNvbnN0IGZyb250X3dhbGxfSF9zaXplX3g6IG51bWJlcltdID0gbmV3IEFycmF5KGRlcHRoICsgMSk7XHJcbiAgICBcclxuICAgICAgICBmcm9udF93YWxsX0hfc2l6ZV94W2RlcHRoXSA9IGZyb250X3dhbGxfc2l6ZV94IC8gMjtcclxuICAgICAgICBmb3IgKHZhciBpID0gZGVwdGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBmcm9udF93YWxsX0hfc2l6ZV94W2ldID0gZnJvbnRfd2FsbF9IX3NpemVfeFtpICsgMV0gKyBzaWRlX3dhbGxfc2l6ZV94O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIOWkqeS6leOBrue4puW5heOBruWil+WIhuOCkuaxguOCgeOCi+OAguWJsuWQiOOBr+mBqeW9k++8iOeske+8iVxyXG4gICAgICAgIGNvbnN0IHNpZGVfd2FsbF9zaXplX1Q6IG51bWJlciA9IChtYXhfeSAtIG1pbl95KSAqIDEuMCAvICgoZGVwdGggKyAxKSAqIDIgKyAxKTtcclxuICAgICAgICAvLyDluorjga7lopfliIbjgpLmsYLjgoHjgovjgIJcclxuICAgICAgICBjb25zdCBzaWRlX3dhbGxfc2l6ZV9COiBudW1iZXIgPSAobWF4X3kgLSBtaW5feSkgKiAxLjAgLyAoKGRlcHRoICsgMSkgKiAyICsgMSk7XHJcbiAgICBcclxuICAgICAgICAvLyDku6XkuIrjga7lgKTjgpLnlKjjgYTjgablkITot53pm6IoZGVwdGgp44Gu5q2j6Z2i5aOB44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICAgICAgLy8gd2FsbOOBruesrOS4gOW8leaVsOOBr+i3nembouOAgeesrOS6jOW8leaVsOOBr+W3puWPs+OBruS9jee9ru+8iOS4gOeVquW3puOBjDDjgIHkuIDnlarlj7PjgYxkZXB0aC0xKVxyXG4gICAgICAgIGNvbnN0IHdhbGw6IFRfV2FsbFtdW10gPSBuZXcgQXJyYXkoZGVwdGggKyAxKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRlcHRoICsgMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHdhbGxbal0gPSBuZXcgQXJyYXkoZGVwdGggKyAxKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBkZXB0aCArIDE7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2tfeCA9IGNlbnRlcl94IC0gZnJvbnRfd2FsbF9IX3NpemVfeFtqXSAqIChkZXB0aCAtIDIgKiBrKTtcclxuICAgICAgICAgICAgICAgIHdhbGxbal1ba10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluX3g6IHdrX3gsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3g6IHdrX3ggICsgZnJvbnRfd2FsbF9IX3NpemVfeFtqXSAqIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluX3k6IG1pbl95ICsgc2lkZV93YWxsX3NpemVfVCAqIGosXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3k6IG1heF95IC0gc2lkZV93YWxsX3NpemVfQiAqIGosXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy53ID0gd2FsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldChkZXB0aDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IFRfV2FsbCB7XHJcbiAgICAgICAgY29uc3QgSF9kZXB0ID0gKHRoaXMuZCAtIDEpIC8gMjtcclxuICAgICAgICByZXR1cm4gdGhpcy53W2RlcHRoXVtIX2RlcHQgKyBvZmZzZXRdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDX1VybE9wdCB9IGZyb20gXCIuL0NfVXJsT3B0XCI7XHJcbmltcG9ydCB7IGdfbXZtIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVF9hbmRfZ2V0X0pTT04oXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICBvcHQ6IENfVXJsT3B0LCBcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGZvcm1fZGF0YSA9IG9wdC50b19Gb3JtRGF0YSgpO1xyXG4gICAgaWYgKGZvcm1fZGF0YSA9PT0gbnVsbCkgcmV0dXJuICcnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1fZGF0YVxyXG4gICAgICAgIH0pO1xyXG4vKioqXHJcbiAgICAgICAgcmVzLnRleHQoKS50aGVuKHR4dD0+e1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDtpIDwgKHR4dC5sZW5ndGggPCAxMDAwP3R4dC5sZW5ndGg6MTAwMCk7IGkgKz0gMjUwKSBcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHR4dC5zdWJzdHJpbmcoaSwgaSsyNTApKTtcclxuICAgICAgICB9KVxyXG4qKiovXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZ19tdm0ud2FybmluZ19tZXNzYWdlKCfpgJrkv6Hjgqjjg6njg7w6ICcgKyBlcnIpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQT1NUX2FuZF9tb3ZlX3BhZ2UodXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVfZm9ybSh1cmwsIG9wdCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5zdWJtaXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2Zvcm0odXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAgICAgJ2R1bW15X2Zvcm1fJyArIG5ldyBEYXRlKCkudmFsdWVPZigpLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgIHVybCk7XHJcbiAgICBmb3JtLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgb2Ygb3B0LmdldF9rZXlzKCkpIHtcclxuICAgICAgICBjcmVhdGVfaW5wdXQoZm9ybSwga2V5LCBvcHQuZ2V0KGtleSkpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfaW5wdXQoZm9ybTogSFRNTEZvcm1FbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBmaWQ6IHN0cmluZztcclxuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IG51bGwpIHtcclxuICAgICAgICBmaWQgPSBmb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpZCA9ICdkdW1teV9mb3JtJztcclxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBmaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xyXG4gICAgaS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICAgZmlkKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCduYW1lJywgIG5hbWUpO1xyXG4gICAgaS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgaS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGkpO1xyXG5cclxuICAgIHJldHVybiBpO1xyXG59IiwiaW1wb3J0IHsgQ19Qb2ludCB9ICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfUmFuZ2UgfSAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9IGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IFRfV2FsbCwgQ19XYWxsIH0gICBmcm9tIFwiLi9DX1dhbGxcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZHMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlfbWF6ZTJEKCk6IHZvaWQgeyBcclxuICAgIGNvbnN0IHByZTogSFRNTEVsZW1lbnR8bnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYXplX3ZpZXcyRF9wcmUnKTtcclxuICAgIGlmIChwcmUgIT09IG51bGwpIHByZS5pbm5lclRleHQgPSBnX21hemUudG9fc3RyaW5nKGdfdGVhbS5nZXRfcCgpLnopO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRfRHJvd1NldCA9IHtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnR8bnVsbCxcclxuICAgIGNvbjogICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfG51bGwsXHJcbiAgICBkZXB0aDogIG51bWJlcixcclxuICAgIHdhbGw6ICAgQ19XYWxsfG51bGwsXHJcbn1cclxuXHJcbnR5cGUgVF94eSAgID0ge3g6IG51bWJlciwgeTogbnVtYmVyfVxyXG50eXBlIFRfUmVjdCA9IHt0bDogVF94eSwgdHI6IFRfeHksIGJsOiBUX3h5LCBicjogVF94eX07XHJcblxyXG4vLyAzROaPj+WGmeaZguOBq+S9v+eUqOOBmeOCi+Wkp+Wfn+WkieaVsOOBrua6luWCmVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9tYXplM0QoKTogVF9Ecm93U2V0IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYXplX3ZpZXczRF9jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGlmIChjYW52YXMgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydCgnQ2FudmFzIGlzbnQgZm91bmQhIGlkPU1hemVfdmlldzNEX2NhbnZhcycpO1xyXG4gICAgICAgIHJldHVybiB7Y2FudmFzOiBudWxsLCBjb246IG51bGwsIGRlcHRoOiAwLCB3YWxsOiBudWxsfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbjogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChjb24gPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydCgnQnJvd3NlciBkb250IHN1cnBwb3J0IDJEIGdyYXBoaWNzIScpO1xyXG4gICAgICAgIHJldHVybiB7Y2FudmFzOiBudWxsLCBjb246IG51bGwsIGRlcHRoOiAwLCB3YWxsOiBudWxsfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZXB0aCA9IDU7IC8vIOWlh+aVsOOBruOBv+WvvuW/nOOAguODgOODs+OCuOODp+ODs+OBruimi+mAmuOBl+OCkuiJr+OBj+OBmeOCi+OBquOCiSA1IOOBi+OCguOBl+OCjOOBquOBhFxyXG5cclxuICAgIGNvbnN0IHRvcF9wID0gbmV3IENfUG9pbnQoMCwgMCwgMCk7XHJcbiAgICBjb25zdCBidG1fcCA9IG5ldyBDX1BvaW50KGNhbnZhcy5jbGllbnRXaWR0aCAgLSAxLCBjYW52YXMuY2xpZW50SGVpZ2h0IC0gMSwgMCk7XHJcbiAgICBjb25zdCB3YWxsICA9IG5ldyBDX1dhbGwoZGVwdGgsIG5ldyBDX1JhbmdlKHRvcF9wLCBidG1fcCkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge2NhbnZhczogY2FudmFzLCBjb246IGNvbiwgZGVwdGg6IGRlcHRoLCB3YWxsOiB3YWxsfTtcclxufVxyXG5cclxuLy8gM0Tmj4/lhpnmmYLjga7nlLvpnaLliJ3mnJ/ljJbjgILjgajjgorjgYLjgYjjgZrlpKnkupXjgajluorjgpLmj4/jgY9cclxuZnVuY3Rpb24gZHJhd19pbml0X21hemUzRCgpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzLmNhbnZhcyA9PT0gbnVsbCB8fCBnX2RzLmNvbiA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGdfZHMuY29uLmZpbGxTdHlsZSA9ICcjYWFhYWFhJztcclxuICAgIGdfZHMuY29uLmZpbGxSZWN0KFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIGdfZHMuY2FudmFzLmNsaWVudFdpZHRoIC0gMSwgXHJcbiAgICAgICAgZ2V0X2hvbGl6b25fbGluZSgpLFxyXG4gICAgKTtcclxuXHJcbiAgICBnX2RzLmNvbi5maWxsU3R5bGUgPSAnIzY2NjZmZic7XHJcbiAgICBnX2RzLmNvbi5maWxsUmVjdChcclxuICAgICAgICAwLCBcclxuICAgICAgICBnZXRfaG9saXpvbl9saW5lKCksIFxyXG4gICAgICAgIGdfZHMuY2FudmFzLmNsaWVudFdpZHRoICAgLSAxLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy5jbGllbnRIZWlnaHQgIC0gMSxcclxuICAgICk7XHJcblxyXG4gICAgZHJvd19mbG9vcl9saW5lKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldF9ob2xpem9uX2xpbmUoKTogbnVtYmVyIHtcclxuICAgIGlmIChnX2RzLndhbGwgPT09IG51bGwpIHJldHVybiAtMTtcclxuICAgIHJldHVybiBnX2RzLndhbGwuZ2V0KGdfZHMuZGVwdGgsIDApLm1heF95O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zsb29yX2xpbmUoKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jYW52YXMgPT09IG51bGwgfHwgZ19kcy5jb24gPT09IG51bGwgfHwgZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gICA9IGdfZHMuY29uO1xyXG4gICAgY29uc3Qgd2FsbCAgPSBnX2RzLndhbGw7XHJcbiAgICBjb25zdCBkZXB0aCA9IGdfZHMuZGVwdGg7XHJcbiAgICBjb25zdCBIX2RlcHQgPSAoZGVwdGggLSAxKSAvIDI7XHJcblxyXG4gICAgY29uc3QgbGVmdF94ICA9IDA7XHJcbiAgICBjb25zdCByaWdodF94ID0gZ19kcy5jYW52YXMuY2xpZW50V2lkdGggIC0gMTtcclxuICAgIGNvbnN0IGZyb250X3kgPSBnX2RzLmNhbnZhcy5jbGllbnRIZWlnaHQgLSAxO1xyXG4gICAgY29uc3QgYmFja195ICA9IGdldF9ob2xpem9uX2xpbmUoKTtcclxuXHJcbiAgICBjb24uc3Ryb2tlU3R5bGUgPSAnIzk5OTlmZic7XHJcbiAgICBjb24ubGluZVdpZHRoICAgPSAxO1xyXG5cclxuICAgIC8vIOaoque3mijnlLvpnaLjgavlr77jgZfjgabmsLTlubMp44KS5byV44GPXHJcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGRlcHRoICsgMTsgeSsrKSB7XHJcbiAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbi5tb3ZlVG8obGVmdF94ICwgd2FsbC5nZXQoeSwgMCkubWF4X3kpO1xyXG4gICAgICAgIGNvbi5saW5lVG8ocmlnaHRfeCwgd2FsbC5nZXQoeSwgMCkubWF4X3kpO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDnuKbnt5rjgpLlvJXjgY9cclxuICAgIGZvciAodmFyIHggPSAtSF9kZXB0OyB4IDwgSF9kZXB0ICsgMTsgeCsrKSB7XHJcbiAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbi5tb3ZlVG8od2FsbC5nZXQoMCwgICAgIHgpLm1pbl94LCBmcm9udF95KTtcclxuICAgICAgICBjb24ubGluZVRvKHdhbGwuZ2V0KGRlcHRoLCB4KS5taW5feCwgYmFja195ICk7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheV9tYXplM0QoKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jYW52YXMgPT09IG51bGwgfHwgZ19kcy5jb24gPT09IG51bGwgfHwgZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZHJhd19pbml0X21hemUzRCgpO1xyXG4gICAgZGlzcGxleV9tYXNlM0RfZGlyZWN0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgZGVwdGggICA9ICBnX2RzLmRlcHRoO1xyXG4gICAgY29uc3QgSF9kZXB0aCA9IChkZXB0aCAtIDEpIC8gMjtcclxuICAgIGZvciAodmFyIGogPSBnX2RzLmRlcHRoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAvLyDlj7PlgbTjgYzopovjgYjjgabjgYTjgovlo4Hjga7mj4/lhpkgKOW3puWBtOOBi+OCieaPj+WGmSlcclxuICAgICAgICBmb3IgKHZhciBrID0gLUhfZGVwdGg7IGsgPCAwOyBrKyspIHtcclxuICAgICAgICAgICAgc3dpdGNoIChnX21hemUuZ2V0X2NlbGwoZ190ZWFtLmdldF9hcm91bmQoaiwgaywgMCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfcmlnaHRfc2lkZV9zdG9uZShqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfZmxvb3JfdW5leHAoaiAsayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19yaWdodF9zaWRlX3N0YWlycyhqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOOAgOW3puWBtOOBjOimi+OBiOOBpuOBhOOCi+WjgeOBruaPj+WGmSAo5Y+z5YG044GL44KJ5o+P5YaZKVxyXG4gICAgICAgIGZvciAodmFyIGsgPSBIX2RlcHRoOyBrID4gMDsgay0tKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ19tYXplLmdldF9jZWxsKGdfdGVhbS5nZXRfYXJvdW5kKGosIGssIDApKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2xlZnRfc2lkZV9zdG9uZShqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfZmxvb3JfdW5leHAoaiAsayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19sZWZ0X3NpZGVfc3RhaXJzKGosIGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfZmxvb3IoaiAsayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q2j6Z2i44Gu5aOB44Gu5o+P5YaZXHJcbiAgICAgICAgc3dpdGNoIChnX21hemUuZ2V0X2NlbGwoZ190ZWFtLmdldF9hcm91bmQoaiwgMCwgMCkpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6XHJcbiAgICAgICAgICAgICAgICBkcm93X2Zyb250X3N0b25lKGosIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IFxyXG4gICAgICAgICAgICAgICAgZHJvd19mbG9vcl91bmV4cChqICwwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgZHJvd19mcm9udF9zdGFpcnMoaiwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBkcm93X2Zsb29yKGogLDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zsb29yX3VuZXhwKGQ6IG51bWJlciwgdzpudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZmxvb3IoZCwgdywgJyM2NmZmZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mcm9udF9zdG9uZShkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mcm9udChkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19sZWZ0X3NpZGVfc3RvbmUoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfbGVmdF9zaWRlKGQsIHcsICcjMDBmZjAwJywgJyMwMDAwZmYnKTtcclxuICAgIGRyb3dfZnJvbnQgICAgKGQsIHcsICcjMDBmZjAwJywgJyMwMDAwZmYnKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X3JpZ2h0X3NpZGVfc3RvbmUoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfcmlnaHRfc2lkZShkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbiAgICBkcm93X2Zyb250ICAgICAoZCwgdywgJyMwMGZmMDAnLCAnIzAwMDBmZicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zyb250X3N0YWlycyhkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mbG9vciAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfY2VpbGluZyhkLCB3LCAnI2ZmZmZjYycsICcjZmZmZjAwJyk7XHJcbiAgICBkcm93X2Zyb250ICAoZCwgdywgIG51bGwsICAgICAnI2ZmZmYwMCcpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfbGVmdF9zaWRlX3N0YWlycyhkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mbG9vciAgICAoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19jZWlsaW5nICAoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19sZWZ0X3NpZGUoZCwgdywgIG51bGwsICAgICAnI2ZmZmYwMCcpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBkcm93X3JpZ2h0X3NpZGVfc3RhaXJzKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X2Zsb29yICAgICAoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19jZWlsaW5nICAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfcmlnaHRfc2lkZShkLCB3LCAgbnVsbCwgICAgICcjZmZmZjAwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3dfZmxvb3IoXHJcbiAgICAgICAgICAgIGQ6ICAgIG51bWJlciwgXHJcbiAgICAgICAgICAgIHc6ICAgIG51bWJlciwgXHJcbiAgICAgICAgICAgIGZpbGw6IHN0cmluZyA9ICcjNjY2NmZmJywgXHJcbiAgICAgICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgICAgICAgICApOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCByZWN0X2Zyb250ID0gZ19kcy53YWxsLmdldChkLCAgICAgdyk7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5tYXhfeX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1heF95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfYmFjayAubWF4X3gsIHk6IHJlY3RfYmFjayAubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9iYWNrIC5taW5feCwgeTogcmVjdF9iYWNrIC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2NlaWxpbmcoXHJcbiAgICAgICAgICAgIGQ6IG51bWJlciwgXHJcbiAgICAgICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgICAgIGZpbGw6IHN0cmluZyA9ICcjYWFhYWFhJywgXHJcbiAgICAgICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdF9mcm9udCA9IGdfZHMud2FsbC5nZXQoZCwgICAgIHcpO1xyXG4gICAgY29uc3QgcmVjdF9iYWNrICA9IGdfZHMud2FsbC5nZXQoZCArIDEsIHcpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgYnI6IHt4OiByZWN0X2JhY2sgLm1heF94LCB5OiByZWN0X2JhY2sgLm1pbl95fSxcclxuICAgICAgICBibDoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWluX3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19mcm9udChcclxuICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nfG51bGwgPSAnIzAwZmYwMCcsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZ3xudWxsID0gJyMwMDAwZmYnXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIGlmIChnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IGdfZHMuY29uO1xyXG4gICAgY29uc3QgcmVjdF9mcm9udCA9IGdfZHMud2FsbC5nZXQoZCwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfZnJvbnQubWF4X3gsIHk6IHJlY3RfZnJvbnQubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2xlZnRfc2lkZShcclxuICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nfG51bGwgPSAnIzAwY2MwMCcsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZ3xudWxsID0gJyMwMDAwZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsICAgICB3KTtcclxuICAgIGNvbnN0IHJlY3RfYmFjayAgPSBnX2RzLndhbGwuZ2V0KGQgKyAxLCB3KTtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb250Lm1pbl94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWluX3l9LFxyXG4gICAgICAgIGJyOiB7eDogcmVjdF9iYWNrIC5taW5feCwgeTogcmVjdF9iYWNrIC5tYXhfeX0sXHJcbiAgICAgICAgYmw6IHt4OiByZWN0X2Zyb250Lm1pbl94LCB5OiByZWN0X2Zyb250Lm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfcmlnaHRfc2lkZShcclxuICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nfG51bGwgPSAnIzAwY2MwMCcsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZ3xudWxsID0gJyMwMDAwZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsICAgICB3KTtcclxuICAgIGNvbnN0IHJlY3RfYmFjayAgPSBnX2RzLndhbGwuZ2V0KGQgKyAxLCB3KTtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfYmFjayAubWF4X3gsIHk6IHJlY3RfYmFjayAubWluX3l9LFxyXG4gICAgICAgIGJyOiB7eDogcmVjdF9iYWNrIC5tYXhfeCwgeTogcmVjdF9iYWNrIC5tYXhfeX0sXHJcbiAgICAgICAgYmw6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzLmNvbiA9PT0gbnVsbCB8fCBnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IGdfZHMuY29uO1xyXG5cclxuICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgIGNvbi5tb3ZlVG8oci50bC54LCByLnRsLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuYnIueCwgci5ici55KTtcclxuICAgIGNvbi5saW5lVG8oci5ibC54LCByLmJsLnkpO1xyXG4gICAgY29uLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmIChmaWxsICE9IG51bGwpIHtcclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBmaWxsO1xyXG4gICAgICAgIGNvbi5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobGluZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9IGxpbmU7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxleV9tYXNlM0RfZGlyZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcF9kaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3M0RfZGlyZWN0aW9uX2luZm8nKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIGlmIChwX2RpciA9PT0gbnVsbCkge1xyXG4gICAgICAgIGFsZXJ0KCdQIGVsZW1lbnQgaXNudCBmb3VuZCEgaWQ9TWF6ZV92aWV3M0RfZGlyZWN0aW9uX2luZm8nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgICBzd2l0Y2ggKGdfdGVhbS5nZXRfZGlyKCkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9OXCI+44CK5YyX44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX0VcIj7jgIrmnbHjgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fU1wiPuOAiuWNl+OAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9XXCI+44CK6KW/44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9EXCI+44CK6KyO44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHAgPSBnX3RlYW0uZ2V0X3AoKTtcclxuICAgIGNvbnN0IG1lcyA9ICflnLDkuIsgJyArIChwLnogKyAxKSArICfpmo7jgIAnICsgZGlyZWN0aW9uICsgJ+OAgCh4ID0gPHNwYW4gaWQ9XCJkaXJlY3Rpb25fWFwiPicgKyBwLnggKyAnPC9zcGFuPiwgeSA9IDxzcGFuIGlkPVwiZGlyZWN0aW9uX1lcIj4nICsgcC55ICsgJzwvc3Bhbj4pJztcclxuICAgIHBfZGlyLmlubmVySFRNTCA9IG1lcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXplM0RfYmxpbmtfb25fZGlyZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlyX3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uX1gnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBpZiAoZGlyX3ggPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkaXJfeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWScpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHN3aXRjaCAoZ190ZWFtLmdldF9kaXIoKSkge1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgIGRpcl94LmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJyk7XHJcbiAgICAgICAgICAgIGRpcl95LmNsYXNzTGlzdC5hZGQgICAoJ2JsaW5rJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICBkaXJfeC5jbGFzc0xpc3QuYWRkICAgKCdibGluaycpO1xyXG4gICAgICAgICAgICBkaXJfeS5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1hemUzRF9ibGlua19vZmZfZGlyZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlyX3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uX1gnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBpZiAoZGlyX3ggPT09IG51bGwpIHJldHVybjtcclxuICAgIGRpcl94LmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJyk7XHJcblxyXG4gICAgY29uc3QgZGlyX3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uX1knKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBpZiAoZGlyX3kgPT09IG51bGwpIHJldHVybjtcclxuICAgIGRpcl95LmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGFsZXJ0X21hemVfaW5mbyB9ICAgICBmcm9tIFwiLi9DX01hemVcIjsgLy8g6YCa5bi45pmC44Gv44Kz44Oh44Oz44OI44Ki44Km44OI44GV44KM44Gm44GE44KL6Zai5pWwXHJcbmltcG9ydCB7IGFsZXJ0X3RlYW1faW5mbyB9ICAgICBmcm9tIFwiLi9DX1RlYW1cIjsgLy8g6YCa5bi45pmC44Gv44Kz44Oh44Oz44OI44Ki44Km44OI44GV44KM44Gm44GE44KL6Zai5pWwXHJcbmltcG9ydCB7IGFsZXJ0X2hlcm9lc19pbmZvIH0gICBmcm9tIFwiLi9DX0hlcm9cIjsgLy8g6YCa5bi45pmC44Gv44Kz44Oh44Oz44OI44Ki44Km44OI44GV44KM44Gm44GE44KL6Zai5pWwXHJcbmltcG9ydCB7IGluaXRfY29udHJvbGxlcyB9ICAgICBmcm9tIFwiLi9GX3NldF9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IGRvX21vdmVfYm90dG9tX2hhbGYgfSBmcm9tIFwiLi9GX3NldF9tb3ZlX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGluaXRfZGVidWdfbW9kZSB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldF9tYWlfbWF6ZSh1cmw6IHN0cmluZywgb3B0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGdldEpTT05fYnlfUE9TVCh1cmwsIG9wdCwgXHJcbiAgICAgICAgKHhocjpYTUxIdHRwUmVxdWVzdCk9PiB7XHJcbi8vICAgICAgICAgICAgYWxlcnQoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25PYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgICAgICAgIGFsZXJ0X21hemVfaW5mbyhqc29uT2JqPy5tYXplKTtcclxuLy8gICAgICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbi8vICAgICAgICAgICAgYWxlcnRfaGVyb2VzX2luZm8oanNvbk9iaj8udGVhbT8uaGVyb2VzKTtcclxuXHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfZGVidWdfbW9kZSgpO1xyXG4gICAgICAgICAgICBpbml0X2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZV9hbGwoanNvbk9iajogYW55KSB7XHJcbiAgICAvLyBNQVpF6Zai6YCj44Gu44OH44Kz44O844OJXHJcbiAgICBpZiAoanNvbk9iai5tYXplICE9PSB1bmRlZmluZWQpIGdfbWF6ZS5kZWNvZGUoanNvbk9iai5tYXplKTtcclxuXHJcbiAgICAvL+OAgFRlYW3plqLpgKPjga7jg4fjgrPjg7zjg4lcclxuICAgIGlmIChqc29uT2JqLnRlYW0gIT09IHVuZGVmaW5lZCkgZ190ZWFtLmRlY29kZShqc29uT2JqLnRlYW0pO1xyXG5cclxuICAgIC8vIE1hemXjgatUZWFt44KS6L+95YqgXHJcbiAgICBnX21hemUuYWRkX29iaihnX3RlYW0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEpTT05fYnlfUE9TVCh1cmw6IHN0cmluZywgb3B0OiBzdHJpbmcsIGNhbGxiYWNrOihyZXE6WE1MSHR0cFJlcXVlc3QpPT52b2lkKSB7IFxyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIFxyXG4gICAgICAgIC8vIOODquOCr+OCqOOCueODiFxyXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsKTtcclxuXHJcbiAgICAgICAgLy8gUE9TVOOBi+OBpOOAgXNlbmQoKeOBruW8leaVsOOBjOOAjGtleT12YWx1ZSYuLi7jgI3lvaLlvI/jgafjgYLjgovjgZPjgajjgpLmjIflrppcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIOODquOCr+OCqOOCueODiOeKtuaFi+OBjOWkieOCj+OCi+OBqOOCpOODmeODs+ODiOeZuueUn1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIHJlYWR5U3RhdGUgWE1MSHR0cFJlcXVlc3Qg44Gu54q25oWLIDQ6IOODquOCr+OCqOOCueODiOOBjOe1guS6huOBl+OBpua6luWCmeOBjOWujOS6hlxyXG4gICAgICAgICAgICAvLyBzdGF0dXMgaHR0cOOCueODhuODvOOCv+OCuSAyMDA6IOato+W4uOe1guS6hlxyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8ganNvbuOCkuOCquODluOCuOOCp+OCr+ODiOOBq+WkieabtFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHhocik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSHR0cFJlcXVlc3QgRVJST1IgY29kZT1cIiArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIC8v44Oq44Kv44Ko44K544OI6YCB5L+hXHJcbiAgICAgICAgeGhyLnNlbmQob3B0KTtcclxuICAgIH1cclxuIiwiaW1wb3J0IHsgYWxlcnRfaGVyb2VzX2luZm8gfSBmcm9tIFwiLi9DX0hlcm9cIjtcclxuaW1wb3J0IHsgYWxlcnRfbWF6ZV9pbmZvIH0gICBmcm9tIFwiLi9DX01hemVcIjtcclxuaW1wb3J0IHsgYWxlcnRfdGVhbV9pbmZvIH0gICBmcm9tIFwiLi9DX1RlYW1cIjtcclxuaW1wb3J0IHsgQ19VcmxPcHQgfSAgICAgICAgICBmcm9tIFwiLi9DX1VybE9wdFwiO1xyXG5pbXBvcnQgeyBQT1NUX2FuZF9nZXRfSlNPTiB9IGZyb20gXCIuL0ZfUE9TVF9hbmRfbW92ZV9wYWdlXCI7XHJcbmltcG9ydCB7IGRlY29kZV9hbGwgfSAgICAgICAgZnJvbSBcIi4vRl9nZXRfbWFpXCI7XHJcbmltcG9ydCB7IGdfZ2V0X21hemVfdXJsLCBnX21hemUsIGdfbXZtLCBnX3RlYW0gfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X2xvYWQoKTogdm9pZCB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRfc2F2ZSgpOiB2b2lkIHsgXHJcbiAgICBjb25zdCBtYXplX2RhdGEgPSBKU09OLnN0cmluZ2lmeShnX21hemUuZW5jb2RlKCksIG51bGwsIFwiXFx0XCIpO1xyXG4gICAgY29uc3QgdGVhbV9kYXRhID0gSlNPTi5zdHJpbmdpZnkoZ190ZWFtLmVuY29kZSgpLCBudWxsLCBcIlxcdFwiKTtcclxuXHJcbiAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAgICAgICAnaW5zdGFudF9zYXZlJyk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV9pZCcsICAgICAxKTsgXHJcbiAgICBvcHQuc2V0KCdzYXZlX3RpdGxlJywgJycpOyBcclxuICAgIG9wdC5zZXQoJ21hemUnLCAgICAgICBtYXplX2RhdGEpO1xyXG4gICAgb3B0LnNldCgndGVhbScsICAgICAgIHRlYW1fZGF0YSk7XHJcblxyXG4gICAgUE9TVF9hbmRfZ2V0X0pTT04oZ19nZXRfbWF6ZV91cmwsIG9wdCk/LnRoZW4oanNvbk9iaj0+e1xyXG4gICAgICAgIGlmIChqc29uT2JqLmVjb2RlID09IDApIHtcclxuICAgICAgICAgICAgZ19tdm0ubm9ybWFsX21lc3NhZ2UoJ+ato+W4uOOBq+S/neWtmOOBleOCjOOBvuOBl+OBnycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdfbXZtLndhcm5pbmdfbWVzc2FnZShcIuS/neWtmOOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn1xcblwiICsganNvbk9iai5lbXNnKTtcclxuICAgICAgICAgICAgYWxlcnQoanNvbk9iai5lbXNnKTtcclxuICAgICAgICB9XHJcbi8vICAgICAgICBhbGVydF9tYXplX2luZm8oanNvbk9iaj8ubWF6ZSk7XHJcbi8vICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbi8vICAgICAgICBhbGVydF9oZXJvZXNfaW5mbyhqc29uT2JqPy50ZWFtPy5oZXJvZXMpO1xyXG4gICAgXHJcbiAgICAgICAgZGVjb2RlX2FsbChqc29uT2JqKTtcclxuICAgIH0pO1xyXG4vLyAgICBQT1NUX2FuZF9tb3ZlX3BhZ2UoZ19jaGVja19KU09OX3VybCwgb3B0KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgaGlkZV9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBJX0hhc0hvcGUsIElfSG9wZUFjdGlvbiB9IGZyb20gXCIuL0lfRXZlbnRNYXBcIjtcclxuaW1wb3J0IHsgVF9DdGxzTW9kZSB9IGZyb20gXCIuL1RfQ3Rsc01vZGVcIjtcclxuaW1wb3J0IHsgc2V0X21vdmVfY29udHJvbGxlcywgZG9fbW92ZV9ib3R0b21faGFsZiB9IGZyb20gXCIuL0Zfc2V0X21vdmVfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9IGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlfbWF6ZTJELCBkaXNwbGF5X21hemUzRCwgXHJcbiAgICAgICAgIG1hemUzRF9ibGlua19vbl9kaXJlY3Rpb24sIG1hemUzRF9ibGlua19vZmZfZGlyZWN0aW9uIH0gZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZGVidWdfbW9kZSwgZ19jdGxzX21vZGUsIGdfbXZtIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSBmcm9tIFwiLi9DX1BvaW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNscl9VRF9jb250cm9sbGVzKCk6IHZvaWQge1xyXG4gICAgY2FuVXAgPSBmYWxzZTtcclxuICAgIGNhbkRuID0gZmFsc2U7XHJcbiAgICBpc1VwICA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB5X2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3Qgbl9idG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMik7XHJcblxyXG4gICAgdV9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9wZV9VcCk7XHJcbiAgICBkX2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX0Rvd24pO1xyXG5cclxuICAgIHlfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb191cCk7XHJcbiAgICB5X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fZG93bik7XHJcbiAgICB5X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fVUQpO1xyXG4gICAgbl9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX2NhbmNlbCk7XHJcblxyXG4gICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIHlfYnRuLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIG5fYnRuLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5cclxuXHJcblxyXG52YXIgY2FuVXA6IGJvb2xlYW4gID0gIGZhbHNlO1xyXG52YXIgY2FuRG46IGJvb2xlYW4gID0gIGZhbHNlO1xyXG5cclxudmFyIGlzVXA6ICBib29sZWFuICA9ICBmYWxzZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfVXBfY29udHJvbGxlcygpIHtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfkuIrjgorjg4bjg6zjg53jg7zjgr/jg7zjgYzmnInjgorjgb7jgZnjgILnmbvjgorjgb7jgZnjgYvvvJ/nmbvjgosg4oeSIOOAhyDnmbvjgonjgarjgYQg4oeSIOKclicpO1xyXG5cclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgY2FuVXAgPSB0cnVlO1xyXG4gICAgY2FuRG4gPSBmYWxzZTtcclxuICAgIF9fc2V0X1VEX2NvbnRyb2xsZXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF9Ebl9jb250cm9sbGVzKCkge1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4i+OCiuODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgumZjeOCiuOBvuOBmeOBi++8n+mZjeOCiuOCiyDih5Ig44CHIOmZjeOCiuOBquOBhCDih5Ig4pyWJyk7XHJcblxyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBjYW5VcCA9IGZhbHNlO1xyXG4gICAgY2FuRG4gPSB0cnVlO1xyXG4gICAgX19zZXRfVURfY29udHJvbGxlcygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X1VEX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn5LiK5LiL44OG44Os44Od44O844K/44O844GM5pyJ44KK44G+44GZ44CC55m744KK44G+44GZ44GL77yf55m744KL4oeSIOOAhyDpmY3jgorjgosg4oeSICjihpPjgq3jg7wpIOenu+WLleOBl+OBquOBhCDih5Ig4pyWJyk7XHJcblxyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBjYW5VcCA9IHRydWU7XHJcbiAgICBjYW5EbiA9IHRydWU7XHJcbiAgICBfX3NldF9VRF9jb250cm9sbGVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fc2V0X1VEX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBnX2N0bHNfbW9kZVswXSA9IFRfQ3Rsc01vZGUuVUQ7XHJcblxyXG4gICAgY29uc3QgeV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneV9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IG5fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICB5X2J0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgbl9idG4uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICBuX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fY2FuY2VsLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGNhblVwICYmICFjYW5Ebikge1xyXG4gICAgICAgIHlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb191cCwgICAgIGZhbHNlKTtcclxuICAgIH0gXHJcbiAgICBpZiAoY2FuRG4gJiYgIWNhblVwKSB7XHJcbiAgICAgICAgeV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX2Rvd24sICAgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhblVwICYmIGNhbkRuKSB7XHJcbiAgICAgICAgeV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX1VELCAgICAgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB1X2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB1X2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX1VwLCBmYWxzZSk7XHJcbiAgICAgICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICBjb25zdCBkX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICBkX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX0Rvd24sIGZhbHNlKTtcclxuICAgICAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIGlmIChpc1VwKSAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICBlbHNlICAgICAgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzVXApIGRfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgZWxzZSAgICAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleV9wcmVzc19mdW5jdGlvbjIpO1xyXG5cclxuICAgIGNvbnN0IGN0bF92aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVfY3RsX3ZpZXcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGN0bF92aWV3LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleV9wcmVzc19mdW5jdGlvbjIoZTogS2V5Ym9hcmRFdmVudCk6dm9pZCAge1xyXG4gICAgc3dpdGNoKGUuY29kZSkgeyAvLyBBcnJvd+OBr+WPjeW/nOOBm+OBmijjgqTjg5njg7Pjg4joh6rkvZPjgYznmbrnlJ/jgZvjgZopXHJcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IFxyXG4gICAgICAgIGNhc2UgJ0tleUsnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQ1JzogXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6IFxyXG4gICAgICAgIGNhc2UgJ0tleUonOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQyJzogXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0tleU8nOlxyXG4gICAgICAgIGNhc2UgJ0tleVknOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZDAnOlxyXG4gICAgICAgIGNhc2UgJ0RpZ2l0MCc6XHJcbiAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZEVudGVyJzpcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0tleU4nOlxyXG4gICAgICAgIGNhc2UgJ0tleVgnOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZEFkZCc6XHJcbi8vICAgICAgICBjYXNlICdOdW1wYWRTdWJ0cmFjdCc6XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdLZXlVJzpcclxuICAgICAgICAgICAgaWYgKGdfZGVidWdfbW9kZSAmJiBnX3RlYW0uZ2V0X3ooKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdfdGVhbS5zZXRfeihnX3RlYW0uZ2V0X3ooKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYW5VcCkge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdLZXlEJzpcclxuICAgICAgICAgICAgaWYgKGdfZGVidWdfbW9kZSAmJiBnX3RlYW0uZ2V0X3ooKSA8IChnX21hemUuZ2V0X3pfbWF4KCkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgZ190ZWFtLnNldF96KGdfdGVhbS5nZXRfeigpICsgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbkRuKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb19jYW5jZWwoKTogdm9pZCB7XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBzZXRfbW92ZV9jb250cm9sbGVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX3VwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3BfdXAoKTtcclxuICAgIGlmICghcnNsdC5oYXNfaG9wZSB8fCAhZ19tYXplLndpdGhpbihyc2x0LnN1YmopKSB7XHJcbiAgICAgICAgcnNsdC5kb05HKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJzbHQuZG9PSygpO1xyXG4gICAgfVxyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgc2V0X21vdmVfY29udHJvbGxlcygpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2Rvd24oKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF9kb3duKCk7XHJcbiAgICBpZiAoIXJzbHQuaGFzX2hvcGUgfHwgIWdfbWF6ZS53aXRoaW4ocnNsdC5zdWJqKSkge1xyXG4gICAgICAgIHJzbHQuZG9ORygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByc2x0LmRvT0soKTtcclxuICAgIH1cclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIHNldF9tb3ZlX2NvbnRyb2xsZXMoKTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19VRCgpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBcclxuICAgIGlmIChpc1VwKSBkb191cCgpO1xyXG4gICAgZWxzZSAgICAgIGRvX2Rvd24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9wZV9VcCgpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBpc1VwID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93Jyk/LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKT8uc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+eZu+OCiuOBvuOBmeOBi++8n+eZu+OCi+KHkiDjgIcg6ZmN44KK44KLIOKHkiAo4oaT44Kt44O8KSDnp7vli5XjgZfjgarjgYQg4oeSIOKclicpO1xyXG59XHJcbmZ1bmN0aW9uIGhvcGVfRG93bigpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBpc1VwID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpPy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93Jyk/LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfpmY3jgorjgb7jgZnjgYvvvJ/pmY3jgorjgovih5Ig44CHIOeZu+OCiyDih5IgKOKGkeOCreODvCkg56e75YuV44GX44Gq44GEIOKHkiDinJYnKTtcclxufVxyXG5cclxuIiwiXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuICAgIC8qICBIVE1MUHJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpOyAgICAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VfYXJyYXcnKTsgICAgICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2dyaWQnKTsgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uYXBwZW5kQ2hpbGQoSFRNTEVsZW1lbnQpOyAgICAgICAgICAgICAqL1xyXG4gICAgLyoqKioqKioqKioqKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBjbHJfbW92ZV9jb250cm9sbGVzLCBzZXRfbW92ZV9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IGNscl9VRF9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfVURfY29udHJvbGxlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVfY29udHJvbGxlcygpIHtcclxuICAgIGNscl9tb3ZlX2NvbnRyb2xsZXMoKTtcclxuICAgIGNscl9VRF9jb250cm9sbGVzKCk7XHJcbiAgICBjb25zdCBtb3ZlX2N0bF92aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVfY3RsX3ZpZXcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1vdmVfY3RsX3ZpZXc/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY29udHJvbGxlcygpIHtcclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgc2V0X21vdmVfY29udHJvbGxlcygpO1xyXG59XHJcbiIsImltcG9ydCB7IGhpZGVfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgSV9Ib3BlQWN0aW9uIH0gZnJvbSBcIi4vSV9FdmVudE1hcFwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9IGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlfbWF6ZTJELCBkaXNwbGF5X21hemUzRCwgXHJcbiAgICAgICAgIG1hemUzRF9ibGlua19vbl9kaXJlY3Rpb24sIG1hemUzRF9ibGlua19vZmZfZGlyZWN0aW9uIH0gZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuaW1wb3J0IHsgVF9DdGxzTW9kZSB9IGZyb20gXCIuL1RfQ3Rsc01vZGVcIjtcclxuaW1wb3J0IHsgc2V0X1VwX2NvbnRyb2xsZXMsIHNldF9Ebl9jb250cm9sbGVzLCBzZXRfVURfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X1VEX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgaW5zdGFudF9sb2FkLCBpbnN0YW50X3NhdmUgfSBmcm9tIFwiLi9GX2luc3RhbnRfc2F2ZVwiO1xyXG5pbXBvcnQgeyBnX21hemUsIGdfdGVhbSwgZ19kZWJ1Z19tb2RlLCBnX2N0bHNfbW9kZSwgZ19tdm0gfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbHJfbW92ZV9jb250cm9sbGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdV9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBkX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IHJfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgbF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMSk7XHJcblxyXG4gICAgdV9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29fRik7XHJcbiAgICBkX2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb19CKTtcclxuICAgIHJfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX1IpO1xyXG4gICAgbF9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHJfTCk7XHJcblxyXG4gICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIGxfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgcl9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfbW92ZV9jb250cm9sbGVzKCk6IHZvaWQge1xyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBnX2N0bHNfbW9kZVswXSA9IFRfQ3Rsc01vZGUuTW92ZTtcclxuICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCByX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGxfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHVfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvX0YsIGZhbHNlKTtcclxuICAgIGRfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvX0IsIGZhbHNlKTtcclxuICAgIHJfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX1IsIGZhbHNlKTtcclxuICAgIGxfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX0wsIGZhbHNlKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBrZXlfcHJlc3NfZnVuY3Rpb24xKTtcclxuXHJcbiAgICB1X2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBsX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICByX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgY29uc3QgY3RsX3ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZV9jdGxfdmlldycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY3RsX3ZpZXc/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleV9wcmVzc19mdW5jdGlvbjEoZTogS2V5Ym9hcmRFdmVudCk6dm9pZCAge1xyXG4gICAgc3dpdGNoKGUuY29kZSkgeyAvLyBBcnJvd+OBr+WPjeW/nOOBm+OBmijjgqTjg5njg7Pjg4joh6rkvZPjgYznmbrnlJ/jgZvjgZopXHJcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IFxyXG4gICAgICAgIGNhc2UgJ0tleUsnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQ1JzogXHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOiBcclxuICAgICAgICBjYXNlICdLZXlKJzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkMic6IFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzogXHJcbiAgICAgICAgY2FzZSAnS2V5SCc6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDEnOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOiBcclxuICAgICAgICBjYXNlICdLZXlMJzogXHJcbiAgICAgICAgY2FzZSAgJ051bXBhZDMnOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUwnOlxyXG4gICAgICAgICAgICBpZiAoZ19jdGxzX21vZGVbMF0gPT0gVF9DdGxzTW9kZS5Nb3ZlICYmIGdfZGVidWdfbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFudF9sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlTJzogXHJcbiAgICAgICAgICAgIGlmIChnX2N0bHNfbW9kZVswXSA9PSBUX0N0bHNNb2RlLk1vdmUgJiYgZ19kZWJ1Z19tb2RlKSB7IFxyXG4gICAgICAgICAgICAgICAgaW5zdGFudF9zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlVJzpcclxuICAgICAgICAgICAgaWYgKGdfY3Rsc19tb2RlWzBdID09IFRfQ3Rsc01vZGUuTW92ZSAmJiBnX2RlYnVnX21vZGUgJiYgZ190ZWFtLmdldF96KCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBnX3RlYW0uc2V0X3ooZ190ZWFtLmdldF96KCkgLSAxKTtcclxuICAgICAgICAgICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUQnOlxyXG4gICAgICAgICAgICBpZiAoZ19jdGxzX21vZGVbMF0gPT0gVF9DdGxzTW9kZS5Nb3ZlICYmIGdfZGVidWdfbW9kZSAmJiBnX3RlYW0uZ2V0X3ooKSA8IChnX21hemUuZ2V0X3pfbWF4KCkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgZ190ZWFtLnNldF96KGdfdGVhbS5nZXRfeigpICsgMSk7XHJcbiAgICAgICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuICAgIC8qKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqL1xyXG4gICAgLyogIEhUTUxQcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7ICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnaWQnLCAndV9hcnJhdycpOyAgICAgICAgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZ3JpZCcpOyAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5hcHBlbmRDaGlsZChIVE1MRWxlbWVudCk7ICAgICAgICAgICAgICovXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIGNsZWFyX21hc2tfYXJvdW5kX3RoZV90ZWFtKCk6IHZvaWQge1xyXG4gICAgZ19tYXplLmNsZWFyX21hc2tfYXJvdW5kX3RoZV90ZWFtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZV91bmV4cF90b19mbG9vcigpOiB2b2lkIHtcclxuICAgIGdfbWF6ZS5jaGFuZ2VfdW5leHBfdG9fZmxvb3IoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29fRigpIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV9wX2Z3ZCgpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29uJyk7XHJcbn1cclxuZnVuY3Rpb24gZ29fQigpIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV9wX2JhaygpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29uJyk7XHJcbn1cclxuZnVuY3Rpb24gdHJfUigpIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV90dXJuX3IoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5mdW5jdGlvbiB0cl9MKCkge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3R1cm5fbCgpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG59XHJcbmZ1bmN0aW9uIG1vdmVfY2hlY2socjogSV9Ib3BlQWN0aW9uKSB7XHJcbiAgICBpZiAoIXIuaGFzX2hvcGUpIHJldHVybjtcclxuICAgIGlmIChyLmhvcGUgPT0gJ1R1cm4nKSB7XHJcbiAgICAgICAgci5kb09LKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHIuaG9wZSA9PSAnTW92ZScpIHtcclxuICAgICAgICBjb25zdCBraW5kID0gZ19tYXplLmdldF9jZWxsKHIuc3Viaik7XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6XHJcbiAgICAgICAgICAgICAgICAgci5kb09LKCk7cmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgIHIuZG9PSygpO1xyXG4gICAgICAgICAgICAgICAgIGRvX3N0YWlyc19tb3Rpb24oa2luZCk7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByLmRvTkcoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBkb19zdGFpcnNfbW90aW9uKGtpbmQ6IFRfTXpLaW5kKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBzZXRfVXBfY29udHJvbGxlcygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBzZXRfRG5fY29udHJvbGxlcygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICBzZXRfVURfY29udHJvbGxlcygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb19tb3ZlX2JvdHRvbV9oYWxmKGJsaW5rX21vZGU6IHN0cmluZyk6IHZvaWQgeyAgIC8vYWxlcnQoJ0Zsb29yPyA9ICcgKyBnX3RlYW0uZ2V0X3AoKS56KTtcclxuICAgIGNoYW5nZV91bmV4cF90b19mbG9vcigpO1xyXG4gICAgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0oKTtcclxuICAgIGRpc3BsYXlfbWF6ZTJEKCk7XHJcbiAgICBkaXNwbGF5X21hemUzRCgpO1xyXG4gICAgaWYgKGJsaW5rX21vZGUgPT09ICdibGlua19vbicpIG1hemUzRF9ibGlua19vbl9kaXJlY3Rpb24oKTtcclxuICAgIGVsc2UgbWF6ZTNEX2JsaW5rX29mZl9kaXJlY3Rpb24oKTtcclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxufVxyXG4iLCJpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi9UX01ha2VFbnVtVHlwZVwiO1xyXG5leHBvcnQgY29uc3QgVF9DdGxzTW9kZSA9IHtcclxuICAgIE5vcDogICAgIDAsXHJcbiAgICBNb3ZlOiAgICAxLFxyXG4gICAgVUQ6ICAgICAgMixcclxuICAgIEJhdHRsZTogIDMsXHJcbiAgICBVbmtub3duOiA5OVxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0N0bHNNb2RlID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfQ3Rsc01vZGU+O1xyXG4iLCJpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi9UX01ha2VFbnVtVHlwZVwiO1xyXG5leHBvcnQgY29uc3QgVF9EaXJlY3Rpb24gPSB7XHJcbiAgICBOOiAwLFxyXG4gICAgRTogMSxcclxuICAgIFM6IDIsXHJcbiAgICBXOiAzLFxyXG4gICAgWDogOTlcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9EaXJlY3Rpb24gPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9EaXJlY3Rpb24+O1xyXG5cclxuZXhwb3J0IHZhciAkRGlyZWN0aW9uTmFtZSA9IHtcclxuICAgIDA6ICAn5YyXJyxcclxuICAgIDE6ICAn5p2xJyxcclxuICAgIDI6ICAn5Y2XJyxcclxuICAgIDM6ICAn6KW/JyxcclxuICAgIDk5OiAn6KyOJ1xyXG59XHJcbiIsIiAgICAvLyDkuIDoiKzjgavkvb/jgYjjgovjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgarlkarmlodcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkuWIl+aMmeWei+OBqOOBl+OBpuWei+WMluOBmeOCi+OBruOBq+WIqeeUqFxyXG4gICAgaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4vVF9NYWtlRW51bVR5cGVcIjtcclxuXHJcbiAgICAvLyDjg4Djg7Pjgrjjg6fjg7Pjg57jg4Pjg5fjga7jgrvjg6vjga7nqK7poZ7jgpLooajjgZnliJfmjJnlnotcclxuICAgIC8vIE5vRGVmOiDmnKrlrprnvqnjg7vkuI3mmI5cclxuICAgIC8vIEZsb29yOiDluopcclxuICAgIC8vIFVuZXhwOiDmnKrouI/lnLBcclxuICAgIC8vIFN0b25lOiDnn7Plo4FcclxuICAgIC8vIFN0clVwOiDkuIrjgorpmo7mrrVcclxuICAgIC8vIFN0ckRuOiDkuIvjgorpmo7mrrVcclxuICAgIC8vIEVtcHR5OiDliJ3mnJ/nirbmhYvjg7vkvZXjgoLjgarjgZdcclxuICAgIC8vIFxyXG4gICAgLy8gZnVuY3Rpb24gdG9faW50KE16S2luZCk6ICAgICAgaW50ICAgICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovlgKQo5pW05pWw5YCkKeOCkui/lOOBmVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9pbnQoaW50KTogICAgICAgVF9NektpbmQgICAgIOaVtOaVsOWApOOBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcbiAgICAvLyBmdW5jdGlvbiB0b19sZXR0ZXIoTXpLaW5kKTogICBzdHJpbmcgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+aWh+Wtl+OCkui/lOOBmSjjg4Djg7Pjgrjjg6fjg7Pjga4yROihqOekuueUqClcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21fbGV0dGVyKHN0cmluZyk6IFRfTXpLaW5kICAgICDmloflrZfjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX016S2luZDp7W2tleTogc3RyaW5nXTogbnVtYmVyfSAgPSB7XHJcbiAgICAgICAgTm9EZWY6ICAgMCxcclxuICAgICAgICBGbG9vcjogICAxLFxyXG4gICAgICAgIFVuZXhwOiAgIDIsXHJcbiAgICAgICAgU3RvbmU6ICAgMyxcclxuICAgICAgICBVbmt3bjogICA0LFxyXG4gICAgICAgIFN0clVwOiAgIDUsXHJcbiAgICAgICAgU3RyRG46ICAgNixcclxuICAgICAgICBTdHJVRDogICA3LFxyXG4gICAgICAgIEVtcHR5OiAyNTUsXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9NektpbmQgICA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX016S2luZD47XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfUnZNektpbmQ6e1trZXk6IG51bWJlcl06IFRfTXpLaW5kfSAgPSB7XHJcbiAgICAgICAgMDogICBUX016S2luZC5Ob0RlZixcclxuICAgICAgICAxOiAgIFRfTXpLaW5kLkZsb29yLFxyXG4gICAgICAgIDI6ICAgVF9NektpbmQuVW5leHAsXHJcbiAgICAgICAgMzogICBUX016S2luZC5TdG9uZSxcclxuICAgICAgICA0OiAgIFRfTXpLaW5kLlVua3duLFxyXG4gICAgICAgIDU6ICAgVF9NektpbmQuU3RyVXAsXHJcbiAgICAgICAgNjogICBUX016S2luZC5TdHJEbixcclxuICAgICAgICA3OiAgIFRfTXpLaW5kLlN0clVELFxyXG4gICAgICAgIDI1NTogVF9NektpbmQuRW1wdHksXHJcbiAgICB9IGFzIGNvbnN0O1xyXG4gICAgZXhwb3J0IHR5cGUgVF9Sdk16S2luZCA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX1J2TXpLaW5kPjtcclxuXHJcbiIsImNvbnN0IG15X3VybF9iYXNlOiBzdHJpbmcgPSBcImh0dHA6Ly8xMjcuMC4wLjEvZGV2L21haS9tYWlfbWF6ZS9cIjtcclxuZXhwb3J0IGNvbnN0IGdfZ2V0X21hemVfdXJsOiAgIHN0cmluZyA9IG15X3VybF9iYXNlICsgXCJtYWlfbWF6ZS5waHBcIjtcclxuZXhwb3J0IGNvbnN0IGdfY2hlY2tfSlNPTl91cmw6IHN0cmluZyA9IG15X3VybF9iYXNlICsgXCJjaGVja19KU09OLnBocFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IENfTWF6ZSB9IGZyb20gXCIuL0NfTWF6ZVwiO1xyXG5leHBvcnQgY29uc3QgZ19tYXplID0gbmV3IENfTWF6ZSh7bWF6ZV9pZDogLTF9KTtcclxuXHJcbmltcG9ydCB7IENfVGVhbSB9IGZyb20gXCIuL0NfVGVhbVwiO1xyXG5leHBvcnQgY29uc3QgZ190ZWFtID0gbmV3IENfVGVhbSgpO1xyXG5cclxuaW1wb3J0IHsgVF9DdGxzTW9kZSB9IGZyb20gXCIuL1RfQ3Rsc01vZGVcIjtcclxuZXhwb3J0IGNvbnN0IGdfY3Rsc19tb2RlOiBUX0N0bHNNb2RlW10gPSBuZXcgQXJyYXkoMSkgYXMgVF9DdGxzTW9kZVtdO1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheV9tYXplMkQgfSBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZVwiO1xyXG5leHBvcnQgdmFyIGdfZGVidWdfbW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuaW1wb3J0IHtUX0Ryb3dTZXQsIGluaXRfbWF6ZTNEIH0gZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuZXhwb3J0IHZhciBnX2RzOiBUX0Ryb3dTZXQgICA9IHtjYW52YXM6IG51bGwsIGNvbjogbnVsbCwgZGVwdGg6IDAsIHdhbGw6IG51bGx9O1xyXG5cclxuaW1wb3J0IHsgQ19NYXplVmlld01lc3NhZ2UgfSBmcm9tIFwiLi9DX01hemVWaWV3TWVzc2FnZVwiO1xyXG5leHBvcnQgdmFyIGdfbXZtOiBDX01hemVWaWV3TWVzc2FnZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2FmdGVyX2xvYWRlZF9ET00oKTogdm9pZCB7XHJcbiAgICBnX2RzICAgPSBpbml0X21hemUzRCgpO1xyXG4gICAgZ19tdm0gID0gQ19NYXplVmlld01lc3NhZ2UuZ2V0KCk7IGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfZGVidWdfbW9kZSgpOiB2b2lkIHtcclxuICAgIGdfZGVidWdfbW9kZSA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnX21vZGUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGlmIChidG4gPT09IG51bGwpIHJldHVybjtcclxuICAgIHRvZ2dsZV9kZWJ1Z19tb2RlKCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9Pnt0b2dnbGVfZGVidWdfbW9kZSgpO30sIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChldmVudCk9PntcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgICAgICAgICBidG4uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVfZGVidWdfbW9kZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1Z19tb2RlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBpZiAoYnRuID09PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAoZ19kZWJ1Z19tb2RlKSB7XHJcbiAgICAgICAgZ19kZWJ1Z19tb2RlID0gZmFsc2U7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZmFsc2UnKTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gJ+mAmuW4uOODouODvOODieS4rSc7XHJcbiAgICAgICAgYnRuLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmMGY4ZmYnKTtcclxuICAgICAgICBidG4uc3R5bGUuc2V0UHJvcGVydHkoJ2NvbG9yJywgJyMwMDgwMDAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ19kZWJ1Z19tb2RlID0gdHJ1ZTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICfjg4fjg5Djg4PjgrDjg6Ljg7zjg4nkuK0nO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICcjZmYwMDAwJyk7XHJcbiAgICAgICAgYnRuLnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsICcjZmZmZmZmJyk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5X21hemUyRCgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLy9cclxuLy8vICAg5Li75Yem55CGXHJcbi8vL1xyXG5cclxuaW1wb3J0IHsgQ19VcmxPcHQgfSAgZnJvbSBcIi4vQ19VcmxPcHRcIjtcclxuaW1wb3J0IHsgZ2V0X21haV9tYXplIH0gZnJvbSBcIi4vRl9nZXRfbWFpXCI7XHJcbmltcG9ydCB7IGdfZ2V0X21hemVfdXJsLCBpbml0X2FmdGVyX2xvYWRlZF9ET00gfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7IFxyXG4gICAgaW5pdF9hZnRlcl9sb2FkZWRfRE9NKCk7XHJcbiAgICBjb25zdCBnZXRfbWF6ZV9vcHQ6IHN0cmluZyA9IG5ldyBDX1VybE9wdCh7bW9kZTogXCJuZXdcIiwgbnVtOiAzMzN9KS50b19zdHJpbmcoKTtcclxuICAgIGdldF9tYWlfbWF6ZShnX2dldF9tYXplX3VybCwgZ2V0X21hemVfb3B0KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=