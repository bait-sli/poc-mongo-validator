import { Model } from "mongoose";

//Transaction is not yet finished
export const TransactionalContext = (model: Model<any>) => {
	return (
		target: Object,
		key: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		//const session = await model.startSession();
		let originalMethod = descriptor.value;
		descriptor.value = (...args: any[]) => {
			try {
				let result = originalMethod.apply(this, args);
				return result;
			} catch (error) {
				return error;
			}
		};
	};
};
