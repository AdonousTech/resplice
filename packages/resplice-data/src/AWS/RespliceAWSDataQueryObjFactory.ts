import { RespliceAWSDDBQueryCommandInputs } from './RespliceAWSDDBQueryCommandInputs';
import { RespliceAWSBaseDataQueryObject } from './RespliceAWSBaseDataQueryObject';

export class RespliceAWSDataQueryObjFactory {
    static createDDBDataQueryObject(payload: RespliceAWSDDBQueryCommandInputs): RespliceAWSBaseDataQueryObject {

        let created: RespliceAWSBaseDataQueryObject;
        created = payload;

        return created;
    }
}