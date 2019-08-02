<?

$result = mail("doublemarder@gmail.com", "Anketa saita", "С сайта была получена Анкета с такими данными: \nИмя $_POST[name], \nпочта $_POST[email] \n $_POST[message]");

if ($result) {
	echo "<p>true</p>";
}else {
	echo "not";
}
?>