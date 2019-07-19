import React, {
    Component
} from 'react'

class PrevArrow extends Component {
    render () {
        const { className, style, onClick } = this.props
        return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
        )
    }
}
  
export default PrevArrow 
