import React from 'react';
import './styles.scss';

export default class extends React.Component {
  render = () => {
    return (
      <div className="cours-home-content">
        <p className="cours-home-title">Espace Support de Cours</p>
        <svg height={300} marginHeight={0} marginWidth={0} viewBox="0 0 560 960">
          <path
            className="beer"
            d="M147 386.582s.833 235.875.833 257.209S168.333 668 172.667 668H327c8.666 0 17-11 17-28V387l-197-.418z"
          />
          <path
            className="schaum"
            d="M344 387l-132-.418V422s-2 16.75-20.75 16.75S171 428.25 171 423.5V387s-12.25-.334-24-.418c-19.625-2.457-23-25.332-3.625-38.832-7.5-30.25 64.063-94.25 107.896-16.418 15.333-15.5 39.781-19 49.115 14.168 3.666-24.834 10.437-43.25 42.974-43.25 28.668 0 41.457 27.082 41.457 41.422C384.814 375 356.732 387 346.215 387H344z"
          />
          <path
            className="handle"
            d="M348 597h53c14 0 20.5-16.5 20.5-25.5 0-4.25.355-99 .355-113.75S407.75 437 399.25 437H348"
          />
          <path
            className="outline"
            d="M147 385.481s.833 235.875.833 257.209 20.5 24.209 24.834 24.209H327c8.666 0 17-11 17-28v-253l-132-.418v35.418s-2 16.75-20.75 16.75-20.25-10.5-20.25-15.25v-36.5s-12.25-.334-24-.418c-19.625-2.457-23-25.332-3.625-38.832-7.5-30.25 64.063-94.25 107.896-16.418 15.332-15.5 39.78-19 49.114 14.168 3.666-24.834 10.437-43.25 42.974-43.25 28.668 0 41.457 27.082 41.457 41.422-.002 31.328-28.084 43.328-38.602 43.328"
          />
          <path className="lines" d="M196 480v82M250 480v82M304 480v82" />
        </svg>
        <p className="cours-home-txt">Bienvenue sur l'espace de support de cours de la 5ème année de l'IDRAC. L'espace sera tenu à jour assez régulièrement via les délégué(e)s de chaque spé ! Enjoy 😁</p>
      </div>
    );
  }
}