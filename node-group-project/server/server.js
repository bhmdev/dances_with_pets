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

const getPets = (res, queryString) => {
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

const getPetsByType = (res, grouping, groupingId, adoptionStatus = 'FALSE') => {
  const queryString = `SELECT pets.id AS id, name, pet_img_url, age, vaccination_status, pets.description AS description, adoption_story, ` + 
                      `adoption_status, pet_type_id, classification, type, breed, breed_img_url, pet_types.description AS pet_type_description FROM pets ` + 
                      `INNER JOIN pet_types ON pet_type_id = pet_types.id WHERE adoption_status = ${adoptionStatus} AND ${grouping} = '${groupingId}'`;
  getPets(res, queryString);
}

const getPetsByAdoptionStatus = (res, adoptionStatus = 'FALSE') => {
  const queryString = `SELECT pets.id, name, pet_img_url, age, vaccination_status, pets.description, adoption_story, adoption_status, ` +
    `classification, type, breed FROM pets INNER JOIN pet_types ON pet_type_id = pet_types.id WHERE adoption_status = ${adoptionStatus};`;
  getPets(res, queryString);
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

app.get("/api/v1/pets", (req, res) => {
  getPetsByAdoptionStatus(res)
})

app.get("/api/v1/past-pets", (req, res) => {
  getPetsByAdoptionStatus(res, 'TRUE')
})

app.get("/api/v1/pets/:petName", (req, res) => {
  const queryString = `SELECT pets.id, name, pet_img_url, age, vaccination_status, adoption_story, adoption_status, ` + 
    `classification, type, breed FROM pets INNER JOIN pet_types ON pet_type_id = pet_types.id WHERE name = '${req.params.petName}'`;
  getPets(res, queryString);
})


app.post('/api/v1/adoption-application', (req, res) => {
  const adoptionValues = Object.values(req.body);
  adoptionValues[4] = parseInt(adoptionValues[4]);
  adoptionValues.push('pending');
  const queryString = "INSERT INTO adoption_applications (name, phone_number, email, home_status, pet_id, application_status) VALUES ($1, $2, $3, $4, $5, $6)";
  pool
    .query(queryString, adoptionValues)
    .then(result => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.post('/api/v1/surrender-application', (req, res) => {
  const surrenderValues = Object.values(req.body);
  const age = [surrenderValues.pop(),surrenderValues.pop()]
  surrenderValues.push('pending');
  surrenderValues.push(`${age.shift()}|${age.pop()}`);
  const queryString = "INSERT INTO surrender_applications (name, phone_number, email, pet_name, pet_type_id, pet_img_url, vaccination_status, description, adoption_story, application_status, pet_age) " + 
                      "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
  pool
    .query(queryString, surrenderValues)
    .then(result => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

// Express routes
const routes = ['/', '/pets', '/pets/:name', '/past-pets', '/classification/:classification', '/type/:type', '/breed/:breed', '/grouping/:type', '/adopt', '/surrender', '/employees', '/review-adoptions', '/review-surrenders']
routes.forEach(route => {
  app.get(route, (req,res) => {
    res.render("home")
  })
})

app.get('*/*', (req,res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app 
