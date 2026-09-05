/** Estadística destacable de la agrupación (p. ej. presentaciones, municipios). */
export interface Statistic {
  id: string;
  /** Texto descriptivo, p. ej. 'Presentaciones'. */
  label: string;
  value: number;
  /** Sufijo opcional para mostrar junto al valor, p. ej. '+' o 'k'. */
  suffix?: string;
}
