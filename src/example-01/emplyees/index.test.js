import { Employee } from '.';

describe('Employee', () => {
  it('should have a type', () => {
    const employee = new Employee('Kaio', 'engineer');
    expect(employee.type).toBe('engineer');
  });

  it('should throw an error if type is not valid', () => {
    expect(() => new Employee('Kaio', 'invalid')).toThrow('Employee cannot be of type invalid');
  });

  describe('toString', () => {
    it('should return the name and type', () => {
      const employee = new Employee('Kaio', 'engineer');
      expect(employee.toString()).toBe('Kaio (engineer)');
    });
  });
});