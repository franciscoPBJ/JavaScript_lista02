let data = window.prompt("Informe a data. Ex: 10/04/2019");

let separado = data.split("/");

function Mes(n) {

	switch (n) {
		case 1:
			return "Janeiro";
			break;
		case 2:
			return "Fevereiro";
			break;
		case 3:
			return "Março";
			break;
		case 4:
			return "Abril";
			break;
		case 5:
			return "maio";
			break;
		case 6:
			return "junho";
			break;
		case 7:
			return "Julho";
			break;
		case 8:
			return "Agosto";
			break;
		case 9:
			return "Setembro";
			break;
		case 10:
			return "Outubro";
			break;
		case 11:
			return "Novembro";
			break;
		case 12:
			return "Dezembro";
			break;
		default:
			return "Inválido";
			break;
	}

}


window.alert(`${separado[0]} de ${Mes(Number.parseInt(separado[1]))} de ${separado[2]}`);