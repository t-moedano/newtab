/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/src/js/app.js":
/*!***************************!*\
  !*** ./app/src/js/app.js ***!
  \***************************/
/***/ (() => {

eval("const calcular = document.getElementById('calcular');\n\nfunction imc () {\n    const nome = document.getElementById('nome').value;\n    const altura = document.getElementById('altura').value;\n    const peso = document.getElementById('peso').value;\n    const resultado = document.getElementById('resultado');\n\n    if (nome !== '' && altura !== '' && peso !== '') {\n\n        const valorIMC = (peso / (altura * altura)).toFixed(1);\n\n        let classificacao = '';\n\n        if (valorIMC < 18.5){\n            classificacao = 'abaixo do peso.';\n        }else if (valorIMC < 25) {\n            classificacao = 'com peso ideal. Parabéns!!!';\n        }else if (valorIMC < 30){\n            classificacao = 'levemente acima do peso.';\n        }else if (valorIMC < 35){\n            classificacao = 'com obesidade grau I.';\n        }else if (valorIMC < 40){\n            classificacao = 'com obesidade grau II';\n        }else {\n            classificacao = 'com obesidade grau III. Cuidado!!';\n        }\n\n        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;\n        \n    }else {\n        resultado.textContent = 'Preencha todos os campos!!!';\n    }\n\n}\n\ncalcular.addEventListener('click', imc);\n\n//# sourceURL=webpack://newtab-imc/./app/src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/src/js/app.js"]();
/******/ 	
/******/ })()
;