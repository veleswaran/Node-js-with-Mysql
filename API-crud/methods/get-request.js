module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.split("/")[3];
    console.log(id);
    const regexV4 = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i);

    if (req.url === "/app/movie") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(res.movies));
        res.end();
    } else if (!regexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                title: "Validation failed",
                message: "UUID is not valid"
            })
        );
    } else {
        let filteredMovie = req.movies.filter((movie) => {
            return movie.id === id;
        });

        if (filteredMovie.length > 0) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(filteredMovie));
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title: "Not found", message: "Movie not found" }));
        }

        res.end();
    }
}
