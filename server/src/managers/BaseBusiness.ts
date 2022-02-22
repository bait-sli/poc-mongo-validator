import { Model } from "mongoose";
import DataAccessManager from "../data/DataHandler";

export default class BaseBusiness<Dto> {
	public model: Model<Dto>;
	protected dbContext: DataAccessManager<Dto>;

	constructor(model: Model<Dto>) {
		this.model = model;
		this.dbContext = new DataAccessManager<Dto>(model);
	}

	async find(filter: any): Promise<Dto[]> {
		return this.dbContext.find(filter);
	}
	async update(data: Dto): Promise<Dto> {
		return this.dbContext.update(data);
	}

	async create(data: Dto): Promise<Dto> {
		return this.dbContext.create(data);
	}
}
