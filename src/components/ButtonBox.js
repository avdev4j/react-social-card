import React from "react";

const UiButton = props => {
    const classes = (props.isClicked) ?
      "ui-button clicked" : "ui-button";
    const number = (props.isClicked) ?
          (props.number + 1) : props.number;

    return (
      <button className={classes} id={props.text}
        onClick={() => props.onClick()}>
        <span className="ui-icon">{props.icon} </span>
        {number}
      </button>
    );
};

class ButtonBox extends React.Component {
    constructor(props) {
      super(props);
      console.log(props.likeIsClicked);
      this.state = {
        likeIsClicked: props.likeIsClicked

      };
    }

    toggle(index) {
      let state = {};
      state[index] = !this.state[index];
      this.setState(state);
    }

    render() {
      return (
        <div>
          <UiButton icon='♥' text='likes'
            number={this.props.likes}
            onClick={() =>
              this.toggle('likeIsClicked')}
            isClicked={this.state.likeIsClicked}/>
        </div>
      );
    }
}

export default ButtonBox;
