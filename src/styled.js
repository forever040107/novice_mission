import styled, {
	createGlobalStyle,
	css
} from "styled-components";

const bodyBg = '#181e25';
const section = {
    bg: '#FFF',
    title: '#323c5a',
    fontColor: '#8591b0',
}


export const GlobalStyle = createGlobalStyle `
	* {
		font-family: 'PingFangSC-Regular', 'Microsoft YaHei', sans-serif;
	}
	body {
		margin: 0; 
		text-align: center;   
		background: ${bodyBg};
	}
	a, button {
		outline: none;
		text-decoration: none;
    }
    .bgWrapper {
        width: 100%;
    }
`

const sizes = {
  desktop: 1024,
  tablet: 991,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;
  return acc;
}, {});

export const Header = styled.header`
    margin-bottom: 35px;
    height: 66px;
    background-image: linear-gradient(180deg, #1f2d42, #214164);
    .logo {
        position: absolute;
        left: 0;
        top: 0;
        display: inline-grid;
        width: 215px;
        height: 80px;
        background: url('assets/img-logo-nav.png') no-repeat;
    }
    ${media.phone`
        margin: 0;
        height: 44px;
        .logo {
            position: relative;
            margin: 9px auto;
            width: 70px;
            height: 25px;
            background: url('assets/logo-header@2x.png') no-repeat;
            background-size: contain;
            text-align: center;
        }
	`}
`;

export const Wrapper = styled.div`
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
	background: url('assets/group-23.png') no-repeat;
	background-position: top center;
	background-size: 101%;
	padding-top: 23%;
    position: relative;
    ${media.desktop`
        padding-top: 25%;
	`}
    ${media.phone`
        padding-top: 114%;
        background: url('assets/rectangle@2x.png') no-repeat;
        background-size: 100%;
	`}
	a {
		width: 161px;
		height: 56px;
		border: none;
		background: url('assets/clf-btn.png') no-repeat;
		position: absolute;
		bottom: 0;
		margin-left: -80px;
		left: 50%;
		box-shadow: 0px 4px 17px 0px rgb(39, 39, 64);
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		&:hover {
			background: url('assets/clf-btn-hover.png') no-repeat;
		}
	}
`;

export const Main = styled.main`
    background: linear-gradient(to bottom, #eef1f6 0%,#fcfdfd 100%);    
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    padding: 40px 15px;
    box-sizing: border-box;
	text-align: left;
	font-size: 22px;
    line-height: 1.73;
	${media.tablet`
		font-size: 18px;
    `}
    ${media.phone`
        padding: 30px 0;
        width: 100%;
        background: #2c5988;
        text-align: center;
    `}
    .slick-list {
        margin: 0 45px;
        padding-bottom: 15px;
        ${media.phone`
            margin: 0 15px;
        `}
    }
    .slick-slide div {
        margin: 0 10px;
    }
    .slick-slider {
        margin-top: -10%;
        ${media.phone`
            margin-top: -30%;
        `}
    }
    .slick-prev {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 40px;
        height: 40px;
        background: url("assets/btn-previous-normal.png") no-repeat;
        cursor: pointer;
        &.slick-disabled {
            background: url("assets/btn-previous-disable.png") no-repeat;
            &:hover {
                background: url("assets/btn-previous-disable.png") no-repeat;
            }
        }
        &:hover {
            background: url("assets/btn-previous-hover.png") no-repeat;
        }
    }
    .slick-next {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 40px;
        height: 40px;
        cursor: pointer;
        background: url("assets/btn-next-normal.png") no-repeat;
        &.slick-disabled {
            background: url("assets/btn-next-disable.png") no-repeat;
            &:hover {
                background: url("assets/btn-next-disable.png") no-repeat;
            }
        }
        &:hover {
            background: url("assets/btn-next-hover.png") no-repeat;
        }
    }
`;

