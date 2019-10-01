const conn = require('./conn');
const { Sequelize} = conn;
const { Student } = require('./Student')
const {UUID, UUIDV4, STRING, LIST } = Sequelize



const defineId = {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    unique: true
}

const defineName = {
    type: STRING,
    allowNull: false
}

const School = conn.define('school', {
    id: defineId,
    name: defineName,
    imageURL: {
        type: STRING,
        allowNull: false
    },
    studentIds: {
        type: STRING
    }
    // WHAT DATA TYPE CAN I REALLY HAVE HERE???
})



module.exports = School;