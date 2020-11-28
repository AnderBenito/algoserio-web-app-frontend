export default interface State<T> {
	data?: T;
	isLoading: boolean;
	error?: boolean;
}
