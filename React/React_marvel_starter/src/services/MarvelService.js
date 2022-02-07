

class MarvelService {
    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) { // если в запросе пошло что-то не так, в консоль выкидываем ошибку
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharecters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?
        apikey=33b106e26ee93ee332a38915700a4d3b`);
    }
}
export default MarvelService;