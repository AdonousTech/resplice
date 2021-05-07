import { RespliceAWSBaseDataQueryObject } from 'packages/resplice-data/dist/types';
import { RespliceAWSDataRequestStrategy } from './RespliceAWSDataRequestStrategy';
import { RespliceAWSDDBQueryCommandInputs } from './RespliceAWSDDBQueryCommandInputs';

// see Mapped Types https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
export class RespliceAWSDDBQueryObject<RespliceAWSDDBQueryCommandInputs> extends RespliceAWSBaseDataQueryObject {

    payload: RespliceAWSDDBQueryCommandInputs;
    strategy: RespliceAWSDataRequestStrategy;

    constructor(payload: RespliceAWSDDBQueryCommandInputs) {
                             super()
                             this.payload = payload;
                         }
}