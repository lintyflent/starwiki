export class Service
{
    pages = ["people", "planets", "starships"];
    namesHeader = ["character", "planet", "starship"];
    _apiUrl = `https://swapi.dev/api/`;
    _imgUrl = 'https://starwars-visualguide.com/assets/img/';

    _getId = (url) =>
    {
        return url.match(/\/([0-9]*)\/$/)[1];
    }
    getResource = async (url) =>
    {
        const req = await fetch(`${this._apiUrl}${url}`);
        if (req.status === 404)
        {

        }

        if(req.ok === false)
        {
            throw new Error(`Could not fetch ${`${this._apiUrl}${url}`} received ${req.saltLength}`);
        }
        return await req.json();
    }


    GetAllPeople = async () =>
    {
        const res = await this.getResource(this.pages[0] + `/`);
        return res.results.map(this._transformPerson);
    }
    GetPerson = async (id) =>
    {
        const item = await this.getResource(this.pages[0] + `/${id}/`);
        return this._transformPerson(item);
    }
    _transformPerson = (person) =>
    {
        return {
            id: this._getId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            mass: person.mass,
            height: person.height
        }
    }
    GetImgPersonUrl = ({id}) =>
    {
        return this._imgUrl+"characters/"+id+".jpg";
    }
    GetImgPersonUrl2 = (id) =>
    {
        return this._imgUrl+"characters/"+id+".jpg";
    }

    GetAllPlanets = async () =>
    {
        const res = await this.getResource(this.pages[1] + `/`);
        return res.results.map(this._transformPlanet);
    }
    GetPlanet = async (id) =>
    {
        const item = await this.getResource(this.pages[1] + `/${id}/`);
        return this._transformPlanet(item);
    }
    _transformPlanet = (planet) =>
    {
        return {
            id: this._getId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain,
            surfaceWater: planet.surface_water
        }
    }
    GetImgPlanetUrl = ({id}) =>
    {
        return this._imgUrl + this.pages[1] + `/` + id + ".jpg";
    }
    GetImgPlanetUrl2 = (id) =>
    {
        return this._imgUrl + this.pages[1] + `/` + id + ".jpg";
    }


    GetAllStarships = async () =>
    {
        const res = await this.getResource( this.pages[2] + `/`);
        return res.results.map(this._transformStarship);
    }
    GetStarship = async (id) =>
    {
        const item = await this.getResource(this.pages[2] + `/${id}/`);
        return this._transformStarship(item);
    }
    _transformStarship = (item) =>
    {
        return {
            id: this._getId(item.url),
            name: item.name,
            model: item.model,
            starshipClass: item.starship_class,
            costInCredits: item.cost_in_credits,
            length: item.length,
            passengers: item.passengers,
            crew: item.crew,
            MGLT: item.MGLT
        }
    }
    GetImgStarshipUrl = ({id}) =>
    {
        return this._imgUrl + this.pages[2] + `/` + id + ".jpg";
    }
    GetImgStarshipUrl2 = (id) =>
    {
        return this._imgUrl + this.pages[2] + `/` + id +".jpg";
    }

    GetNewUrlImg = (className) =>
    {
        document.querySelector(className).src = "https://i.ibb.co/dMz5tpx/note404.jpg";
    }
}