const findKeyObject = require('../')

test('descobrir quem é o mais zika no js', () => {
  const zika = { name: 'Dobeis' } // rsrsrsrsrs

  expect(findKeyObject(zika, 'name')).toBe('Dobeis')
})
