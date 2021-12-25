import React, { Component } from 'react'
import { connect } from "react-redux"
class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-3" style={{ width: 60, height: 60 }} src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc)}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img_game_oan_tu_xi/player.png" alt="pic_player" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {
                        // xét giá trị cược thêm viền cho item đc chọn
                        let border={};
                        if(item.datCuoc){
                            border={border:'3px solid orange'};
                        }

                      return  <div className="col-4">
                            <button onClick={()=>{
                                {this.props.datCuoc(item.ma);}
                            }} style={border} className="btnItem">
                                <img  src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.OanTuXiReducer.mangDatCuoc,

    }
}
const mapDispatchToProps=dispatch=>{
    return{
        datCuoc:(maCuoc)=>{
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);