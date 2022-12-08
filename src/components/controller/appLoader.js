import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e14ed9e9c42940b09bfe68dfc19f1fcd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
