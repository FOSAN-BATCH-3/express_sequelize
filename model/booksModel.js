const { DataTypes } = require ('sequelize');
const sq = require ('../config/connection');

const ModelBooks = sq.define('books', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    borrowed_name: {
        type: DataTypes.STRING
    },
    published_year: {
        type: DataTypes.INTEGER
    },
    is_returned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    borrowed_date: {
        type: DataTypes.STRING
    },
    returned_date: {
        type: DataTypes.STRING
    },
});

ModelBooks.sync({alter:true});
module.exports = ModelBooks;
