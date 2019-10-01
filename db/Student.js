const conn = require('./conn');
const { Sequelize } = conn;
const {UUID, UUIDV4, STRING, DECIMAL } = Sequelize



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

const Student = conn.define('student',{
    id: defineId,
    firstName: defineName,
    lastName: defineName,
    email: {
        type: STRING,
        unqiue: true,
        allowNull: false
    },
    GPA: {
        type: DECIMAL,
        allowNull: false
    },
})



module.exports = Student; 