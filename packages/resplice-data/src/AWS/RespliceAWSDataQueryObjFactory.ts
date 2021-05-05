import { RespliceBaseDataQueryObject } from "../RespliceBaseDataQueryObject";
import { RespliceDataQueryObjectFactory } from "../RespliceDataQueryObjectFactory";
import { RespliceAWSDDBQueryObject } from './RespliceAWSDDBQueryObject';

export class RespliceAWSDataQueryObjFactory extends RespliceDataQueryObjectFactory {
    static createDataQueryObject(objectType: string): RespliceBaseDataQueryObject {

        let created: RespliceBaseDataQueryObject;

        switch (objectType) {
            case 'DynamoDB':
                created = new RespliceAWSDDBQueryObject();
                break;
            default:
                throw new Error(`Data query object type ${objectType} not implemented!`);
        }

        return created;

    }
}