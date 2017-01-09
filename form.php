<html>
	<head>
		<title>form analytics</title>
		<script src="jquery-3.1.1.js"></script>
	</head>
	<body>
		<form class="funnel">
			<h1>Form analytics test</h1>
			<fieldset>
				<label for="voornaam">Text</label><input type="text" name="text" id="text" tabindex="1" class="ng-is-valid ng-untouched ng-was-not-empty"><br>
				<label for="voornaam">Number</label><input type="number" name="number" id="number" tabindex="1" class="ng-is-valid ng-untouched ng-was-not-empty"><br>
				<label for="voornaam">Phone</label><input type="phone" name="phone" id="phone" tabindex="1" class="ng-is-valid ng-untouched ng-was-not-empty"><br>
				<label for="voornaam">Email</label><input type="email" name="email" id="email" tabindex="1" class="ng-is-valid ng-untouched ng-was-not-empty"><br>
			</fieldset>
			<fieldset>
				<label for="kaas">Kies een kaas</label>
				<select name="kaas" id="kaas" tabindex="2">
					<option value="1">Jonge kaas</option>
					<option value="2">Belegen kaas</option>
					<option value="3">Oude kaas</option>
				</select>
			</fieldset>
			<fieldset>
				<input type="radio" name="gender" id="male" value="male" tabindex="3"> <label for="male">Male</label><br>
				<input type="radio" name="gender" id="female" value="female"> <label for="female">Female</label><br>
				<input type="radio" name="gender" id="other" value="other"> <label for="other">Other</label><br>
			</fieldset>
			<fieldset>
				<input type="checkbox" name="vehicle" id="bike" value="Bike" tabindex="4"> <label for="bike">I have a bike</label><br>
				<input type="checkbox" name="vehicle" id="car" value="Car" checked> <label for="car">I have a car</label><br>
			</fieldset>
			<div>
				<input type="submit" value="verzenden" name="Submit">
			</div>
		</form>

		<script src="formanalytics_simo.js"></script>

	</body>
</html>
