import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success"> YOUR WON:
                <span className="text-warning">{this.props.soBanThang}</span></div>
                <div className="display-4 text-success">TOTAL GAME:
                <span className="text-warning">{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}
// nhận kết quả từ reudcer trả về từng component
const mapStateToProps=state=>{
    return {
        ketQua:state.OanTuXiReducer.ketQua,
        soBanThang:state.OanTuXiReducer.soBanThang,
        soBanChoi:state.OanTuXiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps)(KetQua);