const Sequelize = require('sequelize');
const dbName = 'acmeSchools';
const db = new Sequelize(process.env.DATABASE_URL || `postgres:localhost/${dbName}`);

const Students = db.define('student', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  firstName: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    // validate: {
    //   isEmail: true
    // }
  },
  GPA: {
    type: Sequelize.FLOAT
  }
})

const Schools = db.define('schools', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  }
})

Schools.hasMany(Students)

//SEED DATA
syncAndSeed = async() => {
  await db.sync({force:true})
  await studentsSeed.map((student) => {
    Students.create(student)
  })
  await schoolsSeed.map((school) => {
    Schools.create(school)
  })
}

const studentsSeed = [
  {firstName: 'Bob', lastName: 'Ross', email: 'chillwithbob@nature.net', GPA: 3.0},
  {firstName: 'Will', lastName: 'Wheaton', email: 'yellowshirt@enterprise.com', GPA: 3.5},
  {firstName: 'Anikan', lastName: 'Skywalker', email: 'podfanatic@race.net', GPA: 2.3},
  {firstName: 'Neil-deGrase', lastName: 'tyson', email: 'universe@nowhere.com', GPA: 3.4},
  {firstName: 'Carl', lastName: 'Sagan', email: 'space@nowhere.com', GPA: 3.6}
];

const schoolsSeed = [
  {name:'Space Academy', image:'https://vignette.wikia.nocookie.net/memoryalpha/images/1/18/Starfleet_Academy_logo_2368.png/revision/latest?cb=20060912110311&path-prefix=en'},
  {name:'Pratt Institure', image:'https://cdn-payscale.com/content/school_logos/Pratt%20Institute_200px.png'},
  {name:'Le Cordon Bleu', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pMw9Sru_aQUy2Rg8tdh_NjSaeW1aBVYxcU0earWX17MPuhNU'}
]

module.exports = {
  models: {
    Students,
    Schools
  },
  syncAndSeed,
  studentsSeed,
  schoolsSeed
}
