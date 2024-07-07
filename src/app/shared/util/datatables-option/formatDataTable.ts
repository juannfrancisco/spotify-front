export function FormatDataTableGlobal() : any {

    return {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [],
      destroy:true,
      dom: 'lfrtipB', //lfrtipB, lfrtip, lrtip, rtip, Bfrtip
        language: {
          lengthMenu: "Mostrar _MENU_ entradas",
          info: "Mostrar _START_ de _END_ de _TOTAL_ entradas",
          search: 'Buscar:',
          searchPlaceholder: 'Ingrese información...',
          paginate: {
            first: '<<',
            previous: '<<',
            next: '>>',
            last: '>>',
          },
          buttons: {
            print: "Imprimir",
            excel: "Excel",
            copy: "Copiar",
          },
        },

        buttons: [
          'copy',
          'print',
          'excel',
        ]
      };
}

export function FormatDataTableGlobaLengthMenu() : any {

  return {
    pagingType: 'full_numbers',
    pageLength: 5,
    order: [],
    destroy:true,
    lengthChange: true,
    lengthMenu: [[10, 25, 50, -1],[10, 25, 50, 'All']],
    dom: 'lrtip', //lfrtipB, lfrtip, lrtip, rtip, Bfrtip
      language: {
        lengthMenu: "Mostrar _MENU_ entradas",
        search: 'Buscar:',
        searchPlaceholder: 'Ingrese información...',
        paginate: {
          first: '<<',
          previous: '<<',
          next: '>>',
          last: '>>',
        }
      }
    };

}

export function FormatDataTableScroll() : any {
  return {
    pagingType: 'full_numbers',
    pageLength: 10,
    order: [],
    destroy:true,
    scrollY: true,
    scrollCollapse: true,
    scrollX: true,
    fixedColumns:   {
      leftColumns: 2,
      rightColumns: 0, 
    },
    dom: 'Bfrtip',
      language: {
        search: 'Buscar:',
        searchPlaceholder: 'Ingrese información...',
        paginate: {
          first: '<<',
          previous: '<<',
          next: '>>',
          last: '>>',
        }
      },
      buttons: [

      ]
    };

}
 


