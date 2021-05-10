const tables = document.querySelectorAll('.js-adaptive-table');
tables.forEach((table) => {
  let trs = table.querySelectorAll('tr');
  let tds_length = trs[0].children.length;
  let tbody = table.querySelector('tbody');

  while (--tds_length >= 0) {
    let tr = document.createElement('tr');

    trs.forEach((tds) => {
      tr.insertAdjacentElement('beforeend', tds.children[tds_length].cloneNode(true));
    });

    tr.classList.add('adaptive-tr');
    tbody.insertAdjacentElement('afterbegin', tr);
  }
});