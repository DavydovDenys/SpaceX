import React from 'react';
import RellaxWrapper from "react-rellax-wrapper";
import Main from "../Main/Main";
import './Features.css';
import Main from '../Main/Main'

const img = {
  'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  other: 'starship'
};

const Features = (props) => {
  // деструктурируем props
  const {
    name,
    height,
    diameter,
    mass,
    description,
    payload_weights: payloadWeights
  } = props.rocketFeatures
  console.log(props.rocketFeatures)

  const payLoad = payloadWeights.map(el => {
    return (
      <tr key={el.id}>
        <td className="table-column">PAYLOAD TO {el.id.toUpperCase()}</td>
        <td className="table-column">{el.kg} kg / {el.lb} lb</td>
      </tr>
    );
  })

  return (
    <>
      <Main rocket={name}/>
      <section className="features">
        <h2 className="features-title">
          {name} <br/>Overview
        </h2>
        <div className="overview">

          <table className="table">
            <caption className="table-title">
              Size
            </caption>
            <thead>
            <tr>
              <td className="table-column">HEIGHT</td>
              <td className="table-column">{height.meters} m / {height.feet} ft</td>
            </tr>
            <tr>
              <td className="table-column">DIAMETER</td>
              <td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
            </tr>
            <tr>
              <td className="table-column">MASS</td>
              <td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
            </tr>

              {payLoad}
            </thead>
          </table>
          <RellaxWrapper speed={14}>
          <img
            src={`img/${img[name] ? img[name] : img.other}.png`}
            alt="rocket"
            className="rocket"
          </RellaxWrapper>
          <article>
            <h3 className="features-subtitle">DESCRIPTION</h3>
            <p className="features-text">
              {description}
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Features;