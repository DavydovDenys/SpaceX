

class FetchData {
  startUrl = '​https://api.spacexdata.com/v4';

  getRocket = () => {
    const rocket = fetch('https://api.spacexdata.com/v4/rockets')
      .then(res => res.json())
      .catch(err => console.log('Произошла ошибка'));
    return rocket;
  };

  getLaunches = () => {
    const launches = fetch('https://api.spacexdata.com/v4/launches/past')
      .then(res => res.json())
      .catch(err => console.log('Произошла ошибка'));
    return launches;
  };

  getCompany = () => {
    const company = fetch('https://api.spacexdata.com/v4/company')
      .then(res => res.json())
      .catch(err => console.log('Произошла ошибка'));
    return company;
  }


};

export default FetchData;