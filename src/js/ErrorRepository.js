export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map([[404, 'Page not found'], [500, 'Internal server error'], [403, 'Access denied']]);
  }

  translate(code) {
    if (this.errorMap.has(code)) {
      return this.errorMap.get(code);
    }
    return 'Unknown error';
  }
}
