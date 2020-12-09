$('button').click(function(){
    var text = $('#input').val();
    var selected = $('select').val();
    var result = '';
    switch(selected){
        case 'number': 
            result = onlyNumber(text);
            break;
        case 'alphabets': 
            result = onlyAlphabets(text);
            break;
        case 'alphanumeric': 
            result = alphanumeric(text);
            break;
        case 'password': 
            result = password(text);
            break;
        case 'typical_name': 
            result = person_name(text);
            break;
        case 'email': 
            result = email(text);
            break;
        // case 'contact_number':
        //     result = contact_number(text);
        //     break;
        case 'street':
            result = street(text);
            break;
        case 'city_state_country':
            result = city_state_country(text);
            break;
        case 'acct_number':
            result = acct_number(text);
            break;
        case 'credit_card_number':
            result = credit_card_number(text);
            break;
        case 'credit_card_type':
            result = credit_card_type(text);
            break;
        case 'CVVorCVC':
            result = CVVorCVC(text);
            break;
        case 'alphabets_spaces':
            result = alphabets_spaces(text);
            break;
        case 'number_spaces':
            result = number_spaces(text);
            break;
        case 'alphanumericspace':
            result = alphanumericspace(text);
            break;
    }
    $('span').html(result == true ? '<font color="green">TRUE</font>' : '<font color="crimson">FALSE</font>')
})

// -------------- Testubes ----------------

var removeAllWhiteSpace = (sample) =>{
    return sample.toString().replace(/[- ]/g,'');
}

var onlyNumber = (sample) =>{
    // returns false if input is not a number 
    return /^([0-9]+)$/.test(sample);
}

var onlyAlphabets = (sample) =>{
  // returns false if input is not a string of alphabets
    return /^([A-Za-z]+)$/.test(sample);
}

var alphanumeric = (sample) =>{
  // returns false if string contains anything other than alphabets or numbers
    return /^([a-zA-Z0-9]+)$/.test(sample);
}

var password = (sample) =>{
/*
    May contain letter and numbers
    May contain blank space
		Must contain at least 1 number and 1 letter
		May contain any of these characters: ._@#$%
		Must have atleast 8 characters
*/
    return /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z ._@#$%]{8,}$/.test(sample);
}

var typical_name = (sample) =>{
/*
    Must be atleast 3 characters
    May contain blank spaces
    May contain "." (Dot) symbol only
*/
    return /^([a-zA-Z.\s]+){3,}$/.test(sample.trim());
}

var email = (sample) =>{
/*  Pursuit of a valid email address  */
    return /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(sample);
}

var street = (sample) =>{
/* 
    Must contain atleast 1 alphabet
    May contain alphabets and numbers 
    May contain special symbols such as ._-,#
    May contain blank spaces
*/
    return /^(?=.*[A-Za-z])[A-Za-z0-9 .,#/_-]{3,50}$/.test(sample);
}

var city_state_country = (sample) => {
/* 
    Must contain atleast 1 alphabet
    Must not contain numbers 
    May contain blank spaces
*/
     return /^(?=.*[A-Za-z])[A-Za-z ]{3,50}$/.test(sample);
}

var acct_number = (sample) => {
/* 
    Must contain atleast 1 alphabet
    Must contain atleast 1 number
    Must not contain any special symbol or blank space
*/
    return /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z]{9,18}$/.test(sample);
}

var credit_card_type = (sample) => {
    var cardWorld = {
        mc: "Mastercard",
        ec: "Eurocard",
        vi: "Visa",
        ax: "American Express",
        dc: "Diners Club",
        bl: "Carte Blanch",
        di: "Discover",
        jcb: "JCB",
        er: "Enroute"
    }
    var flag = false;
    for(var i in cardWorld){
        if(sample == i || sample == cardWorld[i]){
            flag = true;
            break;
        }
    }
    return flag;
}

