import NumberSchema from "./NumberSchema.js"

export default class validator{
    number(){
        return new NumberSchema();
    }
}