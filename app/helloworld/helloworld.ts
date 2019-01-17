import {HelloworldService} from './helloworld.service';
declare var $:any;
export class Helloworld {
    static onLoad():void {
    var data= HelloworldService.GetData().then(web=> {
        $("#spanTitle").text(web.Title);
    });
    }
}
// call the Helloworld on load method
Helloworld.onLoad();