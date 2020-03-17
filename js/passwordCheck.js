function PasswordChecker(wrapperId, passwordInputFieldId, passwordSubmitButtonId) {

    //following are attributes which could be seen as "constants"
    this.successClass = "success";
    this.warningClass = "warning";
    this.errorClass = "error";

    this.minLength = 8; //this is what we defined and what we need to consider in our length check

    //this attributes are set with our constructor
    this.wrapperField = document.getElementById(wrapperId);
    this.passwordField = document.getElementById(passwordInputFieldId);
    this.passwordSubmitButton = document.getElementById(passwordSubmitButtonId);


    var that = this; //a trick because this is a keyword and means different things in a new context! Especially when you work with events or if you call functions outside your class "this" won't mean you!

    //TODO start
    //now for the events which should fire:
    //if we leave the password field (focus is lost) - JavaScript Method "onblur" for an input field in our case the field this.passwordField
    // var passwordField = document.getElementById("passwordWrapper");

    /*this.passwordField.addEventListener("onblur", function () {

    })*/
    //this.passwordField.onblur();
    //this.passwordField.addEventListener('blur', onblur);


    //if we leave the password field (focus is lost) - JavaScript Method "onblur" for an input field in our case the field this.passwordField
    document.getElementById("password").onblur = function() {
        onblur()
    };
    //if we enter the password field (focus is set) - JavaScript Method "onfocus" for an input field - again in our case the field this.passwordField
    this.passwordField.onfocus = function () {
        onfocus()
    };

    //if we are in the password field an enter text - JavaScript Method "onkeyup" or "onkeup" - again in our case the field this.passwordField
    this.passwordField.onkeyup = function () {
        onkeyup();
    };

    //if we try to click the submit button - JavaScript Method "onclick" - in our case this.passwordSubmitButton
    this.passwordSubmitButton.onclick = function () {
        onclick();
    };

    function onfocus() {
        console.log("onfocus");
    };
    function onblur() {
        console.log("onBlur");
    };
    function onkeyup() {
        alert("Input field on key up.");
    };
    function onclick() {
        alert("Input field on click.");
        that.check();
    };
    /* Ich hoffe ich habe die Aufgabe einigermaßen richtig erfüllt. Ich bin zugegebenerweise ein wenig überforder gewesen und hoffe,
    dass es zumindest einigermaßen so aussehen soll. Habe zuvor mit EventListener probiert aber hat nicht wie gewünscht funktioniert,
    Bei einer falschen Umsetzung meinerseits bitte ich um eine kurze Musterlösung falls die smöglich ist.
     */


    //TODO end

    this.check = function() {
        //we can only check if every field which with given Id exists
        //one of them would be null if one Id wouldn't exist therefore following statement would fail
        if(this.wrapperField && this.passwordField && this.passwordSubmitButton) {

            var longEnough = this.checkForLength();
            var hasSpecialChars = this.checkForSpecialCharacters();

            //if it is long enough and has a special character - everything is fine
            if(longEnough && hasSpecialChars) {
                this.wrapperField.className = this.successClass;
                this.passwordSubmitButton.disabled = false;
            } else if(!hasSpecialChars && longEnough) { //if it is long enough but it has no special character set class warning
                this.wrapperField.className = this.warningClass;
                this.passwordSubmitButton.disabled = true;
            } else { //if it is not long enough set class error
                this.wrapperField.className = this.errorClass;
                this.passwordSubmitButton.disabled = true;
            }


        } else {
            //obviously a field is null (we weren't able to find it)
            console.error("A Id given to PasswordChecker doesn't exist!");

            //one could improve this by telling the Developer which Id(s) are null...
        }
    };

    /*
    This method should return true if the length of passwordField value is greater or equal to this.minLength
     */
    this.checkForLength = function() {
        var längenVergleich = document.getElementById("password").value;
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (längenVergleich.length > 5){
            this.wrapperField.className = this.warningClass;
            //document.getElementsByClassName('error feedback').style.display = 'block';
            // gibt eine class error feedback aber habe es nicht geschafft diese darzustellen
            if (format.test(längenVergleich)){
                console.log("Passwort mit Sonderzeichen aber richtig lang");
                // gibt eine class="warning feedback noSpecialSigns" aber habe es nicht geschafft diese darzustellen
            }else{
                console.log("Passwort ohne Sonderzeichen und richtig lang");
                // gibt eine class="success feedback" aber habe es nicht geschafft diese darzustellen
            }
        } else {
            console.log("Passwort zu kurz");
            // gibt eine class error feedback aber habe es nicht geschafft diese darzustellen
        }

        /*Mir ist bewusst, dass es anderst erwünscht war mit einer eigenen Methode die nach Spcial characters überprüft.
        Ich hatte probleme mit der umsetztung und habe es mit dieser Methode geschafft.
         */

        //if (this.passwordField)
        //@todo
        //have a look at javascript string methods and properties
        return true; //this needs to be replaced!
    };

    /*
    This method returns true if no special Character "!§$_.:,;" is found in this.password - otherwise false
     */
    this.checkForSpecialCharacters = function() {
        //@todo
        //have a look at javascript string methods and properties
        //you could probably "match" it somehow
        return true; //this needs to be replaced!
    };
}


