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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    if (a === undefined)
        return;
    alert('Number of Hero = ' + a.length.toString());
    for (var i in a) {
        if (a[i] === undefined)
            continue;
        alert("Hero[" + i.toString() + "] Info:\n"
            + "\nid:       " + ((_b = (_a = a[i]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '?')
            + "\nname:     " + ((_d = (_c = a[i]) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '?')
            + "\nsave_id:  " + ((_f = (_e = a[i]) === null || _e === void 0 ? void 0 : _e.save_id) !== null && _f !== void 0 ? _f : '?')
            + "\nteam_id:  " + ((_h = (_g = a[i]) === null || _g === void 0 ? void 0 : _g.team_id) !== null && _h !== void 0 ? _h : '?')
            + "\nis_hero:  " + ((_k = (_j = a[i]) === null || _j === void 0 ? void 0 : _j.is_hero) !== null && _k !== void 0 ? _k : '?')
            + "\nis_alive: " + ((_m = (_l = a[i]) === null || _l === void 0 ? void 0 : _l.is_alive) !== null && _m !== void 0 ? _m : '?')
            + "\n");
    }
}
exports.alert_heroes_info = alert_heroes_info;
class C_Hero {
    constructor(a) {
        this.my_id = 0;
        this.my_name = 'No Name Hero';
        this.save_id = 0;
        this.team_id = 0;
        this.is_hero = true;
        this.is_alive = true;
        if (a !== undefined)
            this.__init(a);
    }
    __init(a) {
        var _a, _b, _c, _d;
        this.my_id = (_a = a.id) !== null && _a !== void 0 ? _a : this.my_id;
        this.my_name = (_b = a.name) !== null && _b !== void 0 ? _b : this.my_name;
        this.save_id = (_c = a.save_id) !== null && _c !== void 0 ? _c : this.save_id;
        this.team_id = (_d = a.team_id) !== null && _d !== void 0 ? _d : this.team_id;
        if (a.is_hero !== undefined) {
            if (typeof a.is_hero === "boolean") {
                this.is_hero = a.is_hero;
            }
            else {
                this.is_hero = (a.is_hero != 'N') ? true : false;
            }
        }
        if (a.is_alive !== undefined) {
            if (typeof a.is_alive === "boolean") {
                this.is_alive = a.is_alive;
            }
            else {
                this.is_alive = (a.is_alive != 'N') ? true : false;
            }
        }
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
            save_id: this.save_id,
            team_id: this.team_id,
            is_hero: (this.is_hero) ? 'Y' : 'N',
            is_alive: (this.is_alive) ? 'Y' : 'N',
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
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
        if (a.team_id !== undefined)
            this.team_id = a.team_id;
        if (a.is_hero !== undefined)
            this.is_hero = (a.is_hero != 'N') ? true : false;
        if (a.is_alive !== undefined)
            this.is_alive = (a.is_alive != 'N') ? true : false;
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (a === undefined)
        return;
    alert("Maze Info:"
        + "\nmaze id :" + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nfloor: " + ((_b = a.floor) !== null && _b !== void 0 ? _b : '?')
        + "\nsave id :" + ((_c = a.save_id) !== null && _c !== void 0 ? _c : '?')
        + "\ntitle: " + ((_d = a.title) !== null && _d !== void 0 ? _d : '?')
        + "\nsize_x: " + ((_e = a.size_x) !== null && _e !== void 0 ? _e : '?')
        + "\nsize_y: " + ((_f = a.size_y) !== null && _f !== void 0 ? _f : '?')
        + "\nsize_z: " + ((_g = a.size_z) !== null && _g !== void 0 ? _g : '?')
        + "\n");
    alert("maze:\n" + ((_h = a.maze) !== null && _h !== void 0 ? _h : '?')
        + "\n");
    alert("mask:\n" + ((_j = a.mask) !== null && _j !== void 0 ? _j : '?')
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
    constructor({ maze_id = -1, save_id = -1, floor = 0, title = '', size_x = 3, size_y = 3, size_z = 1 }) {
        this.my_layer = 0;
        this.maze_id = maze_id;
        this.save_id = save_id;
        this.floor = floor;
        this.title = title;
        this.size = new C_Range_1.C_Range(new C_Point_1.C_Point(0, 0, 0), new C_Point_1.C_Point(size_x - 1, size_y - 1, size_z - 1));
        this.cells = this.__init_maze(T_MzKind_1.T_MzKind.Stone);
        this.masks = this.__init_mask(true);
        this.objs = [];
    }
    init({ maze_id, save_id, floor, title, size_x, size_y, size_z }) {
        this.maze_id = maze_id;
        this.save_id = save_id;
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
            save_id: this.save_id,
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
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (a === undefined)
        return;
    alert("Team Info:"
        + "\nid:    " + ((_a = a.id) !== null && _a !== void 0 ? _a : '?')
        + "\nname:  " + ((_b = a.name) !== null && _b !== void 0 ? _b : '?')
        + "\nsave_id: " + ((_c = a.save_id) !== null && _c !== void 0 ? _c : '?')
        + "\ncur_x: " + ((_e = (_d = a.point) === null || _d === void 0 ? void 0 : _d.x) !== null && _e !== void 0 ? _e : '?')
        + "\ncur_y: " + ((_g = (_f = a.point) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : '?')
        + "\ncur_z: " + ((_j = (_h = a.point) === null || _h === void 0 ? void 0 : _h.z) !== null && _j !== void 0 ? _j : '?')
        + "\ncur_d: " + ((_l = (_k = a.direct) === null || _k === void 0 ? void 0 : _k.d) !== null && _l !== void 0 ? _l : '?')
        + "\n");
}
exports.alert_team_info = alert_team_info;
class C_Team {
    constructor(a) {
        var _a, _b, _c, _d;
        this.my_layer = 99;
        this.my_id = (_a = a === null || a === void 0 ? void 0 : a.id) !== null && _a !== void 0 ? _a : 0;
        this.my_name = (_b = a === null || a === void 0 ? void 0 : a.name) !== null && _b !== void 0 ? _b : 'Neo Team?';
        this.save_id = (_c = a === null || a === void 0 ? void 0 : a.save_id) !== null && _c !== void 0 ? _c : 0;
        this.walker = new C_Walker_1.C_Walker();
        this.heroes = [];
        this.hope_motion = (_d = a === null || a === void 0 ? void 0 : a.motion) !== null && _d !== void 0 ? _d : 'NOP';
        if (a !== undefined)
            this.__init(a);
    }
    __init(a) {
        var _a, _b, _c, _d;
        this.my_id = (_a = a.id) !== null && _a !== void 0 ? _a : this.my_id;
        this.my_name = (_b = a.name) !== null && _b !== void 0 ? _b : this.my_name;
        this.save_id = (_c = a.save_id) !== null && _c !== void 0 ? _c : this.save_id;
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
        this.hope_motion = (_d = a.motion) !== null && _d !== void 0 ? _d : this.hope_motion;
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
            save_id: this.save_id,
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
        if (a.save_id !== undefined)
            this.save_id = a.save_id;
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

/***/ "./src/F_POST.ts":
/*!***********************!*\
  !*** ./src/F_POST.ts ***!
  \***********************/
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
        var res;
        try {
            res = yield fetch(url, {
                method: 'POST',
                body: form_data
            });
        }
        catch (err) {
            global_1.g_mvm.warning_message('通信エラー: ' + err);
            return undefined;
        }
        const monitor = false;
        var txt;
        if (monitor) {
            txt = res.text().then(tx => {
                for (var i = 0; i < (tx.length < 1000 ? tx.length : 1000); i += 250)
                    alert(tx.substring(i, i + 250));
                return tx;
            });
        }
        else {
            txt = res.text();
        }
        return txt.then(txt => {
            try {
                return JSON.parse(txt);
            }
            catch (err) {
                global_1.g_mvm.warning_message('JSON形式のデコードエラー');
                return undefined;
            }
        });
    });
}
exports.POST_and_get_JSON = POST_and_get_JSON;
function readStream(stream) {
    const reader = stream.getReader();
    let chunk = '';
    reader.read().then(function processText({ done, value }) {
        if (done) {
            return value;
        }
        chunk += value;
        return reader.read().then(processText);
    });
}
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

/***/ "./src/F_laod_and_save.ts":
/*!********************************!*\
  !*** ./src/F_laod_and_save.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode_all = exports.instant_save = exports.instant_load = exports.get_mai_maze = void 0;
const C_Team_1 = __webpack_require__(/*! ./C_Team */ "./src/C_Team.ts");
const C_Hero_1 = __webpack_require__(/*! ./C_Hero */ "./src/C_Hero.ts");
const C_UrlOpt_1 = __webpack_require__(/*! ./C_UrlOpt */ "./src/C_UrlOpt.ts");
const F_POST_1 = __webpack_require__(/*! ./F_POST */ "./src/F_POST.ts");
const F_set_controlles_1 = __webpack_require__(/*! ./F_set_controlles */ "./src/F_set_controlles.ts");
const F_set_move_controlles_1 = __webpack_require__(/*! ./F_set_move_controlles */ "./src/F_set_move_controlles.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function get_mai_maze(url, opt) {
    var _a;
    (_a = (0, F_POST_1.POST_and_get_JSON)(url, opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        var _a;
        if (jsonObj.ecode != 0) {
            global_1.g_mvm.warning_message("初期データを受信できませんでした\n" + jsonObj.emsg);
            alert(jsonObj.emsg);
            return;
        }
        const monitor = false;
        if (monitor) {
            (0, C_Team_1.alert_team_info)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.team);
            (0, C_Hero_1.alert_heroes_info)((_a = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.team) === null || _a === void 0 ? void 0 : _a.heroes);
        }
        decode_all(jsonObj);
        (0, global_1.init_debug_mode)();
        (0, F_set_controlles_1.init_controlles)();
        (0, F_set_move_controlles_1.do_move_bottom_half)('blink_off');
    });
}
exports.get_mai_maze = get_mai_maze;
function instant_load() {
    var _a;
    const opt = new C_UrlOpt_1.C_UrlOpt();
    opt.set('mode', 'instant_load');
    opt.set('save_id', 1);
    opt.set('save_title', '');
    (_a = (0, F_POST_1.POST_and_get_JSON)(global_1.g_get_maze_url, opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        var _a;
        if (jsonObj.ecode == 0) {
            global_1.g_mvm.normal_message('正常にロードされました');
            const monitor = false;
            if (monitor) {
                (0, C_Team_1.alert_team_info)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.team);
                (0, C_Hero_1.alert_heroes_info)((_a = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.team) === null || _a === void 0 ? void 0 : _a.heroes);
            }
            decode_all(jsonObj);
            (0, F_set_controlles_1.init_controlles)();
            (0, F_set_move_controlles_1.do_move_bottom_half)('blink_off');
        }
        else {
            global_1.g_mvm.warning_message("ロードできませんでした\n" + jsonObj.emsg);
            alert(jsonObj.emsg);
        }
    });
}
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
    (_a = (0, F_POST_1.POST_and_get_JSON)(global_1.g_get_maze_url, opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
        var _a;
        if (jsonObj.ecode == 0) {
            global_1.g_mvm.normal_message('正常にセーブされました');
        }
        else {
            global_1.g_mvm.warning_message("セーブできませんでした\n" + jsonObj.emsg);
            alert(jsonObj.emsg);
        }
        const monitor = false;
        if (monitor) {
            (0, C_Team_1.alert_team_info)(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.team);
            (0, C_Hero_1.alert_heroes_info)((_a = jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.team) === null || _a === void 0 ? void 0 : _a.heroes);
        }
        decode_all(jsonObj);
    });
}
exports.instant_save = instant_save;
function decode_all(jsonObj) {
    if (jsonObj.maze !== undefined)
        global_1.g_maze.decode(jsonObj.maze);
    if (jsonObj.team !== undefined)
        global_1.g_team.decode(jsonObj.team);
    global_1.g_maze.add_obj(global_1.g_team);
}
exports.decode_all = decode_all;


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
const T_CtlsMode_1 = __webpack_require__(/*! ./T_CtlsMode */ "./src/T_CtlsMode.ts");
const F_laod_and_save_1 = __webpack_require__(/*! ./F_laod_and_save */ "./src/F_laod_and_save.ts");
const F_display_maze_1 = __webpack_require__(/*! ./F_display_maze */ "./src/F_display_maze.ts");
const F_set_UD_controlles_1 = __webpack_require__(/*! ./F_set_UD_controlles */ "./src/F_set_UD_controlles.ts");
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
    var _a, _b, _c, _d, _e;
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
        case 'Numpad3':
            (_d = document.getElementById('r_arrow')) === null || _d === void 0 ? void 0 : _d.click();
            break;
        case 'KeyL':
            if (global_1.g_debug_mode) {
                (0, F_laod_and_save_1.instant_load)();
            }
            else {
                (_e = document.getElementById('r_arrow')) === null || _e === void 0 ? void 0 : _e.click();
            }
            break;
        case 'KeyS':
            if (global_1.g_debug_mode) {
                (0, F_laod_and_save_1.instant_save)();
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
    global_1.g_mvm.clear_message();
}
function go_B() {
    const rslt = global_1.g_team.hope_p_bak();
    move_check(rslt);
    do_move_bottom_half('blink_on');
    global_1.g_mvm.clear_message();
}
function tr_R() {
    const rslt = global_1.g_team.hope_turn_r();
    move_check(rslt);
    do_move_bottom_half('blink_off');
    global_1.g_mvm.clear_message();
}
function tr_L() {
    const rslt = global_1.g_team.hope_turn_l();
    move_check(rslt);
    do_move_bottom_half('blink_off');
    global_1.g_mvm.clear_message();
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
/*!*************************!*\
  !*** ./src/mai_maze.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const C_UrlOpt_1 = __webpack_require__(/*! ./C_UrlOpt */ "./src/C_UrlOpt.ts");
const F_laod_and_save_1 = __webpack_require__(/*! ./F_laod_and_save */ "./src/F_laod_and_save.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
window.addEventListener('DOMContentLoaded', function () {
    (0, global_1.init_after_loaded_DOM)();
    const get_maze_opt = new C_UrlOpt_1.C_UrlOpt({ mode: "new", num: 333 });
    (0, F_laod_and_save_1.get_mai_maze)(global_1.g_get_maze_url, get_maze_opt);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFPLFNBQVM7WUFBSyxJQUFJLENBQUMsS0FBSyxHQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBSyxJQUFJLENBQUMsT0FBTyxHQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDMUQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFekQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxDQUFDLENB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LFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQztTQUFNLENBQUM7UUFDSixvQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUMzQixHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELG1DQUFjLEdBQUUsQ0FBQztBQUNyQixDQUFDOzs7Ozs7O1VDNUREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQSw4RUFBMEM7QUFDMUMsbUdBQWlEO0FBQ2pELHdFQUFpRTtBQUVqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDeEMsa0NBQXFCLEdBQUUsQ0FBQztJQUN4QixNQUFNLFlBQVksR0FBRyxJQUFJLG1CQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQzNELGtDQUFZLEVBQUMsdUJBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21haS8uL3NyYy9DX0hlcm8udHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfTWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19NYXplVmlld01lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfUG9pbnQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfVGVhbS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19VcmxPcHQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfV2Fsa2VyLnRzIiwid2VicGFjazovL21haS8uL3NyYy9DX1dhbGwudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0ZfUE9TVC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9kaXNwbGF5X21hemUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0ZfbGFvZF9hbmRfc2F2ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9zZXRfVURfY29udHJvbGxlcy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9zZXRfY29udHJvbGxlcy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9zZXRfbW92ZV9jb250cm9sbGVzLnRzIiwid2VicGFjazovL21haS8uL3NyYy9UX0N0bHNNb2RlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9UX0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvVF9NektpbmQudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9tYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL21haV9tYXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgX19pbml0X2FyZyA9IHtcclxuICAgIGlkPzogICAgICAgbnVtYmVyLCBcclxuICAgIHNhdmVfaWQ/OiAgbnVtYmVyLCBcclxuICAgIHRlYW1faWQ/OiAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgc3RyaW5nLCBcclxuICAgIGlzX2hlcm8/OiAgc3RyaW5nfGJvb2xlYW47XHJcbiAgICBpc19hbGl2ZT86IHN0cmluZ3xib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBKU09OX0hlcm8gPSB7XHJcbiAgICBpZD86ICAgICAgIG51bWJlciwgXHJcbiAgICBzYXZlX2lkPzogIG51bWJlciwgXHJcbiAgICB0ZWFtX2lkPzogIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgIHN0cmluZywgXHJcbiAgICBpc19oZXJvPzogIHN0cmluZztcclxuICAgIGlzX2FsaXZlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfaGVyb2VzX2luZm8oYTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogdm9pZCB7IFxyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoJ051bWJlciBvZiBIZXJvID0gJyArIGEubGVuZ3RoLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhKSB7XHJcbiAgICAgICAgaWYgKGFbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgYWxlcnQoXCJIZXJvW1wiICsgaS50b1N0cmluZygpICsgXCJdIEluZm86XFxuXCIgXHJcbiAgICAgICAgICAgICsgXCJcXG5pZDogICAgICAgXCIgICAgICsgKGFbaV0/LmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5uYW1lOiAgICAgXCIgICAgICsgKGFbaV0/Lm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5zYXZlX2lkOiAgXCIgICAgICsgKGFbaV0/LnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG50ZWFtX2lkOiAgXCIgICAgICsgKGFbaV0/LnRlYW1faWQgICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19oZXJvOiAgXCIgICAgICsgKGFbaV0/LmlzX2hlcm8gICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5pc19hbGl2ZTogXCIgICAgICsgKGFbaV0/LmlzX2FsaXZlICA/PyAnPycpXHJcbiAgICAgICAgICAgICsgXCJcXG5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX0hlcm8ge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCB0ZWFtX2lkOiAgbnVtYmVyOyBcclxuICAgIHByb3RlY3RlZCBpc19oZXJvOiAgYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBpc19hbGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IF9faW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgID0gMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgID0gJ05vIE5hbWUgSGVybyc7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkICA9IDA7XHJcbiAgICAgICAgdGhpcy50ZWFtX2lkICA9IDA7XHJcbiAgICAgICAgdGhpcy5pc19oZXJvICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc19hbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoYSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0KGE6IF9faW5pdF9hcmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgPSBhLmlkICAgICAgPz8gdGhpcy5teV9pZFxyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IGEubmFtZSAgICA/PyB0aGlzLm15X25hbWU7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gYS5zYXZlX2lkID8/IHRoaXMuc2F2ZV9pZFxyXG4gICAgICAgIHRoaXMudGVhbV9pZCA9IGEudGVhbV9pZCA/PyB0aGlzLnRlYW1faWRcclxuICAgICAgICBpZiAoYS5pc19oZXJvICAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYS5pc19oZXJvICA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfaGVybyAgPSBhLmlzX2hlcm87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2hlcm8gID0gKGEuaXNfaGVybyAgIT0gJ04nKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmlzX2FsaXZlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhLmlzX2FsaXZlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19hbGl2ZSA9IGEuaXNfYWxpdmU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2FsaXZlID0gKGEuaXNfYWxpdmUgIT0gJ04nKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogX19pbml0X2FyZykge1xyXG4gICAgICAgIHRoaXMuX19pbml0KGFyZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0hlcm9fJyArIHRoaXMubXlfaWQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDUsICcwJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm15X25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fSGVybyB7XHJcbiAgICAgICAgY29uc3QgcmV0OiBKU09OX0hlcm8gPSB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6ICAgdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICB0ZWFtX2lkOiAgIHRoaXMudGVhbV9pZCxcclxuICAgICAgICAgICAgaXNfaGVybzogICh0aGlzLmlzX2hlcm8pICA/ICdZJyA6ICdOJywgXHJcbiAgICAgICAgICAgIGlzX2FsaXZlOiAodGhpcy5pc19hbGl2ZSkgPyAnWScgOiAnTicsIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX0hlcm98dW5kZWZpbmVkKTogQ19IZXJvIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS5pZCAgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X2lkICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfbmFtZSA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS50ZWFtX2lkICAhPT0gdW5kZWZpbmVkKSB0aGlzLnRlYW1faWQgICA9IGEudGVhbV9pZDtcclxuICAgICAgICBpZiAoYS5pc19oZXJvICAhPT0gdW5kZWZpbmVkKSAgdGhpcy5pc19oZXJvICA9IChhLmlzX2hlcm8gICE9ICdOJykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKGEuaXNfYWxpdmUgIT09IHVuZGVmaW5lZCkgIHRoaXMuaXNfYWxpdmUgPSAoYS5pc19hbGl2ZSAhPSAnTicpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVfaGVybygpOiBDX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IG5ld19oZXJvID0gbmV3IENfSGVybygpO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe2lkOiAgICBNYXRoLmZsb29yKC0xMDAwLjAgKiBNYXRoLnJhbmRvbSgpKX0pO1xyXG4gICAgICAgIG5ld19oZXJvLnNldF9wcnAoe25hbWU6ICBuZXdfaGVyby5pZCgpfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19oZXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGVfaGVyb2VzKGhlcm9lczogQ19IZXJvW10pOiBKU09OX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzX2RhdGEgPSBbXSBhcyBKU09OX0hlcm9bXTtcclxuICAgICAgICBmb3IgKHZhciBoZXJvIG9mIGhlcm9lcykge1xyXG4gICAgICAgICAgICBoZXJvZXNfZGF0YS5wdXNoKGhlcm8uZW5jb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZV9oZXJvZXMoaGVyb2VzX2RhdGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IENfSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXMgPSBbXSBhcyBDX0hlcm9bXTtcclxuICAgICAgICBpZiAoaGVyb2VzX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBoZXJvX2RhdGEgb2YgaGVyb2VzX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGhlcm9lcy5wdXNoKG5ldyBDX0hlcm8oKS5kZWNvZGUoaGVyb19kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlcm9lcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRfTXpLaW5kLCBUX1J2TXpLaW5kIH0gZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1JhbmdlIH0gICAgICBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcbmltcG9ydCB7IElfRXhpc3QgfSAgICAgIGZyb20gXCIuL0lfRXZlbnRNYXBcIjtcclxuaW1wb3J0IHsgZ19kZWJ1Z19tb2RlIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGdfdGVhbSB9ICAgICAgIGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgSlNPTl9NYXplID0ge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlcixcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiAgIHN0cmluZyxcclxuICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV96PzogIG51bWJlcixcclxuICAgIG1hemU/OiAgICBzdHJpbmcsIFxyXG4gICAgbWFzaz86ICAgIHN0cmluZywgXHJcbiAgICBvYmpzPzogICAgb2JqZWN0W10sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9tYXplX2luZm8oYTogSlNPTl9NYXplfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGFsZXJ0KFwiTWF6ZSBJbmZvOlwiXHJcbiAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKGEuaWQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmZsb29yOiBcIiAgICsgKGEuZmxvb3IgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKGEuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiBcIiAgICsgKGEudGl0bGUgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKGEuc2l6ZV94ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKGEuc2l6ZV95ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICsgKGEuc2l6ZV96ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuICAgIGFsZXJ0KFxyXG4gICAgICAgIFwibWF6ZTpcXG5cIiAgICArIChhLm1hemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVydChcclxuICAgICAgICBcIm1hc2s6XFxuXCIgICAgKyAoYS5tYXNrID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDX01hemVDZWxsICB7XHJcbiAgICBwcm90ZWN0ZWQgY2VsbDogVF9NektpbmQ7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZTogQ19NYXplO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG06IENfTWF6ZSwgdj86IFRfTXpLaW5kKTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtOiBDX01hemUsIG4/OiBudW1iZXIpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG06IENfTWF6ZSwgYT86IGFueSkge1xyXG4gICAgICAgIHRoaXMuY2VsbCA9IFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIHRoaXMubWF6ZSA9IG07XHJcbiAgICAgICAgdGhpcy5zZXQoYSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0KCk6ICBUX016S2luZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQodj86IFRfTXpLaW5kKTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQobj86IG51bWJlcik6IHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KGE/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsID0gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGwgPSBUX1J2TXpLaW5kW2FdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsID0gYSBhcyBUX016S2luZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGwgPSBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9faW50KHY/OiBUX016S2luZCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgIGtpbmQ6ICBUX016S2luZCA9IHYgPz8gdGhpcy5jZWxsO1xyXG4gICAgICAgIHJldHVybiBraW5kIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9faW50KGtpbmQ6IFRfTXpLaW5kKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4ga2luZCBhcyBudW1iZXI7XHJcbiAgICB9XHJcbiAgICAvLyDmma7pgJrjgatuZXfjgZnjgozjgbDoia/jgYTjga7jgafjgZ/jgbbjgpPopoHjgonjgarjgYRcclxuICAgIC8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21faW50KG51bTogbnVtYmVyKTogQ19NYXplQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX01hemVDZWxsKG51bSk7XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHRvX2xldHRlcih2PzogVF9NektpbmQpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGtpbmQ6IFRfTXpLaW5kID0gdiA/PyB0aGlzLmNlbGw7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZUNlbGwudG9fbGV0dGVyKGtpbmQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyB0b19sZXR0ZXIoa2luZDogVF9NektpbmQpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOiByZXR1cm4gJ+OAgCc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IHJldHVybiAn44O7JztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTogcmV0dXJuICfvvIMnO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVua3duOiByZXR1cm4gJ++8nyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6IHJldHVybiAn5LiKJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjogcmV0dXJuICfkuIsnO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOiByZXR1cm4gJ+mAmic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRW1wdHk6IHJldHVybiAn77yvJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Ob0RlZjogcmV0dXJuICfvvLgnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ++8uCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGZyb21fbGV0dGVyKHN0cjogc3RyaW5nKTogVF9NektpbmQge1xyXG4gICAgICAgIHRoaXMuY2VsbCA9IENfTWF6ZUNlbGwuZnJvbV9sZXR0ZXIoc3RyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX2xldHRlcihzdHI6IHN0cmluZyk6IFRfTXpLaW5kIHtcclxuICAgICAgICBzd2l0Y2ggKHN0cikge1xyXG4gICAgICAgICAgICBjYXNlICfjgIAnOiByZXR1cm4gVF9NektpbmQuRmxvb3I7XHJcbiAgICAgICAgICAgIGNhc2UgJ+ODuyc6IHJldHVybiBUX016S2luZC5VbmV4cDtcclxuICAgICAgICAgICAgY2FzZSAn77yDJzogcmV0dXJuIFRfTXpLaW5kLlN0b25lO1xyXG4gICAgICAgICAgICBjYXNlICfvvJ8nOiByZXR1cm4gVF9NektpbmQuVW5rd247XHJcbiAgICAgICAgICAgIGNhc2UgJ+S4iic6IHJldHVybiBUX016S2luZC5TdHJVcDtcclxuICAgICAgICAgICAgY2FzZSAn5LiLJzogcmV0dXJuIFRfTXpLaW5kLlN0ckRuO1xyXG4gICAgICAgICAgICBjYXNlICfpgJonOiByZXR1cm4gVF9NektpbmQuU3RyVUQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ++8ryc6IHJldHVybiBUX016S2luZC5FbXB0eTtcclxuICAgICAgICAgICAgY2FzZSAn77y4JzogcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENfTWF6ZUNlbGwuZW5jb2RlKHRoaXMuY2VsbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZSh2OiBUX016S2luZCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh2IGFzIG51bWJlcikudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShzdHI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2VsbCA9IENfTWF6ZUNlbGwuZGVjb2RlKHN0cik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZShzdHI6IHN0cmluZyk6IFRfTXpLaW5kIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxNikgYXMgVF9NektpbmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemUge1xyXG4gICAgcHJvdGVjdGVkIG1hemVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBmbG9vcjogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHRpdGxlOiAgICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbGF5ZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogICAgIENfUmFuZ2U7XHJcbiAgICBwcm90ZWN0ZWQgY2VsbHM6ICAgIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICBwcm90ZWN0ZWQgbWFza3M6ICAgIGJvb2xlYW5bXVtdW107XHJcbiAgICBwcm90ZWN0ZWQgb2JqczogICAgIElfRXhpc3RbXTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB7bWF6ZV9pZCA9IC0xLCBzYXZlX2lkID0gLTEsIGZsb29yID0gMCwgdGl0bGUgPSAnJywgc2l6ZV94ID0gMywgc2l6ZV95ID0gMywgc2l6ZV96ID0gMX06IHtcclxuICAgICAgICAgICAgbWF6ZV9pZD86IG51bWJlcixcclxuICAgICAgICAgICAgc2F2ZV9pZD86IG51bWJlcixcclxuICAgICAgICAgICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgICAgICAgICAgdGl0bGU/OiAgIHN0cmluZyxcclxuICAgICAgICAgICAgc2l6ZV94PzogIG51bWJlcixcclxuICAgICAgICAgICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgICAgICAgICAgc2l6ZV96PzogIG51bWJlcixcclxuICAgICAgICB9XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSBtYXplX2lkO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCA9IHNhdmVfaWQ7XHJcbiAgICAgICAgdGhpcy5mbG9vciAgID0gZmxvb3I7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoc2l6ZV94IC0gMSwgc2l6ZV95IC0gMSwgc2l6ZV96IC0gMSkpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0gW10gYXMgSV9FeGlzdFtdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXQoXHJcbiAgICAgICAge21hemVfaWQsIHNhdmVfaWQsIGZsb29yLCB0aXRsZSwgc2l6ZV94LCBzaXplX3ksIHNpemVfen06IHtcclxuICAgICAgICAgICAgbWF6ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGZsb29yOiAgIG51bWJlcixcclxuICAgICAgICAgICAgdGl0bGU6ICAgc3RyaW5nLFxyXG4gICAgICAgICAgICBzaXplX3g6ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfeTogIG51bWJlcixcclxuICAgICAgICAgICAgc2l6ZV96OiAgbnVtYmVyLFxyXG4gICAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubWF6ZV9pZCA9IG1hemVfaWQ7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gc2F2ZV9pZDtcclxuICAgICAgICB0aGlzLmZsb29yICAgPSBmbG9vcjtcclxuICAgICAgICB0aGlzLnRpdGxlICAgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnNpemUgICAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludChzaXplX3ggLSAxLCBzaXplX3kgLSAxLCBzaXplX3ogLSAxKSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICB0aGlzLm9ianMgICAgPSBbXSBhcyBJX0V4aXN0W107XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hemUoa2luZDogVF9NektpbmQgPSBUX016S2luZC5TdG9uZSk6IENfTWF6ZUNlbGxbXVtdW10ge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsczogQ19NYXplQ2VsbFtdW11bXSA9IEFycmF5KHNpemVfeikgYXMgQ19NYXplQ2VsbFtdW11bXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIGNlbGxzW3pdID0gQXJyYXkoc2l6ZV95KSBhcyBDX01hemVDZWxsW11bXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY2VsbHNbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBDX01hemVDZWxsW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbel1beV1beF0gPSBuZXcgQ19NYXplQ2VsbCh0aGlzLCBraW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0X21hc2soWU46IGJvb2xlYW4pOiBib29sZWFuW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFza3M6IGJvb2xlYW5bXVtdW10gPSBBcnJheShzaXplX3opIGFzIGJvb2xlYW5bXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBtYXNrc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgYm9vbGVhbltdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIG1hc2tzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgYm9vbGVhbltdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tzW3pdW3ldW3hdID0gWU47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUud2l0aGluKHApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDjg6HjgqTjgrrlhoXjga7jgqrjg5bjgrjjgqfjgq/jg4jjgoTjg6Ljg7Pjgrnjgr/jg7znrYnjga7phY3nva5cclxuICAgIHB1YmxpYyBhZGRfb2JqKG9iajogSV9FeGlzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2Jqcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlX29iaihvYmo6IElfRXhpc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianMgPSB0aGlzLm9ianMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCgpICE9PSBvYmouaWQoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29ial94eXooeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IElfRXhpc3R8bnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X29iaihuZXcgQ19Qb2ludCh4LCB5LCB6KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X29iaihwOiBDX1BvaW50KTogSV9FeGlzdHxudWxsIHtcclxuICAgICAgICB2YXIgbGF5ZXIgPSAtMTtcclxuICAgICAgICB2YXIgb2JqOiBJX0V4aXN0fG51bGwgICA9IG51bGw7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMub2Jqcykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS53aXRoaW4ocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmxheWVyKCkgPiBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gaXRlbS5sYXllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVhbeOBjOadpeOBn+ODneOCpOODs+ODiOOBjOacqui4j+WcsOOBoOOBo+OBn+OCieOBn+OBoOOBruW6iuOBq+WkieOBiOOCi1xyXG4gICAgcHVibGljIGNoYW5nZV91bmV4cF90b19mbG9vcigpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRfY2VsbChnX3RlYW0uZ2V0X3AoKSkgPT0gVF9NektpbmQuVW5leHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfY2VsbChnX3RlYW0uZ2V0X3AoKSwgVF9NektpbmQuRmxvb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAyROODnuODg+ODl+OBruODnuOCueOCr+WkluOBl+mWoumAo1xyXG4gICAgcHVibGljIGNsZWFyX21hc2tfYXJvdW5kX3RoZV90ZWFtKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOePvuWcqOWcsOOBqOecn+aoquOBr+iHquWLleeahOOBq+imi+OBiOOCi1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKDAsIC0xKSk7XHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoMCwgIDApKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZCgwLCAgMSkpO1xyXG5cclxuICAgICAgICBjb25zdCBkZXB0aCAgID0gIDU7IC8vIDJE44Oe44OD44OX55So44Gu5aWl6KGM44GN6ZmQ55WMXHJcblxyXG4gICAgICAgIC8vIOWJjeaWueOBruimi+mAmuOBl+OCkuODgeOCp+ODg+OCr+OBl+OBquOBjOOCieimi+OBiOOCi+OBqOOBk+OCjeOBr+ino+aUvuOBmeOCi1xyXG4gICAgICAgIGZvciAodmFyIGQgPSAxOyBkIDwgZGVwdGg7IGQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmcm9udF9wb3MgPSBnX3RlYW0uZ2V0X2Fyb3VuZChkLCAwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc19tb3ZhYmxlKGZyb250X3BvcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBq+manOWus+eJqeOBjOeEoeOBkeOCjOOBsOOAgeOBneOBruS4oeWBtOOCguimi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsICAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44GM6Zqc5a6z54mp44Gn44KC44Gd44Gu5omL5YmN44G+44Gn6KaL44GI44Gm44Gf44Gq44KJ44CB44Gd44Gu5aOB44Go5Lih5YG044Gv6KaL44GI44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsICAxKSk7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYzmnInjgaPjgZ/jgonjgZ3jga7lpaXjga/opovjgYjjgarjgYTjga7jgafmjqLntKLntYLkuoZcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fY2xlYXJfbWFzayhjbHJfcG9zOiBDX1BvaW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKGNscl9wb3MpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tYXNrc1tjbHJfcG9zLnpdW2Nscl9wb3MueV1bY2xyX3Bvcy54XSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc19tb3ZhYmxlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0X2NlbGwocCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHB1YmxpYyBnZXRfeF9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeCgpO31cclxuICAgIHB1YmxpYyBnZXRfeV9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeSgpO31cclxuICAgIHB1YmxpYyBnZXRfel9tYXgoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5zaXplLnNpemVfeigpO31cclxuICAgIHB1YmxpYyBnZXRfbWF6ZV9jZWxsIChwOiBDX1BvaW50KTogQ19NYXplQ2VsbHxudWxsIHsgLy8g44Gf44G244KT6KaB44KJ44Gq44GE44Oh44K944OD44OJXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9jZWxsIChwOiBDX1BvaW50KTogVF9NektpbmQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5nZXQoKTtcclxuICAgICAgICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2NlbGwgKHA6IENfUG9pbnQsIGs6IFRfTXpLaW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0uc2V0KGspO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9tb3ZlKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fVUQocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzX21vdmFibGUocCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKHA6IENfUG9pbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLnRvX2xldHRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX3N0cmluZyhmbG9vcjogbnVtYmVyID0gMCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuXHJcbiAgICAgICAgdmFyIHJldF9zdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5nZXRfb2JqX3h5eih4LCB5LCBmbG9vcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdfZGVidWdfbW9kZSAmJiB0aGlzLm1hc2tzW2Zsb29yXVt5XVt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gJ+KWoCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmogPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSB0aGlzLmNlbGxzW2Zsb29yXVt5XVt4XS50b19sZXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IG9iai50b19sZXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0X3N0ciArPSBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0X3N0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9NYXplIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMuY2VsbHNbel1beV1beF0uZW5jb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXplX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5tYXNrc1t6XVt5XVt4XSA/ICcxJyA6ICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hc2tfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMubWF6ZV9pZCxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBmbG9vcjogICB0aGlzLmZsb29yLFxyXG4gICAgICAgICAgICB0aXRsZTogICB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICBzaXplX3g6ICB0aGlzLnNpemUuc2l6ZV94KCksXHJcbiAgICAgICAgICAgIHNpemVfeTogIHRoaXMuc2l6ZS5zaXplX3koKSxcclxuICAgICAgICAgICAgc2l6ZV96OiAgdGhpcy5zaXplLnNpemVfeigpLFxyXG4gICAgICAgICAgICBtYXplOiAgICBtYXplX3N0cixcclxuICAgICAgICAgICAgbWFzazogICAgbWFza19zdHIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX01hemV8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubWF6ZV9pZCA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEuZmxvb3IgICAhPT0gdW5kZWZpbmVkKSB0aGlzLmZsb29yICAgPSBhLmZsb29yO1xyXG4gICAgICAgIGlmIChhLnRpdGxlICAgIT09IHVuZGVmaW5lZCkgdGhpcy50aXRsZSAgID0gYS50aXRsZTtcclxuICAgICAgICBpZiAoYS5vYmpzICAgICE9PSB1bmRlZmluZWQpIHRoaXMub2JqcyAgICA9IGEub2JqcyBhcyBJX0V4aXN0W107XHJcblxyXG4gICAgICAgIGlmIChhLnNpemVfeCAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV95ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3ogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgICAgICBuZXcgQ19Qb2ludChhLnNpemVfeCAtIDEsIGEuc2l6ZV95IC0gMSwgYS5zaXplX3ogLSAxKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChhLm1hemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdLnNldChUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXplLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihzaXplX3osIHpfYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oc2l6ZV95LCB5X2FycmF5Lmxlbmd0aCk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihzaXplX3gsIHhfYXJyYXkubGVuZ3RoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0uZGVjb2RlKHhfYXJyYXlbeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLm1hc2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWFzay5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oc2l6ZV96LCB6X2FycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKHNpemVfeSwgeV9hcnJheS5sZW5ndGgpOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oc2l6ZV94LCB4X2FycmF5Lmxlbmd0aCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeF9hcnJheVt4XSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiAgX21pbihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGEgPD0gYikgPyBhIDogYjtcclxufVxyXG5mdW5jdGlvbiAgX21heChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGEgPj0gYikgPyBhIDogYjtcclxufVxyXG5cclxuIiwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplVmlld01lc3NhZ2Uge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyAgbWUgOiBDX01hemVWaWV3TWVzc2FnZTtcclxuICAgIHByb3RlY3RlZCBwICA6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBDX01hemVWaWV3TWVzc2FnZS5tZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01hemVfdmlld19tZXNzYWdlJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgQ19NYXplVmlld01lc3NhZ2UubWUuY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogQ19NYXplVmlld01lc3NhZ2UgIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWUgIT09IFwib2JqZWN0XCIgfHwgISh0aGlzLm1lIGluc3RhbmNlb2YgQ19NYXplVmlld01lc3NhZ2UpKSBcclxuICAgICAgICAgICAgdGhpcy5tZSA9IG5ldyBDX01hemVWaWV3TWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRpc3BsYXlfbWVzc2FnZShtZXM6IHN0cmluZywgZnJfY29sb3IgPSAnaW5oZXJpdCcsIGJnX2NvbG9yOiBzdHJpbmcgPSAnaW5oZXJpdCcpIHtcclxuICAgICAgICB0aGlzLnAuc3R5bGUuc2V0UHJvcGVydHkoJ2NvbG9yJywgICAgICAgICAgICBmcl9jb2xvcik7XHJcbiAgICAgICAgdGhpcy5wLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgYmdfY29sb3IpO1xyXG4gICAgICAgIHRoaXMucC5pbm5lckhUTUwgPSBtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyX21lc3NhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UoJ+OAgCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5vcm1hbF9tZXNzYWdlKG1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UobWVzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBub3RpY2VfbWVzc2FnZShtZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKG1lcywgJyMwMDY2MDAnLCAnI2NjZmZjYycpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdhcm5pbmdfbWVzc2FnZShtZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKG1lcywgJyNmZmZmZmYnLCAnI2ZmMDAwMCcpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB0eXBlIEpTT05fUG9pbnQgPSB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXIsXHJcbiAgICB6OiBudW1iZXIsXHJcbn1cclxuZXhwb3J0IGNsYXNzIENfUG9pbnQge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgejogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXJ8Q19Qb2ludHxKU09OX1BvaW50LCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKSB7XHJcbi8vICAgICAgICBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgeCBpbnN0YW5jZW9mIENfUG9pbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHkgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHogPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geC54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB4Lnk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHguejtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAtMjtcclxuICAgICAgICAgICAgdGhpcy55ID0gLTI7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IC0yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAocC54ID09IHRoaXMueCAmJiBwLnkgPT0gdGhpcy55ICYmIHAueiA9PSB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1BvaW50IHtcclxuICAgICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnp9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1BvaW50KTogQ19Qb2ludCB7XHJcbiAgICAgICAgdGhpcy54ID0gYS54OyB0aGlzLnkgPSBhLnk7IHRoaXMueiA9IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IENfUG9pbnQgfSBmcm9tIFwiLi9DX1BvaW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ19SYW5nZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWluOiBDX1BvaW50O1xyXG4gICAgcHJvdGVjdGVkIG1heDogQ19Qb2ludDtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwMTogQ19Qb2ludCwgcDI6IENfUG9pbnQpIHtcclxuICAgICAgICBjb25zdCBtaW5feCA9IF9taW4ocDEueCwgcDIueCk7XHJcbiAgICAgICAgY29uc3QgbWF4X3ggPSBfbWF4KHAxLngsIHAyLngpO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feSA9IF9taW4ocDEueSwgcDIueSk7XHJcbiAgICAgICAgY29uc3QgbWF4X3kgPSBfbWF4KHAxLnksIHAyLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5feiA9IF9taW4ocDEueiwgcDIueik7XHJcbiAgICAgICAgY29uc3QgbWF4X3ogPSBfbWF4KHAxLnosIHAyLnopO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiAgPSBuZXcgQ19Qb2ludChtaW5feCwgbWluX3ksIG1pbl96KTtcclxuICAgICAgICB0aGlzLm1heCAgPSBuZXcgQ19Qb2ludChtYXhfeCwgbWF4X3ksIG1heF96KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4oYTogQ19SYW5nZXxDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1BvaW50KSB7IFxyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1BvaW50O1xyXG4gICAgICAgICAgICBpZiAoIHAueCA8IHRoaXMubWluLnggfHwgcC54ID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnkgPCB0aGlzLm1pbi55IHx8IHAueSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC56IDwgdGhpcy5taW4ueiB8fCBwLnogPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIGEgaW5zdGFuY2VvZiBDX1JhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUmFuZ2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feCgpIDwgdGhpcy5taW4ueCB8fCBwLm1heF94KCkgPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3koKSA8IHRoaXMubWluLnkgfHwgcC5tYXhfeSgpID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl96KCkgPCB0aGlzLm1pbi56IHx8IHAubWF4X3ooKSA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbWluX3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLng7fVxyXG4gICAgcHVibGljIG1heF94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC54O31cclxuICAgIHB1YmxpYyBtaW5feSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueTt9XHJcbiAgICBwdWJsaWMgbWF4X3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lnk7fVxyXG4gICAgcHVibGljIG1pbl96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi56O31cclxuICAgIHB1YmxpYyBtYXhfeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXguejt9XHJcbiAgICBwdWJsaWMgc2l6ZV94KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV95KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnkgLSB0aGlzLm1pbi55ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2l6ZV96KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56ICsgMTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgZG9fYWxsX3h5eihmbjogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBmb3IgKHZhciB6ID0gdGhpcy5taW4uejsgeiA8PSB0aGlzLm1heC56OyB6KysgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0aGlzLm1pbi55OyB5IDw9IHRoaXMubWF4Lnk7IHkrKyApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSB0aGlzLm1pbi54OyB5IDw9IHRoaXMubWF4Lng7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKHgsIHksIHgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gIF9taW4oYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhIDw9IGIpID8gYSA6IGI7XHJcbn1cclxuZnVuY3Rpb24gIF9tYXgoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhID49IGIpID8gYSA6IGI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSV9FeGlzdCwgSV9IYXNIb3BlLCBJX0hvcGVBY3Rpb24gfSBmcm9tIFwiLi9JX0V2ZW50TWFwXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5pbXBvcnQgeyBDX1dhbGtlciB9ICAgIGZyb20gXCIuL0NfV2Fsa2VyXCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgQ19IZXJvLCBKU09OX0hlcm8gfSAgICAgIGZyb20gXCIuL0NfSGVyb1wiO1xyXG5cclxudHlwZSBfX2luaXRfYXJnID0ge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlciwgXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsIFxyXG4gICAgaGVyb2VzPzogIENfSGVyb1tdLCBcclxuICAgIHA/OiAgICAgICBDX1BvaW50LCBcclxuICAgIHg/OiAgICAgICBudW1iZXIsXHJcbiAgICB5PzogICAgICAgbnVtYmVyLFxyXG4gICAgej86ICAgICAgIG51bWJlcixcclxuICAgIGQ/OiAgICAgICBUX0RpcmVjdGlvbixcclxuICAgIG1vdGlvbj86ICBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEpTT05fVGVhbSA9IHtcclxuICAgIGlkPzogICAgICBudW1iZXIsIFxyXG4gICAgc2F2ZV9pZD86IG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLCBcclxuICAgIHBvaW50PzogIHt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyfSwgXHJcbiAgICB4PzogICAgICAgbnVtYmVyLFxyXG4gICAgeT86ICAgICAgIG51bWJlcixcclxuICAgIHo/OiAgICAgICBudW1iZXIsXHJcbiAgICBkaXJlY3Q/OiB7ZDogbnVtYmVyfSxcclxuICAgIGhlcm9lcz86ICBKU09OX0hlcm9bXSwgXHJcbiAgICBtb3Rpb24/OiAgc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfdGVhbV9pbmZvKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KFwiVGVhbSBJbmZvOlwiIFxyXG4gICAgICAgICsgXCJcXG5pZDogICAgXCIgICAgICsgKGEuaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxubmFtZTogIFwiICAgICArIChhLm5hbWUgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmVfaWQ6IFwiICAgKyAoYS5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeDogXCIgICAgICsgKGEucG9pbnQ/LnggID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3k6IFwiICAgICArIChhLnBvaW50Py55ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl96OiBcIiAgICAgKyAoYS5wb2ludD8ueiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfZDogXCIgICAgICsgKGEuZGlyZWN0Py5kID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4vLyAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkgYWxlcnRfaGVyb2VzX2luZm8oYS5oZXJvZXMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENfVGVhbSBpbXBsZW1lbnRzIElfRXhpc3Qge1xyXG4gICAgcHJvdGVjdGVkIG15X2lkOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbmFtZTogIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHdhbGtlcjogICBDX1dhbGtlcjtcclxuICAgIHByb3RlY3RlZCBteV9sYXllcjogbnVtYmVyID0gOTk7XHJcbiAgICBwcm90ZWN0ZWQgaGVyb2VzOiAgIENfSGVyb1tdO1xyXG5cclxuICAgIHByb3RlY3RlZCBob3BlX21vdGlvbjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogX19pbml0X2FyZykge1xyXG5cclxuICAgICAgICB0aGlzLm15X2lkICAgPSBhPy5pZCA/PyAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IGE/Lm5hbWUgPz8gJ05lbyBUZWFtPyc7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gYT8uc2F2ZV9pZCA/PyAwO1xyXG4gICAgICAgIHRoaXMud2Fsa2VyID0gbmV3IENfV2Fsa2VyKCk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmhvcGVfbW90aW9uID0gYT8ubW90aW9uID8/ICdOT1AnOyAgICBcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChhKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXQoYTogX19pbml0X2FyZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICA9IGEuaWQgICAgICA/PyB0aGlzLm15X2lkXHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gYS5uYW1lICAgID8/IHRoaXMubXlfbmFtZTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSBhLnNhdmVfaWQgPz8gdGhpcy5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnAgIT09IHVuZGVmaW5lZCkgdGhpcy53YWxrZXIuc2V0X3AoYS5wKTtcclxuICAgICAgICBpZiAoYS54ICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF94KGEueCk7XHJcbiAgICAgICAgaWYgKGEueSAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfeChhLnkpO1xyXG4gICAgICAgIGlmIChhLnogIT09IHVuZGVmaW5lZCkgdGhpcy53YWxrZXIuc2V0X3goYS56KTtcclxuICAgICAgICBpZiAoYS5kICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF9kaXIoYS5kKTtcclxuICAgICAgICB0aGlzLmhvcGVfbW90aW9uID0gYS5tb3Rpb24gPz8gdGhpcy5ob3BlX21vdGlvbjsgXHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaGVybyBvZiBhLmhlcm9lcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRfaGVybyhoZXJvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IF9faW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLl9faW5pdChhcmcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdUZWFtXycgKyB0aGlzLm15X2lkLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg1LCAnMCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaGVyZSA9IHRoaXMud2Fsa2VyLmdldF9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGhlcmUud2l0aGluKHApOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBsYXllcigpOiBudW1iZXIge3JldHVybiB0aGlzLm15X2xheWVyO31cclxuICAgIHB1YmxpYyBzZXRfbGF5ZXIobGF5ZXI6IG51bWJlcik6IHZvaWQge3RoaXMubXlfbGF5ZXIgPSBsYXllcjt9XHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKCk6IHN0cmluZ3xudWxsIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMud2Fsa2VyLmdldF9kaXIoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHJldHVybiAn4oaRJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiByZXR1cm4gJ+KGkic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcmV0dXJuICfihpMnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHJldHVybiAn4oaQJztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfwn4yAJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3AoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyLmdldF9wKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3AocDpDX1BvaW50LCBkPzogVF9EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfcChwLCBkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfeigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh6IDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF96KHopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kaXIoKTogVF9EaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfZGlyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X2RpcihkOiBUX0RpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF9kaXIoZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9hcm91bmQoZnJvbnQ6IG51bWJlciwgcmlnaHQ6bnVtYmVyLCB1cDogbnVtYmVyID0gMCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfYXJvdW5kKGZyb250LCByaWdodCwgdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBob3BlX3BfZndkKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3BfZndkKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy53YWxrZXIuc2V0X3BfZndkKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX2JhaygpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wX2JhaygpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMud2Fsa2VyLnNldF9wX2JhaygpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfdHVybl9yKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlR1cm5cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3AoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLndhbGtlci50dXJuX3IoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fbCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy53YWxrZXIudHVybl9sKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF91cCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJVcFwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcF91cCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX3VwKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV9wX2Rvd24oKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiRG93blwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcF9kb3duKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfZG93bigpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlX3BfdXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3BfdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlX3BfZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfcF9kb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTkcoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBlbmRfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcy5wdXNoKGhlcm8pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0gdGhpcy5oZXJvZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBoZXJvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fVGVhbSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMud2Fsa2VyLmdldF94KCk7XHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMud2Fsa2VyLmdldF95KCk7XHJcbiAgICAgICAgY29uc3QgeiA9IHRoaXMud2Fsa2VyLmdldF96KCk7XHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMud2Fsa2VyLmdldF9kaXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5teV9pZCxcclxuICAgICAgICAgICAgbmFtZTogICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHBvaW50OiAgIHt4OiB4LCB5OiB5LCB6OiB6fSxcclxuICAgICAgICAgICAgZGlyZWN0OiAge2Q6IGR9LFxyXG4gICAgICAgICAgICBoZXJvZXM6ICBDX0hlcm8uZW5jb2RlX2hlcm9lcyh0aGlzLmhlcm9lcyksXHJcbiAgICAgICAgICAgIG1vdGlvbjogIHRoaXMuaG9wZV9tb3Rpb24sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IENfVGVhbSB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5teV9pZCAgICAgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X25hbWUgICAgID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgICA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5tb3Rpb24gIT09IHVuZGVmaW5lZCkgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGEucG9pbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYS5wb2ludCA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLndhbGtlci5kZWNvZGUoYS5wb2ludCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAoYS54ICE9PSB1bmRlZmluZWQgJiYgYS55ICE9PSB1bmRlZmluZWQgJiYgYS56ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrZXIuZGVjb2RlKHt4OiBhLngsIHk6IGEueSwgejogYS56fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5kaXJlY3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYS5wb2ludCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrZXIuZGVjb2RlKGEuZGlyZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyb2VzID0gQ19IZXJvLmRlY29kZV9oZXJvZXMoYS5oZXJvZXMpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHR5cGUgVF9BdHRyID0ge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9O1xyXG5cclxuZXhwb3J0IGNsYXNzIENfVXJsT3B0IHtcclxuICAgIHByb3RlY3RlZCB2OiBUX0F0dHI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iocz86ICBzdHJpbmcpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHQ/OiAgVF9BdHRyKTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudiA9IHt9IGFzIFRfQXR0cjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfZnJvbV9zdHJpbmcoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLnYgPSBhIGFzIFRfQXR0cjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnYgPSB7fSBhcyBUX0F0dHI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9rZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBrZXlfbGlzdDogc3RyaW5nW10gPSBuZXcgQXJyYXkgYXMgc3RyaW5nW107XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudikge1xyXG4gICAgICAgICAgICBrZXlfbGlzdC5wdXNoKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXlfbGlzdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMudikge1xyXG4gICAgICAgICAgICBpZiAgKHR5cGVvZiB0aGlzLnZba2V5XSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudltrZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudltrZXldIGFzIHN0cmluZztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0KHN0cjogc3RyaW5nKTogIHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KGF0cjogVF9BdHRyKTogIHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWw/OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsPzogbnVtYmVyKTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQodWtuOiBhbnksICAgIHZhbD86IHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVrbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRfZnJvbV9zdHJpbmcodWtuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZbdWtuXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZbdWtuXSA9IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdWtuID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyOiBUX0F0dHIgPSB1a24gYXMgVF9BdHRyO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gYXR0cikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W2l0ZW1dID0gYXR0cltpdGVtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMudikge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy52W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudiA9IHt9IGFzIFRfQXR0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19zdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBsZW46IG51bWJlciA9ICBPYmplY3Qua2V5cyh0aGlzLnYpLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuIDwgMSkgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICB2YXIgc3RyX2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudikge1xyXG4gICAgICAgICAgICBzdHJfYXJyYXkucHVzaChrZXkgKyBcIj1cIiArIHRoaXMudltrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJfYXJyYXkuam9pbihcIiZcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fRm9ybURhdGEoKTogRm9ybURhdGF8bnVsbCB7XHJcbiAgICAgICAgY29uc3QgbGVuOiBudW1iZXIgPSAgT2JqZWN0LmtleXModGhpcy52KS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA8IDEpICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nfG51bWJlciA9IHRoaXMudltrZXldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1fZGF0YTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzZXRfZnJvbV9zdHJpbmcoczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuYWRkX2Zyb21fc3RyaW5nKHMpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFkZF9mcm9tX3N0cmluZyhzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdHIgPSBzLnJlcGxhY2UoL14oXFw/PykoLiopJC8sICckMicpO1xyXG4gICAgICAgIGNvbnN0IHN0cl9hcnJheTogc3RyaW5nW10gPSBzdHIuc3BsaXQoXCImXCIpO1xyXG4gICAgICAgIHN0cl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleV92YWx1ZSA9IGl0ZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICBpZiAoa2V5X3ZhbHVlLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudltrZXlfdmFsdWVbMF1dID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZba2V5X3ZhbHVlWzBdXSA9IGtleV92YWx1ZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRfRGlyZWN0aW9uIH0gZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcblxyXG50eXBlIF9fSlNPTl9hcmcgPSB7XHJcbiAgICB4PzogbnVtYmVyLFxyXG4gICAgeT86IG51bWJlcixcclxuICAgIHo/OiBudW1iZXIsXHJcbiAgICBkPzogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBjbGFzcyBDX1dhbGtlciB7XHJcbiAgICBwcm90ZWN0ZWQgcDogQ19Qb2ludDtcclxuICAgIHByb3RlY3RlZCBkOiBUX0RpcmVjdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucCAgPSBuZXcgQ19Qb2ludCgpO1xyXG4gICAgICAgIHRoaXMuZCA9IFRfRGlyZWN0aW9uLk47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2RpcigpOiBUX0RpcmVjdGlvbiB7cmV0dXJuIHRoaXMuZH1cclxuICAgIHB1YmxpYyBzZXRfZGlyKGQ6IFRfRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kID0gZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnQodGhpcy5wKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcChwOiBDX1BvaW50LCBkPzogVF9EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIHRoaXMuZCA9IGQgPz8gdGhpcy5kO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF94KCk6IG51bWJlciB7cmV0dXJuIHRoaXMucC54fVxyXG4gICAgcHVibGljIGdldF95KCk6IG51bWJlciB7cmV0dXJuIHRoaXMucC55fVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7cmV0dXJuIHRoaXMucC56fVxyXG5cclxuICAgIHB1YmxpYyBzZXRfeCh4OiBudW1iZXIpOiB2b2lkIHt0aGlzLnAueCA9IHh9XHJcbiAgICBwdWJsaWMgc2V0X3koeTogbnVtYmVyKTogdm9pZCB7dGhpcy5wLnkgPSB5fVxyXG4gICAgcHVibGljIHNldF96KHo6IG51bWJlcik6IHZvaWQge3RoaXMucC56ID0gen1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BfZndkKCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgxKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9md2QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcCh0aGlzLmdldF9wX2Z3ZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9iYWsoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKC0xKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9iYWsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfcCh0aGlzLmdldF9wX2JhaygpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF91cCgpOiBDX1BvaW50IHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnQodGhpcy5wKTtcclxuICAgICAgICBwLnotLTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF91cCgpIHtcclxuICAgICAgICB0aGlzLnNldF9wKHRoaXMuZ2V0X3BfdXAoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfZG93bigpOiBDX1BvaW50IHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnQodGhpcy5wKTtcclxuICAgICAgICBwLnorKztcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcF9kb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3AodGhpcy5nZXRfcF9kb3duKCkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9fZ2V0X3BfbW92ZShvZmZzZXQ6IG51bWJlcik6Q19Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiBwLnkgLT0gb2Zmc2V0O2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHAueCArPSBvZmZzZXQ7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogcC55ICs9IG9mZnNldDticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiBwLnggLT0gb2Zmc2V0O2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfYXJvdW5kKGZyb250OiBudW1iZXIsIHJpZ2h0Om51bWJlciwgdXA6IG51bWJlcik6IENfUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IGN1cl9wb3MgPSB0aGlzLnA7XHJcbiAgICAgICAgY29uc3QgY3VyX2RpciA9IHRoaXMuZDtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ggID0gdGhpcy5wLng7XHJcbiAgICAgICAgdmFyIHRhcmdldF95ICA9IHRoaXMucC55O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeiAgPSB0aGlzLnAueiAtIHVwO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50KHRhcmdldF94LCB0YXJnZXRfeSwgdGFyZ2V0X3opO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fcigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fbCgpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5fYigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogdGhpcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBfX0pTT05fYXJnIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnAueCxcclxuICAgICAgICAgICAgeTogdGhpcy5wLnksXHJcbiAgICAgICAgICAgIHo6IHRoaXMucC56LFxyXG4gICAgICAgICAgICBkOiB0aGlzLmQgYXMgbnVtYmVyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogX19KU09OX2FyZyk6IENfV2Fsa2VyIHtcclxuICAgICAgICBpZiAoYS54ICE9PSB1bmRlZmluZWQgJiYgYS55ICE9PSB1bmRlZmluZWQgJiYgYS56ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wLnggPSBhLng7XHJcbiAgICAgICAgICAgIHRoaXMucC55ID0gYS55O1xyXG4gICAgICAgICAgICB0aGlzLnAueiA9IGEuejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuZCAhPT0gdW5kZWZpbmVkKSB0aGlzLmQgICA9IGEuZCBhcyBUX0RpcmVjdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ19SYW5nZSB9IGZyb20gXCIuL0NfUmFuZ2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFRfV2FsbCA9IHtcclxuICAgIG1pbl94OiBudW1iZXIsXHJcbiAgICBtYXhfeDogbnVtYmVyLFxyXG4gICAgbWluX3k6IG51bWJlcixcclxuICAgIG1heF95OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1dhbGwge1xyXG4gICAgcHJvdGVjdGVkIHc6IFRfV2FsbFtdW107XHJcbiAgICBwcm90ZWN0ZWQgZDogbnVtYmVyXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVwdGg6IG51bWJlciA9IDUsIHNpemU6IENfUmFuZ2UpIHtcclxuICAgICAgICBpZiAoZGVwdGggPCAzKSBkZXB0aCA9IDU7XHJcbiAgICAgICAgaWYgKGRlcHRoICUgMiAhPT0gMSkgZGVwdGgrKzsgIC8vIOWlh+aVsOOBruOBv+WvvuW/nOOAglxyXG5cclxuICAgICAgICBjb25zdCBtaW5feDogbnVtYmVyID0gc2l6ZS5taW5feCgpO1xyXG4gICAgICAgIGNvbnN0IG1pbl95OiBudW1iZXIgPSBzaXplLm1pbl95KCk7XHJcbiAgICAgICAgY29uc3QgbWF4X3g6IG51bWJlciA9IHNpemUubWF4X3goKTtcclxuICAgICAgICBjb25zdCBtYXhfeTogbnVtYmVyID0gc2l6ZS5tYXhfeSgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2VudGVyX3g6IG51bWJlciA9IChtYXhfeCAtIG1pbl94KSAvIDI7XHJcbiAgICBcclxuICAgICAgICAvLyDln7rmupbjgajjgarjgovlo4Eo5LiA55Wq6YGg44GP44Gu5aOBKeOBruato+mdouOCteOCpOOCuijmqKrluYUp44KS5rGC44KB44KLXHJcbiAgICAgICAgLy8g5LiA55Wq6YGg44GPKGRlcHRoIC0gMSnjga7lo4Hjga7mlbDjgYxkZXB0aOWAi+OBq+OBquOCi+OCiOOBhuOBq+iqv+aVtOOBmeOCi1xyXG4gICAgICAgIGNvbnN0IGZyb250X3dhbGxfc2l6ZV94OiBudW1iZXIgPSAobWF4X3ggLSBtaW5feCkgLyBkZXB0aDtcclxuXHJcbiAgICAgICAgLy8g5Z+65rqW44Go44Gq44KL5YG05aOB44Gu44K144Kk44K6KOaoquW5hSnjgpLmsYLjgoHjgotcclxuICAgICAgICAvLyDkuIDnlarpgaDjgY/jga7lo4Eo5Lit5aSuKeOBruW3puerr+OBi+OCiWRlcHRo5YCL44Gu5YG05aOB44KS5Y+W44KM44KL44KI44GG44Gr44K144Kk44K66Kq/5pW044GZ44KLXHJcbiAgICAgICAgY29uc3Qgc2lkZV93YWxsX3NpemVfeDogIG51bWJlciA9IChjZW50ZXJfeCAtIGZyb250X3dhbGxfc2l6ZV94IC8gMikgLyBkZXB0aDtcclxuICAgIFxyXG4gICAgICAgIC8vIOWQhGRlcHRo5Yil44Gu5q2j6Z2i5aOB44Gu5qiq5bmF44KS5rGC44KB44KL44CCXHJcbiAgICAgICAgLy8g6KiI566X44Gu5Yip5L6/5oCn44KS6ICD5oWu44GX44Gm44CB44OP44O844OV44K144Kk44K644KS5rGC44KB44KLXHJcbiAgICAgICAgY29uc3QgZnJvbnRfd2FsbF9IX3NpemVfeDogbnVtYmVyW10gPSBuZXcgQXJyYXkoZGVwdGggKyAxKTtcclxuICAgIFxyXG4gICAgICAgIGZyb250X3dhbGxfSF9zaXplX3hbZGVwdGhdID0gZnJvbnRfd2FsbF9zaXplX3ggLyAyO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBkZXB0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZyb250X3dhbGxfSF9zaXplX3hbaV0gPSBmcm9udF93YWxsX0hfc2l6ZV94W2kgKyAxXSArIHNpZGVfd2FsbF9zaXplX3g7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8g5aSp5LqV44Gu57im5bmF44Gu5aKX5YiG44KS5rGC44KB44KL44CC5Ymy5ZCI44Gv6YGp5b2T77yI56yR77yJXHJcbiAgICAgICAgY29uc3Qgc2lkZV93YWxsX3NpemVfVDogbnVtYmVyID0gKG1heF95IC0gbWluX3kpICogMS4wIC8gKChkZXB0aCArIDEpICogMiArIDEpO1xyXG4gICAgICAgIC8vIOW6iuOBruWil+WIhuOCkuaxguOCgeOCi+OAglxyXG4gICAgICAgIGNvbnN0IHNpZGVfd2FsbF9zaXplX0I6IG51bWJlciA9IChtYXhfeSAtIG1pbl95KSAqIDEuMCAvICgoZGVwdGggKyAxKSAqIDIgKyAxKTtcclxuICAgIFxyXG4gICAgICAgIC8vIOS7peS4iuOBruWApOOCkueUqOOBhOOBpuWQhOi3nemboihkZXB0aCnjga7mraPpnaLlo4Hjga7kvY3nva7msbrjgoHjgpLjgZnjgotcclxuICAgICAgICAvLyB3YWxs44Gu56ys5LiA5byV5pWw44Gv6Led6Zui44CB56ys5LqM5byV5pWw44Gv5bem5Y+z44Gu5L2N572u77yI5LiA55Wq5bem44GMMOOAgeS4gOeVquWPs+OBjGRlcHRoLTEpXHJcbiAgICAgICAgY29uc3Qgd2FsbDogVF9XYWxsW11bXSA9IG5ldyBBcnJheShkZXB0aCArIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGVwdGggKyAxOyBqKyspIHtcclxuICAgICAgICAgICAgd2FsbFtqXSA9IG5ldyBBcnJheShkZXB0aCArIDEpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGRlcHRoICsgMTsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3a194ID0gY2VudGVyX3ggLSBmcm9udF93YWxsX0hfc2l6ZV94W2pdICogKGRlcHRoIC0gMiAqIGspO1xyXG4gICAgICAgICAgICAgICAgd2FsbFtqXVtrXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5feDogd2tfeCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhfeDogd2tfeCAgKyBmcm9udF93YWxsX0hfc2l6ZV94W2pdICogMixcclxuICAgICAgICAgICAgICAgICAgICBtaW5feTogbWluX3kgKyBzaWRlX3dhbGxfc2l6ZV9UICogaixcclxuICAgICAgICAgICAgICAgICAgICBtYXhfeTogbWF4X3kgLSBzaWRlX3dhbGxfc2l6ZV9CICogaixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmQgPSBkZXB0aDtcclxuICAgICAgICB0aGlzLncgPSB3YWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0KGRlcHRoOiBudW1iZXIsIG9mZnNldDogbnVtYmVyKTogVF9XYWxsIHtcclxuICAgICAgICBjb25zdCBIX2RlcHQgPSAodGhpcy5kIC0gMSkgLyAyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLndbZGVwdGhdW0hfZGVwdCArIG9mZnNldF07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENfVXJsT3B0IH0gZnJvbSBcIi4vQ19VcmxPcHRcIjtcclxuaW1wb3J0IHsgZ19tdm0gfSAgICBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUX2FuZF9nZXRfSlNPTihcclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIG9wdDogQ19VcmxPcHQsIFxyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZm9ybV9kYXRhID0gb3B0LnRvX0Zvcm1EYXRhKCk7XHJcbiAgICBpZiAoZm9ybV9kYXRhID09PSBudWxsKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgcmVzOiBSZXNwb25zZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBmb3JtX2RhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoJ+mAmuS/oeOCqOODqeODvDogJyArIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb25pdG9yID0gZmFsc2U7ICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuXHJcbiAgICB2YXIgdHh0OlByb21pc2U8c3RyaW5nPjtcclxuICAgIGlmIChtb25pdG9yKSB7XHJcbiAgICAgICAgdHh0ID0gcmVzLnRleHQoKS50aGVuKHR4PT57XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwO2kgPCAodHgubGVuZ3RoIDwgMTAwMD90eC5sZW5ndGg6MTAwMCk7IGkgKz0gMjUwKSBcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHR4LnN1YnN0cmluZyhpLCBpKzI1MCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHg7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHh0ID0gcmVzLnRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHh0LnRoZW4odHh0PT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodHh0KTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoJ0pTT07lvaLlvI/jga7jg4fjgrPjg7zjg4njgqjjg6njg7wnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZFN0cmVhbShzdHJlYW06IFJlYWRhYmxlU3RyZWFtKTogYW55IHtcclxuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcclxuICAgIGxldCBjaHVuayA9ICcnO1xyXG5cclxuICAgIC8vIHJlYWQoKSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzXHJcbiAgICAvLyB3aGVuIGEgdmFsdWUgaGFzIGJlZW4gcmVjZWl2ZWRcclxuICAgIHJlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbiBwcm9jZXNzVGV4dCh7IGRvbmUsIHZhbHVlIH0pOiBQcm9taXNlPFJlYWRhYmxlU3RyZWFtUmVhZFJlc3VsdDxzdHJpbmc+IHwgUmVhZGFibGVTdHJlYW1SZWFkRG9uZVJlc3VsdDxzdHJpbmc+PiB7XHJcbiAgICAgIC8vIFJlc3VsdCBvYmplY3RzIGNvbnRhaW4gdHdvIHByb3BlcnRpZXM6XHJcbiAgICAgIC8vIGRvbmUgIC0gdHJ1ZSBpZiB0aGUgc3RyZWFtIGhhcyBhbHJlYWR5IGdpdmVuIHlvdSBhbGwgaXRzIGRhdGEuXHJcbiAgICAgIC8vIHZhbHVlIC0gc29tZSBkYXRhLiBBbHdheXMgdW5kZWZpbmVkIHdoZW4gZG9uZSBpcyB0cnVlLlxyXG4gICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2h1bmsgKz0gdmFsdWU7XHJcblxyXG4gICAgICAvLyBSZWFkIHNvbWUgbW9yZSwgYW5kIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpblxyXG4gICAgICByZXR1cm4gcmVhZGVyLnJlYWQoKS50aGVuKHByb2Nlc3NUZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQT1NUX2FuZF9tb3ZlX3BhZ2UodXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVfZm9ybSh1cmwsIG9wdCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5zdWJtaXQoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9mb3JtKHVybDogc3RyaW5nLCBvcHQ6IENfVXJsT3B0KTogSFRNTEZvcm1FbGVtZW50IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgICAgICdkdW1teV9mb3JtXycgKyBuZXcgRGF0ZSgpLnZhbHVlT2YoKS50b1N0cmluZygpKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICB1cmwpO1xyXG4gICAgZm9ybS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcblxyXG4gICAgZm9yICh2YXIga2V5IG9mIG9wdC5nZXRfa2V5cygpKSB7XHJcbiAgICAgICAgY3JlYXRlX2lucHV0KGZvcm0sIGtleSwgb3B0LmdldChrZXkpKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2lucHV0KGZvcm06IEhUTUxGb3JtRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZmlkOiBzdHJpbmc7XHJcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdpZCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmlkID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2lkJykgYXMgc3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWQgPSAnZHVtbXlfZm9ybSc7XHJcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgZmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBpLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCdmb3InLCAgIGZpZCk7XHJcbiAgICBpLnNldEF0dHJpYnV0ZSgnbmFtZScsICBuYW1lKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgIGkuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpKTtcclxuXHJcbiAgICByZXR1cm4gaTtcclxufSIsImltcG9ydCB7IENfUG9pbnQgfSAgZnJvbSBcIi4vQ19Qb2ludFwiXHJcbmltcG9ydCB7IENfUmFuZ2UgfSAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9IGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IFRfV2FsbCwgQ19XYWxsIH0gICAgICAgZnJvbSBcIi4vQ19XYWxsXCI7XHJcbmltcG9ydCB7IGdfbWF6ZSwgZ190ZWFtLCBnX2RzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5X21hemUyRCgpOiB2b2lkIHsgXHJcbiAgICBjb25zdCBwcmU6IEhUTUxFbGVtZW50fG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3MkRfcHJlJyk7XHJcbiAgICBpZiAocHJlICE9PSBudWxsKSBwcmUuaW5uZXJUZXh0ID0gZ19tYXplLnRvX3N0cmluZyhnX3RlYW0uZ2V0X3AoKS56KTtcclxufVxyXG5leHBvcnQgdHlwZSBUX0Ryb3dTZXQgPSB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50fG51bGwsXHJcbiAgICBjb246ICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxudWxsLFxyXG4gICAgZGVwdGg6ICBudW1iZXIsXHJcbiAgICB3YWxsOiAgIENfV2FsbHxudWxsLFxyXG59XHJcblxyXG50eXBlIFRfeHkgICA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cclxudHlwZSBUX1JlY3QgPSB7dGw6IFRfeHksIHRyOiBUX3h5LCBibDogVF94eSwgYnI6IFRfeHl9O1xyXG5cclxuLy8gM0Tmj4/lhpnmmYLjgavkvb/nlKjjgZnjgovlpKfln5/lpInmlbDjga7mupblgplcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfbWF6ZTNEKCk6IFRfRHJvd1NldCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3M0RfY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAoY2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoJ0NhbnZhcyBpc250IGZvdW5kISBpZD1NYXplX3ZpZXczRF9jYW52YXMnKTtcclxuICAgICAgICByZXR1cm4ge2NhbnZhczogbnVsbCwgY29uOiBudWxsLCBkZXB0aDogMCwgd2FsbDogbnVsbH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb246IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxudWxsID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoY29uID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoJ0Jyb3dzZXIgZG9udCBzdXJwcG9ydCAyRCBncmFwaGljcyEnKTtcclxuICAgICAgICByZXR1cm4ge2NhbnZhczogbnVsbCwgY29uOiBudWxsLCBkZXB0aDogMCwgd2FsbDogbnVsbH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVwdGggPSA1OyAvLyDlpYfmlbDjga7jgb/lr77lv5zjgILjg4Djg7Pjgrjjg6fjg7Pjga7opovpgJrjgZfjgpLoia/jgY/jgZnjgovjgarjgokgNSDjgYvjgoLjgZfjgozjgarjgYRcclxuXHJcbiAgICBjb25zdCB0b3BfcCA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgY29uc3QgYnRtX3AgPSBuZXcgQ19Qb2ludChjYW52YXMuY2xpZW50V2lkdGggIC0gMSwgY2FudmFzLmNsaWVudEhlaWdodCAtIDEsIDApO1xyXG4gICAgY29uc3Qgd2FsbCAgPSBuZXcgQ19XYWxsKGRlcHRoLCBuZXcgQ19SYW5nZSh0b3BfcCwgYnRtX3ApKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtjYW52YXM6IGNhbnZhcywgY29uOiBjb24sIGRlcHRoOiBkZXB0aCwgd2FsbDogd2FsbH07XHJcbn1cclxuXHJcbi8vIDNE5o+P5YaZ5pmC44Gu55S76Z2i5Yid5pyf5YyW44CC44Go44KK44GC44GI44Ga5aSp5LqV44Go5bqK44KS5o+P44GPXHJcbmZ1bmN0aW9uIGRyYXdfaW5pdF9tYXplM0QoKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jYW52YXMgPT09IG51bGwgfHwgZ19kcy5jb24gPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBnX2RzLmNvbi5maWxsU3R5bGUgPSAnI2FhYWFhYSc7XHJcbiAgICBnX2RzLmNvbi5maWxsUmVjdChcclxuICAgICAgICAwLCBcclxuICAgICAgICAwLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy5jbGllbnRXaWR0aCAtIDEsIFxyXG4gICAgICAgIGdldF9ob2xpem9uX2xpbmUoKSxcclxuICAgICk7XHJcblxyXG4gICAgZ19kcy5jb24uZmlsbFN0eWxlID0gJyM2NjY2ZmYnO1xyXG4gICAgZ19kcy5jb24uZmlsbFJlY3QoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAgZ2V0X2hvbGl6b25fbGluZSgpLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy5jbGllbnRXaWR0aCAgIC0gMSwgXHJcbiAgICAgICAgZ19kcy5jYW52YXMuY2xpZW50SGVpZ2h0ICAtIDEsXHJcbiAgICApO1xyXG5cclxuICAgIGRyb3dfZmxvb3JfbGluZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfaG9saXpvbl9saW5lKCk6IG51bWJlciB7XHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4gZ19kcy53YWxsLmdldChnX2RzLmRlcHRoLCAwKS5tYXhfeTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mbG9vcl9saW5lKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHMuY2FudmFzID09PSBudWxsIHx8IGdfZHMuY29uID09PSBudWxsIHx8IGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uICAgPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHdhbGwgID0gZ19kcy53YWxsO1xyXG4gICAgY29uc3QgZGVwdGggPSBnX2RzLmRlcHRoO1xyXG4gICAgY29uc3QgSF9kZXB0ID0gKGRlcHRoIC0gMSkgLyAyO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfeCAgPSAwO1xyXG4gICAgY29uc3QgcmlnaHRfeCA9IGdfZHMuY2FudmFzLmNsaWVudFdpZHRoICAtIDE7XHJcbiAgICBjb25zdCBmcm9udF95ID0gZ19kcy5jYW52YXMuY2xpZW50SGVpZ2h0IC0gMTtcclxuICAgIGNvbnN0IGJhY2tfeSAgPSBnZXRfaG9saXpvbl9saW5lKCk7XHJcblxyXG4gICAgY29uLnN0cm9rZVN0eWxlID0gJyM5OTk5ZmYnO1xyXG4gICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuXHJcbiAgICAvLyDmqKrnt5oo55S76Z2i44Gr5a++44GX44Gm5rC05bmzKeOCkuW8leOBj1xyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aCArIDE7IHkrKykge1xyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKGxlZnRfeCAsIHdhbGwuZ2V0KHksIDApLm1heF95KTtcclxuICAgICAgICBjb24ubGluZVRvKHJpZ2h0X3gsIHdhbGwuZ2V0KHksIDApLm1heF95KTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g57im57ea44KS5byV44GPXHJcbiAgICBmb3IgKHZhciB4ID0gLUhfZGVwdDsgeCA8IEhfZGVwdCArIDE7IHgrKykge1xyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKHdhbGwuZ2V0KDAsICAgICB4KS5taW5feCwgZnJvbnRfeSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyh3YWxsLmdldChkZXB0aCwgeCkubWluX3gsIGJhY2tfeSApO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlfbWF6ZTNEKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHMuY2FudmFzID09PSBudWxsIHx8IGdfZHMuY29uID09PSBudWxsIHx8IGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGRyYXdfaW5pdF9tYXplM0QoKTtcclxuICAgIGRpc3BsZXlfbWFzZTNEX2RpcmVjdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IGRlcHRoICAgPSAgZ19kcy5kZXB0aDtcclxuICAgIGNvbnN0IEhfZGVwdGggPSAoZGVwdGggLSAxKSAvIDI7XHJcbiAgICBmb3IgKHZhciBqID0gZ19kcy5kZXB0aCAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgLy8g5Y+z5YG044GM6KaL44GI44Gm44GE44KL5aOB44Gu5o+P5YaZICjlt6blgbTjgYvjgonmj4/lhpkpXHJcbiAgICAgICAgZm9yICh2YXIgayA9IC1IX2RlcHRoOyBrIDwgMDsgaysrKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ19tYXplLmdldF9jZWxsKGdfdGVhbS5nZXRfYXJvdW5kKGosIGssIDApKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X3JpZ2h0X3NpZGVfc3RvbmUoaiwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiBcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yX3VuZXhwKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfcmlnaHRfc2lkZV9zdGFpcnMoaiwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOiBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19mbG9vcihqICxrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDjgIDlt6blgbTjgYzopovjgYjjgabjgYTjgovlo4Hjga7mj4/lhpkgKOWPs+WBtOOBi+OCieaPj+WGmSlcclxuICAgICAgICBmb3IgKHZhciBrID0gSF9kZXB0aDsgayA+IDA7IGstLSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGdfbWF6ZS5nZXRfY2VsbChnX3RlYW0uZ2V0X2Fyb3VuZChqLCBrLCAwKSkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19sZWZ0X3NpZGVfc3RvbmUoaiwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiBcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yX3VuZXhwKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfbGVmdF9zaWRlX3N0YWlycyhqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOato+mdouOBruWjgeOBruaPj+WGmVxyXG4gICAgICAgIHN3aXRjaCAoZ19tYXplLmdldF9jZWxsKGdfdGVhbS5nZXRfYXJvdW5kKGosIDAsIDApKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOlxyXG4gICAgICAgICAgICAgICAgZHJvd19mcm9udF9zdG9uZShqLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiBcclxuICAgICAgICAgICAgICAgIGRyb3dfZmxvb3JfdW5leHAoaiAsMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgICAgIGRyb3dfZnJvbnRfc3RhaXJzKGosIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZHJvd19mbG9vcihqICwwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mbG9vcl91bmV4cChkOiBudW1iZXIsIHc6bnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X2Zsb29yKGQsIHcsICcjNjZmZmZmJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3dfZnJvbnRfc3RvbmUoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZnJvbnQoZCwgdywgJyMwMGZmMDAnLCAnIzAwMDBmZicpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfbGVmdF9zaWRlX3N0b25lKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X2xlZnRfc2lkZShkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbiAgICBkcm93X2Zyb250ICAgIChkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19yaWdodF9zaWRlX3N0b25lKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X3JpZ2h0X3NpZGUoZCwgdywgJyMwMGZmMDAnLCAnIzAwMDBmZicpO1xyXG4gICAgZHJvd19mcm9udCAgICAgKGQsIHcsICcjMDBmZjAwJywgJyMwMDAwZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mcm9udF9zdGFpcnMoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZmxvb3IgIChkLCB3LCAnI2ZmZmZjYycsICcjZmZmZjAwJyk7XHJcbiAgICBkcm93X2NlaWxpbmcoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19mcm9udCAgKGQsIHcsICBudWxsLCAgICAgJyNmZmZmMDAnKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2xlZnRfc2lkZV9zdGFpcnMoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZmxvb3IgICAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfY2VpbGluZyAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfbGVmdF9zaWRlKGQsIHcsICBudWxsLCAgICAgJyNmZmZmMDAnKTtcclxuXHJcbn1cclxuZnVuY3Rpb24gZHJvd19yaWdodF9zaWRlX3N0YWlycyhkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mbG9vciAgICAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfY2VpbGluZyAgIChkLCB3LCAnI2ZmZmZjYycsICcjZmZmZjAwJyk7XHJcbiAgICBkcm93X3JpZ2h0X3NpZGUoZCwgdywgIG51bGwsICAgICAnI2ZmZmYwMCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zsb29yKFxyXG4gICAgICAgICAgICBkOiAgICBudW1iZXIsIFxyXG4gICAgICAgICAgICB3OiAgICBudW1iZXIsIFxyXG4gICAgICAgICAgICBmaWxsOiBzdHJpbmcgPSAnIzY2NjZmZicsIFxyXG4gICAgICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICAgICAgICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdF9mcm9udCA9IGdfZHMud2FsbC5nZXQoZCwgICAgIHcpO1xyXG4gICAgY29uc3QgcmVjdF9iYWNrICA9IGdfZHMud2FsbC5nZXQoZCArIDEsIHcpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWF4X3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5tYXhfeX0sXHJcbiAgICAgICAgYnI6IHt4OiByZWN0X2JhY2sgLm1heF94LCB5OiByZWN0X2JhY2sgLm1heF95fSxcclxuICAgICAgICBibDoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19jZWlsaW5nKFxyXG4gICAgICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgICAgICBmaWxsOiBzdHJpbmcgPSAnI2FhYWFhYScsIFxyXG4gICAgICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGlmIChnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsICAgICB3KTtcclxuICAgIGNvbnN0IHJlY3RfYmFjayAgPSBnX2RzLndhbGwuZ2V0KGQgKyAxLCB3KTtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb250Lm1pbl94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvbnQubWF4X3gsIHk6IHJlY3RfZnJvbnQubWluX3l9LFxyXG4gICAgICAgIGJyOiB7eDogcmVjdF9iYWNrIC5tYXhfeCwgeTogcmVjdF9iYWNrIC5taW5feX0sXHJcbiAgICAgICAgYmw6IHt4OiByZWN0X2JhY2sgLm1pbl94LCB5OiByZWN0X2JhY2sgLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfZnJvbnQoXHJcbiAgICAgICAgZDogbnVtYmVyLCBcclxuICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZ3xudWxsID0gJyMwMGZmMDAnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmd8bnVsbCA9ICcjMDAwMGZmJ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsIHcpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgYnI6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1heF95fSxcclxuICAgICAgICBibDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19sZWZ0X3NpZGUoXHJcbiAgICAgICAgZDogbnVtYmVyLCBcclxuICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZ3xudWxsID0gJyMwMGNjMDAnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmd8bnVsbCA9ICcjMDAwMGZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uID0gZ19kcy5jb247XHJcbiAgICBjb25zdCByZWN0X2Zyb250ID0gZ19kcy53YWxsLmdldChkLCAgICAgdyk7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2JhY2sgLm1pbl94LCB5OiByZWN0X2JhY2sgLm1pbl95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X3JpZ2h0X3NpZGUoXHJcbiAgICAgICAgZDogbnVtYmVyLCBcclxuICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZ3xudWxsID0gJyMwMGNjMDAnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmd8bnVsbCA9ICcjMDAwMGZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uID0gZ19kcy5jb247XHJcbiAgICBjb25zdCByZWN0X2Zyb250ID0gZ19kcy53YWxsLmdldChkLCAgICAgdyk7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2JhY2sgLm1heF94LCB5OiByZWN0X2JhY2sgLm1pbl95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfYmFjayAubWF4X3gsIHk6IHJlY3RfYmFjayAubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19jZWxsKHI6IFRfUmVjdCwgZmlsbDogc3RyaW5nfG51bGwsIGxpbmU6IHN0cmluZ3xudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jb24gPT09IG51bGwgfHwgZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmJyLngsIHIuYnIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuYmwueCwgci5ibC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsZXlfbWFzZTNEX2RpcmVjdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBfZGlyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01hemVfdmlldzNEX2RpcmVjdGlvbl9pbmZvJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBpZiAocF9kaXIgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydCgnUCBlbGVtZW50IGlzbnQgZm91bmQhIGlkPU1hemVfdmlldzNEX2RpcmVjdGlvbl9pbmZvJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gICAgc3dpdGNoIChnX3RlYW0uZ2V0X2RpcigpKSB7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fTlwiPuOAiuWMl+OAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9FXCI+44CK5p2x44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX1NcIj7jgIrljZfjgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fV1wiPuOAiuilv+OAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fRFwiPuOAiuisjuOAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwID0gZ190ZWFtLmdldF9wKCk7XHJcbiAgICBjb25zdCBtZXMgPSAn5Zyw5LiLICcgKyAocC56ICsgMSkgKyAn6ZqO44CAJyArIGRpcmVjdGlvbiArICfjgIAoeCA9IDxzcGFuIGlkPVwiZGlyZWN0aW9uX1hcIj4nICsgcC54ICsgJzwvc3Bhbj4sIHkgPSA8c3BhbiBpZD1cImRpcmVjdGlvbl9ZXCI+JyArIHAueSArICc8L3NwYW4+KSc7XHJcbiAgICBwX2Rpci5pbm5lckhUTUwgPSBtZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF6ZTNEX2JsaW5rX29uX2RpcmVjdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpcl94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9YJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl94ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZGlyX3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uX1knKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBpZiAoZGlyX3kgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBzd2l0Y2ggKGdfdGVhbS5nZXRfZGlyKCkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICBkaXJfeC5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG4gICAgICAgICAgICBkaXJfeS5jbGFzc0xpc3QuYWRkICAgKCdibGluaycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgZGlyX3guY2xhc3NMaXN0LmFkZCAgICgnYmxpbmsnKTtcclxuICAgICAgICAgICAgZGlyX3kuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpcl94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9YJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl94ID09PSBudWxsKSByZXR1cm47XHJcbiAgICBkaXJfeC5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG5cclxuICAgIGNvbnN0IGRpcl95ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9ZJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl95ID09PSBudWxsKSByZXR1cm47XHJcbiAgICBkaXJfeS5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhbGVydF9tYXplX2luZm8gfSAgICAgZnJvbSBcIi4vQ19NYXplXCI7IC8vIOmAmuW4uOaZguOBr+OCs+ODoeODs+ODiOOCouOCpuODiOOBleOCjOOBpuOBhOOCi+mWouaVsFxyXG5pbXBvcnQgeyBhbGVydF90ZWFtX2luZm8gfSAgICAgZnJvbSBcIi4vQ19UZWFtXCI7IC8vIOmAmuW4uOaZguOBr+OCs+ODoeODs+ODiOOCouOCpuODiOOBleOCjOOBpuOBhOOCi+mWouaVsFxyXG5pbXBvcnQgeyBhbGVydF9oZXJvZXNfaW5mbyB9ICAgZnJvbSBcIi4vQ19IZXJvXCI7IC8vIOmAmuW4uOaZguOBr+OCs+ODoeODs+ODiOOCouOCpuODiOOBleOCjOOBpuOBhOOCi+mWouaVsFxyXG5cclxuaW1wb3J0IHsgQ19VcmxPcHQgfSAgICAgICAgICAgIGZyb20gXCIuL0NfVXJsT3B0XCI7ICAgICAgICAgIFxyXG5pbXBvcnQgeyBQT1NUX2FuZF9nZXRfSlNPTiB9ICAgZnJvbSBcIi4vRl9QT1NUXCI7XHJcbmltcG9ydCB7IGluaXRfY29udHJvbGxlcyB9ICAgICBmcm9tIFwiLi9GX3NldF9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IGRvX21vdmVfYm90dG9tX2hhbGYgfSBmcm9tIFwiLi9GX3NldF9tb3ZlX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgZ19nZXRfbWF6ZV91cmwsIGdfbWF6ZSwgZ190ZWFtLCBnX212bSwgaW5pdF9kZWJ1Z19tb2RlIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0X21haV9tYXplKHVybDogc3RyaW5nLCBvcHQ6IENfVXJsT3B0KTogdm9pZCB7XHJcbiAgICBQT1NUX2FuZF9nZXRfSlNPTih1cmwsIG9wdCk/LnRoZW4oanNvbk9iaj0+e1xyXG4gICAgICAgIGlmIChqc29uT2JqLmVjb2RlICE9IDApIHtcclxuICAgICAgICAgICAgZ19tdm0ud2FybmluZ19tZXNzYWdlKFwi5Yid5pyf44OH44O844K/44KS5Y+X5L+h44Gn44GN44G+44Gb44KT44Gn44GX44GfXFxuXCIgKyBqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICBhbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb25pdG9yID0gZmFsc2U7ICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuICAgICAgICBpZiAobW9uaXRvcikge1xyXG4vLyAgICAgICAgICAgIGFsZXJ0X21hemVfaW5mbyhqc29uT2JqPy5tYXplKTtcclxuICAgICAgICAgICAgYWxlcnRfdGVhbV9pbmZvKGpzb25PYmo/LnRlYW0pO1xyXG4gICAgICAgICAgICBhbGVydF9oZXJvZXNfaW5mbyhqc29uT2JqPy50ZWFtPy5oZXJvZXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfZGVidWdfbW9kZSgpO1xyXG4gICAgICAgICAgICBpbml0X2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X2xvYWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAgICAgICAnaW5zdGFudF9sb2FkJyk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV9pZCcsICAgICAxKTsgXHJcbiAgICBvcHQuc2V0KCdzYXZlX3RpdGxlJywgJycpOyBcclxuXHJcbiAgICBQT1NUX2FuZF9nZXRfSlNPTihnX2dldF9tYXplX3VybCwgb3B0KT8udGhlbihqc29uT2JqPT57XHJcbiAgICAgICAgaWYgKGpzb25PYmouZWNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICBnX212bS5ub3JtYWxfbWVzc2FnZSgn5q2j5bi444Gr44Ot44O844OJ44GV44KM44G+44GX44GfJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAobW9uaXRvcikge1xyXG4gICAgLy8gICAgICAgICAgICBhbGVydF9tYXplX2luZm8oanNvbk9iaj8ubWF6ZSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydF9oZXJvZXNfaW5mbyhqc29uT2JqPy50ZWFtPy5oZXJvZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfY29udHJvbGxlcygpO1xyXG4gICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoXCLjg63jg7zjg4njgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X3NhdmUoKTogdm9pZCB7IFxyXG4gICAgY29uc3QgbWF6ZV9kYXRhID0gSlNPTi5zdHJpbmdpZnkoZ19tYXplLmVuY29kZSgpLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIGNvbnN0IHRlYW1fZGF0YSA9IEpTT04uc3RyaW5naWZ5KGdfdGVhbS5lbmNvZGUoKSwgbnVsbCwgXCJcXHRcIik7XHJcblxyXG4gICAgY29uc3Qgb3B0ID0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAgJ2luc3RhbnRfc2F2ZScpOyBcclxuICAgIG9wdC5zZXQoJ3NhdmVfaWQnLCAgICAgMSk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV90aXRsZScsICcnKTsgXHJcbiAgICBvcHQuc2V0KCdtYXplJywgICAgICAgbWF6ZV9kYXRhKTtcclxuICAgIG9wdC5zZXQoJ3RlYW0nLCAgICAgICB0ZWFtX2RhdGEpO1xyXG5cclxuICAgIFBPU1RfYW5kX2dldF9KU09OKGdfZ2V0X21hemVfdXJsLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGdfbXZtLm5vcm1hbF9tZXNzYWdlKCfmraPluLjjgavjgrvjg7zjg5bjgZXjgozjgb7jgZfjgZ8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoXCLjgrvjg7zjg5bjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG4gICAgICAgIGlmIChtb25pdG9yKSB7XHJcbi8vICAgICAgICAgICAgYWxlcnRfbWF6ZV9pbmZvKGpzb25PYmo/Lm1hemUpO1xyXG4gICAgICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbiAgICAgICAgICAgIGFsZXJ0X2hlcm9lc19pbmZvKGpzb25PYmo/LnRlYW0/Lmhlcm9lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZGVjb2RlX2FsbChqc29uT2JqKTtcclxuICAgIH0pO1xyXG4vLyAgICBQT1NUX2FuZF9tb3ZlX3BhZ2UoZ19jaGVja19KU09OX3VybCwgb3B0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVfYWxsKGpzb25PYmo6IGFueSkge1xyXG4gICAgLy8gTUFaRemWoumAo+OBruODh+OCs+ODvOODiVxyXG4gICAgaWYgKGpzb25PYmoubWF6ZSAhPT0gdW5kZWZpbmVkKSBnX21hemUuZGVjb2RlKGpzb25PYmoubWF6ZSk7XHJcblxyXG4gICAgLy/jgIBUZWFt6Zai6YCj44Gu44OH44Kz44O844OJXHJcbiAgICBpZiAoanNvbk9iai50ZWFtICE9PSB1bmRlZmluZWQpIGdfdGVhbS5kZWNvZGUoanNvbk9iai50ZWFtKTtcclxuXHJcbiAgICAvLyBNYXpl44GrVGVhbeOCkui/veWKoFxyXG4gICAgZ19tYXplLmFkZF9vYmooZ190ZWFtKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgaGlkZV9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBUX0N0bHNNb2RlIH0gZnJvbSBcIi4vVF9DdGxzTW9kZVwiO1xyXG5pbXBvcnQgeyBzZXRfbW92ZV9jb250cm9sbGVzLCBkb19tb3ZlX2JvdHRvbV9oYWxmIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IGdfbWF6ZSwgZ190ZWFtLCBnX2RlYnVnX21vZGUsIGdfY3Rsc19tb2RlLCBnX212bSB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbHJfVURfY29udHJvbGxlcygpOiB2b2lkIHtcclxuICAgIGNhblVwID0gZmFsc2U7XHJcbiAgICBjYW5EbiA9IGZhbHNlO1xyXG4gICAgaXNVcCAgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCB1X2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGRfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgeV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneV9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IG5fYnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduX2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleV9wcmVzc19mdW5jdGlvbjIpO1xyXG5cclxuICAgIHVfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvcGVfVXApO1xyXG4gICAgZF9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9wZV9Eb3duKTtcclxuXHJcbiAgICB5X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fdXApO1xyXG4gICAgeV9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX2Rvd24pO1xyXG4gICAgeV9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX1VEKTtcclxuICAgIG5fYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb19jYW5jZWwpO1xyXG5cclxuICAgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB5X2J0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBuX2J0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbn1cclxuXHJcblxyXG5cclxudmFyIGNhblVwOiBib29sZWFuICA9ICBmYWxzZTtcclxudmFyIGNhbkRuOiBib29sZWFuICA9ICBmYWxzZTtcclxuXHJcbnZhciBpc1VwOiAgYm9vbGVhbiAgPSAgZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X1VwX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn5LiK44KK44OG44Os44Od44O844K/44O844GM5pyJ44KK44G+44GZ44CC55m744KK44G+44GZ44GL77yf55m744KLIOKHkiDjgIcg55m744KJ44Gq44GEIOKHkiDinJYnKTtcclxuXHJcbiAgICBoaWRlX2NvbnRyb2xsZXMoKTtcclxuICAgIGNhblVwID0gdHJ1ZTtcclxuICAgIGNhbkRuID0gZmFsc2U7XHJcbiAgICBfX3NldF9VRF9jb250cm9sbGVzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfRG5fY29udHJvbGxlcygpIHtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfkuIvjgorjg4bjg6zjg53jg7zjgr/jg7zjgYzmnInjgorjgb7jgZnjgILpmY3jgorjgb7jgZnjgYvvvJ/pmY3jgorjgosg4oeSIOOAhyDpmY3jgorjgarjgYQg4oeSIOKclicpO1xyXG5cclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgY2FuVXAgPSBmYWxzZTtcclxuICAgIGNhbkRuID0gdHJ1ZTtcclxuICAgIF9fc2V0X1VEX2NvbnRyb2xsZXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF9VRF9jb250cm9sbGVzKCkge1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4iuS4i+ODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgueZu+OCiuOBvuOBmeOBi++8n+eZu+OCi+KHkiDjgIcg6ZmN44KK44KLIOKHkiAo4oaT44Kt44O8KSDnp7vli5XjgZfjgarjgYQg4oeSIOKclicpO1xyXG5cclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgY2FuVXAgPSB0cnVlO1xyXG4gICAgY2FuRG4gPSB0cnVlO1xyXG4gICAgX19zZXRfVURfY29udHJvbGxlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3NldF9VRF9jb250cm9sbGVzKCkge1xyXG4gICAgZ19jdGxzX21vZGVbMF0gPSBUX0N0bHNNb2RlLlVEO1xyXG5cclxuICAgIGNvbnN0IHlfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lfYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBuX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduX2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgeV9idG4uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIG5fYnRuLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgbl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX2NhbmNlbCwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChjYW5VcCAmJiAhY2FuRG4pIHtcclxuICAgICAgICB5X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fdXAsICAgICBmYWxzZSk7XHJcbiAgICB9IFxyXG4gICAgaWYgKGNhbkRuICYmICFjYW5VcCkge1xyXG4gICAgICAgIHlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb19kb3duLCAgIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChjYW5VcCAmJiBjYW5Ebikge1xyXG4gICAgICAgIHlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb19VRCwgICAgIGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdV9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdV9hcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9wZV9VcCwgZmFsc2UpO1xyXG4gICAgICAgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICAgICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgZF9hcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9wZV9Eb3duLCBmYWxzZSk7XHJcbiAgICAgICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICBpZiAoaXNVcCkgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgZWxzZSAgICAgICB1X2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1VwKSBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIGVsc2UgICAgICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBrZXlfcHJlc3NfZnVuY3Rpb24yKTtcclxuXHJcbiAgICBjb25zdCBjdGxfdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlX2N0bF92aWV3JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjdGxfdmlldy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlfcHJlc3NfZnVuY3Rpb24yKGU6IEtleWJvYXJkRXZlbnQpOnZvaWQgIHtcclxuICAgIHN3aXRjaChlLmNvZGUpIHsgLy8gQXJyb3fjga/lj43lv5zjgZvjgZoo44Kk44OZ44Oz44OI6Ieq5L2T44GM55m655Sf44Gb44GaKVxyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOiBcclxuICAgICAgICBjYXNlICdLZXlLJzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkNSc6IFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOiBcclxuICAgICAgICBjYXNlICdLZXlKJzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkMic6IFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdLZXlPJzpcclxuICAgICAgICBjYXNlICdLZXlZJzpcclxuICAgICAgICBjYXNlICdOdW1wYWQwJzpcclxuICAgICAgICBjYXNlICdEaWdpdDAnOlxyXG4gICAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneV9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdLZXlOJzpcclxuICAgICAgICBjYXNlICdLZXlYJzpcclxuICAgICAgICBjYXNlICdOdW1wYWRBZGQnOlxyXG4vLyAgICAgICAgY2FzZSAnTnVtcGFkU3VidHJhY3QnOlxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSAnS2V5VSc6XHJcbiAgICAgICAgICAgIGlmIChnX2RlYnVnX21vZGUgJiYgZ190ZWFtLmdldF96KCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBnX3RlYW0uc2V0X3ooZ190ZWFtLmdldF96KCkgLSAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FuVXApIHtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSAnS2V5RCc6XHJcbiAgICAgICAgICAgIGlmIChnX2RlYnVnX21vZGUgJiYgZ190ZWFtLmdldF96KCkgPCAoZ19tYXplLmdldF96X21heCgpIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIGdfdGVhbS5zZXRfeihnX3RlYW0uZ2V0X3ooKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYW5Ebikge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZG9fY2FuY2VsKCk6IHZvaWQge1xyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgc2V0X21vdmVfY29udHJvbGxlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb191cCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV9wX3VwKCk7XHJcbiAgICBpZiAoIXJzbHQuaGFzX2hvcGUgfHwgIWdfbWF6ZS53aXRoaW4ocnNsdC5zdWJqKSkge1xyXG4gICAgICAgIHJzbHQuZG9ORygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByc2x0LmRvT0soKTtcclxuICAgIH1cclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIHNldF9tb3ZlX2NvbnRyb2xsZXMoKTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19kb3duKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3BfZG93bigpO1xyXG4gICAgaWYgKCFyc2x0Lmhhc19ob3BlIHx8ICFnX21hemUud2l0aGluKHJzbHQuc3ViaikpIHtcclxuICAgICAgICByc2x0LmRvTkcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcnNsdC5kb09LKCk7XHJcbiAgICB9XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBzZXRfbW92ZV9jb250cm9sbGVzKCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fVUQoKTogdm9pZCB7XHJcbiAgICBpZiAoIWNhblVwIHx8ICFjYW5EbikgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBpZiAoaXNVcCkgZG9fdXAoKTtcclxuICAgIGVsc2UgICAgICBkb19kb3duKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvcGVfVXAoKTogdm9pZCB7XHJcbiAgICBpZiAoIWNhblVwIHx8ICFjYW5EbikgcmV0dXJuO1xyXG4gICAgaXNVcCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpPy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93Jyk/LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfnmbvjgorjgb7jgZnjgYvvvJ/nmbvjgovih5Ig44CHIOmZjeOCiuOCiyDih5IgKOKGk+OCreODvCkg56e75YuV44GX44Gq44GEIOKHkiDinJYnKTtcclxufVxyXG5mdW5jdGlvbiBob3BlX0Rvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIWNhblVwIHx8ICFjYW5EbikgcmV0dXJuO1xyXG4gICAgaXNVcCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKT8uc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpPy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn6ZmN44KK44G+44GZ44GL77yf6ZmN44KK44KL4oeSIOOAhyDnmbvjgosg4oeSICjihpHjgq3jg7wpIOenu+WLleOBl+OBquOBhCDih5Ig4pyWJyk7XHJcbn1cclxuXHJcbiIsIlxyXG4gICAgLyoqKioqKioqKioqKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogKioqKioqKioqKioqKiovXHJcbiAgICAvKiAgSFRNTFByZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTsgICAgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uc2V0QXR0cmlidXRlKCdpZCcsICd1X2FycmF3Jyk7ICAgICAgICAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdncmlkJyk7ICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LmFwcGVuZENoaWxkKEhUTUxFbGVtZW50KTsgICAgICAgICAgICAgKi9cclxuICAgIC8qKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgY2xyX21vdmVfY29udHJvbGxlcywgc2V0X21vdmVfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X21vdmVfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBjbHJfVURfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X1VEX2NvbnRyb2xsZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBjbHJfbW92ZV9jb250cm9sbGVzKCk7XHJcbiAgICBjbHJfVURfY29udHJvbGxlcygpO1xyXG4gICAgY29uc3QgbW92ZV9jdGxfdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlX2N0bF92aWV3JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBtb3ZlX2N0bF92aWV3Py5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2NvbnRyb2xsZXMoKSB7XHJcbiAgICBzZXRfbW92ZV9jb250cm9sbGVzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGlkZV9jb250cm9sbGVzIH0gICAgICAgICAgICBmcm9tIFwiLi9GX3NldF9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IElfSG9wZUFjdGlvbiB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vSV9FdmVudE1hcFwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IFRfQ3Rsc01vZGUgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4vVF9DdGxzTW9kZVwiO1xyXG5pbXBvcnQgeyBpbnN0YW50X2xvYWQsIGluc3RhbnRfc2F2ZSB9IGZyb20gXCIuL0ZfbGFvZF9hbmRfc2F2ZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5X21hemUyRCwgZGlzcGxheV9tYXplM0QsIFxyXG4gICAgICAgICBtYXplM0RfYmxpbmtfb25fZGlyZWN0aW9uLCBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbiB9ICAgZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuaW1wb3J0IHsgc2V0X1VwX2NvbnRyb2xsZXMsIHNldF9Ebl9jb250cm9sbGVzLCBzZXRfVURfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X1VEX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZGVidWdfbW9kZSwgZ19jdGxzX21vZGUsIGdfbXZtIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xyX21vdmVfY29udHJvbGxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCByX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGxfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleV9wcmVzc19mdW5jdGlvbjEpO1xyXG5cclxuICAgIHVfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvX0YpO1xyXG4gICAgZF9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29fQik7XHJcbiAgICByX2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cl9SKTtcclxuICAgIGxfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX0wpO1xyXG5cclxuICAgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBsX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIHJfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X21vdmVfY29udHJvbGxlcygpOiB2b2lkIHtcclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgZ19jdGxzX21vZGVbMF0gPSBUX0N0bHNNb2RlLk1vdmU7XHJcbiAgICBjb25zdCB1X2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGRfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3Qgcl9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBsX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICB1X2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb19GLCBmYWxzZSk7XHJcbiAgICBkX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb19CLCBmYWxzZSk7XHJcbiAgICByX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cl9SLCBmYWxzZSk7XHJcbiAgICBsX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cl9MLCBmYWxzZSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMSk7XHJcblxyXG4gICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgbF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgcl9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgIGNvbnN0IGN0bF92aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVfY3RsX3ZpZXcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGN0bF92aWV3Py5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlfcHJlc3NfZnVuY3Rpb24xKGU6IEtleWJvYXJkRXZlbnQpOnZvaWQgIHtcclxuICAgIHN3aXRjaChlLmNvZGUpIHsgLy8gQXJyb3fjga/lj43lv5zjgZvjgZoo44Kk44OZ44Oz44OI6Ieq5L2T44GM55m655Sf44Gb44GaKVxyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOiBcclxuICAgICAgICBjYXNlICdLZXlLJzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkNSc6IFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzogXHJcbiAgICAgICAgY2FzZSAnS2V5Sic6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDInOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6IFxyXG4gICAgICAgIGNhc2UgJ0tleUgnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQxJzogXHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzogXHJcbiAgICAgICAgY2FzZSAgJ051bXBhZDMnOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUwnOlxyXG4gICAgICAgICAgICBpZiAoZ19kZWJ1Z19tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW50X2xvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlTJzogXHJcbiAgICAgICAgICAgIGlmIChnX2RlYnVnX21vZGUpIHsgXHJcbiAgICAgICAgICAgICAgICBpbnN0YW50X3NhdmUoKTtcclxuICAgICAgICAgICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleVUnOlxyXG4gICAgICAgICAgICBpZiAoZ19jdGxzX21vZGVbMF0gPT0gVF9DdGxzTW9kZS5Nb3ZlICYmIGdfZGVidWdfbW9kZSAmJiBnX3RlYW0uZ2V0X3ooKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdfdGVhbS5zZXRfeihnX3RlYW0uZ2V0X3ooKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5RCc6XHJcbiAgICAgICAgICAgIGlmIChnX2N0bHNfbW9kZVswXSA9PSBUX0N0bHNNb2RlLk1vdmUgJiYgZ19kZWJ1Z19tb2RlICYmIGdfdGVhbS5nZXRfeigpIDwgKGdfbWF6ZS5nZXRfel9tYXgoKSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBnX3RlYW0uc2V0X3ooZ190ZWFtLmdldF96KCkgKyAxKTtcclxuICAgICAgICAgICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLyoqKioqKioqKioqKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogKioqKioqKioqKioqKiovXHJcbiAgICAvKiAgSFRNTFByZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTsgICAgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uc2V0QXR0cmlidXRlKCdpZCcsICd1X2FycmF3Jyk7ICAgICAgICAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdncmlkJyk7ICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LmFwcGVuZENoaWxkKEhUTUxFbGVtZW50KTsgICAgICAgICAgICAgKi9cclxuICAgIC8qKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0oKTogdm9pZCB7XHJcbiAgICBnX21hemUuY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlX3VuZXhwX3RvX2Zsb29yKCk6IHZvaWQge1xyXG4gICAgZ19tYXplLmNoYW5nZV91bmV4cF90b19mbG9vcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb19GKCkge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3BfZndkKCk7XHJcbiAgICBtb3ZlX2NoZWNrKHJzbHQpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb24nKTtcclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxufVxyXG5mdW5jdGlvbiBnb19CKCkge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3BfYmFrKCk7XHJcbiAgICBtb3ZlX2NoZWNrKHJzbHQpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb24nKTtcclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxufVxyXG5mdW5jdGlvbiB0cl9SKCkge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3R1cm5fcigpO1xyXG4gICAgbW92ZV9jaGVjayhyc2x0KTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHRyX0woKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfdHVybl9sKCk7XHJcbiAgICBtb3ZlX2NoZWNrKHJzbHQpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbn1cclxuZnVuY3Rpb24gbW92ZV9jaGVjayhyOiBJX0hvcGVBY3Rpb24pIHtcclxuICAgIGlmICghci5oYXNfaG9wZSkgcmV0dXJuO1xyXG4gICAgaWYgKHIuaG9wZSA9PSAnVHVybicpIHtcclxuICAgICAgICByLmRvT0soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoci5ob3BlID09ICdNb3ZlJykge1xyXG4gICAgICAgIGNvbnN0IGtpbmQgPSBnX21hemUuZ2V0X2NlbGwoci5zdWJqKTtcclxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDpcclxuICAgICAgICAgICAgICAgICByLmRvT0soKTtyZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICAgci5kb09LKCk7XHJcbiAgICAgICAgICAgICAgICAgZG9fc3RhaXJzX21vdGlvbihraW5kKTtcclxuICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIuZG9ORygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSBcclxuXHJcbmZ1bmN0aW9uIGRvX3N0YWlyc19tb3Rpb24oa2luZDogVF9NektpbmQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIHNldF9VcF9jb250cm9sbGVzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgIHNldF9Ebl9jb250cm9sbGVzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgIHNldF9VRF9jb250cm9sbGVzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvX21vdmVfYm90dG9tX2hhbGYoYmxpbmtfbW9kZTogc3RyaW5nKTogdm9pZCB7ICAgLy9hbGVydCgnRmxvb3I/ID0gJyArIGdfdGVhbS5nZXRfcCgpLnopO1xyXG4gICAgY2hhbmdlX3VuZXhwX3RvX2Zsb29yKCk7XHJcbiAgICBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpO1xyXG4gICAgZGlzcGxheV9tYXplMkQoKTtcclxuICAgIGRpc3BsYXlfbWF6ZTNEKCk7XHJcbiAgICBpZiAoYmxpbmtfbW9kZSA9PT0gJ2JsaW5rX29uJykgbWF6ZTNEX2JsaW5rX29uX2RpcmVjdGlvbigpO1xyXG4gICAgZWxzZSBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbigpO1xyXG59XHJcbiIsImltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuL1RfTWFrZUVudW1UeXBlXCI7XHJcbmV4cG9ydCBjb25zdCBUX0N0bHNNb2RlID0ge1xyXG4gICAgTm9wOiAgICAgMCxcclxuICAgIE1vdmU6ICAgIDEsXHJcbiAgICBVRDogICAgICAyLFxyXG4gICAgQmF0dGxlOiAgMyxcclxuICAgIFVua25vd246IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfQ3Rsc01vZGUgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9DdGxzTW9kZT47XHJcbiIsImltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuL1RfTWFrZUVudW1UeXBlXCI7XHJcbmV4cG9ydCBjb25zdCBUX0RpcmVjdGlvbiA9IHtcclxuICAgIE46IDAsXHJcbiAgICBFOiAxLFxyXG4gICAgUzogMixcclxuICAgIFc6IDMsXHJcbiAgICBYOiA5OVxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0RpcmVjdGlvbiA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0RpcmVjdGlvbj47XHJcblxyXG5leHBvcnQgdmFyICREaXJlY3Rpb25OYW1lID0ge1xyXG4gICAgMDogICfljJcnLFxyXG4gICAgMTogICfmnbEnLFxyXG4gICAgMjogICfljZcnLFxyXG4gICAgMzogICfopb8nLFxyXG4gICAgOTk6ICforI4nXHJcbn1cclxuIiwiICAgIC8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbiAgICBpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG4gICAgLy8gTm9EZWY6IOacquWumue+qeODu+S4jeaYjlxyXG4gICAgLy8gRmxvb3I6IOW6ilxyXG4gICAgLy8gVW5leHA6IOacqui4j+WcsFxyXG4gICAgLy8gU3RvbmU6IOefs+WjgVxyXG4gICAgLy8gU3RyVXA6IOS4iuOCiumajuautVxyXG4gICAgLy8gU3RyRG46IOS4i+OCiumajuautVxyXG4gICAgLy8gRW1wdHk6IOWIneacn+eKtuaFi+ODu+S9leOCguOBquOBl1xyXG4gICAgLy8gXHJcbiAgICAvLyBmdW5jdGlvbiB0b19pbnQoTXpLaW5kKTogICAgICBpbnQgICAgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+WApCjmlbTmlbDlgKQp44KS6L+U44GZXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2ludChpbnQpOiAgICAgICBUX016S2luZCAgICAg5pW05pWw5YCk44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2xldHRlcihNektpbmQpOiAgIHN0cmluZyAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5paH5a2X44KS6L+U44GZKOODgOODs+OCuOODp+ODs+OBrjJE6KGo56S655SoKVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9sZXR0ZXIoc3RyaW5nKTogVF9NektpbmQgICAgIOaWh+Wtl+OBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfTXpLaW5kOntba2V5OiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgICAgICBOb0RlZjogICAwLFxyXG4gICAgICAgIEZsb29yOiAgIDEsXHJcbiAgICAgICAgVW5leHA6ICAgMixcclxuICAgICAgICBTdG9uZTogICAzLFxyXG4gICAgICAgIFVua3duOiAgIDQsXHJcbiAgICAgICAgU3RyVXA6ICAgNSxcclxuICAgICAgICBTdHJEbjogICA2LFxyXG4gICAgICAgIFN0clVEOiAgIDcsXHJcbiAgICAgICAgRW1wdHk6IDI1NSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX016S2luZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTXpLaW5kPjtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9Sdk16S2luZDp7W2tleTogbnVtYmVyXTogVF9NektpbmR9ICA9IHtcclxuICAgICAgICAwOiAgIFRfTXpLaW5kLk5vRGVmLFxyXG4gICAgICAgIDE6ICAgVF9NektpbmQuRmxvb3IsXHJcbiAgICAgICAgMjogICBUX016S2luZC5VbmV4cCxcclxuICAgICAgICAzOiAgIFRfTXpLaW5kLlN0b25lLFxyXG4gICAgICAgIDQ6ICAgVF9NektpbmQuVW5rd24sXHJcbiAgICAgICAgNTogICBUX016S2luZC5TdHJVcCxcclxuICAgICAgICA2OiAgIFRfTXpLaW5kLlN0ckRuLFxyXG4gICAgICAgIDc6ICAgVF9NektpbmQuU3RyVUQsXHJcbiAgICAgICAgMjU1OiBUX016S2luZC5FbXB0eSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX1J2TXpLaW5kID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfUnZNektpbmQ+O1xyXG5cclxuIiwiY29uc3QgbXlfdXJsX2Jhc2U6IHN0cmluZyA9IFwiaHR0cDovLzEyNy4wLjAuMS9kZXYvbWFpL21haV9tYXplL1wiO1xyXG5leHBvcnQgY29uc3QgZ19nZXRfbWF6ZV91cmw6ICAgc3RyaW5nID0gbXlfdXJsX2Jhc2UgKyBcIm1haV9tYXplLnBocFwiO1xyXG5leHBvcnQgY29uc3QgZ19jaGVja19KU09OX3VybDogc3RyaW5nID0gbXlfdXJsX2Jhc2UgKyBcImNoZWNrX0pTT04ucGhwXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgQ19NYXplIH0gZnJvbSBcIi4vQ19NYXplXCI7XHJcbmV4cG9ydCBjb25zdCBnX21hemUgPSBuZXcgQ19NYXplKHttYXplX2lkOiAtMX0pO1xyXG5cclxuaW1wb3J0IHsgQ19UZWFtIH0gZnJvbSBcIi4vQ19UZWFtXCI7XHJcbmV4cG9ydCBjb25zdCBnX3RlYW0gPSBuZXcgQ19UZWFtKCk7XHJcblxyXG5pbXBvcnQgeyBUX0N0bHNNb2RlIH0gZnJvbSBcIi4vVF9DdGxzTW9kZVwiO1xyXG5leHBvcnQgY29uc3QgZ19jdGxzX21vZGU6IFRfQ3Rsc01vZGVbXSA9IG5ldyBBcnJheSgxKSBhcyBUX0N0bHNNb2RlW107XHJcblxyXG5pbXBvcnQgeyBkaXNwbGF5X21hemUyRCB9IGZyb20gXCIuL0ZfZGlzcGxheV9tYXplXCI7XHJcbmV4cG9ydCB2YXIgZ19kZWJ1Z19tb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5pbXBvcnQge1RfRHJvd1NldCwgaW5pdF9tYXplM0QgfSBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZVwiO1xyXG5leHBvcnQgdmFyIGdfZHM6IFRfRHJvd1NldCAgID0ge2NhbnZhczogbnVsbCwgY29uOiBudWxsLCBkZXB0aDogMCwgd2FsbDogbnVsbH07XHJcblxyXG5pbXBvcnQgeyBDX01hemVWaWV3TWVzc2FnZSB9IGZyb20gXCIuL0NfTWF6ZVZpZXdNZXNzYWdlXCI7XHJcbmV4cG9ydCB2YXIgZ19tdm06IENfTWF6ZVZpZXdNZXNzYWdlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTSgpOiB2b2lkIHtcclxuICAgIGdfZHMgICA9IGluaXRfbWF6ZTNEKCk7XHJcbiAgICBnX212bSAgPSBDX01hemVWaWV3TWVzc2FnZS5nZXQoKTsgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9kZWJ1Z19tb2RlKCk6IHZvaWQge1xyXG4gICAgZ19kZWJ1Z19tb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWdfbW9kZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgaWYgKGJ0biA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgdG9nZ2xlX2RlYnVnX21vZGUoKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e3RvZ2dsZV9kZWJ1Z19tb2RlKCk7fSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKGV2ZW50KT0+e1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZV9kZWJ1Z19tb2RlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnX21vZGUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGlmIChidG4gPT09IG51bGwpIHJldHVybjtcclxuICAgIGlmIChnX2RlYnVnX21vZGUpIHtcclxuICAgICAgICBnX2RlYnVnX21vZGUgPSBmYWxzZTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdmYWxzZScpO1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAn6YCa5bi444Oi44O844OJ5LitJztcclxuICAgICAgICBidG4uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnI2YwZjhmZicpO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnY29sb3InLCAnIzAwODAwMCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnX2RlYnVnX21vZGUgPSB0cnVlO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3RydWUnKTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gJ+ODh+ODkOODg+OCsOODouODvOODieS4rSc7XHJcbiAgICAgICAgYnRuLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZjAwMDAnKTtcclxuICAgICAgICBidG4uc3R5bGUuc2V0UHJvcGVydHkoJ2NvbG9yJywgJyNmZmZmZmYnKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXlfbWF6ZTJEKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vL1xyXG4vLy8gICDkuLvlh6bnkIZcclxuLy8vXHJcblxyXG5pbXBvcnQgeyBDX1VybE9wdCB9ICAgICBmcm9tIFwiLi9DX1VybE9wdFwiO1xyXG5pbXBvcnQgeyBnZXRfbWFpX21hemUgfSBmcm9tIFwiLi9GX2xhb2RfYW5kX3NhdmVcIjtcclxuaW1wb3J0IHsgZ19nZXRfbWF6ZV91cmwsIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTSB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHsgXHJcbiAgICBpbml0X2FmdGVyX2xvYWRlZF9ET00oKTtcclxuICAgIGNvbnN0IGdldF9tYXplX29wdCA9IG5ldyBDX1VybE9wdCh7bW9kZTogXCJuZXdcIiwgbnVtOiAzMzN9KTtcclxuICAgIGdldF9tYWlfbWF6ZShnX2dldF9tYXplX3VybCwgZ2V0X21hemVfb3B0KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=