import { Injectable, Inject } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { Http } from '@angular/http';


@Injectable()
export class HeroService {
    //public heroApi: Hero[]=[];
    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {//需要加上private，其他function才能用   
    }


    getHeroes(): Promise<Hero[]> {
        console.log("getHeroesss:start:" + this.baseUrl);
        //return Promise.resolve(HEROES);
        //return Promise.resolve(this.heroApi);
        //return this.http.get(this.baseUrl + 'api/SampleData/Heros').subscribe(result => {
        //    this.heroApi = result.json() as Hero[];

        //    console.log("constructor:result - " + JSON.stringify(result.json()));
        //    console.log("constructor:end");
        //}, error => console.error(error));


     
        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/SampleData/Heros').subscribe(result => {
                resolve(result.json() as Hero[])//有resolve表示執行完成
           }, error => console.error(error));
        });
    
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero | undefined> { //範例原本的只有<Hero>，會出錯
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}