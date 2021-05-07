import { RespliceAWSDDBQueryCommandInputs } from './RespliceAWSDDBQueryCommandInputs';
import { RespliceAWSBaseDataQueryObject } from './RespliceAWSBaseDataQueryObject';
import { RespliceAWSDataRequestStrategy } from './RespliceAWSDataRequestStrategy';

export class RespliceAWSDataQueryObjFactory {
    static createDDBDataQueryObject(payload: RespliceAWSDDBQueryCommandInputs,
                                    strategy: RespliceAWSDataRequestStrategy): RespliceAWSBaseDataQueryObject {

        let created: RespliceAWSBaseDataQueryObject;
        created.payload = payload;
        created.strategy = strategy;

        return created;
    }
}