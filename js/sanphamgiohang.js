"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SanPhamGioHang {
    constructor(sanpham, soluong = 1) {
        this._sanpham = sanpham;
        this._soluong = soluong;
    }
    /**
     * Getter sanpham
     * @return {SanPham}
     */
    get sanpham() {
        return this._sanpham;
    }
    /**
     * Setter sanpham
     * @param {SanPham} value
     */
    set sanpham(value) {
        this._sanpham = value;
    }
    /**
     * Getter soluong
     * @return {number}
     */
    get soluong() {
        return this._soluong;
    }
    /**
     * Setter soluong
     * @param {number} value
     */
    set soluong(value) {
        this._soluong = value;
    }
}
exports.SanPhamGioHang = SanPhamGioHang;
