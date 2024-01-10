const request = require('supertest')
const server = require('../app')

describe('GET TEST', () => {
  afterAll(async () => {
    await server.close()
  })
  it('Get books', async () => {
    const response = await request(server).get('/api/books')
    expect(response.body.message).toBe('Return all Books')
  })
})
describe('POST-DELETE TEST', () => {
  afterAll(async () => {
    await server.close()
  })
  let responseId = ''
  it('Post book', async () => {
    const addBookData = {
      title: 'Libro de prueba2',
      author: 'Christian Posada',
      date: '2023-01-01',
      genre: 'Updated Genre'
    }
    const response = await request(server)
      .post('/api/books')
      .send(addBookData)
    expect(response.body.message).toBe('Book saved successfully')
    responseId = response.body.book._id
  })
  console.log(responseId)
  it('Delete posted book', async () => {
    const deleteBookData = await { id: responseId }
    const responseDelete = await request(server)
      .delete('/api/books')
      .send(deleteBookData)
    expect(responseDelete.body.message).toBe('Book deleted successfully')
  })
})

describe('PUT TEST', () => {
  afterAll(async () => {
    await server.close()
  })
  it('Update books', async () => {
    // Assuming you have a book ID to update (replace 'yourBookId' with an actual ID)
    const bookIdToUpdate = '65974de1226a8845b0f8a53b'

    // Data to be sent in the PUT request
    const updatedBookData = {
      id: bookIdToUpdate,
      title: 'Modificacion de prueba endpoint put',
      author: 'Updated Author',
      date: '2023-01-01',
      genre: 'Updated Genre'
    }

    const response = await request(server)
      .put('/api/books')
      .send(updatedBookData)

    // Log the response for debugging purposes

    // Assuming your server responds with a message indicating success
    expect(response.body.message).toBe('Book modified successfully')
  })
})

describe('VALIDATE FIELDS TEST', () => {
  afterAll(async () => {
    await server.close()
  })
  it('Endpoint POST title empty field error', async () => {
    const addEmptyBookData = {
      title: '',
      author: '',
      date: '',
      genre: ''
    }
    const response = await request(server)
      .post('/api/books')
      .send(addEmptyBookData)
    expect(response.body.errors.title.msg).toBe('Title is required')
    console.log(response.body.errors)
  })
  it('Endpoint PUT id empty field error', async () => {
    const addEmptyBookData = {
      id: '',
      title: '',
      author: '',
      date: '',
      genre: ''
    }
    const response = await request(server)
      .put('/api/books')
      .send(addEmptyBookData)
    expect(response.body.errors.id.msg).toBe('id is required')
    console.log(response.body.errors)
  })
})
