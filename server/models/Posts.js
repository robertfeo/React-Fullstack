//  Clasa posts reprezinta un tabel in baza de date

//  O functie anonima care creaza modelul pentru a avea access la el in alte fisiere prin intermediul exportului
//  Se poate exporta o variabila, functie sau un obiect

//  cei 2 parametrii sunt prelucrati de "sequelize"
module.exports = (sequelize, DataTypes) => {

    //  Variabila asta reprezinta modelul
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Posts;
}