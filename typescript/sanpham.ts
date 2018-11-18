export class SanPham {
    private _id:number;
    private _ten:string;
    private _gia:number;
	private _tinhtrang:boolean;
	private _anh:string;

	constructor(id: number, ten: string, gia: number, tinhtrang: boolean, anh:string) {
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
	public get id(): number {
		return this._id;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Getter ten
     * @return {string}
     */
	public get ten(): string {
		return this._ten;
	}

    /**
     * Setter ten
     * @param {string} value
     */
	public set ten(value: string) {
		this._ten = value;
	}

    /**
     * Getter gia
     * @return {number}
     */
	public get gia(): number {
		return this._gia;
	}

    /**
     * Setter gia
     * @param {number} value
     */
	public set gia(value: number) {
		this._gia = value;
	}

    /**
     * Getter tinhtrang
     * @return {boolean}
     */
	public get tinhtrang(): boolean {
		return this._tinhtrang;
	}

    /**
     * Setter tinhtrang
     * @param {boolean} value
     */
	public set tinhtrang(value: boolean) {
		this._tinhtrang = value;
	}

    /**
     * Getter anh
     * @return {string}
     */
	public get anh(): string {
		return this._anh;
	}

    /**
     * Setter anh
     * @param {string} value
     */
	public set anh(value: string) {
		this._anh = value;
	}

}