import React from "react";
import ButtonBox from "./ButtonBox";

const UiCard = props => {
  let {image, title, content} = props.content;
  return (
    <div class="card-wrapper">
      <div className='card-img'>
        <img src={image} />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      </div>
  );
}

class SocialCard extends React.Component {
    render() {
      return (
        <div className='card-body'>
          <UiCard content={this.props.content}/>
          <div className='line'></div>
           <div style={{textAlign: 'right'}}>
              <ButtonBox
              likeIsClicked={this.props.likeIsClicked}
              likes={this.props.likes}/>
          </div>
        </div>

      );
    }
}

export default SocialCard;
