"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SanPham {
    constructor(id, ten, gia, tinhtrang, anh) {
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._tinhtrang = tinhtrang;
        this._anh = anh;
    }
    /**
     * Getter id
     * @return {number}
     */
    get id() {
        return this._id;
    }
    /**
     * Setter id
     * @param {number} value
     */
    set id(value) {
        this._id = value;
    }
    /**
     * Getter ten
     * @return {string}
     */
    get ten() {
        return this._ten;
    }
    /**
     * Setter ten
     * @param {string} value
     */
    set ten(value) {
        this._ten = value;
    }
    /**
     * Getter gia
     * @return {number}
     */
    get gia() {
        return this._gia;
    }
    /**
     * Setter gia
     * @param {number} value
     */
    set gia(value) {
        this._gia = value;
    }
    /**
     * Getter tinhtrang
     * @return {boolean}
     */
    get tinhtrang() {
        return this._tinhtrang;
    }
    /**
     * Setter tinhtrang
     * @param {boolean} value
     */
    set tinhtrang(value) {
        this._tinhtrang = value;
    }
    /**
     * Getter anh
     * @return {string}
     */
    get anh() {
        return this._anh;
    }
    /**
     * Setter anh
     * @param {string} value
     */
    set anh(value) {
        this._anh = value;
    }
}
exports.SanPham = SanPham;
