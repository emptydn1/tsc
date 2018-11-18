import { SanPham } from "./sanpham.js"
import { SanPhamGioHang } from "./sanphamgiohang.js"

export class QuanLyGioHang {
    private _manageCart:SanPhamGioHang[] = [];

    constructor() {
        
    }
    
    xemgh(){
        for (let i = 0; i < this._manageCart.length; i++) {
            console.log(this._manageCart[i]);
        }
    }
    
    deletee(idsp:number) : void{
        for (let i = 0; i < this._manageCart.length; i++) {
            if(this._manageCart[i].sanpham.id == idsp){
                if(this._manageCart.length > 1){
                    for (let v = i; v < this._manageCart.length; v++) {
                        this._manageCart[v] = this._manageCart[v+1];
                    }
                    this._manageCart.length--;
                }
                else{
                    this._manageCart.length--;
                }
            }
        }
    }

    addSanPhamgh(motsp:SanPhamGioHang) : void {
        this._manageCart.push(motsp);
    };
    
    checkSanPhamgh(idsp:number) : number{
        for (let i = 0; i < this._manageCart.length; i++) {
            if(this._manageCart[i].sanpham.id == idsp){
                return i;
            }
        }
        return -1;
    };

    tangsoluong(index:number) : void {
        this._manageCart[index].soluong += 1;
    };

    tonggia():number {
        var sl:number = 0;
        for (let i = 0; i < this._manageCart.length; i++) {
            sl += this._manageCart[i].soluong * this._manageCart[i].sanpham.gia;
        }
        return sl;
    }
    
    updateSanPhamgh(motsp:SanPham, soluong:number) : void {
        for (let i = 0; i < this._manageCart.length-1; i++) {
            if(this._manageCart[i].sanpham.id == motsp.id){
                this._manageCart[i].soluong = soluong;
            }
        }
    };


    showgh() : string {
        var sp = '';
        for (let i = 0; i < this._manageCart.length; i++) {
            if(this._manageCart[i].sanpham.tinhtrang)
            sp += `
                    <div class="col-sm-3 mb-4">
                        <div class="card text-center">
                            <img class="card-img-top" src="${this._manageCart[i].sanpham.anh}" alt="">
                            <div class="card-body">
                                <h4 class="card-product">${this._manageCart[i].sanpham.ten}</h4>
                                <p class="card-text price">${this._manageCart[i].sanpham.gia}</p>
                            </div>
                            <div class="form-group">
                                <input type="number" data-idspk="${this._manageCart[i].sanpham.id}" class="soluongsp" name="" id="" min="1" value="${this._manageCart[i].soluong}">
                            </div>
                            <div class="btn btn-success xoa" data-idspkm="${this._manageCart[i].sanpham.id}" >xoa</div>
                        </div>
                    </div>
                `
        }
        return sp;
    };
}