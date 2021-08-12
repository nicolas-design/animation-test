import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { animated, useSpring } from 'react-spring';
import logo from './logo.svg';

const background = css`
  height: 100vh;
  width: 100vw;
  background-color: #eae7dc;
`;

const headingStyle = css`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const headStyle2 = css`
margin-top: 20px;
  font-size: 42px;
  color: #e98074;
  display: flex;
  font-weight: 300;
`;

const MysteriousText = ({ children, ...props }) => {

  const Animation = i =>
    useSpring({ from: { opacity: 0, marginTop: -500 },to: {opacity: 1, marginTop: 0},  delay: (500 + i * 100)});
  return children.split("").map((item, index) => (
    <animated.div key={item} style={Animation(index)} {...props}>
      {item}
    </animated.div>
  ));
};


function App() {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000 })

  return (
    <div css={background}>
      <div css={headingStyle}>
        <div css={headStyle2}>
    <MysteriousText>Hello-World</MysteriousText></div>
</div>
    </div>
  );
}

export default App;
