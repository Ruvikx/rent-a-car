# Funcionalidad eliminar coche

Una de las funcionalidades que tengo que implementar es impedir que se elimine un coche si tiene reservas asociadas, es decir, que alguno de sus días esté en rojo(se pinta rojo cuando clicas sobre él y se deshace el cambio volviendo a clicar).

Actualmente, esto ya está resuelto con el código que se encuentra en la línea 166 del archivo app.js. Pero al hacer pruebas con varios coches he detectado que al seleccionar cualquier día de cualquier coche se está pintando a rojo ese día pero en el caledario del primer coche. He comprovado que esto se debe a que todos id's de los días se están repitiendo en todos los calendarios del resto de coches. P.E.: El día 1 de marzo tiene el id="calendarioDia1Marzo", el dia 2 tiene el id="calendarioDia2Marzo", y así sucesivamente. Es decir, para un coche, todos los días tienen id's distintos. El problema es que al crear más coches se están repitiendo estos id's.

Lo que se me ha ocurrido es añadirle alguna cosa más a los id's para que tengan algo exclusivo que les identifique con un solo coche. He intentado añadirle un contador (mat) al final de cada id y que vaya incrementando a medida que pasan los días. P.E.: El día 1 de marzo tiene el id="calendarioDia1Marzo1",  el dia 2 tiene el id="calendarioDia2Marzo2", y así sucesivamente con la esperanza de que para el siguiente coche, el día 1 de marzo tuviera el id="calendarioDia1Marzo71", pero el contador se está reseteando con cada coche y estoy en las mismas.

La línea donde creo el elemento día es la 65 del archivo app.js y "mat" es el contador que he creado. He intentado que la variable sea global pero, o no funciona, o no se hacerla global.

# Funcionalidad eliminar modelo

El funcionamiento es el mismo que el de eliminar coche lo que, en vez de eliminar un sólo coche, elimina todos los coches de ese modelo. La funcionalidad que le tengo que aportar yo es que impida eliminar cualquier coche del modelo seleccionado si hay, al menos, un coche de ese modelo con alguna reserva. Es decir, basta con que haya un solo coche con reserva para impedir que se eliminen el resto de coches(el coche con reserva incluido).

Ahora mismo la funcionalidad de eliminar modelo está eliminando un solo coche(da igual el modelo) cada vez que se llama a esta función. La verdad es que no entiendo el código de la función.(Línea 553 del archivo app.js)

