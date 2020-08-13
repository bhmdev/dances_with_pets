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
app.get("/api/v1/grouping/:type", (req, res) => {
  const targetGroup = req.params.type
  const queryString = `SELECT ${targetGroup === 'breed' ? 'breed' : `DISTINCT ON (${targetGroup}) ${targetGroup}`}, ` +
    `id FROM pet_types ORDER BY ${targetGroup === 'breed' ? 'classification, type, breed' : `${targetGroup}`};`
  pool.connect().then(client => {
    client.query(queryString)
      .then(result => {
        const petGrouping = result.rows
        client.release()
        res.json({ petGrouping: petGrouping })
      })
      .catch(error => {
        res.sendStatus(500)
      })
  })
})

const getPetsByType = (res, grouping, groupingId, adoptionStatus = 'FALSE') => {
  const queryString = `SELECT * FROM pets INNER JOIN pet_types ON pet_type_id = pet_types.id WHERE adoption_status = ${adoptionStatus} AND ${grouping} = '${groupingId}'`;
  pool.connect().then(client => {
    client.query(queryString)
      .then(result => {
        const pets = result.rows
        client.release()
        res.json({ pets: pets })
      })
      .catch(error => {
        res.sendStatus(500)
      })
  })
}

app.get("/api/v1/classification/:groupingId", (req, res) => {
  getPetsByType(res, 'classification', req.params.groupingId)
})

app.get("/api/v1/type/:groupingId", (req, res) => {
  getPetsByType(res, 'type', req.params.groupingId)
})

app.get("/api/v1/breed/:groupingId", (req, res) => {
  getPetsByType(res, 'breed', req.params.groupingId)
})

const getPetsByAdoptionStatus = (res, adoptionStatus = 'FALSE') => {
  const queryString = `SELECT pets.id, name, pet_img_url, age, vaccination_status, adoption_story, adoption_status, ` +
    `classification, type, breed FROM pets INNER JOIN pet_types ON pet_type_id = pet_types.id WHERE adoption_status = ${adoptionStatus};`;
  pool.connect().then(client => {
    client.query(queryString)
      .then(result => {
        const pets = result.rows
        client.release()
        res.json({ pets: pets })
      })
      .catch(error => {
        res.sendStatus(500)
      })
  })
}

app.get("/api/v1/pets", (req, res) => {
  getPetsByAdoptionStatus(res)
})

app.get("/api/v1/past-pets", (req, res) => {
  getPetsByAdoptionStatus(res, 'TRUE')
})

// Express routes
app.get('/', (req, res) => {
  res.render("home")
})

app.get('/pets', (req, res) => {
  res.render("home")
})

app.get('/grouping/:type', (req, res) => {
  res.render("home")
})

app.get('/adopt', (req, res) => {
  res.render("home")
})

app.get('/surrender', (req, res) => {
  res.render("home")
})

app.post('/adopt', (req, res) => {
  const application = req.body.application;
  const errors = [];
  Object.keys(application).filter(key => application[key] === "").map(key => {
    if (key = 'name') {errors.push(`Your name is required for our records.`)}
    else if (key = 'email') {errors.push(`Your email is required contact information.`)}
    else if (key = 'phoneNumber') {errors.push(`Your phone number is required contact information.`)}
    else if (key = 'homeStatus') {errors.push(`Your home status is required to determine eligibility`)}
    else {errors.push(`You must select the pet you wish to adopt!`)}
  })
  if (errors.length === 0) {
    const adoptionValues = Object.values(application);
    adoptionValues[4] = parseInt(adoptionValues[4]);
    adoptionValues.push('pending');
    pool
      .query(
        "INSERT INTO adoption_applications (name, phone_number, email, home_status, pet_id, application_status) VALUES ($1, $2, $3, $4, $5, $6);",
        adoptionValues
      )
      .then(result => {
        res.redirect("/adopt")
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
  } else {
    // res.render("home", { application: application, errors: errors })
    // res.status(422).json({ name: ["Fields can't be blank"] })
    res.status(422).json({ application: application, errors: errors })
  }
})  

app.post('/surrender', (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app 
