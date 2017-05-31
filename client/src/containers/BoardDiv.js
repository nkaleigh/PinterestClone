import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Pin2Board.css';

class BoardDiv extends Component {
    render() {
        const data = this.props.data;
        return (

            <div className="Pin2Board_BoardDiv" onClick={() => this.props.savePin(data.name)}>
                <div className="Pin2Board_BoardImgBox">
                    <img  className="Pin2Board_BoardImg" alt="" src={data.img} />
                </div>
                <p className="Pin2Board_BoardTitle"><b>{data.name}</b></p>
                <button className="Pin2Board_SaveButton"><img className="Pin2Board_PinIcon" alt="" src="https://image.ibb.co/bKxULv/pin.png" /> Save</button>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {user: store.user}
}

export default connect(mapStateToProps)(BoardDiv);
