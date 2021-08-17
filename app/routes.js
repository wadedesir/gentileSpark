module.exports = setupRoutes;

function setupRoutes(app){

    //load the homepage
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })
}