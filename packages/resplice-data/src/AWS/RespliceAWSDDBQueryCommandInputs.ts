// See https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
import { PutItemCommandInput,
         GetItemCommandInput,
         UpdateItemCommandInput,
         DeleteItemCommandInput } from '@aws-sdk/client-dynamodb';

export type RespliceAWSDDBQueryCommandInputs = {
    [key: string]: PutItemCommandInput | 
                   GetItemCommandInput |
                   UpdateItemCommandInput |
                   DeleteItemCommandInput 
}