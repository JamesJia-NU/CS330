function validate() {
	var response = document.forms['contact_form']['yourgmail'].value;
	var length = response.length;
	var lastWord = response.slice(length - 10, length);

	if (lastWord == '@gmail.com' || lastWord == '@GMAIL.COM') {
		alert('Thank you!');
	} else {
		alert("Your gmail must end with '@gmail.com'");
	}
}
