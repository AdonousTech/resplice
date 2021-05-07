import { RespliceAWSDataRequestStrategy } from "./RespliceAWSDataRequestStrategy";
import { RespliceAWSDDBQueryCommandInputs } from "./RespliceAWSDDBQueryCommandInputs";

export class RespliceAWSBaseDataQueryObject {
    
    payload: RespliceAWSDDBQueryCommandInputs;
    strategy: RespliceAWSDataRequestStrategy;

    constructor(payload: RespliceAWSDDBQueryCommandInputs) {
                             this.payload = payload;
                         }
}