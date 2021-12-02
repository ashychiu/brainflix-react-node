import React from "react";

const AsideCard = () => {
  return (
    <div>
      <img className="aside__image" src={this.props.image} />
      <p className="aside__title">{this.props.title}</p>
      <h4 className="aside__channel">{this.props.channel}</h4>
    </div>
  );
};

export default AsideCard;
