import React, { Component } from "react";
import './petFoodCard.scss';

export default class PetFoodCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <article className="pet-food-card">
          <header className="pet-food-card__header header">
            <div className="header__angle"></div>
            <h2 className="header__text">Сказочное заморское яство</h2>
          </header>
          <main className="pet-food-card__main">
            <p className="pet-food-card__name">Нямушка</p>
            <p className="pet-food-card__stuffing">с фуа-гра</p>
            <p className="pet-food-card__portions">10 порций</p>
            <p className="pet-food-card__present">мышь в подарок<br />заказчик доволен</p>
            <div className="pet-food-card__container-volume">
              <p className="pet-food-card__volume">0,5</p>
              <p className="pet-food-card__unit">кг</p>
            </div>
          </main>
        </article>
        <footer className="pet-food-card__footer">
          <p className="pet-food-card__signature">{`Чего сидишь? Порадуй котэ, `}
            <button className="pet-food-card__buy-button">купи</button>.
          </p>
        </footer>
      </>
    )
  }
}
