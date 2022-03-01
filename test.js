const { API } = require('./dist/index');
(async () => {
    const api = new API(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNDkiLCJuYmYiOjE2NDU3NDUzODAsImV4cCI6MTY0ODMzNzM4MCwiaWF0IjoxNjQ1NzQ1MzgwfQ.olbs8OSb-8NW_ZWQagUXOCReH-wcnry8jTL9qtPQi1A'
    );

    console.log(await api.Anime.Random(2));
})();
