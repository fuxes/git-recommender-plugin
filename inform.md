Trabajo Final Aprendizajengrande
===========================
Autor: Becerra, Carlos Martín
Aprendizaje automático sobre grande volúmenes de datos - famaf, 2015


#Introducción
Bueno cuestión que en este trabajo final la idea era aplicar los conceptos vistos en la materia. 

En primer lugar aprendiendo conceptos básicos de hadoop mediante la instalación y la configuración de un nodo multi instancia. Esto salió como trompada giratoria. Bastante rápido.

Luego, la segunda parte del trabajo final se implementa un plugin para un browser, a elección, que funcione como interfaz que permita interactuar mediante una API con el proyecto git recommender visto en la cátedra. Esta API fue desarrollada por Pablo Duboue (el profesor) específicamente para este trabajo.
Al finalizar el trabajo, todo el código desarrollado será liberado a la comunidad open source a modo de contribución con el proyecto, ya libre, git-recommender.

Finalmente, luego de observar en funcionamiento el plugin, analizar posibles cambios posibles a la función de distancia del git-recommender y se efectuará un cambio sencillo.

A continuación se detalla todo lo que se realizó para que el plugin andara, se adjuntan capturas de pantalla y también se hace un análisis del cambio efectuado.

#Git Recommender
Este proyecto es un de los casos de estudio que se presentaron en la materia, se puede ver en el siguiente link [https://github.com/DrDub/gitrecommender](https://github.com/DrDub/gitrecommender). Este proyecto recomienda archivos de un repositorio git basado en commits anteriores de los autores de los archivos de interés.   

Para poder ser utilizado por la extensión de Chrome, el profesor de la cátedra desarrolló una interfaz para la aplicación especialmente para este trabajo. Esta se encuentra documentada a continuación.

###API Demo Server
#### Get recommendations
Obtener las recomendaciones propuestas para un listado de archivos.
```
POST /recommend
```
**Input**
| Name| Type | Description |
| :- | :- | :- |
| `repository` | `string` | **Required.** The `clone_url` of the desired repository provided by github. |
| `files`    | `array`   | **Required.** A list of file `paths` from the repository.|

**Ejemplo**
```
{  
   "repository": "https://github.com/apache/mahout.git",
   "files": [  
      "master/math/src/main/java/org/apache/mahout/math/flavor/MatrixFlavor.java",
      "master/math/src/main/java/org/apache/mahout/math/random/IndianBuffet.java",
      "master/math/src/main/java/org/apache/mahout/math/random/PoissonSampler.java"
   ]
}
```
**Respuesta**
```
{  
   "recommendation":[  
      {  
         "file":"examples/src/main/resources/donut.csv",
         "score":10000
      },
      {  
         "file":"math/src/main/java/org/apache/mahout/math/random/Sampler.java",
         "score":10000
      },
      ...
      {  
         "file":"core/src/main/java/org/apache/mahout/ep/package.html",
         "score":10000
      }
   ]
}
```


#Git Recommender Chrome Extension
En esta sección se explica cuales fueron los pasos para crear la extensión para Chrome y las diferentes dificultades que se presentaron a medida que el proyecto avanzaba.  
El código implementado para la extensión se puede encontrar en [https://github.com/fuxes/git-recommender-plugin](https://github.com/fuxes/git-recommender-plugin) y toda la información utilizada se puede encontrar en la documentación propia de Google en [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions).

##Implementación
Las extensiones son programas que modifican y agregan funcionalidad al explorador Chrome. Están escritas en HTML, JavaScript y CSS. En esta implementación se utilizó el framework [AngularJS](https://angularjs.org/) para simplificar el proceso de desarrollo.  
Se 


#Propuesta para Git Recommender
Después de utilizar la extensión de Chrome, se considera la siguiente modificación a la función que calcula la distancia entre archivos...



