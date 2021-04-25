import { RespliceActorFactory } from "../RespliceActorFactory";
import { RespliceAzureActor } from "./RespliceAzureActor";

export class RespliceAWSActorFactory extends RespliceActorFactory {

    constructor() {
        super()
    }

    createActor(): RespliceAzureActor {
        //TODO: Implement
        return new RespliceAzureActor();
    }
}