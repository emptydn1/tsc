import { SanPham } from "./sanpham.js";
import { QuanLyHang } from "./quanlyhang.js";
import { QuanLyGioHang } from "./quanlygiohang.js";
import { SanPhamGioHang } from "./sanphamgiohang.js";

var sp = new QuanLyHang();
var spgh = new QuanLyGioHang();
// sp.xemsp();

var takeSPK = document.getElementById('spk');                   //đưa sản phẩm ra html
takeSPK.innerHTML = sp.showSanPham();

var spCart = document.getElementById('spgh');                   //lấy ra sản phẩm giỏ hàng ra html

var giaPhai = document.getElementsByClassName('phai');         //lấy ra tổng giá

var buttonBuy = document.querySelectorAll('.btn.btn-primary');

var a =false;
for (let i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener('click', function(){
        var idlayduoc:number = this.getAttribute('data-idsp');
        if(sp.getSanPhamById(idlayduoc) == -1){
            console.log("false");
        }
        else{
            if(spgh.checkSanPhamgh(idlayduoc) != -1){
                spgh.tangsoluong(spgh.checkSanPhamgh(idlayduoc));
            }
            else{
                var spgh1:SanPhamGioHang = new SanPhamGioHang(sp.getSanPhamById(idlayduoc));
                spgh.addSanPhamgh(spgh1);
            }
            chay();
            var sltang = document.getElementsByClassName('soluongsp');

            for (let i = 0; i < sltang.length; i++) {
                sltang[i].addEventListener('change', function(){
                    var idspk = parseInt(this.getAttribute('data-idspk'));
                    var spkTaked = sp.getSanPhamById(idspk);
                    spgh.updateSanPhamgh(spkTaked, parseInt(this.value));
                    giaPhai[0].innerHTML = giaPhai[1].innerHTML = spgh.tonggia()+" đ";
                })
            }
        }
    })
}

//  code em can fix day a
setInterval(function(){
    spgh.xemgh();
    hamclick();
}, 0);

function hamclick(){
    var layclassxoa = document.querySelectorAll('.xoa');
    
    for (let i = 0; i < layclassxoa.length; i++) {
        layclassxoa[i].addEventListener('click', function(){
            var idspk = parseInt(this.getAttribute('data-idspkm'));
            spgh.deletee(idspk);
            chay();
            spgh.xemgh();
        })
    }
}
//

function chay(){
    spCart.innerHTML = spgh.showgh();
    giaPhai[0].innerHTML = giaPhai[1].innerHTML = spgh.tonggia()+" đ";
}
