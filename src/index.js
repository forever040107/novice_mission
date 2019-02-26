import React, {
    Component
} from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import { Header, GlobalStyle, Wrapper, Main, Section, Button} from './styled.js'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
}

const cards = [
    {
        status: 'disabled',
        imgUrl: 'assets/icon-iphone.png',
        disabledImgUrl: 'assets/icon-iphone-disable.png',
        title: '1綁定手機號',
        text: '忘記密碼、轉賬驗証讓您的賬戶更安全'
    },
    {
        status: '',
        imgUrl: 'assets/icon-mail.png',
        disabledImgUrl: 'assets/icon-mail-disable.png',
        title: '2綁定郵箱',
        text: '密碼找回不可少'
    },
    {
        status: 'done',
        imgUrl: 'assets/icon-qq.png',
        disabledImgUrl: 'assets/icon-qq-disable.png',
        title: '3綁定 QQ',
        text: '活動優惠信息不漏接'
    },
    {
        status: 'disabled',
        imgUrl: 'assets/icon-moneybox.png',
        disabledImgUrl: 'assets/icon-moneybox-disable.png',
        title: '4首次充值',
        text: '充值秒速到賬提現3分鐘搞定'
    },
    {
        status: 'done',
        imgUrl: 'assets/icon-wechat.png',
        disabledImgUrl: 'assets/icon-wechat-disable.png',
        title: '5綁定微信',
        text: '活動優惠信息不漏接'
    },
    {
        status: 'disabled',
        imgUrl: 'assets/icon-betting.png',
        disabledImgUrl: 'assets/icon-betting-disable.png',
        title: '6首次投注',
        text: '各種彩種應有盡有快來試試手氣！'
    }
]

const defaultSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 7,
                arrows: false,
                vertical: true,
                verticalSwiping: false,
                touchMove: true,
                mobileFirst: true
            }
        }
    ]
}

class SlickWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            small: false
        } 
    }

    componentDidMount() {
        if (document.body.clientWidth <= 576) {
            this.setState({
                small: true
            });
        } else if (document.body.clientWidth > 576){
            this.setState({
                small: false
            })
        }

        window.onresize = (event) => {
            const {
                small
            } = this.state
            if (document.body.clientWidth <= 576 && !small) {
                this.setState({
                    small: true
                });
            } else if (document.body.clientWidth > 576 && small){
                this.setState({
                    small: false
                })
            }
        };
    }
    render() {
        const {
            children
        } = this.props
        const {
            small
        } = this.state
        if (small) {
            return <div>{children}</div>
        }
        return (    
            <Slider {...defaultSettings}>
                {children}
            </Slider>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: defaultSettings
        }
    }
    render() {
        return (
            <div>
                <Header>
                    <div className="logo"></div>
                </Header>
                <Wrapper>
                    <GlobalStyle/>
                    <Main>
                        <SlickWrapper>
                            {cards.map(card => (
                                <Section
                                    status={card.status}
                                    imgUrl={card.imgUrl}
                                    disabledImgUrl={card.disabledImgUrl}>
                                    <h2>{card.title}</h2>
                                    <p>{card.text}</p>
                                    <Button>已完成</Button>
                                </Section>
                            ))}
                        </SlickWrapper>
                        <Button className="receive">1/4 領取 188</Button>  
                    </Main>
                </Wrapper>
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