var credit_card_number = (sample)=>{
    var cardinfo = {
        'mc':'5[1-5][0-9]{14}',
        'ec':'5[1-5][0-9]{14}',
        'vi':'4(?:[0-9]{12}|[0-9]{15})',
        'ax':'3[47][0-9]{13}',
        'dc':'3(?:0[0-5][0-9]{11}|[68][0-9]{12})',
        'bl':'3(?:0[0-5][0-9]{11}|[68][0-9]{12})',
        'di':'6011[0-9]{12}',
        'jcb':'(?:3[0-9]{15}|(2131|1800)[0-9]{11})',
        'er':'2(?:014|149)[0-9]{11}'
    }
    var card_type = prompt("Enter card type:\n\nMastercard: mc \nEurocard: ec \nVisa: vi\nAmerican Express: ax\nDiners Club: dc\nCarte Blanch: bl\nDiscover: di\nJCB: jcb\nEnroute: er\n\n Enter the short form like: vi for Visa");
    sample = String(sample).replace(/[- ]/g,''); //ignore dashes and whitespaces

    var results = [];
    if(card_type){
        var expr = '^' + cardinfo[card_type.toLowerCase()] + '$';
        return expr ? !!sample.match(expr) : false; // boolean
    }
    else
      return false;

    for(var p in cardinfo){
        if(sample.match('^' + cardinfo[p] + '$')){
           results.push(p);
        }
    }
    return results.length ? results.join('|') : false; // String | boolean
}

var CVVorCVC = (sample) =>{
    var cardType = prompt("Enter card type:\n\nMastercard: mc \nEurocard: ec \nVisa: vi\nAmerican Express: ax\nDiners Club: dc\nCarte Blanch: bl\nDiscover: di\nJCB: jcb\nEnroute: er\n\n Enter the short form like: vi for Visa");
    var _length;
    switch (cardType.toLowerCase()){
        case 'mc':
        case 'ec':
        case 'vi':
        case 'di':
        case 'dc':
        case 'jcb':
        case 'er':
        case 'bl':
          _length = 3;
          break;
        case 'ax':
          _length = 4;
          break;
    }
    if(/^([0-9]+)$/.test(sample)){
        if(sample.toString().length == _length)
            return true;
    }
    return false;
}

// Takes only alphabets and spaces
var alphabets_spaces = (sample)=>{
    /* 
      Must contain atleast 1 alphabet
      Must not contain numbers or special symbols
      May contain blank spaces
    */
     return /^(?=.*[A-Za-z])[A-Za-z ]{1,}$/.test(sample);
}

// Takes only numbers and spaces
var number_spaces = (sample)=>{
    /* 
      Must contain atleast 1 number
      Must not contain alphabets or symbols
      May contain blank spaces
    */
     return /^(?=.*[0-9])[0-9 ]{1,}$/.test(sample);
}

var alphanumericspace = (sample) =>{
  // returns false if string contains anything other than alphabets or numbers or spaces
    return /^([a-zA-Z0-9\s]+)$/.test(sample);
}

var custom = (sample, flags = {}, regexFlag = "") => {
        /*
        allows = { // Optional
            alphabets: {
               uppercase: true, // default
               lowercase: true  // default
            },
            numbers: {
               range: '0-9' // default
            },
            spaces: true,    // default
            symbols: '-_,.', // default, exapmle: '-_,' 
            str_length: {
                min: 1,  // default
                max: ""  // default
            } 
        }

        regexFlag: Uses validation uses RegExp. this is the flag of the function: new RegExp('pattern', regexFlag); // Optional
        */
        var alpha = "", //"a-zA-Z",
            nums = "", //"0-9",
            symbols = "", //"-_,.",
            spaces = "",
            minlngth = 1,
            maxlngth = "";
        if(flags.str_length){
           if(flags.str_length.min)
              minlngth = parseInt(flags.str_length.min);
           if(flags.str_length.max)
              maxlngth = parseInt(flags.str_length.max);
        }
      
        if(flags.alphabets){
           if(!flags.alphabets.lowercase)
              alpha += '';
           else
              alpha += 'a-z';
           if(!flags.alphabets.uppercase)
              alpha += '';
           else
              alpha += 'A-Z'
        }else{
            if(flags.alphabets == false)
                alpha = '';
            else
                alpha = 'a-zA-Z'
        }
      
        if( flags.numbers ){
            if(flags.numbers.range)
              nums = flags.numbers.range
        }else{
            if(flags.numbers === false)
                nums = "";
            else
                nums = '0-9';
        }
      
        if( flags.spaces === undefined || flags.spaces == true ){
           spaces = " ";
        }else{
           spaces = "";
        }
      
        if(flags.symbols)
          symbols = flags.symbols.toString();
        else
          symbols = ""

        var str = '^['+alpha+nums+spaces+symbols+']{'+minlngth+','+maxlngth+'}$'
        var pattern = new RegExp(str,regexFlag)
        return pattern.test(sample);
    }