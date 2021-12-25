const stateDefault = {
    mangDatCuoc: [
        {
            ma: 'keo',
            hinhAnh: './img_game_oan_tu_xi/keo.png',
            datCuoc: true
        },
        {
            ma: 'bua',
            hinhAnh: './img_game_oan_tu_xi/bua.png',
            datCuoc: false
        },
        {
            ma: 'bao',
            hinhAnh: './img_game_oan_tu_xi/bao.png',
            datCuoc: false
        }
    ],
    ketQua: '',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {
        ma: 'keo',
        hinhAnh: './img_game_oan_tu_xi/keo.png',
        datCuoc: false
    }
}
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            let mangCuocUpDate = [...state.mangDatCuoc];
            mangCuocUpDate = mangCuocUpDate.map((item) => {
                return { ...item, datCuoc: false };
            })
            //tìm vị trí xem nó có nằm trong mảng hay không
            let index = mangCuocUpDate.findIndex(item => item.ma === action.maCuoc);
            // nếu tìm phẩn tử đó có trong mảng thì đặt lại cho <ptu>.datCuoc=true;
            if (index !== -1) {
                mangCuocUpDate[index].datCuoc = true;
            }
            console.log(action)
            //cập nhật lại state
            state.mangDatCuoc = mangCuocUpDate;
            //trả về state sau khi cập nhật.
            return { ...state };
        }

        case "Ran_Dom": {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state };
        }
        case "End_Game": {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'DRAW !!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'YOU LOSE !!!'
                    } else {
                        state.soBanThang++;
                        state.ketQua = "I'm ironman, i love you 3000 year !!!"
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        state.ketQua = 'DRAW !!!'
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'YOU LOSE !!!'
                    } else {
                        state.ketQua = "I'm ironman, i love you 3000 year !!!";
                        state.soBanThang++;
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        state.ketQua = 'DRAW !!!'
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'YOU LOSE !!!'
                    } else {
                        state.ketQua = "I'm ironman, i love you 3000 year !!!"
                        state.soBanThang++;
                    }
                    break;
                    default:state.ketQua = "I'm ironman, i love you 3000 year !!!"
            }
            state.soBanChoi++;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default BaiTapOanTuXiReducer;