export const Section = styled.section`
    display: inline-grid;
    padding: 100px 45px 40px;
    box-sizing: border-box;
	width: calc((100% - 60px) / 4);
	border-radius: 8px;
	text-align: left;
	position: relative;
    font-size: 22px;
    text-align: center;
	line-height: 1.5;
    letter-spacing: normal;
    color: ${section.fontColor};
    background: ${props =>(props.status === 'disabled') ? `url(${props.disabledImgUrl}) no-repeat` : `url(${props.imgUrl}) no-repeat`};
    background-color: ${props =>(props.status === 'disabled') ? '#f1f8ff' : '#FFF'}
    background-position: center 45px;
	${media.tablet`
		padding: 125px 35px 40px;
	`}
    ${media.phone`
        margin: -27% 0 30%;
        padding: 14% 23%;
        box-sizing: border-box;
        width: 85%;
        background-position: center 20%;
        text-align: center;
        &:nth-child(6) {
            margin-bottom: 0;
        }
    `}
    &:before {
        content: '';
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 0 5px 0 #323c5a;
        filter: blur(5px);
        opacity: 0.1;
    }
    h2 {
        margin: 30px 0 0;
        height: 36px;
        color: ${props =>(props.status === 'disabled') ? '#a6b6c5' : '#323c5a'};
        text-align: center;
        font-size: 24px;
        font-weight: normal;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        ${media.tablet`
            text-align: center;
        `}
        ${media.phone`
            margin: 90px 0 0;
        `}
    }
	p {
        margin: 0 auto 15px;
        width: 120px;
        height: 60px;
        text-align: left;
        font-size: 13px;
        color: ${props =>(props.status === 'disabled') ? '#a6b6c5' : '#8591b0'};
        overflow: hidden;
        ${media.tablet`
            text-align: center;
        `}
    }
    button {
        background-image: ${props => {
            if (props.status === 'disabled') {
                return `linear-gradient(90deg,#d3dfeb,#d3dfeb)`
            } else if(props.status === 'done') {
                return `linear-gradient(90deg, #78CB9C, #D2E67E)`
            } else {
                return `linear-gradient(90deg, #509BF0, #7FDAD2)`
            }
        }};
        cursor: ${props =>(props.status === 'disabled') ? 'default' : 'pointer'};
        &:before {
            ${props =>(props.status === 'disabled') ? 'left:8px; top: 0; bottom:0; margin: auto; width: 18px; height: 18px; border: 2px solid #FFF; filter: none;' : ''};
            box-shadow: ${props => {
                if (props.status === 'disabled') {
                    return `none`
                } else if(props.status === 'done') {
                    return `0 3px 0 #d2ea6b`
                } else {
                    return `0 3px 0 #07dfd2`
                }
            }};
        }
        &:after {
            ${props =>(props.status === 'disabled') ? 'left: 13px; margin: auto; width: 9px; height: 5px; top: 0px; bottom: 3px; border-left: 2px solid #FFF; border-bottom: 2px solid #FFF; transform: rotate(-45deg); box-shadow: none; filter: none; border-radius: 0;' : ''};
            box-shadow: ${props => {
                if (props.status === 'disabled') {
                    return `none`
                } else if(props.status === 'done') {
                    return `0 3px 0 #40ce97`
                } else {
                    return `0 3px 0 #3a99fa`
                }
            }};
        }
        &:hover {
            background-image: ${props =>(props.status === 'disabled') ? 'linear-gradient(90deg,#d3dfeb,#d3dfeb)' : 'linear-gradient(90deg, #78CB9C, #D2E67E)'};           
            &:before {
                box-shadow: ${props =>(props.status === 'disabled') ? 'none' : '0 3px 0 #d2ea6b'};
            }
            &:after {
                box-shadow: ${props =>(props.status === 'disabled') ? 'none' : '0 3px 0 #40ce97'};
            }
        }
    }
`;


export const Button = styled.button`
    display: block;
    margin: 0 auto;
    position: relative;
    font-size: 12px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    border: unset;
    background-image: linear-gradient(90deg, #509BF0, #7FDAD2);
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    &:before {
        content: '';
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        filter: blur(10px);
        box-shadow: 0 3px 0 #07dfd2;
    }
    &:after {
        content: '';
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 0 3px 0 #3a99fa;
        filter: blur(10px);
    }
    &.receive {
        margin: 40px auto 0;
        width: 285px;
        height: 50px;
        background-image: linear-gradient(90deg, #8468f5, #ec74e7);
        border-radius: 30px;
        font-size: 18px;
        line-height: 50px;
        filter: none;;
        &:before {
            box-shadow: 0 3px 0 #8468f5;
        }
        &:after {
            box-shadow: 0 3px 0 #ec74e7;
        }
        &:hover {
            background-image: linear-gradient(90deg, #78CB9C, #D2E67E);
            &:before {
                box-shadow: 0 5px 0 #d2ea6b;
            }
            &:after {
                box-shadow: 0 5px 0 #40ce97;
            }
        }
    }
`;
