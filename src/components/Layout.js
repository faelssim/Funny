/*
 * @Author: wangkun
 * @Date: 2021-08-21 10:26:46
 * @LastEditTime: 2021-08-21 12:14:37
 * @LastEditors: wangkun
 * @Description: 
 */
import './Layout.css'
import React from 'react'
class Layout extends React.Component{
    constructor() {
        super()
        this.state = {
            address: 'JiangSu-SuZhou-SongZeTown'
        }
        this.layoutRef = React.createRef()
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return `${prevState.address}--At 8.46.1502`
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const layout = this.layoutRef.current
        console.log(layout.scrollTop)
        console.log(layout.scrollHeight)
    }

    handleChangeWithBtn(address) {
        this.setState({
            address: 'JoJo'
        })
    }

    render() {
        return (
            <div className="g-layout" ref={ this.layoutRef }>
                <h1>Hello {this.props.name}</h1>
                <h3>{ this.state.address }</h3>
                <div>
                    <button onClick={ () => this.handleChangeWithBtn('JoJo') }>Change To</button>
                </div>
            </div>
        )
    }
}
Layout.defaultProps = {
    name: 'Bill'
}
export default Layout