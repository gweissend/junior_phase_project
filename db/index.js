const conn = require('./conn')
const School = require('./School')
const Student = require('./Student')

const map = (model, data) => data.map(value => model.create(value))

// School.hasMany(Student, { foreignKey: 'studentId' })
School.hasMany(Student);
Student.belongsTo(School);

const syncAndSeed = async() => {
    await conn.sync({force: true})
    const students = [
        {firstName: "Larry", lastName: "Weissend", email: "larry.weissend@gmail.com", GPA: 4.0},
        {firstName: "Johnny", lastName: "Weissend", email: "johnny.weissend@gmail.com", GPA: 3.0},
        {firstName: "Lisa", lastName: "Hernandaz", email: "lisa.hernandaz@gmail.com", GPA: 3.5},
        {firstName: "Joquel", lastName: "Monish", email: "joquel.monish@gmail.com", GPA: 3.8}
    ]
    const [Larry, Johnny, Lisa, Joquel] = await Promise.all(students.map(student => Student.create(student)))
    const schools = [
        {name: "J-Sarge Community College", imageURL: "http://reynolds.edu/images/reynolds-logo.png"}, 
        {name: "Virginia Tech", imageURL: "https://hokiesports.com/images/2018/5/30/985008a20d057564bbccef5cb24628c7.jpg"},
        {name: "UVA", imageURL: "https://news.virginia.edu/sites/default/files/days_on_the_lawn_ss_05_header.jpg"}
    ]
    
    const [ J_Sarge, Virginia, UVA ] = await Promise.all(schools.map(school => School.create(school)))
}

//syncAndSeed()

module.exports = {
    syncAndSeed,
    models: {
        Student,
        School
    }
}
