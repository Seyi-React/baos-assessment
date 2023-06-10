import { Carousel } from 'antd';
import './caroulsel.css'
const contentStyle = {
 
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Change = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className='carousel'>
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>34</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </div>
  );
};
export default Change;
