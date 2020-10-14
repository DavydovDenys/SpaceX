export default class FetchData {

  startUrl = '​https://api.spacexdata.com/v4';

  getResource = (url) => {
    const res = fetch(url);

    if(!res.ok) {
      throw new Error (`Error is ${res.status}`);
    }

    return res.json();
  };

  getRocket = async () => await this.getResource(this.startUrl + '/rockets');
  getLaunches = async () => await this.getResource(this.startUrl + '/launches/past');
  getCompany = async () => await this.getResource(this.startUrl + '/company');
}
