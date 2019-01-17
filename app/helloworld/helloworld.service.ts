import pnp from '@pnp/pnpjs';
 export class HelloworldService {
    constructor() {
    }
    static GetData():Promise<any> {
        return pnp.sp.web.get();
    }
}
