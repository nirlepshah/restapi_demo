import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const people = [
  { name: "nirlep" },
  { name: "mike" },
  { name: "mohit" },
  { name: "jacki" },
  { name: "julio" },
  { name: "tushar" },
]

app.get('/', (req, res) => {
  const page = `
 <h1>Enter a new person name</h1>
<form action="/person" method="POST">
  <input type="text" name="name" /> 
  <input type="submit" /> 
  </form>  
  <h2>Entered person name is below</h2>
<ul>
${people.map((person) => {
    return (

      `
  <li>
  ${person.name}
  </li>
  `
    )
  }
  ).join('')
    }
</ul >
</body >
    </html >
  `
  res.send(page)

})

app.post('/person', (req, res) => {
  const name = req.body.name
  people.push({ name: name })
  res.redirect('/')

})

app.listen(3000, (req, res) => {
  console.log('server is ready');
})