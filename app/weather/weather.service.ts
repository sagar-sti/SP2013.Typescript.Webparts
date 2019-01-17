import pnp from '@pnp/pnpjs';
 export class WeatherService {
    constructor() {
    }
    static GetData():Promise<any> {
        return pnp.sp.web.get();
    }
}
