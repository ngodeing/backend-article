import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('all_article',{
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    paragraph: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();