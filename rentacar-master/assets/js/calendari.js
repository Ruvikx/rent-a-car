/**
 * Created by Henry on 04/04/2017.
 */

// Días de la semana
dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

// Meses
meses = ['Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octrubre', 'Noviembre', 'Diciembre'];

// Días que tiene cada mes
diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Fecha Actual
fechaActual = new Date();

//Constructor
function Calendario(mes, anyo) {
    this.mes = (isNaN(mes) || mes == null) ? fechaActual.getMonth() : mes;
    this.anyo = (isNaN(anyo) || anyo == null) ? fechaActual.getFullYear() : anyo;
    this.html = '';

}

// Función que crea el calendario en html
Calendario.prototype.generateHTML = function () {

// Obtengo el primer día del mes
    var primerDia = new Date(this.anyo, this.mes, 1);
    var diaInicio = primerDia.getDay();

// Indico el número de días que tiene el mes
    var longitudMes = diasMes[this.mes];

// Creo la cabezera del calendario(nombre del mes y días de la semana)
    var nombreMes = meses[this.mes]
    var html = '<div id=' + meses[this.mes] + '><table class="tablaCalendario">';
    html += '<tr><th colspan="7">';
    html += nombreMes + "&nbsp;";
    html += '</th></tr>';
    html += '<tr class="headerCalendario">';
    for (var i = 0; i <= 6; i++) {
        html += '<td class="headerDiaCalendario">';
        html += dias[i];
        html += '</td>';
    }
    html += '</tr><tr>';
    var numDia = 1;
    var dia = 1;
//Inserto los días
    for (var i = 0; i < 9; i++) {
        for (var j = 1; j <= 7; j++) {
            // html += "<td id='calendarioDia" + numDia + "' class='" + meses[this.mes] + "' onclick=pintarDia(calendarioDia" + numDia++ + "," + meses[this.mes] + ")>";
            html += "<td id='calendarioDia" + numDia + meses[this.mes] + "' onclick=pintarDia('calendarioDia" + numDia++ + meses[this.mes] + "')>";
            if (dia <= longitudMes && (i > 0 || j >= diaInicio)) {
                html += dia;
                dia++;
            }
            html += '</td>';
        }
        // Comprueba si quedan más días en el mes
        if (dia > longitudMes) {
            break;
        } else {
            html += '</tr><tr>';
        }
    }
    html += '</tr></table></div>';

    this.html = html;
}

// Función que proporciona el código html del calendario
Calendario.prototype.getHTML = function () {
    return this.html;
}

var clicks = 0;

// Función que pinta el día seleccionado dependiendo de si se hace o deshace una reserva
function pintarDia(idDia) {
    clicks += 1;
    var dia = document.getElementById(idDia);
    dia.style.backgroundColor = "white";

    if(clicks % 2 == 1){
        dia.style.backgroundColor = "red";
    }
    else{
        dia.style.backgroundColor = "white";
    }

    /*var dia = document.getElementById(idDia);
     dia.style.backgroundColor = "white";
     if (dia.style.backgroundColor == "white")
     dia.style.backgroundColor = "red";
     else {
     dia.style.backgroundColor = "white";
     }*/
}