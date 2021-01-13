const { DataTypes } = require('sequelize');
const sq = require('../Config/connection.js')

const BookModel = sq.define('Books', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author:{
    type : DataTypes.STRING,
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
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  borrowed_date :{
      type: DataTypes.DATE
  },
  returned_date :{
      type: DataTypes.DATE
  }

});


BookModel.sync({alter:true})

module.exports = BookModel;

// |id              | SERIAL   | PRIMARY KEY            |
// | author         | VARCHAR  | NOT NULL               |
// | title          | VARCHAR  | NOT NULL               |
// | borrowed_name  | VARCHAR  |                        |
// | published_year | INT      |                        |
// | is_returned    | BOOL     | NOT NULL DEFAULT FALSE |
// | borrowed_date  | DATE     |                        |
// | returned_date  | DATE     |