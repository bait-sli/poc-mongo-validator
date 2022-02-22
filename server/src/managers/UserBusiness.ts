import { User, UserModel } from "../data/models/UserDto";
import { TransactionalContext } from "../data/TransactionDecorator";
import BaseBusiness from "./BaseBusiness";

export default class UserBusiness extends BaseBusiness<User> {
	constructor() {
		super(UserModel);
	}

	//@TransactionalContext(UserModel)
	async update(data: User): Promise<User> {
		return super.update(data);
	}

	//@TransactionalContext(UserModel)
	async create(data: User): Promise<User> {
		return super.create(data);
	}

	async find(filter: any): Promise<User[]> {
		return super.find(filter);
	}
}
