import { SanPham } from "./sanpham.js";

export class SanPhamGioHang {
    private _sanpham:SanPham;
    private _soluong:number;
    

	constructor(sanpham: SanPham, soluong: number = 1) {
		this._sanpham = sanpham;
		this._soluong = soluong;
	}


    /**
     * Getter sanpham
     * @return {SanPham}
     */
	public get sanpham(): SanPham {
		return this._sanpham;
	}

    /**
     * Setter sanpham
     * @param {SanPham} value
     */
	public set sanpham(value: SanPham) {
		this._sanpham = value;
	}

    /**
     * Getter soluong
     * @return {number}
     */
	public get soluong(): number {
		return this._soluong;
	}

    /**
     * Setter soluong
     * @param {number} value
     */
	public set soluong(value: number) {
		this._soluong = value;
    }
}