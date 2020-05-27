import app from './app'

app.listen(3001 ?? process.env.PORT, () => {
  console.log('API running')
})
