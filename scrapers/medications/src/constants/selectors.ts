const genericMedications = {
  containerSelector: '#myTable',
  rowBodySelector: '#myTable > tbody > tr',
  rowHeaderSelector: '#myTable > thead > tr',
}

const locations = {
  DEPARTMENTS_SELECTOR: '#form1[name="form1"] #param7[name="param7"]',
  DISTRICTS_SELECTOR: '#form1[name="form1"] #param9[name="param9"]',
  PROVINCES_SELECTOR: '#form1[name="form1"] #param8[name="param8"]',
}

const medicationsResultsSelectors = {
  buttonNextPageSelector: 'ul.pagination li.page-item:last-child a.page-link[aria-label="Next"]',
  modalCellSelector: '.table-responsive tbody tr a',
  numberOfRegistersSelectSelector: '.table-responsive select.custom-select',
  resultsSelector: '.table-responsive',
  tableColumnsSelector: '.table-responsive thead td',
  tableRowsSelector: '.table-responsive tbody tr',
}

const medications = {
  buttonActionSelector: '.alinear button',
  departmentSelector: '[name="codigoDepartamento"]',
  districtSelector: '[name="codigoDistrito"]',
  inputNameMedicationSelector: '.autocomplete-container input',
  modalButtonSelector: '.modal-content .modal-footer button',
  provinceSelector: '[name="codigoProvincia"]',
  suggestionsSelector: '.autocomplete-container .suggestions-container.is-visible ul li',
  toastWarningSelector: '#toast-container .toast-warning',
  ...medicationsResultsSelectors,
}

export const selectors = {
  genericMedications,
  locations,
  medications,
}

export type DigemidSelectors = typeof medications
