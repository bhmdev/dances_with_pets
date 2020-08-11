import express from "express"
import path from "path"
import logger from "morgan"
import bodyParser from "body-parser"
import hbsMiddleware from "express-handlebars"
import _ from "lodash"
import pg from 'pg'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('json spaces', 2);

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@127.0.0.1:5432/pets"
})

// API Endpoints 
app.get("/api/v1/pets", (req, res) => {
  pool.connect().then(client => {
  client.query("SELECT * FROM pet_types;")
  .then(result => {
    const petTypes = result.rows
    client.release()
    res.json({ petTypes: petTypes })
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
})

app.get("/api/v1/pets/categories/", (req, res) => {
  pool.connect().then(client => {
  client.query("SELECT DISTINCT ON (pet_category_name) pet_category_name, id FROM pet_types ORDER BY pet_category_name;")
  .then(result => {
    const petGroups = result.rows
    client.release()
    res.json({ petGroups: petGroups })
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
})

app.get("/api/v1/pets/types/", (req, res) => {
  pool.connect().then(client => {
  client.query("SELECT DISTINCT ON (pet_type_name) pet_type_name, id FROM pet_types ORDER BY pet_type_name;")
  .then(result => {
    const petGroups = result.rows
    client.release()
    res.json({ petGroups: petGroups })
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
})

app.get("/api/v1/pets/breeds/", (req, res) => {
  pool.connect().then(client => {
  client.query("SELECT DISTINCT ON (pet_breed_name) pet_breed_name, id FROM pet_types ORDER BY pet_breed_name;")
  .then(result => {
    const petGroups = result.rows
    client.release()
    res.json({ petGroups: petGroups })
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
})

app.get("/api/v1/pets/adopt/", (req, res) => {
  pool.connect().then(client => {
  client.query("SELECT * FROM pets;")
  .then(result => {
    const pets = result.rows
    client.release()
    res.json({ pets: pets })
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
})

app.get("/api/v1/pets/adopt/:id", (req, res) => {
  console.log(req.params.id)
  pool.connect().then(client => {
  client.query(`SELECT * FROM pets WHERE pet_name = '${req.params.id}';`)
  .then(result => {
    const pet = result.rows
    client.release()
    res.json({ pet: pet })
    })
    .catch(error => {
      res.sendStatus(500)
    })
  })
})

// Express routes
app.get('/', (req, res) => {
  res.redirect("/pets")
})

app.get('/pets', (req, res) => {
  res.render("home")
})

app.get('/pets/adopt/:id', (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app 
