import { SanPham } from "./sanpham.js";

export class QuanLyHang {
    private hang:SanPham[] = [];

    constructor() {
        var sp1 = new SanPham(1,"quat",200,true,"https://i.imacdn.com/ta/2017/04/09/0b1459182785188e_ad9d3d27a82c2cb6_25060214917307901143215.jpg");
        this.addSanPham(sp1);
        
        var sp2 = new SanPham(2,"dien",300,false,"http://mediaold.tiin.vn:8080/media_old_2016//archive/images/2017/06/13/094624_2.jpg");
        this.addSanPham(sp2);
        
        var sp3 = new SanPham(3,"fuckk",400,true,"https://i.pinimg.com/236x/2e/64/02/2e64027ffd59aef071ed4ab1e6c38f03.jpg");
        this.addSanPham(sp3);
        var sp4 = new SanPham(4,"aa",2222,true,"https://cdn.trangcongnghe.com/uploads/posts/2017-01/nu-game-thu-xinh-dep-hoa-than-thanh-nang-tho-dva-trong-bo-anh-cosplay-chao-nam-moi_7.jpeg");
        this.addSanPham(sp4);
        var sp5 = new SanPham(5,"xxxx",4,true,"http://2.bp.blogspot.com/-hYRgThy0OUg/Uz_oYvVmR_I/AAAAAAAAlEg/YffYcZbctIQ/s1600/coplay-cuc-de-thuong+(1).jpg");
        this.addSanPham(sp5);
        var sp6 = new SanPham(6,"vvvv",1,true,"https://2.bp.blogspot.com/-40WJA-sorlE/WSA1Z6MQBuI/AAAAAAAAAuM/_S0uuuP11ZsVrh2x0QWtKUQl_noMBJ2qACLcB/s1600/17.jpg");
        this.addSanPham(sp6);
    }

    xemsp() : void {
        for (let i = 0; i < this.hang.length; i++) {
            console.log(this.hang[i]);
        }
    }

    addSanPham(sp1:SanPham) : void {
        this.hang.push(sp1);
    }




    getCacSanPham() : SanPham[] {
        return [];
    }

    getSanPhamById(idsp:number) : any {
        for (let i = 0; i < this.hang.length; i++) {
            if(this.hang[i].id == idsp){
                return this.hang[i];
            }
        }
        return -1;
    }
    
    showSanPham() : string {
        var sp = '';
        for (let i = 0; i < this.hang.length; i++) {
            sp += `
                    <div class="col-sm-3 mb-4">
                        <div class="card text-center">
                            <img class="card-img-top" src="${this.hang[i].anh}" alt="">
                            <div class="card-body">
                                <h4 class="card-product">${this.hang[i].ten}</h4>
                                <p class="card-text price">${this.hang[i].gia}</p>
                            </div>
                            <div class="form-group">
                `;
                                if(this.hang[i].tinhtrang==true){
                                    sp += `
                                            <div class="btn btn-primary dathang" data-idsp="${this.hang[i].id}">mua ngay</div>
                                        `
                                }
                                else{
                                    sp += `
                                            <div class="btn btn-primary dathang disabled" data-idsp="${this.hang[i].id}">mua ngay</div>
                                        `
                                }
            sp += `
                            </div>
                        </div>
                    </div>
                `;
        }
        return sp;
    }
}