import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import YouTube from 'react-youtube';
import './Details.css'
import UseLaunches from "../UseLaunches/UseLaunches";


const Details = (props) => {
  const history = useHistory();

  const [launch, setLaunch] = useState(null);

  const {getLaunch} = UseLaunches();
  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id));
  }, [getLaunch, props.match.params.id]);

  console.log(launch)

  if (!launch) {
    return <p>Loading...</p>;
  }

  return (

    <main className="details">
      <div className="container">
        <div className="details-row">
          <div className="details-image">
            <img src={launch.links.patch.small} alt={launch.name}/>
          </div>
          <div className="details-content">
            <p className="details-description">{launch.details}</p>
          </div>
        </div>
        <div>
          <YouTube className="details-youtube" autoplay videoId={launch.links.youtube_id}/>
        </div>
      </div>
      <a onClick={history.goBack} className="button button-back">go back</a>
    </main>
  );
}

export default Details;