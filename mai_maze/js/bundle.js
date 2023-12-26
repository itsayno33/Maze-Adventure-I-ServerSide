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

/***/ "./src/F_laod_and_save.ts":
/*!********************************!*\
  !*** ./src/F_laod_and_save.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode_all = exports.instant_save = exports.instant_load = exports.get_mai_maze = void 0;
const C_UrlOpt_1 = __webpack_require__(/*! ./C_UrlOpt */ "./src/C_UrlOpt.ts");
const F_POST_1 = __webpack_require__(/*! ./F_POST */ "./src/F_POST.ts");
const F_set_controlles_1 = __webpack_require__(/*! ./F_set_controlles */ "./src/F_set_controlles.ts");
const F_set_move_controlles_1 = __webpack_require__(/*! ./F_set_move_controlles */ "./src/F_set_move_controlles.ts");
const global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
function get_mai_maze(url, opt) {
    var _a;
    (_a = (0, F_POST_1.POST_and_get_JSON)(url, opt)) === null || _a === void 0 ? void 0 : _a.then(jsonObj => {
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
        if (jsonObj.ecode == 0) {
            global_1.g_mvm.normal_message('正常にロードされました');
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
        if (jsonObj.ecode == 0) {
            global_1.g_mvm.normal_message('正常にセーブされました');
        }
        else {
            global_1.g_mvm.warning_message("セーブできませんでした\n" + jsonObj.emsg);
            alert(jsonObj.emsg);
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
                do_move_bottom_half('blink_off');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFPLFNBQVM7WUFBSyxJQUFJLENBQUMsS0FBSyxHQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBSyxJQUFJLENBQUMsT0FBTyxHQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDMUQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFekQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxDQUFDLENB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LE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO1NBQU0sQ0FBQztRQUNKLG9CQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsbUNBQWMsR0FBRSxDQUFDO0FBQ3JCLENBQUM7Ozs7Ozs7VUM1REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBLDhFQUEwQztBQUMxQyxtR0FBaUQ7QUFDakQsd0VBQWlFO0FBRWpFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUN4QyxrQ0FBcUIsR0FBRSxDQUFDO0lBQ3hCLE1BQU0sWUFBWSxHQUFHLElBQUksbUJBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDM0Qsa0NBQVksRUFBQyx1QkFBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfSGVyby50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19NYXplLnRzIiwid2VicGFjazovL21haS8uL3NyYy9DX01hemVWaWV3TWVzc2FnZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19Qb2ludC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19SYW5nZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19UZWFtLnRzIiwid2VicGFjazovL21haS8uL3NyYy9DX1VybE9wdC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvQ19XYWxrZXIudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL0NfV2FsbC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9QT1NULnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX2Rpc3BsYXlfbWF6ZS50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvRl9sYW9kX2FuZF9zYXZlLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX3NldF9VRF9jb250cm9sbGVzLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX3NldF9jb250cm9sbGVzLnRzIiwid2VicGFjazovL21haS8uL3NyYy9GX3NldF9tb3ZlX2NvbnRyb2xsZXMudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL1RfQ3Rsc01vZGUudHMiLCJ3ZWJwYWNrOi8vbWFpLy4vc3JjL1RfRGlyZWN0aW9uLnRzIiwid2VicGFjazovL21haS8uL3NyYy9UX016S2luZC50cyIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL21haS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWkvLi9zcmMvbWFpX21hemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBfX2luaXRfYXJnID0ge1xyXG4gICAgaWQ/OiAgICAgICBudW1iZXIsIFxyXG4gICAgc2F2ZV9pZD86ICBudW1iZXIsIFxyXG4gICAgdGVhbV9pZD86ICBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgICBzdHJpbmcsIFxyXG4gICAgaXNfaGVybz86ICBzdHJpbmd8Ym9vbGVhbjtcclxuICAgIGlzX2FsaXZlPzogc3RyaW5nfGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEpTT05fSGVybyA9IHtcclxuICAgIGlkPzogICAgICAgbnVtYmVyLCBcclxuICAgIHNhdmVfaWQ/OiAgbnVtYmVyLCBcclxuICAgIHRlYW1faWQ/OiAgbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICAgc3RyaW5nLCBcclxuICAgIGlzX2hlcm8/OiAgc3RyaW5nO1xyXG4gICAgaXNfYWxpdmU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF9oZXJvZXNfaW5mbyhhOiAoSlNPTl9IZXJvfHVuZGVmaW5lZClbXXx1bmRlZmluZWQpOiB2b2lkIHsgXHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBhbGVydCgnTnVtYmVyIG9mIEhlcm8gPSAnICsgYS5sZW5ndGgudG9TdHJpbmcoKSk7XHJcbiAgICBmb3IgKHZhciBpIGluIGEpIHtcclxuICAgICAgICBpZiAoYVtpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBhbGVydChcIkhlcm9bXCIgKyBpLnRvU3RyaW5nKCkgKyBcIl0gSW5mbzpcXG5cIiBcclxuICAgICAgICAgICAgKyBcIlxcbmlkOiAgICAgICBcIiAgICAgKyAoYVtpXT8uaWQgICAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbm5hbWU6ICAgICBcIiAgICAgKyAoYVtpXT8ubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnNhdmVfaWQ6ICBcIiAgICAgKyAoYVtpXT8uc2F2ZV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbnRlYW1faWQ6ICBcIiAgICAgKyAoYVtpXT8udGVhbV9pZCAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2hlcm86ICBcIiAgICAgKyAoYVtpXT8uaXNfaGVybyAgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcbmlzX2FsaXZlOiBcIiAgICAgKyAoYVtpXT8uaXNfYWxpdmUgID8/ICc/JylcclxuICAgICAgICAgICAgKyBcIlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfSGVybyB7XHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIHRlYW1faWQ6ICBudW1iZXI7IFxyXG4gICAgcHJvdGVjdGVkIGlzX2hlcm86ICBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIGlzX2FsaXZlOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhPzogX19pbml0X2FyZykge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubXlfbmFtZSAgPSAnTm8gTmFtZSBIZXJvJztcclxuICAgICAgICB0aGlzLnNhdmVfaWQgID0gMDtcclxuICAgICAgICB0aGlzLnRlYW1faWQgID0gMDtcclxuICAgICAgICB0aGlzLmlzX2hlcm8gID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzX2FsaXZlID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9faW5pdChhKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXQoYTogX19pbml0X2FyZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlfaWQgICA9IGEuaWQgICAgICA/PyB0aGlzLm15X2lkXHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gYS5uYW1lICAgID8/IHRoaXMubXlfbmFtZTtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSBhLnNhdmVfaWQgPz8gdGhpcy5zYXZlX2lkXHJcbiAgICAgICAgdGhpcy50ZWFtX2lkID0gYS50ZWFtX2lkID8/IHRoaXMudGVhbV9pZFxyXG4gICAgICAgIGlmIChhLmlzX2hlcm8gICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhLmlzX2hlcm8gID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc19oZXJvICA9IGEuaXNfaGVybztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfaGVybyAgPSAoYS5pc19oZXJvICAhPSAnTicpID8gdHJ1ZTogZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuaXNfYWxpdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGEuaXNfYWxpdmUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2FsaXZlID0gYS5pc19hbGl2ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfYWxpdmUgPSAoYS5pc19hbGl2ZSAhPSAnTicpID8gdHJ1ZTogZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3BycChhcmcgOiBfX2luaXRfYXJnKSB7XHJcbiAgICAgICAgdGhpcy5fX2luaXQoYXJnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnSGVyb18nICsgdGhpcy5teV9pZC50b1N0cmluZygxNikucGFkU3RhcnQoNSwgJzAnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlfbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9IZXJvIHtcclxuICAgICAgICBjb25zdCByZXQ6IEpTT05fSGVybyA9IHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgIHRoaXMubXlfbmFtZSxcclxuICAgICAgICAgICAgc2F2ZV9pZDogICB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIHRlYW1faWQ6ICAgdGhpcy50ZWFtX2lkLFxyXG4gICAgICAgICAgICBpc19oZXJvOiAgKHRoaXMuaXNfaGVybykgID8gJ1knIDogJ04nLCBcclxuICAgICAgICAgICAgaXNfYWxpdmU6ICh0aGlzLmlzX2FsaXZlKSA/ICdZJyA6ICdOJywgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fSGVyb3x1bmRlZmluZWQpOiBDX0hlcm8ge1xyXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLmlkICAgICAgICE9PSB1bmRlZmluZWQpIHRoaXMubXlfaWQgICA9IGEuaWQ7XHJcbiAgICAgICAgaWYgKGEubmFtZSAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5teV9uYW1lID0gYS5uYW1lO1xyXG4gICAgICAgIGlmIChhLnNhdmVfaWQgICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCAgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLnRlYW1faWQgICE9PSB1bmRlZmluZWQpIHRoaXMudGVhbV9pZCAgID0gYS50ZWFtX2lkO1xyXG4gICAgICAgIGlmIChhLmlzX2hlcm8gICE9PSB1bmRlZmluZWQpICB0aGlzLmlzX2hlcm8gID0gKGEuaXNfaGVybyAgIT0gJ04nKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAoYS5pc19hbGl2ZSAhPT0gdW5kZWZpbmVkKSAgdGhpcy5pc19hbGl2ZSA9IChhLmlzX2FsaXZlICE9ICdOJykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZV9oZXJvKCk6IENfSGVybyB7XHJcbiAgICAgICAgY29uc3QgbmV3X2hlcm8gPSBuZXcgQ19IZXJvKCk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7aWQ6ICAgIE1hdGguZmxvb3IoLTEwMDAuMCAqIE1hdGgucmFuZG9tKCkpfSk7XHJcbiAgICAgICAgbmV3X2hlcm8uc2V0X3BycCh7bmFtZTogIG5ld19oZXJvLmlkKCl9KTtcclxuICAgICAgICByZXR1cm4gbmV3X2hlcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZV9oZXJvZXMoaGVyb2VzOiBDX0hlcm9bXSk6IEpTT05fSGVyb1tdIHtcclxuICAgICAgICBjb25zdCBoZXJvZXNfZGF0YSA9IFtdIGFzIEpTT05fSGVyb1tdO1xyXG4gICAgICAgIGZvciAodmFyIGhlcm8gb2YgaGVyb2VzKSB7XHJcbiAgICAgICAgICAgIGhlcm9lc19kYXRhLnB1c2goaGVyby5lbmNvZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXJvZXNfZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlX2hlcm9lcyhoZXJvZXNfZGF0YTogKEpTT05fSGVyb3x1bmRlZmluZWQpW118dW5kZWZpbmVkKTogQ19IZXJvW10ge1xyXG4gICAgICAgIGNvbnN0IGhlcm9lcyA9IFtdIGFzIENfSGVyb1tdO1xyXG4gICAgICAgIGlmIChoZXJvZXNfZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGhlcm9fZGF0YSBvZiBoZXJvZXNfZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaGVyb2VzLnB1c2gobmV3IENfSGVybygpLmRlY29kZShoZXJvX2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb2VzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVF9NektpbmQsIFRfUnZNektpbmQgfSBmcm9tIFwiLi9UX016S2luZFwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfUmFuZ2UgfSAgICAgIGZyb20gXCIuL0NfUmFuZ2VcIjtcclxuaW1wb3J0IHsgSV9FeGlzdCB9ICAgICAgZnJvbSBcIi4vSV9FdmVudE1hcFwiO1xyXG5pbXBvcnQgeyBnX2RlYnVnX21vZGUgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZ190ZWFtIH0gICAgICAgZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgdHlwZSBKU09OX01hemUgPSB7XHJcbiAgICBpZD86ICAgICAgbnVtYmVyLFxyXG4gICAgc2F2ZV9pZD86IG51bWJlcixcclxuICAgIGZsb29yPzogICBudW1iZXIsXHJcbiAgICB0aXRsZT86ICAgc3RyaW5nLFxyXG4gICAgc2l6ZV94PzogIG51bWJlcixcclxuICAgIHNpemVfeT86ICBudW1iZXIsXHJcbiAgICBzaXplX3o/OiAgbnVtYmVyLFxyXG4gICAgbWF6ZT86ICAgIHN0cmluZywgXHJcbiAgICBtYXNrPzogICAgc3RyaW5nLCBcclxuICAgIG9ianM/OiAgICBvYmplY3RbXSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0X21hemVfaW5mbyhhOiBKU09OX01hemV8dW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgYWxlcnQoXCJNYXplIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbm1hemUgaWQgOlwiICsgKGEuaWQgICAgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmZsb29yOiBcIiAgICsgKGEuZmxvb3IgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNhdmUgaWQgOlwiICsgKGEuc2F2ZV9pZCA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnRpdGxlOiBcIiAgICsgKGEudGl0bGUgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeDogXCIgICsgKGEuc2l6ZV94ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfeTogXCIgICsgKGEuc2l6ZV95ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbnNpemVfejogXCIgICsgKGEuc2l6ZV96ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxuICAgIGFsZXJ0KFxyXG4gICAgICAgIFwibWF6ZTpcXG5cIiAgICArIChhLm1hemUgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgYWxlcnQoXHJcbiAgICAgICAgXCJtYXNrOlxcblwiICAgICsgKGEubWFzayA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcblwiXHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIENfTWF6ZUNlbGwgIHtcclxuICAgIHByb3RlY3RlZCBjZWxsOiBUX016S2luZDtcclxuICAgIHByb3RlY3RlZCBtYXplOiBDX01hemU7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobTogQ19NYXplLCB2PzogVF9NektpbmQpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG06IENfTWF6ZSwgbj86IG51bWJlcik7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobTogQ19NYXplLCBhPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgdGhpcy5tYXplID0gbTtcclxuICAgICAgICB0aGlzLnNldChhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQoKTogIFRfTXpLaW5kIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCh2PzogVF9NektpbmQpOiB2b2lkO1xyXG4gICAgcHVibGljIHNldChuPzogbnVtYmVyKTogdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoYT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGwgPSBUX016S2luZC5Ob0RlZjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbCA9IFRfUnZNektpbmRbYV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGwgPSBhIGFzIFRfTXpLaW5kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbCA9IFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19pbnQodj86IFRfTXpLaW5kKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCAga2luZDogIFRfTXpLaW5kID0gdiA/PyB0aGlzLmNlbGw7XHJcbiAgICAgICAgcmV0dXJuIGtpbmQgYXMgbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyB0b19pbnQoa2luZDogVF9NektpbmQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBraW5kIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIC8vIOaZrumAmuOBq25ld+OBmeOCjOOBsOiJr+OBhOOBruOBp+OBn+OBtuOCk+imgeOCieOBquOBhFxyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbV9pbnQobnVtOiBudW1iZXIpOiBDX01hemVDZWxsIHtcclxuICAgICAgICByZXR1cm4gbmV3IENfTWF6ZUNlbGwobnVtKTtcclxuICAgIH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgdG9fbGV0dGVyKHY/OiBUX016S2luZCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qga2luZDogVF9NektpbmQgPSB2ID8/IHRoaXMuY2VsbDtcclxuICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC50b19sZXR0ZXIoa2luZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHRvX2xldHRlcihraW5kOiBUX016S2luZCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IHJldHVybiAn44CAJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5VbmV4cDogcmV0dXJuICfjg7snO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOiByZXR1cm4gJ++8gyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuVW5rd246IHJldHVybiAn77yfJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDogcmV0dXJuICfkuIonO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOiByZXR1cm4gJ+S4iyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyVUQ6IHJldHVybiAn6YCaJztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5FbXB0eTogcmV0dXJuICfvvK8nO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLk5vRGVmOiByZXR1cm4gJ++8uCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn77y4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZnJvbV9sZXR0ZXIoc3RyOiBzdHJpbmcpOiBUX016S2luZCB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gQ19NYXplQ2VsbC5mcm9tX2xldHRlcihzdHIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21fbGV0dGVyKHN0cjogc3RyaW5nKTogVF9NektpbmQge1xyXG4gICAgICAgIHN3aXRjaCAoc3RyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ+OAgCc6IHJldHVybiBUX016S2luZC5GbG9vcjtcclxuICAgICAgICAgICAgY2FzZSAn44O7JzogcmV0dXJuIFRfTXpLaW5kLlVuZXhwO1xyXG4gICAgICAgICAgICBjYXNlICfvvIMnOiByZXR1cm4gVF9NektpbmQuU3RvbmU7XHJcbiAgICAgICAgICAgIGNhc2UgJ++8nyc6IHJldHVybiBUX016S2luZC5Vbmt3bjtcclxuICAgICAgICAgICAgY2FzZSAn5LiKJzogcmV0dXJuIFRfTXpLaW5kLlN0clVwO1xyXG4gICAgICAgICAgICBjYXNlICfkuIsnOiByZXR1cm4gVF9NektpbmQuU3RyRG47XHJcbiAgICAgICAgICAgIGNhc2UgJ+mAmic6IHJldHVybiBUX016S2luZC5TdHJVRDtcclxuICAgICAgICAgICAgY2FzZSAn77yvJzogcmV0dXJuIFRfTXpLaW5kLkVtcHR5O1xyXG4gICAgICAgICAgICBjYXNlICfvvLgnOiByZXR1cm4gVF9NektpbmQuTm9EZWY7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICAgcmV0dXJuIFRfTXpLaW5kLk5vRGVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ19NYXplQ2VsbC5lbmNvZGUodGhpcy5jZWxsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5jb2RlKHY6IFRfTXpLaW5kKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHYgYXMgbnVtYmVyKS50b1N0cmluZygxNikucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKHN0cjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gQ19NYXplQ2VsbC5kZWNvZGUoc3RyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb2RlKHN0cjogc3RyaW5nKTogVF9NektpbmQge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChzdHIsIDE2KSBhcyBUX016S2luZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfTWF6ZSB7XHJcbiAgICBwcm90ZWN0ZWQgbWF6ZV9pZDogIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzYXZlX2lkOiAgbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZsb29yOiAgICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdGl0bGU6ICAgIHN0cmluZztcclxuICAgIHByb3RlY3RlZCBteV9sYXllcjogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBzaXplOiAgICAgQ19SYW5nZTtcclxuICAgIHByb3RlY3RlZCBjZWxsczogICAgQ19NYXplQ2VsbFtdW11bXTtcclxuICAgIHByb3RlY3RlZCBtYXNrczogICAgYm9vbGVhbltdW11bXTtcclxuICAgIHByb3RlY3RlZCBvYmpzOiAgICAgSV9FeGlzdFtdO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHttYXplX2lkID0gLTEsIHNhdmVfaWQgPSAtMSwgZmxvb3IgPSAwLCB0aXRsZSA9ICcnLCBzaXplX3ggPSAzLCBzaXplX3kgPSAzLCBzaXplX3ogPSAxfToge1xyXG4gICAgICAgICAgICBtYXplX2lkPzogbnVtYmVyLFxyXG4gICAgICAgICAgICBzYXZlX2lkPzogbnVtYmVyLFxyXG4gICAgICAgICAgICBmbG9vcj86ICAgbnVtYmVyLFxyXG4gICAgICAgICAgICB0aXRsZT86ICAgc3RyaW5nLFxyXG4gICAgICAgICAgICBzaXplX3g/OiAgbnVtYmVyLFxyXG4gICAgICAgICAgICBzaXplX3k/OiAgbnVtYmVyLFxyXG4gICAgICAgICAgICBzaXplX3o/OiAgbnVtYmVyLFxyXG4gICAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubWF6ZV9pZCA9IG1hemVfaWQ7XHJcbiAgICAgICAgdGhpcy5zYXZlX2lkID0gc2F2ZV9pZDtcclxuICAgICAgICB0aGlzLmZsb29yICAgPSBmbG9vcjtcclxuICAgICAgICB0aGlzLnRpdGxlICAgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnNpemUgICAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgbmV3IENfUG9pbnQoMCwgMCwgMCksIFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludChzaXplX3ggLSAxLCBzaXplX3kgLSAxLCBzaXplX3ogLSAxKSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyAgID0gdGhpcy5fX2luaXRfbWF6ZShUX016S2luZC5TdG9uZSk7XHJcbiAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICB0aGlzLm9ianMgICAgPSBbXSBhcyBJX0V4aXN0W107XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdChcclxuICAgICAgICB7bWF6ZV9pZCwgc2F2ZV9pZCwgZmxvb3IsIHRpdGxlLCBzaXplX3gsIHNpemVfeSwgc2l6ZV96fToge1xyXG4gICAgICAgICAgICBtYXplX2lkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgZmxvb3I6ICAgbnVtYmVyLFxyXG4gICAgICAgICAgICB0aXRsZTogICBzdHJpbmcsXHJcbiAgICAgICAgICAgIHNpemVfeDogIG51bWJlcixcclxuICAgICAgICAgICAgc2l6ZV95OiAgbnVtYmVyLFxyXG4gICAgICAgICAgICBzaXplX3o6ICBudW1iZXIsXHJcbiAgICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5tYXplX2lkID0gbWF6ZV9pZDtcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSBzYXZlX2lkO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgICA9IGZsb29yO1xyXG4gICAgICAgIHRoaXMudGl0bGUgICA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSAgICA9IG5ldyBDX1JhbmdlKFxyXG4gICAgICAgICAgICBuZXcgQ19Qb2ludCgwLCAwLCAwKSwgXHJcbiAgICAgICAgICAgIG5ldyBDX1BvaW50KHNpemVfeCAtIDEsIHNpemVfeSAtIDEsIHNpemVfeiAtIDEpKTtcclxuICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICB0aGlzLm1hc2tzICAgPSB0aGlzLl9faW5pdF9tYXNrKHRydWUpO1xyXG4gICAgICAgIHRoaXMub2JqcyAgICA9IFtdIGFzIElfRXhpc3RbXTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXRfbWF6ZShraW5kOiBUX016S2luZCA9IFRfTXpLaW5kLlN0b25lKTogQ19NYXplQ2VsbFtdW11bXSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV94ID0gdGhpcy5zaXplLnNpemVfeCgpO1xyXG4gICAgICAgIGNvbnN0IHNpemVfeSA9IHRoaXMuc2l6ZS5zaXplX3koKTtcclxuICAgICAgICBjb25zdCBzaXplX3ogPSB0aGlzLnNpemUuc2l6ZV96KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGxzOiBDX01hemVDZWxsW11bXVtdID0gQXJyYXkoc2l6ZV96KSBhcyBDX01hemVDZWxsW11bXVtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgY2VsbHNbel0gPSBBcnJheShzaXplX3kpIGFzIENfTWF6ZUNlbGxbXVtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsc1t6XVt5XSAgPSBBcnJheShzaXplX3gpIGFzIENfTWF6ZUNlbGxbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsc1t6XVt5XVt4XSA9IG5ldyBDX01hemVDZWxsKHRoaXMsIGtpbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZWxscztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfX2luaXRfbWFzayhZTjogYm9vbGVhbik6IGJvb2xlYW5bXVtdW10ge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXNrczogYm9vbGVhbltdW11bXSA9IEFycmF5KHNpemVfeikgYXMgYm9vbGVhbltdW11bXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIG1hc2tzW3pdID0gQXJyYXkoc2l6ZV95KSBhcyBib29sZWFuW11bXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgbWFza3Nbel1beV0gID0gQXJyYXkoc2l6ZV94KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFza3Nbel1beV1beF0gPSBZTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS53aXRoaW4ocCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOODoeOCpOOCuuWGheOBruOCquODluOCuOOCp+OCr+ODiOOChOODouODs+OCueOCv+ODvOetieOBrumFjee9rlxyXG4gICAgcHVibGljIGFkZF9vYmoob2JqOiBJX0V4aXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYmpzLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVfb2JqKG9iajogSV9FeGlzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JqcyA9IHRoaXMub2Jqcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkKCkgIT09IG9iai5pZCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfb2JqX3h5eih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogSV9FeGlzdHxudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRfb2JqKG5ldyBDX1BvaW50KHgsIHksIHopKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfb2JqKHA6IENfUG9pbnQpOiBJX0V4aXN0fG51bGwge1xyXG4gICAgICAgIHZhciBsYXllciA9IC0xO1xyXG4gICAgICAgIHZhciBvYmo6IElfRXhpc3R8bnVsbCAgID0gbnVsbDtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5vYmpzKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLndpdGhpbihwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIoKSA+IGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBpdGVtLmxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWFt44GM5p2l44Gf44Od44Kk44Oz44OI44GM5pyq6LiP5Zyw44Gg44Gj44Gf44KJ44Gf44Gg44Gu5bqK44Gr5aSJ44GI44KLXHJcbiAgICBwdWJsaWMgY2hhbmdlX3VuZXhwX3RvX2Zsb29yKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldF9jZWxsKGdfdGVhbS5nZXRfcCgpKSA9PSBUX016S2luZC5VbmV4cCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9jZWxsKGdfdGVhbS5nZXRfcCgpLCBUX016S2luZC5GbG9vcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDJE44Oe44OD44OX44Gu44Oe44K544Kv5aSW44GX6Zai6YCjXHJcbiAgICBwdWJsaWMgY2xlYXJfbWFza19hcm91bmRfdGhlX3RlYW0oKTogdm9pZCB7XHJcbiAgICAgICAgLy8g54++5Zyo5Zyw44Go55yf5qiq44Gv6Ieq5YuV55qE44Gr6KaL44GI44KLXHJcbiAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoMCwgLTEpKTtcclxuICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZCgwLCAgMCkpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKDAsICAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoICAgPSAgNTsgLy8gMkTjg57jg4Pjg5fnlKjjga7lpaXooYzjgY3pmZDnlYxcclxuXHJcbiAgICAgICAgLy8g5YmN5pa544Gu6KaL6YCa44GX44KS44OB44Kn44OD44Kv44GX44Gq44GM44KJ6KaL44GI44KL44Go44GT44KN44Gv6Kej5pS+44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCBkZXB0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250X3BvcyA9IGdfdGVhbS5nZXRfYXJvdW5kKGQsIDApXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX21vdmFibGUoZnJvbnRfcG9zKSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5q2j6Z2i44Gr6Zqc5a6z54mp44GM54Sh44GR44KM44Gw44CB44Gd44Gu5Lih5YG044KC6KaL44GI44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsICAxKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPpnaLjgYzpmpzlrrPnianjgafjgoLjgZ3jga7miYvliY3jgb7jgafopovjgYjjgabjgZ/jgarjgonjgIHjgZ3jga7lo4HjgajkuKHlgbTjga/opovjgYjjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX19jbGVhcl9tYXNrKGdfdGVhbS5nZXRfYXJvdW5kKGQsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2xlYXJfbWFzayhnX3RlYW0uZ2V0X2Fyb3VuZChkLCAgMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NsZWFyX21hc2soZ190ZWFtLmdldF9hcm91bmQoZCwgIDEpKTtcclxuICAgICAgICAgICAgICAgIC8vIOato+mdouOBq+manOWus+eJqeOBjOacieOBo+OBn+OCieOBneOBruWlpeOBr+imi+OBiOOBquOBhOOBruOBp+aOoue0oue1guS6hlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19jbGVhcl9tYXNrKGNscl9wb3M6IENfUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2l6ZS53aXRoaW4oY2xyX3BvcykpIHJldHVybjtcclxuICAgICAgICB0aGlzLm1hc2tzW2Nscl9wb3Muel1bY2xyX3Bvcy55XVtjbHJfcG9zLnhdID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzX21vdmFibGUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRfY2VsbChwKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVwOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0ckRuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcHVibGljIGdldF94X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV94KCk7fVxyXG4gICAgcHVibGljIGdldF95X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV95KCk7fVxyXG4gICAgcHVibGljIGdldF96X21heCgpOiBudW1iZXIge3JldHVybiB0aGlzLnNpemUuc2l6ZV96KCk7fVxyXG4gICAgcHVibGljIGdldF9tYXplX2NlbGwgKHA6IENfUG9pbnQpOiBDX01hemVDZWxsfG51bGwgeyAvLyDjgZ/jgbbjgpPopoHjgonjgarjgYTjg6Hjgr3jg4Pjg4lcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF07XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2NlbGwgKHA6IENfUG9pbnQpOiBUX016S2luZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZS53aXRoaW4ocCkpIHJldHVybiB0aGlzLmNlbGxzW3Auel1bcC55XVtwLnhdLmdldCgpO1xyXG4gICAgICAgIHJldHVybiBUX016S2luZC5Ob0RlZjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfY2VsbCAocDogQ19Qb2ludCwgazogVF9NektpbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zaXplLndpdGhpbihwKSkgdGhpcy5jZWxsc1twLnpdW3AueV1bcC54XS5zZXQoayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuX21vdmUocDogQ19Qb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUud2l0aGluKHApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNhbl9VRChwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNfbW92YWJsZShwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIocDogQ19Qb2ludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbcC56XVtwLnldW3AueF0udG9fbGV0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9fc3RyaW5nKGZsb29yOiBudW1iZXIgPSAwKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBzaXplX3ggPSB0aGlzLnNpemUuc2l6ZV94KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV95ID0gdGhpcy5zaXplLnNpemVfeSgpO1xyXG5cclxuICAgICAgICB2YXIgcmV0X3N0cjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzaXplX3k7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHNpemVfeDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmdldF9vYmpfeHl6KHgsIHksIGZsb29yKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ19kZWJ1Z19tb2RlICYmIHRoaXMubWFza3NbZmxvb3JdW3ldW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0X3N0ciArPSAn4pagJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRfc3RyICs9IHRoaXMuY2VsbHNbZmxvb3JdW3ldW3hdLnRvX2xldHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldF9zdHIgKz0gb2JqLnRvX2xldHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXRfc3RyICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRfc3RyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuY29kZSgpOiBKU09OX01hemUge1xyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuICAgICAgICB2YXIgel9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHNpemVfejsgeisrKSB7XHJcbiAgICAgICAgICAgIHZhciB5X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHNpemVfeTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeF9hcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4X2FycmF5LnB1c2godGhpcy5jZWxsc1t6XVt5XVt4XS5lbmNvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5X2FycmF5LnB1c2goeF9hcnJheS5qb2luKCdYJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpfYXJyYXkucHVzaCh5X2FycmF5LmpvaW4oJ1knKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hemVfc3RyID0gel9hcnJheS5qb2luKCdaJyk7XHJcblxyXG4gICAgICAgIHZhciB6X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspIHtcclxuICAgICAgICAgICAgdmFyIHlfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4X2FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzaXplX3g7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfYXJyYXkucHVzaCh0aGlzLm1hc2tzW3pdW3ldW3hdID8gJzEnIDogJzAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlfYXJyYXkucHVzaCh4X2FycmF5LmpvaW4oJ1gnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgel9hcnJheS5wdXNoKHlfYXJyYXkuam9pbignWScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWFza19zdHIgPSB6X2FycmF5LmpvaW4oJ1onKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6ICAgICAgdGhpcy5tYXplX2lkLFxyXG4gICAgICAgICAgICBzYXZlX2lkOiB0aGlzLnNhdmVfaWQsXHJcbiAgICAgICAgICAgIGZsb29yOiAgIHRoaXMuZmxvb3IsXHJcbiAgICAgICAgICAgIHRpdGxlOiAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIHNpemVfeDogIHRoaXMuc2l6ZS5zaXplX3goKSxcclxuICAgICAgICAgICAgc2l6ZV95OiAgdGhpcy5zaXplLnNpemVfeSgpLFxyXG4gICAgICAgICAgICBzaXplX3o6ICB0aGlzLnNpemUuc2l6ZV96KCksXHJcbiAgICAgICAgICAgIG1hemU6ICAgIG1hemVfc3RyLFxyXG4gICAgICAgICAgICBtYXNrOiAgICBtYXNrX3N0cixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fTWF6ZXx1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChhLmlkICAgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5tYXplX2lkID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5zYXZlX2lkICE9PSB1bmRlZmluZWQpIHRoaXMuc2F2ZV9pZCA9IGEuc2F2ZV9pZDtcclxuICAgICAgICBpZiAoYS5mbG9vciAgICE9PSB1bmRlZmluZWQpIHRoaXMuZmxvb3IgICA9IGEuZmxvb3I7XHJcbiAgICAgICAgaWYgKGEudGl0bGUgICAhPT0gdW5kZWZpbmVkKSB0aGlzLnRpdGxlICAgPSBhLnRpdGxlO1xyXG4gICAgICAgIGlmIChhLm9ianMgICAgIT09IHVuZGVmaW5lZCkgdGhpcy5vYmpzICAgID0gYS5vYmpzIGFzIElfRXhpc3RbXTtcclxuXHJcbiAgICAgICAgaWYgKGEuc2l6ZV94ICE9PSB1bmRlZmluZWQgJiYgYS5zaXplX3kgIT09IHVuZGVmaW5lZCAmJiBhLnNpemVfeiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSAgPSBuZXcgQ19SYW5nZShcclxuICAgICAgICAgICAgICAgIG5ldyBDX1BvaW50KDAsIDAsIDApLCBcclxuICAgICAgICAgICAgICAgIG5ldyBDX1BvaW50KGEuc2l6ZV94IC0gMSwgYS5zaXplX3kgLSAxLCBhLnNpemVfeiAtIDEpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzICAgPSB0aGlzLl9faW5pdF9tYXplKFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrcyAgID0gdGhpcy5fX2luaXRfbWFzayh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVfeCA9IHRoaXMuc2l6ZS5zaXplX3goKTtcclxuICAgICAgICBjb25zdCBzaXplX3kgPSB0aGlzLnNpemUuc2l6ZV95KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZV96ID0gdGhpcy5zaXplLnNpemVfeigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGEubWF6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgc2l6ZV96OyB6KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc2l6ZV95OyB5KyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgc2l6ZV94OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbel1beV1beF0uc2V0KFRfTXpLaW5kLlN0b25lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgel9hcnJheTogc3RyaW5nW10gPSBhLm1hemUuc3BsaXQoJ1onKTtcclxuICAgICAgICAgICAgY29uc3Qgel9tYXggPSBfbWluKHNpemVfeiwgel9hcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHpfbWF4OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfYXJyYXk6IHN0cmluZ1tdID0gel9hcnJheVt6XS5zcGxpdCgnWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeV9tYXggPSAgX21pbihzaXplX3ksIHlfYXJyYXkubGVuZ3RoKTsgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHlfbWF4OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X2FycmF5OiBzdHJpbmdbXSA9IHlfYXJyYXlbeV0uc3BsaXQoJ1gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4X21heCA9ICBfbWluKHNpemVfeCwgeF9hcnJheS5sZW5ndGgpOyBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHhfbWF4OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t6XVt5XVt4XS5kZWNvZGUoeF9hcnJheVt4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19pbml0X21hc2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfYXJyYXk6IHN0cmluZ1tdID0gYS5tYXNrLnNwbGl0KCdaJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHpfbWF4ID0gX21pbihzaXplX3osIHpfYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB6X21heDsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5X2FycmF5OiBzdHJpbmdbXSA9IHpfYXJyYXlbel0uc3BsaXQoJ1knKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlfbWF4ID0gIF9taW4oc2l6ZV95LCB5X2FycmF5Lmxlbmd0aCk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB5X21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9hcnJheTogc3RyaW5nW10gPSB5X2FycmF5W3ldLnNwbGl0KCdYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeF9tYXggPSAgX21pbihzaXplX3gsIHhfYXJyYXkubGVuZ3RoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB4X21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4X2FycmF5W3hdICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3Nbel1beV1beF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc1t6XVt5XVt4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uICBfbWluKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSA8PSBiKSA/IGEgOiBiO1xyXG59XHJcbmZ1bmN0aW9uICBfbWF4KGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSA+PSBiKSA/IGEgOiBiO1xyXG59XHJcblxyXG4iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBDX01hemVWaWV3TWVzc2FnZSB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljICBtZSA6IENfTWF6ZVZpZXdNZXNzYWdlO1xyXG4gICAgcHJvdGVjdGVkIHAgIDogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIENfTWF6ZVZpZXdNZXNzYWdlLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3X21lc3NhZ2UnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICBDX01hemVWaWV3TWVzc2FnZS5tZS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCgpOiBDX01hemVWaWV3TWVzc2FnZSAge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tZSAhPT0gXCJvYmplY3RcIiB8fCAhKHRoaXMubWUgaW5zdGFuY2VvZiBDX01hemVWaWV3TWVzc2FnZSkpIFxyXG4gICAgICAgICAgICB0aGlzLm1lID0gbmV3IENfTWF6ZVZpZXdNZXNzYWdlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGlzcGxheV9tZXNzYWdlKG1lczogc3RyaW5nLCBmcl9jb2xvciA9ICdpbmhlcml0JywgYmdfY29sb3I6IHN0cmluZyA9ICdpbmhlcml0Jykge1xyXG4gICAgICAgIHRoaXMucC5zdHlsZS5zZXRQcm9wZXJ0eSgnY29sb3InLCAgICAgICAgICAgIGZyX2NvbG9yKTtcclxuICAgICAgICB0aGlzLnAuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCBiZ19jb2xvcik7XHJcbiAgICAgICAgdGhpcy5wLmlubmVySFRNTCA9IG1lcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJfbWVzc2FnZSgpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZSgn44CAJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm9ybWFsX21lc3NhZ2UobWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfbWVzc2FnZShtZXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5vdGljZV9tZXNzYWdlKG1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UobWVzLCAnIzAwNjYwMCcsICcjY2NmZmNjJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2FybmluZ19tZXNzYWdlKG1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X21lc3NhZ2UobWVzLCAnI2ZmZmZmZicsICcjZmYwMDAwJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHR5cGUgSlNPTl9Qb2ludCA9IHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlcixcclxuICAgIHo6IG51bWJlcixcclxufVxyXG5leHBvcnQgY2xhc3MgQ19Qb2ludCB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB6OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeD86IG51bWJlcnxDX1BvaW50fEpTT05fUG9pbnQsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpIHtcclxuLy8gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4IGluc3RhbmNlb2YgQ19Qb2ludCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4Lng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHgueTtcclxuICAgICAgICAgICAgdGhpcy56ID0geC56O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IC0yO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAtMjtcclxuICAgICAgICAgICAgdGhpcy56ID0gLTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihwOiBDX1BvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwLnggPT0gdGhpcy54ICYmIHAueSA9PSB0aGlzLnkgJiYgcC56ID09IHRoaXMueik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IEpTT05fUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMuen07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGE6IEpTT05fUG9pbnQpOiBDX1BvaW50IHtcclxuICAgICAgICB0aGlzLnggPSBhLng7IHRoaXMueSA9IGEueTsgdGhpcy56ID0gYS56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ19Qb2ludCB9IGZyb20gXCIuL0NfUG9pbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDX1JhbmdlIHtcclxuICAgIHByb3RlY3RlZCBtaW46IENfUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgbWF4OiBDX1BvaW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHAxOiBDX1BvaW50LCBwMjogQ19Qb2ludCkge1xyXG4gICAgICAgIGNvbnN0IG1pbl94ID0gX21pbihwMS54LCBwMi54KTtcclxuICAgICAgICBjb25zdCBtYXhfeCA9IF9tYXgocDEueCwgcDIueCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl95ID0gX21pbihwMS55LCBwMi55KTtcclxuICAgICAgICBjb25zdCBtYXhfeSA9IF9tYXgocDEueSwgcDIueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl96ID0gX21pbihwMS56LCBwMi56KTtcclxuICAgICAgICBjb25zdCBtYXhfeiA9IF9tYXgocDEueiwgcDIueik7XHJcblxyXG4gICAgICAgIHRoaXMubWluICA9IG5ldyBDX1BvaW50KG1pbl94LCBtaW5feSwgbWluX3opO1xyXG4gICAgICAgIHRoaXMubWF4ICA9IG5ldyBDX1BvaW50KG1heF94LCBtYXhfeSwgbWF4X3opO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdpdGhpbihhOiBDX1JhbmdlfENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgYSBpbnN0YW5jZW9mIENfUG9pbnQpIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhIGFzIENfUG9pbnQ7XHJcbiAgICAgICAgICAgIGlmICggcC54IDwgdGhpcy5taW4ueCB8fCBwLnggPiB0aGlzLm1heC54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAueSA8IHRoaXMubWluLnkgfHwgcC55ID4gdGhpcy5tYXgueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBwLnogPCB0aGlzLm1pbi56IHx8IHAueiA+IHRoaXMubWF4LnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgYSBpbnN0YW5jZW9mIENfUmFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGEgYXMgQ19SYW5nZTtcclxuICAgICAgICAgICAgaWYgKCBwLm1pbl94KCkgPCB0aGlzLm1pbi54IHx8IHAubWF4X3goKSA+IHRoaXMubWF4LnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggcC5taW5feSgpIDwgdGhpcy5taW4ueSB8fCBwLm1heF95KCkgPiB0aGlzLm1heC55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHAubWluX3ooKSA8IHRoaXMubWluLnogfHwgcC5tYXhfeigpID4gdGhpcy5tYXgueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBtaW5feCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW4ueDt9XHJcbiAgICBwdWJsaWMgbWF4X3goKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Lng7fVxyXG4gICAgcHVibGljIG1pbl95KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1pbi55O31cclxuICAgIHB1YmxpYyBtYXhfeSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXgueTt9XHJcbiAgICBwdWJsaWMgbWluX3ooKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWluLno7fVxyXG4gICAgcHVibGljIG1heF96KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1heC56O31cclxuICAgIHB1YmxpYyBzaXplX3goKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXgueCAtIHRoaXMubWluLnggKyAxO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzaXplX3koKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXgueSAtIHRoaXMubWluLnkgKyAxO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzaXplX3ooKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXgueiAtIHRoaXMubWluLnogKyAxO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBkb19hbGxfeHl6KGZuOiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm1pbi56OyB6IDw9IHRoaXMubWF4Lno7IHorKyApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluLnk7IHkgPD0gdGhpcy5tYXgueTsgeSsrICkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluLng7IHkgPD0gdGhpcy5tYXgueDsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm4oeCwgeSwgeCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiAgX21pbihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGEgPD0gYikgPyBhIDogYjtcclxufVxyXG5mdW5jdGlvbiAgX21heChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGEgPj0gYikgPyBhIDogYjtcclxufVxyXG4iLCJpbXBvcnQgeyBJX0V4aXN0LCBJX0hhc0hvcGUsIElfSG9wZUFjdGlvbiB9IGZyb20gXCIuL0lfRXZlbnRNYXBcIjtcclxuaW1wb3J0IHsgQ19Qb2ludCB9ICAgICBmcm9tIFwiLi9DX1BvaW50XCI7XHJcbmltcG9ydCB7IENfV2Fsa2VyIH0gICAgZnJvbSBcIi4vQ19XYWxrZXJcIjtcclxuaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX0hlcm8sIEpTT05fSGVybyB9ICAgICAgZnJvbSBcIi4vQ19IZXJvXCI7XHJcblxyXG50eXBlIF9faW5pdF9hcmcgPSB7XHJcbiAgICBpZD86ICAgICAgbnVtYmVyLCBcclxuICAgIHNhdmVfaWQ/OiBudW1iZXIsIFxyXG4gICAgbmFtZT86ICAgIHN0cmluZywgXHJcbiAgICBoZXJvZXM/OiAgQ19IZXJvW10sIFxyXG4gICAgcD86ICAgICAgIENfUG9pbnQsIFxyXG4gICAgeD86ICAgICAgIG51bWJlcixcclxuICAgIHk/OiAgICAgICBudW1iZXIsXHJcbiAgICB6PzogICAgICAgbnVtYmVyLFxyXG4gICAgZD86ICAgICAgIFRfRGlyZWN0aW9uLFxyXG4gICAgbW90aW9uPzogIHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSlNPTl9UZWFtID0ge1xyXG4gICAgaWQ/OiAgICAgIG51bWJlciwgXHJcbiAgICBzYXZlX2lkPzogbnVtYmVyLCBcclxuICAgIG5hbWU/OiAgICBzdHJpbmcsIFxyXG4gICAgcG9pbnQ/OiAge3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJ9LCBcclxuICAgIHg/OiAgICAgICBudW1iZXIsXHJcbiAgICB5PzogICAgICAgbnVtYmVyLFxyXG4gICAgej86ICAgICAgIG51bWJlcixcclxuICAgIGRpcmVjdD86IHtkOiBudW1iZXJ9LFxyXG4gICAgaGVyb2VzPzogIEpTT05fSGVyb1tdLCBcclxuICAgIG1vdGlvbj86ICBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydF90ZWFtX2luZm8oYTogSlNPTl9UZWFtfHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgYWxlcnQoXCJUZWFtIEluZm86XCIgXHJcbiAgICAgICAgKyBcIlxcbmlkOiAgICBcIiAgICAgKyAoYS5pZCAgICAgICAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5uYW1lOiAgXCIgICAgICsgKGEubmFtZSAgICAgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuc2F2ZV9pZDogXCIgICArIChhLnNhdmVfaWQgICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl94OiBcIiAgICAgKyAoYS5wb2ludD8ueCAgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5jdXJfeTogXCIgICAgICsgKGEucG9pbnQ/LnkgID8/ICc/JylcclxuICAgICAgICArIFwiXFxuY3VyX3o6IFwiICAgICArIChhLnBvaW50Py56ICA/PyAnPycpXHJcbiAgICAgICAgKyBcIlxcbmN1cl9kOiBcIiAgICAgKyAoYS5kaXJlY3Q/LmQgPz8gJz8nKVxyXG4gICAgICAgICsgXCJcXG5cIlxyXG4gICAgKTtcclxuXHJcbi8vICAgIGlmIChhLmhlcm9lcyAhPT0gdW5kZWZpbmVkKSBhbGVydF9oZXJvZXNfaW5mbyhhLmhlcm9lcyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ19UZWFtIGltcGxlbWVudHMgSV9FeGlzdCB7XHJcbiAgICBwcm90ZWN0ZWQgbXlfaWQ6ICAgIG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBteV9uYW1lOiAgc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHNhdmVfaWQ6ICBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgd2Fsa2VyOiAgIENfV2Fsa2VyO1xyXG4gICAgcHJvdGVjdGVkIG15X2xheWVyOiBudW1iZXIgPSA5OTtcclxuICAgIHByb3RlY3RlZCBoZXJvZXM6ICAgQ19IZXJvW107XHJcblxyXG4gICAgcHJvdGVjdGVkIGhvcGVfbW90aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBfX2luaXRfYXJnKSB7XHJcblxyXG4gICAgICAgIHRoaXMubXlfaWQgICA9IGE/LmlkID8/IDA7XHJcbiAgICAgICAgdGhpcy5teV9uYW1lID0gYT8ubmFtZSA/PyAnTmVvIFRlYW0/JztcclxuICAgICAgICB0aGlzLnNhdmVfaWQgPSBhPy5zYXZlX2lkID8/IDA7XHJcbiAgICAgICAgdGhpcy53YWxrZXIgPSBuZXcgQ19XYWxrZXIoKTtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaG9wZV9tb3Rpb24gPSBhPy5tb3Rpb24gPz8gJ05PUCc7ICAgIFxyXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHRoaXMuX19pbml0KGEpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9faW5pdChhOiBfX2luaXRfYXJnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5teV9pZCAgID0gYS5pZCAgICAgID8/IHRoaXMubXlfaWRcclxuICAgICAgICB0aGlzLm15X25hbWUgPSBhLm5hbWUgICAgPz8gdGhpcy5teV9uYW1lO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9pZCA9IGEuc2F2ZV9pZCA/PyB0aGlzLnNhdmVfaWQ7XHJcbiAgICAgICAgaWYgKGEucCAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfcChhLnApO1xyXG4gICAgICAgIGlmIChhLnggIT09IHVuZGVmaW5lZCkgdGhpcy53YWxrZXIuc2V0X3goYS54KTtcclxuICAgICAgICBpZiAoYS55ICE9PSB1bmRlZmluZWQpIHRoaXMud2Fsa2VyLnNldF94KGEueSk7XHJcbiAgICAgICAgaWYgKGEueiAhPT0gdW5kZWZpbmVkKSB0aGlzLndhbGtlci5zZXRfeChhLnopO1xyXG4gICAgICAgIGlmIChhLmQgIT09IHVuZGVmaW5lZCkgdGhpcy53YWxrZXIuc2V0X2RpcihhLmQpO1xyXG4gICAgICAgIHRoaXMuaG9wZV9tb3Rpb24gPSBhLm1vdGlvbiA/PyB0aGlzLmhvcGVfbW90aW9uOyBcclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBoZXJvIG9mIGEuaGVyb2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZF9oZXJvKGhlcm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wcnAoYXJnIDogX19pbml0X2FyZykge1xyXG4gICAgICAgIHRoaXMuX19pbml0KGFyZyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ1RlYW1fJyArIHRoaXMubXlfaWQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDUsICcwJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2l0aGluKHA6IENfUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoZXJlID0gdGhpcy53YWxrZXIuZ2V0X3AoKTtcclxuICAgICAgICByZXR1cm4gaGVyZS53aXRoaW4ocCk7IFxyXG4gICAgfVxyXG4gICAgcHVibGljIGxheWVyKCk6IG51bWJlciB7cmV0dXJuIHRoaXMubXlfbGF5ZXI7fVxyXG4gICAgcHVibGljIHNldF9sYXllcihsYXllcjogbnVtYmVyKTogdm9pZCB7dGhpcy5teV9sYXllciA9IGxheWVyO31cclxuICAgIHB1YmxpYyB0b19sZXR0ZXIoKTogc3RyaW5nfG51bGwge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy53YWxrZXIuZ2V0X2RpcigpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogcmV0dXJuICfihpEnO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6IHJldHVybiAn4oaSJztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiByZXR1cm4gJ+KGkyc7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogcmV0dXJuICfihpAnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ/CfjIAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcCgpOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxrZXIuZ2V0X3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfcChwOkNfUG9pbnQsIGQ/OiBUX0RpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF9wKHAsIGQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF96KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyLmdldF96KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0X3ooejogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHogPCAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X3ooeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2RpcigpOiBUX0RpcmVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyLmdldF9kaXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRfZGlyKGQ6IFRfRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53YWxrZXIuc2V0X2RpcihkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2Fyb3VuZChmcm9udDogbnVtYmVyLCByaWdodDpudW1iZXIsIHVwOiBudW1iZXIgPSAwKTogQ19Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsa2VyLmdldF9hcm91bmQoZnJvbnQsIHJpZ2h0LCB1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhvcGVfcF9md2QoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiTW92ZVwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcF9md2QoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLndhbGtlci5zZXRfcF9md2QoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfYmFrKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIk1vdmVcIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3BfYmFrKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy53YWxrZXIuc2V0X3BfYmFrKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9wZV90dXJuX3IoKTogSV9Ib3BlQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNfaG9wZTogdHJ1ZSwgXHJcbiAgICAgICAgICAgIGhvcGU6IFwiVHVyblwiLFxyXG4gICAgICAgICAgICBzdWJqOiB0aGlzLndhbGtlci5nZXRfcCgpLFxyXG4gICAgICAgICAgICBkb09LOiAoKT0+e3RoaXMud2Fsa2VyLnR1cm5fcigpO30sXHJcbiAgICAgICAgICAgIGRvTkc6ICgpPT57dGhpcy5pc05HKCk7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhvcGVfdHVybl9sKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlR1cm5cIixcclxuICAgICAgICAgICAgc3ViajogdGhpcy53YWxrZXIuZ2V0X3AoKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLndhbGtlci50dXJuX2woKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaG9wZV9wX3VwKCk6IElfSG9wZUFjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGFzX2hvcGU6IHRydWUsIFxyXG4gICAgICAgICAgICBob3BlOiBcIlVwXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wX3VwKCksXHJcbiAgICAgICAgICAgIGRvT0s6ICgpPT57dGhpcy5tb3ZlX3BfdXAoKTt9LFxyXG4gICAgICAgICAgICBkb05HOiAoKT0+e3RoaXMuaXNORygpO30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBob3BlX3BfZG93bigpOiBJX0hvcGVBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhhc19ob3BlOiB0cnVlLCBcclxuICAgICAgICAgICAgaG9wZTogXCJEb3duXCIsXHJcbiAgICAgICAgICAgIHN1Ymo6IHRoaXMud2Fsa2VyLmdldF9wX2Rvd24oKSxcclxuICAgICAgICAgICAgZG9PSzogKCk9Pnt0aGlzLm1vdmVfcF9kb3duKCk7fSxcclxuICAgICAgICAgICAgZG9ORzogKCk9Pnt0aGlzLmlzTkcoKTt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVfcF91cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndhbGtlci5zZXRfcF91cCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG1vdmVfcF9kb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2Fsa2VyLnNldF9wX2Rvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNORygpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZF9oZXJvKGhlcm86IENfSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzLnB1c2goaGVybyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlX2hlcm8oaGVybzogQ19IZXJvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSB0aGlzLmhlcm9lcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGhlcm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmNvZGUoKTogSlNPTl9UZWFtIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy53YWxrZXIuZ2V0X3goKTtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy53YWxrZXIuZ2V0X3koKTtcclxuICAgICAgICBjb25zdCB6ID0gdGhpcy53YWxrZXIuZ2V0X3ooKTtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy53YWxrZXIuZ2V0X2RpcigpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogICAgICB0aGlzLm15X2lkLFxyXG4gICAgICAgICAgICBuYW1lOiAgICB0aGlzLm15X25hbWUsXHJcbiAgICAgICAgICAgIHNhdmVfaWQ6IHRoaXMuc2F2ZV9pZCxcclxuICAgICAgICAgICAgcG9pbnQ6ICAge3g6IHgsIHk6IHksIHo6IHp9LFxyXG4gICAgICAgICAgICBkaXJlY3Q6ICB7ZDogZH0sXHJcbiAgICAgICAgICAgIGhlcm9lczogIENfSGVyby5lbmNvZGVfaGVyb2VzKHRoaXMuaGVyb2VzKSxcclxuICAgICAgICAgICAgbW90aW9uOiAgdGhpcy5ob3BlX21vdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBKU09OX1RlYW18dW5kZWZpbmVkKTogQ19UZWFtIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGEuaWQgICAhPT0gdW5kZWZpbmVkKSAgICB0aGlzLm15X2lkICAgICAgID0gYS5pZDtcclxuICAgICAgICBpZiAoYS5uYW1lICE9PSB1bmRlZmluZWQpICAgIHRoaXMubXlfbmFtZSAgICAgPSBhLm5hbWU7XHJcbiAgICAgICAgaWYgKGEuc2F2ZV9pZCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNhdmVfaWQgICAgID0gYS5zYXZlX2lkO1xyXG4gICAgICAgIGlmIChhLm1vdGlvbiAhPT0gdW5kZWZpbmVkKSAgdGhpcy5ob3BlX21vdGlvbiA9IGEubW90aW9uO1xyXG5cclxuICAgICAgICBpZiAoYS5wb2ludCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBhLnBvaW50ID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2VyLmRlY29kZShhLnBvaW50KTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChhLnggIT09IHVuZGVmaW5lZCAmJiBhLnkgIT09IHVuZGVmaW5lZCAmJiBhLnogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLndhbGtlci5kZWNvZGUoe3g6IGEueCwgeTogYS55LCB6OiBhLnp9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLmRpcmVjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBhLnBvaW50ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLndhbGtlci5kZWNvZGUoYS5kaXJlY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEuaGVyb2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSBDX0hlcm8uZGVjb2RlX2hlcm9lcyhhLmhlcm9lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdHlwZSBUX0F0dHIgPSB7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ19VcmxPcHQge1xyXG4gICAgcHJvdGVjdGVkIHY6IFRfQXR0cjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzPzogIHN0cmluZyk7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodD86ICBUX0F0dHIpO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGE/OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy52ID0ge30gYXMgVF9BdHRyO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9mcm9tX3N0cmluZyhhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudiA9IGEgYXMgVF9BdHRyO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudiA9IHt9IGFzIFRfQXR0cjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2tleXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGtleV9saXN0OiBzdHJpbmdbXSA9IG5ldyBBcnJheSBhcyBzdHJpbmdbXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGtleV9saXN0LnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleV9saXN0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCAoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGlmICAodHlwZW9mIHRoaXMudltrZXldID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52W2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52W2tleV0gYXMgc3RyaW5nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQoc3RyOiBzdHJpbmcpOiAgdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoYXRyOiBUX0F0dHIpOiAgdm9pZDtcclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbD86IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWw/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgcHVibGljIHNldCh1a246IGFueSwgICAgdmFsPzogc3RyaW5nfG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWtuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZF9mcm9tX3N0cmluZyh1a24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudlt1a25dID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudlt1a25dID0gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZbdWtuXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1a24gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHI6IFRfQXR0ciA9IHVrbiBhcyBUX0F0dHI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiBhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZbaXRlbV0gPSBhdHRyW2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ID0ge30gYXMgVF9BdHRyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvX3N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGxlbjogbnVtYmVyID0gIE9iamVjdC5rZXlzKHRoaXMudikubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPCAxKSAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgIHZhciBzdHJfYXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIHN0cl9hcnJheS5wdXNoKGtleSArIFwiPVwiICsgdGhpcy52W2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cl9hcnJheS5qb2luKFwiJlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b19Gb3JtRGF0YSgpOiBGb3JtRGF0YXxudWxsIHtcclxuICAgICAgICBjb25zdCBsZW46IG51bWJlciA9ICBPYmplY3Qua2V5cyh0aGlzLnYpLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuIDwgMSkgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmd8bnVtYmVyID0gdGhpcy52W2tleV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZm9ybV9kYXRhO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldF9mcm9tX3N0cmluZyhzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfZnJvbV9zdHJpbmcocyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYWRkX2Zyb21fc3RyaW5nKHM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHMucmVwbGFjZSgvXihcXD8/KSguKikkLywgJyQyJyk7XHJcbiAgICAgICAgY29uc3Qgc3RyX2FycmF5OiBzdHJpbmdbXSA9IHN0ci5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgc3RyX2FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5X3ZhbHVlID0gaXRlbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIGlmIChrZXlfdmFsdWUubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52W2tleV92YWx1ZVswXV0gPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudltrZXlfdmFsdWVbMF1dID0ga2V5X3ZhbHVlWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVF9EaXJlY3Rpb24gfSBmcm9tIFwiLi9UX0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDX1BvaW50IH0gICAgIGZyb20gXCIuL0NfUG9pbnRcIjtcclxuXHJcbnR5cGUgX19KU09OX2FyZyA9IHtcclxuICAgIHg/OiBudW1iZXIsXHJcbiAgICB5PzogbnVtYmVyLFxyXG4gICAgej86IG51bWJlcixcclxuICAgIGQ/OiBudW1iZXIsXHJcbn1cclxuZXhwb3J0IGNsYXNzIENfV2Fsa2VyIHtcclxuICAgIHByb3RlY3RlZCBwOiBDX1BvaW50O1xyXG4gICAgcHJvdGVjdGVkIGQ6IFRfRGlyZWN0aW9uO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wICA9IG5ldyBDX1BvaW50KCk7XHJcbiAgICAgICAgdGhpcy5kID0gVF9EaXJlY3Rpb24uTjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfZGlyKCk6IFRfRGlyZWN0aW9uIHtyZXR1cm4gdGhpcy5kfVxyXG4gICAgcHVibGljIHNldF9kaXIoZDogVF9EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wKCk6IENfUG9pbnQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ19Qb2ludCh0aGlzLnApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wKHA6IENfUG9pbnQsIGQ/OiBUX0RpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgdGhpcy5kID0gZCA/PyB0aGlzLmQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X3goKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5wLnh9XHJcbiAgICBwdWJsaWMgZ2V0X3koKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5wLnl9XHJcbiAgICBwdWJsaWMgZ2V0X3ooKTogbnVtYmVyIHtyZXR1cm4gdGhpcy5wLnp9XHJcblxyXG4gICAgcHVibGljIHNldF94KHg6IG51bWJlcik6IHZvaWQge3RoaXMucC54ID0geH1cclxuICAgIHB1YmxpYyBzZXRfeSh5OiBudW1iZXIpOiB2b2lkIHt0aGlzLnAueSA9IHl9XHJcbiAgICBwdWJsaWMgc2V0X3ooejogbnVtYmVyKTogdm9pZCB7dGhpcy5wLnogPSB6fVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcF9md2QoKTogQ19Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19nZXRfcF9tb3ZlKDEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Z3ZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wKHRoaXMuZ2V0X3BfZndkKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX2JhaygpOiBDX1BvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2dldF9wX21vdmUoLTEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2JhaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldF9wKHRoaXMuZ2V0X3BfYmFrKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9wX3VwKCk6IENfUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludCh0aGlzLnApO1xyXG4gICAgICAgIHAuei0tO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX3VwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X3AodGhpcy5nZXRfcF91cCgpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRfcF9kb3duKCk6IENfUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgQ19Qb2ludCh0aGlzLnApO1xyXG4gICAgICAgIHAueisrO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldF9wX2Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfcCh0aGlzLmdldF9wX2Rvd24oKSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX19nZXRfcF9tb3ZlKG9mZnNldDogbnVtYmVyKTpDX1BvaW50IHtcclxuICAgICAgICBjb25zdCBwID0gbmV3IENfUG9pbnQodGhpcy5wKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46IHAueSAtPSBvZmZzZXQ7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uRTogcC54ICs9IG9mZnNldDticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOiBwLnkgKz0gb2Zmc2V0O2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlc6IHAueCAtPSBvZmZzZXQ7YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldF9hcm91bmQoZnJvbnQ6IG51bWJlciwgcmlnaHQ6bnVtYmVyLCB1cDogbnVtYmVyKTogQ19Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgY3VyX3BvcyA9IHRoaXMucDtcclxuICAgICAgICBjb25zdCBjdXJfZGlyID0gdGhpcy5kO1xyXG4gICAgICAgIHZhciB0YXJnZXRfeCAgPSB0aGlzLnAueDtcclxuICAgICAgICB2YXIgdGFyZ2V0X3kgID0gdGhpcy5wLnk7XHJcbiAgICAgICAgdmFyIHRhcmdldF96ICA9IHRoaXMucC56IC0gdXA7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmQpIHtcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggKz0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeCArPSBmcm9udDtcclxuICAgICAgICAgICAgICAgIHRhcmdldF95ICs9IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgICAgIHRhcmdldF94IC09IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3kgKz0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3ggLT0gZnJvbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfeSAtPSByaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENfUG9pbnQodGFyZ2V0X3gsIHRhcmdldF95LCB0YXJnZXRfeik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9yKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5kID0gVF9EaXJlY3Rpb24uRTticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5TO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLlc7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5kID0gVF9EaXJlY3Rpb24uTjticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9sKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5OO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLkU7YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHVybl9iKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uTjogdGhpcy5kID0gVF9EaXJlY3Rpb24uUzticmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOiB0aGlzLmQgPSBUX0RpcmVjdGlvbi5XO2JyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLlM6IHRoaXMuZCA9IFRfRGlyZWN0aW9uLk47YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzogdGhpcy5kID0gVF9EaXJlY3Rpb24uVzticmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZW5jb2RlKCk6IF9fSlNPTl9hcmcge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucC54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLnAueSxcclxuICAgICAgICAgICAgejogdGhpcy5wLnosXHJcbiAgICAgICAgICAgIGQ6IHRoaXMuZCBhcyBudW1iZXIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlY29kZShhOiBfX0pTT05fYXJnKTogQ19XYWxrZXIge1xyXG4gICAgICAgIGlmIChhLnggIT09IHVuZGVmaW5lZCAmJiBhLnkgIT09IHVuZGVmaW5lZCAmJiBhLnogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnAueCA9IGEueDtcclxuICAgICAgICAgICAgdGhpcy5wLnkgPSBhLnk7XHJcbiAgICAgICAgICAgIHRoaXMucC56ID0gYS56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5kICE9PSB1bmRlZmluZWQpIHRoaXMuZCAgID0gYS5kIGFzIFRfRGlyZWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDX1JhbmdlIH0gZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVF9XYWxsID0ge1xyXG4gICAgbWluX3g6IG51bWJlcixcclxuICAgIG1heF94OiBudW1iZXIsXHJcbiAgICBtaW5feTogbnVtYmVyLFxyXG4gICAgbWF4X3k6IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENfV2FsbCB7XHJcbiAgICBwcm90ZWN0ZWQgdzogVF9XYWxsW11bXTtcclxuICAgIHByb3RlY3RlZCBkOiBudW1iZXJcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXB0aDogbnVtYmVyID0gNSwgc2l6ZTogQ19SYW5nZSkge1xyXG4gICAgICAgIGlmIChkZXB0aCA8IDMpIGRlcHRoID0gNTtcclxuICAgICAgICBpZiAoZGVwdGggJSAyICE9PSAxKSBkZXB0aCsrOyAgLy8g5aWH5pWw44Gu44G/5a++5b+c44CCXHJcblxyXG4gICAgICAgIGNvbnN0IG1pbl94OiBudW1iZXIgPSBzaXplLm1pbl94KCk7XHJcbiAgICAgICAgY29uc3QgbWluX3k6IG51bWJlciA9IHNpemUubWluX3koKTtcclxuICAgICAgICBjb25zdCBtYXhfeDogbnVtYmVyID0gc2l6ZS5tYXhfeCgpO1xyXG4gICAgICAgIGNvbnN0IG1heF95OiBudW1iZXIgPSBzaXplLm1heF95KCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjZW50ZXJfeDogbnVtYmVyID0gKG1heF94IC0gbWluX3gpIC8gMjtcclxuICAgIFxyXG4gICAgICAgIC8vIOWfuua6luOBqOOBquOCi+WjgSjkuIDnlarpgaDjgY/jga7lo4Ep44Gu5q2j6Z2i44K144Kk44K6KOaoquW5hSnjgpLmsYLjgoHjgotcclxuICAgICAgICAvLyDkuIDnlarpgaDjgY8oZGVwdGggLSAxKeOBruWjgeOBruaVsOOBjGRlcHRo5YCL44Gr44Gq44KL44KI44GG44Gr6Kq/5pW044GZ44KLXHJcbiAgICAgICAgY29uc3QgZnJvbnRfd2FsbF9zaXplX3g6IG51bWJlciA9IChtYXhfeCAtIG1pbl94KSAvIGRlcHRoO1xyXG5cclxuICAgICAgICAvLyDln7rmupbjgajjgarjgovlgbTlo4Hjga7jgrXjgqTjgroo5qiq5bmFKeOCkuaxguOCgeOCi1xyXG4gICAgICAgIC8vIOS4gOeVqumBoOOBj+OBruWjgSjkuK3lpK4p44Gu5bem56uv44GL44KJZGVwdGjlgIvjga7lgbTlo4HjgpLlj5bjgozjgovjgojjgYbjgavjgrXjgqTjgrroqr/mlbTjgZnjgotcclxuICAgICAgICBjb25zdCBzaWRlX3dhbGxfc2l6ZV94OiAgbnVtYmVyID0gKGNlbnRlcl94IC0gZnJvbnRfd2FsbF9zaXplX3ggLyAyKSAvIGRlcHRoO1xyXG4gICAgXHJcbiAgICAgICAgLy8g5ZCEZGVwdGjliKXjga7mraPpnaLlo4Hjga7mqKrluYXjgpLmsYLjgoHjgovjgIJcclxuICAgICAgICAvLyDoqIjnrpfjga7liKnkvr/mgKfjgpLogIPmha7jgZfjgabjgIHjg4/jg7zjg5XjgrXjgqTjgrrjgpLmsYLjgoHjgotcclxuICAgICAgICBjb25zdCBmcm9udF93YWxsX0hfc2l6ZV94OiBudW1iZXJbXSA9IG5ldyBBcnJheShkZXB0aCArIDEpO1xyXG4gICAgXHJcbiAgICAgICAgZnJvbnRfd2FsbF9IX3NpemVfeFtkZXB0aF0gPSBmcm9udF93YWxsX3NpemVfeCAvIDI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlcHRoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZnJvbnRfd2FsbF9IX3NpemVfeFtpXSA9IGZyb250X3dhbGxfSF9zaXplX3hbaSArIDFdICsgc2lkZV93YWxsX3NpemVfeDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyDlpKnkupXjga7nuKbluYXjga7lopfliIbjgpLmsYLjgoHjgovjgILlibLlkIjjga/pganlvZPvvIjnrJHvvIlcclxuICAgICAgICBjb25zdCBzaWRlX3dhbGxfc2l6ZV9UOiBudW1iZXIgPSAobWF4X3kgLSBtaW5feSkgKiAxLjAgLyAoKGRlcHRoICsgMSkgKiAyICsgMSk7XHJcbiAgICAgICAgLy8g5bqK44Gu5aKX5YiG44KS5rGC44KB44KL44CCXHJcbiAgICAgICAgY29uc3Qgc2lkZV93YWxsX3NpemVfQjogbnVtYmVyID0gKG1heF95IC0gbWluX3kpICogMS4wIC8gKChkZXB0aCArIDEpICogMiArIDEpO1xyXG4gICAgXHJcbiAgICAgICAgLy8g5Lul5LiK44Gu5YCk44KS55So44GE44Gm5ZCE6Led6ZuiKGRlcHRoKeOBruato+mdouWjgeOBruS9jee9ruaxuuOCgeOCkuOBmeOCi1xyXG4gICAgICAgIC8vIHdhbGzjga7nrKzkuIDlvJXmlbDjga/ot53pm6LjgIHnrKzkuozlvJXmlbDjga/lt6blj7Pjga7kvY3nva7vvIjkuIDnlarlt6bjgYww44CB5LiA55Wq5Y+z44GMZGVwdGgtMSlcclxuICAgICAgICBjb25zdCB3YWxsOiBUX1dhbGxbXVtdID0gbmV3IEFycmF5KGRlcHRoICsgMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkZXB0aCArIDE7IGorKykge1xyXG4gICAgICAgICAgICB3YWxsW2pdID0gbmV3IEFycmF5KGRlcHRoICsgMSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZGVwdGggKyAxOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdrX3ggPSBjZW50ZXJfeCAtIGZyb250X3dhbGxfSF9zaXplX3hbal0gKiAoZGVwdGggLSAyICogayk7XHJcbiAgICAgICAgICAgICAgICB3YWxsW2pdW2tdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbl94OiB3a194LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heF94OiB3a194ICArIGZyb250X3dhbGxfSF9zaXplX3hbal0gKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbl95OiBtaW5feSArIHNpZGVfd2FsbF9zaXplX1QgKiBqLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heF95OiBtYXhfeSAtIHNpZGVfd2FsbF9zaXplX0IgKiBqLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZCA9IGRlcHRoO1xyXG4gICAgICAgIHRoaXMudyA9IHdhbGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0X2RlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQoZGVwdGg6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpOiBUX1dhbGwge1xyXG4gICAgICAgIGNvbnN0IEhfZGVwdCA9ICh0aGlzLmQgLSAxKSAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud1tkZXB0aF1bSF9kZXB0ICsgb2Zmc2V0XTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ19VcmxPcHQgfSBmcm9tIFwiLi9DX1VybE9wdFwiO1xyXG5pbXBvcnQgeyBnX212bSB9ICAgIGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1RfYW5kX2dldF9KU09OKFxyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgb3B0OiBDX1VybE9wdCwgXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBmb3JtX2RhdGEgPSBvcHQudG9fRm9ybURhdGEoKTtcclxuICAgIGlmIChmb3JtX2RhdGEgPT09IG51bGwpIHJldHVybiAnJztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBmb3JtX2RhdGFcclxuICAgICAgICB9KTtcclxuLyoqKlxyXG4gICAgICAgIHJlcy50ZXh0KCkudGhlbih0eHQ9PntcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7aSA8ICh0eHQubGVuZ3RoIDwgMTAwMD90eHQubGVuZ3RoOjEwMDApOyBpICs9IDI1MCkgXHJcbiAgICAgICAgICAgICAgICBhbGVydCh0eHQuc3Vic3RyaW5nKGksIGkrMjUwKSk7XHJcbiAgICAgICAgfSlcclxuKioqL1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGdfbXZtLndhcm5pbmdfbWVzc2FnZSgn6YCa5L+h44Ko44Op44O8OiAnICsgZXJyKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUE9TVF9hbmRfbW92ZV9wYWdlKHVybDogc3RyaW5nLCBvcHQ6IENfVXJsT3B0KTogdm9pZCB7XHJcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlX2Zvcm0odXJsLCBvcHQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGZvcm0uc3VibWl0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9mb3JtKHVybDogc3RyaW5nLCBvcHQ6IENfVXJsT3B0KTogSFRNTEZvcm1FbGVtZW50IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgICAgICdkdW1teV9mb3JtXycgKyBuZXcgRGF0ZSgpLnZhbHVlT2YoKS50b1N0cmluZygpKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICB1cmwpO1xyXG4gICAgZm9ybS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcblxyXG4gICAgZm9yICh2YXIga2V5IG9mIG9wdC5nZXRfa2V5cygpKSB7XHJcbiAgICAgICAgY3JlYXRlX2lucHV0KGZvcm0sIGtleSwgb3B0LmdldChrZXkpKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2lucHV0KGZvcm06IEhUTUxGb3JtRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZmlkOiBzdHJpbmc7XHJcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdpZCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmlkID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2lkJykgYXMgc3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWQgPSAnZHVtbXlfZm9ybSc7XHJcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgZmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBpLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCdmb3InLCAgIGZpZCk7XHJcbiAgICBpLnNldEF0dHJpYnV0ZSgnbmFtZScsICBuYW1lKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgIGkuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpKTtcclxuXHJcbiAgICByZXR1cm4gaTtcclxufSIsImltcG9ydCB7IENfUG9pbnQgfSAgZnJvbSBcIi4vQ19Qb2ludFwiXHJcbmltcG9ydCB7IENfUmFuZ2UgfSAgZnJvbSBcIi4vQ19SYW5nZVwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9IGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IFRfV2FsbCwgQ19XYWxsIH0gICAgICAgZnJvbSBcIi4vQ19XYWxsXCI7XHJcbmltcG9ydCB7IGdfbWF6ZSwgZ190ZWFtLCBnX2RzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFRfRGlyZWN0aW9uIH0gICAgICAgICAgZnJvbSBcIi4vVF9EaXJlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5X21hemUyRCgpOiB2b2lkIHsgXHJcbiAgICBjb25zdCBwcmU6IEhUTUxFbGVtZW50fG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3MkRfcHJlJyk7XHJcbiAgICBpZiAocHJlICE9PSBudWxsKSBwcmUuaW5uZXJUZXh0ID0gZ19tYXplLnRvX3N0cmluZyhnX3RlYW0uZ2V0X3AoKS56KTtcclxufVxyXG5leHBvcnQgdHlwZSBUX0Ryb3dTZXQgPSB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50fG51bGwsXHJcbiAgICBjb246ICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxudWxsLFxyXG4gICAgZGVwdGg6ICBudW1iZXIsXHJcbiAgICB3YWxsOiAgIENfV2FsbHxudWxsLFxyXG59XHJcblxyXG50eXBlIFRfeHkgICA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cclxudHlwZSBUX1JlY3QgPSB7dGw6IFRfeHksIHRyOiBUX3h5LCBibDogVF94eSwgYnI6IFRfeHl9O1xyXG5cclxuLy8gM0Tmj4/lhpnmmYLjgavkvb/nlKjjgZnjgovlpKfln5/lpInmlbDjga7mupblgplcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfbWF6ZTNEKCk6IFRfRHJvd1NldCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWF6ZV92aWV3M0RfY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAoY2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoJ0NhbnZhcyBpc250IGZvdW5kISBpZD1NYXplX3ZpZXczRF9jYW52YXMnKTtcclxuICAgICAgICByZXR1cm4ge2NhbnZhczogbnVsbCwgY29uOiBudWxsLCBkZXB0aDogMCwgd2FsbDogbnVsbH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb246IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxudWxsID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoY29uID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoJ0Jyb3dzZXIgZG9udCBzdXJwcG9ydCAyRCBncmFwaGljcyEnKTtcclxuICAgICAgICByZXR1cm4ge2NhbnZhczogbnVsbCwgY29uOiBudWxsLCBkZXB0aDogMCwgd2FsbDogbnVsbH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVwdGggPSA1OyAvLyDlpYfmlbDjga7jgb/lr77lv5zjgILjg4Djg7Pjgrjjg6fjg7Pjga7opovpgJrjgZfjgpLoia/jgY/jgZnjgovjgarjgokgNSDjgYvjgoLjgZfjgozjgarjgYRcclxuXHJcbiAgICBjb25zdCB0b3BfcCA9IG5ldyBDX1BvaW50KDAsIDAsIDApO1xyXG4gICAgY29uc3QgYnRtX3AgPSBuZXcgQ19Qb2ludChjYW52YXMuY2xpZW50V2lkdGggIC0gMSwgY2FudmFzLmNsaWVudEhlaWdodCAtIDEsIDApO1xyXG4gICAgY29uc3Qgd2FsbCAgPSBuZXcgQ19XYWxsKGRlcHRoLCBuZXcgQ19SYW5nZSh0b3BfcCwgYnRtX3ApKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtjYW52YXM6IGNhbnZhcywgY29uOiBjb24sIGRlcHRoOiBkZXB0aCwgd2FsbDogd2FsbH07XHJcbn1cclxuXHJcbi8vIDNE5o+P5YaZ5pmC44Gu55S76Z2i5Yid5pyf5YyW44CC44Go44KK44GC44GI44Ga5aSp5LqV44Go5bqK44KS5o+P44GPXHJcbmZ1bmN0aW9uIGRyYXdfaW5pdF9tYXplM0QoKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jYW52YXMgPT09IG51bGwgfHwgZ19kcy5jb24gPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBnX2RzLmNvbi5maWxsU3R5bGUgPSAnI2FhYWFhYSc7XHJcbiAgICBnX2RzLmNvbi5maWxsUmVjdChcclxuICAgICAgICAwLCBcclxuICAgICAgICAwLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy5jbGllbnRXaWR0aCAtIDEsIFxyXG4gICAgICAgIGdldF9ob2xpem9uX2xpbmUoKSxcclxuICAgICk7XHJcblxyXG4gICAgZ19kcy5jb24uZmlsbFN0eWxlID0gJyM2NjY2ZmYnO1xyXG4gICAgZ19kcy5jb24uZmlsbFJlY3QoXHJcbiAgICAgICAgMCwgXHJcbiAgICAgICAgZ2V0X2hvbGl6b25fbGluZSgpLCBcclxuICAgICAgICBnX2RzLmNhbnZhcy5jbGllbnRXaWR0aCAgIC0gMSwgXHJcbiAgICAgICAgZ19kcy5jYW52YXMuY2xpZW50SGVpZ2h0ICAtIDEsXHJcbiAgICApO1xyXG5cclxuICAgIGRyb3dfZmxvb3JfbGluZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfaG9saXpvbl9saW5lKCk6IG51bWJlciB7XHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4gZ19kcy53YWxsLmdldChnX2RzLmRlcHRoLCAwKS5tYXhfeTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mbG9vcl9saW5lKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHMuY2FudmFzID09PSBudWxsIHx8IGdfZHMuY29uID09PSBudWxsIHx8IGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uICAgPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHdhbGwgID0gZ19kcy53YWxsO1xyXG4gICAgY29uc3QgZGVwdGggPSBnX2RzLmRlcHRoO1xyXG4gICAgY29uc3QgSF9kZXB0ID0gKGRlcHRoIC0gMSkgLyAyO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfeCAgPSAwO1xyXG4gICAgY29uc3QgcmlnaHRfeCA9IGdfZHMuY2FudmFzLmNsaWVudFdpZHRoICAtIDE7XHJcbiAgICBjb25zdCBmcm9udF95ID0gZ19kcy5jYW52YXMuY2xpZW50SGVpZ2h0IC0gMTtcclxuICAgIGNvbnN0IGJhY2tfeSAgPSBnZXRfaG9saXpvbl9saW5lKCk7XHJcblxyXG4gICAgY29uLnN0cm9rZVN0eWxlID0gJyM5OTk5ZmYnO1xyXG4gICAgY29uLmxpbmVXaWR0aCAgID0gMTtcclxuXHJcbiAgICAvLyDmqKrnt5oo55S76Z2i44Gr5a++44GX44Gm5rC05bmzKeOCkuW8leOBj1xyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkZXB0aCArIDE7IHkrKykge1xyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKGxlZnRfeCAsIHdhbGwuZ2V0KHksIDApLm1heF95KTtcclxuICAgICAgICBjb24ubGluZVRvKHJpZ2h0X3gsIHdhbGwuZ2V0KHksIDApLm1heF95KTtcclxuICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g57im57ea44KS5byV44GPXHJcbiAgICBmb3IgKHZhciB4ID0gLUhfZGVwdDsgeCA8IEhfZGVwdCArIDE7IHgrKykge1xyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKHdhbGwuZ2V0KDAsICAgICB4KS5taW5feCwgZnJvbnRfeSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyh3YWxsLmdldChkZXB0aCwgeCkubWluX3gsIGJhY2tfeSApO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlfbWF6ZTNEKCk6IHZvaWQge1xyXG4gICAgaWYgKGdfZHMuY2FudmFzID09PSBudWxsIHx8IGdfZHMuY29uID09PSBudWxsIHx8IGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGRyYXdfaW5pdF9tYXplM0QoKTtcclxuICAgIGRpc3BsZXlfbWFzZTNEX2RpcmVjdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IGRlcHRoICAgPSAgZ19kcy5kZXB0aDtcclxuICAgIGNvbnN0IEhfZGVwdGggPSAoZGVwdGggLSAxKSAvIDI7XHJcbiAgICBmb3IgKHZhciBqID0gZ19kcy5kZXB0aCAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgLy8g5Y+z5YG044GM6KaL44GI44Gm44GE44KL5aOB44Gu5o+P5YaZICjlt6blgbTjgYvjgonmj4/lhpkpXHJcbiAgICAgICAgZm9yICh2YXIgayA9IC1IX2RlcHRoOyBrIDwgMDsgaysrKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ19tYXplLmdldF9jZWxsKGdfdGVhbS5nZXRfYXJvdW5kKGosIGssIDApKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdG9uZTpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X3JpZ2h0X3NpZGVfc3RvbmUoaiwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiBcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yX3VuZXhwKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfcmlnaHRfc2lkZV9zdGFpcnMoaiwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOiBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19mbG9vcihqICxrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDjgIDlt6blgbTjgYzopovjgYjjgabjgYTjgovlo4Hjga7mj4/lhpkgKOWPs+WBtOOBi+OCieaPj+WGmSlcclxuICAgICAgICBmb3IgKHZhciBrID0gSF9kZXB0aDsgayA+IDA7IGstLSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGdfbWF6ZS5nZXRfY2VsbChnX3RlYW0uZ2V0X2Fyb3VuZChqLCBrLCAwKSkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvd19sZWZ0X3NpZGVfc3RvbmUoaiwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiBcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yX3VuZXhwKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuU3RyRG46XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0clVEOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3dfbGVmdF9zaWRlX3N0YWlycyhqLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBkcm93X2Zsb29yKGogLGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOato+mdouOBruWjgeOBruaPj+WGmVxyXG4gICAgICAgIHN3aXRjaCAoZ19tYXplLmdldF9jZWxsKGdfdGVhbS5nZXRfYXJvdW5kKGosIDAsIDApKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlN0b25lOlxyXG4gICAgICAgICAgICAgICAgZHJvd19mcm9udF9zdG9uZShqLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOiBcclxuICAgICAgICAgICAgICAgIGRyb3dfZmxvb3JfdW5leHAoaiAsMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgICAgIGRyb3dfZnJvbnRfc3RhaXJzKGosIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVF9NektpbmQuRmxvb3I6IFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZHJvd19mbG9vcihqICwwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mbG9vcl91bmV4cChkOiBudW1iZXIsIHc6bnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X2Zsb29yKGQsIHcsICcjNjZmZmZmJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3dfZnJvbnRfc3RvbmUoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZnJvbnQoZCwgdywgJyMwMGZmMDAnLCAnIzAwMDBmZicpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfbGVmdF9zaWRlX3N0b25lKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X2xlZnRfc2lkZShkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbiAgICBkcm93X2Zyb250ICAgIChkLCB3LCAnIzAwZmYwMCcsICcjMDAwMGZmJyk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19yaWdodF9zaWRlX3N0b25lKGQ6IG51bWJlciwgdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBkcm93X3JpZ2h0X3NpZGUoZCwgdywgJyMwMGZmMDAnLCAnIzAwMDBmZicpO1xyXG4gICAgZHJvd19mcm9udCAgICAgKGQsIHcsICcjMDBmZjAwJywgJyMwMDAwZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19mcm9udF9zdGFpcnMoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZmxvb3IgIChkLCB3LCAnI2ZmZmZjYycsICcjZmZmZjAwJyk7XHJcbiAgICBkcm93X2NlaWxpbmcoZCwgdywgJyNmZmZmY2MnLCAnI2ZmZmYwMCcpO1xyXG4gICAgZHJvd19mcm9udCAgKGQsIHcsICBudWxsLCAgICAgJyNmZmZmMDAnKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X2xlZnRfc2lkZV9zdGFpcnMoZDogbnVtYmVyLCB3OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRyb3dfZmxvb3IgICAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfY2VpbGluZyAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfbGVmdF9zaWRlKGQsIHcsICBudWxsLCAgICAgJyNmZmZmMDAnKTtcclxuXHJcbn1cclxuZnVuY3Rpb24gZHJvd19yaWdodF9zaWRlX3N0YWlycyhkOiBudW1iZXIsIHc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZHJvd19mbG9vciAgICAgKGQsIHcsICcjZmZmZmNjJywgJyNmZmZmMDAnKTtcclxuICAgIGRyb3dfY2VpbGluZyAgIChkLCB3LCAnI2ZmZmZjYycsICcjZmZmZjAwJyk7XHJcbiAgICBkcm93X3JpZ2h0X3NpZGUoZCwgdywgIG51bGwsICAgICAnI2ZmZmYwMCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm93X2Zsb29yKFxyXG4gICAgICAgICAgICBkOiAgICBudW1iZXIsIFxyXG4gICAgICAgICAgICB3OiAgICBudW1iZXIsIFxyXG4gICAgICAgICAgICBmaWxsOiBzdHJpbmcgPSAnIzY2NjZmZicsIFxyXG4gICAgICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICAgICAgICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdF9mcm9udCA9IGdfZHMud2FsbC5nZXQoZCwgICAgIHcpO1xyXG4gICAgY29uc3QgcmVjdF9iYWNrICA9IGdfZHMud2FsbC5nZXQoZCArIDEsIHcpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWF4X3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5tYXhfeX0sXHJcbiAgICAgICAgYnI6IHt4OiByZWN0X2JhY2sgLm1heF94LCB5OiByZWN0X2JhY2sgLm1heF95fSxcclxuICAgICAgICBibDoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19jZWlsaW5nKFxyXG4gICAgICAgICAgICBkOiBudW1iZXIsIFxyXG4gICAgICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgICAgICBmaWxsOiBzdHJpbmcgPSAnI2FhYWFhYScsIFxyXG4gICAgICAgICAgICBsaW5lOiBzdHJpbmcgPSAnIzk5OTlmZidcclxuICAgICk6IHZvaWQge1xyXG5cclxuICAgIGlmIChnX2RzLndhbGwgPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsICAgICB3KTtcclxuICAgIGNvbnN0IHJlY3RfYmFjayAgPSBnX2RzLndhbGwuZ2V0KGQgKyAxLCB3KTtcclxuXHJcbiAgICBjb25zdCByZWN0OiBUX1JlY3QgPSB7XHJcbiAgICAgICAgdGw6IHt4OiByZWN0X2Zyb250Lm1pbl94LCB5OiByZWN0X2Zyb250Lm1pbl95fSxcclxuICAgICAgICB0cjoge3g6IHJlY3RfZnJvbnQubWF4X3gsIHk6IHJlY3RfZnJvbnQubWluX3l9LFxyXG4gICAgICAgIGJyOiB7eDogcmVjdF9iYWNrIC5tYXhfeCwgeTogcmVjdF9iYWNrIC5taW5feX0sXHJcbiAgICAgICAgYmw6IHt4OiByZWN0X2JhY2sgLm1pbl94LCB5OiByZWN0X2JhY2sgLm1pbl95fVxyXG4gICAgfVxyXG4gICAgZHJvd19jZWxsKHJlY3QsIGZpbGwsIGxpbmUpO1xyXG59XHJcbmZ1bmN0aW9uIGRyb3dfZnJvbnQoXHJcbiAgICAgICAgZDogbnVtYmVyLCBcclxuICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZ3xudWxsID0gJyMwMGZmMDAnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmd8bnVsbCA9ICcjMDAwMGZmJ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuICAgIGNvbnN0IHJlY3RfZnJvbnQgPSBnX2RzLndhbGwuZ2V0KGQsIHcpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Q6IFRfUmVjdCA9IHtcclxuICAgICAgICB0bDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWluX3l9LFxyXG4gICAgICAgIHRyOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgYnI6IHt4OiByZWN0X2Zyb250Lm1heF94LCB5OiByZWN0X2Zyb250Lm1heF95fSxcclxuICAgICAgICBibDoge3g6IHJlY3RfZnJvbnQubWluX3gsIHk6IHJlY3RfZnJvbnQubWF4X3l9XHJcbiAgICB9XHJcbiAgICBkcm93X2NlbGwocmVjdCwgZmlsbCwgbGluZSk7XHJcbn1cclxuZnVuY3Rpb24gZHJvd19sZWZ0X3NpZGUoXHJcbiAgICAgICAgZDogbnVtYmVyLCBcclxuICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZ3xudWxsID0gJyMwMGNjMDAnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmd8bnVsbCA9ICcjMDAwMGZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uID0gZ19kcy5jb247XHJcbiAgICBjb25zdCByZWN0X2Zyb250ID0gZ19kcy53YWxsLmdldChkLCAgICAgdyk7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2JhY2sgLm1pbl94LCB5OiByZWN0X2JhY2sgLm1pbl95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfYmFjayAubWluX3gsIHk6IHJlY3RfYmFjayAubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9mcm9udC5taW5feCwgeTogcmVjdF9mcm9udC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5mdW5jdGlvbiBkcm93X3JpZ2h0X3NpZGUoXHJcbiAgICAgICAgZDogbnVtYmVyLCBcclxuICAgICAgICB3OiBudW1iZXIsIFxyXG4gICAgICAgIGZpbGw6IHN0cmluZ3xudWxsID0gJyMwMGNjMDAnLCBcclxuICAgICAgICBsaW5lOiBzdHJpbmd8bnVsbCA9ICcjMDAwMGZmJ1xyXG4gICAgKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGdfZHMud2FsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uID0gZ19kcy5jb247XHJcbiAgICBjb25zdCByZWN0X2Zyb250ID0gZ19kcy53YWxsLmdldChkLCAgICAgdyk7XHJcbiAgICBjb25zdCByZWN0X2JhY2sgID0gZ19kcy53YWxsLmdldChkICsgMSwgdyk7XHJcblxyXG4gICAgY29uc3QgcmVjdDogVF9SZWN0ID0ge1xyXG4gICAgICAgIHRsOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5taW5feX0sXHJcbiAgICAgICAgdHI6IHt4OiByZWN0X2JhY2sgLm1heF94LCB5OiByZWN0X2JhY2sgLm1pbl95fSxcclxuICAgICAgICBicjoge3g6IHJlY3RfYmFjayAubWF4X3gsIHk6IHJlY3RfYmFjayAubWF4X3l9LFxyXG4gICAgICAgIGJsOiB7eDogcmVjdF9mcm9udC5tYXhfeCwgeTogcmVjdF9mcm9udC5tYXhfeX1cclxuICAgIH1cclxuICAgIGRyb3dfY2VsbChyZWN0LCBmaWxsLCBsaW5lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJvd19jZWxsKHI6IFRfUmVjdCwgZmlsbDogc3RyaW5nfG51bGwsIGxpbmU6IHN0cmluZ3xudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoZ19kcy5jb24gPT09IG51bGwgfHwgZ19kcy53YWxsID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb24gPSBnX2RzLmNvbjtcclxuXHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24ubW92ZVRvKHIudGwueCwgci50bC55KTtcclxuICAgIGNvbi5saW5lVG8oci50ci54LCByLnRyLnkpO1xyXG4gICAgY29uLmxpbmVUbyhyLmJyLngsIHIuYnIueSk7XHJcbiAgICBjb24ubGluZVRvKHIuYmwueCwgci5ibC55KTtcclxuICAgIGNvbi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBpZiAoZmlsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uLmZpbGxTdHlsZSAgID0gZmlsbDtcclxuICAgICAgICBjb24uZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmUgIT09IG51bGwpIHtcclxuICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBsaW5lO1xyXG4gICAgICAgIGNvbi5saW5lV2lkdGggICA9IDE7XHJcbiAgICAgICAgY29uLnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsZXlfbWFzZTNEX2RpcmVjdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBfZGlyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01hemVfdmlldzNEX2RpcmVjdGlvbl9pbmZvJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBpZiAocF9kaXIgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydCgnUCBlbGVtZW50IGlzbnQgZm91bmQhIGlkPU1hemVfdmlldzNEX2RpcmVjdGlvbl9pbmZvJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gICAgc3dpdGNoIChnX3RlYW0uZ2V0X2RpcigpKSB7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5OOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fTlwiPuOAiuWMl+OAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLkU6XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICc8c3BhbiBjbGFzcz1cImRpcmVjdGlvbl9FXCI+44CK5p2x44CLPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uUzpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJzxzcGFuIGNsYXNzPVwiZGlyZWN0aW9uX1NcIj7jgIrljZfjgIs8L3NwYW4+JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5XOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fV1wiPuOAiuilv+OAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnPHNwYW4gY2xhc3M9XCJkaXJlY3Rpb25fRFwiPuOAiuisjuOAizwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwID0gZ190ZWFtLmdldF9wKCk7XHJcbiAgICBjb25zdCBtZXMgPSAn5Zyw5LiLICcgKyAocC56ICsgMSkgKyAn6ZqO44CAJyArIGRpcmVjdGlvbiArICfjgIAoeCA9IDxzcGFuIGlkPVwiZGlyZWN0aW9uX1hcIj4nICsgcC54ICsgJzwvc3Bhbj4sIHkgPSA8c3BhbiBpZD1cImRpcmVjdGlvbl9ZXCI+JyArIHAueSArICc8L3NwYW4+KSc7XHJcbiAgICBwX2Rpci5pbm5lckhUTUwgPSBtZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF6ZTNEX2JsaW5rX29uX2RpcmVjdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpcl94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9YJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl94ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZGlyX3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uX1knKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBpZiAoZGlyX3kgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBzd2l0Y2ggKGdfdGVhbS5nZXRfZGlyKCkpIHtcclxuICAgICAgICBjYXNlIFRfRGlyZWN0aW9uLk46XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5TOlxyXG4gICAgICAgICAgICBkaXJfeC5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG4gICAgICAgICAgICBkaXJfeS5jbGFzc0xpc3QuYWRkICAgKCdibGluaycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBUX0RpcmVjdGlvbi5FOlxyXG4gICAgICAgIGNhc2UgVF9EaXJlY3Rpb24uVzpcclxuICAgICAgICAgICAgZGlyX3guY2xhc3NMaXN0LmFkZCAgICgnYmxpbmsnKTtcclxuICAgICAgICAgICAgZGlyX3kuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpcl94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9YJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl94ID09PSBudWxsKSByZXR1cm47XHJcbiAgICBkaXJfeC5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG5cclxuICAgIGNvbnN0IGRpcl95ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbl9ZJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgaWYgKGRpcl95ID09PSBudWxsKSByZXR1cm47XHJcbiAgICBkaXJfeS5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhbGVydF9tYXplX2luZm8gfSAgICAgZnJvbSBcIi4vQ19NYXplXCI7IC8vIOmAmuW4uOaZguOBr+OCs+ODoeODs+ODiOOCouOCpuODiOOBleOCjOOBpuOBhOOCi+mWouaVsFxyXG5pbXBvcnQgeyBhbGVydF90ZWFtX2luZm8gfSAgICAgZnJvbSBcIi4vQ19UZWFtXCI7IC8vIOmAmuW4uOaZguOBr+OCs+ODoeODs+ODiOOCouOCpuODiOOBleOCjOOBpuOBhOOCi+mWouaVsFxyXG5pbXBvcnQgeyBhbGVydF9oZXJvZXNfaW5mbyB9ICAgZnJvbSBcIi4vQ19IZXJvXCI7IC8vIOmAmuW4uOaZguOBr+OCs+ODoeODs+ODiOOCouOCpuODiOOBleOCjOOBpuOBhOOCi+mWouaVsFxyXG5cclxuaW1wb3J0IHsgQ19VcmxPcHQgfSAgICAgICAgICAgIGZyb20gXCIuL0NfVXJsT3B0XCI7ICAgICAgICAgIFxyXG5pbXBvcnQgeyBQT1NUX2FuZF9nZXRfSlNPTiB9ICAgZnJvbSBcIi4vRl9QT1NUXCI7XHJcbmltcG9ydCB7IGluaXRfY29udHJvbGxlcyB9ICAgICBmcm9tIFwiLi9GX3NldF9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IGRvX21vdmVfYm90dG9tX2hhbGYgfSBmcm9tIFwiLi9GX3NldF9tb3ZlX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgZ19nZXRfbWF6ZV91cmwsIGdfbWF6ZSwgZ190ZWFtLCBnX212bSwgaW5pdF9kZWJ1Z19tb2RlIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0X21haV9tYXplKHVybDogc3RyaW5nLCBvcHQ6IENfVXJsT3B0KTogdm9pZCB7XHJcbiAgICBQT1NUX2FuZF9nZXRfSlNPTih1cmwsIG9wdCk/LnRoZW4oanNvbk9iaj0+e1xyXG4vLyAgICAgICAgICAgIGFsZXJ0X21hemVfaW5mbyhqc29uT2JqPy5tYXplKTtcclxuLy8gICAgICAgICAgICBhbGVydF90ZWFtX2luZm8oanNvbk9iaj8udGVhbSk7XHJcbi8vICAgICAgICAgICAgYWxlcnRfaGVyb2VzX2luZm8oanNvbk9iaj8udGVhbT8uaGVyb2VzKTtcclxuXHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfZGVidWdfbW9kZSgpO1xyXG4gICAgICAgICAgICBpbml0X2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X2xvYWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHQgPSBuZXcgQ19VcmxPcHQoKTtcclxuICAgIG9wdC5zZXQoJ21vZGUnLCAgICAgICAnaW5zdGFudF9sb2FkJyk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV9pZCcsICAgICAxKTsgXHJcbiAgICBvcHQuc2V0KCdzYXZlX3RpdGxlJywgJycpOyBcclxuXHJcbiAgICBQT1NUX2FuZF9nZXRfSlNPTihnX2dldF9tYXplX3VybCwgb3B0KT8udGhlbihqc29uT2JqPT57XHJcbiAgICAgICAgaWYgKGpzb25PYmouZWNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICBnX212bS5ub3JtYWxfbWVzc2FnZSgn5q2j5bi444Gr44Ot44O844OJ44GV44KM44G+44GX44GfJyk7XHJcbi8vICAgICAgICAgICAgYWxlcnRfbWF6ZV9pbmZvKGpzb25PYmo/Lm1hemUpO1xyXG4vLyAgICAgICAgICAgIGFsZXJ0X3RlYW1faW5mbyhqc29uT2JqPy50ZWFtKTtcclxuLy8gICAgICAgICAgICBhbGVydF9oZXJvZXNfaW5mbyhqc29uT2JqPy50ZWFtPy5oZXJvZXMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICAgICAgICAgIGluaXRfY29udHJvbGxlcygpO1xyXG4gICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoXCLjg63jg7zjg4njgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50X3NhdmUoKTogdm9pZCB7IFxyXG4gICAgY29uc3QgbWF6ZV9kYXRhID0gSlNPTi5zdHJpbmdpZnkoZ19tYXplLmVuY29kZSgpLCBudWxsLCBcIlxcdFwiKTtcclxuICAgIGNvbnN0IHRlYW1fZGF0YSA9IEpTT04uc3RyaW5naWZ5KGdfdGVhbS5lbmNvZGUoKSwgbnVsbCwgXCJcXHRcIik7XHJcblxyXG4gICAgY29uc3Qgb3B0ID0gbmV3IENfVXJsT3B0KCk7XHJcbiAgICBvcHQuc2V0KCdtb2RlJywgICAgICAgJ2luc3RhbnRfc2F2ZScpOyBcclxuICAgIG9wdC5zZXQoJ3NhdmVfaWQnLCAgICAgMSk7IFxyXG4gICAgb3B0LnNldCgnc2F2ZV90aXRsZScsICcnKTsgXHJcbiAgICBvcHQuc2V0KCdtYXplJywgICAgICAgbWF6ZV9kYXRhKTtcclxuICAgIG9wdC5zZXQoJ3RlYW0nLCAgICAgICB0ZWFtX2RhdGEpO1xyXG5cclxuICAgIFBPU1RfYW5kX2dldF9KU09OKGdfZ2V0X21hemVfdXJsLCBvcHQpPy50aGVuKGpzb25PYmo9PntcclxuICAgICAgICBpZiAoanNvbk9iai5lY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGdfbXZtLm5vcm1hbF9tZXNzYWdlKCfmraPluLjjgavjgrvjg7zjg5bjgZXjgozjgb7jgZfjgZ8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnX212bS53YXJuaW5nX21lc3NhZ2UoXCLjgrvjg7zjg5bjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG5cIiArIGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGpzb25PYmouZW1zZyk7XHJcbiAgICAgICAgfVxyXG4vLyAgICAgICAgYWxlcnRfbWF6ZV9pbmZvKGpzb25PYmo/Lm1hemUpO1xyXG4vLyAgICAgICAgYWxlcnRfdGVhbV9pbmZvKGpzb25PYmo/LnRlYW0pO1xyXG4vLyAgICAgICAgYWxlcnRfaGVyb2VzX2luZm8oanNvbk9iaj8udGVhbT8uaGVyb2VzKTtcclxuICAgIFxyXG4gICAgICAgIGRlY29kZV9hbGwoanNvbk9iaik7XHJcbiAgICB9KTtcclxuLy8gICAgUE9TVF9hbmRfbW92ZV9wYWdlKGdfY2hlY2tfSlNPTl91cmwsIG9wdCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlX2FsbChqc29uT2JqOiBhbnkpIHtcclxuICAgIC8vIE1BWkXplqLpgKPjga7jg4fjgrPjg7zjg4lcclxuICAgIGlmIChqc29uT2JqLm1hemUgIT09IHVuZGVmaW5lZCkgZ19tYXplLmRlY29kZShqc29uT2JqLm1hemUpO1xyXG5cclxuICAgIC8v44CAVGVhbemWoumAo+OBruODh+OCs+ODvOODiVxyXG4gICAgaWYgKGpzb25PYmoudGVhbSAhPT0gdW5kZWZpbmVkKSBnX3RlYW0uZGVjb2RlKGpzb25PYmoudGVhbSk7XHJcblxyXG4gICAgLy8gTWF6ZeOBq1RlYW3jgpLov73liqBcclxuICAgIGdfbWF6ZS5hZGRfb2JqKGdfdGVhbSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGhpZGVfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgVF9DdGxzTW9kZSB9IGZyb20gXCIuL1RfQ3Rsc01vZGVcIjtcclxuaW1wb3J0IHsgc2V0X21vdmVfY29udHJvbGxlcywgZG9fbW92ZV9ib3R0b21faGFsZiB9IGZyb20gXCIuL0Zfc2V0X21vdmVfY29udHJvbGxlc1wiO1xyXG5pbXBvcnQgeyBnX21hemUsIGdfdGVhbSwgZ19kZWJ1Z19tb2RlLCBnX2N0bHNfbW9kZSwgZ19tdm0gfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xyX1VEX2NvbnRyb2xsZXMoKTogdm9pZCB7XHJcbiAgICBjYW5VcCA9IGZhbHNlO1xyXG4gICAgY2FuRG4gPSBmYWxzZTtcclxuICAgIGlzVXAgID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgdV9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBkX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IHlfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lfYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBuX2J0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBrZXlfcHJlc3NfZnVuY3Rpb24yKTtcclxuXHJcbiAgICB1X2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob3BlX1VwKTtcclxuICAgIGRfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvcGVfRG93bik7XHJcblxyXG4gICAgeV9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX3VwKTtcclxuICAgIHlfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb19kb3duKTtcclxuICAgIHlfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb19VRCk7XHJcbiAgICBuX2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fY2FuY2VsKTtcclxuXHJcbiAgICB1X2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIGRfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgeV9idG4uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgbl9idG4uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG5cclxuXHJcbnZhciBjYW5VcDogYm9vbGVhbiAgPSAgZmFsc2U7XHJcbnZhciBjYW5EbjogYm9vbGVhbiAgPSAgZmFsc2U7XHJcblxyXG52YXIgaXNVcDogIGJvb2xlYW4gID0gIGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF9VcF9jb250cm9sbGVzKCkge1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+S4iuOCiuODhuODrOODneODvOOCv+ODvOOBjOacieOCiuOBvuOBmeOAgueZu+OCiuOBvuOBmeOBi++8n+eZu+OCiyDih5Ig44CHIOeZu+OCieOBquOBhCDih5Ig4pyWJyk7XHJcblxyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBjYW5VcCA9IHRydWU7XHJcbiAgICBjYW5EbiA9IGZhbHNlO1xyXG4gICAgX19zZXRfVURfY29udHJvbGxlcygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X0RuX2NvbnRyb2xsZXMoKSB7XHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn5LiL44KK44OG44Os44Od44O844K/44O844GM5pyJ44KK44G+44GZ44CC6ZmN44KK44G+44GZ44GL77yf6ZmN44KK44KLIOKHkiDjgIcg6ZmN44KK44Gq44GEIOKHkiDinJYnKTtcclxuXHJcbiAgICBoaWRlX2NvbnRyb2xsZXMoKTtcclxuICAgIGNhblVwID0gZmFsc2U7XHJcbiAgICBjYW5EbiA9IHRydWU7XHJcbiAgICBfX3NldF9VRF9jb250cm9sbGVzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfVURfY29udHJvbGxlcygpIHtcclxuICAgIGdfbXZtLm5vdGljZV9tZXNzYWdlKCfkuIrkuIvjg4bjg6zjg53jg7zjgr/jg7zjgYzmnInjgorjgb7jgZnjgILnmbvjgorjgb7jgZnjgYvvvJ/nmbvjgovih5Ig44CHIOmZjeOCiuOCiyDih5IgKOKGk+OCreODvCkg56e75YuV44GX44Gq44GEIOKHkiDinJYnKTtcclxuXHJcbiAgICBoaWRlX2NvbnRyb2xsZXMoKTtcclxuICAgIGNhblVwID0gdHJ1ZTtcclxuICAgIGNhbkRuID0gdHJ1ZTtcclxuICAgIF9fc2V0X1VEX2NvbnRyb2xsZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19zZXRfVURfY29udHJvbGxlcygpIHtcclxuICAgIGdfY3Rsc19tb2RlWzBdID0gVF9DdGxzTW9kZS5VRDtcclxuXHJcbiAgICBjb25zdCB5X2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5X2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3Qgbl9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbl9idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHlfYnRuLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBuX2J0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgIG5fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb19jYW5jZWwsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoY2FuVXAgJiYgIWNhbkRuKSB7XHJcbiAgICAgICAgeV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvX3VwLCAgICAgZmFsc2UpO1xyXG4gICAgfSBcclxuICAgIGlmIChjYW5EbiAmJiAhY2FuVXApIHtcclxuICAgICAgICB5X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fZG93biwgICBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FuVXAgJiYgY2FuRG4pIHtcclxuICAgICAgICB5X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9fVUQsICAgICBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHVfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvcGVfVXAsIGZhbHNlKTtcclxuICAgICAgICB1X2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIGRfYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvcGVfRG93biwgZmFsc2UpO1xyXG4gICAgICAgIGRfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICAgICAgaWYgKGlzVXApICB1X2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIGVsc2UgICAgICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblxyXG4gICAgICAgIGlmICghaXNVcCkgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICBlbHNlICAgICAgIGRfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMik7XHJcblxyXG4gICAgY29uc3QgY3RsX3ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZV9jdGxfdmlldycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY3RsX3ZpZXcuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxufVxyXG5cclxuZnVuY3Rpb24ga2V5X3ByZXNzX2Z1bmN0aW9uMihlOiBLZXlib2FyZEV2ZW50KTp2b2lkICB7XHJcbiAgICBzd2l0Y2goZS5jb2RlKSB7IC8vIEFycm9344Gv5Y+N5b+c44Gb44GaKOOCpOODmeODs+ODiOiHquS9k+OBjOeZuueUn+OBm+OBmilcclxuICAgICAgICBjYXNlICdBcnJvd1VwJzogXHJcbiAgICAgICAgY2FzZSAnS2V5Syc6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDUnOiBcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzogXHJcbiAgICAgICAgY2FzZSAnS2V5Sic6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDInOiBcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSAnS2V5Tyc6XHJcbiAgICAgICAgY2FzZSAnS2V5WSc6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkMCc6XHJcbiAgICAgICAgY2FzZSAnRGlnaXQwJzpcclxuICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkRW50ZXInOlxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lfYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSAnS2V5Tic6XHJcbiAgICAgICAgY2FzZSAnS2V5WCc6XHJcbiAgICAgICAgY2FzZSAnTnVtcGFkQWRkJzpcclxuLy8gICAgICAgIGNhc2UgJ051bXBhZFN1YnRyYWN0JzpcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduX2J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0tleVUnOlxyXG4gICAgICAgICAgICBpZiAoZ19kZWJ1Z19tb2RlICYmIGdfdGVhbS5nZXRfeigpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ190ZWFtLnNldF96KGdfdGVhbS5nZXRfeigpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhblVwKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgJ0tleUQnOlxyXG4gICAgICAgICAgICBpZiAoZ19kZWJ1Z19tb2RlICYmIGdfdGVhbS5nZXRfeigpIDwgKGdfbWF6ZS5nZXRfel9tYXgoKSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBnX3RlYW0uc2V0X3ooZ190ZWFtLmdldF96KCkgKyAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FuRG4pIHtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2NhbmNlbCgpOiB2b2lkIHtcclxuICAgIGdfbXZtLmNsZWFyX21lc3NhZ2UoKTtcclxuICAgIHNldF9tb3ZlX2NvbnRyb2xsZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fdXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF91cCgpO1xyXG4gICAgaWYgKCFyc2x0Lmhhc19ob3BlIHx8ICFnX21hemUud2l0aGluKHJzbHQuc3ViaikpIHtcclxuICAgICAgICByc2x0LmRvTkcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcnNsdC5kb09LKCk7XHJcbiAgICB9XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbiAgICBzZXRfbW92ZV9jb250cm9sbGVzKCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fZG93bigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV9wX2Rvd24oKTtcclxuICAgIGlmICghcnNsdC5oYXNfaG9wZSB8fCAhZ19tYXplLndpdGhpbihyc2x0LnN1YmopKSB7XHJcbiAgICAgICAgcnNsdC5kb05HKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJzbHQuZG9PSygpO1xyXG4gICAgfVxyXG4gICAgZ19tdm0uY2xlYXJfbWVzc2FnZSgpO1xyXG4gICAgc2V0X21vdmVfY29udHJvbGxlcygpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX1VEKCk6IHZvaWQge1xyXG4gICAgaWYgKCFjYW5VcCB8fCAhY2FuRG4pIHJldHVybjtcclxuICAgIFxyXG4gICAgaWYgKGlzVXApIGRvX3VwKCk7XHJcbiAgICBlbHNlICAgICAgZG9fZG93bigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3BlX1VwKCk6IHZvaWQge1xyXG4gICAgaWYgKCFjYW5VcCB8fCAhY2FuRG4pIHJldHVybjtcclxuICAgIGlzVXAgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKT8uc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpPy5zdHlsZS5zZXRQcm9wZXJ0eSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgICBnX212bS5ub3RpY2VfbWVzc2FnZSgn55m744KK44G+44GZ44GL77yf55m744KL4oeSIOOAhyDpmY3jgorjgosg4oeSICjihpPjgq3jg7wpIOenu+WLleOBl+OBquOBhCDih5Ig4pyWJyk7XHJcbn1cclxuZnVuY3Rpb24gaG9wZV9Eb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKCFjYW5VcCB8fCAhY2FuRG4pIHJldHVybjtcclxuICAgIGlzVXAgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93Jyk/LnN0eWxlLnNldFByb3BlcnR5KCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RfYXJyb3cnKT8uc3R5bGUuc2V0UHJvcGVydHkoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgZ19tdm0ubm90aWNlX21lc3NhZ2UoJ+mZjeOCiuOBvuOBmeOBi++8n+mZjeOCiuOCi+KHkiDjgIcg55m744KLIOKHkiAo4oaR44Kt44O8KSDnp7vli5XjgZfjgarjgYQg4oeSIOKclicpO1xyXG59XHJcblxyXG4iLCJcclxuICAgIC8qKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqL1xyXG4gICAgLyogIEhUTUxQcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7ICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnaWQnLCAndV9hcnJhdycpOyAgICAgICAgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZ3JpZCcpOyAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5hcHBlbmRDaGlsZChIVE1MRWxlbWVudCk7ICAgICAgICAgICAgICovXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IGNscl9tb3ZlX2NvbnRyb2xsZXMsIHNldF9tb3ZlX2NvbnRyb2xsZXMgfSBmcm9tIFwiLi9GX3NldF9tb3ZlX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgY2xyX1VEX2NvbnRyb2xsZXMgfSBmcm9tIFwiLi9GX3NldF9VRF9jb250cm9sbGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZV9jb250cm9sbGVzKCkge1xyXG4gICAgY2xyX21vdmVfY29udHJvbGxlcygpO1xyXG4gICAgY2xyX1VEX2NvbnRyb2xsZXMoKTtcclxuICAgIGNvbnN0IG1vdmVfY3RsX3ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZV9jdGxfdmlldycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbW92ZV9jdGxfdmlldz8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9jb250cm9sbGVzKCkge1xyXG4gICAgaGlkZV9jb250cm9sbGVzKCk7XHJcbiAgICBzZXRfbW92ZV9jb250cm9sbGVzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGlkZV9jb250cm9sbGVzIH0gICAgICAgICAgICBmcm9tIFwiLi9GX3NldF9jb250cm9sbGVzXCI7XHJcbmltcG9ydCB7IElfSG9wZUFjdGlvbiB9ICAgICAgICAgICAgICAgZnJvbSBcIi4vSV9FdmVudE1hcFwiO1xyXG5pbXBvcnQgeyBUX016S2luZCB9ICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL1RfTXpLaW5kXCI7XHJcbmltcG9ydCB7IFRfQ3Rsc01vZGUgfSAgICAgICAgICAgICAgICAgZnJvbSBcIi4vVF9DdGxzTW9kZVwiO1xyXG5pbXBvcnQgeyBpbnN0YW50X2xvYWQsIGluc3RhbnRfc2F2ZSB9IGZyb20gXCIuL0ZfbGFvZF9hbmRfc2F2ZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5X21hemUyRCwgZGlzcGxheV9tYXplM0QsIFxyXG4gICAgICAgICBtYXplM0RfYmxpbmtfb25fZGlyZWN0aW9uLCBtYXplM0RfYmxpbmtfb2ZmX2RpcmVjdGlvbiB9ICAgZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuaW1wb3J0IHsgc2V0X1VwX2NvbnRyb2xsZXMsIHNldF9Ebl9jb250cm9sbGVzLCBzZXRfVURfY29udHJvbGxlcyB9IGZyb20gXCIuL0Zfc2V0X1VEX2NvbnRyb2xsZXNcIjtcclxuaW1wb3J0IHsgZ19tYXplLCBnX3RlYW0sIGdfZGVidWdfbW9kZSwgZ19jdGxzX21vZGUsIGdfbXZtIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xyX21vdmVfY29udHJvbGxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndV9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgZF9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCByX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGxfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleV9wcmVzc19mdW5jdGlvbjEpO1xyXG5cclxuICAgIHVfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvX0YpO1xyXG4gICAgZF9hcnJvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29fQik7XHJcbiAgICByX2Fycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cl9SKTtcclxuICAgIGxfYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyX0wpO1xyXG5cclxuICAgIHVfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICBsX2Fycm93LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIHJfYXJyb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X21vdmVfY29udHJvbGxlcygpOiB2b2lkIHtcclxuICAgIGhpZGVfY29udHJvbGxlcygpO1xyXG4gICAgZ19jdGxzX21vZGVbMF0gPSBUX0N0bHNNb2RlLk1vdmU7XHJcbiAgICBjb25zdCB1X2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGRfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3Qgcl9hcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBsX2Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICB1X2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb19GLCBmYWxzZSk7XHJcbiAgICBkX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb19CLCBmYWxzZSk7XHJcbiAgICByX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cl9SLCBmYWxzZSk7XHJcbiAgICBsX2Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cl9MLCBmYWxzZSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5X3ByZXNzX2Z1bmN0aW9uMSk7XHJcblxyXG4gICAgdV9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgZF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgbF9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgcl9hcnJvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgIGNvbnN0IGN0bF92aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVfY3RsX3ZpZXcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGN0bF92aWV3Py5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlfcHJlc3NfZnVuY3Rpb24xKGU6IEtleWJvYXJkRXZlbnQpOnZvaWQgIHtcclxuICAgIHN3aXRjaChlLmNvZGUpIHsgLy8gQXJyb3fjga/lj43lv5zjgZvjgZoo44Kk44OZ44Oz44OI6Ieq5L2T44GM55m655Sf44Gb44GaKVxyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOiBcclxuICAgICAgICBjYXNlICdLZXlLJzogXHJcbiAgICAgICAgY2FzZSAnTnVtcGFkNSc6IFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1X2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzogXHJcbiAgICAgICAgY2FzZSAnS2V5Sic6IFxyXG4gICAgICAgIGNhc2UgJ051bXBhZDInOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZF9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6IFxyXG4gICAgICAgIGNhc2UgJ0tleUgnOiBcclxuICAgICAgICBjYXNlICdOdW1wYWQxJzogXHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xfYXJyb3cnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzogXHJcbiAgICAgICAgY2FzZSAgJ051bXBhZDMnOiBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl9hcnJvdycpIGFzIEhUTUxCdXR0b25FbGVtZW50KT8uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUwnOlxyXG4gICAgICAgICAgICBpZiAoZ19kZWJ1Z19tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW50X2xvYWQoKTtcclxuICAgICAgICAgICAgICAgIGRvX21vdmVfYm90dG9tX2hhbGYoJ2JsaW5rX29mZicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyX2Fycm93JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpPy5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleVMnOiBcclxuICAgICAgICAgICAgaWYgKGdfZGVidWdfbW9kZSkgeyBcclxuICAgICAgICAgICAgICAgIGluc3RhbnRfc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5VSc6XHJcbiAgICAgICAgICAgIGlmIChnX2N0bHNfbW9kZVswXSA9PSBUX0N0bHNNb2RlLk1vdmUgJiYgZ19kZWJ1Z19tb2RlICYmIGdfdGVhbS5nZXRfeigpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ190ZWFtLnNldF96KGdfdGVhbS5nZXRfeigpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlEJzpcclxuICAgICAgICAgICAgaWYgKGdfY3Rsc19tb2RlWzBdID09IFRfQ3Rsc01vZGUuTW92ZSAmJiBnX2RlYnVnX21vZGUgJiYgZ190ZWFtLmdldF96KCkgPCAoZ19tYXplLmdldF96X21heCgpIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIGdfdGVhbS5zZXRfeihnX3RlYW0uZ2V0X3ooKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKioqKioqKioqKioqKi9cclxuICAgIC8qICBIVE1MUHJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpOyAgICAqL1xyXG4gICAgLyogIEhUTUxFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VfYXJyYXcnKTsgICAgICAgICovXHJcbiAgICAvKiAgSFRNTEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2dyaWQnKTsgKi9cclxuICAgIC8qICBIVE1MRWxlbWVudD8uYXBwZW5kQ2hpbGQoSFRNTEVsZW1lbnQpOyAgICAgICAgICAgICAqL1xyXG4gICAgLyoqKioqKioqKioqKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBjbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpOiB2b2lkIHtcclxuICAgIGdfbWF6ZS5jbGVhcl9tYXNrX2Fyb3VuZF90aGVfdGVhbSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VfdW5leHBfdG9fZmxvb3IoKTogdm9pZCB7XHJcbiAgICBnX21hemUuY2hhbmdlX3VuZXhwX3RvX2Zsb29yKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvX0YoKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF9md2QoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vbicpO1xyXG59XHJcbmZ1bmN0aW9uIGdvX0IoKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfcF9iYWsoKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vbicpO1xyXG59XHJcbmZ1bmN0aW9uIHRyX1IoKSB7XHJcbiAgICBjb25zdCByc2x0ID0gZ190ZWFtLmhvcGVfdHVybl9yKCk7XHJcbiAgICBtb3ZlX2NoZWNrKHJzbHQpO1xyXG4gICAgZG9fbW92ZV9ib3R0b21faGFsZignYmxpbmtfb2ZmJyk7XHJcbn1cclxuZnVuY3Rpb24gdHJfTCgpIHtcclxuICAgIGNvbnN0IHJzbHQgPSBnX3RlYW0uaG9wZV90dXJuX2woKTtcclxuICAgIG1vdmVfY2hlY2socnNsdCk7XHJcbiAgICBkb19tb3ZlX2JvdHRvbV9oYWxmKCdibGlua19vZmYnKTtcclxufVxyXG5mdW5jdGlvbiBtb3ZlX2NoZWNrKHI6IElfSG9wZUFjdGlvbikge1xyXG4gICAgaWYgKCFyLmhhc19ob3BlKSByZXR1cm47XHJcbiAgICBpZiAoci5ob3BlID09ICdUdXJuJykge1xyXG4gICAgICAgIHIuZG9PSygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyLmhvcGUgPT0gJ01vdmUnKSB7XHJcbiAgICAgICAgY29uc3Qga2luZCA9IGdfbWF6ZS5nZXRfY2VsbChyLnN1YmopO1xyXG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLkZsb29yOlxyXG4gICAgICAgICAgICBjYXNlIFRfTXpLaW5kLlVuZXhwOlxyXG4gICAgICAgICAgICAgICAgIHIuZG9PSygpO3JldHVybjtcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgICAgICByLmRvT0soKTtcclxuICAgICAgICAgICAgICAgICBkb19zdGFpcnNfbW90aW9uKGtpbmQpO1xyXG4gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgci5kb05HKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59IFxyXG5cclxuZnVuY3Rpb24gZG9fc3RhaXJzX21vdGlvbihraW5kOiBUX016S2luZCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBUX016S2luZC5TdHJVcDpcclxuICAgICAgICAgICAgc2V0X1VwX2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX016S2luZC5TdHJEbjpcclxuICAgICAgICAgICAgc2V0X0RuX2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUX016S2luZC5TdHJVRDpcclxuICAgICAgICAgICAgc2V0X1VEX2NvbnRyb2xsZXMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9fbW92ZV9ib3R0b21faGFsZihibGlua19tb2RlOiBzdHJpbmcpOiB2b2lkIHsgICAvL2FsZXJ0KCdGbG9vcj8gPSAnICsgZ190ZWFtLmdldF9wKCkueik7XHJcbiAgICBjaGFuZ2VfdW5leHBfdG9fZmxvb3IoKTtcclxuICAgIGNsZWFyX21hc2tfYXJvdW5kX3RoZV90ZWFtKCk7XHJcbiAgICBkaXNwbGF5X21hemUyRCgpO1xyXG4gICAgZGlzcGxheV9tYXplM0QoKTtcclxuICAgIGlmIChibGlua19tb2RlID09PSAnYmxpbmtfb24nKSBtYXplM0RfYmxpbmtfb25fZGlyZWN0aW9uKCk7XHJcbiAgICBlbHNlIG1hemUzRF9ibGlua19vZmZfZGlyZWN0aW9uKCk7XHJcbiAgICBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4vVF9NYWtlRW51bVR5cGVcIjtcclxuZXhwb3J0IGNvbnN0IFRfQ3Rsc01vZGUgPSB7XHJcbiAgICBOb3A6ICAgICAwLFxyXG4gICAgTW92ZTogICAgMSxcclxuICAgIFVEOiAgICAgIDIsXHJcbiAgICBCYXR0bGU6ICAzLFxyXG4gICAgVW5rbm93bjogOTlcclxufSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgVF9DdGxzTW9kZSA9IFRfTWFrZUVudW1UeXBlPHR5cGVvZiBUX0N0bHNNb2RlPjtcclxuIiwiaW1wb3J0IHtUX01ha2VFbnVtVHlwZX0gZnJvbSBcIi4vVF9NYWtlRW51bVR5cGVcIjtcclxuZXhwb3J0IGNvbnN0IFRfRGlyZWN0aW9uID0ge1xyXG4gICAgTjogMCxcclxuICAgIEU6IDEsXHJcbiAgICBTOiAyLFxyXG4gICAgVzogMyxcclxuICAgIFg6IDk5XHJcbn0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIFRfRGlyZWN0aW9uID0gVF9NYWtlRW51bVR5cGU8dHlwZW9mIFRfRGlyZWN0aW9uPjtcclxuXHJcbmV4cG9ydCB2YXIgJERpcmVjdGlvbk5hbWUgPSB7XHJcbiAgICAwOiAgJ+WMlycsXHJcbiAgICAxOiAgJ+adsScsXHJcbiAgICAyOiAgJ+WNlycsXHJcbiAgICAzOiAgJ+ilvycsXHJcbiAgICA5OTogJ+isjidcclxufVxyXG4iLCIgICAgLy8g5LiA6Iis44Gr5L2/44GI44KL44Om44O844OG44Kj44Oq44OG44Kj44Gq5ZGq5paHXHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLliJfmjJnlnovjgajjgZfjgablnovljJbjgZnjgovjga7jgavliKnnlKhcclxuICAgIGltcG9ydCB7VF9NYWtlRW51bVR5cGV9IGZyb20gXCIuL1RfTWFrZUVudW1UeXBlXCI7XHJcblxyXG4gICAgLy8g44OA44Oz44K444On44Oz44Oe44OD44OX44Gu44K744Or44Gu56iu6aGe44KS6KGo44GZ5YiX5oyZ5Z6LXHJcbiAgICAvLyBOb0RlZjog5pyq5a6a576p44O75LiN5piOXHJcbiAgICAvLyBGbG9vcjog5bqKXHJcbiAgICAvLyBVbmV4cDog5pyq6LiP5ZywXHJcbiAgICAvLyBTdG9uZTog55+z5aOBXHJcbiAgICAvLyBTdHJVcDog5LiK44KK6ZqO5q61XHJcbiAgICAvLyBTdHJEbjog5LiL44KK6ZqO5q61XHJcbiAgICAvLyBFbXB0eTog5Yid5pyf54q25oWL44O75L2V44KC44Gq44GXXHJcbiAgICAvLyBcclxuICAgIC8vIGZ1bmN0aW9uIHRvX2ludChNektpbmQpOiAgICAgIGludCAgICAgICAg5YiX5oyZ5Z6L44Gr5a++5b+c44GZ44KL5YCkKOaVtOaVsOWApCnjgpLov5TjgZlcclxuICAgIC8vIGZ1bmN0aW9uIGZyb21faW50KGludCk6ICAgICAgIFRfTXpLaW5kICAgICDmlbTmlbDlgKTjgavlr77lv5zjgZnjgovliJfmjJnlnovjgpLov5TjgZko44Kv44Op44K544Oh44K944OD44OJKVxyXG4gICAgLy8gZnVuY3Rpb24gdG9fbGV0dGVyKE16S2luZCk6ICAgc3RyaW5nICAgICDliJfmjJnlnovjgavlr77lv5zjgZnjgovmloflrZfjgpLov5TjgZko44OA44Oz44K444On44Oz44GuMkTooajnpLrnlKgpXHJcbiAgICAvLyBmdW5jdGlvbiBmcm9tX2xldHRlcihzdHJpbmcpOiBUX016S2luZCAgICAg5paH5a2X44Gr5a++5b+c44GZ44KL5YiX5oyZ5Z6L44KS6L+U44GZKOOCr+ODqeOCueODoeOCveODg+ODiSlcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVF9NektpbmQ6e1trZXk6IHN0cmluZ106IG51bWJlcn0gID0ge1xyXG4gICAgICAgIE5vRGVmOiAgIDAsXHJcbiAgICAgICAgRmxvb3I6ICAgMSxcclxuICAgICAgICBVbmV4cDogICAyLFxyXG4gICAgICAgIFN0b25lOiAgIDMsXHJcbiAgICAgICAgVW5rd246ICAgNCxcclxuICAgICAgICBTdHJVcDogICA1LFxyXG4gICAgICAgIFN0ckRuOiAgIDYsXHJcbiAgICAgICAgU3RyVUQ6ICAgNyxcclxuICAgICAgICBFbXB0eTogMjU1LFxyXG4gICAgfSBhcyBjb25zdDtcclxuICAgIGV4cG9ydCB0eXBlIFRfTXpLaW5kICAgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9NektpbmQ+O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBUX1J2TXpLaW5kOntba2V5OiBudW1iZXJdOiBUX016S2luZH0gID0ge1xyXG4gICAgICAgIDA6ICAgVF9NektpbmQuTm9EZWYsXHJcbiAgICAgICAgMTogICBUX016S2luZC5GbG9vcixcclxuICAgICAgICAyOiAgIFRfTXpLaW5kLlVuZXhwLFxyXG4gICAgICAgIDM6ICAgVF9NektpbmQuU3RvbmUsXHJcbiAgICAgICAgNDogICBUX016S2luZC5Vbmt3bixcclxuICAgICAgICA1OiAgIFRfTXpLaW5kLlN0clVwLFxyXG4gICAgICAgIDY6ICAgVF9NektpbmQuU3RyRG4sXHJcbiAgICAgICAgNzogICBUX016S2luZC5TdHJVRCxcclxuICAgICAgICAyNTU6IFRfTXpLaW5kLkVtcHR5LFxyXG4gICAgfSBhcyBjb25zdDtcclxuICAgIGV4cG9ydCB0eXBlIFRfUnZNektpbmQgPSBUX01ha2VFbnVtVHlwZTx0eXBlb2YgVF9Sdk16S2luZD47XHJcblxyXG4iLCJjb25zdCBteV91cmxfYmFzZTogc3RyaW5nID0gXCJodHRwOi8vMTI3LjAuMC4xL2Rldi9tYWkvbWFpX21hemUvXCI7XHJcbmV4cG9ydCBjb25zdCBnX2dldF9tYXplX3VybDogICBzdHJpbmcgPSBteV91cmxfYmFzZSArIFwibWFpX21hemUucGhwXCI7XHJcbmV4cG9ydCBjb25zdCBnX2NoZWNrX0pTT05fdXJsOiBzdHJpbmcgPSBteV91cmxfYmFzZSArIFwiY2hlY2tfSlNPTi5waHBcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBDX01hemUgfSBmcm9tIFwiLi9DX01hemVcIjtcclxuZXhwb3J0IGNvbnN0IGdfbWF6ZSA9IG5ldyBDX01hemUoe21hemVfaWQ6IC0xfSk7XHJcblxyXG5pbXBvcnQgeyBDX1RlYW0gfSBmcm9tIFwiLi9DX1RlYW1cIjtcclxuZXhwb3J0IGNvbnN0IGdfdGVhbSA9IG5ldyBDX1RlYW0oKTtcclxuXHJcbmltcG9ydCB7IFRfQ3Rsc01vZGUgfSBmcm9tIFwiLi9UX0N0bHNNb2RlXCI7XHJcbmV4cG9ydCBjb25zdCBnX2N0bHNfbW9kZTogVF9DdGxzTW9kZVtdID0gbmV3IEFycmF5KDEpIGFzIFRfQ3Rsc01vZGVbXTtcclxuXHJcbmltcG9ydCB7IGRpc3BsYXlfbWF6ZTJEIH0gZnJvbSBcIi4vRl9kaXNwbGF5X21hemVcIjtcclxuZXhwb3J0IHZhciBnX2RlYnVnX21vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbmltcG9ydCB7VF9Ecm93U2V0LCBpbml0X21hemUzRCB9IGZyb20gXCIuL0ZfZGlzcGxheV9tYXplXCI7XHJcbmV4cG9ydCB2YXIgZ19kczogVF9Ecm93U2V0ICAgPSB7Y2FudmFzOiBudWxsLCBjb246IG51bGwsIGRlcHRoOiAwLCB3YWxsOiBudWxsfTtcclxuXHJcbmltcG9ydCB7IENfTWF6ZVZpZXdNZXNzYWdlIH0gZnJvbSBcIi4vQ19NYXplVmlld01lc3NhZ2VcIjtcclxuZXhwb3J0IHZhciBnX212bTogQ19NYXplVmlld01lc3NhZ2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9hZnRlcl9sb2FkZWRfRE9NKCk6IHZvaWQge1xyXG4gICAgZ19kcyAgID0gaW5pdF9tYXplM0QoKTtcclxuICAgIGdfbXZtICA9IENfTWF6ZVZpZXdNZXNzYWdlLmdldCgpOyBnX212bS5jbGVhcl9tZXNzYWdlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2RlYnVnX21vZGUoKTogdm9pZCB7XHJcbiAgICBnX2RlYnVnX21vZGUgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1Z19tb2RlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBpZiAoYnRuID09PSBudWxsKSByZXR1cm47XHJcbiAgICB0b2dnbGVfZGVidWdfbW9kZSgpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57dG9nZ2xlX2RlYnVnX21vZGUoKTt9LCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZXZlbnQpPT57XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxyXG4gICAgICAgICAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlX2RlYnVnX21vZGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWdfbW9kZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgaWYgKGJ0biA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKGdfZGVidWdfbW9kZSkge1xyXG4gICAgICAgIGdfZGVidWdfbW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICfpgJrluLjjg6Ljg7zjg4nkuK0nO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICcjZjBmOGZmJyk7XHJcbiAgICAgICAgYnRuLnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsICcjMDA4MDAwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdfZGVidWdfbW9kZSA9IHRydWU7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndHJ1ZScpO1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAn44OH44OQ44OD44Kw44Oi44O844OJ5LitJztcclxuICAgICAgICBidG4uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmMDAwMCcpO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5zZXRQcm9wZXJ0eSgnY29sb3InLCAnI2ZmZmZmZicpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheV9tYXplMkQoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8vXHJcbi8vLyAgIOS4u+WHpueQhlxyXG4vLy9cclxuXHJcbmltcG9ydCB7IENfVXJsT3B0IH0gICAgIGZyb20gXCIuL0NfVXJsT3B0XCI7XHJcbmltcG9ydCB7IGdldF9tYWlfbWF6ZSB9IGZyb20gXCIuL0ZfbGFvZF9hbmRfc2F2ZVwiO1xyXG5pbXBvcnQgeyBnX2dldF9tYXplX3VybCwgaW5pdF9hZnRlcl9sb2FkZWRfRE9NIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkgeyBcclxuICAgIGluaXRfYWZ0ZXJfbG9hZGVkX0RPTSgpO1xyXG4gICAgY29uc3QgZ2V0X21hemVfb3B0ID0gbmV3IENfVXJsT3B0KHttb2RlOiBcIm5ld1wiLCBudW06IDMzM30pO1xyXG4gICAgZ2V0X21haV9tYXplKGdfZ2V0X21hemVfdXJsLCBnZXRfbWF6ZV9vcHQpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==