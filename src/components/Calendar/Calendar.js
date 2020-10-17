import React, {useEffect, useState} from 'react';
import Main from "../Main/Main";
import FetchData from "../../service/FetchData";
import {Link} from 'react-router-dom'

import './Calendar.css'

const Calendar = (props) => {
  const fetchData = new FetchData();

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData.getLaunches().then(launches => setData(() => [...launches]))
  }, [])


  const a = data.map(el => (
    <li key={el.id} className="calendar-item">
      <article className="launches">
        <div className="launches-image">
          <img src={el.links.patch.small} alt="img"/>

        </div>
        <div className="launches-content">
          <h2 className="launches-title">{el.name}</h2>
          <Link to={`/details/${el.id}`}  className="button launches-details">Подробнее</Link>
        </div>
      </article>
    </li>
  ));
  console.log(data)
  return (
    <>
      <Main/>
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {a}
          </ul>
        </div>
      </section>
    </>
  );
}



export default Calendar;