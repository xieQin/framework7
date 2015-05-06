define(["js/list/listView", "js/contactModel"], function(ListView, Contact) {

	var bindings = [{
		element: '.swipeout',
		event: 'deleted',
		handler: itemDeleted
	}];

	function init() {
		var contacts = loadContacts();
		ListView.render({ model: contacts, bindings: bindings });
	}

	function loadContacts() {
		var f7Base = localStorage.getItem("f7Base");
		var contacts = f7Base ? JSON.parse(f7Base) : tempInitializeStorage();
		return contacts;
	}

	function tempInitializeStorage() {
		var contacts = [
			new Contact({id: "1", firstName: "Person1", lastName: "Name1", phone: "13000000001" }),
			new Contact({id: "2", firstName: "Person2", lastName: "Name2", phone: "13000000002" }),
			new Contact({id: "3", firstName: "Person3", lastName: "Name2", phone: "13000000003" }),
			new Contact({id: "4", firstName: "Person4", lastName: "Name2", phone: "13000000004" }),
			new Contact({id: "5", firstName: "Person5", lastName: "Name2", phone: "13000000005" }),
			new Contact({id: "6", firstName: "Person6", lastName: "Name2", phone: "13000000006" })
		];
		localStorage.setItem("f7Base", JSON.stringify(contacts));
		return JSON.parse(localStorage.getItem("f7Base"));
	}

	function itemDeleted(e) {
		var id = e.srcElement.id;
		var contacts = JSON.parse(localStorage.getItem("f7Base"));
		for (var i = 0; i < contacts.length; i++) {
			if (contacts[i].id === id) {
				contacts.splice(i, 1);
			}
		}
		localStorage.setItem("f7Base", JSON.stringify(contacts));
	}

	return {
		init: init
	};
});