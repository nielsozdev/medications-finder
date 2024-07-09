export const generalSelectors = {
  searchButtonSelector: 'button[name="btn_consultar1"]',
  selectEstablishmentsSelector: '[name="param3"]',
  selectSituationsSelector: '[name="param4"]',
  selectCategoriesSelector: '[name="param5"]',
  resultsSelector: '#tresultados',
  totalPagesSelector: '#tresultados thead:last-child tr td a:nth-last-child(2)',
  totalRowsInEstablishmentSelector: '#tresultados thead:last-child tr td b:first-child',
  tableHeadSelector: '#tresultados thead:nth-child(1)',
  tableColumnsSelector: '#tresultados thead:first-child tr:last-child td',
  tableRowsSelector: '#tresultados tbody tr',
  modalContainerSelector: '[aria-describedby="dDetalle"]',
  modalSelector: '[id="dDetalle"]',
  modalButtonOpenSelector: '#tresultados tbody tr td div:nth-child(1)',
  modalButtonCloseSelector: '[aria-describedby="dDetalle"] button[title="Close"]',
  modalResultsSelector: '#dDetalle table tbody',
  filedLegalRepresentativeSelector: '#dDetalle #trlegal table tbody tr td',
  fieldRegisterLocationSelector: '#dDetalle table tbody input#p3',
  fieldActivitySelector: '#dDetalle #tactividad table tbody tr td',
  fieldProductTypeSelector: '#dDetalle #ttipoproducto table tbody tr td',
  fieldStaffSelector: '#dDetalle #tpersonal table tbody tr td',
}

export const selectors = {
  ...generalSelectors,
}

export type Selectors = typeof selectors
