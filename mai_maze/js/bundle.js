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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_Wall = void 0;
const F_Math_1 = __webpack_require__(/*! ./F_Math */ "./src/F_Math.ts");
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
        const front_wall_size_y = (max_y - min_y) / depth;
        const side_wall_size_T = (max_y - min_y - front_wall_size_y) / ((depth + 1) * 2);
        const side_wall_size_B = (max_y - min_y - front_wall_size_y) / ((depth + 1) * 2);
        const wall = new Array(depth + 1);
        for (var j = 0; j < depth + 1; j++) {
            wall[j] = new Array(depth + 1);
            for (var k = 0; k < depth + 1; k++) {
                const wk_x = center_x - front_wall_H_size_x[j] * (depth - 2 * k);
                wall[j][k] = {
                    min_x: (0, F_Math_1._round)(wk_x, 0),
                    max_x: (0, F_Math_1._round)(wk_x + front_wall_H_size_x[j] * 2, 0),
                    min_y: (0, F_Math_1._round)(min_y + side_wall_size_T * j, 0),
                    max_y: (0, F_Math_1._round)(max_y - side_wall_size_B * j, 0),
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

/***/ "./src/F_Math.ts":
/*!***********************!*\
  !*** ./src/F_Math.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._max = exports._min = exports._round = void 0;
function _round(num, digit) {
    const multiplier = Math.pow(10, digit);
    return Math.round(num * multiplier) / multiplier;
}
exports._round = _round;
function _min(a) {
    return a.reduce((n1, n2) => Math.min(n1, n2));
}
exports._min = _min;
function _max(a) {
    return a.reduce((n1, n2) => Math.max(n1, n2));
}
exports._max = _max;


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
        global_1.g_mvm === null || global_1.g_mvm === void 0 ? void 0 : global_1.g_mvm.warning_message('Canvas isnt found! id=Maze_view3D_canvas');
        return { canvas: null, con: null, depth: 0, wall: null };
    }
    const con = canvas.getContext('2d');
    if (con === null) {
        global_1.g_mvm === null || global_1.g_mvm === void 0 ? void 0 : global_1.g_mvm.warning_message('Browser dont surpport 2D graphics!');
        return { canvas: null, con: null, depth: 0, wall: null };
    }
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
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
        global_1.g_mvm === null || global_1.g_mvm === void 0 ? void 0 : global_1.g_mvm.warning_message('P element isnt found! id=Maze_view3D_direction_info');
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
const F_Math_1 = __webpack_require__(/*! ./F_Math */ "./src/F_Math.ts");
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
    calc_view2D_width();
}
exports.decode_all = decode_all;
function calc_view2D_width() {
    const pre = document.getElementById('Maze_view2D_pre');
    if (pre === null)
        return;
    const view2D_width = pre.clientWidth;
    const view2D_height = pre.clientHeight;
    const col = global_1.g_maze.get_x_max();
    const col_px = view2D_width / col;
    const row = global_1.g_maze.get_y_max();
    const row_px = view2D_height / row;
    const font_size = (0, F_Math_1._round)(0.95 * (0, F_Math_1._min)([col_px, row_px]), 2);
    const line_height = (0, F_Math_1._round)(1.00 * (0, F_Math_1._min)([col_px, row_px]), 2);
    pre.style.setProperty('font-size', `${font_size}px`);
    pre.style.setProperty('line-height', `${line_height}px`);
}


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
    global_1.g_mvm.clear_message();
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
        global_1.g_mvm.normal_message('進めない！（笑）');
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
    exports.g_mvm = C_MazeViewMessage_1.C_MazeViewMessage.get();
    exports.g_mvm.clear_message();
    exports.g_ds = (0, F_display_maze_2.init_maze3D)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFPLFNBQVM7WUFBSyxJQUFJLENBQUMsS0FBSyxHQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBSyxJQUFJLENBQUMsT0FBTyxHQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDMUQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFekQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxDQUFDLENB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Q0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsbUNBQWMsR0FBRSxDQUFDO0FBQ3JCLENBQUM7Ozs7Ozs7VUMzREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBLDhFQUEwQztBQUMxQyxtR0FBaUQ7QUFDakQsd0VBQWlFO0FBRWpFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUN4QyxrQ0FBcUIsR0FBRSxDQUFDO0lBQ3hCLE1BQU0sWUFBWSxHQUFHLElBQUksbUJBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDM0Qsa0NBQVksRUFBQyx1QkFBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfSGVyby50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19NYXplLnRzIiwid2VicGFjazovL21haS8uL3NyYy9DX01hemVWaWV3TWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19Qb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19SYW5nZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19UZWFtLnRzIiwid2VicGFjazovL21haS8uL3NyYy9DX1VybE9wdC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19XYWxrZXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfV2FsbC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9NYXRoLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX1BPU1QudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0ZfZGlzcGxheV9tYXplLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX2xhb2RfYW5kX3NhdmUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0Zfc2V0X1VEX2NvbnRyb2xsZXMudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0Zfc2V0X2NvbnRyb2xsZXMudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0Zfc2V0X21vdmVfY29udHJvbGxlcy50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvVF9DdGxzTW9kZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvVF9EaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL1RfTXpLaW5kLnRzIiwid2VicGFjazovL21haS8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vbWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haS8uL3NyYy9tYWlfbWF6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIF9faW5pdF9hcmcgPSB7XHJcbiAgICBpZD86ICAgICAgIG51bWJlciwgXHJcbiAgICBzYXZlX2lkPzogIG51bWJlciwgXHJcbiAgICB0ZWFtX2lkPzogIG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgIHN0cmluZywgXHJcbiAgICBpc19oZXJvPzogIHN0cmluZ3xib29sZWFuO1xyXG4gICAgaXNfYWxpdmU/OiBzdHJpbmd8Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSlNPTl9IZXJvID0ge1xyXG4gICAgaWQ/OiAgICAgICBudW1iZXIsIFxyXG4gICAgc2F2ZV9pZD86ICBudW1iZXIsIFxyXG4gICAgdGVhbV9pZD86ICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICBzdHJpbmcsIFxyXG4gICAgaXNfaGVybz86ICBzdHJpbmc7XHJcbiAgICBpc19hbGl2ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X2hlcm9lc19pbmZvKGE6IChKU09OX0hlcm98dW5kZWZpbmVkKVtdfHVuZGVmaW5lZCk6IHZvaWQgeyBcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGFsZXJ0KCdOdW1iZXIgb2YgSGVybyA9ICcgKyBhLmxlbmd0aC50b1N0cmluZygpKTtcclxuICAgIGZvciAodmFyIGkgaW4gYSkge1xyXG4gICAgICAgIGlmIChhW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGFsZXJ0KFwiSGVyb1tcIiArIGkudG9TdHJpbmcoKSArIFwiXSBJbmZvOlxcblwiIFxyXG4gICAgICAgICAgICArIFwiXFxuaWQ6ICAgICAgIFwiICAgICArIChhW2ldPy5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxubmFtZTogICAgIFwiICAgICArIChhW2ldPy5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuc2F2ZV9pZDogIFwiICAgICArIChhW2ldPy5zYXZlX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxudGVhbV9pZDogIFwiICAgICArIChhW2ldPy50ZWFtX2lkICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfaGVybzogIFwiICAgICArIChhW2ldPy5pc19oZXJvICAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuaXNfYWxpdmU6IFwiICAgICArIChhW2ldPy5pc19hbGl2ZSAgPz8gJz8nKVxyXG4gICAgICAgICAgICArIFwiXFxuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19IZXJvIHtcclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgdGVhbV9pZDogIG51bWJlcjsgXHJcbiAgICBwcm90ZWN0ZWQgaXNfaGVybzogIGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgaXNfYWxpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfX2luaXRfYXJnKSB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lICA9ICdObyBOYW1lIEhlcm8nO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCAgPSAwO1xyXG4gICAgICAgIHRoaXMudGVhbV9pZCAgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNfaGVybyAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNfYWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGEpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdChhOiBfX2luaXRfYXJnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgID0gYS5pZCAgICAgID8/IHRoaXMubXlfaWRcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBhLm5hbWUgICAgPz8gdGhpcy5teV9uYW1lO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCA9IGEuc2F2ZV9pZCA/PyB0aGlzLnNhdmVfaWRcclxuICAgICAgICB0aGlzLnRlYW1faWQgPSBhLnRlYW1faWQgPz8gdGhpcy50ZWFtX2lkXHJcbiAgICAgICAgaWYgKGEuaXNfaGVybyAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGEuaXNfaGVybyAgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2hlcm8gID0gYS5pc19oZXJvO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19oZXJvICA9IChhLmlzX2hlcm8gICE9ICdOJykgPyB0cnVlOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5pc19hbGl2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYS5pc19hbGl2ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSBhLmlzX2FsaXZlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19hbGl2ZSA9IChhLmlzX2FsaXZlICE9ICdOJykgPyB0cnVlOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcHJwKGFyZyA6IF9faW5pdF9hcmcpIHtcclxuICAgICAgICB0aGlzLl9faW5pdChhcmcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdIZXJvXycgKyB0aGlzLm15X2lkLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg1LCAnMCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5lbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5teV9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX0hlcm8ge1xyXG4gICAgICAgIGNvbnN0IHJldDogSlNPTl9IZXJvID0ge1xyXG4gICAgICAgICAgICBpZDogICAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgdGhpcy5teV9uYW1lLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiAgIHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgdGVhbV9pZDogICB0aGlzLnRlYW1faWQsXHJcbiAgICAgICAgICAgIGlzX2hlcm86ICAodGhpcy5pc19oZXJvKSAgPyAnWScgOiAnTicsIFxyXG4gICAgICAgICAgICBpc19hbGl2ZTogKHRoaXMuaXNfYWxpdmUpID8gJ1knIDogJ04nLCBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9IZXJvfHVuZGVmaW5lZCk6IENfSGVybyB7XHJcbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9pZCAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm15X25hbWUgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEudGVhbV9pZCAgIT09IHVuZGVmaW5lZCkgdGhpcy50ZWFtX2lkICAgPSBhLnRlYW1faWQ7XHJcbiAgICAgICAgaWYgKGEuaXNfaGVybyAgIT09IHVuZGVmaW5lZCkgIHRoaXMuaXNfaGVybyAgPSAoYS5pc19oZXJvICAhPSAnTicpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChhLmlzX2FsaXZlICE9PSB1bmRlZmluZWQpICB0aGlzLmlzX2FsaXZlID0gKGEuaXNfYWxpdmUgIT0gJ04nKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlX2hlcm8oKTogQ19IZXJvIHtcclxuICAgICAgICBjb25zdCBuZXdfaGVybyA9IG5ldyBDX0hlcm8oKTtcclxuICAgICAgICBuZXdfaGVyby5zZXRfcHJwKHtpZDogICAgTWF0aC5mbG9vcigtMTAwMC4wICogTWF0aC5yYW5kb20oKSl9KTtcclxuICAgICAgICBuZXdfaGVyby5zZXRfcHJwKHtuYW1lOiAgbmV3X2hlcm8uaWQoKX0pO1xyXG4gICAgICAgIHJldHVybiBuZXdfaGVybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlX2hlcm9lcyhoZXJvZXM6IENfSGVyb1tdKTogSlNPTl9IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhlcm9lc19kYXRhID0gW10gYXMgSlNPTl9IZXJvW107XHJcbiAgICAgICAgZm9yICh2YXIgaGVybyBvZiBoZXJvZXMpIHtcclxuICAgICAgICAgICAgaGVyb2VzX2RhdGEucHVzaChoZXJvLmVuY29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlcm9lc19kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGVfaGVyb2VzKGhlcm9lc19kYXRhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiBDX0hlcm9bXSB7XHJcbiAgICAgICAgY29uc3QgaGVyb2VzID0gW10gYXMgQ19IZXJvW107XHJcbiAgICAgICAgaWYgKGhlcm9lc19kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaGVyb19kYXRhIG9mIGhlcm9lc19kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBoZXJvZXMucHVzaChuZXcgQ19IZXJvKCkuZGVjb2RlKGhlcm9fZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUX016S2luZCwgVF9Sdk16S2luZCB9IGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICAgICAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBJX0V4aXN0IH0gICAgICBmcm9tIFwiLi9JX0V2ZW50TWFwXCI7XHJcbmltcG9ydCB7IGdfZGVidWdfbW9kZSB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBnX3RlYW0gfSAgICAgICBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEpTT05fTWF6ZSA9IHtcclxuICAgIGlkPzogICAgICBudW1iZXIsXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgZmxvb3I/OiAgIG51bWJlcixcclxuICAgIHRpdGxlPzogICBzdHJpbmcsXHJcbiAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgc2l6ZV95PzogIG51bWJlcixcclxuICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICBtYXplPzogICAgc3RyaW5nLCBcclxuICAgIG1hc2s/OiAgICBzdHJpbmcsIFxyXG4gICAgb2Jqcz86ICAgIG9iamVjdFtdLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRfbWF6ZV9pbmZvKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBhbGVydChcIk1hemUgSW5mbzpcIlxyXG4gICAgICAgICsgXCJcXG5tYXplIGlkIDpcIiArIChhLmlkICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5mbG9vcjogXCIgICArIChhLmZsb29yICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlIGlkIDpcIiArIChhLnNhdmVfaWQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG50aXRsZTogXCIgICArIChhLnRpdGxlICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3g6IFwiICArIChhLnNpemVfeCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3k6IFwiICArIChhLnNpemVfeSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zaXplX3o6IFwiICArIChhLnNpemVfeiAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVydChcclxuICAgICAgICBcIm1hemU6XFxuXCIgICAgKyAoYS5tYXplID8/ICc/JylcclxuICAgICAgICArIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4gICAgYWxlcnQoXHJcbiAgICAgICAgXCJtYXNrOlxcblwiICAgICsgKGEubWFzayA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuY2xhc3MgQ19NYXplQ2VsbCAge1xyXG4gICAgcHJvdGVjdGVkIGNlbGw6IFRfTXpLaW5kO1xyXG4gICAgcHJvdGVjdGVkIG1hemU6IENfTWF6ZTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtOiBDX01hemUsIHY/OiBUX016S2luZCk7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobTogQ19NYXplLCBuPzogbnVtYmVyKTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtOiBDX01hemUsIGE/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNlbGwgPSBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB0aGlzLm1hemUgPSBtO1xyXG4gICAgICAgIHRoaXMuc2V0KGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCgpOiAgVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0KHY/OiBUX016S2luZCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KG4/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgcHVibGljIHNldChhPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbCA9IFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsID0gVF9Sdk16S2luZFthXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbCA9IGEgYXMgVF9NektpbmQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsID0gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX2ludCh2PzogVF9NektpbmQpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0ICBraW5kOiAgVF9NektpbmQgPSB2ID8/IHRoaXMuY2VsbDtcclxuICAgICAgICByZXR1cm4ga2luZCBhcyBudW1iZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHRvX2ludChraW5kOiBUX016S2luZCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGtpbmQgYXMgbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgLy8g5pmu6YCa44GrbmV344GZ44KM44Gw6Imv44GE44Gu44Gn44Gf44G244KT6KaB44KJ44Gq44GEXHJcbiAgICAvKlxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tX2ludChudW06IG51bWJlcik6IENfTWF6ZUNlbGwge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19NYXplQ2VsbChudW0pO1xyXG4gICAgfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIodj86IFRfTXpLaW5kKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBraW5kOiBUX016S2luZCA9IHYgPz8gdGhpcy5jZWxsO1xyXG4gICAgICAgIHJldHVybiBDX01hemVDZWxsLnRvX2xldHRlcihraW5kKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9fbGV0dGVyKGtpbmQ6IFRfTXpLaW5kKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogcmV0dXJuICfjgIAnO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiByZXR1cm4gJ+ODuyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6IHJldHVybiAn77yDJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5Vbmt3bjogcmV0dXJuICfvvJ8nO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOiByZXR1cm4gJ+S4iic7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46IHJldHVybiAn5LiLJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDogcmV0dXJuICfpgJonO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkVtcHR5OiByZXR1cm4gJ++8ryc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuTm9EZWY6IHJldHVybiAn77y4JztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfvvLgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBmcm9tX2xldHRlcihzdHI6IHN0cmluZyk6IFRfTXpLaW5kIHtcclxuICAgICAgICB0aGlzLmNlbGwgPSBDX01hemVDZWxsLmZyb21fbGV0dGVyKHN0cik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9sZXR0ZXIoc3RyOiBzdHJpbmcpOiBUX016S2luZCB7XHJcbiAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgY2FzZSAn44CAJzogcmV0dXJuIFRfTXpLaW5kLkZsb29yO1xyXG4gICAgICAgICAgICBjYXNlICfjg7snOiByZXR1cm4gVF9NektpbmQuVW5leHA7XHJcbiAgICAgICAgICAgIGNhc2UgJ++8gyc6IHJldHVybiBUX016S2luZC5TdG9uZTtcclxuICAgICAgICAgICAgY2FzZSAn77yfJzogcmV0dXJuIFRfTXpLaW5kLlVua3duO1xyXG4gICAgICAgICAgICBjYXNlICfkuIonOiByZXR1cm4gVF9NektpbmQuU3RyVXA7XHJcbiAgICAgICAgICAgIGNhc2UgJ+S4iyc6IHJldHVybiBUX016S2luZC5TdHJEbjtcclxuICAgICAgICAgICAgY2FzZSAn6YCaJzogcmV0dXJuIFRfTXpLaW5kLlN0clVEO1xyXG4gICAgICAgICAgICBjYXNlICfvvK8nOiByZXR1cm4gVF9NektpbmQuRW1wdHk7XHJcbiAgICAgICAgICAgIGNhc2UgJ++8uCc6IHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICAgICAgZGVmYXVsdDogICByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDX01hemVDZWxsLmVuY29kZSh0aGlzLmNlbGwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbmNvZGUodjogVF9NektpbmQpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodiBhcyBudW1iZXIpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoc3RyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNlbGwgPSBDX01hemVDZWxsLmRlY29kZShzdHIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWNvZGUoc3RyOiBzdHJpbmcpOiBUX016S2luZCB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0ciwgMTYpIGFzIFRfTXpLaW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ19NYXplIHtcclxuICAgIHByb3RlY3RlZCBtYXplX2lkOiAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmxvb3I6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB0aXRsZTogICAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6ICAgICBDX1JhbmdlO1xyXG4gICAgcHJvdGVjdGVkIGNlbGxzOiAgICBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG1hc2tzOiAgICBib29sZWFuW11bXVtdO1xyXG4gICAgcHJvdGVjdGVkIG9ianM6ICAgICBJX0V4aXN0W107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAge21hemVfaWQgPSAtMSwgc2F2ZV9pZCA9IC0xLCBmbG9vciA9IDAsIHRpdGxlID0gJycsIHNpemVfeCA9IDMsIHNpemVfeSA9IDMsIHNpemVfeiA9IDF9OiB7XHJcbiAgICAgICAgICAgIG1hemVfaWQ/OiBudW1iZXIsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ/OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGZsb29yPzogICBudW1iZXIsXHJcbiAgICAgICAgICAgIHRpdGxlPzogICBzdHJpbmcsXHJcbiAgICAgICAgICAgIHNpemVfeD86ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfeT86ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfej86ICBudW1iZXIsXHJcbiAgICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5tYXplX2lkID0gbWF6ZV9pZDtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSBzYXZlX2lkO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IGZsb29yO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSAgICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KHNpemVfeCAtIDEsIHNpemVfeSAtIDEsIHNpemVfeiAtIDEpKTtcclxuICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMub2JqcyAgICA9IFtdIGFzIElfRXhpc3RbXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0KFxyXG4gICAgICAgIHttYXplX2lkLCBzYXZlX2lkLCBmbG9vciwgdGl0bGUsIHNpemVfeCwgc2l6ZV95LCBzaXplX3p9OiB7XHJcbiAgICAgICAgICAgIG1hemVfaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgc2F2ZV9pZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBmbG9vcjogICBudW1iZXIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAgIHN0cmluZyxcclxuICAgICAgICAgICAgc2l6ZV94OiAgbnVtYmVyLFxyXG4gICAgICAgICAgICBzaXplX3k6ICBudW1iZXIsXHJcbiAgICAgICAgICAgIHNpemVfejogIG51bWJlcixcclxuICAgICAgICB9XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm1hemVfaWQgPSBtYXplX2lkO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCA9IHNhdmVfaWQ7XHJcbiAgICAgICAgdGhpcy5mbG9vciAgID0gZmxvb3I7XHJcbiAgICAgICAgdGhpcy50aXRsZSAgID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zaXplICAgID0gbmV3IENfUmFuZ2UoXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoc2l6ZV94IC0gMSwgc2l6ZV95IC0gMSwgc2l6ZV96IC0gMSkpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgIHRoaXMubWFza3MgICA9IHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5vYmpzICAgID0gW10gYXMgSV9FeGlzdFtdO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXplKGtpbmQ6IFRfTXpLaW5kID0gVF9NektpbmQuU3RvbmUpOiBDX01hemVDZWxsW11bXVtdIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeiA9IHRoaXMuc2l6ZS5zaXplX3ooKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbHM6IENfTWF6ZUNlbGxbXVtdW10gPSBBcnJheShzaXplX3opIGFzIENfTWF6ZUNlbGxbXVtdW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICBjZWxsc1t6XSA9IEFycmF5KHNpemVfeSkgYXMgQ19NYXplQ2VsbFtdW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldICA9IEFycmF5KHNpemVfeCkgYXMgQ19NYXplQ2VsbFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3pdW3ldW3hdID0gbmV3IENfTWF6ZUNlbGwodGhpcywga2luZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdF9tYXNrKFlOOiBib29sZWFuKTogYm9vbGVhbltdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hc2tzOiBib29sZWFuW11bXVtdID0gQXJyYXkoc2l6ZV96KSBhcyBib29sZWFuW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgbWFza3Nbel0gPSBBcnJheShzaXplX3kpIGFzIGJvb2xlYW5bXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtYXNrc1t6XVt5XSAgPSBBcnJheShzaXplX3gpIGFzIGJvb2xlYW5bXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrc1t6XVt5XVt4XSA9IFlOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXNrcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLndpdGhpbihwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g44Oh44Kk44K65YaF44Gu44Kq44OW44K444Kn44Kv44OI44KE44Oi44Oz44K544K/44O8562J44Gu6YWN572uXHJcbiAgICBwdWJsaWMgYWRkX29iaihvYmo6IElfRXhpc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ianMucHVzaChvYmopO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZV9vYmoob2JqOiBJX0V4aXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYmpzID0gdGhpcy5vYmpzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQoKSAhPT0gb2JqLmlkKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmpfeHl6KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBJX0V4aXN0fG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldF9vYmoobmV3IENfUG9pbnQoeCwgeSwgeikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9vYmoocDogQ19Qb2ludCk6IElfRXhpc3R8bnVsbCB7XHJcbiAgICAgICAgdmFyIGxheWVyID0gLTE7XHJcbiAgICAgICAgdmFyIG9iajogSV9FeGlzdHxudWxsICAgPSBudWxsO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9ianMpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ud2l0aGluKHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5sYXllcigpID4gbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGl0ZW0ubGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlYW3jgYzmnaXjgZ/jg53jgqTjg7Pjg4jjgYzmnKrouI/lnLDjgaDjgaPjgZ/jgonjgZ/jgaDjga7luorjgavlpInjgYjjgotcclxuICAgIHB1YmxpYyBjaGFuZ2VfdW5leHBfdG9fZmxvb3IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0X2NlbGwoZ190ZWFtLmdldF9wKCkpID09IFRfTXpLaW5kLlVuZXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2NlbGwoZ190ZWFtLmdldF9wKCksIFRfTXpLaW5kLkZsb29yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMkTjg57jg4Pjg5fjga7jg57jgrnjgq/lpJbjgZfplqLpgKNcclxuICAgIHB1YmxpYyBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDnj77lnKjlnLDjgajnnJ/mqKrjga/oh6rli5XnmoTjgavopovjgYjjgotcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZCgwLCAtMSkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKDAsICAwKSk7XHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoMCwgIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVwdGggICA9ICA1OyAvLyAyROODnuODg+ODl+eUqOOBruWlpeihjOOBjemZkOeVjFxyXG5cclxuICAgICAgICAvLyDliY3mlrnjga7opovpgJrjgZfjgpLjg4Hjgqfjg4Pjgq/jgZfjgarjgYzjgonopovjgYjjgovjgajjgZPjgo3jga/op6PmlL7jgZnjgotcclxuICAgICAgICBmb3IgKHZhciBkID0gMTsgZCA8IGRlcHRoOyBkKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbnRfcG9zID0gZ190ZWFtLmdldF9hcm91bmQoZCwgMClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfbW92YWJsZShmcm9udF9wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgavpmpzlrrPnianjgYznhKHjgZHjgozjgbDjgIHjgZ3jga7kuKHlgbTjgoLopovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBjOmanOWus+eJqeOBp+OCguOBneOBruaJi+WJjeOBvuOBp+imi+OBiOOBpuOBn+OBquOCieOAgeOBneOBruWjgeOBqOS4oeWBtOOBr+imi+OBiOOCi1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsICAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAgMSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM5pyJ44Gj44Gf44KJ44Gd44Gu5aWl44Gv6KaL44GI44Gq44GE44Gu44Gn5o6i57Si57WC5LqGXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2NsZWFyX21hc2soY2xyX3BvczogQ19Qb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihjbHJfcG9zKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubWFza3NbY2xyX3Bvcy56XVtjbHJfcG9zLnldW2Nscl9wb3MueF0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNfbW92YWJsZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdldF9jZWxsKHApKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBwdWJsaWMgZ2V0X3hfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3goKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3lfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3koKTt9XHJcbiAgICBwdWJsaWMgZ2V0X3pfbWF4KCk6IG51bWJlciB7cmV0dXJuIHRoaXMuc2l6ZS5zaXplX3ooKTt9XHJcbiAgICBwdWJsaWMgZ2V0X21hemVfY2VsbCAocDogQ19Qb2ludCk6IENfTWF6ZUNlbGx8bnVsbCB7IC8vIOOBn+OBtuOCk+imgeOCieOBquOBhOODoeOCveODg+ODiVxyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfY2VsbCAocDogQ19Qb2ludCk6IFRfTXpLaW5kIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0uZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9jZWxsIChwOiBDX1BvaW50LCBrOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUud2l0aGluKHApKSB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLnNldChrKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjYW5fbW92ZShwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX1VEKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc19tb3ZhYmxlKHApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX2xldHRlcihwOiBDX1BvaW50KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS50b19sZXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19zdHJpbmcoZmxvb3I6IG51bWJlciA9IDApOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcblxyXG4gICAgICAgIHZhciByZXRfc3RyOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZ2V0X29ial94eXooeCwgeSwgZmxvb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFnX2RlYnVnX21vZGUgJiYgdGhpcy5tYXNrc1tmbG9vcl1beV1beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9ICfilqAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gdGhpcy5jZWxsc1tmbG9vcl1beV1beF0udG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSBvYmoudG9fbGV0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldF9zdHIgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldF9zdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fTWF6ZSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLmNlbGxzW3pdW3ldW3hdLmVuY29kZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF6ZV9zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgdmFyIHpfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKykge1xyXG4gICAgICAgICAgICB2YXIgeV9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9hcnJheS5wdXNoKHRoaXMubWFza3Nbel1beV1beF0gPyAnMScgOiAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeV9hcnJheS5wdXNoKHhfYXJyYXkuam9pbignWCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6X2FycmF5LnB1c2goeV9hcnJheS5qb2luKCdZJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXNrX3N0ciA9IHpfYXJyYXkuam9pbignWicpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLm1hemVfaWQsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgZmxvb3I6ICAgdGhpcy5mbG9vcixcclxuICAgICAgICAgICAgdGl0bGU6ICAgdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgc2l6ZV94OiAgdGhpcy5zaXplLnNpemVfeCgpLFxyXG4gICAgICAgICAgICBzaXplX3k6ICB0aGlzLnNpemUuc2l6ZV95KCksXHJcbiAgICAgICAgICAgIHNpemVfejogIHRoaXMuc2l6ZS5zaXplX3ooKSxcclxuICAgICAgICAgICAgbWF6ZTogICAgbWF6ZV9zdHIsXHJcbiAgICAgICAgICAgIG1hc2s6ICAgIG1hc2tfc3RyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9NYXplfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm1hemVfaWQgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgIT09IHVuZGVmaW5lZCkgdGhpcy5zYXZlX2lkID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLmZsb29yICAgIT09IHVuZGVmaW5lZCkgdGhpcy5mbG9vciAgID0gYS5mbG9vcjtcclxuICAgICAgICBpZiAoYS50aXRsZSAgICE9PSB1bmRlZmluZWQpIHRoaXMudGl0bGUgICA9IGEudGl0bGU7XHJcbiAgICAgICAgaWYgKGEub2JqcyAgICAhPT0gdW5kZWZpbmVkKSB0aGlzLm9ianMgICAgPSBhLm9ianMgYXMgSV9FeGlzdFtdO1xyXG5cclxuICAgICAgICBpZiAoYS5zaXplX3ggIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeSAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZV96ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaXplICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICAgICAgbmV3IENfUG9pbnQoYS5zaXplX3ggLSAxLCBhLnNpemVfeSAtIDEsIGEuc2l6ZV96IC0gMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgICA9IHRoaXMuX19pbml0X21hemUoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoYS5tYXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBzaXplX3o7IHorKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XS5zZXQoVF9NektpbmQuU3RvbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB6X2FycmF5OiBzdHJpbmdbXSA9IGEubWF6ZS5zcGxpdCgnWicpO1xyXG4gICAgICAgICAgICBjb25zdCB6X21heCA9IF9taW4oc2l6ZV96LCB6X2FycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgel9tYXg7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9hcnJheTogc3RyaW5nW10gPSB6X2FycmF5W3pdLnNwbGl0KCdZJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X21heCA9ICBfbWluKHNpemVfeSwgeV9hcnJheS5sZW5ndGgpOyBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgeV9tYXg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfYXJyYXk6IHN0cmluZ1tdID0geV9hcnJheVt5XS5zcGxpdCgnWCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhfbWF4ID0gIF9taW4oc2l6ZV94LCB4X2FycmF5Lmxlbmd0aCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgeF9tYXg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3pdW3ldW3hdLmRlY29kZSh4X2FycmF5W3hdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hc2suc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKHNpemVfeiwgel9hcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihzaXplX3ksIHlfYXJyYXkubGVuZ3RoKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKHNpemVfeCwgeF9hcnJheS5sZW5ndGgpOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhfYXJyYXlbeF0gIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzW3pdW3ldW3hdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gIF9taW4oYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhIDw9IGIpID8gYSA6IGI7XHJcbn1cclxuZnVuY3Rpb24gIF9tYXgoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhID49IGIpID8gYSA6IGI7XHJcbn1cclxuXHJcbiIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZVZpZXdNZXNzYWdlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgIG1lIDogQ19NYXplVmlld01lc3NhZ2U7XHJcbiAgICBwcm90ZWN0ZWQgcCAgOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgQ19NYXplVmlld01lc3NhZ2UubWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYXplX3ZpZXdfbWVzc2FnZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIENfTWF6ZVZpZXdNZXNzYWdlLm1lLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KCk6IENfTWF6ZVZpZXdNZXNzYWdlICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1lICE9PSBcIm9iamVjdFwiIHx8ICEodGhpcy5tZSBpbnN0YW5jZW9mIENfTWF6ZVZpZXdNZXNzYWdlKSkgXHJcbiAgICAgICAgICAgIHRoaXMubWUgPSBuZXcgQ19NYXplVmlld01lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkaXNwbGF5X21lc3NhZ2UobWVzOiBzdHJpbmcsIGZyX2NvbG9yID0gJ2luaGVyaXQnLCBiZ19jb2xvcjogc3RyaW5nID0gJ2luaGVyaXQnKSB7XHJcbiAgICAgICAgdGhpcy5wLnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsICAgICAgICAgICAgZnJfY29sb3IpO1xyXG4gICAgICAgIHRoaXMucC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGJnX2NvbG9yKTtcclxuICAgICAgICB0aGlzLnAuaW5uZXJIVE1MID0gbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcl9tZXNzYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKCfjgIAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBub3JtYWxfbWVzc2FnZShtZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV9tZXNzYWdlKG1lcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm90aWNlX21lc3NhZ2UobWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZShtZXMsICcjMDA2NjAwJywgJyNjY2ZmY2MnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3YXJuaW5nX21lc3NhZ2UobWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZShtZXMsICcjZmZmZmZmJywgJyNmZjAwMDAnKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdHlwZSBKU09OX1BvaW50ID0ge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyLFxyXG4gICAgejogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBjbGFzcyBDX1BvaW50IHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHo6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyfENfUG9pbnR8SlNPTl9Qb2ludCwgeT86IG51bWJlciwgej86IG51bWJlcikge1xyXG4vLyAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggaW5zdGFuY2VvZiBDX1BvaW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB6ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHgueDtcclxuICAgICAgICAgICAgdGhpcy55ID0geC55O1xyXG4gICAgICAgICAgICB0aGlzLnogPSB4Lno7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gLTI7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IC0yO1xyXG4gICAgICAgICAgICB0aGlzLnogPSAtMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHAueCA9PSB0aGlzLnggJiYgcC55ID09IHRoaXMueSAmJiBwLnogPT0gdGhpcy56KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWNvZGUoYTogSlNPTl9Qb2ludCk6IENfUG9pbnQge1xyXG4gICAgICAgIHRoaXMueCA9IGEueDsgdGhpcy55ID0gYS55OyB0aGlzLnogPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDX1BvaW50IH0gZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENfUmFuZ2Uge1xyXG4gICAgcHJvdGVjdGVkIG1pbjogQ19Qb2ludDtcclxuICAgIHByb3RlY3RlZCBtYXg6IENfUG9pbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocDE6IENfUG9pbnQsIHAyOiBDX1BvaW50KSB7XHJcbiAgICAgICAgY29uc3QgbWluX3ggPSBfbWluKHAxLngsIHAyLngpO1xyXG4gICAgICAgIGNvbnN0IG1heF94ID0gX21heChwMS54LCBwMi54KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3kgPSBfbWluKHAxLnksIHAyLnkpO1xyXG4gICAgICAgIGNvbnN0IG1heF95ID0gX21heChwMS55LCBwMi55KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluX3ogPSBfbWluKHAxLnosIHAyLnopO1xyXG4gICAgICAgIGNvbnN0IG1heF96ID0gX21heChwMS56LCBwMi56KTtcclxuXHJcbiAgICAgICAgdGhpcy5taW4gID0gbmV3IENfUG9pbnQobWluX3gsIG1pbl95LCBtaW5feik7XHJcbiAgICAgICAgdGhpcy5tYXggID0gbmV3IENfUG9pbnQobWF4X3gsIG1heF95LCBtYXhfeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKGE6IENfUmFuZ2V8Q19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19Qb2ludCkgeyBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19Qb2ludDtcclxuICAgICAgICAgICAgaWYgKCBwLnggPCB0aGlzLm1pbi54IHx8IHAueCA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC55IDwgdGhpcy5taW4ueSB8fCBwLnkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueiA8IHRoaXMubWluLnogfHwgcC56ID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiBhIGluc3RhbmNlb2YgQ19SYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYSBhcyBDX1JhbmdlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3goKSA8IHRoaXMubWluLnggfHwgcC5tYXhfeCgpID4gdGhpcy5tYXgueCApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl95KCkgPCB0aGlzLm1pbi55IHx8IHAubWF4X3koKSA+IHRoaXMubWF4LnkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feigpIDwgdGhpcy5taW4ueiB8fCBwLm1heF96KCkgPiB0aGlzLm1heC56ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1pbl94KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi54O31cclxuICAgIHB1YmxpYyBtYXhfeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueDt9XHJcbiAgICBwdWJsaWMgbWluX3koKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLnk7fVxyXG4gICAgcHVibGljIG1heF95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC55O31cclxuICAgIHB1YmxpYyBtaW5feigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4uejt9XHJcbiAgICBwdWJsaWMgbWF4X3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lno7fVxyXG4gICAgcHVibGljIHNpemVfeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueCArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueSArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNpemVfeigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4ueiArIDE7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIGRvX2FsbF94eXooZm46ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeiA9IHRoaXMubWluLno7IHogPD0gdGhpcy5tYXguejsgeisrICkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5taW4ueTsgeSA8PSB0aGlzLm1heC55OyB5KysgKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gdGhpcy5taW4ueDsgeSA8PSB0aGlzLm1heC54OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbih4LCB5LCB4KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uICBfbWluKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSA8PSBiKSA/IGEgOiBiO1xyXG59XHJcbmZ1bmN0aW9uICBfbWF4KGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSA+PSBiKSA/IGEgOiBiO1xyXG59XHJcbiIsImltcG9ydCB7IElfRXhpc3QsIElfSGFzSG9wZSwgSV9Ib3BlQWN0aW9uIH0gZnJvbSBcIi4vSV9FdmVudE1hcFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuaW1wb3J0IHsgQ19XYWxrZXIgfSAgICBmcm9tIFwiLi9DX1dhbGtlclwiO1xyXG5pbXBvcnQgeyBUX0RpcmVjdGlvbiB9IGZyb20gXCIuL1RfRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENfSGVybywgSlNPTl9IZXJvIH0gICAgICBmcm9tIFwiLi9DX0hlcm9cIjtcclxuXHJcbnR5cGUgX19pbml0X2FyZyA9IHtcclxuICAgIGlkPzogICAgICBudW1iZXIsIFxyXG4gICAgc2F2ZV9pZD86IG51bWJlciwgXHJcbiAgICBuYW1lPzogICAgc3RyaW5nLCBcclxuICAgIGhlcm9lcz86ICBDX0hlcm9bXSwgXHJcbiAgICBwPzogICAgICAgQ19Qb2ludCwgXHJcbiAgICB4PzogICAgICAgbnVtYmVyLFxyXG4gICAgeT86ICAgICAgIG51bWJlcixcclxuICAgIHo/OiAgICAgICBudW1iZXIsXHJcbiAgICBkPzogICAgICAgVF9EaXJlY3Rpb24sXHJcbiAgICBtb3Rpb24/OiAgc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBKU09OX1RlYW0gPSB7XHJcbiAgICBpZD86ICAgICAgbnVtYmVyLCBcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgIHN0cmluZywgXHJcbiAgICBwb2ludD86ICB7eDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcn0sIFxyXG4gICAgeD86ICAgICAgIG51bWJlcixcclxuICAgIHk/OiAgICAgICBudW1iZXIsXHJcbiAgICB6PzogICAgICAgbnVtYmVyLFxyXG4gICAgZGlyZWN0Pzoge2Q6IG51bWJlcn0sXHJcbiAgICBoZXJvZXM/OiAgSlNPTl9IZXJvW10sIFxyXG4gICAgbW90aW9uPzogIHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X3RlYW1faW5mbyhhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydChcIlRlYW0gSW5mbzpcIiBcclxuICAgICAgICArIFwiXFxuaWQ6ICAgIFwiICAgICArIChhLmlkICAgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbm5hbWU6ICBcIiAgICAgKyAoYS5uYW1lICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5zYXZlX2lkOiBcIiAgICsgKGEuc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3g6IFwiICAgICArIChhLnBvaW50Py54ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl95OiBcIiAgICAgKyAoYS5wb2ludD8ueSAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfejogXCIgICAgICsgKGEucG9pbnQ/LnogID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX2Q6IFwiICAgICArIChhLmRpcmVjdD8uZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuLy8gICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpIGFsZXJ0X2hlcm9lc19pbmZvKGEuaGVyb2VzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDX1RlYW0gaW1wbGVtZW50cyBJX0V4aXN0IHtcclxuICAgIHByb3RlY3RlZCBteV9pZDogICAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG15X25hbWU6ICBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc2F2ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB3YWxrZXI6ICAgQ19XYWxrZXI7XHJcbiAgICBwcm90ZWN0ZWQgbXlfbGF5ZXI6IG51bWJlciA9IDk5O1xyXG4gICAgcHJvdGVjdGVkIGhlcm9lczogICBDX0hlcm9bXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaG9wZV9tb3Rpb246IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IF9faW5pdF9hcmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5teV9pZCAgID0gYT8uaWQgPz8gMDtcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBhPy5uYW1lID8/ICdOZW8gVGVhbT8nO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCA9IGE/LnNhdmVfaWQgPz8gMDtcclxuICAgICAgICB0aGlzLndhbGtlciA9IG5ldyBDX1dhbGtlcigpO1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0gW107XHJcbiAgICAgICAgdGhpcy5ob3BlX21vdGlvbiA9IGE/Lm1vdGlvbiA/PyAnTk9QJzsgICAgXHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgdGhpcy5fX2luaXQoYSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19pbml0KGE6IF9faW5pdF9hcmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15X2lkICAgPSBhLmlkICAgICAgPz8gdGhpcy5teV9pZFxyXG4gICAgICAgIHRoaXMubXlfbmFtZSA9IGEubmFtZSAgICA/PyB0aGlzLm15X25hbWU7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gYS5zYXZlX2lkID8/IHRoaXMuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5wICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF9wKGEucCk7XHJcbiAgICAgICAgaWYgKGEueCAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfeChhLngpO1xyXG4gICAgICAgIGlmIChhLnkgIT09IHVuZGVmaW5lZCkgdGhpcy53YWxrZXIuc2V0X3goYS55KTtcclxuICAgICAgICBpZiAoYS56ICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF94KGEueik7XHJcbiAgICAgICAgaWYgKGEuZCAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfZGlyKGEuZCk7XHJcbiAgICAgICAgdGhpcy5ob3BlX21vdGlvbiA9IGEubW90aW9uID8/IHRoaXMuaG9wZV9tb3Rpb247IFxyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhlcm8gb2YgYS5oZXJvZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kX2hlcm8oaGVybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBfX2luaXRfYXJnKSB7XHJcbiAgICAgICAgdGhpcy5fX2luaXQoYXJnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnVGVhbV8nICsgdGhpcy5teV9pZC50b1N0cmluZygxNikucGFkU3RhcnQoNSwgJzAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3aXRoaW4ocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhlcmUgPSB0aGlzLndhbGtlci5nZXRfcCgpO1xyXG4gICAgICAgIHJldHVybiBoZXJlLndpdGhpbihwKTsgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbGF5ZXIoKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5teV9sYXllcjt9XHJcbiAgICBwdWJsaWMgc2V0X2xheWVyKGxheWVyOiBudW1iZXIpOiB2b2lkIHt0aGlzLm15X2xheWVyID0gbGF5ZXI7fVxyXG4gICAgcHVibGljIHRvX2xldHRlcigpOiBzdHJpbmd8bnVsbCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLndhbGtlci5nZXRfZGlyKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiByZXR1cm4gJ+KGkSc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcmV0dXJuICfihpInO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHJldHVybiAn4oaTJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiByZXR1cm4gJ+KGkCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn8J+MgCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGtlci5nZXRfcCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wKHA6Q19Qb2ludCwgZD86IFRfRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3AocCwgZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3ooKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X3ooKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfeih6OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoeiA8IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfeih6KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZGlyKCk6IFRfRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X2RpcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9kaXIoZDogVF9EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfZGlyKGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfYXJvdW5kKGZyb250OiBudW1iZXIsIHJpZ2h0Om51bWJlciwgdXA6IG51bWJlciA9IDApOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X2Fyb3VuZChmcm9udCwgcmlnaHQsIHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaG9wZV9wX2Z3ZCgpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJNb3ZlXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wX2Z3ZCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMud2Fsa2VyLnNldF9wX2Z3ZCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9iYWsoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcF9iYWsoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLndhbGtlci5zZXRfcF9iYWsoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3R1cm5fcigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJUdXJuXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy53YWxrZXIudHVybl9yKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX2woKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMud2Fsa2VyLnR1cm5fbCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBob3BlX3BfdXAoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVXBcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3BfdXAoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF91cCgpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfcF9kb3duKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIkRvd25cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3BfZG93bigpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMubW92ZV9wX2Rvd24oKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZV9wX3VwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF9wX3VwKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbW92ZV9wX2Rvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3BfZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc05HKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMucHVzaChoZXJvKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVfaGVybyhoZXJvOiBDX0hlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IHRoaXMuaGVyb2VzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gaGVybyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX1RlYW0ge1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLndhbGtlci5nZXRfeCgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLndhbGtlci5nZXRfeSgpO1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLndhbGtlci5nZXRfeigpO1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLndhbGtlci5nZXRfZGlyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAgICAgIHRoaXMubXlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgc2F2ZV9pZDogdGhpcy5zYXZlX2lkLFxyXG4gICAgICAgICAgICBwb2ludDogICB7eDogeCwgeTogeSwgejogen0sXHJcbiAgICAgICAgICAgIGRpcmVjdDogIHtkOiBkfSxcclxuICAgICAgICAgICAgaGVyb2VzOiAgQ19IZXJvLmVuY29kZV9oZXJvZXModGhpcy5oZXJvZXMpLFxyXG4gICAgICAgICAgICBtb3Rpb246ICB0aGlzLmhvcGVfbW90aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fVGVhbXx1bmRlZmluZWQpOiBDX1RlYW0ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYS5pZCAgICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfaWQgICAgICAgPSBhLmlkO1xyXG4gICAgICAgIGlmIChhLm5hbWUgIT09IHVuZGVmaW5lZCkgICAgdGhpcy5teV9uYW1lICAgICA9IGEubmFtZTtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgICAgPSBhLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEubW90aW9uICE9PSB1bmRlZmluZWQpICB0aGlzLmhvcGVfbW90aW9uID0gYS5tb3Rpb247XHJcblxyXG4gICAgICAgIGlmIChhLnBvaW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGEucG9pbnQgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrZXIuZGVjb2RlKGEucG9pbnQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKGEueCAhPT0gdW5kZWZpbmVkICYmIGEueSAhPT0gdW5kZWZpbmVkICYmIGEueiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2VyLmRlY29kZSh7eDogYS54LCB5OiBhLnksIHo6IGEuen0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEuZGlyZWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGEucG9pbnQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2VyLmRlY29kZShhLmRpcmVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYS5oZXJvZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcyA9IENfSGVyby5kZWNvZGVfaGVyb2VzKGEuaGVyb2VzKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCB0eXBlIFRfQXR0ciA9IHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX1VybE9wdCB7XHJcbiAgICBwcm90ZWN0ZWQgdjogVF9BdHRyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHM/OiAgc3RyaW5nKTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0PzogIFRfQXR0cik7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYT86IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnYgPSB7fSBhcyBUX0F0dHI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2Zyb21fc3RyaW5nKGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy52ID0gYSBhcyBUX0F0dHI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52ID0ge30gYXMgVF9BdHRyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfa2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3Qga2V5X2xpc3Q6IHN0cmluZ1tdID0gbmV3IEFycmF5IGFzIHN0cmluZ1tdO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAga2V5X2xpc3QucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5X2xpc3Q7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgaWYgICh0eXBlb2YgdGhpcy52W2tleV0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZba2V5XSBhcyBzdHJpbmc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChzdHI6IHN0cmluZyk6ICB2b2lkO1xyXG4gICAgcHVibGljIHNldChhdHI6IFRfQXR0cik6ICB2b2lkO1xyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsPzogc3RyaW5nKTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbD86IG51bWJlcik6IHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KHVrbjogYW55LCAgICB2YWw/OiBzdHJpbmd8bnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1a24gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkX2Zyb21fc3RyaW5nKHVrbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W3Vrbl0gPSB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudlt1a25dID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVrbiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cjogVF9BdHRyID0gdWtuIGFzIFRfQXR0cjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudltpdGVtXSA9IGF0dHJbaXRlbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudltrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnYgPSB7fSBhcyBUX0F0dHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fc3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbGVuOiBudW1iZXIgPSAgT2JqZWN0LmtleXModGhpcy52KS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA8IDEpICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgdmFyIHN0cl9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgc3RyX2FycmF5LnB1c2goa2V5ICsgXCI9XCIgKyB0aGlzLnZba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyX2FycmF5LmpvaW4oXCImXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX0Zvcm1EYXRhKCk6IEZvcm1EYXRhfG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlbjogbnVtYmVyID0gIE9iamVjdC5rZXlzKHRoaXMudikubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPCAxKSAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnYpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZ3xudW1iZXIgPSB0aGlzLnZba2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtX2RhdGE7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0X2Zyb21fc3RyaW5nKHM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmFkZF9mcm9tX3N0cmluZyhzKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhZGRfZnJvbV9zdHJpbmcoczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gcy5yZXBsYWNlKC9eKFxcPz8pKC4qKSQvLCAnJDInKTtcclxuICAgICAgICBjb25zdCBzdHJfYXJyYXk6IHN0cmluZ1tdID0gc3RyLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICBzdHJfYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlfdmFsdWUgPSBpdGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKGtleV92YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZba2V5X3ZhbHVlWzBdXSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W2tleV92YWx1ZVswXV0gPSBrZXlfdmFsdWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUX0RpcmVjdGlvbiB9IGZyb20gXCIuL1RfRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENfUG9pbnQgfSAgICAgZnJvbSBcIi4vQ19Qb2ludFwiO1xyXG5cclxudHlwZSBfX0pTT05fYXJnID0ge1xyXG4gICAgeD86IG51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICB6PzogbnVtYmVyLFxyXG4gICAgZD86IG51bWJlcixcclxufVxyXG5leHBvcnQgY2xhc3MgQ19XYWxrZXIge1xyXG4gICAgcHJvdGVjdGVkIHA6IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgZDogVF9EaXJlY3Rpb247XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnAgID0gbmV3IENfUG9pbnQoKTtcclxuICAgICAgICB0aGlzLmQgPSBUX0RpcmVjdGlvbi5OO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kaXIoKTogVF9EaXJlY3Rpb24ge3JldHVybiB0aGlzLmR9XHJcbiAgICBwdWJsaWMgc2V0X2RpcihkOiBUX0RpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3AoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3AocDogQ19Qb2ludCwgZD86IFRfRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLmQgPSBkID8/IHRoaXMuZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfeCgpOiBudW1iZXIge3JldHVybiB0aGlzLnAueH1cclxuICAgIHB1YmxpYyBnZXRfeSgpOiBudW1iZXIge3JldHVybiB0aGlzLnAueX1cclxuICAgIHB1YmxpYyBnZXRfeigpOiBudW1iZXIge3JldHVybiB0aGlzLnAuen1cclxuXHJcbiAgICBwdWJsaWMgc2V0X3goeDogbnVtYmVyKTogdm9pZCB7dGhpcy5wLnggPSB4fVxyXG4gICAgcHVibGljIHNldF95KHk6IG51bWJlcik6IHZvaWQge3RoaXMucC55ID0geX1cclxuICAgIHB1YmxpYyBzZXRfeih6OiBudW1iZXIpOiB2b2lkIHt0aGlzLnAueiA9IHp9XHJcblxyXG4gICAgcHVibGljIGdldF9wX2Z3ZCgpOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZndkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3AodGhpcy5nZXRfcF9md2QoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfYmFrKCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0X3BfbW92ZSgtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfYmFrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3AodGhpcy5nZXRfcF9iYWsoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3BfdXAoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICAgICAgcC56LS07XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfdXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcCh0aGlzLmdldF9wX3VwKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2Rvd24oKTogQ19Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBDX1BvaW50KHRoaXMucCk7XHJcbiAgICAgICAgcC56Kys7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BfZG93bigpIHtcclxuICAgICAgICB0aGlzLnNldF9wKHRoaXMuZ2V0X3BfZG93bigpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2dldF9wX21vdmUob2Zmc2V0OiBudW1iZXIpOkNfUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludCh0aGlzLnApO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcC55IC09IG9mZnNldDticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiBwLnggKz0gb2Zmc2V0O2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHAueSArPSBvZmZzZXQ7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcC54IC09IG9mZnNldDticmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIpOiBDX1BvaW50IHtcclxuICAgICAgICBjb25zdCBjdXJfcG9zID0gdGhpcy5wO1xyXG4gICAgICAgIGNvbnN0IGN1cl9kaXIgPSB0aGlzLmQ7XHJcbiAgICAgICAgdmFyIHRhcmdldF94ICA9IHRoaXMucC54O1xyXG4gICAgICAgIHZhciB0YXJnZXRfeSAgPSB0aGlzLnAueTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3ogID0gdGhpcy5wLnogLSB1cDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSByaWdodDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95IC09IGZyb250O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94ICs9IGZyb250O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludCh0YXJnZXRfeCwgdGFyZ2V0X3ksIHRhcmdldF96KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX3IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5FO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlM7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2woKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5kID0gVF9EaXJlY3Rpb24uRTticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0dXJuX2IoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzogdGhpcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogX19KU09OX2FyZyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5wLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucC55LFxyXG4gICAgICAgICAgICB6OiB0aGlzLnAueixcclxuICAgICAgICAgICAgZDogdGhpcy5kIGFzIG51bWJlcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IF9fSlNPTl9hcmcpOiBDX1dhbGtlciB7XHJcbiAgICAgICAgaWYgKGEueCAhPT0gdW5kZWZpbmVkICYmIGEueSAhPT0gdW5kZWZpbmVkICYmIGEueiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucC54ID0gYS54O1xyXG4gICAgICAgICAgICB0aGlzLnAueSA9IGEueTtcclxuICAgICAgICAgICAgdGhpcy5wLnogPSBhLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmQgIT09IHVuZGVmaW5lZCkgdGhpcy5kICAgPSBhLmQgYXMgVF9EaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENfUmFuZ2UgfSBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcbmltcG9ydCB7IF9yb3VuZCB9IGZyb20gXCIuL0ZfTWF0aFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVF9XYWxsID0ge1xyXG4gICAgbWluX3g6IG51bWJlcixcclxuICAgIG1heF94OiBudW1iZXIsXHJcbiAgICBtaW5feTogbnVtYmVyLFxyXG4gICAgbWF4X3k6IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfV2FsbCB7XHJcbiAgICBwcm90ZWN0ZWQgdzogVF9XYWxsW11bXTtcclxuICAgIHByb3RlY3RlZCBkOiBudW1iZXJcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXB0aDogbnVtYmVyID0gNSwgc2l6ZTogQ19SYW5nZSkge1xyXG4gICAgICAgIGlmIChkZXB0aCA8IDMpIGRlcHRoID0gNTtcclxuICAgICAgICBpZiAoZGVwdGggJSAyICE9PSAxKSBkZXB0aCsrOyAgLy8g5aWH5pWw44Gu44G/5a++5b+c44CCXHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl94OiBudW1iZXIgPSBzaXplLm1pbl94KCk7XHJcbiAgICAgICAgY29uc3QgbWluX3k6IG51bWJlciA9IHNpemUubWluX3koKTtcclxuICAgICAgICBjb25zdCBtYXhfeDogbnVtYmVyID0gc2l6ZS5tYXhfeCgpO1xyXG4gICAgICAgIGNvbnN0IG1heF95OiBudW1iZXIgPSBzaXplLm1heF95KCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjZW50ZXJfeDogbnVtYmVyID0gKG1heF94IC0gbWluX3gpIC8gMjtcclxuICAgIFxyXG4gICAgICAgIC8vIOWfuua6luOBqOOBquOCi+WjgSjkuIDnlarpgaDjgY/jga7lo4Ep44Gu5q2j6Z2i44K144Kk44K6KOaoquW5hSnjgpLmsYLjgoHjgotcclxuICAgICAgICAvLyDkuIDnlarpgaDjgY8oZGVwdGggLSAxKeOBruWjgeOBruaVsOOBjGRlcHRo5YCL44Gr44Gq44KL44KI44GG44Gr6Kq/5pW044GZ44KLXHJcbiAgICAgICAgY29uc3QgZnJvbnRfd2FsbF9zaXplX3g6IG51bWJlciA9IChtYXhfeCAtIG1pbl94KSAvIGRlcHRoO1xyXG5cclxuICAgICAgICAvLyDln7rmupbjgajjgarjgovlgbTlo4Hjga7jgrXjgqTjgroo5qiq5bmFKeOCkuaxguOCgeOCi1xyXG4gICAgICAgIC8vIOS4gOeVqumBoOOBj+OBruWjgSjkuK3lpK4p44Gu5bem56uv44GL44KJZGVwdGjlgIvjga7lgbTlo4HjgpLlj5bjgozjgovjgojjgYbjgavjgrXjgqTjgrroqr/mlbTjgZnjgotcclxuICAgICAgICBjb25zdCBzaWRlX3dhbGxfc2l6ZV94OiAgbnVtYmVyID0gKGNlbnRlcl94IC0gZnJvbnRfd2FsbF9zaXplX3ggLyAyKSAvIGRlcHRoO1xyXG4gICAgXHJcbiAgICAgICAgLy8g5ZCEZGVwdGjliKXjga7mraPpnaLlo4Hjga7mqKrluYXjgpLmsYLjgoHjgovjgIJcclxuICAgICAgICAvLyDoqIjnrpfjga7liKnkvr/mgKfjgpLogIPmha7jgZfjgabjgIHjg4/jg7zjg5XjgrXjgqTjgrrjgpLmsYLjgoHjgotcclxuICAgICAgICBjb25zdCBmcm9udF93YWxsX0hfc2l6ZV94OiBudW1iZXJbXSA9IG5ldyBBcnJheShkZXB0aCArIDEpO1xyXG4gICAgXHJcbiAgICAgICAgZnJvbnRfd2FsbF9IX3NpemVfeFtkZXB0aF0gPSBmcm9udF93YWxsX3NpemVfeCAvIDI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlcHRoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZnJvbnRfd2FsbF9IX3NpemVfeFtpXSA9IGZyb250X3dhbGxfSF9zaXplX3hbaSArIDFdICsgc2lkZV93YWxsX3NpemVfeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWfuua6luOBqOOBquOCi+WjgSjkuIDnlarpgaDjgY/jga7lo4Ep44Gu5q2j6Z2i44K144Kk44K6KOe4puW5hSnjgpLmsYLjgoHjgotcclxuICAgICAgICAvLyDkuIDnlarpgaDjgY8oZGVwdGggLSAxKeOBruWjgeOBruaVsOOBjGRlcHRo5YCL44Gr44Gq44KL44KI44GG44Gr6Kq/5pW044GZ44KLXHJcbiAgICAgICAgY29uc3QgZnJvbnRfd2FsbF9zaXplX3k6IG51bWJlciA9IChtYXhfeSAtIG1pbl95KSAvIGRlcHRoO1xyXG5cclxuICAgICAgICAvLyDlpKnkupXjga7nuKbluYXjga7lopfliIbjgpLmsYLjgoHjgovjgILlibLlkIjjga/pganlvZPvvIjnrJHvvIlcclxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7pq5jjgZUobWF4X3kgLSBtaW5feSnjgYvjgonkuIDnlarpgaDjgY/jga7lo4Hjga7pq5jjgZXjgpLlvJXjgYTjgaZcclxuICAgICAgICAvLyDmt7HjgZUoZGVwdGggKyAxKeOBp+WJsuOCi+OBk+OBqOOBq+OCiOOCiuWil+WIhuOBqOOBl+OBn1xyXG4gICAgICAgIGNvbnN0IHNpZGVfd2FsbF9zaXplX1QgPSAgKG1heF95IC0gbWluX3kgLSBmcm9udF93YWxsX3NpemVfeSkgLyAoKGRlcHRoICsgMSkgKiAyKTtcclxuXHJcbiAgICAgICAgLy8g5bqK44Gu5aKX5YiG44KS5rGC44KB44KL44CC5rGC44KB5pa544Gv5LiK6KiY44Go5ZCM44GYXHJcbiAgICAgICAgY29uc3Qgc2lkZV93YWxsX3NpemVfQiA9ICAobWF4X3kgLSBtaW5feSAtIGZyb250X3dhbGxfc2l6ZV95KSAvICgoZGVwdGggKyAxKSAqIDIpO1xyXG5cclxuICAgICAgICAvLyDku6XkuIrjga7lgKTjgpLnlKjjgYTjgablkITot53pm6IoZGVwdGgp44Gu5q2j6Z2i5aOB44Gu5L2N572u5rG644KB44KS44GZ44KLXHJcbiAgICAgICAgLy8gd2FsbOOBruesrOS4gOW8leaVsOOBr+i3nembouOAgeesrOS6jOW8leaVsOOBr+W3puWPs+OBruS9jee9ru+8iOS4gOeVquW3puOBjDDjgIHkuIDnlarlj7PjgYxkZXB0aC0xKVxyXG4gICAgICAgIGNvbnN0IHdhbGw6IFRfV2FsbFtdW10gPSBuZXcgQXJyYXkoZGVwdGggKyAxKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRlcHRoICsgMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHdhbGxbal0gPSBuZXcgQXJyYXkoZGVwdGggKyAxKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBkZXB0aCArIDE7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2tfeCA9IGNlbnRlcl94IC0gZnJvbnRfd2FsbF9IX3NpemVfeFtqXSAqIChkZXB0aCAtIDIgKiBrKTtcclxuICAgICAgICAgICAgICAgIHdhbGxbal1ba10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluX3g6IF9yb3VuZCh3a194LCAwKSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhfeDogX3JvdW5kKHdrX3ggICsgZnJvbnRfd2FsbF9IX3NpemVfeFtqXSAqIDIsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbl95OiBfcm91bmQobWluX3kgKyBzaWRlX3dhbGxfc2l6ZV9UICogaiwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3k6IF9yb3VuZChtYXhfeSAtIHNpZGVfd2FsbF9zaXplX0IgKiBqLCAwKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmQgPSBkZXB0aDtcclxuICAgICAgICB0aGlzLncgPSB3YWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9kZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0KGRlcHRoOiBudW1iZXIsIG9mZnNldDogbnVtYmVyKTogVF9XYWxsIHtcclxuICAgICAgICBjb25zdCBIX2RlcHQgPSAodGhpcy5kIC0gMSkgLyAyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLndbZGVwdGhdW0hfZGVwdCArIG9mZnNldF07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBfcm91bmQobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWluKGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5taW4objEsIG4yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWF4KGE6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnJlZHVjZSgobjE6IG51bWJlciwgbjI6IG51bWJlcikgPT4gTWF0aC5tYXgobjEsIG4yKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ19VcmxPcHQgfSBmcm9tIFwiLi9DX1VybE9wdFwiO1xyXG5pbXBvcnQgeyBnX212bSB9ICAgIGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1RfYW5kX2dldF9KU09OKFxyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgb3B0OiBDX1VybE9wdCwgXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBmb3JtX2RhdGEgPSBvcHQudG9fRm9ybURhdGEoKTtcclxuICAgIGlmIChmb3JtX2RhdGEgPT09IG51bGwpIHJldHVybiAnJztcclxuICAgIHZhciByZXM6IFJlc3BvbnNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1fZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGdfbXZtLndhcm5pbmdfbWVzc2FnZSgn6YCa5L+h44Ko44Op44O8OiAnICsgZXJyKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG5cclxuICAgIHZhciB0eHQ6UHJvbWlzZTxzdHJpbmc+O1xyXG4gICAgaWYgKG1vbml0b3IpIHtcclxuICAgICAgICB0eHQgPSByZXMudGV4dCgpLnRoZW4odHg9PntcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7aSA8ICh0eC5sZW5ndGggPCAxMDAwP3R4Lmxlbmd0aDoxMDAwKTsgaSArPSAyNTApIFxyXG4gICAgICAgICAgICAgICAgYWxlcnQodHguc3Vic3RyaW5nKGksIGkrMjUwKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0eDtcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eHQgPSByZXMudGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eHQudGhlbih0eHQ9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0eHQpO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGdfbXZtLndhcm5pbmdfbWVzc2FnZSgnSlNPTuW9ouW8j+OBruODh+OCs+ODvOODieOCqOODqeODvCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkU3RyZWFtKHN0cmVhbTogUmVhZGFibGVTdHJlYW0pOiBhbnkge1xyXG4gICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xyXG4gICAgbGV0IGNodW5rID0gJyc7XHJcblxyXG4gICAgLy8gcmVhZCgpIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXNcclxuICAgIC8vIHdoZW4gYSB2YWx1ZSBoYXMgYmVlbiByZWNlaXZlZFxyXG4gICAgcmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uIHByb2Nlc3NUZXh0KHsgZG9uZSwgdmFsdWUgfSk6IFByb21pc2U8UmVhZGFibGVTdHJlYW1SZWFkUmVzdWx0PHN0cmluZz4gfCBSZWFkYWJsZVN0cmVhbVJlYWREb25lUmVzdWx0PHN0cmluZz4+IHtcclxuICAgICAgLy8gUmVzdWx0IG9iamVjdHMgY29udGFpbiB0d28gcHJvcGVydGllczpcclxuICAgICAgLy8gZG9uZSAgLSB0cnVlIGlmIHRoZSBzdHJlYW0gaGFzIGFscmVhZHkgZ2l2ZW4geW91IGFsbCBpdHMgZGF0YS5cclxuICAgICAgLy8gdmFsdWUgLSBzb21lIGRhdGEuIEFsd2F5cyB1bmRlZmluZWQgd2hlbiBkb25lIGlzIHRydWUuXHJcbiAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaHVuayArPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vIFJlYWQgc29tZSBtb3JlLCBhbmQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluXHJcbiAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4ocHJvY2Vzc1RleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBPU1RfYW5kX21vdmVfcGFnZSh1cmw6IHN0cmluZywgb3B0OiBDX1VybE9wdCk6IHZvaWQge1xyXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZV9mb3JtKHVybCwgb3B0KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLnN1Ym1pdCgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2Zvcm0odXJsOiBzdHJpbmcsIG9wdDogQ19VcmxPcHQpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAgICAgJ2R1bW15X2Zvcm1fJyArIG5ldyBEYXRlKCkudmFsdWVPZigpLnRvU3RyaW5nKCkpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgIHVybCk7XHJcbiAgICBmb3JtLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgb2Ygb3B0LmdldF9rZXlzKCkpIHtcclxuICAgICAgICBjcmVhdGVfaW5wdXQoZm9ybSwga2V5LCBvcHQuZ2V0KGtleSkpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfaW5wdXQoZm9ybTogSFRNTEZvcm1FbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHZhciBmaWQ6IHN0cmluZztcclxuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IG51bGwpIHtcclxuICAgICAgICBmaWQgPSBmb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpZCA9ICdkdW1teV9mb3JtJztcclxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBmaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xyXG4gICAgaS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICAgZmlkKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCduYW1lJywgIG5hbWUpO1xyXG4gICAgaS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgaS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGkpO1xyXG5cclxuICAgIHJldHVybiBpO1xyXG59IiwiaW1wb3J0IHsgQ19Qb2ludCB9ICBmcm9tIFwiLi9DX1BvaW50XCJcclxuaW1wb3J0IHsgQ19SYW5nZSB9ICBmcm9tIFwiLi9DX1JhbmdlXCI7XHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgQ19XYWxsIH0gICBmcm9tIFwiLi9DX1dhbGxcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZHMsIGdfbXZtIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5X21hemUyRCgpOiB2b2lkIHsgXHJcbiAgICBjb25zdCBwcmU6IEhUTUxFbGVtZW50fG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3MkRfcHJlJyk7XHJcbiAgICBpZiAocHJlICE9PSBudWxsKSBwcmUuaW5uZXJUZXh0ID0gZ19tYXplLnRvX3N0cmluZyhnX3RlYW0uZ2V0X3AoKS56KTtcclxufVxyXG5leHBvcnQgdHlwZSBUX0Ryb3dTZXQgPSB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50fG51bGwsXHJcbiAgICBjb246ICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxudWxsLFxyXG4gICAgZGVwdGg6ICBudW1iZXIsXHJcbiAgICB3YWxsOiAgIENfV2FsbHxudWxsLFxyXG59XHJcblxyXG50eXBlIFRfeHkgICA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cclxudHlwZSBUX1JlY3QgPSB7dGw6IFRfeHksIHRyOiBUX3h5LCBibDogVF94eSwgYnI6IFRfeHl9O1xyXG5cclxuLy8gM0Tmj4/lhpnmmYLjgavkvb/nlKjjgZnjgovlpKfln5/lpInmlbDjga7mupblgplcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfbWF6ZTNEKCk6IFRfRHJvd1NldCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3M0RfY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAoY2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgICAgZ19tdm0/Lndhcm5pbmdfbWVzc2FnZSgnQ2FudmFzIGlzbnQgZm91bmQhIGlkPU1hemVfdmlldzNEX2NhbnZhcycpO1xyXG4gICAgICAgIHJldHVybiB7Y2FudmFzOiBudWxsLCBjb246IG51bGwsIGRlcHRoOiAwLCB3YWxsOiBudWxsfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbjogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChjb24gPT09IG51bGwpIHtcclxuICAgICAgICBnX212bT8ud2FybmluZ19tZXNzYWdlKCdCcm93c2VyIGRvbnQgc3VycHBvcnQgMkQgZ3JhcGhpY3MhJyk7XHJcbiAgICAgICAgcmV0dXJuIHtjYW52YXM6IG51bGwsIGNvbjogbnVsbCwgZGVwdGg6IDAsIHdhbGw6IG51bGx9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDNE44Oh44Kk44K644KS5o+P5YaZ44GZ44KL44Kt44Oj44Oz44OQ44K56KaB57Sg44Gu44K144Kk44K644KSQ1NT5LiK44Gu44CO6KaL44Gf55uu44CP44Gu44K144Kk44K644Gr5ZCI44KP44Gb44KLXHJcbiAgICBjYW52YXMud2lkdGggID0gY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgZGVwdGggPSA1OyAvLyDlpYfmlbDjga7jgb/lr77lv5zjgILjg4Djg7Pjgrjjg6fjg7Pjga7opovpgJrjgZfjgpLoia/jgY/jgZnjgovjgarjgokgNSDjgYvjgoLjgZfjgozjgarjgYRcclxuXHJcbiAgICBjb25zdCB0b3BfcCA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgY29uc3QgYnRtX3AgPSBuZXcgQ19Qb2ludChjYW52YXMuY2xpZW50V2lkdGggIC0gMSwgY2FudmFzLmNsaWVudEhlaWdodCAtIDEsIDApO1xyXG4gICAgY29uc3Qgd2FsbCAgPSBuZXcgQ19XYWxsKGRlcHRoLCBuZXcgQ19SYW5nZSh0b3BfcCwgYnRtX3ApKTtcclxuICAgIHJldHVybiB7Y2FudmFzOiBjYW52YXMsIGNvbjogY29uLCBkZXB0aDogZGVwdGgsIHdhbGw6IHdhbGx9O1xyXG59XHJcblxyXG4vLyAzROaPj+WGmeaZguOBrueUu+mdouWIneacn+WMluOAguOBqOOCiuOBguOBiOOBmuWkqeS6leOBqOW6iuOCkuaPj+OBj1xyXG5mdW5jdGlvbiBkcmF3X2luaXRfbWF6ZTNEKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHMuY2FudmFzID09PSBudWxsIHx8IGdfZHMuY29uID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZ19kcy5jb24uZmlsbFN0eWxlID0gJyNhYWFhYWEnO1xyXG4gICAgZ19kcy5jb24uZmlsbFJlY3QoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAgZ19kcy5jYW52YXMuY2xpZW50V2lkdGggLSAxLCBcclxuICAgICAgICBnZXRfaG9saXpvbl9saW5lKCksXHJcbiAgICApO1xyXG5cclxuICAgIGdfZHMuY29uLmZpbGxTdHlsZSA9ICcjNjY2NmZmJztcclxuICAgIGdfZHMuY29uLmZpbGxSZWN0KFxyXG4gICAgICAgIDAsIFxyXG4gICAgICAgIGdldF9ob2xpem9uX2xpbmUoKSwgXHJcbiAgICAgICAgZ19kcy5jYW52YXMuY2xpZW50V2lkdGggICAtIDEsIFxyXG4gICAgICAgIGdfZHMuY2FudmFzLmNsaWVudEhlaWdodCAgLSAxLFxyXG4gICAgKTtcclxuXHJcbiAgICBkcm93X2Zsb29yX2xpbmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0X2hvbGl6b25fbGluZSgpOiBudW1iZXIge1xyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuIC0xO1xyXG4gICAgcmV0dXJuIGdfZHMud2FsbC5nZXQoZ19kcy5kZXB0aCwgMCkubWF4X3k7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3dfZmxvb3JfbGluZSgpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzLmNhbnZhcyA9PT0gbnVsbCB8fCBnX2RzLmNvbiA9PT0gbnVsbCB8fCBnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiAgID0gZ19kcy5jb247XHJcbiAgICBjb25zdCB3YWxsICA9IGdfZHMud2FsbDtcclxuICAgIGNvbnN0IGRlcHRoID0gZ19kcy5kZXB0aDtcclxuICAgIGNvbnN0IEhfZGVwdCA9IChkZXB0aCAtIDEpIC8gMjtcclxuXHJcbiAgICBjb25zdCBsZWZ0X3ggID0gMDtcclxuICAgIGNvbnN0IHJpZ2h0X3ggPSBnX2RzLmNhbnZhcy5jbGllbnRXaWR0aCAgLSAxO1xyXG4gICAgY29uc3QgZnJvbnRfeSA9IGdfZHMuY2FudmFzLmNsaWVudEhlaWdodCAtIDE7XHJcbiAgICBjb25zdCBiYWNrX3kgID0gZ2V0X2hvbGl6b25fbGluZSgpO1xyXG5cclxuICAgIGNvbi5zdHJva2VTdHlsZSA9ICcjOTk5OWZmJztcclxuICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcblxyXG4gICAgLy8g5qiq57eaKOeUu+mdouOBq+WvvuOBl+OBpuawtOW5synjgpLlvJXjgY9cclxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgZGVwdGggKyAxOyB5KyspIHtcclxuICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uLm1vdmVUbyhsZWZ0X3ggLCB3YWxsLmdldCh5LCAwKS5tYXhfeSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyhyaWdodF94LCB3YWxsLmdldCh5LCAwKS5tYXhfeSk7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyDnuKbnt5rjgpLlvJXjgY9cclxuICAgIGZvciAodmFyIHggPSAtSF9kZXB0OyB4IDwgSF9kZXB0ICsgMTsgeCsrKSB7XHJcbiAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbi5tb3ZlVG8od2FsbC5nZXQoMCwgICAgIHgpLm1pbl94LCBmcm9udF95KTtcclxuICAgICAgICBjb24ubGluZVRvKHdhbGwuZ2V0KGRlcHRoLCB4KS5taW5feCwgYmFja195ICk7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheV9tYXplM0QoKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jYW52YXMgPT09IG51bGwgfHwgZ19kcy5jb24gPT09IG51bGwgfHwgZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZHJhd19pbml0X21hemUzRCgpO1xyXG4gICAgZGlzcGxleV9tYXNlM0RfZGlyZWN0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgZGVwdGggICA9ICBnX2RzLmRlcHRoO1xyXG4gICAgY29uc3QgSF9kZXB0aCA9IChkZXB0aCAtIDEpIC8gMjtcclxuICAgIGZvciAodmFyIGogPSBnX2RzLmRlcHRoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAvLyDlj7PlgbTjgYzopovjgYjjgabjgYTjgovlo4Hjga7mj4/lhpkgKOW3puWBtOOBi+OCieaPj+WGmSlcclxuICAgICAgICBmb3IgKHZhciBrID0gLUhfZGVwdGg7IGsgPCAwOyBrKyspIHtcclxuICAgICAgICAgICAgc3dpdGNoIChnX21hemUuZ2V0X2NlbGwoZ190ZWFtLmdldF9hcm91bmQoaiwgaywgMCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfcmlnaHRfc2lkZV9zdG9uZShqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfZmxvb3JfdW5leHAoaiAsayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19yaWdodF9zaWRlX3N0YWlycyhqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOOAgOW3puWBtOOBjOimi+OBiOOBpuOBhOOCi+WjgeOBruaPj+WGmSAo5Y+z5YG044GL44KJ5o+P5YaZKVxyXG4gICAgICAgIGZvciAodmFyIGsgPSBIX2RlcHRoOyBrID4gMDsgay0tKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ19tYXplLmdldF9jZWxsKGdfdGVhbS5nZXRfYXJvdW5kKGosIGssIDApKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2xlZnRfc2lkZV9zdG9uZShqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfZmxvb3JfdW5leHAoaiAsayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19sZWZ0X3NpZGVfc3RhaXJzKGosIGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfZmxvb3IoaiAsayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q2j6Z2i44Gu5aOB44Gu5o+P5YaZXHJcbiAgICAgICAgc3dpdGNoIChnX21hemUuZ2V0X2NlbGwoZ190ZWFtLmdldF9hcm91bmQoaiwgMCwgMCkpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6XHJcbiAgICAgICAgICAgICAgICBkcm93X2Zyb250X3N0b25lKGosIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5leHA6IFxyXG4gICAgICAgICAgICAgICAgZHJvd19mbG9vcl91bmV4cChqICwwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgZHJvd19mcm9udF9zdGFpcnMoaiwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5GbG9vcjogXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBkcm93X2Zsb29yKGogLDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zsb29yX3VuZXhwKGQ6IG51bWJlciwgdzpudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZmxvb3IoZCwgdywgJyM2NmZmZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mcm9udF9zdG9uZShkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mcm9udChkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19sZWZ0X3NpZGVfc3RvbmUoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfbGVmdF9zaWRlKGQsIHcsICcjMDBmZjAwJywgJyMwMDAwZmYnKTtcclxuICAgIGRyb3dfZnJvbnQgICAgKGQsIHcsICcjMDBmZjAwJywgJyMwMDAwZmYnKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X3JpZ2h0X3NpZGVfc3RvbmUoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfcmlnaHRfc2lkZShkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbiAgICBkcm93X2Zyb250ICAgICAoZCwgdywgJyMwMGZmMDAnLCAnIzAwMDBmZicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zyb250X3N0YWlycyhkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mbG9vciAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfY2VpbGluZyhkLCB3LCAnI2ZmZmZjYycsICcjZmZmZjAwJyk7XHJcbiAgICBkcm93X2Zyb250ICAoZCwgdywgIG51bGwsICAgICAnI2ZmZmYwMCcpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfbGVmdF9zaWRlX3N0YWlycyhkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mbG9vciAgICAoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19jZWlsaW5nICAoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19sZWZ0X3NpZGUoZCwgdywgIG51bGwsICAgICAnI2ZmZmYwMCcpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBkcm93X3JpZ2h0X3NpZGVfc3RhaXJzKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X2Zsb29yICAgICAoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19jZWlsaW5nICAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfcmlnaHRfc2lkZShkLCB3LCAgbnVsbCwgICAgICcjZmZmZjAwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3dfZmxvb3IoXHJcbiAgICAgICAgICAgIGQ6ICAgIG51bWJlciwgXHJcbiAgICAgICAgICAgIHc6ICAgIG51bWJlciwgXHJcbiAgICAgICAgICAgIGZpbGw6IHN0cmluZyA9ICcjNjY2NmZmJywgXHJcbiAgICAgICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgICAgICAgICApOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCByZWN0X2Zyb250ID0gZ19kcy53YWxsLmdldChkLCAgICAgdyk7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5tYXhfeX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1heF95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfYmFjayAubWF4X3gsIHk6IHJlY3RfYmFjayAubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9iYWNrIC5taW5feCwgeTogcmVjdF9iYWNrIC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2NlaWxpbmcoXHJcbiAgICAgICAgICAgIGQ6IG51bWJlciwgXHJcbiAgICAgICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgICAgIGZpbGw6IHN0cmluZyA9ICcjYWFhYWFhJywgXHJcbiAgICAgICAgICAgIGxpbmU6IHN0cmluZyA9ICcjOTk5OWZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdF9mcm9udCA9IGdfZHMud2FsbC5nZXQoZCwgICAgIHcpO1xyXG4gICAgY29uc3QgcmVjdF9iYWNrICA9IGdfZHMud2FsbC5nZXQoZCArIDEsIHcpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgYnI6IHt4OiByZWN0X2JhY2sgLm1heF94LCB5OiByZWN0X2JhY2sgLm1pbl95fSxcclxuICAgICAgICBibDoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWluX3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19mcm9udChcclxuICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nfG51bGwgPSAnIzAwZmYwMCcsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZ3xudWxsID0gJyMwMDAwZmYnXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIGlmIChnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IGdfZHMuY29uO1xyXG4gICAgY29uc3QgcmVjdF9mcm9udCA9IGdfZHMud2FsbC5nZXQoZCwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfZnJvbnQubWF4X3gsIHk6IHJlY3RfZnJvbnQubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2xlZnRfc2lkZShcclxuICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nfG51bGwgPSAnIzAwY2MwMCcsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZ3xudWxsID0gJyMwMDAwZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsICAgICB3KTtcclxuICAgIGNvbnN0IHJlY3RfYmFjayAgPSBnX2RzLndhbGwuZ2V0KGQgKyAxLCB3KTtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb250Lm1pbl94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWluX3l9LFxyXG4gICAgICAgIGJyOiB7eDogcmVjdF9iYWNrIC5taW5feCwgeTogcmVjdF9iYWNrIC5tYXhfeX0sXHJcbiAgICAgICAgYmw6IHt4OiByZWN0X2Zyb250Lm1pbl94LCB5OiByZWN0X2Zyb250Lm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfcmlnaHRfc2lkZShcclxuICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgIHc6IG51bWJlciwgXHJcbiAgICAgICAgZmlsbDogc3RyaW5nfG51bGwgPSAnIzAwY2MwMCcsIFxyXG4gICAgICAgIGxpbmU6IHN0cmluZ3xudWxsID0gJyMwMDAwZmYnXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsICAgICB3KTtcclxuICAgIGNvbnN0IHJlY3RfYmFjayAgPSBnX2RzLndhbGwuZ2V0KGQgKyAxLCB3KTtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfYmFjayAubWF4X3gsIHk6IHJlY3RfYmFjayAubWluX3l9LFxyXG4gICAgICAgIGJyOiB7eDogcmVjdF9iYWNrIC5tYXhfeCwgeTogcmVjdF9iYWNrIC5tYXhfeX0sXHJcbiAgICAgICAgYmw6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1heF95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2NlbGwocjogVF9SZWN0LCBmaWxsOiBzdHJpbmd8bnVsbCwgbGluZTogc3RyaW5nfG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChnX2RzLmNvbiA9PT0gbnVsbCB8fCBnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbiA9IGdfZHMuY29uO1xyXG5cclxuICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgIGNvbi5tb3ZlVG8oci50bC54LCByLnRsLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLnRyLngsIHIudHIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuYnIueCwgci5ici55KTtcclxuICAgIGNvbi5saW5lVG8oci5ibC54LCByLmJsLnkpO1xyXG4gICAgY29uLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmIChmaWxsICE9IG51bGwpIHtcclxuICAgICAgICBjb24uZmlsbFN0eWxlICAgPSBmaWxsO1xyXG4gICAgICAgIGNvbi5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobGluZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9IGxpbmU7XHJcbiAgICAgICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxleV9tYXNlM0RfZGlyZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcF9kaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3M0RfZGlyZWN0aW9uX2luZm8nKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIGlmIChwX2RpciA9PT0gbnVsbCkge1xyXG4gICAgICAgIGdfbXZtPy53YXJuaW5nX21lc3NhZ2UoJ1AgZWxlbWVudCBpc250IGZvdW5kISBpZD1NYXplX3ZpZXczRF9kaXJlY3Rpb25faW5mbycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBkaXJlY3Rpb246IHN0cmluZztcclxuICAgIHN3aXRjaCAoZ190ZWFtLmdldF9kaXIoKSkge1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX05cIj7jgIrljJfjgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fRVwiPuOAiuadseOAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9TXCI+44CK5Y2X44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX1dcIj7jgIropb/jgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX0RcIj7jgIrorI7jgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcCA9IGdfdGVhbS5nZXRfcCgpO1xyXG4gICAgY29uc3QgbWVzID0gJ+WcsOS4iyAnICsgKHAueiArIDEpICsgJ+majuOAgCcgKyBkaXJlY3Rpb24gKyAn44CAKHggPSA8c3BhbiBpZD1cImRpcmVjdGlvbl9YXCI+JyArIHAueCArICc8L3NwYW4+LCB5ID0gPHNwYW4gaWQ9XCJkaXJlY3Rpb25fWVwiPicgKyBwLnkgKyAnPC9zcGFuPiknO1xyXG4gICAgcF9kaXIuaW5uZXJIVE1MID0gbWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hemUzRF9ibGlua19vbl9kaXJlY3Rpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXJfeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRpcl95ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9ZJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl95ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChnX3RlYW0uZ2V0X2RpcigpKSB7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgZGlyX3guY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxuICAgICAgICAgICAgZGlyX3kuY2xhc3NMaXN0LmFkZCAgICgnYmxpbmsnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTpcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6XHJcbiAgICAgICAgICAgIGRpcl94LmNsYXNzTGlzdC5hZGQgICAoJ2JsaW5rJyk7XHJcbiAgICAgICAgICAgIGRpcl95LmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWF6ZTNEX2JsaW5rX29mZl9kaXJlY3Rpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXJfeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgZGlyX3guY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxuXHJcbiAgICBjb25zdCBkaXJfeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25fWScpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGlmIChkaXJfeSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgZGlyX3kuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYWxlcnRfbWF6ZV9pbmZvIH0gICAgIGZyb20gXCIuL0NfTWF6ZVwiOyAvLyDpgJrluLjmmYLjga/jgrPjg6Hjg7Pjg4jjgqLjgqbjg4jjgZXjgozjgabjgYTjgovplqLmlbBcclxuaW1wb3J0IHsgYWxlcnRfdGVhbV9pbmZvIH0gICAgIGZyb20gXCIuL0NfVGVhbVwiOyAvLyDpgJrluLjmmYLjga/jgrPjg6Hjg7Pjg4jjgqLjgqbjg4jjgZXjgozjgabjgYTjgovplqLmlbBcclxuaW1wb3J0IHsgYWxlcnRfaGVyb2VzX2luZm8gfSAgIGZyb20gXCIuL0NfSGVyb1wiOyAvLyDpgJrluLjmmYLjga/jgrPjg6Hjg7Pjg4jjgqLjgqbjg4jjgZXjgozjgabjgYTjgovplqLmlbBcclxuXHJcbmltcG9ydCB7IENfVXJsT3B0IH0gICAgICAgICAgICBmcm9tIFwiLi9DX1VybE9wdFwiOyAgICAgICAgICBcclxuaW1wb3J0IHsgUE9TVF9hbmRfZ2V0X0pTT04gfSAgIGZyb20gXCIuL0ZfUE9TVFwiO1xyXG5pbXBvcnQgeyBpbml0X2NvbnRyb2xsZXMgfSAgICAgZnJvbSBcIi4vRl9zZXRfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBkb19tb3ZlX2JvdHRvbV9oYWxmIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IF9yb3VuZCwgX21pbiwgX21heCAgfSBmcm9tIFwiLi9GX01hdGhcIjtcclxuaW1wb3J0IHsgZ19nZXRfbWF6ZV91cmwsIGdfbWF6ZSwgZ190ZWFtLCBnX212bSwgaW5pdF9kZWJ1Z19tb2RlIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0X21haV9tYXplKHVybDogc3RyaW5nLCBvcHQ6IENfVXJsT3B0KTogdm9pZCB7XHJcbiAgICBQT1NUX2FuZF9nZXRfSlNPTih1cmwsIG9wdCk/LnRoZW4oanNvbk9iaj0+e1xyXG4gICAgICAgIGlmIChqc29uT2JqLmVjb2RlICE9IDApIHtcclxuICAgICAgICAgICAgZ19tdm0ud2FybmluZ19tZXNzYWdlKFwi5Yid5pyf44OH44O844K/44KS5Y+X5L+h44Gn44GN44G+44Gb44KT44Gn44GX44GfXFxuXCIgKyBqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICBhbGVydChqc29uT2JqLmVtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb25pdG9yID0gZmFsc2U7ICAvLyBhbGVydOOBp+WPl+S/oeOBl+OBn+ODhuOCreOCueODiOOCkuihqOekuuOBmeOCi+OBqOOBjeOBq3RydWXjgavjgZnjgotcclxuICAgICAgICBpZiAobW9uaXRvcikge1xyXG4vLyAgICAgICAgICAgIGFsZXJ0X21hemVfaW5mbyhqc29uT2JqPy5tYXplKTtcclxuICAgICAgICAgICAgYWxlcnRfdGVhbV9pbmZvKGpzb25PYmo/LnRlYW0pO1xyXG4gICAgICAgICAgICBhbGVydF9oZXJvZXNfaW5mbyhqc29uT2JqPy50ZWFtPy5oZXJvZXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfZGVidWdfbW9kZSgpO1xyXG4gICAgICAgICAgICBpbml0X2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X2xvYWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAgICAgICAnaW5zdGFudF9sb2FkJyk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV9pZCcsICAgICAxKTsgXHJcbiAgICBvcHQuc2V0KCdzYXZlX3RpdGxlJywgJycpOyBcclxuXHJcbiAgICBQT1NUX2FuZF9nZXRfSlNPTihnX2dldF9tYXplX3VybCwgb3B0KT8udGhlbihqc29uT2JqPT57XHJcbiAgICAgICAgaWYgKGpzb25PYmouZWNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICBnX212bS5ub3JtYWxfbWVzc2FnZSgn5q2j5bi444Gr44Ot44O844OJ44GV44KM44G+44GX44GfJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAobW9uaXRvcikge1xyXG4gICAgLy8gICAgICAgICAgICBhbGVydF9tYXplX2luZm8oanNvbk9iaj8ubWF6ZSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydF9oZXJvZXNfaW5mbyhqc29uT2JqPy50ZWFtPy5oZXJvZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfY29udHJvbGxlcygpO1xyXG4gICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoXCLjg63jg7zjg4njgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X3NhdmUoKTogdm9pZCB7IFxyXG4gICAgY29uc3QgbWF6ZV9kYXRhID0gSlNPTi5zdHJpbmdpZnkoZ19tYXplLmVuY29kZSgpLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIGNvbnN0IHRlYW1fZGF0YSA9IEpTT04uc3RyaW5naWZ5KGdfdGVhbS5lbmNvZGUoKSwgbnVsbCwgXCJcXHRcIik7XHJcblxyXG4gICAgY29uc3Qgb3B0ID0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAgJ2luc3RhbnRfc2F2ZScpOyBcclxuICAgIG9wdC5zZXQoJ3NhdmVfaWQnLCAgICAgMSk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV90aXRsZScsICcnKTsgXHJcbiAgICBvcHQuc2V0KCdtYXplJywgICAgICAgbWF6ZV9kYXRhKTtcclxuICAgIG9wdC5zZXQoJ3RlYW0nLCAgICAgICB0ZWFtX2RhdGEpO1xyXG5cclxuICAgIFBPU1RfYW5kX2dldF9KU09OKGdfZ2V0X21hemVfdXJsLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGdfbXZtLm5vcm1hbF9tZXNzYWdlKCfmraPluLjjgavjgrvjg7zjg5bjgZXjgozjgb7jgZfjgZ8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoXCLjgrvjg7zjg5bjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vbml0b3IgPSBmYWxzZTsgIC8vIGFsZXJ044Gn5Y+X5L+h44GX44Gf44OG44Kt44K544OI44KS6KGo56S644GZ44KL44Go44GN44GrdHJ1ZeOBq+OBmeOCi1xyXG4gICAgICAgIGlmIChtb25pdG9yKSB7XHJcbi8vICAgICAgICAgICAgYWxlcnRfbWF6ZV9pbmZvKGpzb25PYmo/Lm1hemUpO1xyXG4gICAgICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbiAgICAgICAgICAgIGFsZXJ0X2hlcm9lc19pbmZvKGpzb25PYmo/LnRlYW0/Lmhlcm9lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZGVjb2RlX2FsbChqc29uT2JqKTtcclxuICAgIH0pO1xyXG4vLyAgICBQT1NUX2FuZF9tb3ZlX3BhZ2UoZ19jaGVja19KU09OX3VybCwgb3B0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZV9hbGwoanNvbk9iajogYW55KTp2b2lkIHtcclxuICAgIC8vIE1BWkXplqLpgKPjga7jg4fjgrPjg7zjg4lcclxuICAgIGlmIChqc29uT2JqLm1hemUgIT09IHVuZGVmaW5lZCkgZ19tYXplLmRlY29kZShqc29uT2JqLm1hemUpO1xyXG5cclxuICAgIC8v44CAVGVhbemWoumAo+OBruODh+OCs+ODvOODiVxyXG4gICAgaWYgKGpzb25PYmoudGVhbSAhPT0gdW5kZWZpbmVkKSBnX3RlYW0uZGVjb2RlKGpzb25PYmoudGVhbSk7XHJcblxyXG4gICAgLy8gTWF6ZeOBq1RlYW3jgpLov73liqBcclxuICAgIGdfbWF6ZS5hZGRfb2JqKGdfdGVhbSk7XHJcbiAgICBjYWxjX3ZpZXcyRF93aWR0aCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjX3ZpZXcyRF93aWR0aCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYXplX3ZpZXcyRF9wcmUnKSBhcyBIVE1MUHJlRWxlbWVudDtcclxuICAgIGlmIChwcmUgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB2aWV3MkRfd2lkdGggID0gcHJlLmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgdmlldzJEX2hlaWdodCA9IHByZS5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY29sICAgID0gZ19tYXplLmdldF94X21heCgpO1xyXG4gICAgY29uc3QgY29sX3B4ID0gdmlldzJEX3dpZHRoICAvIGNvbDtcclxuXHJcbiAgICBjb25zdCByb3cgICAgPSBnX21hemUuZ2V0X3lfbWF4KCk7XHJcbiAgICBjb25zdCByb3dfcHggPSB2aWV3MkRfaGVpZ2h0IC8gcm93O1xyXG5cclxuICAgIGNvbnN0IGZvbnRfc2l6ZSAgID0gX3JvdW5kKDAuOTUgKiAgX21pbihbY29sX3B4LCByb3dfcHhdKSwgMik7XHJcbiAgICBjb25zdCBsaW5lX2hlaWdodCA9IF9yb3VuZCgxLjAwICogIF9taW4oW2NvbF9weCwgcm93X3B4XSksIDIpO1xyXG5cclxuICAgIHByZS5zdHlsZS5zZXRQcm9wZXJ0eSgnZm9udC1zaXplJywgIGAke2ZvbnRfc2l6ZX1weGApO1xyXG4gICAgcHJlLnN0eWxlLnNldFByb3BlcnR5KCdsaW5lLWhlaWdodCcsYCR7bGluZV9oZWlnaHR9cHhgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBoaWRlX2NvbnRyb2xsZXMgfSBmcm9tIFwiLi9GX3NldF9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IFRfQ3Rsc01vZGUgfSBmcm9tIFwiLi9UX0N0bHNNb2RlXCI7XHJcbmltcG9ydCB7IHNldF9tb3ZlX2NvbnRyb2xsZXMsIGRvX21vdmVfYm90dG9tX2hhbGYgfSBmcm9tIFwiLi9GX3NldF9tb3ZlX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZGVidWdfbW9kZSwgZ19jdGxzX21vZGUsIGdfbXZtIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNscl9VRF9jb250cm9sbGVzKCk6IHZvaWQge1xyXG4gICAgY2FuVXAgPSBmYWxzZTtcclxuICAgIGNhbkRuID0gZmFsc2U7XHJcbiAgICBpc1VwICA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB5X2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3Qgbl9idG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMik7XHJcblxyXG4gICAgdV9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9wZV9VcCk7XHJcbiAgICBkX2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX0Rvd24pO1xyXG5cclxuICAgIHlfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb191cCk7XHJcbiAgICB5X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fZG93bik7XHJcbiAgICB5X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fVUQpO1xyXG4gICAgbl9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX2NhbmNlbCk7XHJcblxyXG4gICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIHlfYnRuLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIG5fYnRuLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5cclxuXHJcblxyXG52YXIgY2FuVXA6IGJvb2xlYW4gID0gIGZhbHNlO1xyXG52YXIgY2FuRG46IGJvb2xlYW4gID0gIGZhbHNlO1xyXG5cclxudmFyIGlzVXA6ICBib29sZWFuICA9ICBmYWxzZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfVXBfY29udHJvbGxlcygpIHtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfkuIrjgorjg4bjg6zjg53jg7zjgr/jg7zjgYzmnInjgorjgb7jgZnjgILnmbvjgorjgb7jgZnjgYvvvJ/nmbvjgosg4oeSIOOAhyDnmbvjgonjgarjgYQg4oeSIOKclicpO1xyXG5cclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgY2FuVXAgPSB0cnVlO1xyXG4gICAgY2FuRG4gPSBmYWxzZTtcclxuICAgIF9fc2V0X1VEX2NvbnRyb2xsZXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF9Ebl9jb250cm9sbGVzKCkge1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4i+OCiuODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgumZjeOCiuOBvuOBmeOBi++8n+mZjeOCiuOCiyDih5Ig44CHIOmZjeOCiuOBquOBhCDih5Ig4pyWJyk7XHJcblxyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBjYW5VcCA9IGZhbHNlO1xyXG4gICAgY2FuRG4gPSB0cnVlO1xyXG4gICAgX19zZXRfVURfY29udHJvbGxlcygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X1VEX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn5LiK5LiL44OG44Os44Od44O844K/44O844GM5pyJ44KK44G+44GZ44CC55m744KK44G+44GZ44GL77yf55m744KL4oeSIOOAhyDpmY3jgorjgosg4oeSICjihpPjgq3jg7wpIOenu+WLleOBl+OBquOBhCDih5Ig4pyWJyk7XHJcblxyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBjYW5VcCA9IHRydWU7XHJcbiAgICBjYW5EbiA9IHRydWU7XHJcbiAgICBfX3NldF9VRF9jb250cm9sbGVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fc2V0X1VEX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBnX2N0bHNfbW9kZVswXSA9IFRfQ3Rsc01vZGUuVUQ7XHJcblxyXG4gICAgY29uc3QgeV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneV9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IG5fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25fYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICB5X2J0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgbl9idG4uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICBuX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fY2FuY2VsLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGNhblVwICYmICFjYW5Ebikge1xyXG4gICAgICAgIHlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb191cCwgICAgIGZhbHNlKTtcclxuICAgIH0gXHJcbiAgICBpZiAoY2FuRG4gJiYgIWNhblVwKSB7XHJcbiAgICAgICAgeV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX2Rvd24sICAgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhblVwICYmIGNhbkRuKSB7XHJcbiAgICAgICAgeV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX1VELCAgICAgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB1X2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB1X2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX1VwLCBmYWxzZSk7XHJcbiAgICAgICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICBjb25zdCBkX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICBkX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX0Rvd24sIGZhbHNlKTtcclxuICAgICAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIGlmIChpc1VwKSAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICBlbHNlICAgICAgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzVXApIGRfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgZWxzZSAgICAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleV9wcmVzc19mdW5jdGlvbjIpO1xyXG5cclxuICAgIGNvbnN0IGN0bF92aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVfY3RsX3ZpZXcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGN0bF92aWV3LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleV9wcmVzc19mdW5jdGlvbjIoZTogS2V5Ym9hcmRFdmVudCk6dm9pZCAge1xyXG4gICAgc3dpdGNoKGUuY29kZSkgeyAvLyBBcnJvd+OBr+WPjeW/nOOBm+OBmijjgqTjg5njg7Pjg4joh6rkvZPjgYznmbrnlJ/jgZvjgZopXHJcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IFxyXG4gICAgICAgIGNhc2UgJ0tleUsnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQ1JzogXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6IFxyXG4gICAgICAgIGNhc2UgJ0tleUonOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQyJzogXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0tleU8nOlxyXG4gICAgICAgIGNhc2UgJ0tleVknOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZDAnOlxyXG4gICAgICAgIGNhc2UgJ0RpZ2l0MCc6XHJcbiAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZEVudGVyJzpcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0tleU4nOlxyXG4gICAgICAgIGNhc2UgJ0tleVgnOlxyXG4gICAgICAgIGNhc2UgJ051bXBhZEFkZCc6XHJcbi8vICAgICAgICBjYXNlICdOdW1wYWRTdWJ0cmFjdCc6XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdLZXlVJzpcclxuICAgICAgICAgICAgaWYgKGdfZGVidWdfbW9kZSAmJiBnX3RlYW0uZ2V0X3ooKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdfdGVhbS5zZXRfeihnX3RlYW0uZ2V0X3ooKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYW5VcCkge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlICdLZXlEJzpcclxuICAgICAgICAgICAgaWYgKGdfZGVidWdfbW9kZSAmJiBnX3RlYW0uZ2V0X3ooKSA8IChnX21hemUuZ2V0X3pfbWF4KCkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgZ190ZWFtLnNldF96KGdfdGVhbS5nZXRfeigpICsgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbkRuKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb19jYW5jZWwoKTogdm9pZCB7XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBzZXRfbW92ZV9jb250cm9sbGVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX3VwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcnNsdCA9IGdfdGVhbS5ob3BlX3BfdXAoKTtcclxuICAgIGlmICghcnNsdC5oYXNfaG9wZSB8fCAhZ19tYXplLndpdGhpbihyc2x0LnN1YmopKSB7XHJcbiAgICAgICAgcnNsdC5kb05HKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJzbHQuZG9PSygpO1xyXG4gICAgfVxyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgc2V0X21vdmVfY29udHJvbGxlcygpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2Rvd24oKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF9kb3duKCk7XHJcbiAgICBpZiAoIXJzbHQuaGFzX2hvcGUgfHwgIWdfbWF6ZS53aXRoaW4ocnNsdC5zdWJqKSkge1xyXG4gICAgICAgIHJzbHQuZG9ORygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByc2x0LmRvT0soKTtcclxuICAgIH1cclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIHNldF9tb3ZlX2NvbnRyb2xsZXMoKTtcclxuICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19VRCgpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBcclxuICAgIGlmIChpc1VwKSBkb191cCgpO1xyXG4gICAgZWxzZSAgICAgIGRvX2Rvd24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9wZV9VcCgpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBpc1VwID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93Jyk/LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKT8uc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+eZu+OCiuOBvuOBmeOBi++8n+eZu+OCi+KHkiDjgIcg6ZmN44KK44KLIOKHkiAo4oaT44Kt44O8KSDnp7vli5XjgZfjgarjgYQg4oeSIOKclicpO1xyXG59XHJcbmZ1bmN0aW9uIGhvcGVfRG93bigpOiB2b2lkIHtcclxuICAgIGlmICghY2FuVXAgfHwgIWNhbkRuKSByZXR1cm47XHJcbiAgICBpc1VwID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpPy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93Jyk/LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfpmY3jgorjgb7jgZnjgYvvvJ/pmY3jgorjgovih5Ig44CHIOeZu+OCiyDih5IgKOKGkeOCreODvCkg56e75YuV44GX44Gq44GEIOKHkiDinJYnKTtcclxufVxyXG5cclxuIiwiXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuICAgIC8qICBIVE1MUHJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpOyAgICAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VfYXJyYXcnKTsgICAgICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2dyaWQnKTsgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uYXBwZW5kQ2hpbGQoSFRNTEVsZW1lbnQpOyAgICAgICAgICAgICAqL1xyXG4gICAgLyoqKioqKioqKioqKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBjbHJfbW92ZV9jb250cm9sbGVzLCBzZXRfbW92ZV9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfbW92ZV9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IGNscl9VRF9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfVURfY29udHJvbGxlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVfY29udHJvbGxlcygpIHtcclxuICAgIGNscl9tb3ZlX2NvbnRyb2xsZXMoKTtcclxuICAgIGNscl9VRF9jb250cm9sbGVzKCk7XHJcbiAgICBjb25zdCBtb3ZlX2N0bF92aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVfY3RsX3ZpZXcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1vdmVfY3RsX3ZpZXc/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY29udHJvbGxlcygpIHtcclxuICAgIHNldF9tb3ZlX2NvbnRyb2xsZXMoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBoaWRlX2NvbnRyb2xsZXMgfSAgICAgICAgICAgIGZyb20gXCIuL0Zfc2V0X2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgSV9Ib3BlQWN0aW9uIH0gICAgICAgICAgICAgICBmcm9tIFwiLi9JX0V2ZW50TWFwXCI7XHJcbmltcG9ydCB7IFRfTXpLaW5kIH0gICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vVF9NektpbmRcIjtcclxuaW1wb3J0IHsgVF9DdGxzTW9kZSB9ICAgICAgICAgICAgICAgICBmcm9tIFwiLi9UX0N0bHNNb2RlXCI7XHJcbmltcG9ydCB7IGluc3RhbnRfbG9hZCwgaW5zdGFudF9zYXZlIH0gZnJvbSBcIi4vRl9sYW9kX2FuZF9zYXZlXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlfbWF6ZTJELCBkaXNwbGF5X21hemUzRCwgXHJcbiAgICAgICAgIG1hemUzRF9ibGlua19vbl9kaXJlY3Rpb24sIG1hemUzRF9ibGlua19vZmZfZGlyZWN0aW9uIH0gICBmcm9tIFwiLi9GX2Rpc3BsYXlfbWF6ZVwiO1xyXG5pbXBvcnQgeyBzZXRfVXBfY29udHJvbGxlcywgc2V0X0RuX2NvbnRyb2xsZXMsIHNldF9VRF9jb250cm9sbGVzIH0gZnJvbSBcIi4vRl9zZXRfVURfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBnX21hemUsIGdfdGVhbSwgZ19kZWJ1Z19tb2RlLCBnX2N0bHNfbW9kZSwgZ19tdm0gfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbHJfbW92ZV9jb250cm9sbGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdV9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBkX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IHJfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgbF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMSk7XHJcblxyXG4gICAgdV9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29fRik7XHJcbiAgICBkX2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb19CKTtcclxuICAgIHJfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX1IpO1xyXG4gICAgbF9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHJfTCk7XHJcblxyXG4gICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIGxfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgcl9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfbW92ZV9jb250cm9sbGVzKCk6IHZvaWQge1xyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBnX2N0bHNfbW9kZVswXSA9IFRfQ3Rsc01vZGUuTW92ZTtcclxuICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCByX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGxfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHVfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvX0YsIGZhbHNlKTtcclxuICAgIGRfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvX0IsIGZhbHNlKTtcclxuICAgIHJfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX1IsIGZhbHNlKTtcclxuICAgIGxfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX0wsIGZhbHNlKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBrZXlfcHJlc3NfZnVuY3Rpb24xKTtcclxuXHJcbiAgICB1X2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBkX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBsX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICByX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgY29uc3QgY3RsX3ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZV9jdGxfdmlldycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY3RsX3ZpZXc/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleV9wcmVzc19mdW5jdGlvbjEoZTogS2V5Ym9hcmRFdmVudCk6dm9pZCAge1xyXG4gICAgc3dpdGNoKGUuY29kZSkgeyAvLyBBcnJvd+OBr+WPjeW/nOOBm+OBmijjgqTjg5njg7Pjg4joh6rkvZPjgYznmbrnlJ/jgZvjgZopXHJcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IFxyXG4gICAgICAgIGNhc2UgJ0tleUsnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQ1JzogXHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOiBcclxuICAgICAgICBjYXNlICdLZXlKJzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkMic6IFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzogXHJcbiAgICAgICAgY2FzZSAnS2V5SCc6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDEnOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOiBcclxuICAgICAgICBjYXNlICAnTnVtcGFkMyc6IFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5TCc6XHJcbiAgICAgICAgICAgIGlmIChnX2RlYnVnX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbnRfbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleVMnOiBcclxuICAgICAgICAgICAgaWYgKGdfZGVidWdfbW9kZSkgeyBcclxuICAgICAgICAgICAgICAgIGluc3RhbnRfc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5VSc6XHJcbiAgICAgICAgICAgIGlmIChnX2N0bHNfbW9kZVswXSA9PSBUX0N0bHNNb2RlLk1vdmUgJiYgZ19kZWJ1Z19tb2RlICYmIGdfdGVhbS5nZXRfeigpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ190ZWFtLnNldF96KGdfdGVhbS5nZXRfeigpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlEJzpcclxuICAgICAgICAgICAgaWYgKGdfY3Rsc19tb2RlWzBdID09IFRfQ3Rsc01vZGUuTW92ZSAmJiBnX2RlYnVnX21vZGUgJiYgZ190ZWFtLmdldF96KCkgPCAoZ19tYXplLmdldF96X21heCgpIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIGdfdGVhbS5zZXRfeihnX3RlYW0uZ2V0X3ooKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuICAgIC8qICBIVE1MUHJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpOyAgICAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VfYXJyYXcnKTsgICAgICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2dyaWQnKTsgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uYXBwZW5kQ2hpbGQoSFRNTEVsZW1lbnQpOyAgICAgICAgICAgICAqL1xyXG4gICAgLyoqKioqKioqKioqKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpOiB2b2lkIHtcclxuICAgIGdfbWF6ZS5jbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VfdW5leHBfdG9fZmxvb3IoKTogdm9pZCB7XHJcbiAgICBnX21hemUuY2hhbmdlX3VuZXhwX3RvX2Zsb29yKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvX0YoKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF9md2QoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vbicpO1xyXG59XHJcbmZ1bmN0aW9uIGdvX0IoKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF9iYWsoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vbicpO1xyXG59XHJcbmZ1bmN0aW9uIHRyX1IoKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfdHVybl9yKCk7XHJcbiAgICBtb3ZlX2NoZWNrKHJzbHQpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbn1cclxuZnVuY3Rpb24gdHJfTCgpIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV90dXJuX2woKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5mdW5jdGlvbiBtb3ZlX2NoZWNrKHI6IElfSG9wZUFjdGlvbikge1xyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgaWYgKCFyLmhhc19ob3BlKSByZXR1cm47XHJcbiAgICBpZiAoci5ob3BlID09ICdUdXJuJykge1xyXG4gICAgICAgIHIuZG9PSygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyLmhvcGUgPT0gJ01vdmUnKSB7XHJcbiAgICAgICAgY29uc3Qga2luZCA9IGdfbWF6ZS5nZXRfY2VsbChyLnN1YmopO1xyXG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICAgICAgIHIuZG9PSygpO3JldHVybjtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgICAgICByLmRvT0soKTtcclxuICAgICAgICAgICAgICAgICBkb19zdGFpcnNfbW90aW9uKGtpbmQpO1xyXG4gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ19tdm0ubm9ybWFsX21lc3NhZ2UoJ+mAsuOCgeOBquOBhO+8ge+8iOeske+8iScpO1xyXG4gICAgICAgIHIuZG9ORygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSBcclxuXHJcbmZ1bmN0aW9uIGRvX3N0YWlyc19tb3Rpb24oa2luZDogVF9NektpbmQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyVXA6XHJcbiAgICAgICAgICAgIHNldF9VcF9jb250cm9sbGVzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgIHNldF9Ebl9jb250cm9sbGVzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6XHJcbiAgICAgICAgICAgIHNldF9VRF9jb250cm9sbGVzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvX21vdmVfYm90dG9tX2hhbGYoYmxpbmtfbW9kZTogc3RyaW5nKTogdm9pZCB7ICAgLy9hbGVydCgnRmxvb3I/ID0gJyArIGdfdGVhbS5nZXRfcCgpLnopO1xyXG4gICAgY2hhbmdlX3VuZXhwX3RvX2Zsb29yKCk7XHJcbiAgICBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpO1xyXG4gICAgZGlzcGxheV9tYXplMkQoKTtcclxuICAgIGRpc3BsYXlfbWF6ZTNEKCk7XHJcbiAgICBpZiAoYmxpbmtfbW9kZSA9PT0gJ2JsaW5rX29uJykgbWF6ZTNEX2JsaW5rX29uX2RpcmVjdGlvbigpO1xyXG4gICAgZWxzZSBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbigpO1xyXG59XHJcbiIsImltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuL1RfTWFrZUVudW1UeXBlXCI7XHJcbmV4cG9ydCBjb25zdCBUX0N0bHNNb2RlID0ge1xyXG4gICAgTm9wOiAgICAgMCxcclxuICAgIE1vdmU6ICAgIDEsXHJcbiAgICBVRDogICAgICAyLFxyXG4gICAgQmF0dGxlOiAgMyxcclxuICAgIFVua25vd246IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfQ3Rsc01vZGUgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9DdGxzTW9kZT47XHJcbiIsImltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuL1RfTWFrZUVudW1UeXBlXCI7XHJcbmV4cG9ydCBjb25zdCBUX0RpcmVjdGlvbiA9IHtcclxuICAgIE46IDAsXHJcbiAgICBFOiAxLFxyXG4gICAgUzogMixcclxuICAgIFc6IDMsXHJcbiAgICBYOiA5OVxyXG59IGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBUX0RpcmVjdGlvbiA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0RpcmVjdGlvbj47XHJcblxyXG5leHBvcnQgdmFyICREaXJlY3Rpb25OYW1lID0ge1xyXG4gICAgMDogICfljJcnLFxyXG4gICAgMTogICfmnbEnLFxyXG4gICAgMjogICfljZcnLFxyXG4gICAgMzogICfopb8nLFxyXG4gICAgOTk6ICforI4nXHJcbn1cclxuIiwiICAgIC8vIOS4gOiIrOOBq+S9v+OBiOOCi+ODpuODvOODhuOCo+ODquODhuOCo+OBquWRquaWh1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS5YiX5oyZ5Z6L44Go44GX44Gm5Z6L5YyW44GZ44KL44Gu44Gr5Yip55SoXHJcbiAgICBpbXBvcnQge1RfTWFrZUVudW1UeXBlfSBmcm9tIFwiLi9UX01ha2VFbnVtVHlwZVwiO1xyXG5cclxuICAgIC8vIOODgOODs+OCuOODp+ODs+ODnuODg+ODl+OBruOCu+ODq+OBrueorumhnuOCkuihqOOBmeWIl+aMmeWei1xyXG4gICAgLy8gTm9EZWY6IOacquWumue+qeODu+S4jeaYjlxyXG4gICAgLy8gRmxvb3I6IOW6ilxyXG4gICAgLy8gVW5leHA6IOacqui4j+WcsFxyXG4gICAgLy8gU3RvbmU6IOefs+WjgVxyXG4gICAgLy8gU3RyVXA6IOS4iuOCiumajuautVxyXG4gICAgLy8gU3RyRG46IOS4i+OCiumajuautVxyXG4gICAgLy8gRW1wdHk6IOWIneacn+eKtuaFi+ODu+S9leOCguOBquOBl1xyXG4gICAgLy8gXHJcbiAgICAvLyBmdW5jdGlvbiB0b19pbnQoTXpLaW5kKTogICAgICBpbnQgICAgICAgIOWIl+aMmeWei+OBq+WvvuW/nOOBmeOCi+WApCjmlbTmlbDlgKQp44KS6L+U44GZXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2ludChpbnQpOiAgICAgICBUX016S2luZCAgICAg5pW05pWw5YCk44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2xldHRlcihNektpbmQpOiAgIHN0cmluZyAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5paH5a2X44KS6L+U44GZKOODgOODs+OCuOODp+ODs+OBrjJE6KGo56S655SoKVxyXG4gICAgLy8gZnVuY3Rpb24gZnJvbV9sZXR0ZXIoc3RyaW5nKTogVF9NektpbmQgICAgIOaWh+Wtl+OBq+WvvuW/nOOBmeOCi+WIl+aMmeWei+OCkui/lOOBmSjjgq/jg6njgrnjg6Hjgr3jg4Pjg4kpXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IFRfTXpLaW5kOntba2V5OiBzdHJpbmddOiBudW1iZXJ9ICA9IHtcclxuICAgICAgICBOb0RlZjogICAwLFxyXG4gICAgICAgIEZsb29yOiAgIDEsXHJcbiAgICAgICAgVW5leHA6ICAgMixcclxuICAgICAgICBTdG9uZTogICAzLFxyXG4gICAgICAgIFVua3duOiAgIDQsXHJcbiAgICAgICAgU3RyVXA6ICAgNSxcclxuICAgICAgICBTdHJEbjogICA2LFxyXG4gICAgICAgIFN0clVEOiAgIDcsXHJcbiAgICAgICAgRW1wdHk6IDI1NSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX016S2luZCAgID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfTXpLaW5kPjtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9Sdk16S2luZDp7W2tleTogbnVtYmVyXTogVF9NektpbmR9ICA9IHtcclxuICAgICAgICAwOiAgIFRfTXpLaW5kLk5vRGVmLFxyXG4gICAgICAgIDE6ICAgVF9NektpbmQuRmxvb3IsXHJcbiAgICAgICAgMjogICBUX016S2luZC5VbmV4cCxcclxuICAgICAgICAzOiAgIFRfTXpLaW5kLlN0b25lLFxyXG4gICAgICAgIDQ6ICAgVF9NektpbmQuVW5rd24sXHJcbiAgICAgICAgNTogICBUX016S2luZC5TdHJVcCxcclxuICAgICAgICA2OiAgIFRfTXpLaW5kLlN0ckRuLFxyXG4gICAgICAgIDc6ICAgVF9NektpbmQuU3RyVUQsXHJcbiAgICAgICAgMjU1OiBUX016S2luZC5FbXB0eSxcclxuICAgIH0gYXMgY29uc3Q7XHJcbiAgICBleHBvcnQgdHlwZSBUX1J2TXpLaW5kID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfUnZNektpbmQ+O1xyXG5cclxuIiwiY29uc3QgbXlfdXJsX2Jhc2U6IHN0cmluZyA9IFwiaHR0cDovLzEyNy4wLjAuMS9kZXYvbWFpL21haV9tYXplL1wiO1xyXG5leHBvcnQgY29uc3QgZ19nZXRfbWF6ZV91cmw6ICAgc3RyaW5nID0gbXlfdXJsX2Jhc2UgKyBcIm1haV9tYXplLnBocFwiO1xyXG5leHBvcnQgY29uc3QgZ19jaGVja19KU09OX3VybDogc3RyaW5nID0gbXlfdXJsX2Jhc2UgKyBcImNoZWNrX0pTT04ucGhwXCI7XHJcblxyXG5pbXBvcnQgeyBDX01hemUgfSBmcm9tIFwiLi9DX01hemVcIjtcclxuZXhwb3J0IGNvbnN0IGdfbWF6ZSA9IG5ldyBDX01hemUoe21hemVfaWQ6IC0xfSk7XHJcblxyXG5pbXBvcnQgeyBDX1RlYW0gfSBmcm9tIFwiLi9DX1RlYW1cIjtcclxuZXhwb3J0IGNvbnN0IGdfdGVhbSA9IG5ldyBDX1RlYW0oKTtcclxuXHJcbmltcG9ydCB7IFRfQ3Rsc01vZGUgfSBmcm9tIFwiLi9UX0N0bHNNb2RlXCI7XHJcbmV4cG9ydCBjb25zdCBnX2N0bHNfbW9kZTogVF9DdGxzTW9kZVtdID0gbmV3IEFycmF5KDEpIGFzIFRfQ3Rsc01vZGVbXTtcclxuXHJcbmltcG9ydCB7IGRpc3BsYXlfbWF6ZTJEIH0gZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuZXhwb3J0IHZhciBnX2RlYnVnX21vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbmltcG9ydCB7VF9Ecm93U2V0LCBpbml0X21hemUzRCB9IGZyb20gXCIuL0ZfZGlzcGxheV9tYXplXCI7XHJcbmV4cG9ydCB2YXIgZ19kczogVF9Ecm93U2V0ICAgPSB7Y2FudmFzOiBudWxsLCBjb246IG51bGwsIGRlcHRoOiAwLCB3YWxsOiBudWxsfTtcclxuXHJcbmltcG9ydCB7IENfTWF6ZVZpZXdNZXNzYWdlIH0gZnJvbSBcIi4vQ19NYXplVmlld01lc3NhZ2VcIjtcclxuZXhwb3J0IHZhciBnX212bTogQ19NYXplVmlld01lc3NhZ2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9hZnRlcl9sb2FkZWRfRE9NKCk6IHZvaWQge1xyXG4gICAgZ19tdm0gID0gQ19NYXplVmlld01lc3NhZ2UuZ2V0KCk7IGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIGdfZHMgICA9IGluaXRfbWF6ZTNEKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2RlYnVnX21vZGUoKTogdm9pZCB7XHJcbiAgICBnX2RlYnVnX21vZGUgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1Z19tb2RlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBpZiAoYnRuID09PSBudWxsKSByZXR1cm47XHJcbiAgICB0b2dnbGVfZGVidWdfbW9kZSgpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57dG9nZ2xlX2RlYnVnX21vZGUoKTt9LCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZXZlbnQpPT57XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxyXG4gICAgICAgICAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlX2RlYnVnX21vZGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWdfbW9kZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgaWYgKGJ0biA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKGdfZGVidWdfbW9kZSkge1xyXG4gICAgICAgIGdfZGVidWdfbW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICfpgJrluLjjg6Ljg7zjg4nkuK0nO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICcjZjBmOGZmJyk7XHJcbiAgICAgICAgYnRuLnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsICcjMDA4MDAwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdfZGVidWdfbW9kZSA9IHRydWU7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndHJ1ZScpO1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAn44OH44OQ44OD44Kw44Oi44O844OJ5LitJztcclxuICAgICAgICBidG4uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmMDAwMCcpO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnY29sb3InLCAnI2ZmZmZmZicpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheV9tYXplMkQoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8vXHJcbi8vLyAgIOS4u+WHpueQhlxyXG4vLy9cclxuXHJcbmltcG9ydCB7IENfVXJsT3B0IH0gICAgIGZyb20gXCIuL0NfVXJsT3B0XCI7XHJcbmltcG9ydCB7IGdldF9tYWlfbWF6ZSB9IGZyb20gXCIuL0ZfbGFvZF9hbmRfc2F2ZVwiO1xyXG5pbXBvcnQgeyBnX2dldF9tYXplX3VybCwgaW5pdF9hZnRlcl9sb2FkZWRfRE9NIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkgeyBcclxuICAgIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTSgpO1xyXG4gICAgY29uc3QgZ2V0X21hemVfb3B0ID0gbmV3IENfVXJsT3B0KHttb2RlOiBcIm5ld1wiLCBudW06IDMzM30pO1xyXG4gICAgZ2V0X21haV9tYXplKGdfZ2V0X21hemVfdXJsLCBnZXRfbWF6ZV9vcHQpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==