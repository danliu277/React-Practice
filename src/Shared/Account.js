class Account {
	int id;
	string username;
	string password;

	map(account) {
		this.id = account.id;
		this.username = account.username;
		this.password = account.password;
	}
}