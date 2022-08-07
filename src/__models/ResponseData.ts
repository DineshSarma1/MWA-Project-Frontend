export class ResponseData {
    payload: any;
    message: string;
    success: boolean;
    constructor() {
        this.payload = null;
        this.message = "";
        this.success = false;
    }
}