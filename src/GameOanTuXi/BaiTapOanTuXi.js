import React, { Component } from 'react'
import './OanTuXi.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
import { connect } from 'react-redux'
class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div>
                <div className="gameOanTuXi">
                    <div className="row text-center mt-5">
                        <div className="col-4">
                            <Player />
                        </div>
                        <div className="col-4">
                            <KetQua />
                            <button onClick={()=>{
                                {this.props.playGame()}
                            }} className="btn btn-danger p-3 display-4 mt-5">Play Game</button>
                        </div>
                        <div className="col-4">
                            <Computer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        playGame:()=>{
            let count=0;
            // khái báo lặp đi lặp lại hàm
            let randomComputer=setInterval(()=>{
                dispatch({
                    type:'Ran_Dom',
                })
                count++;
                if(count>20){
                    //Dừng hàm inTerval lại
                    clearInterval(randomComputer);
                    dispatch({
                        type:'End_Game',
                    })
                }
            },100)
        }
    }
}
export default connect(null,mapDispatchToProps)(BaiTapOanTuXi);