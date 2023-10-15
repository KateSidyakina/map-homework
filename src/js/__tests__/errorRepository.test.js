import ErrorRepository from '../ErrorRepository';

test('translate test', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(500)).toBe('Internal server error');
});

test('translate error test', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(501)).toBe('Unknown error');
});
