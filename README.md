#How It Works

#Query

There are two states in the movie search app that are core to its functionality.

The query for example as seen on line 31 in the movie search component. Takes the query selected by the user and sets it into query State.

It takes a query from the user by having an on-change event listener attached to the input box. Once anything changes within the input box the set query function is fired and sets the state of the Query.

#Movies

The second state "movies" is the data fetched from the movies DB. The API from the movie database has the query from the query state interpolated into it to get the necessary results. The entire SPA Is a form. The form has an onsubmit event listener attached to it allowing the searchMovies function to be fired interpolating the query into the API string and retrieving the Movie Database data and saving it into the movie state.# MovieSearchReVamped
