import {WeatherService} from './weather.service';
declare var $:any;
export class Weather {
    static onLoad():void {
    var data= WeatherService.GetData().then(web=> {
        $("#spanTitle").text(web.Title);
    });
    }
}
// call the weather on load method
Weather.onLoad();