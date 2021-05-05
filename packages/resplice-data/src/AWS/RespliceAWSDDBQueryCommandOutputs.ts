// See https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
import { PutItemCommandOutput,
         GetItemCommandOutput,
         UpdateItemCommandOutput,
         DeleteItemCommandOutput } from '@aws-sdk/client-dynamodb';

export type RespliceAWSDDBQueryCommandOutputs = {
    [key: string]: PutItemCommandOutput | 
                   GetItemCommandOutput |
                   UpdateItemCommandOutput |
                   DeleteItemCommandOutput 
}