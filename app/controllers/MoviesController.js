const Validator  = require('../../lib/validator/validator')
const axios      = require('axios')

exports.movies = (req, res) =>
{
    // Get movies genre
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US')
        .then(function (response) {
            // handle success
            res.render('app/movies', {genre: response.data.genres})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.tv = (req, res) =>
{
    // Get movies genre
    axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US')
        .then(function (response) {
            // handle success
            res.render('app/tv', {genre: response.data.genres})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.popular = (req, res) =>
{
    // Get movies genre
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US')
        .then(function (response) {
            // handle success
            res.render('app/popular', {genre: response.data.genres})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.top = (req, res) =>
{
    // Get movies genre
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US')
        .then(function (response) {
            // handle success
            res.render('app/top', {genre: response.data.genres})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.upcoming = (req, res) =>
{
    // Get movies genre
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US')
        .then(function (response) {
            // handle success
            res.render('app/upcoming', {genre: response.data.genres})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.moviesApi = (req, res) =>
{
    // Default Year (current year)
    var year = new Date().getFullYear();
    // Default Genre (all genres)
    var genres = [12,10751,16,10752]//[28,12,16,35,80,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37];
    // Default Sorting
    var sort_by = 'popularity.desc';
    // Default Page
    var page = 1;
    // Default Search
    var search = '';

    if (typeof req.query.year !== 'undefined') {
        year = req.query.year
    }

    if (typeof req.query.genres !== 'undefined') {
        genres = req.query.genres
    }

    if (typeof req.query.sort_by !== 'undefined') {
        sort_by = req.query.sort_by
    }

    if (typeof req.query.page !== 'undefined') {
        page = req.query.page
    }

    if (typeof req.query.search !== 'undefined') {
        search = req.query.search
    }

    // Convert genres array to string
    genres = genres.toString();
    genres = genres.split(',').join('|')

    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&sort_by='+sort_by+'&with_genres='+genres+'&primary_release_year='+year+'&include_adult=false&adult=false&include_video=false&page='+page+'&with_watch_monetization_types=flatrate';

    if (search !== '') 
    {
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&query='+search+'&page='+page+'&include_adult=false&adult=false'
    }

    axios.get(url)
        .then(function (response) {
            // handle success
            res.render('app/movies-ajax', {data: response.data.results});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.popularApi = (req, res) =>
{
    // Default Year (current year)
    var year = '';//new Date().getFullYear();
    // Default Genre (all genres)
    var genres = [28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37];
    // Default Sorting
    var sort_by = 'popularity.asc';
    // Default Page
    var page = 1;
    // Default Search
    var search = '';

    if (typeof req.query.year !== 'undefined') {
        year = req.query.year
    }

    if (typeof req.query.genres !== 'undefined') {
        genres = req.query.genres
    }

    if (typeof req.query.sort_by !== 'undefined') {
        sort_by = req.query.sort_by
    }

    if (typeof req.query.page !== 'undefined') {
        page = req.query.page
    }

    if (typeof req.query.search !== 'undefined') {
        search = req.query.search
    }

    // Convert genres array to string
    genres = genres.toString();
    genres = genres.split(',').join('|')

    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&sort_by='+sort_by+'&with_genres='+genres+'&primary_release_year='+year+'&include_adult=false&adult=false&include_video=false&page='+page+'&with_watch_monetization_types=flatrate';

    if (search !== '') 
    {
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&query='+search+'&page='+page+'&include_adult=false&adult=false'
    }

    axios.get(url)
        .then(function (response) {
            // handle success
            res.render('app/popular-ajax', {data: response.data.results});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.topApi = (req, res) =>
{
    // Default Year (current year)
    var year = '';//new Date().getFullYear();
    // Default Genre (all genres)
    var genres = [28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37];
    // Default Sorting
    var sort_by = 'popularity.asc';
    // Default Page
    var page = 1;
    // Default Search
    var search = '';

    if (typeof req.query.year !== 'undefined') {
        year = req.query.year
    }

    if (typeof req.query.genres !== 'undefined') {
        genres = req.query.genres
    }

    if (typeof req.query.sort_by !== 'undefined') {
        sort_by = req.query.sort_by
    }

    if (typeof req.query.page !== 'undefined') {
        page = req.query.page
    }

    if (typeof req.query.search !== 'undefined') {
        search = req.query.search
    }

    // Convert genres array to string
    genres = genres.toString();
    genres = genres.split(',').join('|')

    var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&sort_by='+sort_by+'&with_genres='+genres+'&primary_release_year='+year+'&include_adult=false&adult=false&include_video=false&page='+page+'&with_watch_monetization_types=flatrate';

    if (search !== '') 
    {
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&query='+search+'&page='+page+'&include_adult=false&adult=false'
    }

    axios.get(url)
        .then(function (response) {
            // handle success
            res.render('app/top-ajax', {data: response.data.results});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.upcomingApi = (req, res) =>
{
    // Default Year (current year)
    var year = new Date().getFullYear();
    // Default Genre (all genres)
    var genres = [28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37];
    // Default Sorting
    var sort_by = 'popularity.desc';
    // Default Page
    var page = 1;
    // Default Search
    var search = '';

    if (typeof req.query.year !== 'undefined') {
        year = req.query.year
    }

    if (typeof req.query.genres !== 'undefined') {
        genres = req.query.genres
    }

    if (typeof req.query.sort_by !== 'undefined') {
        sort_by = req.query.sort_by
    }

    if (typeof req.query.page !== 'undefined') {
        page = req.query.page
    }

    if (typeof req.query.search !== 'undefined') {
        search = req.query.search
    }

    // Convert genres array to string
    genres = genres.toString();
    genres = genres.split(',').join('|')

    var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&sort_by='+sort_by+'&with_genres='+genres+'&primary_release_year='+year+'&include_adult=false&adult=false&include_video=false&page='+page+'&with_watch_monetization_types=flatrate';

    if (search !== '') 
    {
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&query='+search+'&page='+page+'&include_adult=false&adult=false'
    }

    axios.get(url)
        .then(function (response) {
            // handle success
            res.render('app/upcoming-ajax', {data: response.data.results});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.tvApi = (req, res) =>
{
    // Default Year (current year)
    var year = new Date().getFullYear();
    // Default Genre (all genres)
    var genres = [28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37];
    // Default Sorting
    var sort_by = 'popularity.desc';
    // Default Page
    var page = 1;
    // Default Search
    var search = '';

    if (typeof req.query.year !== 'undefined') {
        year = req.query.year
    }

    if (typeof req.query.genres !== 'undefined') {
        genres = req.query.genres
    }

    if (typeof req.query.sort_by !== 'undefined') {
        sort_by = req.query.sort_by
    }

    if (typeof req.query.page !== 'undefined') {
        page = req.query.page
    }

    if (typeof req.query.search !== 'undefined') {
        search = req.query.search
    }

    // Convert genres array to string
    genres = genres.toString();
    genres = genres.split(',').join('|')

    var url = 'https://api.themoviedb.org/3/discover/tv?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&sort_by='+sort_by+'&with_genres='+genres+'&primary_release_year='+year+'&include_adult=false&adult=false&include_video=false&page='+page+'&with_watch_monetization_types=flatrate';

    if (search !== '') 
    {
        var url = 'https://api.themoviedb.org/3/search/tv?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US&query='+search+'&page='+page+'&include_adult=false&adult=false'
    }

    axios.get(url)
        .then(function (response) {
            // handle success
            res.render('app/tv-ajax', {data: response.data.results});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.previewMovie = (req, res) =>
{
    var movie_id = req.params.id;
    var url = 'https://api.themoviedb.org/3/movie/'+movie_id+'?api_key=e18d5fbe1b2cacaae460cad583eda96b&append_to_response=videos&include_adult=false&adult=false';
    
    axios.get(url)
        .then(function (response) {
            // handle success
            var movie_id = response.data.id;
            var title = response.data.title;
            var original_title = response.data.original_title;
            var genres = response.data.genres;
            var release_date = response.data.release_date;
            var overview = response.data.overview;
            var poster_path = response.data.poster_path;
            
            if(response.data.belongs_to_collection != null){
                var poster_path2  = response.data.belongs_to_collection.poster_path;
                var backdrop_path = response.data.belongs_to_collection.backdrop_path;
            }else{
                var poster_path2  = null;
                var backdrop_path = null;
            }
            
            var tagline = response.data.tagline;
            var runtime = response.data.runtime;
            var vote_average = response.data.vote_average.toFixed(1);
            var homepage = response.data.homepage;
            
            if(response.data.spoken_languages != null){
                var spoken_languages = response.data.spoken_languages;
            }else{
                var spoken_languages = null;
            }

            var revenue = response.data.revenue;
            var status = response.data.status;
            var budget = response.data.budget;

            res.render('app/preview-movie', {
                movie_id, movie_id,
                title: title,
                original_title: original_title,
                genres: genres,
                release_date: release_date,
                overview: overview,
                poster_path: poster_path,
                poster_path2: poster_path2,
                backdrop_path: backdrop_path,
                tagline: tagline,
                runtime, runtime,
                vote_average, vote_average,
                homepage, homepage,
                spoken_languages, spoken_languages,
                revenue, revenue,
                status, status,
                budget, budget,
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.previewTv = (req, res) =>
{
    var tv_id = req.params.id;
    var url = 'https://api.themoviedb.org/3/tv/'+tv_id+'?api_key=e18d5fbe1b2cacaae460cad583eda96b&append_to_response=videos&include_adult=false&adult=false';
    
    axios.get(url)
        .then(function (response) {
            // handle success
            var tv_id = response.data.id;
            var title = response.data.name;
            var original_title = response.data.original_name;
            var genres = response.data.genres;
            var release_date = response.data.first_air_date;
            var overview = response.data.overview;
            var poster_path = response.data.poster_path;
            
            if(response.data.belongs_to_collection != null){
                var poster_path2  = response.data.belongs_to_collection.poster_path;
                var backdrop_path = response.data.belongs_to_collection.backdrop_path;
            }else{
                var poster_path2  = null;
                var backdrop_path = null;
            }
            
            var tagline = response.data.tagline;
            var runtime = response.data.runtime;
            var vote_average = response.data.vote_average.toFixed(1);
            var homepage = response.data.homepage;
            
            if(response.data.spoken_languages != null){
                var spoken_languages = response.data.spoken_languages;
            }else{
                var spoken_languages = null;
            }

            var status = response.data.status;
            var seasons = response.data.number_of_seasons;
            var episodes = response.data.number_of_episodes;

            res.render('app/preview-tv', {
                tv_id, tv_id,
                title: title,
                original_title: original_title,
                genres: genres,
                release_date: release_date,
                overview: overview,
                poster_path: poster_path,
                poster_path2: poster_path2,
                backdrop_path: backdrop_path,
                tagline: tagline,
                runtime, runtime,
                vote_average, vote_average,
                homepage, homepage,
                spoken_languages, spoken_languages,
                seasons, seasons,
                status, status,
                episodes, episodes,
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}


exports.trailer = (req, res) =>
{
    var id   = req.params.id;
    var type = req.params.type;

    var url = 'https://api.themoviedb.org/3/'+type+'/'+id+'/videos?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US';
    
    axios.get(url)
        .then(function (response) {
            res.render('app/trailer', {data: response.data.results})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.crew = (req, res) =>
{
    var id = req.params.id;
    var type = req.params.type;

    var url = 'https://api.themoviedb.org/3/'+type+'/'+id+'/credits?api_key=e18d5fbe1b2cacaae460cad583eda96b&language=en-US';
    
    axios.get(url)
        .then(function (response) {
            res.render('app/crew', {data: response.data.cast})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });
}

exports.addToWishlist = (req, res) =>
{
    var wish = req.params.id

    // Check if session already exists
    if(req.session.wish){
        // Check if array includes the value or not
        if(!req.session.wish.includes(wish)){
            // Push / Add value to the session array
            req.session.wish.push(wish)
            res.send('added to your list');
        }else{
            res.send('This movie is already in your list');
        }
    }else{
        // Create new session array
        req.session.wish = [wish];
        res.send('added to your list');
    }
}

exports.about = (req, res) =>
{
    res.render('app/about');
}

exports.contact = (req, res) =>
{
    res.render('app/contact');
}