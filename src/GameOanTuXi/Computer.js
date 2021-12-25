import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-3" style={{ width: 60, height: 60 }} src={this.props.computer.hinhAnh} alt="./img_game_oan_tu_xi/keo.png" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img_game_oan_tu_xi/playerComputer.png" alt="pic_player" />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.OanTuXiReducer.computer,
    }
}
export default connect(mapStateToProps)(Computer);