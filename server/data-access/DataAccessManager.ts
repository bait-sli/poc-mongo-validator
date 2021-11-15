import * as mongoose from 'mongoose';
require('dotenv').config();


export default class DataAccessManager<T> {

    public TModel: mongoose.Model<T>;

    constructor(model: mongoose.Model<T>){
        this.TModel = model;
    }

    public async find(filter: any): Promise<T[]>{
        try {
            const results = await this.TModel.find(filter)
            return results
        } catch (error) {
            return error;
        }
    }

    public async create(data: T): Promise<T>{
        try {
            const dbRecord = new this.TModel(data)
            await dbRecord.save();
            return dbRecord
        } catch (error) {
            return error;
        }
    }

    public async update(data: T): Promise<any>{
        try {
            const dbRecord =  await this.TModel.updateOne({id: data["_id"]}, data, {runValidators: true});
            return dbRecord
        } catch (error) {
            return error;
        }
    }
}