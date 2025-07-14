export default class NumberError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Unlucky Number Error';
  }
}
