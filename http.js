export class HTTP {

  async getProfiles(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}