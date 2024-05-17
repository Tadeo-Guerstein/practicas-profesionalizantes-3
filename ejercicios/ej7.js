/**
 * Tomando el desarrollo anterior. Tome el conjunto de resultados expresados en temperatura (ºC) y conviérta el conjunto en temperatura (ºF).
 */
const datosMetereologicos = [
  [
    { value: 42.4, month: 'Enero' },
    { value: 38.1, month: 'Febrero' },
    { value: 36.3, month: 'Marzo' },
    { value: 32.5, month: 'Abril' },
    { value: 27.4, month: 'Mayo' },
    { value: 22.2, month: 'Junio' },
    { value: 27.7, month: 'Julio' },
    { value: 24.7, month: 'Agosto' },
    { value: 28.8, month: 'Septiembre' },
    { value: 34.4, month: 'Octubre' },
    { value: 35.7, month: 'Noviembre' },
    { value: 39.4, month: 'Diciembre' },
    { value: 39.4, month: 'Anual' }
  ],
  [
    { value: 26.3, month: 'Enero' },
    { value: 25.8, month: 'Febrero' },
    { value: 23.7, month: 'Marzo' },
    { value: 20.5, month: 'Abril' },
    { value: 16.8, month: 'Mayo' },
    { value: 13.8, month: 'Junio' },
    { value: 13.1, month: 'Julio' },
    { value: 14.1, month: 'Agosto' },
    { value: 16.0, month: 'Septiembre' },
    { value: 18.5, month: 'Octubre' },
    { value: 21.7, month: 'Noviembre' },
    { value: 24.4, month: 'Diciembre' },
    { value: 19.6, month: 'Anual' }
  ],
  [
    { value: 20.3, month: 'Enero' },
    { value: 19.9, month: 'Febrero' },
    { value: 18.0, month: 'Marzo' },
    { value: 14.6, month: 'Abril' },
    { value: 11.3, month: 'Mayo' },
    { value: 8.5, month: 'Junio' },
    { value: 8.1, month: 'Julio' },
    { value: 8.9, month: 'aAosto' },
    { value: 10.5, month: 'Septiembre' },
    { value: 13.1, month: 'Octubre' },
    { value: 15.9, month: 'Noviembre' },
    { value: 18.5, month: 'Diciembre' },
    { value: 14.0, month: 'Anual' }
  ],
  [
    { value: 14.3, month: 'Enero' },
    { value: 14.1, month: 'Febrero' },
    { value: 12.5, month: 'Marzo' },
    { value: 9.1, month: 'Abril' },
    { value: 6.4, month: 'Mayo' },
    { value: 4.1, month: 'Junio' },
    { value: 3.8, month: 'Julio' },
    { value: 4.0, month: 'aAosto' },
    { value: 5.3, month: 'sSptiembre' },
    { value: 7.6, month: 'oOtubre' },
    { value: 10.1, month: 'Noviembre' },
    { value: 12.7, month: 'Diciembre' },
    { value: 8.7, month: 'Anual' }
  ],
  [
    { value: 4.7, month: 'Enero' },
    { value: 1.2, month: 'Febrero' },
    { value: 1.9, month: 'Marzo' },
    { value: -1.0, month: 'Abril' },
    { value: -3.0, month: 'Mayo' },
    { value: -5.5, month: 'Junio' },
    { value: -9.3, month: 'Julio' },
    { value: -6.4, month: 'Agosto' },
    { value: -5.5, month: 'Septiembre' },
    { value: -3.0, month: 'Octubre' },
    { value: -2.0, month: 'Noviembre' },
    { value: -0.2, month: 'Diciembre' },
    { value: -9.3, month: 'Anual' }
  ],
  [
    { value: 100.1, month: 'Enero' },
    { value: 72.8, month: 'Febrero' },
    { value: 107.0, month: 'Marzo' },
    { value: 73.3, month: 'Abril' },
    { value: 73.5, month: 'Mayo' },
    { value: 54.9, month: 'Junio' },
    { value: 58.9, month: 'Julio' },
    { value: 64.0, month: 'aAosto' },
    { value: 56.4, month: 'sSptiembre' },
    { value: 83.4, month: 'oOtubre' },
    { value: 75.3, month: 'nNviembre' },
    { value: 104.0, month: 'Diciembre' },
    { value: 923.0, month: 'Anual' }
  ],
  [
    { value: 9, month: 'Enero' },
    { value: 8, month: 'Febrero' },
    { value: 9, month: 'Marzo' },
    { value: 9, month: 'Abril' },
    { value: 9, month: 'Mayo' },
    { value: 9, month: 'Junio' },
    { value: 9, month: 'Julio' },
    { value: 8, month: 'aAosto' },
    { value: 7, month: 'sSptiembre' },
    { value: 10, month: 'Octubre' },
    { value: 10, month: 'Noviembre' },
    { value: 10, month: 'Diciembre' },
    { value: 107, month: 'Anual' }
  ],
  [
    { value: 288.3, month: 'Enero' },
    { value: 234.5, month: 'Febrero' },
    { value: 232.5, month: 'Marzo' },
    { value: 195.0, month: 'Abril' },
    { value: 167.4, month: 'Mayo' },
    { value: 120.0, month: 'Junio' },
    { value: 127.1, month: 'Julio' },
    { value: 164.3, month: 'Agosto' },
    { value: 174.0, month: 'Septiembre' },
    { value: 210.8, month: 'Octubre' },
    { value: 222.0, month: 'Noviembre' },
    { value: 269.7, month: 'Diciembre' },
    { value: 2405.6, month: 'Anual' }
  ],
  [
    { value: 76, month: 'Enero' },
    { value: 77, month: 'Febrero' },
    { value: 79, month: 'Marzo' },
    { value: 81, month: 'Abril' },
    { value: 83, month: 'Mayo' },
    { value: 84, month: 'Junio' },
    { value: 81, month: 'Julio' },
    { value: 81, month: 'Agosto' },
    { value: 80, month: 'Septiembre' },
    { value: 80, month: 'Octubre' },
    { value: 77, month: 'Noviembre' },
    { value: 76, month: 'Diciembre' },
    { value: 80, month: 'Anual' }
  ]
]

const celciusToFahrenheit = function (array) {
  array.forEach((i) => {
    // prettier-ignore
    i.farenheit = (i.value * (9 / 5)) + 32
  })
  return array
}

datosMetereologicos.forEach((i) => {
  console.info('farenheit', celciusToFahrenheit(i))
})
