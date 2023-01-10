const MoviesController = require('../app/controllers/MoviesController')
const AuthController   = require('../app/controllers/AuthController')

module.exports = (app) => 
{
	app.get('/', MoviesController.movies)
	app.get('/tv', MoviesController.tv)
	app.get('/popular', MoviesController.popular)
	app.get('/top', MoviesController.top)
	app.get('/upcoming', MoviesController.upcoming)

	app.get('/movies/api', MoviesController.moviesApi)
	app.get('/popular/api', MoviesController.popularApi)
	app.get('/top/api', MoviesController.topApi)
	app.get('/upcoming/api', MoviesController.upcomingApi)
	app.get('/tv/api', MoviesController.tvApi)

	app.get('/preview/movie/:id', MoviesController.previewMovie)
	app.get('/preview/tv/:id', MoviesController.previewTv)
	app.get('/trailer/:id/:type', MoviesController.trailer)
	app.get('/crew/:id/:type', MoviesController.crew)
	app.post('/wishlist/:id', MoviesController.addToWishlist)
	
	app.get('/about', MoviesController.about)
	app.get('/contact', MoviesController.contact)

	app.get('/auth', AuthController.index)
}