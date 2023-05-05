export const getCurp = ({
    name,
    fatherLastName,
    motherLastName,
    day,
    month,
    year,
    genre,
    state,
}) => {
    const arrCurp = [];

    name = name.toUpperCase();
    fatherLastName = fatherLastName.toUpperCase();
    motherLastName = motherLastName.toUpperCase();

    const { 
        vowels: vowelsFatherLastName, 
        consonants: consonantsFatherLastName 
    } = separateLetters(fatherLastName);

    const {
        consonants: consonantsMotherLastName,
    } = separateLetters(motherLastName);

    const {
        consonants: consonantsName,
    } = separateLetters(name);

    // Sección de Apellido paterno, materno y nombre
    arrCurp.push(consonantsFatherLastName.substring(0, 1)); // First father last name consonant
    arrCurp.push(vowelsFatherLastName.substring(0, 1)); // First father last name vowel
    arrCurp.push(motherLastName.substring(0, 1)); // First letter mother last name
    arrCurp.push(name.substring(0, 1)); // First letter name

    // Sección de fecha de nacimiento
    arrCurp.push(year.substring(2));
    arrCurp.push(month);
    arrCurp.push(day);

    // Sección de genero
    arrCurp.push(genre); // Tiene que recibir H o M

    // Sección de estado
    arrCurp.push(state);

    arrCurp.push(detectFirstConsonantNoInitial(
        fatherLastName,
        consonantsFatherLastName
    )); // Segunda consonante del apellido paterno
    arrCurp.push(detectFirstConsonantNoInitial(
        motherLastName,
        consonantsMotherLastName
    )); // Segunda consonante del apellido materno
    arrCurp.push(detectFirstConsonantNoInitial(
        name,
        consonantsName
    )); // Segunda consonante del nombre

    arrCurp.push(year.substring(0, 2) === '19' ? '0' : 'A');

    // Ultimo paso para obtener digitos verificadores
    const curpTemp = arrCurp.join("").toUpperCase();
    arrCurp.push(ultdig(curpTemp))

    return arrCurp.join("").toUpperCase();
};

function tabla(i, x ){
    if(i >= '0' && i<= '9') return x-48;
    else if (i>= 'A' && i<= 'N') return x-55;
    else if (i>= 'O' && i<= 'Z') return x-54;
    else return 0;
}

const ultdig = ( curp ) => {
    var i, c, dv = 0;
    //en este punto, la variable curp tiene todo excepto el ultimo digito verificador
    //ejemplo: JIRA0302024MVZMVNA
	for(i=0; i<curp.length; i++) 
	{
		c=tabla(curp.charAt(i), curp.charCodeAt(i));
		dv += c * (18-i);
	}
	dv%=10;
	return dv==0?0:10-dv;
}

const detectFirstConsonantNoInitial = (name, consonants) => {
    return name.substring(0, 1) === consonants.substring(0, 1) ? 
    consonants.substring(1, 2) :
    consonants.substring(0, 1);
}

const separateLetters = (str) => {
    let vowels = "";
    let consonants = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if ("aeiou".includes(letter)) {
            vowels += letter;
        } else if (letter >= "a" && letter <= "z") {
            consonants += letter;
        }
    }
    
    vowels = vowels.toUpperCase();
    consonants = consonants.toUpperCase();

    return { vowels, consonants };
}

export const getStates = () => {
    const states = [
        ['AGUASCALIENTES', 'AS'],
        ['BAJA CALIFORNIA SUR', 'BS'],
        ['COAHUILA', 'CL'],
        ['CHIAPAS', 'CS'],
        ['DISTRITO FEDERAL', 'DF'],
        ['GUANAJUATO', 'GT'], 
        ['HIDALGO', 'HG'],
        ['MÉXICO', 'MC'],
        ['MORELOS', 'MS'],
        ['NUEVO LEÓN', 'NL'],
        ['PUEBLA', 'PL'],
        ['QUINTANA ROO', 'QR'],
        ['SINALOA', 'SL'],
        ['TABASCO', 'TC'],
        ['TLAXCALA', 'TL'],
        ['YUCATÁN', 'YN'],
        ['NACIDO EN EL EXTRANJERO', 'NE'],
        ['BAJA CALIFORNIA', 'BC'],
        ['CAMPECHE', 'CC'],
        ['COLIMA', 'CM'],
        ['CHIHUAHUA', 'CH'],
        ['DURANGO', 'DG'],
        ['GUERRERO', 'GR'],
        ['JALISCO', 'JC'],
        ['MICHOACÁN', 'MN'],
        ['NAYARIT', 'NT'],
        ['OAXACA', 'OC'],
        ['QUERÉTARO', 'QT'],
        ['SAN LUIS POTOSÍ', 'SP'],
        ['SONORA', 'SR'],
        ['TAMAULIPAS', 'TS'],
        ['VERACRUZ', 'VZ'],
        ['ZACATECAS', 'ZS'],
    ];

    return  states.sort();
}

